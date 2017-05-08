using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mooc.Models
{
    public class Admin
    {
        public string ID { get; set; }  //ID
        public string Name { get; set; }   //名称
        public int Password { get; set; }     //密码
        public int Right { get; set; }      //权限
        
    }
}
