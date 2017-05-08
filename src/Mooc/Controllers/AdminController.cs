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
    public class AdminController : Controller
    {
        private AdminService service;

        public AdminController()
        {
            // 初始化
            this.service = new AdminService(new Config.MySQLDBContext());
        }

        // GET: api/admin
        [HttpGet]
        public IEnumerable<Admin> Get()
        {
            return this.service.Get();
        }

        // GET api/admin/{id}
        [HttpGet("{id}")]
        public Admin Get(string id)
        {
            return this.service.Get(id);
        }

        // POST api/admin
        [HttpPost]
        public int Post([FromBody]Admin admin)
        {
            return this.service.Post(admin);
        }

        // PUT api/admin/{id}
        [HttpPut("{id}")]
        public int Put(string id, [FromBody]Admin admin)
        {
            return this.service.Put(id, admin);
        }

        // DELETE api/admin/{id}
        [HttpDelete("{id}")]
        public int Delete(string id)
        {
            return this.service.Delete(id);
        }
    }
}
