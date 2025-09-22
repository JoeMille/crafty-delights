using Microsoft.AspNetCore.Mvc;

namespace CraftyDelights.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : ControllerBase
    {
        [HttpGet("health")]
        public IActionResult Health() => Ok(new { status = "ok", message = "API is running" });
    }
}