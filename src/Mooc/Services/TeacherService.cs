using Mooc.Config;
using Mooc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mooc.Services
{
    public class TeacherService
    {
        private MySQLDBContext db;

        public TeacherService(MySQLDBContext db)
        {
            this.db = db;

            // 确认该数据实体是否存在
            this.db.Database.EnsureCreated();
        }

        // GET: api/teacher
        public IEnumerable<Teacher> Get()
        {
            return this.db.Teacher.ToList();
        }

        // GET api/teacher/{id}
        public Teacher Get(string id)
        {
            return this.db.Teacher.FirstOrDefault(item => item.ID == id);
        }

        // POST api/teacher
        public int Post(Teacher teacher)
        {
            this.db.Add(teacher);

            return this.db.SaveChanges();
        }

        // PUT api/teacher/{id}
        public int Put(string id, Teacher teacher)
        {
            var _teacher = this.db.Teacher.FirstOrDefault(item => item.ID == id);

            if (_teacher != null)
            {

                _teacher.Name = teacher.Name;
                _teacher.Password = teacher.Password;
                _teacher.Sex = teacher.Sex;
                _teacher.Address = teacher.Address;
                _teacher.Age = teacher.Age;
                _teacher.PhoneNumber = teacher.PhoneNumber;
                _teacher.PhotoUrl = teacher.PhotoUrl;

                this.db.Update(_teacher);

                return this.db.SaveChanges();
            }

            return 0;
        }

        // DELETE api/teacher/{id}
        public int Delete(string id)
        {
            var _teacher = this.db.Teacher.FirstOrDefault(item => item.ID == id);

            if (_teacher != null)
            {
                this.db.Remove(_teacher);

                return this.db.SaveChanges();
            }

            return 0;
        }
    }
}
