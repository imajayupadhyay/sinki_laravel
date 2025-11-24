import { onMounted, mergeProps, useSSRContext, ref, onUnmounted, reactive, createVNode, resolveDynamicComponent, unref, withCtx } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrRenderVNode, ssrRenderTeleport, ssrRenderComponent } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { H as Header } from "./Header-DHb6HnRe.js";
import { F as FooterSection } from "./FooterSection-Cp7kRGnW.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { P as ParnerBadge, S as ServiceCTA } from "./ServiceCTA-vMtExxvY.js";
import { u as useCanonical } from "./useCanonical-DTCbHnHl.js";
const _sfc_main$6 = {
  __name: "AboutHero",
  __ssrInlineRender: true,
  setup(__props) {
    onMounted(() => {
      if (typeof AOS !== "undefined") {
        AOS.init({
          duration: 1e3,
          once: true
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden min-h-[65vh]" }, _attrs))} data-v-7ab6c033><div class="absolute inset-0" data-v-7ab6c033><img src="/images/aboutheroback.png" alt="About Us Banner" class="w-full h-full object-cover" data-v-7ab6c033><div class="absolute inset-0 bg-black bg-opacity-30" data-v-7ab6c033></div></div><div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px] relative z-10 pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-48 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-36" data-v-7ab6c033><div class="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center" data-v-7ab6c033><div class="flex-1 lg:w-3/4 space-y-4 sm:space-y-5 md:space-y-6" data-v-7ab6c033><h1 class="text-[28px] sm:text-[32px] md:text-[42px] lg:text-[56px] xl:text-[64px] leading-[1.1] sm:leading-[1.15] md:leading-[1.1] font-bold text-white mt-2 sm:mt-4 md:mt-6 animate-slide-up" data-v-7ab6c033> We Turn Complex Data<br class="hidden sm:block" data-v-7ab6c033><span class="sm:hidden" data-v-7ab6c033> into Clear,</span><span class="hidden sm:inline" data-v-7ab6c033> into Clear, Actionable Intelligence</span><br class="sm:hidden" data-v-7ab6c033><span class="sm:hidden" data-v-7ab6c033>Actionable Intelligence</span></h1><p class="text-[16px] sm:text-[18px] md:text-xl lg:text-[28px] leading-relaxed sm:leading-[28px] md:leading-relaxed lg:leading-[42px] text-white/80 animate-slide-up-delayed" data-v-7ab6c033> Sinki helps enterprises use Databricks to create organized, consistent, and human-centered data systems that accelerate analytics and AI. </p></div><div class="lg:w-1/4 flex justify-center lg:justify-end" data-v-7ab6c033><div class="relative" data-v-7ab6c033><div class="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] animate-float-in" data-v-7ab6c033><img src="/images/rightlogo.png" alt="Sinki Logo" class="w-full h-full object-contain animate-glow" data-v-7ab6c033></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AboutUs/AboutHero.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const AboutHero = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-7ab6c033"]]);
const _sfc_main$5 = {
  __name: "AboutStorySection",
  __ssrInlineRender: true,
  props: {
    headerTag: {
      type: String,
      default: "OUR STORY"
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ""
    },
    descriptions: {
      type: Array,
      required: true,
      default: () => []
    },
    imageSrc: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      default: "About story image"
    },
    imagePosition: {
      type: String,
      default: "left",
      // 'left' or 'right'
      validator: (value) => ["left", "right"].includes(value)
    },
    backgroundColor: {
      type: String,
      default: "bg-white"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["about-story-section py-20 sm:py-24 lg:py-32", __props.backgroundColor]
      }, _attrs))} data-v-de54f5d5><div class="container-custom mx-auto px-6 sm:px-8 lg:px-12 xl:px-20" data-v-de54f5d5><div class="max-w-[1518px] mx-auto" data-v-de54f5d5><div class="${ssrRenderClass([__props.imagePosition === "right" ? "lg:flex-row-reverse" : "", "flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center"])}" data-v-de54f5d5><div class="${ssrRenderClass([__props.imagePosition === "right" ? "lg:order-1" : "lg:order-2", "content-container w-full lg:w-[70%] flex-grow order-1"])}" data-v-de54f5d5><div class="section-header mb-4 sm:mb-6 animate-fade-in-up" data-v-de54f5d5><span class="section-tag text-gray-600 text-sm sm:text-base font-medium uppercase tracking-wider" data-v-de54f5d5>${ssrInterpolate(__props.headerTag)}</span></div><h2 class="section-title text-brand-dark font-semibold mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-tight lg:leading-[64px] break-words animate-fade-in-up-delayed" data-v-de54f5d5>${ssrInterpolate(__props.title)}</h2>`);
      if (__props.subtitle) {
        _push(`<h3 class="section-subtitle text-gray-700 font-medium mb-4 text-xl sm:text-2xl lg:text-[26px] leading-relaxed animate-fade-in-up-more" data-v-de54f5d5>${ssrInterpolate(__props.subtitle)}</h3>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="section-description space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-7" data-v-de54f5d5><!--[-->`);
      ssrRenderList(__props.descriptions, (paragraph, index) => {
        _push(`<p class="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed animate-fade-in-up-staggered" style="${ssrRenderStyle({ animationDelay: `${1.2 + index * 0.3}s` })}" data-v-de54f5d5>${paragraph ?? ""}</p>`);
      });
      _push(`<!--]--></div></div><div class="${ssrRenderClass([__props.imagePosition === "right" ? "lg:order-2" : "lg:order-1", "image-container w-full lg:w-[30%] flex-shrink-0 order-2 animate-scale-in"])}" data-v-de54f5d5><div class="relative rounded-3xl overflow-hidden shadow-xl" data-v-de54f5d5><img${ssrRenderAttr("src", __props.imageSrc)}${ssrRenderAttr("alt", __props.imageAlt)} class="w-full h-48 sm:h-56 md:h-64 lg:h-[65vh] object-cover" data-v-de54f5d5></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AboutUs/AboutStorySection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const AboutStorySection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-de54f5d5"]]);
const _sfc_main$4 = {
  __name: "WhatWeDoSection",
  __ssrInlineRender: true,
  props: {
    headerTag: {
      type: String,
      default: "HOW WE HELP"
    },
    title: {
      type: String,
      default: "What We Do"
    },
    subtitle: {
      type: String,
      default: "We help enterprises harness the full power of Databricks to unify data, analytics, and AI."
    },
    services: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "what-we-do-section relative overflow-hidden py-20 lg:py-32",
        style: {
          backgroundImage: "url(/images/aboutussecbanner.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }
      }, _attrs))} data-v-128bd647><div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 relative z-10" data-v-128bd647><div class="text-center mb-18 lg:mb-24" data-v-128bd647><div class="section-header mb-8 animate-fade-in-up" data-v-128bd647><span class="text-white text-sm sm:text-base font-medium uppercase tracking-wider opacity-80" data-v-128bd647>${ssrInterpolate(__props.headerTag)}</span></div><h2 class="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-tight lg:leading-[64px] mb-4 animate-slide-up-title" data-v-128bd647>${ssrInterpolate(__props.title)}</h2><p class="text-white text-xl lg:text-[28px] leading-relaxed lg:leading-[42px] max-w-[1200px] mx-auto animate-slide-up-subtitle whitespace-nowrap lg:whitespace-nowrap md:whitespace-normal sm:whitespace-normal" data-v-128bd647>${ssrInterpolate(__props.subtitle)}</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 xl:gap-8" data-v-128bd647><div class="service-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer fade-up-1" data-v-128bd647><div class="flex items-start gap-6" data-v-128bd647><div class="flex-shrink-0" data-v-128bd647><div class="icon-wrapper w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl" data-v-128bd647><svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-128bd647><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" data-v-128bd647></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-128bd647></path></svg></div></div><div class="flex-1" data-v-128bd647><h3 class="text-white text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300" data-v-128bd647> Data Engineering &amp; Modernization </h3><p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90" data-v-128bd647> Design and build resilient lakehouse architectures &amp; automated pipelines that deliver reliable, analytics-ready data. </p></div></div></div><div class="service-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer fade-up-2" data-v-128bd647><div class="flex items-start gap-6" data-v-128bd647><div class="flex-shrink-0" data-v-128bd647><div class="icon-wrapper w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl" data-v-128bd647><svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-128bd647><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-v-128bd647></path></svg></div></div><div class="flex-1" data-v-128bd647><h3 class="text-white text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300" data-v-128bd647> Data Management &amp; Governance </h3><p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90" data-v-128bd647> Establish strong governance with Unity Catalog-aligned lineage, metadata management, and compliance automation. </p></div></div></div><div class="service-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer fade-up-3" data-v-128bd647><div class="flex items-start gap-6" data-v-128bd647><div class="flex-shrink-0" data-v-128bd647><div class="icon-wrapper w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl" data-v-128bd647><svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-128bd647><path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" data-v-128bd647></path></svg></div></div><div class="flex-1" data-v-128bd647><h3 class="text-white text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300" data-v-128bd647> Data Analytics &amp; Business Intelligence </h3><p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90" data-v-128bd647> Transform raw data into interactive dashboards, KPIs, and insights that drive faster decisions. </p></div></div></div><div class="service-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer fade-up-4" data-v-128bd647><div class="flex items-start gap-6" data-v-128bd647><div class="flex-shrink-0" data-v-128bd647><div class="icon-wrapper w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl" data-v-128bd647><svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-128bd647><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" data-v-128bd647></path></svg></div></div><div class="flex-1" data-v-128bd647><h3 class="text-white text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300" data-v-128bd647> AI &amp; ML Solutions </h3><p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90" data-v-128bd647> Operationalize AI with scalable, production-ready models that enable prediction, automation, and continuous improvement. </p></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AboutUs/WhatWeDoSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const WhatWeDoSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-128bd647"]]);
const _sfc_main$3 = {
  __name: "OurApproachSection",
  __ssrInlineRender: true,
  props: {
    headerTag: {
      type: String,
      default: "HOW WE WORK"
    },
    title: {
      type: String,
      default: "Our Approach"
    },
    subtitle: {
      type: String,
      default: "A clear, outcome-driven approach that keeps your business goals at the center."
    },
    ctaText: {
      type: String,
      default: "Book A Discovery Session"
    }
  },
  emits: ["cta-click"],
  setup(__props, { emit: __emit }) {
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
    const approachSteps = reactive([
      {
        number: "1",
        title: "DEFINE",
        shortDescription: "We start by getting clear on what you need.",
        description: "We map your business goals, challenges, and desired outcomes so every solution is aligned from day one, no assumptions, no misdirection.",
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>`
      },
      {
        number: "2",
        title: "BUILD",
        shortDescription: "We engineer with purpose and precision.",
        description: "From data platforms and pipelines to BI and AI models, our Databricks-certified team builds reliable, scalable solutions using modern architecture and hands-on engineering.",
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
        </svg>`
      },
      {
        number: "3",
        title: "ELEVATE",
        shortDescription: "Delivery is only the starting point.",
        description: "We help you operationalize, adopt, optimize, and extend your data capabilities, ensuring long-term value and continuous improvement.",
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
        </svg>`
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "our-approach-section bg-white py-20 lg:py-32 relative overflow-hidden w-full" }, _attrs))} data-v-2c290a8a><div class="absolute top-10 right-10 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl animate-pulse" data-v-2c290a8a></div><div class="absolute bottom-10 left-10 w-40 h-40 bg-brand-red/5 rounded-full blur-3xl animate-pulse-delayed" data-v-2c290a8a></div><div class="w-full px-6 sm:px-8 lg:px-12 xl:px-20 2xl:px-24" data-v-2c290a8a><div class="text-center mb-18 lg:mb-24" data-v-2c290a8a><div class="section-header mb-8" data-v-2c290a8a><span class="text-gray-600 text-sm sm:text-base font-medium uppercase tracking-wider" data-v-2c290a8a>${ssrInterpolate(__props.headerTag)}</span></div><h2 class="text-brand-dark font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-tight lg:leading-[64px] mb-4" data-v-2c290a8a> Our Data-First Approach </h2><p class="text-brand-dark text-xl lg:text-[28px] leading-relaxed lg:leading-[42px] max-w-[1200px] mx-auto" data-v-2c290a8a> How We Transform Your Data Vision Into Reality </p></div><div class="relative mb-18 lg:mb-24" data-v-2c290a8a><div class="hidden lg:block" data-v-2c290a8a><div class="flex items-start justify-between relative" data-v-2c290a8a><div class="absolute top-[45px] left-0 w-full h-[2px] z-0 flex items-center justify-between" data-v-2c290a8a><div class="flex-1 flex items-center relative" data-v-2c290a8a><div class="w-full h-[2px] bg-brand-red" data-v-2c290a8a></div><div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 p-1 rounded-full" data-v-2c290a8a><svg width="20" height="14" viewBox="0 0 20 14" fill="none" data-v-2c290a8a><path d="M12 2L18 7L12 12" stroke="#121212" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" data-v-2c290a8a></path></svg></div></div><div class="flex-1 flex items-center relative ml-4" data-v-2c290a8a><div class="w-full h-[2px] bg-brand-red" data-v-2c290a8a></div><div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 p-1 rounded-full" data-v-2c290a8a><svg width="20" height="14" viewBox="0 0 20 14" fill="none" data-v-2c290a8a><path d="M12 2L18 7L12 12" stroke="#121212" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" data-v-2c290a8a></path></svg></div></div></div><!--[-->`);
      ssrRenderList(approachSteps, (step, index) => {
        _push(`<div class="flex-1 relative z-10 max-w-[400px]" data-v-2c290a8a><div class="flex justify-center mb-6" data-v-2c290a8a><div class="step-circle w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-500 group cursor-pointer" data-v-2c290a8a>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent("div"), { class: "w-12 h-12 text-white" }, null), _parent);
        _push(`</div></div><div class="text-center space-y-4" data-v-2c290a8a><h3 class="text-brand-dark text-[20px] font-semibold leading-[26px] tracking-[0.4px]" data-v-2c290a8a>${ssrInterpolate(step.number)}. ${ssrInterpolate(step.title)}</h3><p class="text-brand-dark text-[16px] font-medium leading-[24px] tracking-[0.32px] mb-2" data-v-2c290a8a>${ssrInterpolate(step.shortDescription)}</p><p class="text-brand-dark text-[16px] font-normal leading-[24px] tracking-[0.32px]" data-v-2c290a8a>${ssrInterpolate(step.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="lg:hidden" data-v-2c290a8a><!--[-->`);
      ssrRenderList(approachSteps, (step, index) => {
        _push(`<div class="${ssrRenderClass([index < approachSteps.length - 1 ? "mb-8" : "", "relative"])}" data-v-2c290a8a><div class="flex items-start gap-6" data-v-2c290a8a><div class="flex-shrink-0 relative z-10" data-v-2c290a8a><div class="step-circle w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center shadow-lg" data-v-2c290a8a>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent("div"), { class: "w-8 h-8 text-white" }, null), _parent);
        _push(`</div></div><div class="flex-1 pt-2" data-v-2c290a8a><h3 class="text-brand-dark text-[18px] font-semibold leading-[24px] tracking-[0.36px] mb-2" data-v-2c290a8a>${ssrInterpolate(step.number)}. ${ssrInterpolate(step.title)}</h3><p class="text-brand-dark text-[16px] font-medium leading-[24px] tracking-[0.32px] mb-2" data-v-2c290a8a>${ssrInterpolate(step.shortDescription)}</p><p class="text-brand-dark text-[16px] font-normal leading-[24px] tracking-[0.32px]" data-v-2c290a8a>${ssrInterpolate(step.description)}</p></div></div>`);
        if (index < approachSteps.length - 1) {
          _push(`<div class="flex justify-start ml-[35px] mt-4 mb-4" data-v-2c290a8a><div class="w-[2px] h-8 bg-brand-red rounded-full" data-v-2c290a8a></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><div class="flex justify-center mt-8 sm:mt-12 md:mt-16 lg:mt-18" data-v-2c290a8a><button class="cta-button group inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-brand-dark hover:bg-brand-red border-2 border-brand-dark hover:border-brand-red rounded-full text-white text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl" data-v-2c290a8a>${ssrInterpolate(__props.ctaText)} <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-2c290a8a><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-2c290a8a></path></svg></button></div></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (showCalendlyModal.value) {
          _push2(`<div class="calendly-modal-overlay fixed inset-0 z-[9999] flex items-center justify-center p-4" data-v-2c290a8a><div class="calendly-modal-container bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden relative" data-v-2c290a8a><button class="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200" data-v-2c290a8a><svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-2c290a8a><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-2c290a8a></path></svg></button><div class="bg-gradient-to-r from-brand-dark to-gray-800 px-8 py-6" data-v-2c290a8a><h2 class="text-2xl sm:text-3xl font-bold text-white" data-v-2c290a8a>Book a Discovery Session</h2><p class="text-gray-300 mt-2" data-v-2c290a8a>Let&#39;s discuss how we can help unlock the value of your data</p></div>`);
          if (isLoading.value) {
            _push2(`<div class="calendly-loading-container px-8 py-20" data-v-2c290a8a><div class="text-center mb-6" data-v-2c290a8a><div class="inline-block animate-spin rounded-full h-12 w-12 border-b-4 border-brand-red mb-4" data-v-2c290a8a></div><p class="text-lg font-semibold text-brand-dark" data-v-2c290a8a>Loading Calendar...</p><p class="text-sm text-gray-500 mt-2" data-v-2c290a8a>${ssrInterpolate(loadingProgress.value)}%</p></div><div class="w-full max-w-md mx-auto bg-gray-200 rounded-full h-3 overflow-hidden" data-v-2c290a8a><div class="bg-gradient-to-r from-brand-red to-red-500 h-full rounded-full transition-all duration-300 ease-out" style="${ssrRenderStyle({ width: loadingProgress.value + "%" })}" data-v-2c290a8a></div></div></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<div class="calendly-widget-wrapper" style="${ssrRenderStyle([
            { "height": "700px", "overflow": "hidden" },
            !isLoading.value ? null : { display: "none" }
          ])}" data-v-2c290a8a><div class="calendly-inline-widget" data-url="https://calendly.com/connect-sinki-ai/schedule-a-free-consultation-on-databricks-services" style="${ssrRenderStyle({ "min-width": "320px", "height": "100%" })}" data-v-2c290a8a></div></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AboutUs/OurApproachSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const OurApproachSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2c290a8a"]]);
const _sfc_main$2 = {
  __name: "WhyPartnerWithUs",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Why Partner With Us"
    },
    subtitle: {
      type: String,
      default: "We combine strategy, engineering, and agility to turn your data vision into a measurable business impact."
    },
    features: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "why-partner-section relative overflow-hidden pt-20 lg:pt-32 pb-20 lg:pb-32" }, _attrs))} data-v-3ff394c7><div class="absolute inset-0 z-0 bg-white" data-v-3ff394c7></div><div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 relative z-10" data-v-3ff394c7><div class="text-center mb-18 lg:mb-24" data-v-3ff394c7><h2 class="text-gray-900 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-tight lg:leading-[64px] mb-4 simple-fade-title" data-v-3ff394c7> Why Partner With Us </h2><p class="text-gray-700 text-xl lg:text-[28px] leading-relaxed lg:leading-[42px] max-w-[1000px] mx-auto simple-fade-subtitle" data-v-3ff394c7> We combine strategy, engineering, and agility to turn your data vision into a measurable business impact. </p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 xl:gap-8" data-v-3ff394c7><div class="feature-card group bg-white border border-[#FFE1DE] rounded-[25px] p-8 lg:p-10 hover:bg-gray-50 hover:border-[#FFE1DE] transition-all duration-500 fade-up-1" data-v-3ff394c7><div class="flex items-start gap-6" data-v-3ff394c7><div class="flex-shrink-0" data-v-3ff394c7><div class="checkmark-wrapper w-[32px] h-[32px] bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg" data-v-3ff394c7><svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" data-v-3ff394c7><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" data-v-3ff394c7></path></svg></div></div><div class="flex-1" data-v-3ff394c7><h3 class="text-gray-900 text-[24px] font-semibold leading-[31.2px] mb-3 group-hover:text-brand-red transition-colors duration-300" data-v-3ff394c7> Certified Databricks Expertise </h3><p class="text-gray-600 text-[18px] font-normal leading-[27px]" data-v-3ff394c7> Our certified specialists bring deep technical and business understanding of the Databricks ecosystem. </p></div></div></div><div class="feature-card group bg-white border border-[#FFE1DE] rounded-[25px] p-8 lg:p-10 hover:bg-gray-50 hover:border-[#FFE1DE] transition-all duration-500 fade-up-2" data-v-3ff394c7><div class="flex items-start gap-6" data-v-3ff394c7><div class="flex-shrink-0" data-v-3ff394c7><div class="checkmark-wrapper w-[32px] h-[32px] bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg" data-v-3ff394c7><svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" data-v-3ff394c7><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" data-v-3ff394c7></path></svg></div></div><div class="flex-1" data-v-3ff394c7><h3 class="text-gray-900 text-[24px] font-semibold leading-[31.2px] mb-3 group-hover:text-brand-red transition-colors duration-300" data-v-3ff394c7> End-to-End Implementation </h3><p class="text-gray-600 text-[18px] font-normal leading-[27px]" data-v-3ff394c7> From data foundation to AI integration, we support your journey across every stage, design, build, and maintain. </p></div></div></div><div class="feature-card group bg-white border border-[#FFE1DE] rounded-[25px] p-8 lg:p-10 hover:bg-gray-50 hover:border-[#FFE1DE] transition-all duration-500 fade-up-3" data-v-3ff394c7><div class="flex items-start gap-6" data-v-3ff394c7><div class="flex-shrink-0" data-v-3ff394c7><div class="checkmark-wrapper w-[32px] h-[32px] bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg" data-v-3ff394c7><svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" data-v-3ff394c7><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" data-v-3ff394c7></path></svg></div></div><div class="flex-1" data-v-3ff394c7><h3 class="text-gray-900 text-[24px] font-semibold leading-[31.2px] mb-3 group-hover:text-brand-red transition-colors duration-300" data-v-3ff394c7> Tailored Data Solutions </h3><p class="text-gray-600 text-[18px] font-normal leading-[27px]" data-v-3ff394c7> Every architecture, workflow, and integration is designed around your unique data and business needs. </p></div></div></div><div class="feature-card group bg-white border border-[#FFE1DE] rounded-[25px] p-8 lg:p-10 hover:bg-gray-50 hover:border-[#FFE1DE] transition-all duration-500 fade-up-4" data-v-3ff394c7><div class="flex items-start gap-6" data-v-3ff394c7><div class="flex-shrink-0" data-v-3ff394c7><div class="checkmark-wrapper w-[32px] h-[32px] bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg" data-v-3ff394c7><svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" data-v-3ff394c7><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" data-v-3ff394c7></path></svg></div></div><div class="flex-1" data-v-3ff394c7><h3 class="text-gray-900 text-[24px] font-semibold leading-[31.2px] mb-3 group-hover:text-brand-red transition-colors duration-300" data-v-3ff394c7> Scalable &amp; Secure Delivery </h3><p class="text-gray-600 text-[18px] font-normal leading-[27px]" data-v-3ff394c7> We ensure your Databricks environment is performance-ready, compliant, and built for long-term growth. </p></div></div></div><div class="feature-card group bg-white border border-[#FFE1DE] rounded-[25px] p-8 lg:p-10 hover:bg-gray-50 hover:border-[#FFE1DE] transition-all duration-500 fade-up-5" data-v-3ff394c7><div class="flex items-start gap-6" data-v-3ff394c7><div class="flex-shrink-0" data-v-3ff394c7><div class="checkmark-wrapper w-[32px] h-[32px] bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg" data-v-3ff394c7><svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" data-v-3ff394c7><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" data-v-3ff394c7></path></svg></div></div><div class="flex-1" data-v-3ff394c7><h3 class="text-gray-900 text-[24px] font-semibold leading-[31.2px] mb-3 group-hover:text-brand-red transition-colors duration-300" data-v-3ff394c7> Collaborative Partnership </h3><p class="text-gray-600 text-[18px] font-normal leading-[27px]" data-v-3ff394c7> We work as an extension of your team, transparent, proactive, and committed to measurable outcomes. </p></div></div></div><div class="feature-card group bg-white border border-[#FFE1DE] rounded-[25px] p-8 lg:p-10 hover:bg-gray-50 hover:border-[#FFE1DE] transition-all duration-500 fade-up-6" data-v-3ff394c7><div class="flex items-start gap-6" data-v-3ff394c7><div class="flex-shrink-0" data-v-3ff394c7><div class="checkmark-wrapper w-[32px] h-[32px] bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg" data-v-3ff394c7><svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" data-v-3ff394c7><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" data-v-3ff394c7></path></svg></div></div><div class="flex-1" data-v-3ff394c7><h3 class="text-gray-900 text-[24px] font-semibold leading-[31.2px] mb-3 group-hover:text-brand-red transition-colors duration-300" data-v-3ff394c7> Continuous Improvement </h3><p class="text-gray-600 text-[18px] font-normal leading-[27px]" data-v-3ff394c7> Beyond delivery, we help you evolve, refining pipelines, models, and data strategy for lasting value. </p></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AboutUs/WhyPartnerWithUs.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const WhyPartnerWithUs = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3ff394c7"]]);
const _sfc_main$1 = {
  __name: "LeadershipSection",
  __ssrInlineRender: true,
  props: {
    headerTag: {
      type: String,
      default: "OUR LEADERSHIP"
    },
    title: {
      type: String,
      default: "Visionaries Behind Sinki"
    },
    description: {
      type: String,
      default: "Our leadership brings years of experience in solving real enterprise data challenges and a shared belief that systems work best when they are intentional, structured, and built for long-term clarity."
    },
    teamMembers: {
      type: Array,
      default: () => [
        {
          name: "Gaurav Chauhan",
          position: "Co-Founder & CEO",
          image: "/images/Mr Gaurav Chauhan.png"
        },
        {
          name: "Amit Kumar Pandey",
          position: "Co-Founder & CTO",
          image: "/images/Mr Amit Pandey.png"
        },
        {
          name: "Neeraj Kumar",
          position: "Chief Operating Officer",
          image: "/images/Mr Neeraj Kumar.png"
        }
      ]
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "leadership-section py-20 lg:py-32 relative overflow-hidden w-full",
        style: {
          backgroundImage: "url(/images/aboutussecbanner.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }
      }, _attrs))} data-v-c30e7fe4><div class="absolute top-20 left-20 w-32 h-32 bg-brand-red/10 rounded-full blur-3xl animate-pulse" data-v-c30e7fe4></div><div class="absolute bottom-20 right-20 w-40 h-40 bg-brand-red/10 rounded-full blur-3xl animate-pulse-delayed" data-v-c30e7fe4></div><div class="w-full px-6 sm:px-8 lg:px-12 xl:px-20" data-v-c30e7fe4><div class="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center" data-v-c30e7fe4><div class="w-full lg:w-[35%] space-y-8" data-v-c30e7fe4><div class="animate-fade-in-up" data-v-c30e7fe4><span class="text-white text-sm sm:text-base font-medium uppercase tracking-wider opacity-80" data-v-c30e7fe4>${ssrInterpolate(__props.headerTag)}</span></div><h2 class="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight animate-slide-up-title" data-v-c30e7fe4>${ssrInterpolate(__props.title)}</h2><p class="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed opacity-90 animate-slide-up-subtitle mt-4" data-v-c30e7fe4>${ssrInterpolate(__props.description)}</p></div><div class="w-full lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4" data-v-c30e7fe4><!--[-->`);
      ssrRenderList(__props.teamMembers, (member, index) => {
        _push(`<div class="team-card bg-white rounded-2xl p-4 lg:p-4 flex flex-col items-center shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 animate-team-card" style="${ssrRenderStyle(`animation-delay: ${0.8 + index * 0.2}s`)}" data-v-c30e7fe4><div class="flex-shrink-0 mb-3 w-full" data-v-c30e7fe4><div class="w-full aspect-[3/4] rounded-xl overflow-hidden bg-gray-200" data-v-c30e7fe4><img${ssrRenderAttr("src", member.image)}${ssrRenderAttr("alt", member.name)} class="w-full h-full object-cover object-center" data-v-c30e7fe4></div></div><div class="flex-1 text-left w-full" data-v-c30e7fe4><h3 class="text-brand-dark text-base lg:text-lg font-semibold mb-0.5" data-v-c30e7fe4>${ssrInterpolate(member.name)}</h3><p class="text-gray-600 text-xs lg:text-sm font-medium" data-v-c30e7fe4>${ssrInterpolate(member.position)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AboutUs/LeadershipSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const LeadershipSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c30e7fe4"]]);
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: null
}, {
  __name: "AboutUs",
  __ssrInlineRender: true,
  setup(__props) {
    useCanonical("https://www.sinki.ai/about-us");
    onMounted(() => {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Sinki.ai",
        "url": "https://www.sinki.ai",
        "logo": "https://www.sinki.ai/images/sinki-logo.png",
        "description": "Expert Databricks consulting and data engineering services helping enterprises turn complex data into actionable intelligence.",
        "foundingDate": "2023",
        "serviceArea": {
          "@type": "Place",
          "name": "Global"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Databricks Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Data Engineering & Modernization",
                "description": "Design and build resilient lakehouse architectures & automated pipelines"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Data Management & Governance",
                "description": "Establish strong governance with Unity Catalog-aligned lineage and compliance automation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Data Analytics & Business Intelligence",
                "description": "Transform raw data into interactive dashboards and insights"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI & ML Solutions",
                "description": "Operationalize AI with scalable, production-ready models"
              }
            }
          ]
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-XXX-XXX-XXXX",
          "contactType": "customer service",
          "availableLanguage": "English"
        },
        "sameAs": [
          "https://www.linkedin.com/company/sinki-ai",
          "https://twitter.com/sinki_ai"
        ]
      };
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#FFFBE5]" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Head), { title: "About Sinki.ai | Databricks Experts & Consulting Services" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<meta name="description" content="We are Databricks experts who support your entire Databricks journey, from platform build-out to GenAI. We modernize your data infrastructure, implement GenAI on Databricks, and accelerate your migration to the Databricks Data Intelligence Platform."${_scopeId}><meta name="keywords" content="about sinki.ai, databricks consulting, data engineering experts, helsinki inspired data solutions, certified databricks specialists, enterprise data strategy, lakehouse architecture, data modernization team"${_scopeId}><meta property="og:type" content="website"${_scopeId}><meta property="og:title" content="About Sinki.ai | Databricks Experts &amp; Consulting Services"${_scopeId}><meta property="og:description" content="We are Databricks experts who support your entire Databricks journey, from platform build-out to GenAI. We modernize your data infrastructure, implement GenAI on Databricks, and accelerate your migration to the Databricks Data Intelligence Platform."${_scopeId}><meta property="og:url" content="https://www.sinki.ai/about-us"${_scopeId}><meta property="og:site_name" content="Sinki.ai"${_scopeId}><meta property="og:image" content="https://www.sinki.ai/images/sinki-about-og-image.jpg"${_scopeId}><meta property="og:image:width" content="1200"${_scopeId}><meta property="og:image:height" content="630"${_scopeId}><meta name="twitter:card" content="summary_large_image"${_scopeId}><meta name="twitter:title" content="About Sinki.ai | Databricks Experts &amp; Consulting Services"${_scopeId}><meta name="twitter:description" content="We are Databricks experts who support your entire Databricks journey, from platform build-out to GenAI. We modernize your data infrastructure, implement GenAI on Databricks, and accelerate your migration to the Databricks Data Intelligence Platform."${_scopeId}><meta name="twitter:image" content="https://www.sinki.ai/images/sinki-about-og-image.jpg"${_scopeId}><meta name="robots" content="index, follow"${_scopeId}><meta name="author" content="Sinki.ai"${_scopeId}><link rel="canonical" href="https://www.sinki.ai/about-us"${_scopeId}>`);
          } else {
            return [
              createVNode("meta", {
                name: "description",
                content: "We are Databricks experts who support your entire Databricks journey, from platform build-out to GenAI. We modernize your data infrastructure, implement GenAI on Databricks, and accelerate your migration to the Databricks Data Intelligence Platform."
              }),
              createVNode("meta", {
                name: "keywords",
                content: "about sinki.ai, databricks consulting, data engineering experts, helsinki inspired data solutions, certified databricks specialists, enterprise data strategy, lakehouse architecture, data modernization team"
              }),
              createVNode("meta", {
                property: "og:type",
                content: "website"
              }),
              createVNode("meta", {
                property: "og:title",
                content: "About Sinki.ai | Databricks Experts & Consulting Services"
              }),
              createVNode("meta", {
                property: "og:description",
                content: "We are Databricks experts who support your entire Databricks journey, from platform build-out to GenAI. We modernize your data infrastructure, implement GenAI on Databricks, and accelerate your migration to the Databricks Data Intelligence Platform."
              }),
              createVNode("meta", {
                property: "og:url",
                content: "https://www.sinki.ai/about-us"
              }),
              createVNode("meta", {
                property: "og:site_name",
                content: "Sinki.ai"
              }),
              createVNode("meta", {
                property: "og:image",
                content: "https://www.sinki.ai/images/sinki-about-og-image.jpg"
              }),
              createVNode("meta", {
                property: "og:image:width",
                content: "1200"
              }),
              createVNode("meta", {
                property: "og:image:height",
                content: "630"
              }),
              createVNode("meta", {
                name: "twitter:card",
                content: "summary_large_image"
              }),
              createVNode("meta", {
                name: "twitter:title",
                content: "About Sinki.ai | Databricks Experts & Consulting Services"
              }),
              createVNode("meta", {
                name: "twitter:description",
                content: "We are Databricks experts who support your entire Databricks journey, from platform build-out to GenAI. We modernize your data infrastructure, implement GenAI on Databricks, and accelerate your migration to the Databricks Data Intelligence Platform."
              }),
              createVNode("meta", {
                name: "twitter:image",
                content: "https://www.sinki.ai/images/sinki-about-og-image.jpg"
              }),
              createVNode("meta", {
                name: "robots",
                content: "index, follow"
              }),
              createVNode("meta", {
                name: "author",
                content: "Sinki.ai"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://www.sinki.ai/about-us"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(AboutHero, null, null, _parent));
      _push(ssrRenderComponent(ParnerBadge, null, null, _parent));
      _push(ssrRenderComponent(AboutStorySection, {
        title: "Sinki, a Name with a Purpose",
        descriptions: [
          "The name <em>Sinki</em> is inspired by <strong>Helsinki</strong> — the beautifully designed city of Finland, where every building, lane, and public square is deliberately planned around the needs of its people. Just like Helsinki, where design serves function and purpose, we believe that <strong>data should be organized, purposeful, and designed to serve the people who rely on it.</strong>",
          "Sinki.ai combines Databricks-certified expertise, strategic data thinking, and hands-on engineering to help enterprises turn their data into a foundation that is reliable, compliant, and ready to deliver real business impact, just like a city built for its citizens.",
          "As Helsinki balances functionality with thoughtful design, Sinki.ai delivers structured, reliable, and actionable data solutions that help organizations make smarter decisions."
        ],
        "image-src": "/images/our story image.png",
        "image-alt": "Helsinki city representing our inspiration",
        "image-position": "left",
        "background-color": "bg-white"
      }, null, _parent));
      _push(ssrRenderComponent(WhatWeDoSection, null, null, _parent));
      _push(ssrRenderComponent(OurApproachSection, null, null, _parent));
      _push(ssrRenderComponent(LeadershipSection, null, null, _parent));
      _push(ssrRenderComponent(WhyPartnerWithUs, null, null, _parent));
      _push(ssrRenderComponent(ServiceCTA, {
        title: "Wherever you are in your data journey, we can<br />help you move faster.",
        description: "We'll help you adopt, scale, and succeed with Databricks.",
        "cta-text": "Start A Conversation",
        "cta-link": "/contact",
        "background-image": "/images/cta.webp"
      }, null, _parent));
      _push(ssrRenderComponent(FooterSection, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/AboutUs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
