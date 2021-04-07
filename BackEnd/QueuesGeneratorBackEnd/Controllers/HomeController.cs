using DAL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicBackEnd.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly ClinicContext _clinicDbContext;
        private IConfiguration _configuration;

        public HomeController(ClinicContext clinicDbContext, IConfiguration configuration)
        {
            _clinicDbContext = clinicDbContext;
            _configuration = configuration;
        }


        [HttpGet("GetNavbarElements")]
        public IActionResult GetNavbarElements()
        {
            try
            {
                var all = _clinicDbContext.Navbar.Include(x=>x.Ability).OrderBy(x=>x.Order).Select(x=>new { Id = x.Id, Name=x.Name, Icon = x.Icon, ParentId = x.ParentId, LevelInMenu = x.LevelInMenu, AbilityId = x.AbilityId, Link = x.Ability.Url }).ToList();

                return Ok(new { message = new { Level0 = all.Where(x=>x.LevelInMenu == 0).ToList() , Level1 = all.Where(x=>x.LevelInMenu == 1).ToList()}, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }
    }
}
