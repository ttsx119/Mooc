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
    public class SessionController : Controller
    {
        private SessionService service;

        public SessionController()
        {
            // 初始化
            this.service = new SessionService(new Config.MySQLDBContext());
        }

        // GET: api/session
        [HttpGet]
        public IEnumerable<Session> Get()
        {
            return this.service.Get();
        }

        // GET api/session/{id}
        [HttpGet("{id}")]
        public Session Get(string id)
        {
            return this.service.Get(id);
        }

        // POST api/session
        [HttpPost]
        public int Post([FromBody]Session session)
        {
            return this.service.Post(session);
        }

        // PUT api/session/{id}
        [HttpPut("{id}")]
        public int Put(string id, [FromBody]Session session)
        {
            return this.service.Put(id, session);
        }

        // DELETE api/session/{id}
        [HttpDelete("{id}")]
        public int Delete(string id)
        {
            return this.service.Delete(id);
        }
    }
}
