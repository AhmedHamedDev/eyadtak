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
    public class AllergiesController : ControllerBase
    {

        private readonly ClinicContext _clinicDbContext;
        private IConfiguration _configuration;
        private static List<Allergie> Allergies;

        public AllergiesController(ClinicContext clinicDbContext, IConfiguration configuration)
        {
            _clinicDbContext = clinicDbContext;
            _configuration = configuration;

            if(Allergies == null)
                Allergies = _clinicDbContext.Allergies.ToList();
        }

        [HttpGet("GetAllergies")]
        public IActionResult GetAllergies([FromQuery] int Skip, [FromQuery] int Take)
        {
            try
            {
                bool IsReachEnd = false;
                List<Allergie> Allergies = null;
                int count = AllergiesController.Allergies.Count();

                if (count > Skip + Take)
                    Allergies = AllergiesController.Allergies.OrderByDescending(x => x.NumberOfUse).Skip(Skip).Take(Take).ToList();
                else if (count > Skip)
                {
                    Allergies = AllergiesController.Allergies.OrderByDescending(x => x.NumberOfUse).Skip(Skip).Take(Take).ToList();
                    IsReachEnd = true;
                }
                else
                    IsReachEnd = true;

                return Ok(new { message = Allergies?.Select(x => new { Name = x.Name, Id = x.AllergieId }).ToList(), IsReachEnd = IsReachEnd, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        [HttpGet("GetPatientAllergies/{id}")]
        public IActionResult GetPatientAllergies(int Id)
        {
            try
            {
                if (Id == 0)
                    return Ok(new { message = "Id can't be zero", ErrorHappen = true });

                var Allergies = _clinicDbContext.PatientHistoryAllergies.Include(x => x.Allergie).Include(x => x.PatientHistory).Where(x => x.PatientHistory.PatientId == Id).Select(x => new { Name = x.Allergie.Name, Id = x.AllergieId, Date = x.PatientHistory.InsertDate.ToString("dd/MM/yyyy") }).ToList();

                return Ok(new { message = Allergies, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        public static void AddAllergies(List<Allergie> allergies)
        {
            AllergiesController.Allergies.AddRange(allergies);
        }
    }
}
