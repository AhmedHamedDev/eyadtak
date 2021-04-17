using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DAL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Models.Domain;
using Models.DTO;
using Utilities.Contracts;
using Utilities.Supplies;

namespace ClientBackEnd.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly ClinicContext _clinicDbContext;
        private IJwt _jwt;
        private IEmail _email;
        private IConfiguration _configuration;

        public AccountController(ClinicContext clinicDbContext, IJwt jwt, IEmail email, IConfiguration configuration)
        {
            _clinicDbContext = clinicDbContext;
            _jwt = jwt;
            _email = email;
            _configuration = configuration;
        }

        [HttpGet("NotAuthoriced")]
        public IActionResult NotAuthoriced()
        {
            return Ok(new { message = "Not Authorized", ErrorHappen = true });
        }

        [HttpPost("Login")]
        public IActionResult Login([FromBody] UserLoginDTO userLoginDto)
        {
            try
            {
                User user = _clinicDbContext.Users.FirstOrDefault(x => x.UserEmail == userLoginDto.Email);

                if (user == null || Encription.Decrypt(user?.Password, "SecretCode_hamed") != userLoginDto.Password)
                {
                    return Ok(new { message = "Wrong Email or Password", ErrorHappen = true });
                }

                if (!user.Active)
                {
                    return Ok(new { message = "Your account is not active yet, please check your email", ErrorHappen = true });
                }

                List<int> abilitiesIds = _clinicDbContext.Users_Roles.Where(x => x.UserId == user.UserId).Include(x => x.Role).SelectMany(x => x.Role.Role_Ability).Select(x => x.Ability.AbilityId).ToList();
                string token = _jwt.GenerateToken(user.UserId);

                return Ok(new { Token = token, AbilitiesIds = abilitiesIds, userName = user.UserName, userEmail = user.UserEmail, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        [HttpPost("Register")]
        public IActionResult Register([FromBody] UserRegisterDTO userRegisterDto)
        {
            try
            {
                if (userRegisterDto.Password.Length < 5)
                {
                    return Ok(new { message = "Password can't be less than 5 char", ErrorHappen = true });
                }

                User userObj = _clinicDbContext.Users.FirstOrDefault(x => x.UserEmail == userRegisterDto.Email);

                if (userObj != null)
                {
                    return Ok(new { message = "This Email Already Exsist", ErrorHappen = true });
                }

                User user = new User()
                {
                    Password = Encription.Encrypt(userRegisterDto.Password, "SecretCode_hamed"),
                    UserName = userRegisterDto.Name,
                    UserEmail = userRegisterDto.Email,
                    Active = false,
                    RegisterDate = DateTime.Now,
                    RecoveryCode = -1,
                    PhoneNumber = userRegisterDto.PhoneNumber
                };

                user.User_Role = new List<User_Role>();
                user.User_Role.Add(new User_Role()
                {
                    RoleId = userRegisterDto.RoleId,
                    UserId = user.UserId
                });

                _clinicDbContext.Users.Add(user);
                _clinicDbContext.SaveChanges();

                //string token = _jwt.GenerateToken(user.UserId);
                //_email.SendAccountActivationEmail(user.UserEmail, _configuration.GetSection("Frontend:Url").Value + "/account/activate-account/?token=" + token);

                return Ok(new { message = "User Registerd Successfully", ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        [ServiceFilter(typeof(AuthorizedAbility))]
        [HttpGet("Logout")]
        public IActionResult Logout()
        {
            try
            {
                int userId = (int)this.HttpContext.Items["userId"];
                AuthorizedAbility.userAbilities.TryRemove(userId, out _);

                return Ok(new { message = "Logout done successfully", ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }


        [HttpGet("ActivateAccount")]
        public IActionResult ActivateAccount([FromQuery] string token)
        {
            try
            {
                if (!_jwt.ValidateCurrentToken(token))
                {
                    return Ok(new { message = "Token is not valid", ErrorHappen = true });
                }

                int userId = int.Parse(_jwt.GetId(token));
                User user = _clinicDbContext.Users.FirstOrDefault(x => x.UserId == userId);
                user.Active = true;
                _clinicDbContext.Users.Update(user);
                _clinicDbContext.SaveChanges();

                return Ok(new { message = "Activation done successfully", ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        [ServiceFilter(typeof(AuthorizedAbility))]
        [HttpPost("ChangePassword")]
        public IActionResult ChangePassword([FromBody] ChangePasswordDTO changePasswordDTO)
        {
            try
            {
                int userId = (int)this.HttpContext.Items["userId"];
                User userToChangeHisPassword = _clinicDbContext.Users.FirstOrDefault(x => x.UserId == userId);
                userToChangeHisPassword.Password = Encription.Decrypt(userToChangeHisPassword.Password, "SecretCode_hamed");

                if (userToChangeHisPassword.Password != changePasswordDTO.OldPassword)
                {
                    return Ok(new { message = "Old password is wrong", ErrorHappen = true });
                }

                if (changePasswordDTO.NewPassword.Length < 5)
                {
                    return Ok(new { message = "New password can't be less than 5 char", ErrorHappen = true });
                }

                userToChangeHisPassword.Password = Encription.Encrypt(changePasswordDTO.NewPassword, "SecretCode_hamed");
                _clinicDbContext.Users.Update(userToChangeHisPassword);
                _clinicDbContext.SaveChanges();

                return Ok(new { message = "Password Changed Successfully", ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        [HttpGet("SendForgetPasswordCode")]
        public ActionResult SendForgetPasswordCode([FromQuery] string Email)
        {
            try
            {
                var user = _clinicDbContext.Users.FirstOrDefault(s => s.UserEmail.ToLower().Trim() == Email.ToLower().Trim());
                if (user == null)
                {
                    return Ok(new { message = "Sorry this Email Does not Exsist", ErrorHappen = true });
                }

                int code = new Random().Next(5000, 50000);
                user.RecoveryCode = code;
                _clinicDbContext.SaveChanges();

                string token = _jwt.GenerateToken(user.UserId);
                _email.SendRecoveryPasswordEmail(user.UserEmail, code, _configuration.GetSection("Frontend:Url").Value + "/account/recover-password/?token=" + token);
                return Ok(new { message = "Message Sent Successfully, Please check your Email", ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        [HttpGet("RecoverPasswordValidateToken")]
        public ActionResult RecoverPasswordValidateToken([FromQuery] string token)
        {
            try
            {
                bool TokenIsValid = _jwt.ValidateCurrentToken(token);
                if (TokenIsValid)
                {
                    int userId = int.Parse(_jwt.GetId(token));
                    User user = _clinicDbContext.Users.FirstOrDefault(s => s.UserId == userId);

                    if(user != null)
                        return Ok(new { message = user.UserEmail, ErrorHappen = false });
                    else
                        return Ok(new { message = "There is no such user", ErrorHappen = true });
                }
                else
                {
                    return Ok(new { message = "Token is not valid", ErrorHappen = true });
                }
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }



        [HttpPost("RecoverPassword")]
        public ActionResult RecoverPassword([FromBody] RecoverPasswordDTO recoverPasswordDTO)
        {
            User user = _clinicDbContext.Users.FirstOrDefault(s => s.UserEmail == recoverPasswordDTO.UserEmail);
            if (user == null)
            {
                return Ok(new { message = "This Email does not Exsist", ErrorHappen = true });
            }
            if (user.RecoveryCode != recoverPasswordDTO.RecoveryCode)
            {
                return Ok(new { message = "This Code is not Correct", ErrorHappen = true });
            }
            if (recoverPasswordDTO.NewPassword.Length < 5)
            {
                return Ok(new { message = "Password Lenght can't be less than 5 char", ErrorHappen = true });
            }
            user.Password = Encription.Encrypt(recoverPasswordDTO.NewPassword, "SecretCode_hamed");
            user.RecoveryCode = -1;
            _clinicDbContext.Update(user);
            _clinicDbContext.SaveChanges();
            return Ok(new { message = "Password Changed Successfully", ErrorHappen = false });
        }
    }
}
