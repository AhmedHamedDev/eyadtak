using System;
using System.Collections.Generic;
using System.Text;

namespace Models.DTO
{
    public class SavePatientHistory
    {
        public int PatientId { get; set; }
        public string Complaint { get; set; }
        public string Note { get; set; }
        public List<SavePatientHistorySign> Signs { get; set; }
        public List<SavePatientHistoryAllergie> Allergies { get; set; }
        public List<SavePatientHistorySymptom> Symptoms { get; set; }
        public List<SavePatientHistoryMedicine> Medicines { get; set; }
        public List<SavePatientHistoryDiagnosis> Diagnoses { get; set; }
    }

    public class SavePatientHistorySign
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Date { get; set; }
    }

    public class SavePatientHistoryAllergie
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Date { get; set; }
    }

    public class SavePatientHistorySymptom
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Date { get; set; }
    }

    public class SavePatientHistoryMedicine
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Date { get; set; }
    }

    public class SavePatientHistoryDiagnosis
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Date { get; set; }
    }
}
