import { ref, onMounted, onUnmounted, mergeProps, useSSRContext, computed, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, Fragment } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderTeleport, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { H as Header } from "./Header-DHb6HnRe.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { F as FooterSection } from "./FooterSection-Cp7kRGnW.js";
import { u as useCanonical } from "./useCanonical-DTCbHnHl.js";
const _sfc_main$a = {
  __name: "Hero",
  __ssrInlineRender: true,
  props: {
    heroSection: {
      type: Object,
      default: () => null
    }
  },
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
          backgroundImage: __props.heroSection?.background_image ? `url(/storage/${__props.heroSection.background_image})` : "url(/images/heroobannersinki.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh"
        }
      }, _attrs))} data-v-8429aa5a><div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 z-0" data-v-8429aa5a></div><div class="container-custom relative z-10 px-3 sm:px-6 py-6 sm:py-20" data-v-8429aa5a><div class="max-w-[1518px] mx-auto text-center" data-v-8429aa5a><h1 class="hero-title text-brand-dark font-semibold leading-tight sm:leading-relaxed lg:leading-[100px] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[100px] mb-4 sm:mb-8 animate-fadeInUp" data-v-8429aa5a>${ssrInterpolate(__props.heroSection?.heading || "We Help You Unlock The Value Of Your Data")}</h1><p class="hero-subtitle text-brand-light text-lg sm:text-xl md:text-2xl lg:text-[26px] leading-snug sm:leading-relaxed lg:leading-[39px] max-w-[95%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[1200px] mx-auto mb-8 sm:mb-12 animate-fadeInUp animation-delay-200" data-v-8429aa5a>${ssrInterpolate(__props.heroSection?.paragraph || "We turn raw data into intelligence with Databricks. From data foundations to AI adoption, we deliver secure, scalable systems.")}</p><div class="hero-cta flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 animate-fadeInUp animation-delay-400" data-v-8429aa5a><button class="btn-primary group inline-flex items-center justify-center gap-3 px-6 sm:px-9 py-3 sm:py-4 bg-brand-red border-2 border-brand-red rounded-full text-white text-base sm:text-lg font-bold capitalize transition-all duration-300 w-full sm:w-auto" data-v-8429aa5a>${ssrInterpolate(__props.heroSection?.cta_text || "Schedule Free Consultation")} <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center" data-v-8429aa5a><svg class="w-6 h-6 sm:w-8 sm:h-8 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-8429aa5a><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-8429aa5a></path></svg></div></button></div></div></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (showCalendlyModal.value) {
          _push2(`<div class="calendly-modal-overlay fixed inset-0 z-[9999] flex items-center justify-center p-4" data-v-8429aa5a><div class="calendly-modal-container bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden relative" data-v-8429aa5a><button class="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200" data-v-8429aa5a><svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-8429aa5a><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-8429aa5a></path></svg></button><div class="bg-gradient-to-r from-brand-dark to-gray-800 px-8 py-6" data-v-8429aa5a><h2 class="text-2xl sm:text-3xl font-bold text-white" data-v-8429aa5a>Book a Strategy Session</h2><p class="text-gray-300 mt-2" data-v-8429aa5a>Let&#39;s discuss how we can help unlock the value of your data</p></div>`);
          if (isLoading.value) {
            _push2(`<div class="calendly-loading-container px-8 py-20" data-v-8429aa5a><div class="text-center mb-6" data-v-8429aa5a><div class="inline-block animate-spin rounded-full h-12 w-12 border-b-4 border-brand-red mb-4" data-v-8429aa5a></div><p class="text-lg font-semibold text-brand-dark" data-v-8429aa5a>Loading Calendar...</p><p class="text-sm text-gray-500 mt-2" data-v-8429aa5a>${ssrInterpolate(loadingProgress.value)}%</p></div><div class="w-full max-w-md mx-auto bg-gray-200 rounded-full h-3 overflow-hidden" data-v-8429aa5a><div class="bg-gradient-to-r from-brand-red to-red-500 h-full rounded-full transition-all duration-300 ease-out" style="${ssrRenderStyle({ width: loadingProgress.value + "%" })}" data-v-8429aa5a></div></div></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<div class="calendly-widget-wrapper" style="${ssrRenderStyle([
            { "height": "700px", "overflow": "hidden" },
            !isLoading.value ? null : { display: "none" }
          ])}" data-v-8429aa5a><div class="calendly-inline-widget" data-url="https://calendly.com/connect-sinki-ai/schedule-a-free-consultation-on-databricks-services" style="${ssrRenderStyle({ "min-width": "320px", "height": "100%" })}" data-v-8429aa5a></div></div></div></div>`);
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
const Hero = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-8429aa5a"]]);
const _sfc_main$9 = {
  __name: "PartnerBadge",
  __ssrInlineRender: true,
  props: {
    partnerBadge: {
      type: Object,
      default: () => null
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "partner-badge-section bg-brand-dark border-b border-white/15" }, _attrs))} data-v-9e650624><div class="container mx-auto px-3 sm:px-6" data-v-9e650624><div class="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 h-auto sm:h-[50px] py-3 sm:py-0" data-v-9e650624><span class="text-white text-base sm:text-xl font-medium tracking-wide text-center" data-v-9e650624>${ssrInterpolate(__props.partnerBadge?.text || "An Official Databricks Partner")}</span><div class="databricks-logo-wrapper w-full sm:w-auto flex justify-center" data-v-9e650624><img${ssrRenderAttr("src", __props.partnerBadge?.logo_image ? `/storage/${__props.partnerBadge.logo_image}` : "/images/databrickslight.png")}${ssrRenderAttr("alt", __props.partnerBadge?.logo_alt || "Partner Logo")} class="h-5 sm:h-6 partner-logo w-auto max-w-full" data-v-9e650624></div></div></div></section>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/PartnerBadge.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const PartnerBadge = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-9e650624"]]);
const _sfc_main$8 = {
  __name: "WhatWeDo",
  __ssrInlineRender: true,
  props: {
    whatWeDoSection: {
      type: Object,
      default: () => null
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "what-we-do-section bg-white py-20 lg:py-32 relative overflow-hidden" }, _attrs))} data-v-ce39ba52><div class="absolute top-10 right-10 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl animate-pulse" data-v-ce39ba52></div><div class="absolute bottom-10 left-10 w-40 h-40 bg-brand-red/5 rounded-full blur-3xl animate-pulse-delayed" data-v-ce39ba52></div><div class="container-custom max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24" data-v-ce39ba52><div class="mb-6 sm:mb-8 animate-fade-in ml-0 sm:ml-3" data-v-ce39ba52><span class="text-brand-dark text-base sm:text-lg font-medium uppercase tracking-[1.8px]" data-v-ce39ba52>${ssrInterpolate(__props.whatWeDoSection?.label || "What We Do")}</span></div><h2 class="text-brand-dark font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[78px] leading-tight sm:leading-tight lg:leading-tight xl:leading-[85.8px] mb-4 sm:mb-6 max-w-full lg:max-w-[1167px] ml-0 sm:ml-3 animate-slide-up" data-v-ce39ba52>${ssrInterpolate(__props.whatWeDoSection?.heading || "We Simplify Your Databricks Journey End-to-End")}</h2><p class="text-brand-dark text-lg sm:text-xl lg:text-2xl xl:text-[30px] leading-relaxed sm:leading-relaxed lg:leading-relaxed xl:leading-[45px] mb-12 sm:mb-16 max-w-full lg:max-w-[1074px] ml-0 sm:ml-3 animate-slide-up-delayed" data-v-ce39ba52>${ssrInterpolate(__props.whatWeDoSection?.description || "Wherever you are in your Databricks journey, planning, migrating, or scaling, we help you move faster and with confidence.")}</p><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-0 sm:px-3" data-v-ce39ba52><!--[-->`);
      ssrRenderList(__props.whatWeDoSection?.active_items || [], (item, index) => {
        _push(`<div class="service-card group bg-white border border-black/10 rounded-[15px] p-6 sm:p-8 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer" style="${ssrRenderStyle({ "animation-delay": `${0.6 + index * 0.2}s` })}" data-v-ce39ba52><div class="flex flex-col xl:flex-row xl:items-start items-center gap-4 sm:gap-6" data-v-ce39ba52><div class="flex-shrink-0 xl:order-1 order-1" data-v-ce39ba52><div class="icon-wrapper w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[80px] lg:h-[80px] xl:w-[90px] xl:h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg" data-v-ce39ba52><div class="flex items-center justify-center" data-v-ce39ba52>${item.icon_svg ?? ""}</div></div></div><div class="card-content flex-1 xl:order-2 order-2 text-center xl:text-left" data-v-ce39ba52><h3 class="text-brand-dark text-lg sm:text-xl lg:text-[22px] xl:text-[24px] font-semibold leading-tight sm:leading-tight lg:leading-[33px] xl:leading-[36px] tracking-[0.48px] mb-2 group-hover:text-brand-red transition-colors duration-300" data-v-ce39ba52>${ssrInterpolate(item.title)}</h3><p class="text-brand-dark text-base sm:text-lg lg:text-[19px] xl:text-[21px] font-normal leading-relaxed sm:leading-relaxed lg:leading-[28.5px] xl:leading-[31.5px] tracking-[0.42px]" data-v-ce39ba52>${ssrInterpolate(item.description)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/WhatWeDo.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const WhatWeDo = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-ce39ba52"]]);
const _sfc_main$7 = {
  __name: "OutcomesYouCanExpect",
  __ssrInlineRender: true,
  props: {
    outcomesSection: {
      type: Object,
      default: () => null
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "outcomes-section relative overflow-hidden py-20 lg:py-32" }, _attrs))} data-v-58390510><div class="absolute inset-0 z-0" data-v-58390510><img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop" alt="Background" class="w-full h-full object-cover" data-v-58390510><div class="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90" data-v-58390510></div></div><div class="container-custom max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 relative z-10" data-v-58390510><div class="mb-6 sm:mb-8 text-center animate-fade-in" data-v-58390510><span class="text-white text-base sm:text-lg font-medium uppercase tracking-[1.8px]" data-v-58390510>${ssrInterpolate(__props.outcomesSection?.label || "Outcomes You Can Expect")}</span></div><h2 class="text-white font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[78px] leading-tight sm:leading-tight lg:leading-[85.8px] mb-4 sm:mb-6 text-center max-w-full lg:max-w-[1275px] mx-auto animate-slide-up" data-v-58390510>${ssrInterpolate(__props.outcomesSection?.heading || "Real Results You'll Achieve With Us")}</h2><p class="text-white text-lg sm:text-xl lg:text-[30px] leading-relaxed sm:leading-relaxed lg:leading-[45px] mb-12 sm:mb-16 text-center max-w-full lg:max-w-[1145px] mx-auto animate-slide-up-delayed" data-v-58390510>${ssrInterpolate(__props.outcomesSection?.description || "Think outcomes, not overhead. Our expertise ensures Databricks delivers exactly what you need.")}</p><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" data-v-58390510><!--[-->`);
      ssrRenderList(__props.outcomesSection?.active_items || [], (item, index) => {
        _push(`<div class="outcome-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-6 sm:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer" style="${ssrRenderStyle({ "animation-delay": `${0.6 + index * 0.1}s` })}" data-v-58390510><div class="mb-6 sm:mb-8 flex justify-center" data-v-58390510><div class="icon-wrapper w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl" data-v-58390510><div class="flex items-center justify-center" data-v-58390510>${item.icon_svg ?? ""}</div></div></div><div class="text-center" data-v-58390510><h3 class="text-white text-xl sm:text-[24px] lg:text-[28px] font-semibold leading-tight sm:leading-[36px] lg:leading-[42px] tracking-[0.48px] lg:tracking-[0.56px] mb-2 sm:mb-3 group-hover:text-brand-red transition-colors duration-300" data-v-58390510>${ssrInterpolate(item.title)}</h3><p class="text-white text-lg sm:text-[21px] lg:text-[24px] font-normal leading-relaxed sm:leading-[31.5px] lg:leading-[36px] tracking-[0.42px] lg:tracking-[0.48px] opacity-90" data-v-58390510>${ssrInterpolate(item.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/OutcomesYouCanExpect.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Outcomes = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-58390510"]]);
const _sfc_main$6 = {
  __name: "OurApproach",
  __ssrInlineRender: true,
  props: {
    ourApproachSection: {
      type: Object,
      default: () => null
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "approach",
        class: "approach-section bg-white py-20 lg:py-32 relative overflow-hidden"
      }, _attrs))} data-v-df5e9fd6><div class="container-custom max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24" data-v-df5e9fd6><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center" data-v-df5e9fd6><div class="approach-content" data-v-df5e9fd6><div class="mb-6 sm:mb-8 animate-fade-in" data-v-df5e9fd6><span class="text-brand-dark text-base sm:text-lg font-medium uppercase tracking-[1.8px]" data-v-df5e9fd6>${ssrInterpolate(__props.ourApproachSection?.label || "Our Approach")}</span></div><h2 class="text-brand-dark font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[78px] leading-tight sm:leading-tight lg:leading-[85.8px] mb-4 sm:mb-6 max-w-full lg:max-w-[925px] animate-slide-up" data-v-df5e9fd6>${ssrInterpolate(__props.ourApproachSection?.heading || "How We Make Databricks Work for You")}</h2><p class="text-brand-dark text-lg sm:text-xl lg:text-[30px] leading-relaxed sm:leading-relaxed lg:leading-[45px] mb-8 sm:mb-12 max-w-full lg:max-w-[747px] animate-slide-up-delayed" data-v-df5e9fd6>${ssrInterpolate(__props.ourApproachSection?.description || "Our proven 3-step approach ensures Databricks adapts to your business needs, not the other way around.")}</p></div><div class="approach-diagram relative animate-slide-in-right p-2" data-v-df5e9fd6><div class="diagram-container relative w-full h-[400px] sm:h-[500px] lg:h-[700px] flex items-center justify-center" data-v-df5e9fd6><img${ssrRenderAttr("src", __props.ourApproachSection?.image_url || "/images/Infographic.png")}${ssrRenderAttr("alt", __props.ourApproachSection?.image_alt || "Our 3-Step Approach")} class="w-full h-full object-contain transition-all duration-300 hover:scale-105" data-v-df5e9fd6></div><div class="absolute -top-10 -right-10 w-32 h-32 bg-brand-red/10 rounded-full blur-3xl animate-pulse-slow" data-v-df5e9fd6></div><div class="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-red/10 rounded-full blur-3xl animate-pulse-slow-delayed" data-v-df5e9fd6></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/OurApproach.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const OurApproach = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-df5e9fd6"]]);
const _sfc_main$5 = {
  __name: "CoreServices",
  __ssrInlineRender: true,
  props: {
    coreServicesSection: {
      type: Object,
      default: () => null
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.coreServicesSection && __props.coreServicesSection.is_active) {
        _push(`<section${ssrRenderAttrs(mergeProps({
          id: "services",
          class: "core-services-section relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-32"
        }, _attrs))} data-v-e03172b5><div class="absolute inset-0 z-0" style="${ssrRenderStyle({ backgroundImage: "url(/images/heroobannersinki.png)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" })}" data-v-e03172b5></div><div class="container-custom max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 relative z-10" data-v-e03172b5><div class="mb-6 sm:mb-8 text-center animate-fade-in" data-v-e03172b5><span class="text-brand-dark text-sm sm:text-base md:text-lg font-medium uppercase tracking-[1.8px]" data-v-e03172b5>${ssrInterpolate(__props.coreServicesSection.label || "Core Services")}</span></div><h2 class="text-brand-dark font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[78px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[85.8px] mb-4 sm:mb-6 text-center max-w-full lg:max-w-[1281px] mx-auto animate-slide-up" data-v-e03172b5>${ssrInterpolate(__props.coreServicesSection.heading || "Databricks Services We Deliver")}</h2><p class="text-brand-dark text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[30px] leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-[45px] mb-8 sm:mb-12 md:mb-16 text-center max-w-full lg:max-w-[1094px] mx-auto animate-slide-up-delayed" data-v-e03172b5>${ssrInterpolate(__props.coreServicesSection.description || "From data engineering and governance to AI and analytics, we make sure your Databricks investment delivers measurable impact.")}</p>`);
        if (__props.coreServicesSection.services && __props.coreServicesSection.services.length) {
          _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12" data-v-e03172b5><!--[-->`);
          ssrRenderList(__props.coreServicesSection.services, (service, index) => {
            _push(`<div class="${ssrRenderClass([
              "service-card group bg-white/50 backdrop-blur-sm border border-black/10 rounded-[25px] p-4 sm:p-6 md:p-8 hover:bg-white/80 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px]",
              `service-card-${index + 1}`
            ])}" data-v-e03172b5><div class="flex items-start justify-between mb-4 sm:mb-6" data-v-e03172b5><div class="icon-wrapper w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg flex-shrink-0" data-v-e03172b5><svg class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-e03172b5><path stroke-linecap="round" stroke-linejoin="round"${ssrRenderAttr("d", service.icon_svg)} data-v-e03172b5></path></svg></div>`);
            if (service.link_url) {
              _push(`<div class="arrow-icon opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" data-v-e03172b5><svg class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-brand-dark" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-e03172b5><path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17" data-v-e03172b5></path></svg></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><h3 class="text-brand-dark text-xl sm:text-2xl md:text-[22px] lg:text-[24px] font-semibold leading-tight sm:leading-tight md:leading-[28px] lg:leading-[30px] mb-4 sm:mb-6 group-hover:text-brand-red transition-colors duration-300" data-v-e03172b5>${ssrInterpolate(service.title)}</h3>`);
            if (service.description) {
              _push(`<p class="text-brand-dark text-sm sm:text-base mb-4 opacity-80 line-clamp-3" data-v-e03172b5>${ssrInterpolate(service.description)}</p>`);
            } else {
              _push(`<!---->`);
            }
            if (service.tags && service.tags.length) {
              _push(`<div class="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3" data-v-e03172b5><!--[-->`);
              ssrRenderList(service.tags, (tag) => {
                _push(`<span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]" data-v-e03172b5>${ssrInterpolate(tag)}</span>`);
              });
              _push(`<!--]--></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/CoreServices.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const CoreServices = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-e03172b5"]]);
const _sfc_main$4 = {
  __name: "PlatformsSection",
  __ssrInlineRender: true,
  props: {
    platformsSection: {
      type: Object,
      default: () => null
    }
  },
  setup(__props) {
    const props = __props;
    const groupedPlatforms = computed(() => {
      if (!props.platformsSection?.active_platforms?.length) {
        return { row1: [], row2: [], row3: [] };
      }
      const platforms = props.platformsSection.active_platforms;
      const grouped = {
        row1: platforms.filter((p) => p.row_number === 1),
        row2: platforms.filter((p) => p.row_number === 2),
        row3: platforms.filter((p) => p.row_number === 3)
      };
      return grouped;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "platforms",
        class: "bg-white py-20 lg:py-32 relative overflow-hidden"
      }, _attrs))} data-v-10446332><div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24" data-v-10446332><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center" data-v-10446332><div class="platforms-content" data-v-10446332><div class="mb-8 animate-fade-in" data-v-10446332><span class="text-brand-dark text-lg font-medium uppercase tracking-[1.8px]" data-v-10446332>${ssrInterpolate(__props.platformsSection?.label || "Platforms We Work With")}</span></div><h2 class="text-brand-dark font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[78px] leading-tight lg:leading-[85.8px] mb-6 max-w-[852px] animate-slide-up" data-v-10446332>${ssrInterpolate(__props.platformsSection?.heading || "Built on the Platforms You Trust")}</h2><p class="text-brand-dark text-xl lg:text-[30px] leading-relaxed lg:leading-[45px] mb-12 max-w-[760px] animate-slide-up-delayed" data-v-10446332>${ssrInterpolate(__props.platformsSection?.description || "We bring Databricks to life on the enterprise platforms you already rely on.")}</p><div class="hidden lg:block absolute -left-10 top-1/4 w-32 h-32 bg-brand-red/10 rounded-full animate-pulse-slow" data-v-10446332></div><div class="hidden lg:block absolute -left-5 top-1/3 w-24 h-24 bg-brand-dark/5 rounded-full animate-pulse-slow-delayed" data-v-10446332></div></div><div class="platforms-grid relative animate-slide-in-right" data-v-10446332><div class="flex flex-col gap-4 sm:gap-6" data-v-10446332>`);
      if (groupedPlatforms.value.row1?.length > 0) {
        _push(`<div class="flex justify-center" data-v-10446332><!--[-->`);
        ssrRenderList(groupedPlatforms.value.row1, (platform) => {
          _push(`<div class="platform-logo-card group bg-white border border-gray-200 rounded-[25px] p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:border-brand-red transition-all duration-500 cursor-pointer flex items-center justify-center min-h-[100px] sm:min-h-[120px] lg:min-h-[143px] w-full sm:max-w-[286px]" style="${ssrRenderStyle({ animationDelay: "0s" })}" data-v-10446332><img${ssrRenderAttr("src", `/images/platforms/${platform.image_path}`)}${ssrRenderAttr("alt", platform.name)} class="max-w-full h-auto object-contain max-h-[60px] sm:max-h-[70px] lg:max-h-[80px] transition-transform duration-300 group-hover:scale-105" data-v-10446332></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (groupedPlatforms.value.row2?.length > 0) {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto w-full" data-v-10446332><!--[-->`);
        ssrRenderList(groupedPlatforms.value.row2, (platform, index) => {
          _push(`<div class="platform-logo-card group bg-white border border-gray-200 rounded-[25px] p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:border-brand-red transition-all duration-500 cursor-pointer flex items-center justify-center min-h-[100px] sm:min-h-[120px] lg:min-h-[143px] w-full" style="${ssrRenderStyle({ animationDelay: `${(index + 1) * 0.5}s` })}" data-v-10446332><img${ssrRenderAttr("src", `/images/platforms/${platform.image_path}`)}${ssrRenderAttr("alt", platform.name)} class="max-w-full h-auto object-contain max-h-[50px] sm:max-h-[60px] lg:max-h-[70px] transition-transform duration-300 group-hover:scale-105" data-v-10446332></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (groupedPlatforms.value.row3?.length > 0) {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto w-full" data-v-10446332><!--[-->`);
        ssrRenderList(groupedPlatforms.value.row3, (platform, index) => {
          _push(`<div class="platform-logo-card group bg-white border border-gray-200 rounded-[25px] p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:border-brand-red transition-all duration-500 cursor-pointer flex items-center justify-center min-h-[100px] sm:min-h-[120px] lg:min-h-[143px] w-full" style="${ssrRenderStyle({ animationDelay: `${(index + 4) * 0.5}s` })}" data-v-10446332><img${ssrRenderAttr("src", `/images/platforms/${platform.image_path}`)}${ssrRenderAttr("alt", platform.name)} class="max-w-full h-auto object-contain max-h-[50px] sm:max-h-[60px] lg:max-h-[70px] transition-transform duration-300 group-hover:scale-105" data-v-10446332></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="hidden lg:block absolute -right-10 bottom-1/4 w-32 h-32 bg-brand-red/10 rounded-full animate-pulse-slow" data-v-10446332></div><div class="hidden lg:block absolute -right-5 bottom-1/3 w-24 h-24 bg-brand-dark/5 rounded-full animate-pulse-slow-delayed" data-v-10446332></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/PlatformsSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const PlatformsSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-10446332"]]);
const _sfc_main$3 = {
  __name: "WhatSetsUsApartSection",
  __ssrInlineRender: true,
  props: {
    whatSetsUsApartSection: {
      type: Object,
      default: () => null
    }
  },
  setup(__props) {
    const props = __props;
    const displayFeatures = computed(() => {
      if (props.whatSetsUsApartSection?.active_items?.length > 0) {
        return props.whatSetsUsApartSection.active_items;
      }
      return [
        {
          title: "We Simplify Databricks",
          description: "Tailored solutions aligned to your business objectives and operating model",
          icon_svg: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        },
        {
          title: "We Accelerate Adoption",
          description: "Rapid prioritization and delivery of high-impact use cases to demonstrate value early.",
          icon_svg: "M13 10V3L4 14h7v7l9-11h-7z"
        },
        {
          title: "We Engineer for Scale",
          description: "Architectures designed for performance, governance, and long-term sustainability.",
          icon_svg: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        },
        {
          title: "We Partner Strategically",
          description: "Transparent, collaborative guidance that keeps projects aligned to business goals.",
          icon_svg: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "what-sets-us-apart-section relative overflow-hidden py-20 lg:py-32" }, _attrs))} data-v-f252901b><div class="absolute inset-0 z-0" data-v-f252901b><img${ssrRenderAttr("src", `/images/${__props.whatSetsUsApartSection?.background_image || "heroobannersinki.png"}`)}${ssrRenderAttr("alt", __props.whatSetsUsApartSection?.background_image_alt || "Background")} class="w-full h-full object-cover" data-v-f252901b><div class="absolute inset-0" data-v-f252901b></div></div><div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24 relative z-10" data-v-f252901b><div class="mb-8 text-center animate-fade-in" data-v-f252901b><span class="text-brand-dark text-lg font-medium uppercase tracking-[1.8px]" data-v-f252901b>${ssrInterpolate(__props.whatSetsUsApartSection?.label || "What Sets Us Apart")}</span></div><h2 class="text-brand-dark font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[78px] leading-tight lg:leading-[85.8px] mb-6 text-center max-w-[1210px] mx-auto animate-slide-up" data-v-f252901b>${ssrInterpolate(__props.whatSetsUsApartSection?.heading || "Your Databricks Partner, Every Step of the Way")}</h2><p class="text-brand-dark text-xl lg:text-[28px] leading-relaxed lg:leading-[42px] mb-16 text-center max-w-[1210px] mx-auto animate-slide-up-delayed" data-v-f252901b>${ssrInterpolate(__props.whatSetsUsApartSection?.description || "We don't just implement Databricks. We simplify it, tailor it, and make it deliver real business outcomes.")}</p><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-v-f252901b><!--[-->`);
      ssrRenderList(displayFeatures.value, (feature, index) => {
        _push(`<div class="feature-card group bg-white/50 backdrop-blur-sm border border-black/10 rounded-[25px] p-10 hover:bg-white/80 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer" data-v-f252901b><div class="mb-8 flex justify-center" data-v-f252901b><div class="icon-wrapper w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg" data-v-f252901b><svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-f252901b><path stroke-linecap="round" stroke-linejoin="round"${ssrRenderAttr("d", feature.icon_svg)} data-v-f252901b></path></svg></div></div><div class="text-center" data-v-f252901b><h3 class="text-brand-dark text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300" data-v-f252901b>${ssrInterpolate(feature.title)}</h3><p class="text-brand-dark text-[18px] font-normal leading-[27px] tracking-[0.36px]" data-v-f252901b>${ssrInterpolate(feature.description)}</p></div></div>`);
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
const WhatSetsUsApartSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-f252901b"]]);
const _sfc_main$2 = {
  __name: "InsightsResourcesSection",
  __ssrInlineRender: true,
  props: {
    blogs: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const displayBlogs = computed(() => {
      if (props.blogs.length === 0) {
        return [
          {
            title: "How To Make Your Data Ready For AI",
            badge: "Blog",
            image: "/assets/images/blog1.png"
          },
          {
            title: "The Anatomy Of A Healthcare Data Strategy",
            badge: "Blog",
            image: "/assets/images/blog2.png"
          }
        ];
      }
      return props.blogs.map((blog) => ({
        title: blog.title,
        badge: blog.category ? blog.category.name : "Blog",
        image: blog.featured_image || "/assets/images/blog1.png",
        slug: blog.slug
      }));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "insights",
        class: "insights-section bg-white py-20 lg:py-32 relative overflow-hidden"
      }, _attrs))} data-v-a8f40e43><div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24" data-v-a8f40e43><div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 xl:gap-10 items-start" data-v-a8f40e43><div class="insights-content" data-v-a8f40e43><div class="mb-8 animate-fade-in" data-v-a8f40e43><span class="text-brand-dark text-lg font-medium uppercase tracking-[1.8px]" data-v-a8f40e43> Insights &amp; Resources </span></div><h2 class="text-brand-dark font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[78px] leading-tight lg:leading-tight xl:leading-[85.8px] mb-6 max-w-[834px] animate-slide-up" data-v-a8f40e43> Latest Insights on Databricks, Data &amp; AI </h2><p class="text-brand-dark text-lg sm:text-xl lg:text-2xl xl:text-[30px] leading-relaxed lg:leading-relaxed xl:leading-[45px] mb-12 max-w-[769px] animate-slide-up-delayed" data-v-a8f40e43> Stay ahead with guides, blogs, and practical insights to help your enterprise scale smarter with Databricks. </p><div class="animate-fade-in-up" data-v-a8f40e43><a href="/blog" class="inline-flex items-center gap-3 px-8 py-3 bg-brand-dark border-2 border-brand-dark rounded-full text-white text-lg font-bold capitalize hover:bg-transparent hover:text-brand-dark transition-all duration-300 btn-hover-effect group" data-v-a8f40e43> Explore Resources <svg class="w-10 h-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-a8f40e43><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-a8f40e43></path></svg></a></div></div><div class="insights-cards flex flex-col sm:flex-row gap-4 lg:gap-6 xl:gap-8 animate-slide-in-right max-w-full overflow-visible" data-v-a8f40e43><!--[-->`);
      ssrRenderList(displayBlogs.value, (blog, index) => {
        _push(`<a${ssrRenderAttr("href", blog.slug ? `/blog/${blog.slug}` : "#")} class="${ssrRenderClass([
          "blog-card group bg-white border border-gray-200 rounded-[25px] overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2 block",
          index === 0 ? "blog-card-1 mt-0 sm:mt-20" : "blog-card-2 mt-0 sm:-mt-10"
        ])}" data-v-a8f40e43><div class="relative overflow-hidden h-[229px]" data-v-a8f40e43><img${ssrRenderAttr("src", blog.image || "/assets/images/blog1.png")}${ssrRenderAttr("alt", blog.title)} class="w-full h-full group-hover:scale-110 transition-transform duration-500" data-v-a8f40e43><div class="blog-image-placeholder hidden items-center justify-center w-full h-full bg-gray-200" data-v-a8f40e43><span class="text-gray-500 font-semibold" data-v-a8f40e43>Blog Image</span></div></div><div class="p-6 flex flex-col h-[180px]" data-v-a8f40e43><div class="flex items-center justify-between mb-4" data-v-a8f40e43><span class="inline-block px-5 py-1 bg-brand-gray rounded-[20px] text-brand-dark text-sm font-semibold tracking-wide uppercase" data-v-a8f40e43>${ssrInterpolate(blog.badge)}</span><div class="w-8 h-8 flex items-center justify-center" data-v-a8f40e43><svg class="w-6 h-6 text-brand-dark group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-a8f40e43><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-a8f40e43></path></svg></div></div><h3 class="text-brand-dark text-[24px] sm:text-[28px] font-semibold leading-[28.8px] sm:leading-[33.6px] tracking-[0.48px] sm:tracking-[0.56px] mb-auto group-hover:text-brand-red transition-colors duration-300 line-clamp-2" data-v-a8f40e43>${ssrInterpolate(blog.title)}</h3></div></a>`);
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
const InsightsResourcesSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a8f40e43"]]);
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
  props: {
    latestBlogs: {
      type: Array,
      default: () => []
    },
    heroSection: {
      type: Object,
      default: () => null
    },
    partnerBadge: {
      type: Object,
      default: () => null
    },
    whatWeDoSection: {
      type: Object,
      default: () => null
    },
    outcomesSection: {
      type: Object,
      default: () => null
    },
    ourApproachSection: {
      type: Object,
      default: () => null
    },
    coreServicesSection: {
      type: Object,
      default: () => null
    },
    platformsSection: {
      type: Object,
      default: () => null
    },
    whatSetsUsApartSection: {
      type: Object,
      default: () => null
    },
    seoSettings: {
      type: Object,
      default: () => null
    }
  },
  setup(__props) {
    useCanonical("https://www.sinki.ai/");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white" }, _attrs))} data-v-985b0645>`);
      _push(ssrRenderComponent(unref(Head), {
        title: __props.seoSettings?.title || "Sinki.ai: Your Databricks Strategy & Innovation Partner"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<meta name="description"${ssrRenderAttr("content", __props.seoSettings?.description || "At Sinki.ai, we help organizations innovate with Databricks by unifying data, accelerating analytics, and delivering AI-powered business outcomes.")} data-v-985b0645${_scopeId}>`);
            if (__props.seoSettings?.keywords) {
              _push2(`<meta name="keywords"${ssrRenderAttr("content", __props.seoSettings?.keywords || "Databricks, Data Analytics, AI Solutions, Business Intelligence")} data-v-985b0645${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<meta property="og:title"${ssrRenderAttr("content", __props.seoSettings?.og_title || __props.seoSettings?.title || "Sinki.ai: Your Databricks Strategy & Innovation Partner")} data-v-985b0645${_scopeId}><meta property="og:description"${ssrRenderAttr("content", __props.seoSettings?.og_description || __props.seoSettings?.description || "At Sinki.ai, we help organizations innovate with Databricks by unifying data, accelerating analytics, and delivering AI-powered business outcomes.")} data-v-985b0645${_scopeId}><meta property="og:url"${ssrRenderAttr("content", __props.seoSettings?.og_url || "https://www.sinki.ai")} data-v-985b0645${_scopeId}><meta property="og:type" content="website" data-v-985b0645${_scopeId}>`);
            if (__props.seoSettings?.og_image_url) {
              _push2(`<meta property="og:image"${ssrRenderAttr("content", __props.seoSettings?.og_image_url || "/images/og-default.jpg")} data-v-985b0645${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<meta name="twitter:card"${ssrRenderAttr("content", __props.seoSettings?.twitter_card || "summary_large_image")} data-v-985b0645${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", __props.seoSettings?.twitter_title || __props.seoSettings?.og_title || __props.seoSettings?.title || "Sinki.ai: Your Databricks Strategy & Innovation Partner")} data-v-985b0645${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", __props.seoSettings?.twitter_description || __props.seoSettings?.og_description || __props.seoSettings?.description || "At Sinki.ai, we help organizations innovate with Databricks by unifying data, accelerating analytics, and delivering AI-powered business outcomes.")} data-v-985b0645${_scopeId}>`);
            if (__props.seoSettings?.twitter_image_url || __props.seoSettings?.og_image_url) {
              _push2(`<meta name="twitter:image"${ssrRenderAttr("content", __props.seoSettings?.twitter_image_url || __props.seoSettings?.og_image_url || "/images/og-default.jpg")} data-v-985b0645${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.seoSettings?.custom_head_tags) {
              _push2(`<!--[--><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("meta", {
                name: "description",
                content: __props.seoSettings?.description || "At Sinki.ai, we help organizations innovate with Databricks by unifying data, accelerating analytics, and delivering AI-powered business outcomes."
              }, null, 8, ["content"]),
              __props.seoSettings?.keywords ? (openBlock(), createBlock("meta", {
                key: 0,
                name: "keywords",
                content: __props.seoSettings?.keywords || "Databricks, Data Analytics, AI Solutions, Business Intelligence"
              }, null, 8, ["content"])) : createCommentVNode("", true),
              createVNode("meta", {
                property: "og:title",
                content: __props.seoSettings?.og_title || __props.seoSettings?.title || "Sinki.ai: Your Databricks Strategy & Innovation Partner"
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:description",
                content: __props.seoSettings?.og_description || __props.seoSettings?.description || "At Sinki.ai, we help organizations innovate with Databricks by unifying data, accelerating analytics, and delivering AI-powered business outcomes."
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:url",
                content: __props.seoSettings?.og_url || "https://www.sinki.ai"
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:type",
                content: "website"
              }),
              __props.seoSettings?.og_image_url ? (openBlock(), createBlock("meta", {
                key: 1,
                property: "og:image",
                content: __props.seoSettings?.og_image_url || "/images/og-default.jpg"
              }, null, 8, ["content"])) : createCommentVNode("", true),
              createVNode("meta", {
                name: "twitter:card",
                content: __props.seoSettings?.twitter_card || "summary_large_image"
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:title",
                content: __props.seoSettings?.twitter_title || __props.seoSettings?.og_title || __props.seoSettings?.title || "Sinki.ai: Your Databricks Strategy & Innovation Partner"
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:description",
                content: __props.seoSettings?.twitter_description || __props.seoSettings?.og_description || __props.seoSettings?.description || "At Sinki.ai, we help organizations innovate with Databricks by unifying data, accelerating analytics, and delivering AI-powered business outcomes."
              }, null, 8, ["content"]),
              __props.seoSettings?.twitter_image_url || __props.seoSettings?.og_image_url ? (openBlock(), createBlock("meta", {
                key: 2,
                name: "twitter:image",
                content: __props.seoSettings?.twitter_image_url || __props.seoSettings?.og_image_url || "/images/og-default.jpg"
              }, null, 8, ["content"])) : createCommentVNode("", true),
              __props.seoSettings?.custom_head_tags ? (openBlock(), createBlock(Fragment, { key: 3 }, [], 64)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(Hero, { "hero-section": __props.heroSection }, null, _parent));
      _push(ssrRenderComponent(PartnerBadge, { "partner-badge": __props.partnerBadge }, null, _parent));
      _push(ssrRenderComponent(WhatWeDo, { "what-we-do-section": __props.whatWeDoSection }, null, _parent));
      _push(ssrRenderComponent(Outcomes, { "outcomes-section": __props.outcomesSection }, null, _parent));
      _push(ssrRenderComponent(OurApproach, { "our-approach-section": __props.ourApproachSection }, null, _parent));
      _push(ssrRenderComponent(CoreServices, { "core-services-section": __props.coreServicesSection }, null, _parent));
      _push(ssrRenderComponent(PlatformsSection, { "platforms-section": __props.platformsSection }, null, _parent));
      _push(ssrRenderComponent(WhatSetsUsApartSection, { "what-sets-us-apart-section": __props.whatSetsUsApartSection }, null, _parent));
      _push(ssrRenderComponent(InsightsResourcesSection, { blogs: __props.latestBlogs }, null, _parent));
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
const Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-985b0645"]]);
export {
  Home as default
};
