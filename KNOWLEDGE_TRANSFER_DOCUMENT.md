# Knowledge Transfer Document - Sinki.AI Laravel Project

## Project Overview

**Project Name:** Sinki.AI
**Framework:** Laravel 12.x (PHP 8.2+)
**Frontend:** Vue.js 3 + Inertia.js + Tailwind CSS
**Branch:** Currently on `ssr` (SSR-enabled branch)
**Current Environment:** Development
**SSR:** Enabled for server-side rendering

## Table of Contents

1. [Project Architecture](#project-architecture)
2. [Key Features & Modules](#key-features--modules)
3. [Database Schema](#database-schema)
4. [API Routes & Endpoints](#api-routes--endpoints)
5. [Environment Setup](#environment-setup)
6. [Recent Changes](#recent-changes)
7. [Development Workflow](#development-workflow)
8. [Deployment](#deployment)
9. [Important Files & Configurations](#important-files--configurations)
10. [Authentication & Security](#authentication--security)
11. [Content Management](#content-management)
12. [Known Issues & TODO](#known-issues--todo)

---

## Project Architecture

### Tech Stack
- **Backend:** Laravel 12.x (PHP 8.2+)
- **Frontend:** Vue.js 3 + Inertia.js
- **CSS Framework:** Tailwind CSS
- **Database:** SQLite (development), supports MySQL/PostgreSQL
- **Queue:** Database driver
- **Cache:** Database driver
- **Mail:** Log driver (development), SendGrid for production
- **Authentication:** Laravel Sanctum
- **Server-Side Rendering:** Enabled with Node.js SSR server

### Key Dependencies
- `inertiajs/inertia-laravel`: Full-stack framework integration
- `tightenco/ziggy`: Laravel routes in JavaScript
- `anhskohbo/no-captcha`: Google reCAPTCHA integration
- `sendgrid/sendgrid`: Email service integration
- `laravel/breeze`: Authentication scaffolding

### Project Structure
```
├── app/
│   ├── Http/Controllers/          # Main controllers
│   ├── Http/Controllers/Admin/    # Admin panel controllers
│   ├── Http/Controllers/Api/      # API controllers
│   ├── Models/                    # Eloquent models (40 models)
│   └── Http/Middleware/           # Custom middleware
├── database/
│   ├── migrations/                # Database migrations (30+ files)
│   └── seeders/                   # Database seeders
├── routes/
│   ├── web.php                    # Public routes
│   └── admin.php                  # Admin routes
├── resources/
│   └── js/                        # Vue.js components
└── public/                        # Public assets
```

---

## Key Features & Modules

### 1. Public Website Features
- **Homepage:** Dynamic content sections with CMS management
- **About Us:** Company information with leadership section
- **Services:** Service pages with dynamic content
- **Blog System:** Full blog with categories, tags, and SEO
- **Contact Form:** Contact submissions with email notifications
- **SEO Management:** Meta tags, descriptions, and sitemap
- **Google reCAPTCHA:** Form protection

### 2. Admin Panel Features
- **Dashboard:** Administrative overview
- **User Management:** User creation, editing, permissions
- **Permission System:** Granular access control
- **Content Management:**
  - Homepage sections (Hero, What We Do, Outcomes, etc.)
  - About Us sections (Hero, Leadership, Why Partner, etc.)
  - Service pages management
  - Blog management (posts, categories, tags)
  - Footer management
- **Contact Submissions:** View and manage contact form submissions
- **Media Management:** Image uploads and management
- **SEO Settings:** Page-specific meta management

### 3. Authentication & Security
- **OTP-based Login:** Two-factor authentication for admin
- **Password Reset:** Secure password recovery with OTP
- **Rate Limiting:** Protection against brute force attacks
- **Permission-based Access:** Role-based access control
- **CSRF Protection:** Built-in Laravel protection

---

## Database Schema

### Key Models (40 total)
1. **User Management:**
   - `User` - Admin users
   - `Permission` - Available permissions
   - `UserPermission` - User-permission relationships

2. **Content Management:**
   - `Blog` - Blog posts
   - `Category` - Blog categories
   - `Tag` - Blog tags
   - `Contact` - Contact form submissions

3. **Homepage Sections:**
   - `HomepageHeroSection` - Hero section content
   - `HomepagePartnerBadge` - Partner badge content
   - `WhatWeDoSection` & `WhatWeDoItem` - What We Do section
   - `OutcomesSection` & `OutcomesItem` - Outcomes section
   - `OurApproachSection` - Our Approach content
   - `CoreServicesSection` & `CoreService` - Core services
   - `PlatformsSection` & `Platform` - Platforms we work with
   - `WhatSetsUsApartSection` & `WhatSetsUsApartItem` - USP section
   - `HomepageSeoSetting` - Homepage SEO metadata

4. **About Us Sections:**
   - `AboutUsHeroSection` - About Us hero
   - `AboutUsLeadershipSection` & `AboutUsLeadershipMember` - Leadership
   - `AboutUsWhatWeDoSection` & `AboutUsWhatWeDoItem` - What We Do on About page
   - `AboutUsWhyPartnerSection` & `AboutUsWhyPartnerFeature` - Why Partner section
   - `AboutUsPartnerBadge` - About Us partner badge

5. **Service Management:**
   - `ServicePage` - Dynamic service pages

6. **Footer Management:**
   - `FooterLink` - Footer navigation links

### Migration History
- **Recent migrations focus on:** Permission system, About Us sections, SEO management
- **Database migrations:** 30+ migration files covering all features
- **Seeders:** Comprehensive data seeding for development

---

## API Routes & Endpoints

### Public Routes (`web.php`)
```php
GET  /                           # Homepage with dynamic content
GET  /contact                    # Contact form page
POST /contact                    # Submit contact form
GET  /thank-you                  # Thank you page
GET  /blog                       # Blog listing
GET  /blog/{slug}               # Individual blog post
GET  /blog/{slug}/preview       # Blog preview
GET  /services                   # Services listing
GET  /services/{slug}           # Individual service page
GET  /about-us                  # About Us page
GET  /terms-and-conditions      # Terms page
GET  /privacy-policy            # Privacy policy page
GET  /sitemap.xml              # XML sitemap
```

### Admin Routes (`admin.php`)
```php
# Authentication
GET/POST /sinki-secure-login    # Admin login with OTP
POST     /verify-otp            # OTP verification
POST     /resend-otp            # Resend OTP
GET/POST /forgot-password       # Password reset flow

# Protected Admin Routes (require auth + permissions)
GET  /admin/dashboard           # Admin dashboard
GET  /admin/users               # User management
GET  /admin/submissions         # Contact submissions
GET  /admin/blogs               # Blog management
GET  /admin/categories          # Category management
GET  /admin/tags                # Tag management
GET  /admin/service-pages       # Service page management
GET  /admin/homepage            # Homepage content management
GET  /admin/about-us            # About Us content management
GET  /admin/footer              # Footer management
GET  /admin/user-permissions    # Permission management
```

### API Routes
```php
GET /api/footer                 # Footer data for frontend
```

---

## Environment Setup

### Prerequisites
- PHP 8.2+
- Node.js (for SSR and Vite)
- Composer
- NPM/Yarn

### Environment Configuration (`.env`)
```bash
# App Configuration
APP_NAME=Laravel
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost

# Database (SQLite for development)
DB_CONNECTION=sqlite

# Queue & Cache
QUEUE_CONNECTION=database
CACHE_STORE=database
SESSION_DRIVER=database

# Mail (SendGrid in production)
MAIL_MAILER=log

# Google reCAPTCHA
NOCAPTCHA_SITEKEY=your_site_key
NOCAPTCHA_SECRET=your_secret_key

# Inertia SSR
INERTIA_SSR_ENABLED=true
INERTIA_SSR_URL=http://127.0.0.1:13714
```

### Setup Instructions
1. **Clone and Install Dependencies:**
   ```bash
   composer install
   npm install
   ```

2. **Environment Setup:**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

3. **Database Setup:**
   ```bash
   php artisan migrate
   php artisan db:seed
   ```

4. **Development Server:**
   ```bash
   # Using composer script (runs all services)
   composer run dev

   # Or manually:
   php artisan serve
   php artisan queue:listen
   npm run dev
   node ssr-server.js  # For SSR
   ```

### Important Scripts
```json
{
  "composer": {
    "dev": "Runs all services concurrently",
    "test": "Runs application tests"
  },
  "npm": {
    "build": "Production build with SSR",
    "dev": "Development server"
  }
}
```

---

## Recent Changes

### Latest Commits (Current Branch: `ssr`)
1. **27cf1da** - Permission management added on the backend side
2. **5bd5064** - Changes done in the database migration files after resolving SQL error
3. **8b9b3b1** - Changes done in the seeder files
4. **fba55a2** - Meta postfix removed
5. **5d3b3c2** - Reset password functionality added
6. **3270dd1** - OTP functionality added from the admin side
7. **03f8888** - Added meta management in the about us page from the admin side
8. **9cdcc0b** - CTA section added on the about us page admin side
9. **da9b053** - Why partner with us section dynamically added on the backend
10. **1dfb59f** - Leadership section added on the backend

### Branch Information
- **Main Branch:** `main`
- **Current Working Branch:** `ssr`
- **Remote Branches:** `origin/main`, `origin/ssr`

### Recent Focus Areas
1. **Permission System:** Complete overhaul of user permissions and access control
2. **About Us Page:** Full CMS functionality added for all sections
3. **Authentication:** Enhanced security with OTP and password reset
4. **Database Optimization:** Migration fixes and seeder improvements
5. **Meta Management:** SEO and metadata handling improvements

---

## Development Workflow

### Branch Strategy
- **main:** Production-ready code
- **ssr:** Development branch with SSR features

### Code Standards
- Follow PSR-12 PHP coding standards
- Use Laravel best practices
- Vue.js 3 Composition API preferred
- Tailwind CSS for styling

### Testing
- PHPUnit for backend testing
- Test configuration in `phpunit.xml`
- Run tests with: `composer run test`

### Deployment
#### SSR Deployment Files
- `deploy-server-ssr.sh` - Production deployment script
- `deploy-staging-ssr.sh` - Staging deployment script
- `nginx-config-with-ssr.conf` - Nginx configuration for SSR
- `ssr-daemon.js` - SSR daemon service
- `ssr-server.js` - SSR server implementation

---

## Important Files & Configurations

### Configuration Files
- `composer.json` - PHP dependencies and scripts
- `package.json` - Node.js dependencies and build scripts
- `vite.config.js` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `phpunit.xml` - Testing configuration

### Key Directories
- `/app/Http/Controllers/` - Main application controllers
- `/app/Http/Controllers/Admin/` - Admin panel controllers
- `/app/Models/` - Eloquent models (40 models)
- `/database/migrations/` - Database schema migrations
- `/database/seeders/` - Database seeders
- `/resources/js/` - Vue.js frontend components
- `/routes/` - Application routes

### Backup & Database
- `backup_database.sh` - Database backup script
- `backup_config.example` - Backup configuration template

---

## Authentication & Security

### Admin Authentication Flow
1. **Login:** Email + Password → OTP sent via email
2. **OTP Verification:** 6-digit code verification
3. **Session Management:** Authenticated sessions
4. **Password Reset:** Secure reset with email verification

### Permission System
- **Granular Permissions:** Read, Write, Delete for each module
- **Permission Categories:**
  - `dashboard` - Dashboard access
  - `users` - User management
  - `submissions` - Contact form submissions
  - `blogs` - Blog management
  - `categories` - Category management
  - `tags` - Tag management
  - `service-pages` - Service page management
  - `homepage` - Homepage content management
  - `about-us` - About Us content management
  - `footer` - Footer management
  - `media` - Media management
  - `profile` - Profile management
  - `settings` - System settings

### Security Features
- CSRF protection on all forms
- Rate limiting on authentication endpoints
- OTP-based two-factor authentication
- Secure password reset flow
- Permission-based route protection

---

## Content Management

### Homepage Sections
1. **Hero Section:** Main banner with CTA
2. **Partner Badge:** Company credentials/certifications
3. **What We Do:** Service overview with items
4. **Outcomes:** Results/benefits section
5. **Our Approach:** Methodology description
6. **Core Services:** Featured services
7. **Platforms:** Technology platforms
8. **What Sets Us Apart:** Unique selling points
9. **SEO Settings:** Meta tags and descriptions

### About Us Sections
1. **Hero Section:** About Us banner
2. **Story Section:** Company story/background
3. **What We Do:** Services on About page
4. **Our Approach:** Approach methodology with steps
5. **Leadership:** Team member profiles
6. **Why Partner:** Partnership benefits
7. **CTA Section:** Call-to-action
8. **Partner Badge:** About Us credentials

### Blog System
- **Posts:** Full WYSIWYG editor with Quill
- **Categories:** Hierarchical categorization
- **Tags:** Tagging system
- **SEO:** Meta descriptions, featured images
- **Publishing:** Draft/published status with scheduling

---

## Known Issues & TODO

### Current Issues
1. **Database Migration Dependencies:** Some migrations may have dependency issues (recently resolved)
2. **SSR Performance:** Monitor SSR server performance under load
3. **Image Optimization:** Consider implementing image compression

### Recommended Next Steps
1. **Testing:** Implement comprehensive feature tests
2. **API Documentation:** Create API documentation
3. **Performance:** Database query optimization
4. **Monitoring:** Implement application monitoring
5. **Backup:** Automate backup processes
6. **CI/CD:** Set up continuous integration

### Development Tips
1. **Database Seeding:** Always run seeders after migrations in development
2. **SSR:** Restart SSR server after Vue component changes
3. **Permissions:** Test permission changes thoroughly
4. **Cache:** Clear cache after configuration changes: `php artisan config:clear`
5. **Queue:** Monitor queue jobs: `php artisan queue:work`

---

## Contact & Support

### Key Admin User
- Default admin user is created via seeder
- Check `AdminUserSeeder.php` for credentials
- Use `/sinki-secure-login` for admin access

### Development Notes
- The project uses Inertia.js for seamless SPA experience
- All admin routes are protected with authentication and permission middleware
- Frontend uses Vue 3 Composition API with Tailwind CSS
- SSR is enabled for better SEO and performance

---

**Last Updated:** December 2024
**Version:** Laravel 12.x
**Maintainer:** Development Team
**Branch:** ssr

---

*This document should be updated regularly as new features are added or major changes are made to the codebase.*