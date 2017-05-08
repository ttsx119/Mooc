using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mooc.Models
{
    public class Classification
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Link { get; set; }
        public int ParentID { get; set; }
    }
}
