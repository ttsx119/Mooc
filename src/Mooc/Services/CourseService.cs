using Mooc.Config;
using Mooc.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Mooc.Services
{
    public class CourseService
    {
        private MySQLDBContext db;

        public CourseService(MySQLDBContext db)
        {
            this.db = db;

            // 确认该数据实体是否存在
            this.db.Database.EnsureCreated();
        }

        // GET: api/course
        public IEnumerable<Course> Get()
        {
            return this.db.Course.ToList();
        }

        // GET api/course/{id}
        public Course Get(string id)
        {
            return this.db.Course.FirstOrDefault(item => item.ID == id);
        }

        // POST api/course
        public int Post(Course course)
        {
            if (course.CourseUrl.Length != 0)
            {
                var info = new FileInfo(course.CourseUrl);

                if (!File.Exists(@"F:\\Station\\Mooc\\src\\Mooc\\wwwroot\\res\\video\\" + info.Name))
                {
                    info.CopyTo(@"F:\\Station\\Mooc\\src\\Mooc\\wwwroot\\res\\video\\" + info.Name);
                }

                course.CourseUrl = info.Name;
            }

            this.db.Add(course);

            return this.db.SaveChanges();
        }

        // PUT api/course/{id}
        public int Put(string id, Course course)
        {
            var _course = this.db.Course.FirstOrDefault(item => item.ID == id);

            if (_course != null)
            {
                _course.Name = course.Name;
                _course.Category = course.Category;
                _course.TeacherID = course.TeacherID;
                _course.Duration = course.Duration;
                _course.CourseTime = course.CourseTime;
                _course.UploadTime = course.UploadTime;
                _course.StudentNumber = course.StudentNumber;
                _course.TypeID = course.TypeID;
                _course.CourseUrl = course.CourseUrl;
                _course.CourseImgUrl = course.CourseImgUrl;

                if (course.CourseUrl.Length != 0)
                {
                    var info = new FileInfo(course.CourseUrl);

                   if (!File.Exists(@"F:\\Station\\Mooc\\src\\Mooc\\wwwroot\\res\\video\\" + info.Name))
                    {
                        info.CopyTo(@"F:\\Station\\Mooc\\src\\Mooc\\wwwroot\\res\\video\\" + info.Name);
                    }
                    _course.CourseUrl = info.Name;
                }

                this.db.Update(_course);

                return this.db.SaveChanges();
            }

            return 0;
        }

        // DELETE api/course/{id}
        public int Delete(string id)
        {
            var _course = this.db.Course.FirstOrDefault(item => item.ID == id);

            if (_course != null)
            {
                this.db.Remove(_course);

                return this.db.SaveChanges();
            }

            return 0;
        }
    }
}
