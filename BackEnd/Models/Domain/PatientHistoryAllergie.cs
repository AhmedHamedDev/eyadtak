using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Domain
{
    public class PatientHistoryAllergie
    {
        public int PatientHistoryId { get; set; }
        public PatientHistory PatientHistory { get; set; }

        public int AllergieId { get; set; }
        public Allergie Allergie { get; set; }

        public DateTime InsertTime { get; set; }
    }
}
