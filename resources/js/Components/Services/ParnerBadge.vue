<template>
    <!-- Partner Badge Section -->
    <section class="partner-badge-section bg-brand-light border-b border-gray-200">
        <div class="container mx-auto px-6 sm:px-8 lg:px-12">
            <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 h-auto sm:h-[60px] py-4 sm:py-0">
                <span class="text-brand-dark text-base sm:text-xl font-medium tracking-wide text-center">
                    An Official Databricks Partner
                </span>
                <!-- Databricks Logo -->
                <div class="databricks-logo-wrapper w-full sm:w-auto flex justify-center">
                    <img
                        src="/images/databricks-dark.webp"
                        alt="Databricks Logo"
                        class="h-5 sm:h-6 partner-logo w-auto max-w-full"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// No props needed
</script>

<style scoped>
/* Partner Badge Section Styles */
.partner-badge-section {
    position: relative;
    width: 100%;
    background: #f9f8e6 !important;
    border-bottom: 1px solid #e5e7eb;
    animation: fadeInDown 0.8s ease-out;
    animation-delay: 1.6s;
    opacity: 0;
    animation-fill-mode: forwards;
    z-index: 10;
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.partner-badge-section .container {
    max-width: 1920px;
}

/* Brand Colors */
.bg-brand-light {
    background-color: #f9f8e6 !important;
}

.text-brand-dark {
    color: #121212 !important;
}

/* Databricks Logo Wrapper */
.databricks-logo-wrapper {
    display: inline-flex;
    align-items: center;
}

/* Partner Logo Animation */
.partner-logo {
    transition: all 0.3s ease;
    height: 24px;
    width: auto;
}

.partner-logo:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 0 8px rgba(255, 54, 33, 0.5));
}

/* Text Animation */
.partner-badge-section span {
    position: relative;
    display: inline-block;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0.4px;
}

.partner-badge-section span::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 1px;
    background: #FF3621;
    transform: translateX(-50%);
    transition: width 0.3s ease;
}

.partner-badge-section:hover span::after {
    width: 100%;
}

/* Shine Effect */
.partner-badge-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
        transparent,
        rgba(0, 0, 0, 0.05),
        transparent
    );
    transition: left 0.5s ease;
}

.partner-badge-section:hover::before {
    left: 100%;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .partner-badge-section {
        height: auto;
    }

    .partner-badge-section .flex {
        flex-direction: column;
        padding: 12px 0;
        gap: 8px;
    }

    .partner-badge-section span {
        font-size: 16px;
    }

    .partner-logo {
        height: 20px;
    }
}

@media (max-width: 640px) {
    .partner-badge-section {
    }

    .partner-badge-section .flex {
        padding: 10px 0;
        gap: 6px;
    }

    .partner-badge-section span {
        font-size: 14px;
        text-align: center;
    }

    .partner-logo {
        height: 18px;
    }
}

@media (max-width: 480px) {
    .partner-badge-section {
    }

    .partner-badge-section .flex {
        padding: 8px 0;
        gap: 4px;
    }

    .partner-badge-section span {
        font-size: 13px;
        text-align: center;
    }

    .partner-logo {
        height: 16px;
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .partner-badge-section {
        animation: none;
        opacity: 1;
    }

    .partner-logo:hover {
        transform: none;
    }
}
</style>