using System;
using System.Collections.Generic;
using System.Text;

namespace Models.DTO
{
    public class PatientsSearchCriteriaDTO : PaginationDTO
    {
        public string Name { get; set; }
        public string Number { get; set; }
        public string Email { get; set; }
        public int GenderId { get; set; }
    }
}
