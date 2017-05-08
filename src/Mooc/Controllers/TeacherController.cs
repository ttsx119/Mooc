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
    public class TeacherController : Controller
    {
        private TeacherService service;

        public TeacherController()
        {
            // 初始化
            this.service = new TeacherService(new Config.MySQLDBContext());
        }

        // GET: api/teacher
        [HttpGet]
        public IEnumerable<Teacher> Get()
        {
            return this.service.Get();
        }

        // GET api/teacher/{id}
        [HttpGet("{id}")]
        public Teacher Get(string id)
        {
            return this.service.Get(id);
        }

        // POST api/teacher
        [HttpPost]
        public int Post([FromBody]Teacher teacher)
        {
            return this.service.Post(teacher);
        }

        // PUT api/teacher/{id}
        [HttpPut("{id}")]
        public int Put(string id, [FromBody]Teacher teacher)
        {
            return this.service.Put(id, teacher);
        }

        // DELETE api/teacher/{id}
        [HttpDelete("{id}")]
        public int Delete(string id)
        {
            return this.service.Delete(id);
        }
    }
}
