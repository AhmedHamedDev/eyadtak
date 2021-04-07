using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Domain
{
    public class PatientHistoryMedicine
    {
        public int PatientHistoryId { get; set; }
        public PatientHistory PatientHistory { get; set; }

        public int MedicineId { get; set; }
        public Medicine Medicine { get; set; }

        public DateTime InsertTime { get; set; }

    }
}
