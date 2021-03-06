﻿using Microsoft.EntityFrameworkCore;
using Mooc.Models;
using MySQL.Data.EntityFrameworkCore.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mooc.Config
{
    public class MySQLDBContext : DbContext
    {
        // 告诉数据源已有数据实体
        public DbSet<Classification> Classification { get; set; }
        public DbSet<Course> Course { get; set; }
        public DbSet<Teacher> Teacher { get; set; }
        public DbSet<Student> Student { get; set; }
        public DbSet<Session> Session { get; set; }
        public DbSet<Note> Note { get; set; }
        public DbSet<Admin> Admin { get; set; }

        // 自定义数据源位置
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseMySQL(@"Server=localhost;database=mooc;uid=root;pwd=cc123456");
    }
}
