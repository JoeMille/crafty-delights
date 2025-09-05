# Crafty Delights - Portfolio & Ecommerce Site

A portfolio and ecommerce website built with ASP.NET Core 9.0 MVC.

## Prerequisites
- .NET 9.0 SDK
- Visual Studio Code

## Quick Setup
```bash
# Create MVC project
dotnet new mvc -n CraftyDelights

# Navigate to project
cd CraftyDelights

# Run the application
dotnet run
```

## Project Structure
```
CraftyDelights/
├── Controllers/
│   ├── HomeController.cs        # Landing page
│   ├── ShopController.cs        # Product catalog
│   ├── BlogController.cs        # Blog posts
│   ├── GalleryController.cs     # Portfolio gallery
│   ├── ContactController.cs     # Contact form
│   └── AdminController.cs       # Admin login & dashboard
├── Views/
│   ├── Home/Index.cshtml        # Landing page
│   ├── Shop/Index.cshtml        # Shop page
│   ├── Blog/Index.cshtml        # Blog page
│   ├── Gallery/Index.cshtml     # Gallery page
│   ├── Contact/Index.cshtml     # Contact page
│   └── Admin/Login.cshtml       # Admin login
├── Models/                      # Data models
├── wwwroot/                     # Static files (CSS, JS, images)
└── Program.cs                   # App configuration
```

## Planned Features
- **Landing Page**: Hero section, featured products
- **Shop**: Product catalog with details
- **Gallery**: Portfolio showcase
- **Blog**: Content management
- **Contact**: Contact form
- **Admin**: Login and dashboard

## Next Steps
1. Create project structure
2. Build landing page
3. Set up admin login
4. Add remaining pages

Access at: `https://localhost:5001` after running `dotnet run`