<template>
    <!-- CTA Section for Contact Page -->
    <div class="cta-section-contact bg-white py-12 lg:py-16">
        <div class="container-custom max-w-[1920px] mx-auto px-6 lg:px-24">
            <!-- CTA Card with Dark Background -->
            <div class="cta-card bg-brand-dark rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-2xl overflow-hidden group">
                <div class="flex flex-col lg:flex-row items-center lg:items-center gap-8">
                    
                    <!-- Left Container - 70% -->
                    <div class="flex-1 w-full lg:w-[70%] space-y-6">
                        <!-- Row 1: Heading -->
                        <div>
                            <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold text-white leading-tight lg:leading-[61.6px]">
                                Want to stop guessing and start getting results?
                            </h2>
                        </div>

                        <!-- Row 2: Split into two columns on desktop, stacked on mobile -->
                        <div class="flex flex-col lg:flex-row space-y-6 lg:space-y-0">
                            <!-- Left column: Paragraph -->
                            <div class="flex-1 lg:pr-8">
                                <p class="text-lg sm:text-xl lg:text-[22px] text-white leading-relaxed lg:leading-[32px]">
                                    Stop wrestling with data. Let's turn it into outcomes that matter.
                                </p>
                            </div>

                            <!-- Right column: Button -->
                            <div class="flex justify-center lg:justify-start lg:items-center">
                                <Link :href="route('contact')" class="bg-brand-red text-white font-bold py-3 sm:py-3.5 px-6 sm:px-8 lg:px-10 rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-sm sm:text-[16px] uppercase tracking-[0.36px] border-2 border-brand-red">
                                    <span>TALK TO AN EXPERT</span>
                                    <div class="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                                        <svg class="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <!-- Right Container - 30% (Hidden on mobile and tablet) -->
                    <div class="hidden xl:flex w-[30%] justify-center items-center">
                        <!-- Circular Badge with Curved Text -->
                        <div class="relative group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                            <!-- Outer Circle -->
                            <div class="w-[180px] h-[180px] rounded-full border-2 border-white flex items-center justify-center group-hover:border-brand-red transition-all duration-500">
                                <!-- Inner Circle -->
                                <div class="w-[120px] h-[120px] rounded-full border-2 border-white flex items-center justify-center group-hover:border-brand-red transition-all duration-500">
                                    <!-- Center Icon/Logo -->
                                    <div class="w-[80px] h-[80px] bg-brand-red rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-500 shadow-2xl">
                                        <svg class="w-8 h-8 text-white group-hover:text-brand-red transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </div>
                                </div>

                                <!-- Curved Text around the circle -->
                                <svg class="absolute inset-0 w-full h-full" viewBox="0 0 180 180">
                                    <defs>
                                        <path id="circle-path" d="M 90,90 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"/>
                                    </defs>
                                    <text class="fill-white group-hover:fill-brand-red text-[14px] font-bold uppercase tracking-wide transition-all duration-500" style="font-family: 'Instrument Sans', sans-serif;">
                                        <textPath href="#circle-path" startOffset="0%">
                                            START A CONVERSATION ~ START A CONVERSATION ~
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
</script>

<style scoped>
/* CTA Section Contact Styles */
.cta-section-contact {
    font-family: 'Instrument Sans', sans-serif;
}

.container-custom {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
}

/* Brand Colors */
.bg-brand-dark {
    background-color: #121212;
}

.text-brand-red {
    color: #FF3621;
}

.bg-brand-red {
    background-color: #FF3621;
}

.border-brand-red {
    border-color: #FF3621;
}

/* CTA Card */
.cta-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
}

/* Responsive Typography */
@media (max-width: 1024px) {
    .cta-section-contact {
        padding: 3rem 0;
    }
}

@media (max-width: 768px) {
    .cta-section-contact {
        padding: 2rem 0;
    }
    
    .cta-card {
        padding: 2rem !important;
        border-radius: 20px !important;
    }
}

@media (max-width: 640px) {
    .cta-section-contact {
        padding: 1.5rem 0;
    }
    
    .cta-card {
        padding: 1.5rem !important;
        border-radius: 18px !important;
    }
}
</style>