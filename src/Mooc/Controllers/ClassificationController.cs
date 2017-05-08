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
    public class ClassificationController : Controller
    {
        private ClassificationService service;

        public ClassificationController()
        {
            // 初始化
            this.service = new ClassificationService(new Config.MySQLDBContext());
        }

        // GET: api/classification
        [HttpGet]
        public IEnumerable<Classification> Get()
        {
            return this.service.Get();
        }

        // GET api/classification/{id}
        [HttpGet("{id}")]
        public Classification Get(int id)
        {
            return this.service.Get(id);
        }

        // POST api/classification
        [HttpPost]
        public int Post([FromBody]Classification classification)
        {
            return this.service.Post(classification);
        }

        // PUT api/classification/{id}
        [HttpPut("{id}")]
        public int Put(int id, [FromBody]Classification classification)
        {
            return this.service.Put(id, classification);
        }

        // DELETE api/classification/{id}
        [HttpDelete("{id}")]
        public int Delete(int id)
        {
            return this.service.Delete(id);
        }
    }
}
