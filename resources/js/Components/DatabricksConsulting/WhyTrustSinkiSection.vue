<template>
    <section class="why-trust-sinki-section py-16 sm:py-20 lg:py-24 bg-white">
        <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px]">
            <div class="max-w-[1720px] mx-auto">

                <!-- Section Header -->
                <div class="text-left mb-16 sm:mb-20 lg:mb-24 max-w-[70%]">
                    <h2 class="text-[#1a1a1a] text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold leading-tight font-instrument-sans mb-6 sm:mb-8">
                        Why Leading Enterprises<br class="hidden sm:block">
                        Trust Sinki.ai for Databricks Excellence
                    </h2>
                    <p class="text-[#666666] text-lg sm:text-xl lg:text-2xl font-normal font-instrument-sans leading-relaxed">
                        Driving real results through disciplined Databricks delivery and deep technical mastery.
                    </p>
                </div>

                <!-- Features Grid -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 xl:gap-8">

                    <!-- Feature 1: Proven Databricks Expertise -->
                    <div class="feature-item group border border-[#E5E5E5] rounded-lg p-6 lg:p-8">
                        <h3 class="text-[#1a1a1a] text-xl sm:text-2xl font-bold font-instrument-sans mb-4 leading-tight">
                            Proven Databricks Expertise
                        </h3>
                        <p class="text-[#1a1a1a] text-base sm:text-lg font-normal font-instrument-sans leading-relaxed">
                            Our Certified Databricks Consultants bring deep technical mastery and real enterprise experience, ensuring every solution is architected, implemented, and optimized with absolute precision.
                        </p>
                    </div>

                    <!-- Feature 2: Enterprise-Grade Delivery -->
                    <div class="feature-item group border border-[#E5E5E5] rounded-lg p-6 lg:p-8">
                        <h3 class="text-[#1a1a1a] text-xl sm:text-2xl font-bold font-instrument-sans mb-4 leading-tight">
                            Enterprise-Grade Delivery
                        </h3>
                        <p class="text-[#1a1a1a] text-base sm:text-lg font-normal font-instrument-sans leading-relaxed">
                            We operate like a true Databricks Consulting Partner, applying rigorous engineering standards, structured reviews, and reliable execution across every migration, build, and optimization.
                        </p>
                    </div>

                    <!-- Feature 3: End-to-End Execution -->
                    <div class="feature-item group border border-[#E5E5E5] rounded-lg p-6 lg:p-8">
                        <h3 class="text-[#1a1a1a] text-xl sm:text-2xl font-bold font-instrument-sans mb-4 leading-tight">
                            End-to-End Execution
                        </h3>
                        <p class="text-[#1a1a1a] text-base sm:text-lg font-normal font-instrument-sans leading-relaxed">
                            From strategy to production, our Databricks Consultants deliver complete lifecycle ownership, ensuring faster deployment, stronger reliability, and measurable improvement across analytical and AI workloads.
                        </p>
                    </div>

                    <!-- Feature 4: Governance-First Approach -->
                    <div class="feature-item group border border-[#E5E5E5] rounded-lg p-6 lg:p-8">
                        <h3 class="text-[#1a1a1a] text-xl sm:text-2xl font-bold font-instrument-sans mb-4 leading-tight">
                            Governance-First Approach
                        </h3>
                        <p class="text-[#1a1a1a] text-base sm:text-lg font-normal font-instrument-sans leading-relaxed">
                            We embed governance, lineage, and access control into every delivery layer, ensuring compliant, trusted, and secure Databricks environments ready for long-term enterprise scale.
                        </p>
                    </div>

                    <!-- Feature 5: Faster Value Realization -->
                    <div class="feature-item group border border-[#E5E5E5] rounded-lg p-6 lg:p-8">
                        <h3 class="text-[#1a1a1a] text-xl sm:text-2xl font-bold font-instrument-sans mb-4 leading-tight">
                            Faster Value Realization
                        </h3>
                        <p class="text-[#1a1a1a] text-base sm:text-lg font-normal font-instrument-sans leading-relaxed">
                            Our accelerators, reusable frameworks, and proven delivery patterns reduce complexity and timelines, helping enterprises unlock Databricks value significantly faster than traditional consulting approaches.
                        </p>
                    </div>

                    <!-- Feature 6: Scalable by Design -->
                    <div class="feature-item group border border-[#E5E5E5] rounded-lg p-6 lg:p-8">
                        <h3 class="text-[#1a1a1a] text-xl sm:text-2xl font-bold font-instrument-sans mb-4 leading-tight">
                            Scalable by Design
                        </h3>
                        <p class="text-[#1a1a1a] text-base sm:text-lg font-normal font-instrument-sans leading-relaxed">
                            Every architecture we build adapts with increasing data volume, new workloads, and evolving teams, ensuring your Databricks Solutions remain future-ready without costly rebuilds.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
// No props needed for this static content section
</script>

<style scoped>
/* Font Family - Instrument Sans */
.font-instrument-sans {
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Container Custom */
.container-custom {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
}

/* Section Styles */
.why-trust-sinki-section {
    position: relative;
}

/* Feature Item Animation */
.feature-item {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.8s ease-out forwards;
    transition: all 0.3s ease;
    background: white;
}

.feature-item:nth-child(1) { animation-delay: 0.1s; }
.feature-item:nth-child(2) { animation-delay: 0.2s; }
.feature-item:nth-child(3) { animation-delay: 0.3s; }
.feature-item:nth-child(4) { animation-delay: 0.4s; }
.feature-item:nth-child(5) { animation-delay: 0.5s; }
.feature-item:nth-child(6) { animation-delay: 0.6s; }

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Feature Item Hover Effect */
.feature-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-color: #FF3621;
}

.feature-item h3 {
    transition: color 0.3s ease;
}

.feature-item:hover h3 {
    color: #FF3621;
}

/* Grid Gap Adjustments */
@media (max-width: 1280px) {
    .why-trust-sinki-section {
        padding: 4rem 0;
    }

    .grid {
        gap: 1rem !important;
    }
}

@media (max-width: 1024px) {
    .why-trust-sinki-section {
        padding: 3rem 0;
    }

    .feature-item {
        padding: 1.25rem !important;
    }

    .feature-item h3 {
        font-size: 1.25rem !important;
    }

    .feature-item p {
        font-size: 1rem !important;
    }

    /* Single column on tablet and below */
    .grid {
        grid-template-columns: 1fr !important;
        gap: 0.75rem !important;
    }
}

@media (max-width: 768px) {
    .why-trust-sinki-section {
        padding: 2.5rem 0;
    }

    .why-trust-sinki-section h2 {
        font-size: 2rem !important;
        line-height: 1.2 !important;
    }

    .why-trust-sinki-section > div > div > p {
        font-size: 1rem !important;
        line-height: 1.5 !important;
    }

    .feature-item {
        padding: 1rem !important;
    }

    .feature-item h3 {
        font-size: 1.125rem !important;
        margin-bottom: 0.75rem !important;
    }

    .feature-item p {
        font-size: 0.9rem !important;
        line-height: 1.5 !important;
    }
}

@media (max-width: 640px) {
    .why-trust-sinki-section h2 {
        font-size: 1.75rem !important;
        line-height: 1.3 !important;
        margin-bottom: 1rem !important;
    }

    .why-trust-sinki-section > div > div > p {
        font-size: 0.9rem !important;
        line-height: 1.4 !important;
    }

    .feature-item h3 {
        font-size: 1rem !important;
    }

    .feature-item p {
        font-size: 0.85rem !important;
        line-height: 1.4 !important;
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .feature-item {
        animation: none;
        opacity: 1;
        transform: none;
    }

    .feature-item:hover {
        transform: none;
        box-shadow: none;
    }
}
</style>