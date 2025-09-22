using Microsoft.AspNetCore.Mvc;

namespace CraftyDelights.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ShopController : ControllerBase
    {
        [HttpGet("featured")]
        public IActionResult GetFeatured()
        {
            var products = new[]
            {
                new { id = 1, name = "Handwoven Basket", description = "Natural fiber basket perfect for storage", price = 45.99 },
                new { id = 2, name = "Ceramic Vase", description = "Hand-glazed decorative vase with unique patterns", price = 32.50 },
                new { id = 3, name = "Artisan Jewelry Set", description = "Unique handcrafted jewelry pieces", price = 89.99 }
            };
            
            return Ok(products);
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var products = new[]
            {
                new { id = 1, name = "Handwoven Basket", description = "Natural fiber basket", price = 45.99, category = "Home" },
                new { id = 2, name = "Ceramic Vase", description = "Hand-glazed decorative vase", price = 32.50, category = "Home" },
                new { id = 3, name = "Artisan Jewelry Set", description = "Unique handcrafted pieces", price = 89.99, category = "Jewelry" },
                new { id = 4, name = "Wooden Bowl", description = "Hand-carved serving bowl", price = 28.75, category = "Kitchen" }
            };
            
            return Ok(products);
        }
    }
}