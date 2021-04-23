using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Domain
{
    public class Gender
    {
        public int GenderId { get; set; }
        public string GenderName { get; set; }

        public ICollection<User> Users { get; set; }

    }
}
