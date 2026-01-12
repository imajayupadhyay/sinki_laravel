<template>
    <section class="technology-stack-section py-16 sm:py-20 lg:py-24 bg-white">
        <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px]">
            <div class="max-w-[1720px] mx-auto">

                <!-- Section Header -->
                <div class="text-left mb-16 sm:mb-20 lg:mb-24 max-w-[70%]">
                    <h2 class="text-[#1a1a1a] text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold leading-tight font-instrument-sans mb-6 sm:mb-8">
                        Our Databricks Technology Stack
                    </h2>
                    <p class="text-[#666666] text-lg sm:text-xl lg:text-2xl font-normal font-instrument-sans leading-relaxed">
                        Our Databricks-focused tech stack accelerates development, strengthens governance, and improves performance.
                    </p>
                </div>

                <!-- Tab Container with Border -->
                <div class="border border-[#E5E5E5] rounded-2xl overflow-hidden" style="background-color: rgb(250 248 247 / 10%)">
                    <div class="flex flex-col lg:flex-row">
                        <!-- Tab Navigation -->
                        <div class="lg:w-1/3 px-6 py-12 border-b lg:border-b-0 lg:border-r border-[#E5E5E5]">
                            <div class="space-y-3">
                                <!-- Tab 1: Core Platforms & Foundations -->
                                <button
                                    @click="activeTab = 'core'"
                                    :class="[
                                        'w-full text-center p-5 rounded-xl transition-all duration-300 font-instrument-sans text-lg font-medium',
                                        activeTab === 'core'
                                            ? 'bg-[#F5F5F5] text-[#1a1a1a]'
                                            : 'bg-transparent text-[#1a1a1a] hover:bg-[#F9F9F9]'
                                    ]"
                                >
                                    <span class="text-sm font-medium opacity-70">01.</span> Core Platforms & Foundations
                                </button>

                                <!-- Tab 2: Cloud & Infrastructure Tools -->
                                <button
                                    @click="activeTab = 'cloud'"
                                    :class="[
                                        'w-full text-center p-5 rounded-xl transition-all duration-300 font-instrument-sans text-lg font-medium',
                                        activeTab === 'cloud'
                                            ? 'bg-[#F5F5F5] text-[#1a1a1a]'
                                            : 'bg-transparent text-[#1a1a1a] hover:bg-[#F9F9F9]'
                                    ]"
                                >
                                    <span class="text-sm font-medium opacity-70">02.</span> Cloud & Infrastructure Tools
                                </button>

                                <!-- Tab 3: Development, Data & BI Tools -->
                                <button
                                    @click="activeTab = 'development'"
                                    :class="[
                                        'w-full text-center p-5 rounded-xl transition-all duration-300 font-instrument-sans text-lg font-medium',
                                        activeTab === 'development'
                                            ? 'bg-[#F5F5F5] text-[#1a1a1a]'
                                            : 'bg-transparent text-[#1a1a1a] hover:bg-[#F9F9F9]'
                                    ]"
                                >
                                    <span class="text-sm font-medium opacity-70">03.</span> Development, Data & BI Tools
                                </button>

                                <!-- Tab 4: ML & AI Specific Tools/Libraries -->
                                <button
                                    @click="activeTab = 'ml'"
                                    :class="[
                                        'w-full text-center p-5 rounded-xl transition-all duration-300 font-instrument-sans text-lg font-medium',
                                        activeTab === 'ml'
                                            ? 'bg-[#F5F5F5] text-[#1a1a1a]'
                                            : 'bg-transparent text-[#1a1a1a] hover:bg-[#F9F9F9]'
                                    ]"
                                >
                                    <span class="text-sm font-medium opacity-70">04.</span> ML & AI Specific Tools/Libraries
                                </button>
                            </div>
                        </div>

                        <!-- Tab Content -->
                        <div class="lg:w-2/3 p-8 lg:p-10">

                            <!-- Core Platforms & Foundations -->
                            <div v-show="activeTab === 'core'" class="tab-content">
                                <h3 class="text-[#1a1a1a] text-2xl sm:text-3xl font-bold font-instrument-sans mb-4">
                                    01. Core Platforms & Foundations
                                </h3>
                                <p class="text-[#666666] text-lg font-normal font-instrument-sans mb-8 leading-relaxed">
                                    These are the foundational platforms that power our Databricks implementations, providing robust data processing, storage, and analytics capabilities at enterprise scale.
                                </p>

                                <!-- Technology Logos Grid -->
                                <div class="grid grid-cols-2 md:grid-cols-3 gap-6 items-center">
                                    <div class="tech-logo-item flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <img src="/images/logos/databricks-logo.png" alt="Databricks" class="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity">
                                    </div>
                                    <div class="tech-logo-item flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <img src="/images/logos/apache-spark-logo.png" alt="Apache Spark" class="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity">
                                    </div>
                                    <div class="tech-logo-item flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <img src="/images/logos/delta-lake-logo.png" alt="Delta Lake" class="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity">
                                    </div>
                                    <div class="tech-logo-item flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <img src="/images/logos/apache-hadoop-logo.png" alt="Apache Hadoop" class="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity">
                                    </div>
                                    <div class="tech-logo-item flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <img src="/images/logos/unity-catalog-logo.png" alt="Unity Catalog" class="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity">
                                    </div>
                                    <div class="tech-logo-item flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <img src="/images/logos/apache-kafka-logo.png" alt="Apache Kafka" class="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity">
                                    </div>
                                </div>
                            </div>

                            <!-- Cloud & Infrastructure Tools -->
                            <div v-show="activeTab === 'cloud'" class="tab-content">
                                <h3 class="text-[#1a1a1a] text-2xl sm:text-3xl font-bold font-instrument-sans mb-4">
                                    02. Cloud & Infrastructure Tools
                                </h3>
                                <p class="text-[#666666] text-lg font-normal font-instrument-sans mb-8 leading-relaxed">
                                    These tools manage where the Databricks environment runs and stores data, providing scalable cloud infrastructure, containerization, and orchestration capabilities.
                                </p>

                                <!-- Technology Logos Grid -->
                                <div class="grid grid-cols-2 md:grid-cols-3 gap-6 items-center">
                                    <div class="tech-logo-item flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <img src="/images/logos/docker-logo.png" alt="Docker" class="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity">
                                    </div>
                                    <div class="tech-logo-item flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <img src="/images/logos/google-cloud-logo.png" alt="Google Cloud Platform" class="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity">
                                    </div>
                                    <div class="tech-logo-item flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <img src="/images/logos/kubernetes-logo.png" alt="Kubernetes" class="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity">
                                    </div>
                                    <div class="tech-logo-item flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <img src="/images/logos/microsoft-azure-logo.png" alt="Microsoft Azure" class="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity">
                                    </div>
                                    <div class="tech-logo-item flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <img src="/images/logos/terraform-logo.png" alt="Terraform" class="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity">
                                    </div>
                                    <div class="tech-logo-item flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <img src="/images/logos/aws-logo.png" alt="AWS" class="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity">
                                    </div>
                                </div>
                            </div>

                            <!-- Development, Data & BI Tools -->
                            <div v-show="activeTab === 'development'" class="tab-content">
                                <h3 class="text-[#1a1a1a] text-2xl sm:text-3xl font-bold font-instrument-sans mb-4">
                                    03. Development, Data & BI Tools
                                </h3>
                                <p class="text-[#666666] text-lg font-normal font-instrument-sans mb-8 leading-relaxed">
                                    Essential development and business intelligence tools that enable rapid application development, data visualization, and analytics within the Databricks ecosystem.
                                </p>

                                <!-- Technology Logos Grid -->
                                <div class="grid grid-cols-2 md:grid-cols-3 gap-6 items-center">
                                    <div class="tech-logo-item flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <img src="/images/logos/python-logo.png" alt="Python" class="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity">
                                    </div>
                                    <div class="tech-logo-item flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <img src="/images/logos/scala-logo.png" alt="Scala" class="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity">
                                    </div>
                                    <div class="tech-logo-item flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <img src="/images/logos/sql-logo.png" alt="SQL" class="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity">
                                    </div>
                                    <div class="tech-logo-item flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <img src="/images/logos/jupyter-logo.png" alt="Jupyter" class="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity">
                                    </div>
                                    <div class="tech-logo-item flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <img src="/images/logos/power-bi-logo.png" alt="Power BI" class="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity">
                                    </div>
                                    <div class="tech-logo-item flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <img src="/images/logos/tableau-logo.png" alt="Tableau" class="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity">
                                    </div>
                                </div>
                            </div>

                            <!-- ML & AI Specific Tools/Libraries -->
                            <div v-show="activeTab === 'ml'" class="tab-content">
                                <h3 class="text-[#1a1a1a] text-2xl sm:text-3xl font-bold font-instrument-sans mb-4">
                                    04. ML & AI Specific Tools/Libraries
                                </h3>
                                <p class="text-[#666666] text-lg font-normal font-instrument-sans mb-8 leading-relaxed">
                                    Advanced machine learning and artificial intelligence frameworks and libraries that enable sophisticated model development, training, and deployment at enterprise scale.
                                </p>

                                <!-- Technology Logos Grid -->
                                <div class="grid grid-cols-2 md:grid-cols-3 gap-6 items-center">
                                    <div class="tech-logo-item flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <img src="/images/logos/tensorflow-logo.png" alt="TensorFlow" class="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity">
                                    </div>
                                    <div class="tech-logo-item flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <img src="/images/logos/pytorch-logo.png" alt="PyTorch" class="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity">
                                    </div>
                                    <div class="tech-logo-item flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <img src="/images/logos/mlflow-logo.png" alt="MLflow" class="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity">
                                    </div>
                                    <div class="tech-logo-item flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <img src="/images/logos/scikit-learn-logo.png" alt="Scikit-learn" class="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity">
                                    </div>
                                    <div class="tech-logo-item flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <img src="/images/logos/hugging-face-logo.png" alt="Hugging Face" class="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity">
                                    </div>
                                    <div class="tech-logo-item flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <img src="/images/logos/apache-airflow-logo.png" alt="Apache Airflow" class="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

// Active tab state
const activeTab = ref('core');
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
.technology-stack-section {
    position: relative;
}

/* Tab Content Animation */
.tab-content {
    animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Technology Logo Item Styles */
.tech-logo-item {
    transition: all 0.3s ease;
    min-height: 80px;
    background: white;
}

.tech-logo-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

/* Tab Button Styles */
button {
    border: none;
    font-size: 16px;
    text-align: left;
}

button:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 54, 33, 0.5);
}

/* Responsive Styles */
@media (max-width: 1024px) {
    .technology-stack-section {
        padding: 3rem 0;
    }

    .flex {
        flex-direction: column;
    }

    .tab-content h3 {
        font-size: 1.5rem !important;
    }

    .tab-content p {
        font-size: 1rem !important;
    }

    .grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 1rem !important;
    }
}

@media (max-width: 768px) {
    .technology-stack-section {
        padding: 2.5rem 0;
    }

    .technology-stack-section h2 {
        font-size: 2rem !important;
        line-height: 1.2 !important;
    }

    .technology-stack-section > div > div > div > p {
        font-size: 1rem !important;
        line-height: 1.5 !important;
    }

    .tab-content {
        padding: 1.5rem !important;
    }

    .tab-content h3 {
        font-size: 1.25rem !important;
    }

    .tab-content p {
        font-size: 0.9rem !important;
        line-height: 1.5 !important;
    }

    .tech-logo-item {
        min-height: 60px;
        padding: 0.75rem !important;
    }

    .tech-logo-item img {
        max-height: 2rem !important;
    }

    button {
        padding: 0.75rem !important;
        font-size: 14px !important;
    }

    .space-y-2 > * + * {
        margin-top: 0.5rem !important;
    }
}

@media (max-width: 640px) {
    .technology-stack-section h2 {
        font-size: 1.75rem !important;
        line-height: 1.3 !important;
    }

    .grid {
        grid-template-columns: 1fr !important;
        gap: 0.75rem !important;
    }

    .tech-logo-item {
        min-height: 50px;
        padding: 0.5rem !important;
    }

    .tech-logo-item img {
        max-height: 1.75rem !important;
    }

    .tab-content {
        padding: 1rem !important;
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .tab-content {
        animation: none;
    }

    .tech-logo-item:hover {
        transform: none;
    }
}
</style>