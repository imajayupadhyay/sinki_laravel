import { ref, onMounted, onUnmounted, useSSRContext, mergeProps, reactive, unref, withCtx, createVNode } from "vue";
import { ssrRenderStyle, ssrRenderClass, ssrRenderAttrs, ssrRenderTeleport, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { F as FooterSection } from "./FooterSection-CLXWrwvX.js";
const _sfc_main$b = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const mobileMenuOpen = ref(false);
    const scrollProgress = ref(0);
    const isSticky = ref(false);
    const activeSection = ref("");
    const closeMobileMenu = () => {
      mobileMenuOpen.value = false;
      document.body.style.overflow = "";
    };
    const handleEscape = (e) => {
      if (e.key === "Escape" && mobileMenuOpen.value) {
        closeMobileMenu();
      }
    };
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      isSticky.value = scrollTop > windowHeight * 0.8;
      const navigation = document.querySelector(".navigation");
      if (navigation) {
        if (window.scrollY > 50) {
          navigation.classList.add("scrolled");
        } else {
          navigation.classList.remove("scrolled");
        }
      }
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableHeight = documentHeight - windowHeight;
      if (scrollableHeight > 0) {
        const progress = scrollTop / scrollableHeight * 100;
        scrollProgress.value = Math.min(100, Math.max(0, progress));
      }
      const sections = ["services", "approach", "platforms", "insights"];
      const offset = 200;
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom > offset) {
            activeSection.value = sectionId;
            break;
          }
        }
      }
    };
    onMounted(() => {
      window.addEventListener("keydown", handleEscape);
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    });
    onUnmounted(() => {
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="scroll-progress-bar fixed top-0 left-0 right-0 h-1 bg-gray-200 z-[100]" data-v-cbe06545><div class="scroll-progress-fill h-full bg-brand-red transition-all duration-300 ease-out" style="${ssrRenderStyle({ width: scrollProgress.value + "%" })}" data-v-cbe06545></div></div><div id="navigation" data-v-cbe06545><nav class="${ssrRenderClass([isSticky.value ? "nav-sticky" : "nav-floating", "navigation bg-white/75 backdrop-blur-sm shadow-custom z-50 rounded-[20px] border border-gray-200"])}" data-v-cbe06545><div class="container-custom" data-v-cbe06545><div class="flex items-center justify-between h-[80px] px-6" data-v-cbe06545><div class="flex items-center" data-v-cbe06545><a href="/" class="flex items-center space-x-2 logo-container" data-v-cbe06545><img class="sinkilogoclass w-[250px] h-[60px] object-contain transition-transform duration-300" src="/images/sinkilogo.png" alt="Sinki Logo" data-v-cbe06545></a></div><div class="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2" data-v-cbe06545><div class="flex items-center space-x-10" data-v-cbe06545><div class="nav-item" data-v-cbe06545><a href="#services" class="${ssrRenderClass(["nav-link text-base font-bold uppercase tracking-wide transition-colors duration-300", activeSection.value === "services" ? "text-brand-red active" : "text-brand-dark hover:text-brand-red"])}" data-v-cbe06545> Services </a></div><div class="nav-item" data-v-cbe06545><a href="#approach" class="${ssrRenderClass(["nav-link text-base font-bold uppercase tracking-wide transition-colors duration-300", activeSection.value === "approach" ? "text-brand-red active" : "text-brand-dark hover:text-brand-red"])}" data-v-cbe06545> Our Approach </a></div><div class="nav-item" data-v-cbe06545><a href="#platforms" class="${ssrRenderClass(["nav-link text-base font-bold uppercase tracking-wide transition-colors duration-300", activeSection.value === "platforms" ? "text-brand-red active" : "text-brand-dark hover:text-brand-red"])}" data-v-cbe06545> Platforms </a></div><div class="nav-item" data-v-cbe06545><a href="#insights" class="${ssrRenderClass(["nav-link text-base font-bold uppercase tracking-wide transition-colors duration-300", activeSection.value === "insights" ? "text-brand-red active" : "text-brand-dark hover:text-brand-red"])}" data-v-cbe06545> Insights </a></div></div></div><div class="hidden lg:block" data-v-cbe06545><a href="/contact" class="cta-button inline-flex items-center px-8 py-2.5 border-2 border-brand-dark rounded-full text-brand-dark text-base font-bold uppercase tracking-wide transition-all duration-300" data-v-cbe06545> Get Started </a></div><button class="lg:hidden mobile-menu-btn p-2 z-50 relative" data-v-cbe06545><svg class="w-8 h-8 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-cbe06545><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-cbe06545></path></svg></button></div></div></nav><div class="${ssrRenderClass(["mobile-menu-overlay fixed inset-0 bg-black/50 z-40 transition-opacity duration-300", mobileMenuOpen.value ? "opacity-100 visible" : "opacity-0 invisible"])}" data-v-cbe06545></div><div class="${ssrRenderClass(["mobile-menu lg:hidden fixed top-0 right-0 h-full w-full sm:w-80 bg-white shadow-2xl transition-transform duration-300 z-50", mobileMenuOpen.value ? "translate-x-0" : "translate-x-full"])}" data-v-cbe06545><div class="p-6 h-full flex flex-col overflow-y-auto" data-v-cbe06545><button class="mobile-menu-close mb-8 ml-auto block p-2 rounded-full hover:bg-gray-100 transition-colors duration-200" data-v-cbe06545><svg class="w-8 h-8 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-cbe06545><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-cbe06545></path></svg></button><div class="flex flex-col space-y-4" data-v-cbe06545><a href="#services" class="mobile-menu-link group flex items-center px-4 py-4 border border-gray-200 rounded-xl hover:border-brand-red hover:bg-brand-red/5 transition-all duration-300" data-v-cbe06545><div class="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300" data-v-cbe06545><svg class="w-6 h-6 text-brand-red group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-cbe06545><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" data-v-cbe06545></path></svg></div><div data-v-cbe06545><span class="text-brand-dark text-base font-bold uppercase group-hover:text-brand-red transition-colors duration-300" data-v-cbe06545>Services</span><p class="text-gray-500 text-xs font-normal" data-v-cbe06545>Our Solutions</p></div></a><a href="#approach" class="mobile-menu-link group flex items-center px-4 py-4 border border-gray-200 rounded-xl hover:border-brand-red hover:bg-brand-red/5 transition-all duration-300" data-v-cbe06545><div class="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300" data-v-cbe06545><svg class="w-6 h-6 text-brand-red group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-cbe06545><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-cbe06545></path></svg></div><div data-v-cbe06545><span class="text-brand-dark text-base font-bold uppercase group-hover:text-brand-red transition-colors duration-300" data-v-cbe06545>Our Approach</span><p class="text-gray-500 text-xs font-normal" data-v-cbe06545>How We Work</p></div></a><a href="#platforms" class="mobile-menu-link group flex items-center px-4 py-4 border border-gray-200 rounded-xl hover:border-brand-red hover:bg-brand-red/5 transition-all duration-300" data-v-cbe06545><div class="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300" data-v-cbe06545><svg class="w-6 h-6 text-brand-red group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-cbe06545><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-v-cbe06545></path></svg></div><div data-v-cbe06545><span class="text-brand-dark text-base font-bold uppercase group-hover:text-brand-red transition-colors duration-300" data-v-cbe06545>Platforms</span><p class="text-gray-500 text-xs font-normal" data-v-cbe06545>Technology Stack</p></div></a><a href="#insights" class="mobile-menu-link group flex items-center px-4 py-4 border border-gray-200 rounded-xl hover:border-brand-red hover:bg-brand-red/5 transition-all duration-300" data-v-cbe06545><div class="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300" data-v-cbe06545><svg class="w-6 h-6 text-brand-red group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-cbe06545><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" data-v-cbe06545></path></svg></div><div data-v-cbe06545><span class="text-brand-dark text-base font-bold uppercase group-hover:text-brand-red transition-colors duration-300" data-v-cbe06545>Insights</span><p class="text-gray-500 text-xs font-normal" data-v-cbe06545>Resources &amp; Blog</p></div></a><a href="/contact" class="mobile-menu-link group flex items-center px-4 py-4 border border-gray-200 rounded-xl hover:border-brand-red hover:bg-brand-red/5 transition-all duration-300" data-v-cbe06545><div class="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300" data-v-cbe06545><svg class="w-6 h-6 text-brand-red group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-cbe06545><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-v-cbe06545></path></svg></div><div data-v-cbe06545><span class="text-brand-dark text-base font-bold uppercase group-hover:text-brand-red transition-colors duration-300" data-v-cbe06545>Contact Us</span><p class="text-gray-500 text-xs font-normal" data-v-cbe06545>Get in Touch</p></div></a></div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Header.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-cbe06545"]]);
const _sfc_main$a = {
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    const showCalendlyModal = ref(false);
    const isLoading = ref(false);
    const loadingProgress = ref(0);
    ref(null);
    const closeCalendlyModal = () => {
      showCalendlyModal.value = false;
      isLoading.value = false;
      loadingProgress.value = 0;
      document.body.style.overflow = "";
    };
    const handleEscape = (e) => {
      if (e.key === "Escape" && showCalendlyModal.value) {
        closeCalendlyModal();
      }
    };
    onMounted(() => {
      window.addEventListener("keydown", handleEscape);
    });
    onUnmounted(() => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "hero-section relative flex items-center justify-center overflow-hidden pt-20 sm:pt-32 pb-16 sm:pb-20",
        style: {
          backgroundImage: "url(/images/heroobannersinki.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh"
        }
      }, _attrs))} data-v-b1b69e01><div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 z-0" data-v-b1b69e01></div><div class="container-custom relative z-10 px-3 sm:px-6 py-6 sm:py-20" data-v-b1b69e01><div class="max-w-[1518px] mx-auto text-center" data-v-b1b69e01><h1 class="hero-title text-brand-dark font-semibold leading-tight sm:leading-relaxed lg:leading-[100px] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[100px] mb-4 sm:mb-8 animate-fadeInUp" data-v-b1b69e01> We Help You Unlock The Value Of Your Data </h1><p class="hero-subtitle text-brand-light text-lg sm:text-xl md:text-2xl lg:text-[26px] leading-snug sm:leading-relaxed lg:leading-[39px] max-w-[95%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[1200px] mx-auto mb-8 sm:mb-12 animate-fadeInUp animation-delay-200" data-v-b1b69e01> We turn raw data into intelligence with Databricks. From data foundations to AI adoption, we deliver secure, scalable systems. </p><div class="hero-cta flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 animate-fadeInUp animation-delay-400" data-v-b1b69e01><button class="btn-primary group inline-flex items-center justify-center gap-3 px-6 sm:px-9 py-3 sm:py-4 bg-brand-red border-2 border-brand-red rounded-full text-white text-base sm:text-lg font-bold capitalize transition-all duration-300 w-full sm:w-auto" data-v-b1b69e01> Book a Strategy Session <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center" data-v-b1b69e01><svg class="w-6 h-6 sm:w-8 sm:h-8 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-b1b69e01><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-b1b69e01></path></svg></div></button><a href="#services" class="btn-secondary group inline-flex items-center justify-center gap-3 px-6 sm:px-9 py-3 sm:py-4 bg-transparent border-2 border-brand-red rounded-full text-brand-red text-base sm:text-lg font-bold capitalize transition-all duration-300 w-full sm:w-auto" data-v-b1b69e01> Explore Services <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center" data-v-b1b69e01><svg class="w-6 h-6 sm:w-8 sm:h-8 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-b1b69e01><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-b1b69e01></path></svg></div></a></div></div></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (showCalendlyModal.value) {
          _push2(`<div class="calendly-modal-overlay fixed inset-0 z-[9999] flex items-center justify-center p-4" data-v-b1b69e01><div class="calendly-modal-container bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden relative" data-v-b1b69e01><button class="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200" data-v-b1b69e01><svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b1b69e01><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-b1b69e01></path></svg></button><div class="bg-gradient-to-r from-brand-dark to-gray-800 px-8 py-6" data-v-b1b69e01><h2 class="text-2xl sm:text-3xl font-bold text-white" data-v-b1b69e01>Book a Strategy Session</h2><p class="text-gray-300 mt-2" data-v-b1b69e01>Let&#39;s discuss how we can help unlock the value of your data</p></div>`);
          if (isLoading.value) {
            _push2(`<div class="calendly-loading-container px-8 py-20" data-v-b1b69e01><div class="text-center mb-6" data-v-b1b69e01><div class="inline-block animate-spin rounded-full h-12 w-12 border-b-4 border-brand-red mb-4" data-v-b1b69e01></div><p class="text-lg font-semibold text-brand-dark" data-v-b1b69e01>Loading Calendar...</p><p class="text-sm text-gray-500 mt-2" data-v-b1b69e01>${ssrInterpolate(loadingProgress.value)}%</p></div><div class="w-full max-w-md mx-auto bg-gray-200 rounded-full h-3 overflow-hidden" data-v-b1b69e01><div class="bg-gradient-to-r from-brand-red to-red-500 h-full rounded-full transition-all duration-300 ease-out" style="${ssrRenderStyle({ width: loadingProgress.value + "%" })}" data-v-b1b69e01></div></div></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<div class="calendly-widget-wrapper" style="${ssrRenderStyle([
            { "height": "700px", "overflow": "hidden" },
            !isLoading.value ? null : { display: "none" }
          ])}" data-v-b1b69e01><div class="calendly-inline-widget" data-url="https://calendly.com/connect-jellyfishtechnologies/meeting-with-jellyfish-technologies-clone" style="${ssrRenderStyle({ "min-width": "320px", "height": "100%" })}" data-v-b1b69e01></div></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</section>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/Hero.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-b1b69e01"]]);
const _sfc_main$9 = {
  __name: "PartnerBadge",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "partner-badge-section bg-brand-dark border-b border-white/15" }, _attrs))} data-v-fa2ed72e><div class="container mx-auto px-3 sm:px-6" data-v-fa2ed72e><div class="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 h-auto sm:h-[50px] py-3 sm:py-0" data-v-fa2ed72e><span class="text-white text-base sm:text-xl font-medium tracking-wide text-center" data-v-fa2ed72e> An Official Databricks Partner </span><div class="databricks-logo-wrapper w-full sm:w-auto flex justify-center" data-v-fa2ed72e><img src="/images/databrickslight.png" alt="Databricks Logo" class="h-5 sm:h-6 partner-logo w-auto max-w-full" data-v-fa2ed72e></div></div></div></section>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/PartnerBadge.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const PartnerBadge = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-fa2ed72e"]]);
const _sfc_main$8 = {
  __name: "WhatWeDo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "what-we-do-section bg-white py-20 lg:py-32 relative overflow-hidden" }, _attrs))} data-v-8692be49><div class="absolute top-10 right-10 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl animate-pulse" data-v-8692be49></div><div class="absolute bottom-10 left-10 w-40 h-40 bg-brand-red/5 rounded-full blur-3xl animate-pulse-delayed" data-v-8692be49></div><div class="container-custom max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24" data-v-8692be49><div class="mb-6 sm:mb-8 animate-fade-in ml-0 sm:ml-3" data-v-8692be49><span class="text-brand-dark text-base sm:text-lg font-medium uppercase tracking-[1.8px]" data-v-8692be49> What We Do </span></div><h2 class="text-brand-dark font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[78px] leading-tight sm:leading-tight lg:leading-[85.8px] mb-4 sm:mb-6 max-w-full lg:max-w-[1167px] ml-0 sm:ml-3 animate-slide-up" data-v-8692be49> We Simplify Your Databricks Journey End-to-End </h2><p class="text-brand-dark text-lg sm:text-xl lg:text-[30px] leading-relaxed sm:leading-relaxed lg:leading-[45px] mb-12 sm:mb-16 max-w-full lg:max-w-[1074px] ml-0 sm:ml-3 animate-slide-up-delayed" data-v-8692be49> Wherever you are in your Databricks journey, planning, migrating, or scaling, we help you move faster and with confidence. </p><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-0 sm:px-3" data-v-8692be49><div class="service-card group bg-white border border-black/10 rounded-[15px] p-6 sm:p-8 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer" data-v-8692be49><div class="flex items-start gap-4 sm:gap-6" data-v-8692be49><div class="flex-shrink-0" data-v-8692be49><div class="icon-wrapper w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg" data-v-8692be49><svg class="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-8692be49><circle cx="12" cy="12" r="10" data-v-8692be49></circle><circle cx="12" cy="12" r="6" data-v-8692be49></circle><circle cx="12" cy="12" r="2" data-v-8692be49></circle></svg></div></div><div class="card-content flex-1" data-v-8692be49><h3 class="text-brand-dark text-xl sm:text-[24px] font-semibold leading-tight sm:leading-[36px] tracking-[0.48px] mb-2 group-hover:text-brand-red transition-colors duration-300" data-v-8692be49> Strategy &amp; Planning </h3><p class="text-brand-dark text-lg sm:text-[21px] font-normal leading-relaxed sm:leading-[31.5px] tracking-[0.42px]" data-v-8692be49> Design data &amp; AI roadmaps tailored to your business goals </p></div></div></div><div class="service-card group bg-white border border-black/10 rounded-[15px] p-6 sm:p-8 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer" data-v-8692be49><div class="flex items-start gap-4 sm:gap-6" data-v-8692be49><div class="flex-shrink-0" data-v-8692be49><div class="icon-wrapper w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg" data-v-8692be49><svg class="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-8692be49><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" data-v-8692be49></path></svg></div></div><div class="card-content flex-1" data-v-8692be49><h3 class="text-brand-dark text-xl sm:text-[24px] font-semibold leading-tight sm:leading-[36px] tracking-[0.48px] mb-2 group-hover:text-brand-red transition-colors duration-300" data-v-8692be49> Implementation &amp; Migration </h3><p class="text-brand-dark text-lg sm:text-[21px] font-normal leading-relaxed sm:leading-[31.5px] tracking-[0.42px]" data-v-8692be49> Migrate workloads and deploy scalable, reliable data systems </p></div></div></div><div class="service-card group bg-white border border-black/10 rounded-[15px] p-6 sm:p-8 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer" data-v-8692be49><div class="flex items-start gap-4 sm:gap-6" data-v-8692be49><div class="flex-shrink-0" data-v-8692be49><div class="icon-wrapper w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg" data-v-8692be49><svg class="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-8692be49><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" data-v-8692be49></path></svg></div></div><div class="card-content flex-1" data-v-8692be49><h3 class="text-brand-dark text-xl sm:text-[24px] font-semibold leading-tight sm:leading-[36px] tracking-[0.48px] mb-2 group-hover:text-brand-red transition-colors duration-300" data-v-8692be49> Support &amp; Enablement </h3><p class="text-brand-dark text-lg sm:text-[21px] font-normal leading-relaxed sm:leading-[31.5px] tracking-[0.42px]" data-v-8692be49> Train teams and optimize Databricks adoption for long-term success </p></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/WhatWeDo.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const WhatWeDo = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-8692be49"]]);
const _sfc_main$7 = {
  __name: "OutcomesYouCanExpect",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "outcomes-section relative overflow-hidden py-20 lg:py-32" }, _attrs))} data-v-89f9a947><div class="absolute inset-0 z-0" data-v-89f9a947><img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop" alt="Background" class="w-full h-full object-cover" data-v-89f9a947><div class="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90" data-v-89f9a947></div></div><div class="container-custom max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 relative z-10" data-v-89f9a947><div class="mb-6 sm:mb-8 text-center animate-fade-in" data-v-89f9a947><span class="text-white text-base sm:text-lg font-medium uppercase tracking-[1.8px]" data-v-89f9a947> Outcomes You Can Expect </span></div><h2 class="text-white font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[78px] leading-tight sm:leading-tight lg:leading-[85.8px] mb-4 sm:mb-6 text-center max-w-full lg:max-w-[1275px] mx-auto animate-slide-up" data-v-89f9a947> Real Results You&#39;ll Achieve With Us </h2><p class="text-white text-lg sm:text-xl lg:text-[30px] leading-relaxed sm:leading-relaxed lg:leading-[45px] mb-12 sm:mb-16 text-center max-w-full lg:max-w-[1145px] mx-auto animate-slide-up-delayed" data-v-89f9a947> Think outcomes, not overhead. Our expertise ensures Databricks delivers exactly what you need. </p><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" data-v-89f9a947><div class="outcome-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-6 sm:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer" data-v-89f9a947><div class="mb-6 sm:mb-8 flex justify-center" data-v-89f9a947><div class="icon-wrapper w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl" data-v-89f9a947><svg class="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-89f9a947><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" data-v-89f9a947></path></svg></div></div><div class="text-center" data-v-89f9a947><h3 class="text-white text-xl sm:text-[24px] lg:text-[28px] font-semibold leading-tight sm:leading-[36px] lg:leading-[42px] tracking-[0.48px] lg:tracking-[0.56px] mb-2 sm:mb-3 group-hover:text-brand-red transition-colors duration-300" data-v-89f9a947> Smarter, Faster Decisions </h3><p class="text-white text-lg sm:text-[21px] lg:text-[24px] font-normal leading-relaxed sm:leading-[31.5px] lg:leading-[36px] tracking-[0.42px] lg:tracking-[0.48px] opacity-90" data-v-89f9a947> Actionable insights that drive real business outcomes </p></div></div><div class="outcome-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-6 sm:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer" data-v-89f9a947><div class="mb-6 sm:mb-8 flex justify-center" data-v-89f9a947><div class="icon-wrapper w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl" data-v-89f9a947><svg class="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-89f9a947><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-v-89f9a947></path></svg></div></div><div class="text-center" data-v-89f9a947><h3 class="text-white text-xl sm:text-[24px] lg:text-[28px] font-semibold leading-tight sm:leading-[36px] lg:leading-[42px] tracking-[0.48px] lg:tracking-[0.56px] mb-2 sm:mb-3 group-hover:text-brand-red transition-colors duration-300" data-v-89f9a947> Faster Time to Value </h3><p class="text-white text-lg sm:text-[21px] lg:text-[24px] font-normal leading-relaxed sm:leading-[31.5px] lg:leading-[36px] tracking-[0.42px] lg:tracking-[0.48px] opacity-90" data-v-89f9a947> Achieve measurable results in weeks, not months </p></div></div><div class="outcome-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-6 sm:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer" data-v-89f9a947><div class="mb-6 sm:mb-8 flex justify-center" data-v-89f9a947><div class="icon-wrapper w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl" data-v-89f9a947><svg class="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-89f9a947><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-89f9a947></path></svg></div></div><div class="text-center" data-v-89f9a947><h3 class="text-white text-xl sm:text-[24px] lg:text-[28px] font-semibold leading-tight sm:leading-[36px] lg:leading-[42px] tracking-[0.48px] lg:tracking-[0.56px] mb-2 sm:mb-3 group-hover:text-brand-red transition-colors duration-300" data-v-89f9a947> Optimized Spend </h3><p class="text-white text-lg sm:text-[21px] lg:text-[24px] font-normal leading-relaxed sm:leading-[31.5px] lg:leading-[36px] tracking-[0.42px] lg:tracking-[0.48px] opacity-90" data-v-89f9a947> Reduce costs across Databricks and cloud infrastructure </p></div></div><div class="outcome-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-6 sm:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer" data-v-89f9a947><div class="mb-6 sm:mb-8 flex justify-center" data-v-89f9a947><div class="icon-wrapper w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl" data-v-89f9a947><svg class="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-89f9a947><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" data-v-89f9a947></path></svg></div></div><div class="text-center" data-v-89f9a947><h3 class="text-white text-xl sm:text-[24px] lg:text-[28px] font-semibold leading-tight sm:leading-[36px] lg:leading-[42px] tracking-[0.48px] lg:tracking-[0.56px] mb-2 sm:mb-3 group-hover:text-brand-red transition-colors duration-300" data-v-89f9a947> Modern, Efficient Data Platform </h3><p class="text-white text-lg sm:text-[21px] lg:text-[24px] font-normal leading-relaxed sm:leading-[31.5px] lg:leading-[36px] tracking-[0.42px] lg:tracking-[0.48px] opacity-90" data-v-89f9a947> Clean, governed, and ready for enterprise growth </p></div></div><div class="outcome-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-6 sm:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer" data-v-89f9a947><div class="mb-6 sm:mb-8 flex justify-center" data-v-89f9a947><div class="icon-wrapper w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl" data-v-89f9a947><svg class="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-89f9a947><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" data-v-89f9a947></path></svg></div></div><div class="text-center" data-v-89f9a947><h3 class="text-white text-xl sm:text-[24px] lg:text-[28px] font-semibold leading-tight sm:leading-[36px] lg:leading-[42px] tracking-[0.48px] lg:tracking-[0.56px] mb-2 sm:mb-3 group-hover:text-brand-red transition-colors duration-300" data-v-89f9a947> AI On Demand </h3><p class="text-white text-lg sm:text-[21px] lg:text-[24px] font-normal leading-relaxed sm:leading-[31.5px] lg:leading-[36px] tracking-[0.42px] lg:tracking-[0.48px] opacity-90" data-v-89f9a947> Scalable, practical AI solutions available when you need them </p></div></div><div class="outcome-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-6 sm:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer" data-v-89f9a947><div class="mb-6 sm:mb-8 flex justify-center" data-v-89f9a947><div class="icon-wrapper w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl" data-v-89f9a947><svg class="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-89f9a947><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-v-89f9a947></path></svg></div></div><div class="text-center" data-v-89f9a947><h3 class="text-white text-xl sm:text-[24px] lg:text-[28px] font-semibold leading-tight sm:leading-[36px] lg:leading-[42px] tracking-[0.48px] lg:tracking-[0.56px] mb-2 sm:mb-3 group-hover:text-brand-red transition-colors duration-300" data-v-89f9a947> Streamlined Governance </h3><p class="text-white text-lg sm:text-[21px] lg:text-[24px] font-normal leading-relaxed sm:leading-[31.5px] lg:leading-[36px] tracking-[0.42px] lg:tracking-[0.48px] opacity-90" data-v-89f9a947> Security and compliance integrated from day one </p></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/OutcomesYouCanExpect.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Outcomes = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-89f9a947"]]);
const _sfc_main$6 = {
  __name: "OurApproach",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "approach",
        class: "approach-section bg-white py-20 lg:py-32 relative overflow-hidden"
      }, _attrs))} data-v-948bd1ce><div class="container-custom max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24" data-v-948bd1ce><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center" data-v-948bd1ce><div class="approach-content" data-v-948bd1ce><div class="mb-6 sm:mb-8 animate-fade-in" data-v-948bd1ce><span class="text-brand-dark text-base sm:text-lg font-medium uppercase tracking-[1.8px]" data-v-948bd1ce> Our Approach </span></div><h2 class="text-brand-dark font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[78px] leading-tight sm:leading-tight lg:leading-[85.8px] mb-4 sm:mb-6 max-w-full lg:max-w-[925px] animate-slide-up" data-v-948bd1ce> How We Make Databricks Work for You </h2><p class="text-brand-dark text-lg sm:text-xl lg:text-[30px] leading-relaxed sm:leading-relaxed lg:leading-[45px] mb-8 sm:mb-12 max-w-full lg:max-w-[747px] animate-slide-up-delayed" data-v-948bd1ce> Our proven 3-step approach ensures Databricks adapts to your business needs, not the other way around. </p></div><div class="approach-diagram relative animate-slide-in-right p-2" data-v-948bd1ce><div class="diagram-container relative w-full h-[400px] sm:h-[500px] lg:h-[700px] flex items-center justify-center" data-v-948bd1ce><img src="/images/Infographic.png" alt="Our 3-Step Approach" class="w-full h-full object-contain transition-all duration-300 hover:scale-105" data-v-948bd1ce></div><div class="absolute -top-10 -right-10 w-32 h-32 bg-brand-red/10 rounded-full blur-3xl animate-pulse-slow" data-v-948bd1ce></div><div class="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-red/10 rounded-full blur-3xl animate-pulse-slow-delayed" data-v-948bd1ce></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/OurApproach.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const OurApproach = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-948bd1ce"]]);
const _sfc_main$5 = {
  __name: "CoreServices",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "services",
        class: "core-services-section relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-32"
      }, _attrs))} data-v-5d4efaac><div class="absolute inset-0 z-0" style="${ssrRenderStyle({ backgroundImage: "url(/images/heroobannersinki.png)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" })}" data-v-5d4efaac></div><div class="container-custom max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 relative z-10" data-v-5d4efaac><div class="mb-6 sm:mb-8 text-center animate-fade-in" data-v-5d4efaac><span class="text-brand-dark text-sm sm:text-base md:text-lg font-medium uppercase tracking-[1.8px]" data-v-5d4efaac> Core Services </span></div><h2 class="text-brand-dark font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[78px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[85.8px] mb-4 sm:mb-6 text-center max-w-full lg:max-w-[1281px] mx-auto animate-slide-up" data-v-5d4efaac> Databricks Services We Deliver </h2><p class="text-brand-dark text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[30px] leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-[45px] mb-8 sm:mb-12 md:mb-16 text-center max-w-full lg:max-w-[1094px] mx-auto animate-slide-up-delayed" data-v-5d4efaac> From data engineering and governance to AI and analytics, we make sure your Databricks investment delivers measurable impact. </p><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12" data-v-5d4efaac><div class="service-card group bg-white/50 backdrop-blur-sm border border-black/10 rounded-[25px] p-4 sm:p-6 md:p-8 hover:bg-white/80 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px]" data-v-5d4efaac><div class="flex items-start justify-between mb-4 sm:mb-6" data-v-5d4efaac><div class="icon-wrapper w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg flex-shrink-0" data-v-5d4efaac><svg class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-5d4efaac><path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" data-v-5d4efaac></path></svg></div><div class="arrow-icon opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" data-v-5d4efaac><svg class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-brand-dark" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-5d4efaac><path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17" data-v-5d4efaac></path></svg></div></div><h3 class="text-brand-dark text-xl sm:text-2xl md:text-[22px] lg:text-[24px] font-semibold leading-tight sm:leading-tight md:leading-[28px] lg:leading-[30px] mb-4 sm:mb-6 group-hover:text-brand-red transition-colors duration-300" data-v-5d4efaac> Data Engineering &amp; Modernization </h3><div class="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3" data-v-5d4efaac><span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]" data-v-5d4efaac>Data Pipelines</span><span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]" data-v-5d4efaac>Data Orchestration</span><span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]" data-v-5d4efaac>Data Integration</span><span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]" data-v-5d4efaac>Data Migration</span><span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]" data-v-5d4efaac>Data Modernization</span><span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]" data-v-5d4efaac>Data Lakehouse Consulting</span></div></div><div class="service-card group bg-white/50 backdrop-blur-sm border border-black/10 rounded-[25px] p-4 sm:p-6 md:p-8 hover:bg-white/80 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px]" data-v-5d4efaac><div class="flex items-start justify-between mb-4 sm:mb-6" data-v-5d4efaac><div class="icon-wrapper w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg flex-shrink-0" data-v-5d4efaac><svg class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-5d4efaac><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-5d4efaac></path></svg></div><div class="arrow-icon opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" data-v-5d4efaac><svg class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-brand-dark" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-5d4efaac><path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17" data-v-5d4efaac></path></svg></div></div><h3 class="text-brand-dark text-xl sm:text-2xl md:text-[22px] lg:text-[24px] font-semibold leading-tight sm:leading-tight md:leading-[28px] lg:leading-[30px] mb-4 sm:mb-6 group-hover:text-brand-red transition-colors duration-300" data-v-5d4efaac> Data Management &amp; Governance </h3><div class="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3" data-v-5d4efaac><span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]" data-v-5d4efaac>Data Management Consulting</span><span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]" data-v-5d4efaac>Cloud Data Management</span><span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]" data-v-5d4efaac>Data Governance</span><span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]" data-v-5d4efaac>Unity Catalog Implementation &amp; Management</span><span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]" data-v-5d4efaac>Unity Catalog Migration</span></div></div><div class="service-card group bg-white/50 backdrop-blur-sm border border-black/10 rounded-[25px] p-4 sm:p-6 md:p-8 hover:bg-white/80 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px]" data-v-5d4efaac><div class="flex items-start justify-between mb-4 sm:mb-6" data-v-5d4efaac><div class="icon-wrapper w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg flex-shrink-0" data-v-5d4efaac><svg class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-5d4efaac><path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" data-v-5d4efaac></path></svg></div><div class="arrow-icon opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" data-v-5d4efaac><svg class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-brand-dark" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-5d4efaac><path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17" data-v-5d4efaac></path></svg></div></div><h3 class="text-brand-dark text-xl sm:text-2xl md:text-[22px] lg:text-[24px] font-semibold leading-tight sm:leading-tight md:leading-[28px] lg:leading-[30px] mb-4 sm:mb-6 group-hover:text-brand-red transition-colors duration-300" data-v-5d4efaac> Data Analytics &amp; Business Intelligence </h3><div class="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3" data-v-5d4efaac><span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]" data-v-5d4efaac>Data Analytics Consulting</span><span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]" data-v-5d4efaac>Data Visualization</span><span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]" data-v-5d4efaac>Dashboards Development</span><span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]" data-v-5d4efaac>Business Intelligence Platforms</span></div></div><div class="service-card group bg-white/50 backdrop-blur-sm border border-black/10 rounded-[25px] p-4 sm:p-6 md:p-8 hover:bg-white/80 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px]" data-v-5d4efaac><div class="flex items-start justify-between mb-4 sm:mb-6" data-v-5d4efaac><div class="icon-wrapper w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg flex-shrink-0" data-v-5d4efaac><svg class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-5d4efaac><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" data-v-5d4efaac></path></svg></div><div class="arrow-icon opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" data-v-5d4efaac><svg class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-brand-dark" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-5d4efaac><path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17" data-v-5d4efaac></path></svg></div></div><h3 class="text-brand-dark text-xl sm:text-2xl md:text-[22px] lg:text-[24px] font-semibold leading-tight sm:leading-tight md:leading-[28px] lg:leading-[30px] mb-4 sm:mb-6 group-hover:text-brand-red transition-colors duration-300" data-v-5d4efaac> AI &amp; ML Solutions </h3><div class="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3" data-v-5d4efaac><span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]" data-v-5d4efaac>Machine Learning</span><span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]" data-v-5d4efaac>AI Development</span><span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]" data-v-5d4efaac>MLOps</span><span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]" data-v-5d4efaac>Model Deployment</span><span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]" data-v-5d4efaac>Gen AI</span></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/CoreServices.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const CoreServices = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-5d4efaac"]]);
const _sfc_main$4 = {
  __name: "PlatformsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const platforms = reactive({
      row1: [
        { name: "Databricks", image: "databricks.png" }
      ],
      row2: [
        { name: "Microsoft Azure", image: "azure-logo.png" },
        { name: "Google Cloud", image: "Google-Cloud.png" },
        { name: "AWS", image: "aws-logo.png" }
      ],
      row3: [
        { name: "Power BI", image: "Power-Bi-Logo.png" },
        { name: "Tableau", image: "Tableau.png" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "platforms",
        class: "bg-white py-20 lg:py-32 relative overflow-hidden"
      }, _attrs))} data-v-59068e52><div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24" data-v-59068e52><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center" data-v-59068e52><div class="platforms-content" data-v-59068e52><div class="mb-8 animate-fade-in" data-v-59068e52><span class="text-brand-dark text-lg font-medium uppercase tracking-[1.8px]" data-v-59068e52> Platforms We Work With </span></div><h2 class="text-brand-dark font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[78px] leading-tight lg:leading-[85.8px] mb-6 max-w-[852px] animate-slide-up" data-v-59068e52> Built on the Platforms You Trust </h2><p class="text-brand-dark text-xl lg:text-[30px] leading-relaxed lg:leading-[45px] mb-12 max-w-[760px] animate-slide-up-delayed" data-v-59068e52> We bring Databricks to life on the enterprise platforms you already rely on. </p><div class="hidden lg:block absolute -left-10 top-1/4 w-32 h-32 bg-brand-red/10 rounded-full animate-pulse-slow" data-v-59068e52></div><div class="hidden lg:block absolute -left-5 top-1/3 w-24 h-24 bg-brand-dark/5 rounded-full animate-pulse-slow-delayed" data-v-59068e52></div></div><div class="platforms-grid relative animate-slide-in-right" data-v-59068e52><div class="flex flex-col gap-4 sm:gap-6" data-v-59068e52><div class="flex justify-center" data-v-59068e52><div class="platform-logo-card group bg-white border border-gray-200 rounded-[25px] p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:border-brand-red transition-all duration-500 cursor-pointer flex items-center justify-center min-h-[100px] sm:min-h-[120px] lg:min-h-[143px] w-full sm:max-w-[286px]" style="${ssrRenderStyle({ animationDelay: "0s" })}" data-v-59068e52><img${ssrRenderAttr("src", `/images/platforms/${platforms.row1[0].image}`)}${ssrRenderAttr("alt", platforms.row1[0].name)} class="max-w-full h-auto object-contain max-h-[60px] sm:max-h-[70px] lg:max-h-[80px] transition-transform duration-300 group-hover:scale-105" data-v-59068e52></div></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto w-full" data-v-59068e52><!--[-->`);
      ssrRenderList(platforms.row2, (platform, index) => {
        _push(`<div class="platform-logo-card group bg-white border border-gray-200 rounded-[25px] p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:border-brand-red transition-all duration-500 cursor-pointer flex items-center justify-center min-h-[100px] sm:min-h-[120px] lg:min-h-[143px] w-full" style="${ssrRenderStyle({ animationDelay: `${(index + 1) * 0.5}s` })}" data-v-59068e52><img${ssrRenderAttr("src", `/images/platforms/${platform.image}`)}${ssrRenderAttr("alt", platform.name)} class="max-w-full h-auto object-contain max-h-[50px] sm:max-h-[60px] lg:max-h-[70px] transition-transform duration-300 group-hover:scale-105" data-v-59068e52></div>`);
      });
      _push(`<!--]--></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto w-full" data-v-59068e52><!--[-->`);
      ssrRenderList(platforms.row3, (platform, index) => {
        _push(`<div class="platform-logo-card group bg-white border border-gray-200 rounded-[25px] p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:border-brand-red transition-all duration-500 cursor-pointer flex items-center justify-center min-h-[100px] sm:min-h-[120px] lg:min-h-[143px] w-full" style="${ssrRenderStyle({ animationDelay: `${(index + 4) * 0.5}s` })}" data-v-59068e52><img${ssrRenderAttr("src", `/images/platforms/${platform.image}`)}${ssrRenderAttr("alt", platform.name)} class="max-w-full h-auto object-contain max-h-[50px] sm:max-h-[60px] lg:max-h-[70px] transition-transform duration-300 group-hover:scale-105" data-v-59068e52></div>`);
      });
      _push(`<!--]--></div></div><div class="hidden lg:block absolute -right-10 bottom-1/4 w-32 h-32 bg-brand-red/10 rounded-full animate-pulse-slow" data-v-59068e52></div><div class="hidden lg:block absolute -right-5 bottom-1/3 w-24 h-24 bg-brand-dark/5 rounded-full animate-pulse-slow-delayed" data-v-59068e52></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/PlatformsSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const PlatformsSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-59068e52"]]);
const _sfc_main$3 = {
  __name: "WhatSetsUsApartSection",
  __ssrInlineRender: true,
  setup(__props) {
    const features = reactive([
      {
        title: "We Simplify Databricks",
        description: "Tailored solutions aligned to your business objectives and operating model",
        iconPath: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      },
      {
        title: "We Accelerate Adoption",
        description: "Rapid prioritization and delivery of high-impact use cases to demonstrate value early.",
        iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
      },
      {
        title: "We Engineer for Scale",
        description: "	Architectures designed for performance, governance, and long-term sustainability.",
        iconPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      },
      {
        title: "We Partner Strategically",
        description: "Transparent, collaborative guidance that keeps projects aligned to business goals.",
        iconPath: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "what-sets-us-apart-section relative overflow-hidden py-20 lg:py-32" }, _attrs))} data-v-1cf870b5><div class="absolute inset-0 z-0" data-v-1cf870b5><img src="/images/heroobannersinki.png" alt="Background" class="w-full h-full object-cover" data-v-1cf870b5><div class="absolute inset-0" data-v-1cf870b5></div></div><div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24 relative z-10" data-v-1cf870b5><div class="mb-8 text-center animate-fade-in" data-v-1cf870b5><span class="text-brand-dark text-lg font-medium uppercase tracking-[1.8px]" data-v-1cf870b5> What Sets Us Apart </span></div><h2 class="text-brand-dark font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[78px] leading-tight lg:leading-[85.8px] mb-6 text-center max-w-[1210px] mx-auto animate-slide-up" data-v-1cf870b5> Your Databricks Partner, Every Step of the Way </h2><p class="text-brand-dark text-xl lg:text-[28px] leading-relaxed lg:leading-[42px] mb-16 text-center max-w-[1210px] mx-auto animate-slide-up-delayed" data-v-1cf870b5> We don&#39;t just implement Databricks. We simplify it, tailor it, and make it deliver real business outcomes. </p><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-v-1cf870b5><!--[-->`);
      ssrRenderList(features, (feature, index) => {
        _push(`<div class="feature-card group bg-white/50 backdrop-blur-sm border border-black/10 rounded-[25px] p-10 hover:bg-white/80 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer" data-v-1cf870b5><div class="mb-8 flex justify-center" data-v-1cf870b5><div class="icon-wrapper w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg" data-v-1cf870b5><svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-1cf870b5><path stroke-linecap="round" stroke-linejoin="round"${ssrRenderAttr("d", feature.iconPath)} data-v-1cf870b5></path></svg></div></div><div class="text-center" data-v-1cf870b5><h3 class="text-brand-dark text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300" data-v-1cf870b5>${ssrInterpolate(feature.title)}</h3><p class="text-brand-dark text-[18px] font-normal leading-[27px] tracking-[0.36px]" data-v-1cf870b5>${ssrInterpolate(feature.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/WhatSetsUsApartSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const WhatSetsUsApartSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-1cf870b5"]]);
const _sfc_main$2 = {
  __name: "InsightsResourcesSection",
  __ssrInlineRender: true,
  setup(__props) {
    const blogs = reactive([
      {
        title: "How To Make Your Data Ready For AI",
        badge: "Blog",
        date: "13 Sep, 2025",
        image: "blog1.png"
      },
      {
        title: "The Anatomy Of A Healthcare Data Strategy",
        badge: "Blog",
        date: "02 Sep, 2025",
        image: "blog2.png"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "insights",
        class: "insights-section bg-white py-20 lg:py-32 relative overflow-hidden"
      }, _attrs))} data-v-a830cff6><div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24" data-v-a830cff6><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-start" data-v-a830cff6><div class="insights-content" data-v-a830cff6><div class="mb-8 animate-fade-in" data-v-a830cff6><span class="text-brand-dark text-lg font-medium uppercase tracking-[1.8px]" data-v-a830cff6> Insights &amp; Resources </span></div><h2 class="text-brand-dark font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[78px] leading-tight lg:leading-[85.8px] mb-6 max-w-[834px] animate-slide-up" data-v-a830cff6> Latest Insights on Databricks, Data &amp; AI </h2><p class="text-brand-dark text-xl lg:text-[30px] leading-relaxed lg:leading-[45px] mb-12 max-w-[769px] animate-slide-up-delayed" data-v-a830cff6> Stay ahead with guides, blogs, and practical insights to help your enterprise scale smarter with Databricks. </p><div class="animate-fade-in-up" data-v-a830cff6><a href="#resources" class="inline-flex items-center gap-3 px-8 py-3 bg-brand-dark border-2 border-brand-dark rounded-full text-white text-lg font-bold capitalize hover:bg-transparent hover:text-brand-dark transition-all duration-300 btn-hover-effect group" data-v-a830cff6> Explore Resources <svg class="w-10 h-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-a830cff6><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-a830cff6></path></svg></a></div></div><div class="insights-cards flex flex-col sm:flex-row gap-6 lg:gap-8 animate-slide-in-right max-w-full overflow-visible" data-v-a830cff6><!--[-->`);
      ssrRenderList(blogs, (blog, index) => {
        _push(`<div class="${ssrRenderClass([
          "blog-card group bg-white border border-gray-200 rounded-[25px] overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2",
          index === 0 ? "blog-card-1 mt-0 sm:mt-20" : "blog-card-2 mt-0 sm:-mt-10"
        ])}" data-v-a830cff6><div class="relative overflow-hidden h-[229px]" data-v-a830cff6><img${ssrRenderAttr("src", `./assets/images/${blog.image}`)}${ssrRenderAttr("alt", blog.title)} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-v-a830cff6><div class="blog-image-placeholder hidden items-center justify-center w-full h-full bg-gray-200" data-v-a830cff6><span class="text-gray-500 font-semibold" data-v-a830cff6>Blog Image</span></div></div><div class="p-6 flex flex-col h-[180px]" data-v-a830cff6><div class="flex items-center justify-between mb-4" data-v-a830cff6><span class="inline-block px-5 py-1 bg-brand-gray rounded-[20px] text-brand-dark text-sm font-semibold tracking-wide uppercase" data-v-a830cff6>${ssrInterpolate(blog.badge)}</span><div class="w-8 h-8 flex items-center justify-center" data-v-a830cff6><svg class="w-6 h-6 text-brand-dark group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-a830cff6><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-a830cff6></path></svg></div></div><h3 class="text-brand-dark text-[24px] sm:text-[28px] font-semibold leading-[28.8px] sm:leading-[33.6px] tracking-[0.48px] sm:tracking-[0.56px] mb-auto group-hover:text-brand-red transition-colors duration-300" data-v-a830cff6>${ssrInterpolate(blog.title)}</h3><p class="text-gray-500 text-base tracking-wide mt-auto" data-v-a830cff6>${ssrInterpolate(blog.date)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/InsightsResourcesSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const InsightsResourcesSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a830cff6"]]);
const _sfc_main$1 = {
  __name: "CTASection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "contact",
        class: "cta-section bg-white py-0 pb-20 lg:pb-24 relative overflow-hidden"
      }, _attrs))} data-v-160f70ab><div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24" data-v-160f70ab><div class="cta-card-wrapper px-2 sm:px-4 lg:px-16" data-v-160f70ab><div class="cta-card relative rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] p-8 sm:p-10 md:p-12 lg:p-16 text-center overflow-hidden shadow-lg min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]" data-v-160f70ab><div class="absolute inset-0 z-0" data-v-160f70ab><img src="/images/heroobannersinki.png" alt="Background" class="w-full h-full object-cover rounded-[20px] sm:rounded-[25px] lg:rounded-[30px]" data-v-160f70ab></div><div class="relative z-10 max-w-[1469px] mx-auto h-full flex flex-col justify-center" data-v-160f70ab><div class="mb-4 sm:mb-5 md:mb-6 animate-fade-in" data-v-160f70ab><span class="text-brand-dark text-sm sm:text-base md:text-lg font-medium uppercase tracking-[1.2px] sm:tracking-[1.5px] md:tracking-[1.8px]" data-v-160f70ab> Let&#39;s Get Started </span></div><h2 class="text-brand-dark font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] 2xl:text-[60px] leading-tight sm:leading-tight md:leading-tight lg:leading-[1.1] xl:leading-[1.1] 2xl:leading-[66px] mb-4 sm:mb-5 md:mb-6 animate-slide-up px-2 sm:px-4 md:px-6" data-v-160f70ab> Ready to Get More from Databricks? </h2><p class="text-brand-dark text-base sm:text-lg md:text-xl lg:text-[22px] xl:text-[24px] leading-relaxed sm:leading-relaxed md:leading-[1.6] lg:leading-[1.5] xl:leading-[36px] mb-8 sm:mb-9 md:mb-10 max-w-[95%] sm:max-w-[90%] md:max-w-[770px] mx-auto animate-slide-up-delayed px-2 sm:px-4" data-v-160f70ab> Let&#39;s simplify your Databricks journey, and turn data into real results. </p><div class="animate-fade-in-up" data-v-160f70ab><a href="/contact" class="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-brand-red border-2 border-brand-red rounded-full text-white text-base sm:text-lg font-bold capitalize hover:bg-transparent hover:text-brand-red transition-all duration-300 btn-hover-effect shadow-lg hover:shadow-2xl group" data-v-160f70ab><span class="whitespace-nowrap" data-v-160f70ab>Get Started Now</span><svg class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 transform group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-160f70ab><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-160f70ab></path></svg></a></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CTASection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CTASection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-160f70ab"]]);
const _sfc_main = {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white" }, _attrs))} data-v-9949008d>`);
      _push(ssrRenderComponent(unref(Head), { title: "Sinki.ai: Your Databricks Strategy & Innovation Partner" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<meta name="description" content="At Sinki.ai, we help organizations innovate with Databricks by unifying data, accelerating analytics, and delivering AI-powered business outcomes." data-v-9949008d${_scopeId}>`);
          } else {
            return [
              createVNode("meta", {
                name: "description",
                content: "At Sinki.ai, we help organizations innovate with Databricks by unifying data, accelerating analytics, and delivering AI-powered business outcomes."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(Hero, null, null, _parent));
      _push(ssrRenderComponent(PartnerBadge, null, null, _parent));
      _push(ssrRenderComponent(WhatWeDo, null, null, _parent));
      _push(ssrRenderComponent(Outcomes, null, null, _parent));
      _push(ssrRenderComponent(OurApproach, null, null, _parent));
      _push(ssrRenderComponent(CoreServices, null, null, _parent));
      _push(ssrRenderComponent(PlatformsSection, null, null, _parent));
      _push(ssrRenderComponent(WhatSetsUsApartSection, null, null, _parent));
      _push(ssrRenderComponent(InsightsResourcesSection, null, null, _parent));
      _push(ssrRenderComponent(CTASection, null, null, _parent));
      _push(ssrRenderComponent(FooterSection, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9949008d"]]);
export {
  Home as default
};
