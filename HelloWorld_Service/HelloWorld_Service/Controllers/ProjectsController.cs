using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using HelloWorld_Service.Model;

namespace HelloWorld_Service.Controllers
{
    public class ProjectsController : Controller
    {
        [HttpGet]
        [Route("api/projects")]
        public List<Project> GetProjectsList()
        {
            var ProjectList = new List<Project>();

            Project proj = new Project
            {
                ProjectId = 1001,
                ProjectName = "EY",
                DateofStart = Convert.ToDateTime("10/01/2011"),
                TeamSize = 10
            };
            Project proj1 = new Project
            {
                ProjectId = 1002,
                ProjectName = "JBHunt",
                DateofStart = Convert.ToDateTime("12/05/2012"),
                TeamSize = 20
            };
            Project proj2 = new Project
            {
                ProjectId = 1003,
                ProjectName = "AirCanada",
                DateofStart = Convert.ToDateTime("22/07/2015"),
                TeamSize = 30
            };
            Project proj3 = new Project
            {
                ProjectId = 1004,
                ProjectName = "AB",
                DateofStart = Convert.ToDateTime("01/11/2015"),
                TeamSize = 30
            };

            ProjectList.Add(proj);
            ProjectList.Add(proj1);
            ProjectList.Add(proj2);
            ProjectList.Add(proj3);
            
            return ProjectList;

        }

        //[HttpGet]
        //[Route("api/search/[searchkey]/[searchtext]")]
        //public List<Project> SearchProject(string searchby, string searchtext)
        //{
        //    if(searchby == "ProjectId")
        //    {
        //        projects = ProjectList.Where(tmp => tmp.ProjectId.ToString().Contains(searchtext).ToList());
        //    }
        //    if (searchby == "ProjectName")
        //    {  }
        //    if (searchby == "DateofStart")
        //    {  }
        //    if (searchby == "TeamSize")
        //    {  }
        //}
    };

    //public class ProjectsController : Controller
    //{
    //    [HttpGet]
    //    [Route("api/projects") ]
    //    public List<Project> Get()
    //    {
    //        HelloWorldDbContext db = new HelloWorldDbContext();
    //        List<Project> projects = db.Projects.ToList();
    //        return projects;
    //    }
    //};
}