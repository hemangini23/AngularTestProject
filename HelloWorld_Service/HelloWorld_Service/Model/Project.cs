using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace HelloWorld_Service.Model
{
    public class ProjectList
    {
        public List<Project> Projects { get; set; }
    }

    public class Project
    {
        [Key]
        public int ProjectId { get; set; }
        public string ProjectName { get; set; }
        public DateTime DateofStart { get; set; }
        public int TeamSize { get; set; }
    }

    //public class HelloWorldDbContext : DbContext
    //{
    //    public DbSet<Project> Projects { get; set; }

    //    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    //    {
    //        base.OnConfiguring(optionsBuilder);
    //        optionsBuilder.UseSqlServer("data source=locahost; integrity security=yes; intial catalog=HelloWorldDatabase");
    //    }
    //}
}
