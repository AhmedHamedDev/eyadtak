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
    public class SignsController : ControllerBase
    {

        private readonly EyadtakContext _eyadtakDbContext;
        private IConfiguration _configuration;
        private static List<Sign> Signs;


        public SignsController(EyadtakContext eyadtakDbContext, IConfiguration configuration)
        {
            _eyadtakDbContext = eyadtakDbContext;
            _configuration = configuration;

            if (Signs == null)
                Signs = _eyadtakDbContext.Signs.ToList();
        }

        [ServiceFilter(typeof(AuthorizedAbility))]
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
                throw e;
            }
        }

        [ServiceFilter(typeof(AuthorizedAbility))]
        [HttpGet("GetPatientSigns/{id}")]
        public IActionResult GetPatientSigns(int Id)
        {
            try
            {
                if (Id == 0)
                    return Ok(new { message = "Id can't be zero", ErrorHappen = true });

                var Signs = _eyadtakDbContext.PatientHistorySigns.Include(x => x.Sign).Include(x => x.PatientHistory).Where(x => x.PatientHistory.PatientId == Id).Select(x => new { Name = x.Sign.Name, Id = x.SignId, Date = x.PatientHistory.InsertDate.ToString("dd/MM/yyyy") }).ToList();

                return Ok(new { message = Signs, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
                throw e;
            }
        }

        public static void AddSigns(List<Sign> signs)
        {
            SignsController.Signs.AddRange(signs);
        }
    }
}
