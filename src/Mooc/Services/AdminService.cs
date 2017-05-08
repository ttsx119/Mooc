using Mooc.Config;
using Mooc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mooc.Services
{
    public class AdminService
    {
        private MySQLDBContext db;

        public AdminService(MySQLDBContext db)
        {
            this.db = db;

            // 确认该数据实体是否存在
            this.db.Database.EnsureCreated();
        }

        // GET: api/admin
        public IEnumerable<Admin> Get()
        {
            return this.db.Admin.ToList();
        }

        // GET api/admin/{id}
        public Admin Get(string id)
        {
            return this.db.Admin.FirstOrDefault(item => item.ID == id);
        }

        // POST api/admin
        public int Post(Admin admin)
        {
            this.db.Add(admin);

            return this.db.SaveChanges();
        }

        // PUT api/admin/{id}
        public int Put(string id, Admin admin)
        {
            var _admin = this.db.Admin.FirstOrDefault(item => item.ID == id);

            if (_admin != null)
            {
                
                _admin.Name = admin.Name;
                _admin.Password = admin.Password;
                _admin.Right = admin.Right;

                this.db.Update(_admin);

                return this.db.SaveChanges();
            }

            return 0;
        }

        // DELETE api/admin/{id}
        public int Delete(string id)
        {
            var _admin = this.db.Admin.FirstOrDefault(item => item.ID == id);

            if (_admin != null)
            {
                this.db.Remove(_admin);

                return this.db.SaveChanges();
            }

            return 0;
        }
    }
}
