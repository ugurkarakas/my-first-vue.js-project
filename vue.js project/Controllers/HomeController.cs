using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace vue.js_project.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        /*jsondan gelen verileri çekmek amacı ile oluşturulmuştur.*/

        public ActionResult JsonData()
        {
            return View();
        }
    }
}