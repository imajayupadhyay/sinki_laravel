<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sinki | Your Databricks Strategy & Innovation Partner</title>
    <meta name="description" content="At Sinki, we help organizations innovate with Databricks by unifying data, accelerating analytics, and delivering AI-powered business outcomes.">

    <!-- Favicon -->
    <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./assets/images/favicon.png">
    <link rel="shortcut icon" href="./assets/images/favicon.png">
    <link rel="apple-touch-icon" href="./assets/images/favicon.png">

    <!-- Tailwind CSS Local -->
    <link rel="stylesheet" href="./assets/css/styles.css">

    <!-- Google Fonts - Instrument Sans -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- Custom Styles -->
    <link rel="stylesheet" href="./assets/css/main.css">
    <link rel="stylesheet" href="./assets/css/hero.css">
    <link rel="stylesheet" href="./assets/css/scroll-fix.css">
    <link rel="stylesheet" href="./assets/css/calendly-modal.css">
    <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PSR5CLQF');</script>
<!-- End Google Tag Manager -->

</head>
<body class="bg-white text-brand-dark antialiased">

    <!-- Header Component -->
    <?php include "components/header.php"; ?>

    <!-- Hero Section -->
    <div id="hero">
        <section class="hero-section relative min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-32" style="background-image: url('./assets/images/heroobannersinki.png'); background-size: cover; background-position: center; background-repeat: no-repeat; background-attachment: scroll;">
    <!-- Background Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 z-0"></div>

    <!-- Content Container -->
    <div class="container-custom relative z-10 px-3 sm:px-6 py-6 sm:py-20">
        <div class="max-w-[1518px] mx-auto text-center">
            <!-- Main Heading -->
            <h1 class="hero-title text-brand-dark font-semibold leading-tight sm:leading-relaxed lg:leading-[100px] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[100px] mb-4 sm:mb-8">
                We Help You Unlock The Value Of Your Data
            </h1>

            <!-- Subtitle -->
            <p class="hero-subtitle text-brand-light text-lg sm:text-xl md:text-2xl lg:text-[26px] leading-snug sm:leading-relaxed lg:leading-[39px] max-w-[95%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[1200px] mx-auto mb-8 sm:mb-12">
                We turn raw data into intelligence with Databricks. From data foundations to AI adoption, we deliver secure, scalable systems.
            </p>

            <!-- CTA Buttons -->
            <div class="hero-cta flex flex-wrap items-center justify-center gap-6">
                <!-- Primary Button -->
                <button id="openCalendlyModal" onclick="document.getElementById('calendlyModal').style.display='flex'; setTimeout(() => document.getElementById('calendlyModal').classList.add('active'), 10);" class="group inline-flex items-center gap-3 px-9 py-4 bg-brand-red border-2 border-brand-red rounded-full text-white text-lg font-bold capitalize hover:bg-transparent hover:text-brand-red transition-all duration-300 btn-hover-effect">
                    Book a Strategy Session
                    <div class="w-10 h-10 flex items-center justify-center">
                        <svg class="w-8 h-8 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </div>
                </button>

                <!-- Secondary Button -->
                <a href="#services" class="group inline-flex items-center gap-3 px-9 py-4 bg-transparent border-2 border-brand-red rounded-full text-brand-red text-lg font-bold capitalize hover:bg-brand-red hover:text-brand-red transition-all duration-300 btn-hover-effect">
                    Explore Services
                    <div class="w-10 h-10 flex items-center justify-center">
                        <svg class="w-8 h-8 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    </div>

    <!-- Decorative Elements -->
    <!-- <div class="absolute bottom-40 left-20 animate-float">
        <div class="w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center shadow-lg">
            <div class="w-[45px] h-[45px] bg-white rounded-sm transform rotate-45"></div>
        </div>
    </div> -->

    <!-- <div class="absolute bottom-40 right-20 animate-float-delayed">
        <div class="w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center shadow-lg">
            <div class="w-[45px] h-[45px] bg-white"></div>
        </div>
    </div> -->
</section>

<!-- Partner Badge Section - ADD THIS -->
<section class="partner-badge-section bg-brand-dark border-b border-white/15">
    <div class="container mx-auto px-3 sm:px-6">
        <div class="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 h-auto sm:h-[50px] py-3 sm:py-0">
            <span class="text-white text-base sm:text-xl font-medium tracking-wide text-center">
                An Official Databricks Partner
            </span>
            <!-- Databricks Logo with SVG fallback -->
            <div class="databricks-logo-wrapper w-full sm:w-auto flex justify-center">
                <img src="./assets/images/databrickslight.png"
                     alt="Databricks Logo"
                     class="h-5 sm:h-6 partner-logo w-auto max-w-full"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-block';">
                <!-- Inline SVG Fallback -->
                <svg class="h-5 sm:h-6 partner-logo w-auto max-w-full" style="display: none;" viewBox="0 0 144 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H132C138.627 0 144 5.37258 144 12C144 18.6274 138.627 24 132 24H12C5.37258 24 0 18.6274 0 12Z" fill="#FF3621"/>
                    <path d="M20.5 6.5L12 11L3.5 6.5L12 2L20.5 6.5Z" fill="white"/>
                    <path d="M20.5 12L12 16.5L3.5 12V6.5L12 11L20.5 6.5V12Z" fill="white"/>
                    <path d="M20.5 17.5L12 22L3.5 17.5V12L12 16.5L20.5 12V17.5Z" fill="white"/>
                    <text x="28" y="16" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="white">databricks</text>
                </svg>
            </div>
        </div>
    </div>
</section>
    </div>
    
<section class="what-we-do-section bg-white py-20 lg:py-32 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute top-10 right-10 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-10 left-10 w-40 h-40 bg-brand-red/5 rounded-full blur-3xl animate-pulse-delayed"></div>

    <div class="container-custom max-w-[1920px] mx-auto px-12 lg:px-24">
        <!-- Section Label -->
        <div class="mb-8 animate-fade-in ml-3">
            <span class="text-brand-dark text-lg font-medium uppercase tracking-[1.8px]">
                What We Do
            </span>
        </div>

        <!-- Main Heading -->
        <h2 class="text-brand-dark font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[78px] leading-tight lg:leading-[85.8px] mb-6 max-w-[1167px] ml-3 animate-slide-up">
            We Simplify Your Databricks Journey End-to-End
        </h2>

        <!-- Description -->
        <p class="text-brand-dark text-xl lg:text-[30px] leading-relaxed lg:leading-[45px] mb-16 max-w-[1074px] ml-3 animate-slide-up-delayed">
            Wherever you are in your Databricks journey, planning, migrating, or scaling, we help you move faster and with confidence.
        </p>

        <!-- Service Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-3">
            
            <!-- Card 1: Strategy & Planning -->
            <div class="service-card group bg-white border border-black/10 rounded-[15px] p-8 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                <div class="flex items-start gap-6">
                    <!-- Icon Left -->
                    <div class="flex-shrink-0">
                        <div class="icon-wrapper w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                            <!-- Target/Bullseye Icon -->
                            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10"/>
                                <circle cx="12" cy="12" r="6"/>
                                <circle cx="12" cy="12" r="2"/>
                            </svg>
                        </div>
                    </div>
                    
                    <!-- Content Right -->
                    <div class="card-content flex-1">
                        <h3 class="text-brand-dark text-[24px] font-semibold leading-[36px] tracking-[0.48px] mb-2 group-hover:text-brand-red transition-colors duration-300">
                            Strategy & Planning
                        </h3>
                        <p class="text-brand-dark text-[21px] font-normal leading-[31.5px] tracking-[0.42px]">
                            Design data & AI roadmaps tailored to your goals.
                        </p>
                    </div>
                </div>
                
                <!-- Hover Arrow Indicator -->
                <div class="mt-4 ml-[106px] opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    <svg class="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                </div>
            </div>

            <!-- Card 2: Implementation -->
            <div class="service-card group bg-white border border-black/10 rounded-[15px] p-8 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                <div class="flex items-start gap-6">
                    <!-- Icon Left -->
                    <div class="flex-shrink-0">
                        <div class="icon-wrapper w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                            <!-- Lightbulb & Gear Icon -->
                            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                                <circle cx="18" cy="18" r="3"/>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 16.5v3M16.5 18h3"/>
                            </svg>
                        </div>
                    </div>
                    
                    <!-- Content Right -->
                    <div class="card-content flex-1">
                        <h3 class="text-brand-dark text-[24px] font-semibold leading-[36px] tracking-[0.48px] mb-2 group-hover:text-brand-red transition-colors duration-300">
                            Implementation
                        </h3>
                        <p class="text-brand-dark text-[21px] font-normal leading-[31.5px] tracking-[0.42px]">
                            Build & scale Databricks with speed and confidence.
                        </p>
                    </div>
                </div>
                
                <!-- Hover Arrow Indicator -->
                <div class="mt-4 ml-[106px] opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    <svg class="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                </div>
            </div>

            <!-- Card 3: Adoption & Support -->
            <div class="service-card group bg-white border border-black/10 rounded-[15px] p-8 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                <div class="flex items-start gap-6">
                    <!-- Icon Left -->
                    <div class="flex-shrink-0">
                        <div class="icon-wrapper w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                            <!-- Hands/Support Icon -->
                            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                            </svg>
                        </div>
                    </div>
                    
                    <!-- Content Right -->
                    <div class="card-content flex-1">
                        <h3 class="text-brand-dark text-[24px] font-semibold leading-[36px] tracking-[0.48px] mb-2 group-hover:text-brand-red transition-colors duration-300">
                            Adoption & Support
                        </h3>
                        <p class="text-brand-dark text-[21px] font-normal leading-[31.5px] tracking-[0.42px]">
                            Enable teams to fully leverage the platform.
                        </p>
                    </div>
                </div>
                
                <!-- Hover Arrow Indicator -->
                <div class="mt-4 ml-[106px] opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    <svg class="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                </div>
            </div>

        </div>
    </div>
</section>

<section class="outcomes-section relative overflow-hidden py-20 lg:py-32">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
             alt="Background" 
             class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90"></div>
    </div>

    <div class="container-custom max-w-[1920px] mx-auto px-12 lg:px-24 relative z-10">
        <!-- Section Label -->
        <div class="mb-8 text-center animate-fade-in">
            <span class="text-white text-lg font-medium uppercase tracking-[1.8px]">
                Outcomes You Can Expect
            </span>
        </div>

        <!-- Main Heading -->
        <h2 class="text-white font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[78px] leading-tight lg:leading-[85.8px] mb-6 text-center max-w-[1275px] mx-auto animate-slide-up">
            Real Results You'll Achieve With Us
        </h2>

        <!-- Description -->
        <p class="text-white text-xl lg:text-[30px] leading-relaxed lg:leading-[45px] mb-16 text-center max-w-[1145px] mx-auto animate-slide-up-delayed">
            Think outcomes, not overhead. Our approach ensures Databricks delivers exactly what you need.
        </p>

        <!-- Outcome Cards Grid - 3x2 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <!-- Card 1: Smarter, Faster Decisions -->
            <div class="outcome-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer">
                <!-- Icon -->
                <div class="mb-8 flex justify-center">
                    <div class="icon-wrapper w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                        </svg>
                    </div>
                </div>
                
                <!-- Content -->
                <div class="text-center">
                    <h3 class="text-white text-[24px] lg:text-[28px] font-semibold leading-[36px] lg:leading-[42px] tracking-[0.48px] lg:tracking-[0.56px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                        Smarter, Faster Decisions
                    </h3>
                    <p class="text-white text-[21px] lg:text-[24px] font-normal leading-[31.5px] lg:leading-[36px] tracking-[0.42px] lg:tracking-[0.48px] opacity-90">
                        Actionable insights driving real business outcomes
                    </p>
                </div>
            </div>

            <!-- Card 2: Faster Time to Value -->
            <div class="outcome-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer">
                <!-- Icon -->
                <div class="mb-8 flex justify-center">
                    <div class="icon-wrapper w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                </div>
                
                <!-- Content -->
                <div class="text-center">
                    <h3 class="text-white text-[24px] lg:text-[28px] font-semibold leading-[36px] lg:leading-[42px] tracking-[0.48px] lg:tracking-[0.56px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                        Faster Time to Value
                    </h3>
                    <p class="text-white text-[21px] lg:text-[24px] font-normal leading-[31.5px] lg:leading-[36px] tracking-[0.42px] lg:tracking-[0.48px] opacity-90">
                        Accelerated migrations, pipelines, and analytics
                    </p>
                </div>
            </div>

            <!-- Card 3: Optimized Spend -->
            <div class="outcome-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer">
                <!-- Icon -->
                <div class="mb-8 flex justify-center">
                    <div class="icon-wrapper w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                </div>
                
                <!-- Content -->
                <div class="text-center">
                    <h3 class="text-white text-[24px] lg:text-[28px] font-semibold leading-[36px] lg:leading-[42px] tracking-[0.48px] lg:tracking-[0.56px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                        Optimized Spend
                    </h3>
                    <p class="text-white text-[21px] lg:text-[24px] font-normal leading-[31.5px] lg:leading-[36px] tracking-[0.42px] lg:tracking-[0.48px] opacity-90">
                        Lower costs on Databricks and cloud infrastructure
                    </p>
                </div>
            </div>

            <!-- Card 4: Modern, Efficient Data Platform -->
            <div class="outcome-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer">
                <!-- Icon -->
                <div class="mb-8 flex justify-center">
                    <div class="icon-wrapper w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
                        </svg>
                    </div>
                </div>
                
                <!-- Content -->
                <div class="text-center">
                    <h3 class="text-white text-[24px] lg:text-[28px] font-semibold leading-[36px] lg:leading-[42px] tracking-[0.48px] lg:tracking-[0.56px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                        Modern, Efficient Data Platform
                    </h3>
                    <p class="text-white text-[21px] lg:text-[24px] font-normal leading-[31.5px] lg:leading-[36px] tracking-[0.42px] lg:tracking-[0.48px] opacity-90">
                        Clean, governed, and ready for growth
                    </p>
                </div>
            </div>

            <!-- Card 5: AI On Demand -->
            <div class="outcome-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer">
                <!-- Icon -->
                <div class="mb-8 flex justify-center">
                    <div class="icon-wrapper w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                        </svg>
                    </div>
                </div>
                
                <!-- Content -->
                <div class="text-center">
                    <h3 class="text-white text-[24px] lg:text-[28px] font-semibold leading-[36px] lg:leading-[42px] tracking-[0.48px] lg:tracking-[0.56px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                        AI On Demand
                    </h3>
                    <p class="text-white text-[21px] lg:text-[24px] font-normal leading-[31.5px] lg:leading-[36px] tracking-[0.42px] lg:tracking-[0.48px] opacity-90">
                        Practical, scalable solutions when you need them
                    </p>
                </div>
            </div>

            <!-- Card 6: Streamlined Governance -->
            <div class="outcome-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer">
                <!-- Icon -->
                <div class="mb-8 flex justify-center">
                    <div class="icon-wrapper w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                        </svg>
                    </div>
                </div>
                
                <!-- Content -->
                <div class="text-center">
                    <h3 class="text-white text-[24px] lg:text-[28px] font-semibold leading-[36px] lg:leading-[42px] tracking-[0.48px] lg:tracking-[0.56px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                        Streamlined Governance
                    </h3>
                    <p class="text-white text-[21px] lg:text-[24px] font-normal leading-[31.5px] lg:leading-[36px] tracking-[0.42px] lg:tracking-[0.48px] opacity-90">
                        Secure, compliant, and future-ready
                    </p>
                </div>
            </div>

        </div>
    </div>
</section>



<section id="approach" class="approach-section bg-white py-20 lg:py-32 relative overflow-hidden">
    <div class="container-custom max-w-[1920px] mx-auto px-12 lg:px-24">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <!-- Left Content -->
            <div class="approach-content">
                <!-- Section Label -->
                <div class="mb-8 animate-fade-in">
                    <span class="text-brand-dark text-lg font-medium uppercase tracking-[1.8px]">
                        Our Approach
                    </span>
                </div>

                <!-- Main Heading -->
                <h2 class="text-brand-dark font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[78px] leading-tight lg:leading-[85.8px] mb-6 max-w-[925px] animate-slide-up">
                    How We Make Databricks Work For You
                </h2>

                <!-- Description -->
                <p class="text-brand-dark text-xl lg:text-[30px] leading-relaxed lg:leading-[45px] mb-12 max-w-[747px] animate-slide-up-delayed">
                    Our proven 3-step approach ensures Databricks adapts to your business needs, not the other way around.
                </p>
            </div>

            <!-- Right Content - Flow Diagram -->
            <div class="approach-diagram relative animate-slide-in-right p-2">
                <!-- Responsive Flow Diagram Images -->
                <div class="diagram-container relative w-full h-[400px] sm:h-[500px] lg:h-[700px] flex items-center justify-center">

                    <!-- Mobile Image (hidden on sm and above) -->
                    <img src="./assets/images/Infographic.png"
                         alt="Our 3-Step Approach - Mobile"
                         class="block sm:hidden w-full h-full object-contain"
                         onerror="this.style.display='none';">

                    <!-- Desktop Image (hidden on mobile, shown on sm and above) -->
                    <img src="./assets/images/Infographic.png"
                         alt="Our 3-Step Approach - Desktop"
                         class="hidden sm:block w-full h-full object-contain"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">

                    <!-- Fallback placeholder if images are not found -->
                    <div class="fallback-placeholder absolute inset-0 hidden items-center justify-center bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300">
                        <div class="text-center p-8">
                            <svg class="w-24 h-24 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                            <p class="text-gray-500 text-lg font-medium">
                                Approach Flow Diagram
                            </p>
                            <p class="text-gray-400 text-sm mt-2">
                                Place your images at:<br>
                                Mobile: assets/images/Infographic-mobile.png<br>
                                Desktop: assets/images/Infographic.png
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Decorative Elements -->
                <div class="absolute -top-10 -right-10 w-32 h-32 bg-brand-red/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-red/10 rounded-full blur-3xl animate-pulse-slow-delayed"></div>
            </div>

        </div>
    </div>
</section>

<section id="services" class="core-services-section relative overflow-hidden py-20 lg:py-32">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0" style="background-image: url('./assets/images/heroobannersinki.png'); background-size: cover; background-position: center; background-repeat: no-repeat;">
    </div>

    <div class="container-custom max-w-[1920px] mx-auto px-12 lg:px-24 relative z-10">
        <!-- Section Label -->
        <div class="mb-8 text-center animate-fade-in">
            <span class="text-brand-dark text-lg font-medium uppercase tracking-[1.8px]">
                Core Services
            </span>
        </div>

        <!-- Main Heading -->
        <h2 class="text-brand-dark font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[78px] leading-tight lg:leading-[85.8px] mb-6 text-center max-w-[1281px] mx-auto animate-slide-up">
            Databricks Services We Deliver
        </h2>

        <!-- Description -->
        <p class="text-brand-dark text-xl lg:text-[30px] leading-relaxed lg:leading-[45px] mb-16 text-center max-w-[1094px] mx-auto animate-slide-up-delayed">
            From Lakehouse Build to Gen AI and Business Intelligence, we make sure your Databricks investment delivers measurable impact.
        </p>

        <!-- Service Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            
            <!-- Card 1: Data Engineering & Modernization -->
            <div class="service-card group bg-white/50 backdrop-blur-sm border border-black/10 rounded-[25px] p-8 hover:bg-white/80 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative">
                <!-- Icon and Arrow -->
                <div class="flex items-start justify-between mb-6">
                    <div class="icon-wrapper w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                        </svg>
                    </div>
                    <div class="arrow-icon opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        <svg class="w-7 h-7 text-brand-dark" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17"/>
                        </svg>
                    </div>
                </div>
                
                <!-- Title -->
                <h3 class="text-brand-dark text-[30px] font-semibold leading-[39px] mb-6 group-hover:text-brand-red transition-colors duration-300">
                    Data Engineering & Modernization
                </h3>
                
                <!-- Tags -->
                <div class="flex flex-wrap gap-2">
                    <span class="tag">Data Pipelines</span>
                    <span class="tag">Data Orchestration</span>
                    <span class="tag">Data Integration</span>
                    <span class="tag">Data Migration</span>
                    <span class="tag">Data Modernization</span>
                    <span class="tag">Data Lakehouse Consulting</span>
                </div>
            </div>

            <!-- Card 2: Data Management & Governance -->
            <div class="service-card group bg-white/50 backdrop-blur-sm border border-black/10 rounded-[25px] p-8 hover:bg-white/80 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative">
                <!-- Icon and Arrow -->
                <div class="flex items-start justify-between mb-6">
                    <div class="icon-wrapper w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                    </div>
                    <div class="arrow-icon opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        <svg class="w-7 h-7 text-brand-dark" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17"/>
                        </svg>
                    </div>
                </div>
                
                <!-- Title -->
                <h3 class="text-brand-dark text-[30px] font-semibold leading-[39px] mb-6 group-hover:text-brand-red transition-colors duration-300">
                    Data Management & Governance
                </h3>
                
                <!-- Tags -->
                <div class="flex flex-wrap gap-2">
                    <span class="tag">Data Management Consulting</span>
                    <span class="tag">Cloud Data Management</span>
                    <span class="tag">Data Governance</span>
                    <span class="tag">Unity Catalog Implementation & Management</span>
                    <span class="tag">Unity Catalog Migration</span>
                </div>
            </div>

            <!-- Card 3: Data Analytics & Business Intelligence -->
            <div class="service-card group bg-white/50 backdrop-blur-sm border border-black/10 rounded-[25px] p-8 hover:bg-white/80 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative">
                <!-- Icon and Arrow -->
                <div class="flex items-start justify-between mb-6">
                    <div class="icon-wrapper w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
                        </svg>
                    </div>
                    <div class="arrow-icon opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        <svg class="w-7 h-7 text-brand-dark" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17"/>
                        </svg>
                    </div>
                </div>
                
                <!-- Title -->
                <h3 class="text-brand-dark text-[30px] font-semibold leading-[39px] mb-6 group-hover:text-brand-red transition-colors duration-300">
                    Data Analytics & Business Intelligence
                </h3>
                
                <!-- Tags -->
                <div class="flex flex-wrap gap-2">
                    <span class="tag">Data Analytics Consulting</span>
                    <span class="tag">Business Intelligence</span>
                    <span class="tag">BI Modernization</span>
                    <span class="tag">Data Visualization & Reporting</span>
                    <span class="tag">Databricks SQL Analytics</span>
                </div>
            </div>

            <!-- Card 4: Data Science -->
            <div class="service-card group bg-white/50 backdrop-blur-sm border border-black/10 rounded-[25px] p-8 hover:bg-white/80 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative">
                <!-- Icon and Arrow -->
                <div class="flex items-start justify-between mb-6">
                    <div class="icon-wrapper w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                        </svg>
                    </div>
                    <div class="arrow-icon opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        <svg class="w-7 h-7 text-brand-dark" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17"/>
                        </svg>
                    </div>
                </div>
                
                <!-- Title -->
                <h3 class="text-brand-dark text-[30px] font-semibold leading-[39px] mb-6 group-hover:text-brand-red transition-colors duration-300">
                    Data Science
                </h3>
                
                <!-- Tags -->
                <div class="flex flex-wrap gap-2">
                    <span class="tag">AI Strategy & Consulting</span>
                    <span class="tag">GenAI Services</span>
                    <span class="tag">ML & Predictive Analytics</span>
                    <span class="tag">MLOps & AI Platforms</span>
                    <span class="tag">LLMOps</span>
                </div>
            </div>

        </div>

        <!-- CTA Button -->
        <div class="text-center animate-fade-in-up">
            <a href="#services" class="inline-flex items-center gap-3 px-8 py-4 bg-brand-dark border-2 border-brand-dark rounded-full text-white text-lg font-bold capitalize hover:bg-transparent hover:text-brand-dark transition-all duration-300 btn-hover-effect">
                Explore All Services
                <svg class="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
            </a>
        </div>
    </div>

</section>

<section id="platforms" class="platforms-section bg-white py-20 lg:py-32 relative overflow-hidden">
    <div class="container-custom max-w-[1920px] mx-auto px-12 lg:px-24">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <!-- Left Content -->
            <div class="platforms-content">
                <!-- Section Label -->
                <div class="mb-8 animate-fade-in">
                    <span class="text-brand-dark text-lg font-medium uppercase tracking-[1.8px]">
                        Platforms We Work With
                    </span>
                </div>

                <!-- Main Heading -->
                <h2 class="text-brand-dark font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[78px] leading-tight lg:leading-[85.8px] mb-6 max-w-[852px] animate-slide-up">
                    Built on the Platforms You Trust
                </h2>

                <!-- Description -->
                <p class="text-brand-dark text-xl lg:text-[30px] leading-relaxed lg:leading-[45px] mb-12 max-w-[760px] animate-slide-up-delayed">
                    We bring Databricks to life on the enterprise platforms you already rely on.
                </p>
            </div>

            <!-- Right Content - Platform Logos Grid -->
            <div class="platforms-grid relative animate-slide-in-right">
                <!-- Logo Grid Container - Row Structure -->
                <div class="flex flex-col gap-6">
                    
                    <!-- Row 1 - Single Card (Databricks) -->
                    <div class="flex justify-center">
                        <div class="platform-logo-card group bg-white border border-brand-gray rounded-[25px] p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-500 cursor-pointer flex items-center justify-center min-h-[100px] sm:min-h-[120px] lg:min-h-[143px] w-full max-w-[250px] sm:max-w-[286px]">
                            <img src="./assets/images/databricks.png"
                                 alt="Databricks"
                                 class="max-w-full h-auto object-contain max-h-[60px] sm:max-h-[70px] lg:max-h-[80px]"
                                 onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        </div>
                    </div>

                    <!-- Row 2 - Three Cards (Azure, Google Cloud, AWS) -->
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
                        <div class="platform-logo-card group bg-white border border-brand-gray rounded-[25px] p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-500 cursor-pointer flex items-center justify-center min-h-[100px] sm:min-h-[120px] lg:min-h-[143px] mx-auto w-full max-w-[200px] sm:max-w-none">
                            <img src="./assets/images/azure-logo.png"
                                 alt="Microsoft Azure"
                                 class="max-w-full h-auto object-contain max-h-[50px] sm:max-h-[60px] lg:max-h-[70px]"
                                 onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        </div>

                        <div class="platform-logo-card group bg-white border border-brand-gray rounded-[25px] p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-500 cursor-pointer flex items-center justify-center min-h-[100px] sm:min-h-[120px] lg:min-h-[143px] mx-auto w-full max-w-[200px] sm:max-w-none">
                            <img src="./assets/images/Google-Cloud.png"
                                 alt="Google Cloud"
                                 class="max-w-full h-auto object-contain max-h-[50px] sm:max-h-[60px] lg:max-h-[70px]"
                                 onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        </div>

                        <div class="platform-logo-card group bg-white border border-brand-gray rounded-[25px] p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-500 cursor-pointer flex items-center justify-center min-h-[100px] sm:min-h-[120px] lg:min-h-[143px] mx-auto w-full max-w-[200px] sm:max-w-none">
                            <img src="./assets/images/aws-logo.png"
                                 alt="AWS"
                                 class="max-w-full h-auto object-contain max-h-[50px] sm:max-h-[60px] lg:max-h-[70px]"
                                 onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        </div>
                    </div>

                    <!-- Row 3 - Two Cards (Power BI, Tableau) -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
                        <div class="platform-logo-card group bg-white border border-brand-gray rounded-[25px] p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-500 cursor-pointer flex items-center justify-center min-h-[100px] sm:min-h-[120px] lg:min-h-[143px] mx-auto w-full max-w-[200px] sm:max-w-none">
                            <img src="./assets/images/Power-Bi-Logo.png"
                                 alt="Power BI"
                                 class="max-w-full h-auto object-contain max-h-[50px] sm:max-h-[60px] lg:max-h-[70px]"
                                 onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        </div>

                        <div class="platform-logo-card group bg-white border border-brand-gray rounded-[25px] p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-500 cursor-pointer flex items-center justify-center min-h-[100px] sm:min-h-[120px] lg:min-h-[143px] mx-auto w-full max-w-[200px] sm:max-w-none">
                            <img src="./assets/images/Tableau.png"
                                 alt="Tableau"
                                 class="max-w-full h-auto object-contain max-h-[50px] sm:max-h-[60px] lg:max-h-[70px]"
                                 onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        </div>
                    </div>

                </div>

                <!-- Decorative Elements -->
                <div class="absolute -top-10 -right-10 w-32 h-32 bg-brand-red/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-red/10 rounded-full blur-3xl animate-pulse-slow-delayed"></div>
            </div>

        </div>
    </div>
</section>

<section class="what-sets-us-apart-section relative overflow-hidden py-20 lg:py-32">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
        <img src="./assets/images/heroobannersinki.png" 
             alt="Background" 
             class="w-full h-full object-cover">
        <div class="absolute inset-0 "></div>
    </div>

    <div class="container-custom max-w-[1920px] mx-auto px-12 lg:px-24 relative z-10">
        <!-- Section Label -->
        <div class="mb-8 text-center animate-fade-in">
            <span class="text-brand-dark text-lg font-medium uppercase tracking-[1.8px]">
                What Sets Us Apart
            </span>
        </div>

        <!-- Main Heading -->
        <h2 class="text-brand-dark font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[78px] leading-tight lg:leading-[85.8px] mb-6 text-center max-w-[1210px] mx-auto animate-slide-up">
            Your Databricks Partner, Every Step of the Way
        </h2>

        <!-- Description -->
        <p class="text-brand-dark text-xl lg:text-[28px] leading-relaxed lg:leading-[42px] mb-16 text-center max-w-[1210px] mx-auto animate-slide-up-delayed">
            We don't just implement Databricks. We simplify it, tailor it, and make it deliver real business outcomes.
        </p>

        <!-- Features Cards Grid - 4 Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <!-- Card 1: We Simplify Databricks -->
            <div class="feature-card group bg-white/50 backdrop-blur-sm border border-black/10 rounded-[25px] p-10 hover:bg-white/80 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                <!-- Icon -->
                <div class="mb-8 flex justify-center">
                    <div class="icon-wrapper w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                        </svg>
                    </div>
                </div>
                
                <!-- Content -->
                <div class="text-center">
                    <h3 class="text-brand-dark text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                        We Simplify Databricks
                    </h3>
                    <p class="text-brand-dark text-[18px] font-normal leading-[27px] tracking-[0.36px]">
                        Tailored to your business, not one-size-fits-all.
                    </p>
                </div>
            </div>

            <!-- Card 2: We Cut the Things That Slow You Down -->
            <div class="feature-card group bg-white/50 backdrop-blur-sm border border-black/10 rounded-[25px] p-10 hover:bg-white/80 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                <!-- Icon -->
                <div class="mb-8 flex justify-center">
                    <div class="icon-wrapper w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                    </div>
                </div>
                
                <!-- Content -->
                <div class="text-center">
                    <h3 class="text-brand-dark text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                        We Cut the Things That Slow You Down
                    </h3>
                    <p class="text-brand-dark text-[18px] font-normal leading-[27px] tracking-[0.36px]">
                        We fix data, integrations and compliance issues fast.
                    </p>
                </div>
            </div>

            <!-- Card 3: We Execute Without Drama -->
            <div class="feature-card group bg-white/50 backdrop-blur-sm border border-black/10 rounded-[25px] p-10 hover:bg-white/80 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                <!-- Icon -->
                <div class="mb-8 flex justify-center">
                    <div class="icon-wrapper w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                        </svg>
                    </div>
                </div>
                
                <!-- Content -->
                <div class="text-center">
                    <h3 class="text-brand-dark text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                        We Execute Without Drama
                    </h3>
                    <p class="text-brand-dark text-[18px] font-normal leading-[27px] tracking-[0.36px]">
                        Onshore or offshore, our team delivers on time, on budget, and keeps things simple.
                    </p>
                </div>
            </div>

            <!-- Card 4: We're Candid & Collaborative -->
            <div class="feature-card group bg-white/50 backdrop-blur-sm border border-black/10 rounded-[25px] p-10 hover:bg-white/80 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                <!-- Icon -->
                <div class="mb-8 flex justify-center">
                    <div class="icon-wrapper w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                        </svg>
                    </div>
                </div>
                
                <!-- Content -->
                <div class="text-center">
                    <h3 class="text-brand-dark text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                        We're Candid & Collaborative
                    </h3>
                    <p class="text-brand-dark text-[18px] font-normal leading-[27px] tracking-[0.36px]">
                        We talk, challenge assumptions, and make sure your Databricks journey stays on track.
                    </p>
                </div>
            </div>

        </div>
    </div>
</section>

<section id="insights" class="insights-section bg-white py-20 lg:py-32 relative overflow-hidden">
    <div class="container-custom max-w-[1920px] mx-auto px-12 lg:px-24">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            <!-- Left Content -->
            <div class="insights-content">
                <!-- Section Label -->
                <div class="mb-8 animate-fade-in">
                    <span class="text-brand-dark text-lg font-medium uppercase tracking-[1.8px]">
                        Insights & Resources
                    </span>
                </div>

                <!-- Main Heading -->
                <h2 class="text-brand-dark font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[78px] leading-tight lg:leading-[85.8px] mb-6 max-w-[834px] animate-slide-up">
                    Latest Insights on Databricks, Data & AI
                </h2>

                <!-- Description -->
                <p class="text-brand-dark text-xl lg:text-[30px] leading-relaxed lg:leading-[45px] mb-12 max-w-[769px] animate-slide-up-delayed">
                    Stay ahead with guides, blogs, and practical insights to help your enterprise scale smarter with Databricks.
                </p>

                <!-- CTA Button -->
                <div class="animate-fade-in-up">
                    <a href="#resources" class="inline-flex items-center gap-3 px-8 py-3 bg-brand-dark border-2 border-brand-dark rounded-full text-white text-lg font-bold capitalize hover:bg-transparent hover:text-brand-dark transition-all duration-300 btn-hover-effect">
                        Explore Resources
                        <svg class="w-10 h-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Right Content - Blog Cards -->
            <div class="insights-cards flex gap-6 lg:gap-8 animate-slide-in-right max-w-full overflow-visible">
                
                <!-- Blog Card 1 - Offset Down -->
                <div class="blog-card blog-card-1 group bg-white border border-brand-gray rounded-[25px] overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2 mt-20">
                    <!-- Image Container -->
                    <div class="relative overflow-hidden h-[229px]">
                        <img src="./assets/images/blog1.png" 
                             alt="How To Make Your Data Ready For AI" 
                             class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="blog-image-placeholder hidden items-center justify-center w-full h-full bg-gray-200">
                            <span class="text-gray-500 font-semibold">Blog Image</span>
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="p-6 flex flex-col h-[180px]">
                        <!-- Badge and Arrow -->
                        <div class="flex items-center justify-between mb-4">
                            <span class="inline-block px-5 py-1 bg-brand-gray rounded-[20px] text-brand-dark text-sm font-semibold tracking-wide uppercase">
                                Blog
                            </span>
                            <div class="w-8 h-8 flex items-center justify-center">
                                <svg class="w-6 h-6 text-brand-dark group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                </svg>
                            </div>
                        </div>

                        <!-- Title -->
                        <h3 class="text-brand-dark text-[28px] font-semibold leading-[33.6px] tracking-[0.56px] mb-auto group-hover:text-brand-red transition-colors duration-300">
                            How To Make Your Data Ready For AI
                        </h3>

                        <!-- Date -->
                        <p class="text-gray-500 text-base tracking-wide mt-auto">
                            13 Sep, 2025
                        </p>
                    </div>
                </div>

                <!-- Blog Card 2 - Offset Up -->
                <div class="blog-card blog-card-2 group bg-white border border-brand-gray rounded-[25px] overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2 -mt-10">
                    <!-- Image Container -->
                    <div class="relative overflow-hidden h-[229px]">
                        <img src="./assets/images/blog2.png" 
                             alt="The Anatomy Of A Healthcare Data Strategy" 
                             class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="blog-image-placeholder hidden items-center justify-center w-full h-full bg-gray-200">
                            <span class="text-gray-500 font-semibold">Blog Image</span>
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="p-6 flex flex-col h-[180px]">
                        <!-- Badge and Arrow -->
                        <div class="flex items-center justify-between mb-4">
                            <span class="inline-block px-5 py-1 bg-brand-gray rounded-[20px] text-brand-dark text-sm font-semibold tracking-wide uppercase">
                                Blog
                            </span>
                            <div class="w-8 h-8 flex items-center justify-center">
                                <svg class="w-6 h-6 text-brand-dark group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                </svg>
                            </div>
                        </div>

                        <!-- Title -->
                        <h3 class="text-brand-dark text-[28px] font-semibold leading-[33.6px] tracking-[0.56px] mb-auto group-hover:text-brand-red transition-colors duration-300">
                            The Anatomy Of A Healthcare Data Strategy
                        </h3>

                        <!-- Date -->
                        <p class="text-gray-500 text-base tracking-wide mt-auto">
                            02 Sep, 2025
                        </p>
                    </div>
                </div>

            </div>

        </div>
    </div>
</section>

<section id="contact" class="cta-section bg-white py-0 pb-20 lg:pb-24 relative overflow-hidden">
    <div class="container-custom max-w-[1920px] mx-auto px-12 lg:px-24">
        <!-- CTA Card Container with spacing -->
        <div class="cta-card-wrapper px-4 lg:px-16">
            <!-- CTA Card with Background Image -->
            <div class="cta-card relative rounded-[30px] p-12 lg:p-16 text-center overflow-hidden shadow-lg">
                <!-- Background Image -->
                <div class="absolute inset-0 z-0">
                    <img src="./assets/images/heroobannersinki.png" 
                         alt="Background" 
                         class="w-full h-full object-cover rounded-[30px]">
                </div>

                <!-- Content -->
                <div class="relative z-10 max-w-[1469px] mx-auto">
                    <!-- Section Label -->
                    <div class="mb-6 animate-fade-in">
                        <span class="text-brand-dark text-lg font-medium uppercase tracking-[1.8px]">
                            Let's Get Started
                        </span>
                    </div>

                    <!-- Main Heading -->
                    <h2 class="text-brand-dark font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[78px] leading-tight lg:leading-[85.8px] mb-6 animate-slide-up">
                        Ready to Get More from Databricks?
                    </h2>

                    <!-- Description -->
                    <p class="text-brand-dark text-xl lg:text-[24px] leading-relaxed lg:leading-[36px] mb-10 max-w-[770px] mx-auto animate-slide-up-delayed">
                        Let's simplify your Databricks journey, and turn data into real results.
                    </p>

                    <!-- CTA Button -->
                    <div class="animate-fade-in-up">
                        <a href="/contact" class="inline-flex items-center gap-3 px-8 py-4 bg-brand-red border-2 border-brand-red rounded-full text-white text-lg font-bold capitalize hover:bg-transparent hover:text-brand-red transition-all duration-300 btn-hover-effect shadow-lg hover:shadow-2xl">
                            Get Started Now
                            <svg class="w-10 h-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



    <!-- Footer Component -->
    <?php include "components/footer.php"; ?>

    <!-- Calendly Modal -->
    <div id="calendlyModal" class="calendly-modal-overlay">
        <div class="calendly-modal">
            <!-- Modal Header -->
            <div class="calendly-modal-header">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-brand-dark">Book a Strategy Session</h3>
                        <p class="text-sm text-gray-600">Schedule your free Databricks consultation</p>
                    </div>
                </div>
                <button id="closeCalendlyModal" onclick="document.getElementById('calendlyModal').classList.remove('active'); setTimeout(() => document.getElementById('calendlyModal').style.display='none', 400);" class="close-modal-btn">
                    <svg class="w-6 h-6 text-gray-500 hover:text-brand-red transition-colors" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>

            <!-- Modal Content -->
            <div class="calendly-modal-content">
                <!-- Loading Progress Bar -->
                <div id="calendly-loading" class="calendly-loading">
                    <div class="loading-progress-container">
                        <div class="progress-header">
                            <h4>Loading Your Calendar</h4>
                            <span id="progress-percentage">0%</span>
                        </div>
                        <div class="progress-bar">
                            <div id="progress-fill" class="progress-fill"></div>
                        </div>
                        <p class="progress-text">Preparing your booking experience...</p>
                    </div>
                </div>

                <!-- Calendly Container -->
                <div id="calendly-embed-container" style="min-width:320px;height:700px; opacity:0; transition: opacity 0.5s ease;">
                    <!-- Calendly inline widget begin -->
                    <div class="calendly-inline-widget" data-url="https://calendly.com/connect-jellyfishtechnologies/meeting-with-jellyfish-technologies-clone" style="min-width:320px;height:700px;"></div>
                    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                    <!-- Calendly inline widget end -->
                </div>
            </div>
        </div>
    </div>

    <!-- Scripts -->
    <script src="./assets/js/main.js"></script>
     <script src="./assets/js/scroll-effects.js"></script>
     <script src="./assets/js/contact-form.js"></script>
    <script src="./assets/js/sections/navigation.js"></script>
    <script src="./assets/js/sections/hero.js"></script>
    <script src="./assets/js/sections/partner-badge.js"></script>
    <script src="./assets/js/sections/what-we-do.js"></script>
    <script src="./assets/js/calendly-modal.js"></script> 
    <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSR5CLQF"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

</body>
</html>