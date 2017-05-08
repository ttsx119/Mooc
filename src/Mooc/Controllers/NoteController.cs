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
    public class NoteController : Controller
    {
        private NoteService service;

        public NoteController()
        {
            // 初始化
            this.service = new NoteService(new Config.MySQLDBContext());
        }

        // GET: api/note
        [HttpGet]
        public IEnumerable<Note> Get()
        {
            return this.service.Get();
        }

        // GET api/note/{id}
        [HttpGet("{id}")]
        public Note Get(int id)
        {
            return this.service.Get(id);
        }

        // POST api/note
        [HttpPost]
        public int Post([FromBody]Note note)
        {
            return this.service.Post(note);
        }

        // PUT api/note/{id}
        [HttpPut("{id}")]
        public int Put(int id, [FromBody]Note note)
        {
            return this.service.Put(id, note);
        }

        // DELETE api/note/{id}
        [HttpDelete("{id}")]
        public int Delete(int id)
        {
            return this.service.Delete(id);
        }
    }
}
