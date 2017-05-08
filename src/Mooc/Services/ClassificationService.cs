using Mooc.Config;
using Mooc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mooc.Services
{
    public class ClassificationService
    {
        private MySQLDBContext db;

        public ClassificationService(MySQLDBContext db)
        {
            this.db = db;

            // 确认该数据实体是否存在
            this.db.Database.EnsureCreated();
        }
                
        // GET: api/classification
        public IEnumerable<Classification> Get()
        {
            return this.db.Classification.ToList();
        }

        // GET api/classification/{id}
        public Classification Get(int id)
        {
            return this.db.Classification.FirstOrDefault(item => item.ID == id);
        }

        // POST api/classification
        public int Post(Classification classification)
        {
            this.db.Add(classification);

            return this.db.SaveChanges();
        }

        // PUT api/classification/{id}
        public int Put(int id, Classification classification)
        {
            var _classification = this.db.Classification.FirstOrDefault(item => item.ID == id);

            if (_classification != null) {
                _classification.Link = classification.Link;
                _classification.Name = classification.Name;
                _classification.ParentID = classification.ParentID;

                this.db.Update(_classification);

                return this.db.SaveChanges();
            }

            return 0;
        }

        // DELETE api/classification/{id}
        public int Delete(int id)
        {
            var _classification = this.db.Classification.FirstOrDefault(item => item.ID == id);

            if (_classification != null) {
                this.db.Remove(_classification);

                return this.db.SaveChanges();
            }

            return 0;
        }
    }
}
