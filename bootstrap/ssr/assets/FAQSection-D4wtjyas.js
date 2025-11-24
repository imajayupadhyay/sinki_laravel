import { mergeProps, useSSRContext, createVNode, resolveDynamicComponent, reactive, computed, ref, onMounted, nextTick } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderVNode, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$8 = {
  __name: "ServiceHero",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    ctaText: {
      type: String,
      default: "Talk To Our Experts"
    },
    backgroundImage: {
      type: String,
      default: "/images/service-hero-bg.png"
      // Default background image
    },
    backgroundColor: {
      type: String,
      default: "#121212"
    },
    overlayGradient: {
      type: String,
      default: "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)"
    },
    minHeight: {
      type: String,
      default: "90vh"
    },
    titleClasses: {
      type: String,
      default: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
    },
    subtitleClasses: {
      type: String,
      default: "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[26px]"
    },
    showDecorativeElements: {
      type: Boolean,
      default: true
    }
  },
  emits: ["cta-click"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "service-hero-section relative flex items-center justify-center overflow-hidden pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-16 sm:pb-20 md:pb-28 lg:pb-36",
        style: {
          backgroundImage: __props.backgroundImage ? `url(${__props.backgroundImage})` : "none",
          backgroundColor: __props.backgroundColor || "#121212",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: __props.minHeight || "90vh"
        }
      }, _attrs))} data-v-92e18086><div class="container-custom relative z-10 px-4 sm:px-6 lg:px-8 xl:px-[100px]" data-v-92e18086><div class="max-w-[1518px] mx-auto" data-v-92e18086><div class="max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%]" data-v-92e18086><h1 class="${ssrRenderClass(["service-hero-title text-white font-semibold mb-4 sm:mb-6 md:mb-8 animate-fadeInUp leading-[1.1] sm:leading-[1.15] md:leading-[1.1]", __props.titleClasses])}" data-v-92e18086>${ssrInterpolate(__props.title)}</h1><p class="${ssrRenderClass(["service-hero-subtitle text-white/90 leading-relaxed mb-8 sm:mb-10 md:mb-12 animate-fadeInUp animation-delay-200", __props.subtitleClasses])}" data-v-92e18086>${ssrInterpolate(__props.subtitle)}</p><div class="flex justify-start animate-fadeInUp animation-delay-400" data-v-92e18086>`);
      if (__props.ctaText) {
        _push(`<button class="service-cta-button group inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-red hover:bg-white border-2 border-brand-red rounded-full text-white hover:text-brand-white text-base sm:text-lg font-bold tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-2xl" data-v-92e18086>${ssrInterpolate(__props.ctaText)} <div class="w-6 h-6 flex items-center justify-center" data-v-92e18086><svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-92e18086><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-92e18086></path></svg></div></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
      if (__props.showDecorativeElements) {
        _push(`<div class="absolute inset-0 pointer-events-none z-0" data-v-92e18086><div class="absolute top-20 left-10 w-32 h-32 bg-brand-red/10 rounded-full blur-3xl animate-pulse" data-v-92e18086></div><div class="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000" data-v-92e18086></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Services/ServiceHero.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const ServiceHero = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-92e18086"]]);
const _sfc_main$7 = {
  __name: "ImageContentSection",
  __ssrInlineRender: true,
  props: {
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
      default: "Section image"
    },
    imagePosition: {
      type: String,
      default: "left",
      // 'left' or 'right'
      validator: (value) => ["left", "right"].includes(value)
    },
    ctaText: {
      type: String,
      default: "Start Your Transformation"
    },
    backgroundColor: {
      type: String,
      default: "bg-white"
    }
  },
  emits: ["cta-click"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["image-content-section py-16 sm:py-20 lg:py-28", __props.backgroundColor]
      }, _attrs))} data-v-c59fc070><div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px]" data-v-c59fc070><div class="max-w-[1518px] mx-auto" data-v-c59fc070><div class="${ssrRenderClass([__props.imagePosition === "right" ? "lg:flex-row-reverse" : "", "flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center"])}" data-v-c59fc070><div class="${ssrRenderClass([__props.imagePosition === "right" ? "lg:order-1" : "lg:order-2", "content-container w-full lg:w-[65%] flex-grow order-1"])}" data-v-c59fc070><h2 class="section-title text-brand-dark font-semibold mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-tight lg:leading-[64px] break-words" data-v-c59fc070>${ssrInterpolate(__props.title)}</h2>`);
      if (__props.subtitle) {
        _push(`<h3 class="section-subtitle text-gray-700 font-medium mb-6 text-xl sm:text-2xl lg:text-[26px] leading-relaxed" data-v-c59fc070>${ssrInterpolate(__props.subtitle)}</h3>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="section-description space-y-4 sm:space-y-5 mb-8 sm:mb-10" data-v-c59fc070><!--[-->`);
      ssrRenderList(__props.descriptions, (paragraph, index) => {
        _push(`<p class="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed" data-v-c59fc070>${ssrInterpolate(paragraph)}</p>`);
      });
      _push(`<!--]--></div><div class="flex" data-v-c59fc070>`);
      if (__props.ctaText) {
        _push(`<button class="cta-button group inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-dark hover:bg-brand-red border-2 border-brand-dark hover:border-brand-red rounded-full text-white text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl" data-v-c59fc070>${ssrInterpolate(__props.ctaText)} <div class="w-6 h-6 flex items-center justify-center" data-v-c59fc070><svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-c59fc070><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-c59fc070></path></svg></div></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="${ssrRenderClass([__props.imagePosition === "right" ? "lg:order-2" : "lg:order-1", "image-container w-full lg:w-[35%] flex-shrink-0 order-2"])}" data-v-c59fc070><div class="relative rounded-3xl overflow-hidden shadow-xl" data-v-c59fc070><img${ssrRenderAttr("src", __props.imageSrc)}${ssrRenderAttr("alt", __props.imageAlt)} class="w-full h-48 sm:h-56 md:h-64 lg:h-[65vh] object-cover" data-v-c59fc070></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Services/ImageContentSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ImageContentSection = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-c59fc070"]]);
const _sfc_main$6 = {
  __name: "ServicesGrid",
  __ssrInlineRender: true,
  props: {
    sectionLabel: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ""
    },
    services: {
      type: Array,
      required: true,
      default: () => []
    },
    backgroundColor: {
      type: String,
      default: "bg-white"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-grid-section relative overflow-hidden py-20 lg:py-32" }, _attrs))} data-v-cea5142a><div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24 relative z-10" data-v-cea5142a><h2 class="text-brand-dark font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-tight lg:leading-[64px] mb-6 text-center max-w-[1210px] mx-auto animate-slide-up" data-v-cea5142a>${ssrInterpolate(__props.title)}</h2>`);
      if (__props.description) {
        _push(`<p class="text-brand-dark text-base sm:text-lg md:text-xl lg:text-[28px] leading-relaxed lg:leading-[42px] mb-16 text-center max-w-[1210px] mx-auto animate-slide-up-delayed" data-v-cea5142a>${ssrInterpolate(__props.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-v-cea5142a><!--[-->`);
      ssrRenderList(__props.services, (service, index) => {
        _push(`<div class="service-card group bg-white/50 backdrop-blur-sm border border-black/10 rounded-[25px] p-10 hover:bg-white/80 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer" data-v-cea5142a><div class="mb-8 flex justify-center" data-v-cea5142a><div class="icon-wrapper w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg" data-v-cea5142a>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent("div"), { class: "w-12 h-12 text-white" }, null), _parent);
        _push(`</div></div><div class="text-center" data-v-cea5142a><h3 class="text-brand-dark text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300" data-v-cea5142a>${ssrInterpolate(service.title)}</h3><p class="text-brand-dark text-[18px] font-normal leading-[27px] tracking-[0.36px]" data-v-cea5142a>${ssrInterpolate(service.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Services/ServicesGrid.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ServicesGrid = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-cea5142a"]]);
const _sfc_main$5 = {
  __name: "OurApproach",
  __ssrInlineRender: true,
  setup(__props) {
    const approachSteps = reactive([
      {
        number: "01",
        title: "Assess & Align",
        description: "We begin by understanding your current data landscape, key challenges, and business goals to create a clear modernization roadmap.",
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>`
      },
      {
        number: "02",
        title: "Architect & Plan",
        description: "We design a scalable, secure architecture that's tailored to your needs, from pipelines to governance and cost management.",
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>`
      },
      {
        number: "03",
        title: "Build & Migrate",
        description: "Our experts develop and deploy reliable data pipelines, workflows, and integrations through a phased, low-risk implementation approach.",
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
        </svg>`
      },
      {
        number: "04",
        title: "Optimize & Govern",
        description: "We enhance performance, improve cost efficiency, and implement governance frameworks to keep your systems compliant and scalable.",
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>`
      },
      {
        number: "05",
        title: "Operate & Improve",
        description: "Finally, we set up monitoring, alerts, and continuous improvement so your data ecosystem can evolve as your business grows.",
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>`
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "our-approach-section bg-white py-20 lg:py-32 relative overflow-hidden" }, _attrs))} data-v-b22f646c><div class="absolute top-10 right-10 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl animate-pulse" data-v-b22f646c></div><div class="absolute bottom-10 left-10 w-40 h-40 bg-brand-red/5 rounded-full blur-3xl animate-pulse-delayed" data-v-b22f646c></div><div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24" data-v-b22f646c><div class="text-center mb-16 lg:mb-20" data-v-b22f646c><h2 class="text-brand-dark font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-tight lg:leading-[64px] mb-6 animate-slide-up" data-v-b22f646c> Our Approach </h2><p class="text-brand-dark text-xl lg:text-[28px] leading-relaxed lg:leading-[42px] max-w-[1200px] mx-auto animate-slide-up-delayed" data-v-b22f646c> We follow a clear, outcome-driven methodology to help enterprises modernize their data infrastructure, accelerate Databricks implementation, and ensure long-term scalability. </p></div><div class="relative" data-v-b22f646c><div class="hidden lg:block" data-v-b22f646c><div class="flex items-start justify-between relative" data-v-b22f646c><div class="absolute top-[45px] left-0 w-full h-[2px] z-0 flex items-center justify-between" data-v-b22f646c><div class="flex-1 flex items-center relative" data-v-b22f646c><div class="w-full h-[2px] bg-brand-red" data-v-b22f646c></div><div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 p-1 rounded-full" data-v-b22f646c><svg width="20" height="14" viewBox="0 0 20 14" fill="none" class="animate-fade-in" style="${ssrRenderStyle({ "animation-delay": "1s" })}" data-v-b22f646c><path d="M12 2L18 7L12 12" stroke="#121212" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" data-v-b22f646c></path></svg></div></div><div class="flex-1 flex items-center relative ml-4" data-v-b22f646c><div class="w-full h-[2px] bg-brand-red" data-v-b22f646c></div><div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 p-1 rounded-full" data-v-b22f646c><svg width="20" height="14" viewBox="0 0 20 14" fill="none" class="animate-fade-in" style="${ssrRenderStyle({ "animation-delay": "1.2s" })}" data-v-b22f646c><path d="M12 2L18 7L12 12" stroke="#121212" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" data-v-b22f646c></path></svg></div></div><div class="flex-1 flex items-center relative ml-4" data-v-b22f646c><div class="w-full h-[2px] bg-brand-red" data-v-b22f646c></div><div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 p-1 rounded-full" data-v-b22f646c><svg width="20" height="14" viewBox="0 0 20 14" fill="none" class="animate-fade-in" style="${ssrRenderStyle({ "animation-delay": "1.4s" })}" data-v-b22f646c><path d="M12 2L18 7L12 12" stroke="#121212" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" data-v-b22f646c></path></svg></div></div><div class="flex-1 flex items-center relative ml-4" data-v-b22f646c><div class="w-full h-[2px] bg-brand-red" data-v-b22f646c></div><div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 p-1 rounded-full" data-v-b22f646c><svg width="20" height="14" viewBox="0 0 20 14" fill="none" class="animate-fade-in" style="${ssrRenderStyle({ "animation-delay": "1.6s" })}" data-v-b22f646c><path d="M12 2L18 7L12 12" stroke="#121212" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" data-v-b22f646c></path></svg></div></div></div><!--[-->`);
      ssrRenderList(approachSteps, (step, index) => {
        _push(`<div class="flex-1 relative z-10 max-w-[220px]" style="${ssrRenderStyle(`animation-delay: ${0.3 + index * 0.2}s`)}" data-v-b22f646c><div class="flex justify-center mb-6" data-v-b22f646c><div class="step-circle w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-500 group cursor-pointer" data-v-b22f646c>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent("div"), { class: "w-12 h-12 text-white" }, null), _parent);
        _push(`</div></div><div class="text-center space-y-4" data-v-b22f646c><h3 class="text-brand-dark text-[20px] font-semibold leading-[26px] tracking-[0.4px]" data-v-b22f646c>${ssrInterpolate(step.number)}. ${ssrInterpolate(step.title)}</h3><p class="text-brand-dark text-[16px] font-normal leading-[24px] tracking-[0.32px]" data-v-b22f646c>${ssrInterpolate(step.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="lg:hidden space-y-8" data-v-b22f646c><!--[-->`);
      ssrRenderList(approachSteps, (step, index) => {
        _push(`<div class="flex items-start gap-6 animate-slide-up" style="${ssrRenderStyle(`animation-delay: ${0.3 + index * 0.2}s`)}" data-v-b22f646c><div class="flex-shrink-0" data-v-b22f646c><div class="step-circle w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center shadow-lg" data-v-b22f646c>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent("div"), { class: "w-8 h-8 text-white" }, null), _parent);
        _push(`</div></div><div class="flex-1 pt-2" data-v-b22f646c><h3 class="text-brand-dark text-[18px] font-semibold leading-[24px] tracking-[0.36px] mb-2" data-v-b22f646c>${ssrInterpolate(step.number)}. ${ssrInterpolate(step.title)}</h3><p class="text-brand-dark text-[16px] font-normal leading-[24px] tracking-[0.32px]" data-v-b22f646c>${ssrInterpolate(step.description)}</p></div>`);
        if (index < approachSteps.length - 1) {
          _push(`<div class="absolute left-[35px] mt-[70px] w-[2px] h-8 bg-brand-red" data-v-b22f646c></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Services/OurApproach.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const OurApproach = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-b22f646c"]]);
const _sfc_main$4 = {
  __name: "KeyBenefits",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "key-benefits-section relative overflow-hidden py-20 lg:py-32" }, _attrs))} data-v-8e4664a6><div class="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" data-v-8e4664a6></div><div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24 relative z-10" data-v-8e4664a6><div class="text-left mb-16 lg:mb-20" data-v-8e4664a6><h2 class="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-tight lg:leading-[64px] mb-6 animate-slide-up" data-v-8e4664a6> Key Benefits </h2><p class="text-white text-xl lg:text-[28px] leading-relaxed lg:leading-[42px] max-w-[1000px] animate-slide-up-delayed" data-v-8e4664a6> Experience the difference a well-engineered data foundation can make. </p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12" data-v-8e4664a6><div class="benefit-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer" data-v-8e4664a6><div class="flex items-start gap-6" data-v-8e4664a6><div class="flex-shrink-0" data-v-8e4664a6><div class="icon-wrapper w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl" data-v-8e4664a6><svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-8e4664a6><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" data-v-8e4664a6></path></svg></div></div><div class="flex-1" data-v-8e4664a6><h3 class="text-white text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300" data-v-8e4664a6> Faster Insights </h3><p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90" data-v-8e4664a6> Accelerate time from raw data to actionable dashboards and AI models. </p></div></div></div><div class="benefit-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer" data-v-8e4664a6><div class="flex items-start gap-6" data-v-8e4664a6><div class="flex-shrink-0" data-v-8e4664a6><div class="icon-wrapper w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl" data-v-8e4664a6><svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-8e4664a6><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-v-8e4664a6></path></svg></div></div><div class="flex-1" data-v-8e4664a6><h3 class="text-white text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300" data-v-8e4664a6> Robust Governance </h3><p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90" data-v-8e4664a6> Maintain secure, compliant data with lineage tracking, access controls, and Unity Catalog integration. </p></div></div></div><div class="benefit-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer" data-v-8e4664a6><div class="flex items-start gap-6" data-v-8e4664a6><div class="flex-shrink-0" data-v-8e4664a6><div class="icon-wrapper w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl" data-v-8e4664a6><svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-8e4664a6><path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-v-8e4664a6></path></svg></div></div><div class="flex-1" data-v-8e4664a6><h3 class="text-white text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300" data-v-8e4664a6> Operational Resilience </h3><p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90" data-v-8e4664a6> Ensure high availability with monitoring, alerts, and automated recovery for production pipelines. </p></div></div></div><div class="benefit-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer" data-v-8e4664a6><div class="flex items-start gap-6" data-v-8e4664a6><div class="flex-shrink-0" data-v-8e4664a6><div class="icon-wrapper w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl" data-v-8e4664a6><svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-8e4664a6><path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" data-v-8e4664a6></path></svg></div></div><div class="flex-1" data-v-8e4664a6><h3 class="text-white text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300" data-v-8e4664a6> Scalable Data Architecture </h3><p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90" data-v-8e4664a6> Future-proof your data systems to grow with evolving business needs. </p></div></div></div><div class="benefit-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer" data-v-8e4664a6><div class="flex items-start gap-6" data-v-8e4664a6><div class="flex-shrink-0" data-v-8e4664a6><div class="icon-wrapper w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl" data-v-8e4664a6><svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-8e4664a6><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-8e4664a6></path></svg></div></div><div class="flex-1" data-v-8e4664a6><h3 class="text-white text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300" data-v-8e4664a6> Cost Efficiency </h3><p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90" data-v-8e4664a6> Optimize Databricks and cloud usage to reduce operational expenses. </p></div></div></div><div class="benefit-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer" data-v-8e4664a6><div class="flex items-start gap-6" data-v-8e4664a6><div class="flex-shrink-0" data-v-8e4664a6><div class="icon-wrapper w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl" data-v-8e4664a6><svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-8e4664a6><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" data-v-8e4664a6></path></svg></div></div><div class="flex-1" data-v-8e4664a6><h3 class="text-white text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300" data-v-8e4664a6> AI &amp; ML Readiness </h3><p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90" data-v-8e4664a6> Build engineered data foundations that support ML lifecycles and MLOps. </p></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Services/KeyBenefits.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const KeyBenefits = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-8e4664a6"]]);
const _sfc_main$3 = {
  __name: "PlatformsWeWorkWith",
  __ssrInlineRender: true,
  props: {
    sectionId: {
      type: String,
      default: "platforms"
    },
    sectionLabel: {
      type: String,
      default: "Platforms We Work With"
    },
    title: {
      type: String,
      default: "Built on the Platforms You Trust"
    },
    description: {
      type: String,
      default: "We bring Databricks to life on the enterprise platforms you already rely on."
    },
    backgroundColor: {
      type: String,
      default: "bg-white"
    }
  },
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
        id: __props.sectionId,
        class: ["bg-white py-20 lg:py-32 relative overflow-hidden", __props.backgroundColor]
      }, _attrs))} data-v-ba0d9b49><div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24" data-v-ba0d9b49><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center" data-v-ba0d9b49><div class="platforms-content" data-v-ba0d9b49>`);
      if (__props.sectionLabel) {
        _push(`<div class="mb-8 animate-fade-in" data-v-ba0d9b49><span class="text-brand-dark text-lg font-medium uppercase tracking-[1.8px]" data-v-ba0d9b49>${ssrInterpolate(__props.sectionLabel)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h2 class="text-brand-dark font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-tight lg:leading-[64px] mb-6 max-w-[852px] animate-slide-up" data-v-ba0d9b49>${ssrInterpolate(__props.title)}</h2><p class="text-brand-dark text-xl lg:text-[28px] leading-relaxed lg:leading-[42px] mb-12 max-w-[760px] animate-slide-up-delayed" data-v-ba0d9b49>${ssrInterpolate(__props.description)}</p><div class="hidden lg:block absolute -left-10 top-1/4 w-32 h-32 bg-brand-red/10 rounded-full animate-pulse-slow" data-v-ba0d9b49></div><div class="hidden lg:block absolute -left-5 top-1/3 w-24 h-24 bg-brand-dark/5 rounded-full animate-pulse-slow-delayed" data-v-ba0d9b49></div></div><div class="platforms-grid relative animate-slide-in-right" data-v-ba0d9b49><div class="flex flex-col gap-4 sm:gap-6" data-v-ba0d9b49><div class="flex justify-center" data-v-ba0d9b49><div class="platform-logo-card group bg-white border border-gray-200 rounded-[25px] p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:border-brand-red transition-all duration-500 cursor-pointer flex items-center justify-center min-h-[100px] sm:min-h-[120px] lg:min-h-[143px] w-full sm:max-w-[286px]" style="${ssrRenderStyle({ animationDelay: "0s" })}" data-v-ba0d9b49><img${ssrRenderAttr("src", `/images/platforms/${platforms.row1[0].image}`)}${ssrRenderAttr("alt", platforms.row1[0].name)} class="max-w-full h-auto object-contain max-h-[60px] sm:max-h-[70px] lg:max-h-[80px] transition-transform duration-300 group-hover:scale-105" data-v-ba0d9b49></div></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto w-full" data-v-ba0d9b49><!--[-->`);
      ssrRenderList(platforms.row2, (platform, index) => {
        _push(`<div class="platform-logo-card group bg-white border border-gray-200 rounded-[25px] p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:border-brand-red transition-all duration-500 cursor-pointer flex items-center justify-center min-h-[100px] sm:min-h-[120px] lg:min-h-[143px] w-full" style="${ssrRenderStyle({ animationDelay: `${(index + 1) * 0.5}s` })}" data-v-ba0d9b49><img${ssrRenderAttr("src", `/images/platforms/${platform.image}`)}${ssrRenderAttr("alt", platform.name)} class="max-w-full h-auto object-contain max-h-[50px] sm:max-h-[60px] lg:max-h-[70px] transition-transform duration-300 group-hover:scale-105" data-v-ba0d9b49></div>`);
      });
      _push(`<!--]--></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto w-full" data-v-ba0d9b49><!--[-->`);
      ssrRenderList(platforms.row3, (platform, index) => {
        _push(`<div class="platform-logo-card group bg-white border border-gray-200 rounded-[25px] p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:border-brand-red transition-all duration-500 cursor-pointer flex items-center justify-center min-h-[100px] sm:min-h-[120px] lg:min-h-[143px] w-full" style="${ssrRenderStyle({ animationDelay: `${(index + 4) * 0.5}s` })}" data-v-ba0d9b49><img${ssrRenderAttr("src", `/images/platforms/${platform.image}`)}${ssrRenderAttr("alt", platform.name)} class="max-w-full h-auto object-contain max-h-[50px] sm:max-h-[60px] lg:max-h-[70px] transition-transform duration-300 group-hover:scale-105" data-v-ba0d9b49></div>`);
      });
      _push(`<!--]--></div></div><div class="hidden lg:block absolute -right-10 bottom-1/4 w-32 h-32 bg-brand-red/10 rounded-full animate-pulse-slow" data-v-ba0d9b49></div><div class="hidden lg:block absolute -right-5 bottom-1/3 w-24 h-24 bg-brand-dark/5 rounded-full animate-pulse-slow-delayed" data-v-ba0d9b49></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Services/PlatformsWeWorkWith.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const PlatformsWeWorkWith = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ba0d9b49"]]);
const _sfc_main$2 = {
  __name: "WhyChooseUs",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Why Choose us for your Data Engineering needs?"
    },
    description: {
      type: String,
      default: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    reasons: {
      type: Array,
      default: () => [
        {
          title: "Certified Databricks Expertise",
          description: "We bring deep, hands-on experience across the Databricks ecosystem, ensuring faster, more efficient deployments.",
          icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>`
        },
        {
          title: "End-to-End Support",
          description: "From design to deployment, we handle every stage of your data modernization journey.",
          icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>`
        },
        {
          title: "Tailored Solutions",
          description: "Every project is customized to fit your organization's data landscape and business goals.",
          icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                </svg>`
        },
        {
          title: "Business-Focused Approach",
          description: "We align data initiatives with measurable business outcomes, not just technical changes.",
          icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>`
        },
        {
          title: "Scalable & Secure Delivery",
          description: "Solutions are designed for compliance, growth, and long-term sustainability.",
          icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>`
        }
      ]
    }
  },
  setup(__props) {
    const props = __props;
    const firstRowReasons = computed(() => props.reasons.slice(0, 3));
    const secondRowReasons = computed(() => props.reasons.slice(3, 5));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "why-choose-us-section py-20 lg:py-32 relative overflow-hidden" }, _attrs))} data-v-f216f1bd><div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24 relative z-10" data-v-f216f1bd><div class="text-center mb-16 lg:mb-20" data-v-f216f1bd><h2 class="text-brand-dark font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-tight lg:leading-[64px] mb-6 animate-slide-up" data-v-f216f1bd>${ssrInterpolate(__props.title)}</h2>`);
      if (__props.description) {
        _push(`<p class="text-brand-dark text-xl lg:text-[28px] leading-relaxed lg:leading-[42px] max-w-[1200px] mx-auto animate-slide-up-delayed" data-v-f216f1bd>${ssrInterpolate(__props.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-8" data-v-f216f1bd><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-v-f216f1bd><!--[-->`);
      ssrRenderList(firstRowReasons.value, (reason, index) => {
        _push(`<div class="reason-card group bg-white border border-gray-200 rounded-[25px] p-10 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer" data-v-f216f1bd><div class="mb-8 flex justify-center" data-v-f216f1bd><div class="icon-wrapper w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg" data-v-f216f1bd>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent("div"), { class: "w-12 h-12 text-white" }, null), _parent);
        _push(`</div></div><div class="text-center" data-v-f216f1bd><h3 class="text-brand-dark text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300" data-v-f216f1bd>${ssrInterpolate(reason.title)}</h3><p class="text-brand-dark text-[18px] font-normal leading-[27px] tracking-[0.36px]" data-v-f216f1bd>${ssrInterpolate(reason.description)}</p></div></div>`);
      });
      _push(`<!--]--></div><div class="flex justify-center" data-v-f216f1bd><div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-2/3 lg:w-2/3" data-v-f216f1bd><!--[-->`);
      ssrRenderList(secondRowReasons.value, (reason, index) => {
        _push(`<div class="reason-card group bg-white border border-gray-200 rounded-[25px] p-10 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer" data-v-f216f1bd><div class="mb-8 flex justify-center" data-v-f216f1bd><div class="icon-wrapper w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg" data-v-f216f1bd>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent("div"), { class: "w-12 h-12 text-white" }, null), _parent);
        _push(`</div></div><div class="text-center" data-v-f216f1bd><h3 class="text-brand-dark text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300" data-v-f216f1bd>${ssrInterpolate(reason.title)}</h3><p class="text-brand-dark text-[18px] font-normal leading-[27px] tracking-[0.36px]" data-v-f216f1bd>${ssrInterpolate(reason.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Services/WhyChooseUs.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const WhyChooseUs = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f216f1bd"]]);
const _sfc_main$1 = {
  __name: "InsightsResourcesSection",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Latest Insights on Databricks, Data & AI"
    },
    description: {
      type: String,
      default: "Stay updated with the latest trends and insights in data engineering and modernization:"
    },
    blogs: {
      type: Array,
      default: () => []
    },
    maxBlogs: {
      type: Number,
      default: 3
    }
  },
  setup(__props) {
    const props = __props;
    const displayBlogs = computed(() => {
      if (props.blogs.length === 0) {
        return [
          {
            title: "Generative AI vs Predictive AI: The Ultimate Comparison Guide",
            badge: "BLOG",
            image: "/assets/images/blog1.png",
            slug: null
          },
          {
            title: "Generative AI vs Predictive AI: The Ultimate Comparison Guide",
            badge: "BLOG",
            image: "/assets/images/blog2.png",
            slug: null
          },
          {
            title: "Generative AI vs Predictive AI: The Ultimate Comparison Guide",
            badge: "BLOG",
            image: "/assets/images/blog1.png",
            slug: null
          }
        ].slice(0, props.maxBlogs);
      }
      return props.blogs.slice(0, props.maxBlogs).map((blog) => ({
        id: blog.id,
        title: blog.title,
        badge: blog.category ? blog.category.name : "BLOG",
        image: blog.featured_image,
        slug: blog.slug
      }));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 lg:py-20 xl:py-24 2xl:py-32 bg-white font-instrument relative overflow-hidden" }, _attrs))} data-v-362b8277><div class="max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-24" data-v-362b8277><div class="text-center mb-12 lg:mb-16 xl:mb-20" data-v-362b8277><h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] font-semibold text-[#121212] leading-tight lg:leading-[64px] mb-6 max-w-[1200px] mx-auto" data-v-362b8277>${ssrInterpolate(__props.title)}</h2><p class="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-[#121212] font-normal leading-[1.5] max-w-[899px] mx-auto mt-6 lg:mt-8" data-v-362b8277>${ssrInterpolate(__props.description)}</p></div>`);
      if (displayBlogs.value.length > 0) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 xl:gap-8" data-v-362b8277><!--[-->`);
        ssrRenderList(displayBlogs.value, (blog) => {
          _push(`<a${ssrRenderAttr("href", blog.slug ? `/blog/${blog.slug}` : "#")} class="bg-white border border-[#E0EAE4] rounded-[25px] overflow-visible group w-full h-auto min-h-[560px] lg:min-h-[580px] xl:min-h-[600px] shadow-[0px_4px_4px_rgba(0,0,0,0.05)] relative block hover:shadow-lg transition-shadow duration-300 cursor-pointer" data-v-362b8277><div class="relative overflow-hidden rounded-[20px] mx-5 mt-5" data-v-362b8277><img${ssrRenderAttr("src", blog.image || blog.featured_image || "/images/default-blog.jpg")}${ssrRenderAttr("alt", blog.title)} class="w-full h-[288px] lg:h-[300px] xl:h-[320px] object-cover transition-transform duration-300 group-hover:scale-105 rounded-[20px]" data-v-362b8277><div class="absolute top-[-30px] right-[-30px] w-[30px] h-[30px] bg-transparent overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-v-362b8277><svg class="w-full h-full" viewBox="0 0 30 30" fill="none" data-v-362b8277><path d="M7.48 7.5L22.51 7.5L22.51 22.53" stroke="#121212" stroke-width="2" data-v-362b8277></path><path d="M22.51 7.5L7.48 22.53" stroke="#121212" stroke-width="2" data-v-362b8277></path></svg></div></div><div class="px-6 lg:px-7 xl:px-8 pt-8 lg:pt-9 xl:pt-10 pb-6 lg:pb-7 xl:pb-8" data-v-362b8277><div class="mb-6 lg:mb-7 xl:mb-8" data-v-362b8277><span class="inline-flex items-center justify-center bg-[#E0EAE4] text-black text-sm font-semibold px-5 py-1 rounded-[20px] uppercase tracking-[0.28px] leading-[1.2]" data-v-362b8277>${ssrInterpolate(blog.badge || "BLOG")}</span></div><h3 class="text-lg lg:text-xl xl:text-2xl font-semibold text-[#121212] mb-4 lg:mb-5 xl:mb-6 leading-[1.3] tracking-[0.4px] min-h-[54px] lg:min-h-[60px] xl:min-h-[66px] line-clamp-2 overflow-hidden" data-v-362b8277>${ssrInterpolate(blog.title)}</h3><div class="mt-auto flex items-center" data-v-362b8277><div class="inline-flex items-center text-[#FF3621] font-semibold text-lg lg:text-xl xl:text-2xl leading-[1.2] tracking-[0.42px]" data-v-362b8277> Read more <div class="w-8 h-8 lg:w-10 lg:h-10 ml-3 lg:ml-4 flex items-center justify-center overflow-hidden" data-v-362b8277><svg class="absolute transition-transform duration-200 group-hover:translate-x-1" width="34" height="2" viewBox="0 0 34 2" fill="none" data-v-362b8277><rect width="33.08" height="1.28" fill="#FF3621" data-v-362b8277></rect></svg><svg class="relative ml-[23px] transition-transform duration-200 group-hover:translate-x-1" width="11" height="12" viewBox="0 0 11 12" fill="none" data-v-362b8277><path d="M10.69 5.945L0 0V11.89L10.69 5.945Z" fill="#FF3621" data-v-362b8277></path></svg></div></div></div></div></a>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center py-16" data-v-362b8277><svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-362b8277><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" data-v-362b8277></path></svg><h3 class="text-lg font-medium text-gray-900 mb-2" data-v-362b8277>No blog posts yet</h3><p class="text-gray-500" data-v-362b8277>Check back soon for our latest articles and insights.</p></div>`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Services/InsightsResourcesSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const InsightsResourcesSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-362b8277"]]);
const _sfc_main = {
  __name: "FAQSection",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Frequently Asked Questions"
    },
    faqs: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const openIndex = ref(0);
    const contentRefs = ref([]);
    const contentHeights = ref([]);
    const calculateHeights = async () => {
      await nextTick();
      contentRefs.value.forEach((ref2, index) => {
        if (ref2) {
          contentHeights.value[index] = ref2.scrollHeight;
        }
      });
    };
    onMounted(() => {
      calculateHeights();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 lg:py-20 xl:py-24 2xl:py-32 bg-white font-instrument" }, _attrs))} data-v-34172020><div class="max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-24" data-v-34172020><div class="text-center mb-12 lg:mb-16 xl:mb-20" data-v-34172020><h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] font-semibold text-[#121212] leading-tight lg:leading-[64px] max-w-[1200px] mx-auto" data-v-34172020>${ssrInterpolate(__props.title)}</h2></div><div class="max-w-[1200px] mx-auto" data-v-34172020><!--[-->`);
      ssrRenderList(__props.faqs, (faq, index) => {
        _push(`<div class="border-b border-gray-200 last:border-b-0" data-v-34172020><button class="w-full py-6 lg:py-8 xl:py-10 flex items-center justify-between text-left group focus:outline-none"${ssrRenderAttr("aria-expanded", openIndex.value === index)}${ssrRenderAttr("aria-controls", `faq-content-${index}`)} data-v-34172020><div class="flex items-start" data-v-34172020><span class="text-lg lg:text-xl xl:text-2xl font-semibold text-[#121212] mr-4 flex-shrink-0" data-v-34172020> Q${ssrInterpolate(index + 1)}. </span><h3 class="text-lg lg:text-xl xl:text-2xl font-semibold text-[#121212] leading-[1.3] pr-4" data-v-34172020>${ssrInterpolate(faq.question)}</h3></div><div class="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center" data-v-34172020><svg class="w-6 h-6 lg:w-8 lg:h-8 transition-all duration-300 ease-in-out" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-34172020>`);
        if (openIndex.value !== index) {
          _push(`<path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" data-v-34172020></path>`);
        } else {
          _push(`<path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" data-v-34172020></path>`);
        }
        _push(`</svg></div></button><div${ssrRenderAttr("id", `faq-content-${index}`)} class="overflow-hidden transition-all duration-500 ease-in-out" style="${ssrRenderStyle({
          maxHeight: openIndex.value === index ? contentHeights.value[index] + "px" : "0px",
          opacity: openIndex.value === index ? "1" : "0"
        })}" data-v-34172020><div class="pb-6 lg:pb-8 xl:pb-10 pl-8 lg:pl-12" data-v-34172020><p class="text-base lg:text-lg xl:text-xl text-[#121212] leading-[1.6]" data-v-34172020>${ssrInterpolate(faq.answer)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Services/FAQSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FAQSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-34172020"]]);
export {
  FAQSection as F,
  ImageContentSection as I,
  KeyBenefits as K,
  OurApproach as O,
  PlatformsWeWorkWith as P,
  ServiceHero as S,
  WhyChooseUs as W,
  ServicesGrid as a,
  InsightsResourcesSection as b
};
