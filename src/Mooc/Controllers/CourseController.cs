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
    public class CourseController : Controller
    {
        private CourseService service;

        public CourseController()
        {
            // 初始化
            this.service = new CourseService(new Config.MySQLDBContext());
        }
        // GET: api/course
        [HttpGet]
        public IEnumerable<Course> Get()
        {
            return this.service.Get();
        }

        // GET api/course{id}
        [HttpGet("{id}")]
        public Course Get(string id)
        {
            return this.service.Get(id);
        }

        // POST api/course
        [HttpPost]
        public int Post([FromBody]Course course)
        {
            return this.service.Post(course);
        }

        // PUT api/course/{id}
        [HttpPut("{id}")]
        public int Put(string id, [FromBody]Course course)
        {
            return this.service.Put(id, course);
        }

        // DELETE api/course/id
        [HttpDelete("{id}")]
        public int Delete(string id)
        {
            return this.service.Delete(id);
        }
    }
}
