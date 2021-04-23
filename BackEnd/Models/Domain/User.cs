using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Domain
{
    public class User
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string UserEmail { get; set; }
        public string Password { get; set; }
        public int RecoveryCode { get; set; }
        public string PhoneNumber { get; set; }
        public bool Active { get; set; }
        public DateTime RegisterDate { get; set; }

        public int GenderId { get; set; }
        public Gender Gender { get; set; }

        public ICollection<User_Role> User_Role { get; set; }
        public ICollection<PatientHistory> PatientHistories { get; set; }

    }
}
