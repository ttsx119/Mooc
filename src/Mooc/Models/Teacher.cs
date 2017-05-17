using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mooc.Models
{
    public class Teacher
    {
        public string ID { get; set; }          //教师ID
        public string Name { get; set; }        //教师姓名
        public string Password { get; set; }    //教师密码
        public string Sex { get; set; }         //性别
        public string Address { get; set; }     //家庭住址
        public int Age { get; set; }            //年龄
        public string PhoneNumber { get; set; }    //电话
        public string PhotoUrl { get; set; }       //照片地址
        public string Introduction { get; set; } //教师介绍
        
    }
}
