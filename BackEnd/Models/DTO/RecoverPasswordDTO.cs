using System;
using System.Collections.Generic;
using System.Text;

namespace Models.DTO
{
    public class RecoverPasswordDTO
    {
        public int RecoveryCode { get; set; }
        public string UserEmail { get; set; }
        public string NewPassword { get; set; }
    }
}
