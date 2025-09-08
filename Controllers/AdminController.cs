using CraftyDelights.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace CraftyDelights.Controllers
{
    public class AdminController : Controller
    {
        private readonly SignInManager<ApplicationUser> _signIn;
        private readonly UserManager<ApplicationUser> _users;
        private readonly RoleManager<IdentityRole> _roles;

        public AdminController(SignInManager<ApplicationUser> signIn,
                               UserManager<ApplicationUser> users,
                               RoleManager<IdentityRole> roles)
        {
            _signIn = signIn;
            _users = users;
            _roles = roles;
        }

        [HttpGet]
        public IActionResult Login(string? returnUrl = null)
        {
            ViewData["ReturnUrl"] = returnUrl;
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(string email, string password, string? returnUrl = null)
        {
            var user = await _users.FindByEmailAsync(email);
            if (user != null)
            {
                var result = await _signIn.PasswordSignInAsync(user, password, true, false);
                if (result.Succeeded)
                {
                    return Redirect(returnUrl ?? "/Admin/Dashboard");
                }
            }
            ModelState.AddModelError("", "Invalid login");
            return View();
        }

        [Authorize(Roles = "Admin")]
        public IActionResult Dashboard()
        {
            return View();
        }

        [Authorize(Roles = "Admin")]
        public IActionResult AccessDenied() => Content("Access Denied");

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            await _signIn.SignOutAsync();
            return RedirectToAction("Login");
        }

        // One-time seed endpoint (remove/secure later)
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> SeedAdmin(string email = "admin@site.test", string password = "Admin123!")
        {
            if (!await _roles.RoleExistsAsync("Admin"))
                await _roles.CreateAsync(new IdentityRole("Admin"));

            var existing = await _users.FindByEmailAsync(email);
            if (existing == null)
            {
                var user = new ApplicationUser { UserName = email, Email = email, EmailConfirmed = true };
                var create = await _users.CreateAsync(user, password);
                if (create.Succeeded)
                    await _users.AddToRoleAsync(user, "Admin");
            }
            return Ok("Admin ensured");
        }
    }
}