using DAL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Models.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicBackEnd.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SignsController : ControllerBase
    {

        private readonly ClinicContext _clinicDbContext;
        private IConfiguration _configuration;
        private static List<Sign> Signs;


        public SignsController(ClinicContext clinicDbContext, IConfiguration configuration)
        {
            _clinicDbContext = clinicDbContext;
            _configuration = configuration;

            Signs = _clinicDbContext.Signs.ToList();
        }

        [HttpGet("GetSigns")]
        public IActionResult GetSigns([FromQuery] int Skip, [FromQuery] int Take)
        {
            try
            {
                bool IsReachEnd = false;
                List<Sign> Signs = null;
                int count = SignsController.Signs.Count();

                if (count > Skip + Take)
                    Signs = SignsController.Signs.OrderByDescending(x => x.NumberOfUse).Skip(Skip).Take(Take).ToList();
                else if (count > Skip)
                {
                    Signs = SignsController.Signs.OrderByDescending(x => x.NumberOfUse).Skip(Skip).Take(Take).ToList();
                    IsReachEnd = true;
                }
                else
                    IsReachEnd = true;

                return Ok(new { message = Signs?.Select(x => new { Name = x.Name, Id = x.SignId }).ToList(), IsReachEnd = IsReachEnd, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        [HttpGet("GetPatientSigns/{id}")]
        public IActionResult GetPatientSigns(int Id)
        {
            try
            {
                if (Id == 0)
                    return Ok(new { message = "Id can't be zero", ErrorHappen = true });

                var Signs = _clinicDbContext.PatientHistorySigns.Include(x => x.Sign).Include(x => x.PatientHistory).Where(x => x.PatientHistory.PatientId == Id).Select(x => new { Name = x.Sign.Name, Id = x.SignId, Date = x.PatientHistory.InsertDate.ToString("dd/MM/yyyy") }).ToList();

                return Ok(new { message = Signs, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        public static void AddSigns(List<Sign> signs)
        {
            SignsController.Signs.AddRange(signs);
        }
    }
}
