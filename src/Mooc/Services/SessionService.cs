using Mooc.Config;
using Mooc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mooc.Services
{
    public class SessionService
    {
        private MySQLDBContext db;

        public SessionService(MySQLDBContext db)
        {
            this.db = db;

            // 确认该数据实体是否存在
            this.db.Database.EnsureCreated();
        }

        // GET: api/session
        public IEnumerable<Session> Get()
        {
            return this.db.Session.ToList();
        }

        // GET api/session/{id}
        public Session Get(string id)
        {
            return this.db.Session.FirstOrDefault(item => item.ID == id);
        }

        // POST api/session
        public int Post(Session session)
        {
            this.db.Add(session);

            return this.db.SaveChanges();
        }

        // PUT api/session/{id}
        public int Put(string id, Session session)
        {
            var _session = this.db.Session.FirstOrDefault(item => item.ID == id);

            if (_session != null)
            {

                _session.Name = session.Name;
  
                this.db.Update(_session);

                return this.db.SaveChanges();
            }

            return 0;
        }

        // DELETE api/session/{id}
        public int Delete(string id)
        {
            var _session = this.db.Student.FirstOrDefault(item => item.ID == id);

            if (_session != null)
            {
                this.db.Remove(_session);

                return this.db.SaveChanges();
            }

            return 0;
        }
    }
}
