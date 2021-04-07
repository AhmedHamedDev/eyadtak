using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Domain
{
    public class Sign
    {
        public int SignId { get; set; }
        public string Name{ get; set; }
        public int NumberOfUse { get; set; }

        public ICollection<PatientHistorySign> PatientHistorySigns { get; set; }

    }
}
