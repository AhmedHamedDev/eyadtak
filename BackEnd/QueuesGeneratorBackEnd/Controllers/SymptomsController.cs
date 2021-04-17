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
    public class SymptomsController : ControllerBase
    {

        private readonly ClinicContext _clinicDbContext;
        private IConfiguration _configuration;

        public SymptomsController(ClinicContext clinicDbContext, IConfiguration configuration)
        {
            _clinicDbContext = clinicDbContext;
            _configuration = configuration;
        }

        [HttpGet("GetSymptoms")]
        public IActionResult GetSymptoms([FromQuery] int Skip, [FromQuery] int Take)
        {
            try
            {
                bool IsReachEnd = false;
                List<Symptom> Symptoms = null;
                int count = _clinicDbContext.Symptoms.Count();

                if (count > Skip + Take)
                    Symptoms = _clinicDbContext.Symptoms.OrderByDescending(x => x.NumberOfUse).Skip(Skip).Take(Take).ToList();
                else if (count > Skip)
                {
                    Symptoms = _clinicDbContext.Symptoms.OrderByDescending(x => x.NumberOfUse).Skip(Skip).Take(Take).ToList();
                    IsReachEnd = true;
                }
                else
                    IsReachEnd = true;

                return Ok(new { message = Symptoms?.Select(x => new { Name = x.Name, Id = x.SymptomId }).ToList(), IsReachEnd = IsReachEnd, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        [HttpGet("GetPatientSymptoms/{id}")]
        public IActionResult GetPatientSymptoms(int Id)
        {
            try
            {
                if (Id == 0)
                    return Ok(new { message = "Id can't be zero", ErrorHappen = true });

                var Symptoms = _clinicDbContext.PatientHistorySymptoms.Include(x => x.Symptom).Include(x => x.PatientHistory).Where(x => x.PatientHistory.PatientId == Id).Select(x => new { Name = x.Symptom.Name, Id = x.SymptomId, Date = x.PatientHistory.InsertDate.ToString("dd/MM/yyyy") }).ToList();

                return Ok(new { message = Symptoms, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }


        //[HttpPost("AddSymptom")]
        //public IActionResult AddSymptom([FromBody] string Name)
        //{
        //    try
        //    {
        //        if (string.IsNullOrWhiteSpace(Name))
        //        {
        //            return Ok(new { message = "Name Can't be Empty", ErrorHappen = true });
        //        }

        //        Symptom symptom = new Symptom() { Name = Name, NumberOfUse = 0 };

        //        _clinicDbContext.Symptoms.Add(symptom);

        //        return Ok(new { message = symptom.SymptomId, ErrorHappen = false });
        //    }
        //    catch (Exception e)
        //    {
        //        return Ok(new { message = "Something went wrong", ErrorHappen = true });
        //    }
        //}
    }
}
