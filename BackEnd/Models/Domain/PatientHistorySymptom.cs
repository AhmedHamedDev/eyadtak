using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Domain
{
    public class PatientHistorySymptom
    {
        public int PatientHistoryId { get; set; }
        public PatientHistory PatientHistory { get; set; }

        public int SymptomId { get; set; }
        public Symptom Symptom { get; set; }

        public DateTime InsertTime { get; set; }

    }
}
