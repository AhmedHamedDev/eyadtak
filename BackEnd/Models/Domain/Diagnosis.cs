using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Domain
{
    public class Diagnosis
    {
        public int DiagnosisId { get; set; }
        public string Name{ get; set; }
        public int NumberOfUse { get; set; }

        public ICollection<PatientHistoryDiagnosis> PatientHistoryDiagnoses { get; set; }

    }
}
