using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mooc.Models
{
    public class Session
    {
        public string ID { get; set; }  	//登录者ID
        public string Name { get; set; }    //登录者姓名
        public int Type { get; set; }   	//登录者类型
    }
}
