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
    public class DiagnosesController : ControllerBase
    {

        private readonly EyadtakContext _eyadtakDbContext;
        private IConfiguration _configuration;
        private static List<Diagnosis> Diagnoses;

        public DiagnosesController(EyadtakContext eyadtakDbContext, IConfiguration configuration)
        {
            _eyadtakDbContext = eyadtakDbContext;
            _configuration = configuration;

            if(Diagnoses == null)
                Diagnoses = _eyadtakDbContext.Diagnoses.ToList();
        }

        [ServiceFilter(typeof(AuthorizedAbility))]
        [HttpGet("GetDiagnoses")]
        public IActionResult GetDiagnoses([FromQuery] int Skip, [FromQuery] int Take)
        {
            try
            {
                bool IsReachEnd = false;
                List<Diagnosis> Diagnoses = null;
                int count = DiagnosesController.Diagnoses.Count();

                if (count > Skip + Take)
                    Diagnoses = DiagnosesController.Diagnoses.OrderByDescending(x => x.NumberOfUse).Skip(Skip).Take(Take).ToList();
                else if (count > Skip)
                {
                    Diagnoses = DiagnosesController.Diagnoses.OrderByDescending(x => x.NumberOfUse).Skip(Skip).Take(Take).ToList();
                    IsReachEnd = true;
                }
                else
                    IsReachEnd = true;

                return Ok(new { message = Diagnoses?.Select(x => new { Name = x.Name, Id = x.DiagnosisId }).ToList(), IsReachEnd = IsReachEnd, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        [ServiceFilter(typeof(AuthorizedAbility))]
        [HttpGet("GetPatientDiagnoses/{id}")]
        public IActionResult GetPatientDiagnoses(int Id)
        {
            try
            {
                if (Id == 0)
                    return Ok(new { message = "Id can't be zero", ErrorHappen = true });

                var Diagnoses = _eyadtakDbContext.PatientHistoryDiagnoses.Include(x => x.Diagnosis).Include(x => x.PatientHistory).Where(x => x.PatientHistory.PatientId == Id).Select(x => new { Name = x.Diagnosis.Name, Id = x.DiagnosisId, Date = x.PatientHistory.InsertDate.ToString("dd/MM/yyyy") }).ToList();

                return Ok(new { message = Diagnoses, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        public static void AddDiagnoses(List<Diagnosis> diagnoses)
        {
            DiagnosesController.Diagnoses.AddRange(diagnoses);
        }
    }
}
