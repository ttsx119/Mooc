using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mooc.Models
{
    public class Course
    {
        public string ID { get; set; }              //课程ID
        public string Name { get; set; }            //课程名称
        public int Category { get; set; }           //课程类型（线上、线下）
        public int TeacherID { get; set; }          //上课教师ID
        public string Duration { get; set; }        //课程时长
        public DateTime CourseTime { get; set; }    //上课时间
        public DateTime UploadTime { get; set; }    //上传时间
        public int StudentNumber { get; set; }      //选课人数
        public int TypeID { get; set; }             //所属分类ID
        public string CourseUrl { get; set; }       //课程视频url
        public string CourseImgUrl { get; set; }    //课程图片url
    }
}
