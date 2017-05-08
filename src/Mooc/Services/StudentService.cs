using Mooc.Config;
using Mooc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mooc.Services
{
    public class StudentService
    {
        private MySQLDBContext db;

        public StudentService(MySQLDBContext db)
        {
            this.db = db;

            // 确认该数据实体是否存在
            this.db.Database.EnsureCreated();
        }

        // GET: api/student
        public IEnumerable<Student> Get()
        {
            return this.db.Student.ToList();
        }

        // GET api/student/{id}
        public Student Get(string id)
        {
            return this.db.Student.FirstOrDefault(item => item.ID == id);
        }

        // POST api/student
        public int Post(Student student)
        {
            this.db.Add(student);

            return this.db.SaveChanges();
        }

        // PUT api/student/{id}
        public int Put(string id, Student student)
        {
            var _student = this.db.Student.FirstOrDefault(item => item.ID == id);

            if (_student != null)
            {

                _student.Name = student.Name;
                _student.Password = student.Password;
                _student.Sex = student.Sex;
                _student.Address = student.Address;
                _student.Age = student.Age;
                _student.PhoneNumber = student.PhoneNumber;
                _student.PhotoUrl = student.PhotoUrl;
                _student.CourseID = student.CourseID;

                this.db.Update(_student);

                return this.db.SaveChanges();
            }

            return 0;
        }

        // DELETE api/student/{id}
        public int Delete(string id)
        {
            var _student = this.db.Student.FirstOrDefault(item => item.ID == id);

            if (_student != null)
            {
                this.db.Remove(_student);

                return this.db.SaveChanges();
            }

            return 0;
        }
    }
}
