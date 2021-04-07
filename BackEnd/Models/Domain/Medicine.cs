using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Domain
{
    public class Medicine
    {
        public int MedicineId { get; set; }
        public string Name{ get; set; }
        public int NumberOfUse { get; set; }

        public ICollection<PatientHistoryMedicine> PatientHistoryMedicines { get; set; }

    }
}
