using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Domain
{
    public class Symptom
    {
        public int SymptomId { get; set; }
        public string Name{ get; set; }
        public int NumberOfUse { get; set; }

        public ICollection<PatientHistorySymptom> PatientHistorySymptoms { get; set; }

    }
}
