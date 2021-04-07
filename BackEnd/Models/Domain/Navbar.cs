using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Domain
{
    public class Navbar
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Icon { get; set; }
        public int LevelInMenu { get; set; }
        public int Order { get; set; }

        public int? AbilityId { get; set; }
        public Ability Ability { get; set; }
        public int? ParentId { get; set; }
        public Navbar Parent { get; set; }
    }
}
