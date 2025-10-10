<template>
    <div class="min-h-screen bg-white">
        <Head title="Terms & Conditions - Sinki.ai">
            <meta name="description" content="Terms and Conditions for Sinki.ai services. Read our comprehensive terms governing the use of our website and professional consulting services." />
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
                        Terms & Conditions
                    </h1>
                    <!-- <p class="text-[30px] text-[#121212] font-normal leading-[45px] max-w-[899px]">
                        Please read these Terms & Conditions carefully before using our website and services.
                    </p> -->
                </div>
            </div>
        </section>

        <!-- Terms and Conditions Content -->
        <div class="privacy-content py-16 lg:py-24">
            <div class="max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24">
                <div class="flex gap-8">
                    <!-- Sidebar Navigation (25%) -->
                    <aside class="hidden lg:block w-1/4 flex-shrink-0 sidebar-sticky mt-8">
                        <nav class="bg-white shadow-lg rounded-lg p-4 space-y-2">
                            <a href="#introduction"
                               :class="['block text-sm font-medium transition-all duration-200 py-3 px-4 rounded-lg border-l-4', activeSection === 'introduction' ? 'text-brand-red bg-red-50 border-brand-red' : 'text-gray-700 hover:text-brand-red hover:bg-gray-50 border-transparent']"
                               @click="scrollToSection('introduction')">
                                Introduction
                            </a>
                            <a href="#definition"
                               :class="['block text-sm font-medium transition-all duration-200 py-3 px-4 rounded-lg border-l-4', activeSection === 'definition' ? 'text-brand-red bg-red-50 border-brand-red' : 'text-gray-700 hover:text-brand-red hover:bg-gray-50 border-transparent']"
                               @click="scrollToSection('definition')">
                                1. Definition
                            </a>
                            <a href="#eligibility"
                               :class="['block text-sm font-medium transition-all duration-200 py-3 px-4 rounded-lg border-l-4', activeSection === 'eligibility' ? 'text-brand-red bg-red-50 border-brand-red' : 'text-gray-700 hover:text-brand-red hover:bg-gray-50 border-transparent']"
                               @click="scrollToSection('eligibility')">
                                2. Eligibility and Access
                            </a>
                            <a href="#intellectual-property"
                               :class="['block text-sm font-medium transition-all duration-200 py-3 px-4 rounded-lg border-l-4', activeSection === 'intellectual-property' ? 'text-brand-red bg-red-50 border-brand-red' : 'text-gray-700 hover:text-brand-red hover:bg-gray-50 border-transparent']"
                               @click="scrollToSection('intellectual-property')">
                                3. Intellectual Property Rights
                            </a>
                            <a href="#acceptable-use"
                               :class="['block text-sm font-medium transition-all duration-200 py-3 px-4 rounded-lg border-l-4', activeSection === 'acceptable-use' ? 'text-brand-red bg-red-50 border-brand-red' : 'text-gray-700 hover:text-brand-red hover:bg-gray-50 border-transparent']"
                               @click="scrollToSection('acceptable-use')">
                                4. Acceptable Use and Prohibited Activities
                            </a>
                            <a href="#confidentiality"
                               :class="['block text-sm font-medium transition-all duration-200 py-3 px-4 rounded-lg border-l-4', activeSection === 'confidentiality' ? 'text-brand-red bg-red-50 border-brand-red' : 'text-gray-700 hover:text-brand-red hover:bg-gray-50 border-transparent']"
                               @click="scrollToSection('confidentiality')">
                                5. Confidentiality
                            </a>
                            <a href="#disclaimers"
                               :class="['block text-sm font-medium transition-all duration-200 py-3 px-4 rounded-lg border-l-4', activeSection === 'disclaimers' ? 'text-brand-red bg-red-50 border-brand-red' : 'text-gray-700 hover:text-brand-red hover:bg-gray-50 border-transparent']"
                               @click="scrollToSection('disclaimers')">
                                6. Disclaimers and No Professional Advice
                            </a>
                            <a href="#liability"
                               :class="['block text-sm font-medium transition-all duration-200 py-3 px-4 rounded-lg border-l-4', activeSection === 'liability' ? 'text-brand-red bg-red-50 border-brand-red' : 'text-gray-700 hover:text-brand-red hover:bg-gray-50 border-transparent']"
                               @click="scrollToSection('liability')">
                                7. Limitation of Liability and Indemnification
                            </a>
                            <a href="#third-party"
                               :class="['block text-sm font-medium transition-all duration-200 py-3 px-4 rounded-lg border-l-4', activeSection === 'third-party' ? 'text-brand-red bg-red-50 border-brand-red' : 'text-gray-700 hover:text-brand-red hover:bg-gray-50 border-transparent']"
                               @click="scrollToSection('third-party')">
                                8. Third-Party Links and Services
                            </a>
                            <a href="#governing-law"
                               :class="['block text-sm font-medium transition-all duration-200 py-3 px-4 rounded-lg border-l-4', activeSection === 'governing-law' ? 'text-brand-red bg-red-50 border-brand-red' : 'text-gray-700 hover:text-brand-red hover:bg-gray-50 border-transparent']"
                               @click="scrollToSection('governing-law')">
                                9. Governing Law and Dispute Resolution
                            </a>
                            <a href="#force-majeure"
                               :class="['block text-sm font-medium transition-all duration-200 py-3 px-4 rounded-lg border-l-4', activeSection === 'force-majeure' ? 'text-brand-red bg-red-50 border-brand-red' : 'text-gray-700 hover:text-brand-red hover:bg-gray-50 border-transparent']"
                               @click="scrollToSection('force-majeure')">
                                10. Force Majeure & Severability
                            </a>
                            <a href="#privacy-policy"
                               :class="['block text-sm font-medium transition-all duration-200 py-3 px-4 rounded-lg border-l-4', activeSection === 'privacy-policy' ? 'text-brand-red bg-red-50 border-brand-red' : 'text-gray-700 hover:text-brand-red hover:bg-gray-50 border-transparent']"
                               @click="scrollToSection('privacy-policy')">
                                11. Privacy Policy Link
                            </a>
                            <a href="#changes"
                               :class="['block text-sm font-medium transition-all duration-200 py-3 px-4 rounded-lg border-l-4', activeSection === 'changes' ? 'text-brand-red bg-red-50 border-brand-red' : 'text-gray-700 hover:text-brand-red hover:bg-gray-50 border-transparent']"
                               @click="scrollToSection('changes')">
                                12. Changes to Terms
                            </a>
                        </nav>
                    </aside>

                    <!-- Main Content (75%) -->
                    <div class="flex-1 prose prose-lg prose-gray max-w-none">
                    <!-- Introduction -->
                    <div id="introduction" class="mb-12">
                        <p class="text-lg leading-relaxed text-gray-700 mb-6">
                            Please read these Terms & Conditions (Agreement) carefully before using the website <a href="https://sinki.ai/" class="text-brand-red hover:underline">https://sinki.ai/</a> ("Website" or "Service") operated by Sinki.ai ("us," "we," or "our").
                        </p>
                        <p class="text-lg leading-relaxed text-gray-700">
                            By accessing or using the website, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service. This T&C agreement governs the use of the website and any information or services provided therein.
                        </p>
                    </div>

                    <!-- Section 1: Definition -->
                    <section id="definition" class="mb-12">
                        <h2 class="text-3xl font-bold text-brand-dark mb-8">1. Definition</h2>
                        <p class="text-lg leading-relaxed text-gray-700 mb-6">
                            To avoid ambiguity, the following terms shall have the meanings set forth below:
                        </p>

                        <div class="overflow-x-auto mb-8">
                            <table class="w-full border-collapse border border-gray-300 text-lg">
                                <thead>
                                    <tr class="bg-gray-50">
                                        <th class="border border-gray-300 px-6 py-4 text-left font-bold text-brand-dark">Term</th>
                                        <th class="border border-gray-300 px-6 py-4 text-left font-bold text-brand-dark">Definition</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="border border-gray-300 px-6 py-4 font-semibold">Website</td>
                                        <td class="border border-gray-300 px-6 py-4">The corporate website located at https://sinki.ai/</td>
                                    </tr>
                                    <tr class="bg-gray-50">
                                        <td class="border border-gray-300 px-6 py-4 font-semibold">Services</td>
                                        <td class="border border-gray-300 px-6 py-4">The professional consulting, AI consulting, Databricks services, digital solutions, and implementation work offered by Sinki.ai to its clients.</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-gray-300 px-6 py-4 font-semibold">User</td>
                                        <td class="border border-gray-300 px-6 py-4">Any individual or entity accessing, browsing, or otherwise using the website.</td>
                                    </tr>
                                    <tr class="bg-gray-50">
                                        <td class="border border-gray-300 px-6 py-4 font-semibold">Client Data</td>
                                        <td class="border border-gray-300 px-6 py-4">Any non-public, sensitive, or proprietary data provided by clients to Sinki.ai during the engagement of the Services.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <!-- Section 2: Eligibility and Access -->
                    <section id="eligibility" class="mb-12">
                        <h2 class="text-3xl font-bold text-brand-dark mb-8">2. Eligibility and Access</h2>
                        <p class="text-lg leading-relaxed text-gray-700 mb-6">
                            By using the website, you represent and warrant that:
                        </p>
                        <ul class="list-disc pl-6 space-y-4 text-lg text-gray-700 mb-6">
                            <li><strong>Age Requirement:</strong> You are at least eighteen (18) years of age or the age of legal majority in your jurisdiction.</li>
                            <li><strong>Legal Authority:</strong> You possess the legal capacity to enter into this binding Agreement.</li>
                            <li><strong>Lawful Purpose:</strong> You will not use the Service for any unlawful purposes or in any way that violates this Agreement.</li>
                        </ul>
                        <p class="text-lg leading-relaxed text-gray-700">
                            We reserve the right to suspend or terminate your access to the Website at any time and at our sole discretion, particularly in the event of a breach of these Terms or if we suspect illegal activity.
                        </p>
                    </section>

                    <!-- Section 3: Intellectual Property Rights -->
                    <section id="intellectual-property" class="mb-12">
                        <h2 class="text-3xl font-bold text-brand-dark mb-8">3. Intellectual Property Rights</h2>
                        <p class="text-lg leading-relaxed text-gray-700 mb-6">
                            This is critical for a knowledge-based consulting firm.
                        </p>
                        <ul class="list-disc pl-6 space-y-4 text-lg text-gray-700 mb-6">
                            <li><strong>Ownership:</strong> The website and all its contents, features, and functionalities—including, but not limited to, all information, software, text, displays, images, video, audio, and the design, selection, and arrangement thereof—are owned by Sinki.ai, its licensors, or other providers of such materials. These are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</li>
                            <li><strong>Trademarks:</strong> The Sinki.ai name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Sinki.ai or its affiliates or licensors. You must not use these marks without our prior written permission.</li>
                            <li><strong>Limited License:</strong> You are granted a non-exclusive, non-transferable, and revocable license to access and use the website strictly in accordance with these terms for your internal business purposes or for personal, non-commercial use.</li>
                            <li><strong>Prohibition:</strong> You may not copy, reproduce, republish, download, post, transmit, or distribute any material from the website without prior written consent.</li>
                        </ul>
                    </section>

                    <!-- Section 4: Acceptable Use and Prohibited Activities -->
                    <section id="acceptable-use" class="mb-12">
                        <h2 class="text-3xl font-bold text-brand-dark mb-8">4. Acceptable Use and Prohibited Activities</h2>
                        <p class="text-lg leading-relaxed text-gray-700 mb-6">
                            You agree to use the Service solely for lawful purposes and in accordance with these Terms.
                        </p>
                        <p class="text-lg leading-relaxed text-gray-700 mb-4">
                            <strong>Prohibited Activities include:</strong>
                        </p>
                        <ul class="list-disc pl-6 space-y-4 text-lg text-gray-700 mb-6">
                            <li><strong>System Interference:</strong> Attempting to gain unauthorized access to any part of the Service, the server hosting the website, or any related server, computer, or database.</li>
                            <li><strong>Data Exploitation:</strong> Automated scraping, data mining, harvesting, or any similar methods of gathering or extracting data from the Website's content for any commercial purpose.</li>
                            <li><strong>Harmful Code:</strong> Introducing viruses, Trojan horses, worms, logic bombs, or other malicious or technologically harmful material.</li>
                            <li><strong>Reverse Engineering:</strong> Attempting to decompile, reverse engineer, or disassemble any software or proprietary systems that underlie the website or our service delivery models.</li>
                            <li><strong>Commercial Use:</strong> Reproducing, duplicating, or copying any content from the Service for commercial purposes without our express written permission is prohibited.</li>
                        </ul>
                    </section>

                    <!-- Section 5: Confidentiality -->
                    <section id="confidentiality" class="mb-12">
                        <h2 class="text-3xl font-bold text-brand-dark mb-8">5. Confidentiality</h2>
                        <p class="text-lg leading-relaxed text-gray-700 mb-6">
                            This section protects sensitive B2B and internal business information.
                        </p>
                        <p class="text-lg leading-relaxed text-gray-700 mb-6">Both Sinki.ai and the User (and especially any Client engaging with our Services) agree to maintain the confidentiality of any non-public information received from the other party.</p>
                        <ul class="list-disc pl-6 space-y-4 text-lg text-gray-700 mb-6">
                            <li><strong>Obligation:</strong> Both parties shall protect the other's confidential information from unauthorized use, access, or disclosure using the same degree of care they use to protect their own sensitive information.</li>
                            <li><strong>Purpose:</strong> Confidential Information shall only be used for the purpose of receiving or providing the Services as applicable.</li>
                            <li><strong>Exclusions:</strong> This obligation does not apply to information that is legally required to be disclosed or information that is already in the public domain.</li>
                        </ul>
                    </section>

                    <!-- Section 6: Disclaimers and No Professional Advice -->
                    <section id="disclaimers" class="mb-12">
                        <h2 class="text-3xl font-bold text-brand-dark mb-8">6. Disclaimers and No Professional Advice</h2>

                        <h3 class="text-2xl font-semibold text-brand-dark mb-4">A. General Information Disclaimer</h3>
                        <p class="text-lg leading-relaxed text-gray-700 mb-6">
                            The content on the Sinki.ai website—including case studies, blog posts, and service descriptions—is provided for general informational purposes only. It does not constitute technical, professional, or legal advice.
                        </p>

                        <h3 class="text-2xl font-semibold text-brand-dark mb-4">B. No Warranties</h3>
                        <p class="text-lg leading-relaxed text-gray-700 mb-4">
                            The Service is provided on an "AS IS" and "AS AVAILABLE" basis, without any warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                        </p>
                        <p class="text-lg leading-relaxed text-gray-700">
                            We do not warrant that the Service will be uninterrupted, error-free, or completely secure, or that the content is accurate, complete, or current.
                        </p>
                    </section>

                    <!-- Section 7: Limitation of Liability and Indemnification -->
                    <section id="liability" class="mb-12">
                        <h2 class="text-3xl font-bold text-brand-dark mb-8">7. Limitation of Liability and Indemnification</h2>

                        <h3 class="text-2xl font-semibold text-brand-dark mb-4">A. Limitation of Liability</h3>
                        <p class="text-lg leading-relaxed text-gray-700 mb-4">
                            To the fullest extent permitted by applicable law, neither Sinki.ai nor its directors, employees, partners, agents, suppliers, or affiliates shall be liable for any indirect, incidental, special, consequential, or punitive damages, including, without limitation, loss of profits, data, use, goodwill, or other intangible losses resulting from:
                        </p>
                        <ul class="list-disc pl-6 space-y-3 text-lg text-gray-700 mb-6">
                            <li>Your access to, use of, or inability to access or use the Service.</li>
                            <li>Any conduct or content provided by any third party on the Service.</li>
                            <li>Any content obtained from the service.</li>
                        </ul>
                        <p class="text-lg leading-relaxed text-gray-700 mb-6">
                            This limitation applies regardless of whether the alleged liability arises from contract, tort, negligence, strict liability, or any other basis.
                        </p>

                        <h3 class="text-2xl font-semibold text-brand-dark mb-4">B. Indemnification</h3>
                        <p class="text-lg leading-relaxed text-gray-700 mb-4">
                            You agree to defend, indemnify, and hold harmless Sinki.ai, its licensees and licensors, and their employees, contractors, agents, officers, and directors from and against any claims, damages, obligations, losses, liabilities, costs, or debts arising from:
                        </p>
                        <ul class="list-disc pl-6 space-y-3 text-lg text-gray-700">
                            <li>Your use of and access to the Website.</li>
                            <li>Your breach of any term of these T&C.</li>
                        </ul>
                    </section>

                    <!-- Section 8: Third-Party Links and Services -->
                    <section id="third-party" class="mb-12">
                        <h2 class="text-3xl font-bold text-brand-dark mb-8">8. Third-Party Links and Services</h2>
                        <ul class="list-disc pl-6 space-y-4 text-lg text-gray-700">
                            <li>The website may contain links to third-party websites or services that are not owned or controlled by Sinki.ai (e.g., links to AWS, vendor sites, or articles).</li>
                            <li>Sinki.ai has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party websites or services.</li>
                            <li>You further acknowledge and agree that Sinki.ai shall not be responsible or liable, directly or indirectly, for any damage or loss caused by, or alleged to be caused by, or in connection with the use of, or reliance on, any such content, goods, or services available on or through any such websites or services.</li>
                        </ul>
                    </section>

                    <!-- Section 9: Governing Law and Dispute Resolution -->
                    <section id="governing-law" class="mb-12">
                        <h2 class="text-3xl font-bold text-brand-dark mb-8">9. Governing Law and Dispute Resolution</h2>

                        <h3 class="text-2xl font-semibold text-brand-dark mb-4">A. Governing Law</h3>
                        <p class="text-lg leading-relaxed text-gray-700 mb-6">
                            These Terms shall be governed and construed in accordance with the laws of Utah, United States, without regard to its conflict of law provisions.
                        </p>

                        <h3 class="text-2xl font-semibold text-brand-dark mb-4">B. Dispute Resolution</h3>
                        <p class="text-lg leading-relaxed text-gray-700">
                            Any dispute arising out of or relating to these T&C, or your use of the Website, shall be resolved through binding arbitration in Utah, United States, administered by a recognized arbitration association, unless otherwise required by law. You and Sinki.ai agree to submit to the personal jurisdiction of that court.
                        </p>
                    </section>

                    <!-- Section 10: Force Majeure & Severability -->
                    <section id="force-majeure" class="mb-12">
                        <h2 class="text-3xl font-bold text-brand-dark mb-8">10. Force Majeure & Severability</h2>

                        <h3 class="text-2xl font-semibold text-brand-dark mb-4">A. Force Majeure</h3>
                        <p class="text-lg leading-relaxed text-gray-700 mb-6">
                            Sinki.ai shall not be liable for any failure or delay in the performance of its obligations hereunder due to events beyond its reasonable control, including, but not limited to, acts of God, war, terrorism, power failures, internet outages, natural disasters, or changes in regulatory laws.
                        </p>

                        <h3 class="text-2xl font-semibold text-brand-dark mb-4">B. Severability</h3>
                        <p class="text-lg leading-relaxed text-gray-700">
                            If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. The invalid provision shall be replaced by a valid provision that accomplishes the intent of the original provision as closely as possible.
                        </p>
                    </section>

                    <!-- Section 11: Privacy Policy Link -->
                    <section id="privacy-policy" class="mb-12">
                        <h2 class="text-3xl font-bold text-brand-dark mb-8">11. Privacy Policy Link</h2>
                        <p class="text-lg leading-relaxed text-gray-700">
                            Your use of the Website and any personal information you provide to us is also governed by our Privacy Policy. By using this Website, you acknowledge that you have reviewed and agree to the terms of our Privacy Policy.
                        </p>
                    </section>

                    <!-- Section 12: Changes to Terms -->
                    <section id="changes" class="mb-12">
                        <h2 class="text-3xl font-bold text-brand-dark mb-8">12. Changes to Terms</h2>
                        <p class="text-lg leading-relaxed text-gray-700 mb-6">
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice before any new terms take effect. What constitutes a material change will be determined at our sole discretion.
                        </p>
                        <p class="text-lg leading-relaxed text-gray-700">
                            By continuing to access or use our Service after those revisions take effect, you agree to be bound by the updated terms.
                        </p>
                    </section>

                    <!-- Contact Information -->
                    <div class="bg-gray-50 p-8 rounded-lg mt-16">
                        <h3 class="text-2xl font-semibold text-brand-dark mb-4">Questions About These Terms?</h3>
                        <p class="text-lg text-gray-700 mb-4">
                            If you have any questions about these Terms and Conditions, please contact us.
                        </p>
                        <a
                            href="/contact"
                            class="inline-flex items-center px-8 py-3 border-2 border-brand-red bg-brand-red text-white rounded-full text-lg font-bold uppercase tracking-wide transition-all duration-300 hover:bg-transparent hover:text-white hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
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
    if (typeof document !== 'undefined') {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
};

const updateActiveSection = () => {
    if (typeof document !== 'undefined') {
        const sections = [
            'introduction',
            'definition',
            'eligibility',
            'intellectual-property',
            'acceptable-use',
            'confidentiality',
            'disclaimers',
            'liability',
            'third-party',
            'governing-law',
            'force-majeure',
            'privacy-policy',
            'changes'
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
    }
};

onMounted(() => {
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', updateActiveSection);
        updateActiveSection();
    }
});

onUnmounted(() => {
    if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', updateActiveSection);
    }
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

/* Custom Sticky Sidebar */
.sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 160px; /* 40 * 4px = 160px equivalent to top-40 */
    align-self: flex-start;
    z-index: 10;
}

/* Active section styling */
.bg-red-50 {
    background-color: rgba(255, 54, 33, 0.1);
}

/* Sidebar Styles */
aside {
    height: fit-content;
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
        margin-top: 4rem;
    }

    .text-\[18px\] {
        font-size: 16px;
    }

    .text-\[30px\] {
        font-size: 20px;
        line-height: 28px;
    }

    .pt-\[166px\] {
        padding-top: 3rem;
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
        padding-top: 2rem;
        padding-bottom: 2rem;
    }

    .container-custom {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    h1 {
        font-size: 2rem;
        line-height: 1.2;
        margin-bottom: 1rem;
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

    .text-center p {
        font-size: 1rem;
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

    /* Add data labels for mobile table */
    tr:nth-child(1) td:nth-child(1):before { content: "Term: "; }
    tr:nth-child(1) td:nth-child(2):before { content: "Definition: "; }
    tr:nth-child(2) td:nth-child(1):before { content: "Term: "; }
    tr:nth-child(2) td:nth-child(2):before { content: "Definition: "; }
    tr:nth-child(3) td:nth-child(1):before { content: "Term: "; }
    tr:nth-child(3) td:nth-child(2):before { content: "Definition: "; }
    tr:nth-child(4) td:nth-child(1):before { content: "Term: "; }
    tr:nth-child(4) td:nth-child(2):before { content: "Definition: "; }
}
</style>