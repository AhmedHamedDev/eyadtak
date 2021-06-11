using EyadtakBackEnd.Controllers;
using DAL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Models.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EyadtakBackEnd.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SymptomsController : ControllerBase
    {

        private readonly EyadtakContext _eyadtakDbContext;
        private IConfiguration _configuration;
        private static List<Symptom> Symptoms;

        public SymptomsController(EyadtakContext eyadtakDbContext, IConfiguration configuration)
        {
            _eyadtakDbContext = eyadtakDbContext;
            _configuration = configuration;

            if(Symptoms == null)
                Symptoms = _eyadtakDbContext.Symptoms.ToList();
        }

        [ServiceFilter(typeof(AuthorizedAbility))]
        [HttpGet("GetSymptoms")]
        public IActionResult GetSymptoms([FromQuery] int Skip, [FromQuery] int Take)
        {
            try
            {
                bool IsReachEnd = false;
                List<Symptom> Symptoms = null;
                int count = SymptomsController.Symptoms.Count();

                if (count > Skip + Take)
                    Symptoms = SymptomsController.Symptoms.OrderByDescending(x => x.NumberOfUse).Skip(Skip).Take(Take).ToList();
                else if (count > Skip)
                {
                    Symptoms = SymptomsController.Symptoms.OrderByDescending(x => x.NumberOfUse).Skip(Skip).Take(Take).ToList();
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

        [ServiceFilter(typeof(AuthorizedAbility))]
        [HttpGet("GetPatientSymptoms/{id}")]
        public IActionResult GetPatientSymptoms(int Id)
        {
            try
            {
                if (Id == 0)
                    return Ok(new { message = "Id can't be zero", ErrorHappen = true });

                var Symptoms = _eyadtakDbContext.PatientHistorySymptoms.Include(x => x.Symptom).Include(x => x.PatientHistory).Where(x => x.PatientHistory.PatientId == Id).Select(x => new { Name = x.Symptom.Name, Id = x.SymptomId, Date = x.PatientHistory.InsertDate.ToString("dd/MM/yyyy") }).ToList();

                return Ok(new { message = Symptoms, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        public static void AddSymptoms(List<Symptom> symptoms)
        {
            SymptomsController.Symptoms.AddRange(symptoms);
        }

    }
}
