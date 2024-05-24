using CallAJax.DataObj;
using CallAJax.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Runtime.InteropServices.JavaScript;

namespace CallAJax.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        //[ValidateAntiForgeryToken]
        [HttpPost]
        public ActionResult TestCallAjax([FromBody] JSObject data) 
        {
            return Json(new { success = true, message = "Data received succesfully" });
        }

        [HttpPost]
        public ActionResult ProcessData(TestObj data)
        {
            // Use the data object (e.g., data.Name, data.Age) as needed
            // Perform your logic here...

            return Json(new { success = true }); // Example response
        }

        [HttpGet]
        public JsonResult GetNames()
        {
            var names = new string[3]
            {
                "A",
                "B",
                "C"
            };

            return new JsonResult(Ok(names));
        }

        [HttpPost]
        public JsonResult PostName(string name)
        {
            return new JsonResult(Ok());
        }
    }
}
