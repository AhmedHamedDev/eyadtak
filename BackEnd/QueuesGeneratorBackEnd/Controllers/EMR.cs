using DAL;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

using Models.Domain;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Utilities.Pagination;

namespace ClinicBackEnd.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EMR : ControllerBase
    {
        private readonly ClinicContext _clinicDbContext;
        private IConfiguration _configuration;

        public EMR(ClinicContext clinicDbContext, IConfiguration configuration)
        {
            _clinicDbContext = clinicDbContext;
            _configuration = configuration;
        }

        [HttpGet("GetDiagnoses")]
        public IActionResult GetDiagnoses([FromQuery] string Name)
        {
            try
            {
                List<Diagnosis> Diagnoses;
                if (string.IsNullOrEmpty(Name))
                    Diagnoses = _clinicDbContext.Diagnoses.OrderBy(X => X.NumberOfUse).Take(10).ToList();
                else
                    Diagnoses = _clinicDbContext.Diagnoses.Where(x => x.Name.StartsWith(Name)).OrderBy(X => X.NumberOfUse).Take(10).ToList();

                return Ok(new { message = Diagnoses, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        [HttpGet("GetPatientDiagnoses")]
        public IActionResult GetPatientDiagnoses(int Id)
        {
            try
            {
                if (Id == 0)
                    return Ok(new { message = "Id can't be zero", ErrorHappen = true });

                List<Diagnosis> Diagnoses = _clinicDbContext.PatientHistoryDiagnoses.Include(x => x.Diagnosis).Where(x => x.PatientHistoryId == Id).Select(x => x.Diagnosis).ToList();

                return Ok(new { message = Diagnoses, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        [HttpPost("AddDiagnosis")]
        public IActionResult AddDiagnosis([FromBody] string Name)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(Name))
                {
                    return Ok(new { message = "Name Can't be Empty", ErrorHappen = true });
                }

                Diagnosis diagnosis = new Diagnosis() { Name = Name, NumberOfUse = 0 };

                _clinicDbContext.Diagnoses.Add(diagnosis);

                return Ok(new { message = diagnosis.DiagnosisId, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        [HttpGet("GetSigns")]
        public IActionResult GetSigns([FromQuery] string Name)
        {
            try
            {
                List<Sign> Signs;
                if (string.IsNullOrEmpty(Name))
                    Signs = _clinicDbContext.Signs.OrderBy(X => X.NumberOfUse).Take(10).ToList();
                else
                    Signs = _clinicDbContext.Signs.Where(x => x.Name.StartsWith(Name)).OrderBy(X => X.NumberOfUse).Take(10).ToList();

                return Ok(new { message = Signs, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        [HttpGet("GetPatientSigns")]
        public IActionResult GetPatientSigns(int Id)
        {
            try
            {
                if (Id == 0)
                    return Ok(new { message = "Id can't be zero", ErrorHappen = true });

                List<Sign> Signs = _clinicDbContext.PatientHistorySigns.Include(x => x.Sign).Where(x => x.PatientHistoryId == Id).Select(x => x.Sign).ToList();

                return Ok(new { message = Signs, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        [HttpPost("AddSign")]
        public IActionResult AddSign([FromBody] string Name)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(Name))
                {
                    return Ok(new { message = "Name Can't be Empty", ErrorHappen = true });
                }

                Sign sign = new Sign() { Name = Name, NumberOfUse = 0 };

                _clinicDbContext.Signs.Add(sign);

                return Ok(new { message = sign.SignId, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        [HttpGet("GetAllergies")]
        public IActionResult GetAllergies([FromQuery] string Name)
        {
            try
            {
                List<Allergie> Allergies;
                if (string.IsNullOrEmpty(Name))
                    Allergies = _clinicDbContext.Allergies.OrderBy(X => X.NumberOfUse).Take(10).ToList();
                else
                    Allergies = _clinicDbContext.Allergies.Where(x => x.Name.StartsWith(Name)).OrderBy(X => X.NumberOfUse).Take(10).ToList();

                return Ok(new { message = Allergies, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        [HttpGet("GetPatientAllergies")]
        public IActionResult GetPatientAllergies(int Id)
        {
            try
            {
                if (Id == 0)
                    return Ok(new { message = "Id can't be zero", ErrorHappen = true });

                List<Allergie> Allergies = _clinicDbContext.PatientHistoryAllergies.Include(x => x.Allergie).Where(x => x.PatientHistoryId == Id).Select(x => x.Allergie).ToList();

                return Ok(new { message = Allergies, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        [HttpPost("AddAllergie")]
        public IActionResult AddAllergie([FromBody] string Name)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(Name))
                {
                    return Ok(new { message = "Name Can't be Empty", ErrorHappen = true });
                }

                Allergie allergie = new Allergie() { Name = Name, NumberOfUse = 0 };

                _clinicDbContext.Allergies.Add(allergie);

                return Ok(new { message = allergie.AllergieId, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        [HttpGet("GetMedicines")]
        public IActionResult GetMedicines([FromQuery] string Name)
        {
            try
            {
                List<Medicine> Medicines;
                if (string.IsNullOrEmpty(Name))
                    Medicines = _clinicDbContext.Medicines.OrderBy(X => X.NumberOfUse).Take(10).ToList();
                else
                    Medicines = _clinicDbContext.Medicines.Where(x => x.Name.StartsWith(Name)).OrderBy(X => X.NumberOfUse).Take(10).ToList();

                return Ok(new { message = Medicines, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        [HttpGet("GetPatientMedicines")]
        public IActionResult GetPatientMedicines(int Id)
        {
            try
            {
                if (Id == 0)
                    return Ok(new { message = "Id can't be zero", ErrorHappen = true });

                List<Medicine> Medicines = _clinicDbContext.PatientHistoryMedicines.Include(x => x.Medicine).Where(x => x.PatientHistoryId == Id).Select(x => x.Medicine).ToList();

                return Ok(new { message = Medicines, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        [HttpPost("AddMedicine")]
        public IActionResult AddMedicine([FromBody] string Name)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(Name))
                {
                    return Ok(new { message = "Name Can't be Empty", ErrorHappen = true });
                }

                Medicine medicine = new Medicine() { Name = Name, NumberOfUse = 0 };

                _clinicDbContext.Medicines.Add(medicine);

                return Ok(new { message = medicine.MedicineId, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        [HttpGet("GetSymptoms")]
        public IActionResult GetSymptoms([FromQuery] string Name)
        {
            try
            {
                List<Symptom> Symptoms;
                if (string.IsNullOrEmpty(Name))
                    Symptoms = _clinicDbContext.Symptoms.OrderBy(X => X.NumberOfUse).Take(10).ToList();
                else
                    Symptoms = _clinicDbContext.Symptoms.Where(x => x.Name.StartsWith(Name)).OrderBy(X => X.NumberOfUse).Take(10).ToList();

                return Ok(new { message = Symptoms, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        [HttpGet("GetPatientSymptoms")]
        public IActionResult GetPatientSymptoms(int Id)
        {
            try
            {
                if (Id == 0)
                    return Ok(new { message = "Id can't be zero", ErrorHappen = true });

                List<Symptom> Symptoms = _clinicDbContext.PatientHistorySymptoms.Include(x => x.Symptom).Where(x => x.PatientHistoryId == Id).Select(x => x.Symptom).ToList();

                return Ok(new { message = Symptoms, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        [HttpPost("AddSymptom")]
        public IActionResult AddSymptom([FromBody] string Name)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(Name))
                {
                    return Ok(new { message = "Name Can't be Empty", ErrorHappen = true });
                }

                Symptom symptom = new Symptom() { Name = Name, NumberOfUse = 0 };

                _clinicDbContext.Symptoms.Add(symptom);

                return Ok(new { message = symptom.SymptomId, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        [HttpGet("patients")]
        public async Task<IActionResult> GetPatients([FromQuery] PaginationFilter filter, string searchKeyword)
        {
            try
            {
                var validFilter = new PaginationFilter(filter.PageNumber, filter.PageSize);

                if (String.IsNullOrEmpty(searchKeyword) || searchKeyword == "null")
                {
                    var patientsQuery = _clinicDbContext.Users.AsQueryable();
                    var skip = filter.PageNumber * filter.PageSize;
                    var pagedData = await patientsQuery.Skip(skip)
                                           .Take(filter.PageSize)
                                           .ToListAsync();
                    var totalRecords = patientsQuery.Count();
                    var totalPages = ((double)totalRecords / (double)filter.PageSize);
                    int roundedTotalPages = Convert.ToInt32(Math.Ceiling(totalPages));
                    return Ok(new PagedResponse<List<User>>(pagedData, validFilter.PageNumber, validFilter.PageSize
                                                            , totalRecords, roundedTotalPages));
                }
                var patientsSearchQuery = _clinicDbContext.Users.Where(u => u.UserName.Contains(searchKeyword)).AsQueryable();
                var searchTotalRecords = patientsSearchQuery.Count();
                var searchTotalPages = ((double)searchTotalRecords / (double)validFilter.PageSize);
                int searchRoundedTotalPages = Convert.ToInt32(Math.Ceiling(searchTotalPages));
                var searchPagedData = await patientsSearchQuery.Skip((validFilter.PageNumber - 1) * validFilter.PageSize)
                                                   .Take(validFilter.PageSize)
                                                   .ToListAsync();
                return Ok(new PagedResponse<List<User>>(searchPagedData, validFilter.PageNumber, validFilter.PageSize,
                                                    searchTotalRecords, searchRoundedTotalPages));
            }
            catch (Exception e)
            {
                return NotFound(new Response<List<User>> { Data = null, IsSucceeded = false, Error = e.Message });
            }
        }

        [HttpGet("GetPatientInfo")]
        public IActionResult GetPatientInfo(int Id)
        {
            try
            {
                var User = _clinicDbContext.Users.Select(x => new { Name = x.UserName, UserId = x.UserId }).FirstOrDefault(x => x.UserId == Id);

                return Ok(new { message = User, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        [HttpGet("GetPatientHistoryNotes")]
        public IActionResult GetPatientHistoryNotes(int Id)
        {
            try
            {
                var Notes = _clinicDbContext.PatientHistories.Where(x => x.PatientId == Id).Select(x => new { Note = x.Note, InsertDate = x.InsertDate }).ToList();

                return Ok(new { message = Notes, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }
    }
}