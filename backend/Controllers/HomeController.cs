using Microsoft.AspNetCore.Mvc;

namespace CraftyDelights.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}