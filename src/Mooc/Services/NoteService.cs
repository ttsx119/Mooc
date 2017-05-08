using Mooc.Config;
using Mooc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mooc.Services
{
    public class NoteService
    {
        private MySQLDBContext db;

        public NoteService(MySQLDBContext db)
        {
            this.db = db;

            // 确认该数据实体是否存在
            this.db.Database.EnsureCreated();
        }

        // GET: api/note
        public IEnumerable<Note> Get()
        {
            return this.db.Note.ToList();
        }

        // GET api/note/{id}
        public Note Get(int id)
        {
            return this.db.Note.FirstOrDefault(item => item.ID == id);
        }

        // POST api/note
        public int Post(Note note)
        {
            this.db.Add(note);

            return this.db.SaveChanges();
        }

        // PUT api/note/{id}
        public int Put(int id, Note note)
        {
            var _note = this.db.Note.FirstOrDefault(item => item.ID == id);

            if (_note != null)
            {
                _note.NoterID = note.NoterID;
                _note.Content = note.Content;
                _note.NoteTime = note.NoteTime;

                this.db.Update(_note);

                return this.db.SaveChanges();
            }

            return 0;
        }

        // DELETE api/note/{id}
        public int Delete(int id)
        {
            var _note = this.db.Note.FirstOrDefault(item => item.ID == id);

            if (_note != null)
            {
                this.db.Remove(_note);

                return this.db.SaveChanges();
            }

            return 0;
        }
    }
}
