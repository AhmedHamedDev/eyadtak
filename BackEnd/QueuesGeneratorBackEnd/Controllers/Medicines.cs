﻿using DAL;
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
    public class MedicinesController : ControllerBase
    {

        private readonly ClinicContext _clinicDbContext;
        private IConfiguration _configuration;

        public MedicinesController(ClinicContext clinicDbContext, IConfiguration configuration)
        {
            _clinicDbContext = clinicDbContext;
            _configuration = configuration;
        }

        [HttpGet("GetMedicines")]
        public IActionResult GetMedicines([FromQuery] int Skip, [FromQuery] int Take)
        {
            try
            {
                bool IsReachEnd = false;
                List<Medicine> Medicines = null;
                int count = _clinicDbContext.Medicines.Count();

                if (count > Skip + Take)
                    Medicines = _clinicDbContext.Medicines.OrderByDescending(x => x.NumberOfUse).Skip(Skip).Take(Take).ToList();
                else if (count > Skip)
                {
                    Medicines = _clinicDbContext.Medicines.OrderByDescending(x => x.NumberOfUse).Skip(Skip).Take(Take).ToList();
                    IsReachEnd = true;
                }
                else
                    IsReachEnd = true;

                return Ok(new { message = Medicines?.Select(x => new { Name = x.Name, Id = x.MedicineId }).ToList(), IsReachEnd = IsReachEnd, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        [HttpGet("GetPatientMedicines/{id}")]
        public IActionResult GetPatientMedicines(int Id)
        {
            try
            {
                if (Id == 0)
                    return Ok(new { message = "Id can't be zero", ErrorHappen = true });

                var Medicines = _clinicDbContext.PatientHistoryMedicines.Include(x => x.Medicine).Include(x=>x.PatientHistory).Include(x => x.PatientHistory).Where(x => x.PatientHistory.PatientId == Id).Select(x => new { Name = x.Medicine.Name, Id = x.MedicineId, Date = x.PatientHistory.InsertDate.ToString("dd/MM/yyyy") }).ToList();

                return Ok(new { message = Medicines, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }
    }
}
