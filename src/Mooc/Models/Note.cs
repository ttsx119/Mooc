using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mooc.Models
{
    public class Note
    {
        public int ID { get; set; }  //留言板ID
        public string NoterID { get; set; }   //留言人ID
        public string Content { get; set; }    //留言内容
        public DateTime NoteTime { get; set; }    //留言时间
        
    }
}
