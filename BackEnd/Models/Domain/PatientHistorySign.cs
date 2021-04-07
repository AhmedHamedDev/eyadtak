using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Domain
{
    public class PatientHistorySign
    {
        public int PatientHistoryId { get; set; }
        public PatientHistory PatientHistory { get; set; }

        public int SignId { get; set; }
        public Sign Sign { get; set; }

        public DateTime InsertTime { get; set; }

    }
}
