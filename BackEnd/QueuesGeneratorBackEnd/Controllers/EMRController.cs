using ClientBackEnd.Controllers;

using DAL;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

using Models.Domain;
using Models.DTO;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Utilities.Pagination;

namespace ClinicBackEnd.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EMRController : ControllerBase
    {
        private readonly ClinicContext _clinicDbContext;
        private IConfiguration _configuration;

        public EMRController(ClinicContext clinicDbContext, IConfiguration configuration)
        {
            _clinicDbContext = clinicDbContext;
            _configuration = configuration;
        }

        [ServiceFilter(typeof(AuthorizedAbility))]
        [HttpGet("GetPatientInfo/{id}")]
        public IActionResult GetPatientInfo(int Id)
        {
            try
            {
                var User = _clinicDbContext.Users.Include(x=>x.Gender).FirstOrDefault(x => x.UserId == Id && x.User_Role.Any(x => x.RoleId == 3));

                if (User == null)
                    return Ok(new { message = "there is no such patient", ErrorHappen = true });

                return Ok(new { message = new { Name = User.UserName, UserId = User.UserId, Email = User.UserEmail, Number = User.PhoneNumber, Gender = User.Gender.GenderName }, ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went Wrong While getting User Info", ErrorHappen = true });
            }
        }

        [ServiceFilter(typeof(AuthorizedAbility))]
        [HttpGet("GetPatientHistoryNotes/{id}")]
        public IActionResult GetPatientHistoryNotes(int Id)
        {
            try
            {
                var Notes = _clinicDbContext.PatientHistory.OrderByDescending(x => x.InsertDate).Where(x => x.PatientId == Id).ToList();

                if (Notes == null)
                    return Ok(new { message = "there is no such patient", ErrorHappen = true });

                return Ok(new { message = Notes.Select(x => new { Note = x.Note, Date = x.InsertDate.ToString("dd/MM/yyyy") }).ToList(), ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        [ServiceFilter(typeof(AuthorizedAbility))]
        [HttpGet("GetPatientHistoryChiefComplaints/{id}")]
        public IActionResult GetPatientHistoryChiefComplaints(int Id)
        {
            try
            {
                var Notes = _clinicDbContext.PatientHistory.OrderByDescending(x => x.InsertDate).Where(x => x.PatientId == Id).ToList();

                if (Notes == null)
                    return Ok(new { message = "there is no such patient", ErrorHappen = true });

                return Ok(new { message = Notes.Select(x => new { Complaint = x.CheifComplaint, Date = x.InsertDate.ToString("dd/MM/yyyy") }).ToList(), ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        [ServiceFilter(typeof(AuthorizedAbility))]
        [HttpPost("GetPatients")]
        public IActionResult GetPatients([FromBody] PatientsSearchCriteriaDTO patientsSearchCriteriaDto)
        {
            try
            {
                var filterdPatients = _clinicDbContext.Users.Include(x=>x.Gender)
                    .Where(x => x.User_Role.Any(x => x.RoleId == 3))
                    .Select(x=>new { 
                        Id = x.UserId,
                        Name = x.UserName, 
                        Email = x.UserEmail, 
                        Number = x.PhoneNumber,
                        GederId = x.GenderId, 
                        Gender = x.Gender.GenderName, 
                        Date = x.RegisterDate.ToString("dd/MM/yyyy") });

                if (!string.IsNullOrWhiteSpace(patientsSearchCriteriaDto.Email))
                    filterdPatients = filterdPatients.Where(x => x.Email.Contains(patientsSearchCriteriaDto.Email));

                if (!string.IsNullOrWhiteSpace(patientsSearchCriteriaDto.Name))
                    filterdPatients = filterdPatients.Where(x => x.Name.Contains(patientsSearchCriteriaDto.Name));

                if (!string.IsNullOrWhiteSpace(patientsSearchCriteriaDto.Number))
                    filterdPatients = filterdPatients.Where(x => x.Number.Contains(patientsSearchCriteriaDto.Number));

                if (patientsSearchCriteriaDto.GenderId != 0)
                    filterdPatients = filterdPatients.Where(x => x.GederId == patientsSearchCriteriaDto.GenderId);

                int TotalRecords = filterdPatients.Count();

                filterdPatients = filterdPatients.Skip(patientsSearchCriteriaDto.Skip).Take(patientsSearchCriteriaDto.Take);

                return Ok(new { message = new {Patients = filterdPatients.ToList(), TotalRecords = TotalRecords} , ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }

        [ServiceFilter(typeof(AuthorizedAbility))]
        [HttpPost("SavePatientHistory")]
        public IActionResult SavePatientHistory([FromBody] SavePatientHistory savePatientHistory)
        {
            try
            {
                List<Allergie> newAllergies = savePatientHistory.Allergies.Where(x => x.Id == 0).Select(x => new Allergie { Name = x.Name, NumberOfUse = 0 }).ToList();
                List<Sign> newSigns = savePatientHistory.Signs.Where(x => x.Id == 0).Select(x => new Sign { Name = x.Name, NumberOfUse = 0 }).ToList();
                List<Symptom> newSymptoms = savePatientHistory.Symptoms.Where(x => x.Id == 0).Select(x => new Symptom { Name = x.Name, NumberOfUse = 0 }).ToList();
                List<Diagnosis> newDiagnoses = savePatientHistory.Diagnoses.Where(x => x.Id == 0).Select(x => new Diagnosis { Name = x.Name, NumberOfUse = 0 }).ToList();
                List<Medicine> newMedicines = savePatientHistory.Medicines.Where(x => x.Id == 0).Select(x => new Medicine { Name = x.Name, NumberOfUse = 0 }).ToList();

                if (newAllergies.Count > 0)
                    _clinicDbContext.Allergies.AddRange(newAllergies);
                if (newSigns.Count > 0)
                    _clinicDbContext.Signs.AddRange(newSigns);
                if (newSymptoms.Count > 0)
                    _clinicDbContext.Symptoms.AddRange(newSymptoms);
                if (newDiagnoses.Count > 0)
                    _clinicDbContext.Diagnoses.AddRange(newDiagnoses);
                if (newMedicines.Count > 0)
                    _clinicDbContext.Medicines.AddRange(newMedicines);

                if (newAllergies.Count > 0 || newSigns.Count > 0 || newSymptoms.Count > 0 || newDiagnoses.Count > 0 || newMedicines.Count > 0)
                    _clinicDbContext.SaveChanges();

                AllergiesController.AddAllergies(newAllergies);
                DiagnosesController.AddDiagnoses(newDiagnoses);
                MedicinesController.AddMedicines(newMedicines);
                SignsController.AddSigns(newSigns);
                SymptomsController.AddSymptoms(newSymptoms);

                PatientHistory patientHistory = new PatientHistory
                {
                    Note = savePatientHistory.Note,
                    CheifComplaint = savePatientHistory.Complaint,
                    InsertDate = DateTime.Now,
                    PatientId = savePatientHistory.PatientId,
                };

                newAllergies.AddRange(savePatientHistory.Allergies.Where(x => x.Id != 0).Select(x => new Allergie { AllergieId = x.Id, Name = x.Name }));
                patientHistory.PatientHistoryAllergies = newAllergies.Select(x => new PatientHistoryAllergie { InsertTime = DateTime.Now, AllergieId = x.AllergieId, PatientHistoryId = patientHistory.PatientHistoryId }).ToList();

                newSigns.AddRange(savePatientHistory.Signs.Where(x => x.Id != 0).Select(x => new Sign { SignId = x.Id, Name = x.Name }));
                patientHistory.PatientHistorySigns = newSigns.Select(x => new PatientHistorySign { InsertTime = DateTime.Now, SignId = x.SignId, PatientHistoryId = patientHistory.PatientHistoryId }).ToList();

                newSymptoms.AddRange(savePatientHistory.Symptoms.Where(x => x.Id != 0).Select(x => new Symptom { SymptomId = x.Id, Name = x.Name }));
                patientHistory.PatientHistorySymptoms = newSymptoms.Select(x => new PatientHistorySymptom { InsertTime = DateTime.Now, SymptomId = x.SymptomId, PatientHistoryId = patientHistory.PatientHistoryId }).ToList();

                newDiagnoses.AddRange(savePatientHistory.Diagnoses.Where(x => x.Id != 0).Select(x => new Diagnosis { DiagnosisId = x.Id, Name = x.Name }));
                patientHistory.PatientHistoryDiagnoses = newDiagnoses.Select(x => new PatientHistoryDiagnosis { InsertTime = DateTime.Now, DiagnosisId = x.DiagnosisId, PatientHistoryId = patientHistory.PatientHistoryId }).ToList();

                newMedicines.AddRange(savePatientHistory.Medicines.Where(x => x.Id != 0).Select(x => new Medicine { MedicineId = x.Id, Name = x.Name }));
                patientHistory.PatientHistoryMedicines = newMedicines.Select(x => new PatientHistoryMedicine { InsertTime = DateTime.Now, MedicineId = x.MedicineId, PatientHistoryId = patientHistory.PatientHistoryId }).ToList();

                _clinicDbContext.PatientHistory.Add(patientHistory);
                _clinicDbContext.SaveChanges();

                Task.Run(() =>
                {
                    var options = new DbContextOptionsBuilder<ClinicContext>().UseSqlServer(_configuration.GetConnectionString("ClinicDbConnectionString")).Options;
                    var _clinicDbContext = new ClinicContext(options);

                    var allergies = _clinicDbContext.Allergies.Where(x => newAllergies.Select(x => x.AllergieId).Contains(x.AllergieId)).ToList();
                    foreach (var allergie in allergies)
                        allergie.NumberOfUse += 1;

                    var signs = _clinicDbContext.Signs.Where(x => newSigns.Select(x => x.SignId).Contains(x.SignId)).ToList();
                    foreach (var sign in signs)
                        sign.NumberOfUse += 1;

                    var symptoms = _clinicDbContext.Symptoms.Where(x => newSymptoms.Select(x => x.SymptomId).Contains(x.SymptomId)).ToList();
                    foreach (var symptom in symptoms)
                        symptom.NumberOfUse += 1;

                    var diagnoses = _clinicDbContext.Diagnoses.Where(x => newDiagnoses.Select(x => x.DiagnosisId).Contains(x.DiagnosisId)).ToList();
                    foreach (var diagnosis in diagnoses)
                        diagnosis.NumberOfUse += 1;

                    var medicines = _clinicDbContext.Medicines.Where(x => newMedicines.Select(x => x.MedicineId).Contains(x.MedicineId)).ToList();
                    foreach (var medicine in medicines)
                        medicine.NumberOfUse += 1;

                    _clinicDbContext.SaveChanges();
                });

                return Ok(new { message = "Patient history saved successfully", ErrorHappen = false });
            }
            catch (Exception e)
            {
                return Ok(new { message = "Something went wrong", ErrorHappen = true });
            }
        }
    }
}