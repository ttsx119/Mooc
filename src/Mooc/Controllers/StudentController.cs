using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Mooc.Services;
using Mooc.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Mooc.Controllers
{
    [Route("api/[controller]")]
    public class StudentController : Controller
    {
        private StudentService service;

        public StudentController()
        {
            // 初始化
            this.service = new StudentService(new Config.MySQLDBContext());
        }

        // GET: api/student
        [HttpGet]
        public IEnumerable<Student> Get()
        {
            return this.service.Get();
        }

        // GET api/student/{id}
        [HttpGet("{id}")]
        public Student Get(string id)
        {
            return this.service.Get(id);
        }

        // POST api/student
        [HttpPost]
        public int Post([FromBody]Student student)
        {
            return this.service.Post(student);
        }

        // PUT api/student/{id}
        [HttpPut("{id}")]
        public int Put(string id, [FromBody]Student student)
        {
            return this.service.Put(id, student);
        }

        // DELETE api/student/{id}
        [HttpDelete("{id}")]
        public int Delete(string id)
        {
            return this.service.Delete(id);
        }
    }
}
