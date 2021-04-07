using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Domain
{
    public class PatientHistoryDiagnosis
    {
        public int PatientHistoryId { get; set; }
        public PatientHistory PatientHistory { get; set; }

        public int DiagnosisId { get; set; }
        public Diagnosis Diagnosis { get; set; }

        public DateTime InsertTime { get; set; }

    }
}
