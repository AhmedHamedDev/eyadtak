using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Domain
{
    public class Allergie
    {
        public int AllergieId { get; set; }
        public string Name{ get; set; }
        public int NumberOfUse { get; set; }

        public ICollection<PatientHistoryAllergie> PatientHistoryAllergies { get; set; }

    }
}
