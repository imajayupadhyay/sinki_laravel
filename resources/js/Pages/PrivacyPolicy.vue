<template>
    <div class="min-h-screen bg-white">
        <Head title="Privacy Policy - Sinki.ai">
            <meta name="description" content="Privacy Policy for Sinki.ai services. Read our comprehensive privacy policy explaining how we collect, use, and protect your personal data." />
        </Head>

        <!-- Header Component -->
        <Header />

        <!-- Header Section -->
        <section class="pt-[166px] relative terms-hero-section">
            <!-- Background Elements -->
            <div class="terms-background">
                <div class="absolute inset-0 bg-gradient-to-br from-beige/15 to-cream/8"></div>
                <div class="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-brand-red/12 to-transparent rounded-full animate-pulse-slow"></div>
                <div class="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-brand-red/6 to-transparent rounded-full animate-pulse-slow-delayed"></div>
            </div>

            <div class="max-w-[1920px] mx-auto px-12 relative z-10">
                <div class="text-left ml-[6px]">
                    <!-- <p class="text-[18px] font-medium text-[#121212] uppercase tracking-[1.8px] mb-6 leading-[19.8px] mt-[15px]">
                        Legal Information
                    </p> -->
                    <h1 class="text-[102px] font-semibold text-[#121212] mb-8 leading-[112.2px] max-w-[1500px]">
                        Privacy Policy
                    </h1>
                </div>
            </div>
        </section>

        <!-- Privacy Policy Content -->
        <div class="privacy-content py-16 lg:py-24">
            <div class="max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24">
                <div class="flex gap-8">
                    <!-- Sidebar Navigation (25%) -->
                    <aside class="hidden lg:block w-1/4 flex-shrink-0 sidebar-sticky mt-8">
                        <nav class="bg-white shadow-lg rounded-lg p-4 space-y-2">
                                <a href="#introduction"
                                   :class="['block text-sm font-medium transition-all duration-200 py-3 px-4 rounded-lg border-l-4', activeSection === 'introduction' ? 'text-brand-red bg-red-50 border-brand-red' : 'text-gray-700 hover:text-brand-red hover:bg-gray-50 border-transparent']"
                                   @click="scrollToSection('introduction')">
                                    1. Introduction and Scope
                                </a>
                                <a href="#controller-processor"
                                   :class="['block text-sm font-medium transition-all duration-200 py-3 px-4 rounded-lg border-l-4', activeSection === 'controller-processor' ? 'text-brand-red bg-red-50 border-brand-red' : 'text-gray-700 hover:text-brand-red hover:bg-gray-50 border-transparent']"
                                   @click="scrollToSection('controller-processor')">
                                    2. Our Role: Controller vs. Processor
                                </a>
                                <a href="#information-collection"
                                   :class="['block text-sm font-medium transition-all duration-200 py-3 px-4 rounded-lg border-l-4', activeSection === 'information-collection' ? 'text-brand-red bg-red-50 border-brand-red' : 'text-gray-700 hover:text-brand-red hover:bg-gray-50 border-transparent']"
                                   @click="scrollToSection('information-collection')">
                                    3. Information We Collect and Its Use
                                </a>
                                <a href="#data-sharing"
                                   :class="['block text-sm font-medium transition-all duration-200 py-3 px-4 rounded-lg border-l-4', activeSection === 'data-sharing' ? 'text-brand-red bg-red-50 border-brand-red' : 'text-gray-700 hover:text-brand-red hover:bg-gray-50 border-transparent']"
                                   @click="scrollToSection('data-sharing')">
                                    4. Data Sharing and Disclosure
                                </a>
                                <a href="#privacy-rights"
                                   :class="['block text-sm font-medium transition-all duration-200 py-3 px-4 rounded-lg border-l-4', activeSection === 'privacy-rights' ? 'text-brand-red bg-red-50 border-brand-red' : 'text-gray-700 hover:text-brand-red hover:bg-gray-50 border-transparent']"
                                   @click="scrollToSection('privacy-rights')">
                                    5. Your Privacy Rights
                                </a>
                                <a href="#data-security"
                                   :class="['block text-sm font-medium transition-all duration-200 py-3 px-4 rounded-lg border-l-4', activeSection === 'data-security' ? 'text-brand-red bg-red-50 border-brand-red' : 'text-gray-700 hover:text-brand-red hover:bg-gray-50 border-transparent']"
                                   @click="scrollToSection('data-security')">
                                    6. Data Security and International Data Transfers
                                </a>
                                <a href="#policy-updates"
                                   :class="['block text-sm font-medium transition-all duration-200 py-3 px-4 rounded-lg border-l-4', activeSection === 'policy-updates' ? 'text-brand-red bg-red-50 border-brand-red' : 'text-gray-700 hover:text-brand-red hover:bg-gray-50 border-transparent']"
                                   @click="scrollToSection('policy-updates')">
                                    7. Policy Updates
                                </a>
                        </nav>
                    </aside>

                    <!-- Main Content (75%) -->
                    <div class="flex-1 prose prose-lg prose-gray max-w-none">
                        <!-- Introduction -->
                        <div class="mb-12">
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                Sinki.ai (referred to as "Sinki.ai", "we", "us", or "our") is committed to protecting the privacy of your personal data. This Privacy Policy explains how we collect, use, disclose, and protect information when you visit our website at <a href="https://www.sinki.ai/" class="text-brand-red hover:underline">https://www.sinki.ai/</a> and engage with our professional services.
                            </p>
                        </div>

                        <!-- Section 1: Introduction and Scope -->
                        <section id="introduction" class="mb-12">
                            <h2 class="text-3xl font-bold text-brand-dark mb-8">1. Introduction and Scope</h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                This policy applies to the Personal Data we process when you interact with our website, engage with our marketing, or become a business contact or client.
                            </p>

                            <div class="overflow-x-auto mb-8">
                                <table class="w-full border-collapse border border-gray-300 text-lg">
                                    <thead>
                                        <tr class="bg-gray-50">
                                            <th class="border border-gray-300 px-6 py-4 text-left font-bold text-brand-dark">Term</th>
                                            <th class="border border-gray-300 px-6 py-4 text-left font-bold text-brand-dark">Definition</th>
                                            <th class="border border-gray-300 px-6 py-4 text-left font-bold text-brand-dark">Context & Significance</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="border border-gray-300 px-6 py-4 font-semibold">Personal Data</td>
                                            <td class="border border-gray-300 px-6 py-4">Any information that relates to an identified or identifiable natural person.</td>
                                            <td class="border border-gray-300 px-6 py-4">This includes everything from your name and email to your IP address and browsing history.</td>
                                        </tr>
                                        <tr class="bg-gray-50">
                                            <td class="border border-gray-300 px-6 py-4 font-semibold">Website</td>
                                            <td class="border border-gray-300 px-6 py-4">The Sinki.ai corporate website at https://sinki.ai/ and any related online marketing platforms we operate.</td>
                                            <td class="border border-gray-300 px-6 py-4">This is the primary area where we act as a Data Controller (collecting data for our own use).</td>
                                        </tr>
                                        <tr>
                                            <td class="border border-gray-300 px-6 py-4 font-semibold">Services</td>
                                            <td class="border border-gray-300 px-6 py-4">AI, Data Strategy, Digital Plant solutions, and related consulting and implementation work provided to our clients.</td>
                                            <td class="border border-gray-300 px-6 py-4">When processing data as part of these Services, we act as a Data Processor under the strict direction of our client (the Data Controller).</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <!-- Section 2: Our Role: Controller vs. Processor -->
                        <section id="controller-processor" class="mb-12">
                            <h2 class="text-3xl font-bold text-brand-dark mb-8">2. Our Role: Controller vs. Processor</h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                As a Data and AI consulting firm/official Databricks partner, we operate in two distinct capacities concerning personal data:
                            </p>

                            <h3 class="text-2xl font-semibold text-brand-dark mb-4">A. Sinki.ai as a Data Controller</h3>
                            <p class="text-lg leading-relaxed text-gray-700 mb-4">
                                We act as the 'Data Controller' when we collect and use personal data for our own business purposes, including:
                            </p>
                            <ul class="list-disc pl-6 space-y-3 text-lg text-gray-700 mb-6">
                                <li>Collecting data from visitors on our website (e.g., through contact forms).</li>
                                <li>Managing marketing communications, sales leads, and business development initiatives.</li>
                                <li>Managing administrative data related to vendors and suppliers.</li>
                            </ul>

                            <h3 class="text-2xl font-semibold text-brand-dark mb-4">B. Sinki.ai as a Data Processor</h3>
                            <p class="text-lg leading-relaxed text-gray-700 mb-4">
                                We act as a 'Data Processor' when we handle, structure, or optimize operational and sensor data on behalf of our clients as part of our services.
                            </p>
                            <ul class="list-disc pl-6 space-y-3 text-lg text-gray-700 mb-6">
                                <li><strong>Client Data:</strong> In this capacity, our client acts as the data controller, determining the purpose and means of processing the data.</li>
                                <li><strong>Protection:</strong> The processing of such data is strictly governed by the contract, service agreement, and a separate Data Processing Agreement (DPA) signed between Sinki.ai and the client.</li>
                            </ul>
                        </section>

                        <!-- Section 3: Information We Collect and Its Use -->
                        <section id="information-collection" class="mb-12">
                            <h2 class="text-3xl font-bold text-brand-dark mb-8">3. Information We Collect and Its Use</h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                We collect personal data in three categories: information you provide, information collected automatically, and information obtained from third parties.
                            </p>

                            <h3 class="text-2xl font-semibold text-brand-dark mb-4">3.1. Information You Provide to Us (Voluntary Submission)</h3>
                            <div class="overflow-x-auto mb-8">
                                <table class="w-full border-collapse border border-gray-300 text-lg">
                                    <thead>
                                        <tr class="bg-gray-50">
                                            <th class="border border-gray-300 px-6 py-4 text-left font-bold text-brand-dark">Data Category</th>
                                            <th class="border border-gray-300 px-6 py-4 text-left font-bold text-brand-dark">Specific Examples</th>
                                            <th class="border border-gray-300 px-6 py-4 text-left font-bold text-brand-dark">Purpose of Collection (Legal Basis - GDPR)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="border border-gray-300 px-6 py-4 font-semibold">Business Contact Information</td>
                                            <td class="border border-gray-300 px-6 py-4">Name, Job Title, Company Name, Work Email, Work Phone Number, Business Address.</td>
                                            <td class="border border-gray-300 px-6 py-4">Contract / Legitimate Interest: To respond to your requests, manage contractual relationships, or pursue legitimate business development.</td>
                                        </tr>
                                        <tr class="bg-gray-50">
                                            <td class="border border-gray-300 px-6 py-4 font-semibold">Communication Data</td>
                                            <td class="border border-gray-300 px-6 py-4">Information provided in contact forms, subscription sign-ups, or email correspondence.</td>
                                            <td class="border border-gray-300 px-6 py-4">Consent / Legitimate Interest: To send relevant marketing materials, newsletters, and improve customer service.</td>
                                        </tr>
                                        <tr>
                                            <td class="border border-gray-300 px-6 py-4 font-semibold">Recruitment Data</td>
                                            <td class="border border-gray-300 px-6 py-4">CVs, cover letters, and application details submitted for employment.</td>
                                            <td class="border border-gray-300 px-6 py-4">Legitimate Interest: To evaluate candidates for open positions.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 class="text-2xl font-semibold text-brand-dark mb-4">3.2. Information Collected Automatically (Website Use)</h3>
                            <div class="overflow-x-auto mb-8">
                                <table class="w-full border-collapse border border-gray-300 text-lg">
                                    <thead>
                                        <tr class="bg-gray-50">
                                            <th class="border border-gray-300 px-6 py-4 text-left font-bold text-brand-dark">Data Category</th>
                                            <th class="border border-gray-300 px-6 py-4 text-left font-bold text-brand-dark">Specific Examples</th>
                                            <th class="border border-gray-300 px-6 py-4 text-left font-bold text-brand-dark">Purpose of Collection (Legal Basis - GDPR)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="border border-gray-300 px-6 py-4 font-semibold">Usage and Technical Data</td>
                                            <td class="border border-gray-300 px-6 py-4">IP address, browser type, operating system, pages viewed, time spent on pages, referral URL, device identifiers.</td>
                                            <td class="border border-gray-300 px-6 py-4">Legitimate Interest: To monitor the security and performance of our Website, analyze site traffic, and improve user experience.</td>
                                        </tr>
                                        <tr class="bg-gray-50">
                                            <td class="border border-gray-300 px-6 py-4 font-semibold">Tracking Data</td>
                                            <td class="border border-gray-300 px-6 py-4">Cookies and similar technologies (web beacons, pixels).</td>
                                            <td class="border border-gray-300 px-6 py-4">Consent: To personalize content, analyze marketing campaign effectiveness, and deliver targeted advertising. (See Section 4.1.)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 class="text-2xl font-semibold text-brand-dark mb-4">3.3. Cookies and Other Tracking Technologies</h3>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                We use cookies, pixels, and other tracking technologies to collect information about your browsing behavior. Cookies help us remember your preferences, enhance site navigation, and support our marketing efforts. You have the right to accept or refuse cookies. Most web browsers are set to accept cookies by default, but you can usually modify your browser settings to reject cookies or receive a notification when a cookie is placed. Please note that opting out of non-essential cookies may affect the website's functionality and your overall experience.
                            </p>

                            <h3 class="text-2xl font-semibold text-brand-dark mb-4">3.4. Data Retention</h3>
                            <p class="text-lg leading-relaxed text-gray-700 mb-4">
                                We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.
                            </p>
                            <ul class="list-disc pl-6 space-y-3 text-lg text-gray-700 mb-6">
                                <li><strong>Marketing Data:</strong> We retain marketing data until you opt out or withdraw consent, or for a duration specified by our internal data retention policy (e.g., 2 years of inactivity).</li>
                                <li><strong>Business Contact Data:</strong> We retain this data for the duration of the business relationship and for a reasonable period afterward to comply with legal, tax, or accounting requirements.</li>
                                <li><strong>Deletion:</strong> When retention timeframes expire, we will either securely destroy your personal data, anonymize it so that it can no longer be associated with you, or securely archive it in compliance with applicable laws.</li>
                            </ul>
                        </section>

                        <!-- Section 4: Data Sharing and Disclosure -->
                        <section id="data-sharing" class="mb-12">
                            <h2 class="text-3xl font-bold text-brand-dark mb-8">4. Data Sharing and Disclosure</h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                We share personal data only as necessary to provide our services, manage our business, or comply with legal obligations.
                            </p>

                            <h3 class="text-2xl font-semibold text-brand-dark mb-4">4.1. Third-Party Service Providers</h3>
                            <p class="text-lg leading-relaxed text-gray-700 mb-4">
                                We share data with vendors who perform functions on our behalf, such as:
                            </p>
                            <ul class="list-disc pl-6 space-y-3 text-lg text-gray-700 mb-6">
                                <li><strong>IT and Infrastructure:</strong> Hosting and cloud services (e.g., AWS, Azure) used to maintain our infrastructure.</li>
                                <li><strong>Analytics:</strong> Tools (e.g., Google Analytics, are used to measure and enhance our website's performance.</li>
                                <li><strong>CRM and Marketing:</strong> Platforms for managing sales contacts and distributing marketing emails effectively.</li>
                            </ul>

                            <h3 class="text-2xl font-semibold text-brand-dark mb-4">4.2. Business Transfers and Legal Compliance</h3>
                            <p class="text-lg leading-relaxed text-gray-700 mb-4">
                                We may disclose your personal data:
                            </p>
                            <ul class="list-disc pl-6 space-y-3 text-lg text-gray-700 mb-6">
                                <li>In connection with any merger, sale of company assets, financing, or acquisition.</li>
                                <li>If required by law, subpoena, or government request (e.g., for national security or law enforcement purposes).</li>
                            </ul>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                <strong>Note on Selling Data (CCPA/CPRA):</strong> Sinki.ai does not sell or share the personal information of our website visitors or clients for monetary compensation. However, we may share certain online identifiers with third-party advertising partners for cross-context behavioral advertising, which California law may consider "sharing" or "selling." You have the right to opt out (see Section 5).
                            </p>
                        </section>

                        <!-- Section 5: Your Privacy Rights -->
                        <section id="privacy-rights" class="mb-12">
                            <h2 class="text-3xl font-bold text-brand-dark mb-8">5. Your Privacy Rights</h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                Depending on your jurisdiction (e.g., the EU/EEA under the GDPR, or California under the CCPA/CPRA), you may have the following rights regarding your personal data:
                            </p>

                            <div class="overflow-x-auto mb-8">
                                <table class="w-full border-collapse border border-gray-300 text-lg">
                                    <thead>
                                        <tr class="bg-gray-50">
                                            <th class="border border-gray-300 px-6 py-4 text-left font-bold text-brand-dark">Right</th>
                                            <th class="border border-gray-300 px-6 py-4 text-left font-bold text-brand-dark">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="border border-gray-300 px-6 py-4 font-semibold">Right to Access</td>
                                            <td class="border border-gray-300 px-6 py-4">You have the right to request copies of the personal data we hold about you.</td>
                                        </tr>
                                        <tr class="bg-gray-50">
                                            <td class="border border-gray-300 px-6 py-4 font-semibold">Right to Rectification</td>
                                            <td class="border border-gray-300 px-6 py-4">You have the right to request correction of any information you believe to be inaccurate or incomplete.</td>
                                        </tr>
                                        <tr>
                                            <td class="border border-gray-300 px-6 py-4 font-semibold">Right to Erasure</td>
                                            <td class="border border-gray-300 px-6 py-4">You have the right to request the deletion of your personal data from our systems (the "Right to be Forgotten").</td>
                                        </tr>
                                        <tr class="bg-gray-50">
                                            <td class="border border-gray-300 px-6 py-4 font-semibold">Right to Object / Opt-Out</td>
                                            <td class="border border-gray-300 px-6 py-4">You have the right to object to our processing of your personal data for direct marketing purposes or, where applicable, to opt out of the "sale" or "sharing" of your data.</td>
                                        </tr>
                                        <tr>
                                            <td class="border border-gray-300 px-6 py-4 font-semibold">Right to Portability</td>
                                            <td class="border border-gray-300 px-6 py-4">You have the right to request that we transfer the data we have collected to another organization or directly to you, subject to certain conditions.</td>
                                        </tr>
                                        <tr class="bg-gray-50">
                                            <td class="border border-gray-300 px-6 py-4 font-semibold">Right to Withdraw Consent</td>
                                            <td class="border border-gray-300 px-6 py-4">If we rely on your consent to process your data, you may withdraw that consent at any time.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 class="text-2xl font-semibold text-brand-dark mb-4">How to Exercise Your Rights:</h3>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                To submit a request related to any of the rights listed above, please contact us using the details provided in Section 7. We will respond to all legitimate requests within the legally required timeframe (e.g., 30 days under the GDPR, 45 days under the CCPA).
                            </p>
                        </section>

                        <!-- Section 6: Data Security and International Data Transfers -->
                        <section id="data-security" class="mb-12">
                            <h2 class="text-3xl font-bold text-brand-dark mb-8">6. Data Security and International Data Transfers</h2>

                            <h3 class="text-2xl font-semibold text-brand-dark mb-4">6.1. Security</h3>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                We implement robust technical and organizational measures, including encryption, access controls, and regular security audits, to protect personal data from unauthorized access, disclosure, alteration, or destruction. However, no electronic transmission over the internet or storage technology can be guaranteed to be completely secure.
                            </p>

                            <h3 class="text-2xl font-semibold text-brand-dark mb-4">6.2. International Data Transfers</h3>
                            <p class="text-lg leading-relaxed text-gray-700 mb-4">
                                Sinki.ai is a global company. Your personal data may be stored and processed in any country where we have facilities or engage service providers. This may include transferring data outside the EU/EEA or the UK.
                            </p>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                When transferring data across borders, we implement appropriate safeguards, such as Standard Contractual Clauses (SCCs), to ensure your data receives the same level of protection as it would in the original jurisdiction.
                            </p>

                            <h3 class="text-2xl font-semibold text-brand-dark mb-4">6.3. Children's Privacy</h3>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                Our website and services are not directed at, nor intended for, children under the age of 18. We do not knowingly solicit or collect personal data from individuals under 18. If we discover that we have collected personal data from a child under 18 without parental consent, we will promptly take steps to delete that information from our records. If you believe we may have inadvertently collected such data, please contact us immediately.
                            </p>
                        </section>

                        <!-- Section 7: Policy Updates -->
                        <section id="policy-updates" class="mb-12">
                            <h2 class="text-3xl font-bold text-brand-dark mb-8">7. Policy Updates</h2>
                            <p class="text-lg leading-relaxed text-gray-700 mb-4">
                                We may update this Privacy Policy periodically to reflect changes in our practices, legal requirements, or new technologies.
                            </p>
                            <ul class="list-disc pl-6 space-y-3 text-lg text-gray-700 mb-6">
                                <li><strong>Notification of Changes:</strong> We will inform you of any material changes by posting the updated Privacy Policy on this page and revising the "Effective Date" at the top of the policy.</li>
                                <li><strong>Acceptance:</strong> We encourage you to review this policy periodically. Continued use of the Service after the revised policy has been posted indicates your acceptance and agreement to the changes.</li>
                            </ul>
                        </section>

                        <!-- Contact Information -->
                        <div class="bg-gray-50 p-8 rounded-lg mt-16">
                            <h3 class="text-2xl font-semibold text-brand-dark mb-4">Questions About This Privacy Policy?</h3>
                            <p class="text-lg text-gray-700 mb-4">
                                If you have any questions about this Privacy Policy, please contact us.
                            </p>
                            <a
                                href="/contact"
                                class="inline-flex items-center px-8 py-3 border-2 border-brand-red bg-brand-red text-white rounded-full text-lg font-bold uppercase tracking-wide transition-all duration-300 hover:bg-transparent hover:text-brand-red"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer Section -->
        <FooterSection />
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import { ref, onMounted, onUnmounted } from 'vue';
import Header from '@/Components/Header.vue';
import FooterSection from '@/Components/FooterSection.vue';

const activeSection = ref('introduction');

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};

const updateActiveSection = () => {
    const sections = [
        'introduction',
        'controller-processor',
        'information-collection',
        'data-sharing',
        'privacy-rights',
        'data-security',
        'policy-updates'
    ];

    let currentSection = 'introduction';

    for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                currentSection = sectionId;
                break;
            }
        }
    }

    activeSection.value = currentSection;
};

onMounted(() => {
    window.addEventListener('scroll', updateActiveSection);
    updateActiveSection();
});

onUnmounted(() => {
    window.removeEventListener('scroll', updateActiveSection);
});
</script>

<style scoped>
/* Privacy Content Styles */
.privacy-content {
    font-family: 'Instrument Sans', sans-serif;
}

/* Terms Hero Section Styles */
.terms-hero-section {
    background: linear-gradient(180deg, rgba(235, 235, 210, 0.9) 0%, rgba(235, 235, 210, 0.6) 50%, rgba(245, 245, 220, 0.2) 80%, transparent 100%);
    overflow: hidden;
}

/* Background Elements */
.terms-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
}

/* Beige/Cream Colors for Background */
.from-beige\/15 {
    --tw-gradient-from: rgb(235 235 210 / 0.15);
}

.to-cream\/8 {
    --tw-gradient-to: rgb(245 245 220 / 0.08);
}

/* Animations */
@keyframes pulse-slow {
    0%, 100% {
        opacity: 0.4;
        transform: scale(1);
    }
    50% {
        opacity: 0.6;
        transform: scale(1.05);
    }
}

@keyframes pulse-slow-delayed {
    0%, 100% {
        opacity: 0.3;
        transform: scale(1);
    }
    50% {
        opacity: 0.5;
        transform: scale(1.08);
    }
}

.animate-pulse-slow {
    animation: pulse-slow 8s ease-in-out infinite;
}

.animate-pulse-slow-delayed {
    animation: pulse-slow-delayed 10s ease-in-out infinite;
    animation-delay: 2s;
}

/* Brand Colors */
.text-brand-dark {
    color: #121212;
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

/* Typography Adjustments */
h1 {
    font-family: 'Instrument Sans', sans-serif;
    font-weight: 700;
}

h2 {
    font-family: 'Instrument Sans', sans-serif;
    font-weight: 700;
    border-bottom: 3px solid #FF3621;
    padding-bottom: 0.5rem;
    display: inline-block;
}

h3 {
    font-family: 'Instrument Sans', sans-serif;
    font-weight: 600;
}

/* Prose Styling Override */
.prose {
    max-width: none;
}

.prose ul {
    margin: 0;
    padding-left: 1.5rem;
}

.prose li {
    margin: 0;
    padding: 0.25rem 0;
}

/* Table Styling */
table {
    font-family: 'Instrument Sans', sans-serif;
}

/* Link Styling */
a {
    transition: all 0.3s ease;
}

a:hover {
    text-decoration: none;
}

/* Sidebar Styles */
aside {
    height: fit-content;
}

/* Custom Sticky Sidebar */
.sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 160px; /* 40 * 4px = 160px equivalent to top-40 */
    align-self: flex-start;
    z-index: 10;
}

aside nav {
    backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 0, 0, 0.1);
    max-height: 80vh;
    overflow-y: auto;
}

aside nav a {
    font-size: 0.9rem;
    line-height: 1.3;
}

/* Active section styling */
.bg-red-50 {
    background-color: rgba(255, 54, 33, 0.1);
}

/* Custom scrollbar for sidebar */
aside nav::-webkit-scrollbar {
    width: 4px;
}

aside nav::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
}

aside nav::-webkit-scrollbar-thumb {
    background: #FF3621;
    border-radius: 4px;
}

/* Contact CTA Button */
.contact-cta {
    position: relative;
    overflow: hidden;
}

.contact-cta::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 54, 33, 0.1);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.contact-cta:hover::before {
    width: 300px;
    height: 300px;
}

/* Responsive Styles */
@media (max-width: 1280px) {
    .text-\[102px\] {
        font-size: 68px;
        line-height: 75px;
    }

    .pt-\[166px\] {
        padding-top: 120px;
    }
}

@media (max-width: 1024px) {
    .text-\[102px\] {
        font-size: 60px;
        line-height: 66px;
    }

    .text-\[30px\] {
        font-size: 24px;
        line-height: 32px;
    }

    .pt-\[166px\] {
        padding-top: 6rem;
    }

    .prose {
        font-size: 1rem;
    }

    /* Hide sidebar on tablet and mobile, make content full width */
    aside {
        display: none;
    }

    .flex {
        display: block;
    }

    .flex-1 {
        width: 100%;
    }
}

@media (max-width: 768px) {
    .text-\[102px\] {
        font-size: 46px;
        line-height: 50px;
        margin-top: 2rem;
    }

    .text-\[18px\] {
        font-size: 16px;
    }

    .text-\[30px\] {
        font-size: 20px;
        line-height: 28px;
    }

    .pt-\[166px\] {
        padding-top: 6rem;
    }

    .px-12 {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .ml-\[6px\] {
        margin-left: 0;
    }

    .prose {
        font-size: 0.95rem;
    }

    table {
        font-size: 0.9rem;
    }

    h2 {
        font-size: 2rem;
    }
}

@media (max-width: 640px) {
    .privacy-content {
        padding-top: 6rem;
        padding-bottom: 2rem;
    }

    h1 {
        font-size: 2rem;
        line-height: 1.2;
    }

    h2 {
        font-size: 1.75rem;
    }

    h3 {
        font-size: 1.25rem;
    }

    .prose {
        font-size: 0.9rem;
    }

    table {
        font-size: 0.8rem;
    }

    /* Stack table cells on mobile */
    table, thead, tbody, th, td, tr {
        display: block;
    }

    thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
    }

    tr {
        border: 1px solid #ccc;
        margin-bottom: 1rem;
        padding: 1rem;
        border-radius: 0.5rem;
    }

    td {
        border: none;
        border-bottom: 1px solid #eee;
        position: relative;
        padding: 0.75rem 0 0.75rem 35%;
        text-align: left;
    }

    td:before {
        content: attr(data-label) ": ";
        position: absolute;
        left: 0;
        width: 30%;
        padding-right: 10px;
        white-space: nowrap;
        font-weight: bold;
        color: #121212;
    }
}
</style>