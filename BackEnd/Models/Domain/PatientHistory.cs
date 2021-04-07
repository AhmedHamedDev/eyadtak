using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Domain
{
    public class PatientHistory
    {
        public int PatientHistoryId { get; set; }
        public string Note { get; set; }
        public string CheifComplaint { get; set; }
        public DateTime InsertDate { get; set; }

        public int PatientId { get; set; }
        public User Patient { get; set; }

        public ICollection<PatientHistoryDiagnosis> PatientHistoryDiagnoses { get; set; }
        public ICollection<PatientHistoryAllergie> PatientHistoryAllergies { get; set; }
        public ICollection<PatientHistoryMedicine> PatientHistoryMedicines { get; set; }
        public ICollection<PatientHistorySymptom> PatientHistorySymptoms { get; set; }
        public ICollection<PatientHistorySign> PatientHistorySigns { get; set; }

    }
}
