import { ssrRenderStyle, ssrRenderClass, ssrRenderTeleport, ssrInterpolate } from "vue/server-renderer";
import { ref, onMounted, onUnmounted, useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "HeaderSimple",
  __ssrInlineRender: true,
  setup(__props) {
    const scrollProgress = ref(0);
    const isSticky = ref(false);
    const mobileMenuOpen = ref(false);
    const showCalendlyModal = ref(false);
    const isLoading = ref(false);
    const loadingProgress = ref(0);
    ref(null);
    const closeMobileMenu = () => {
      mobileMenuOpen.value = false;
      document.body.style.overflow = "";
    };
    const closeCalendlyModal = () => {
      showCalendlyModal.value = false;
      isLoading.value = false;
      loadingProgress.value = 0;
      document.body.style.overflow = "";
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        if (showCalendlyModal.value) {
          closeCalendlyModal();
        } else if (mobileMenuOpen.value) {
          closeMobileMenu();
        }
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
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("keydown", handleEscape);
      handleScroll();
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="scroll-progress-bar fixed top-0 left-0 right-0 h-1 bg-gray-200 z-[100]" data-v-bedacdbc><div class="scroll-progress-fill h-full bg-brand-red transition-all duration-300 ease-out" style="${ssrRenderStyle({ width: scrollProgress.value + "%" })}" data-v-bedacdbc></div></div><div id="navigation" data-v-bedacdbc><nav class="${ssrRenderClass([isSticky.value ? "nav-sticky" : "nav-floating", "navigation bg-white/75 backdrop-blur-sm shadow-custom z-50 rounded-[20px] border border-gray-200"])}" data-v-bedacdbc><div class="container-custom" data-v-bedacdbc><div class="flex items-center justify-between h-[80px] px-6" data-v-bedacdbc><div class="flex items-center" data-v-bedacdbc><a href="/" class="flex items-center space-x-2 logo-container" data-v-bedacdbc><img class="sinkilogoclass w-[250px] h-[60px] object-contain transition-transform duration-300" src="/images/sinkilogo.png" alt="Sinki Logo" data-v-bedacdbc></a></div><div class="hidden lg:flex items-center gap-3" data-v-bedacdbc><button class="btn-primary group inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-red border-2 border-brand-red rounded-full text-white text-sm font-bold capitalize transition-all duration-300" data-v-bedacdbc> Book a Strategy Session <div class="w-5 h-5 flex items-center justify-center" data-v-bedacdbc><svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-bedacdbc><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-bedacdbc></path></svg></div></button><a href="/" class="btn-secondary group inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-transparent border-2 border-brand-red rounded-full text-brand-red text-sm font-bold capitalize transition-all duration-300" data-v-bedacdbc> Back to Home <div class="w-5 h-5 flex items-center justify-center" data-v-bedacdbc><svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-bedacdbc><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" data-v-bedacdbc></path></svg></div></a></div><button class="lg:hidden mobile-menu-btn p-2 z-50 relative" data-v-bedacdbc><svg class="w-8 h-8 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-bedacdbc><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-bedacdbc></path></svg></button></div></div></nav><div class="${ssrRenderClass(["mobile-menu lg:hidden fixed top-0 right-0 h-full w-full sm:w-80 bg-white shadow-2xl transition-transform duration-300 z-50", mobileMenuOpen.value ? "translate-x-0" : "translate-x-full"])}" data-v-bedacdbc><div class="p-6 h-full flex flex-col overflow-y-auto" data-v-bedacdbc><button class="mobile-menu-close mb-8 ml-auto block p-2 rounded-full hover:bg-gray-100 transition-colors duration-200" data-v-bedacdbc><svg class="w-8 h-8 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-bedacdbc><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-bedacdbc></path></svg></button><div class="flex flex-col space-y-4" data-v-bedacdbc><button class="mobile-menu-link group w-full flex items-center px-4 py-4 border border-gray-200 rounded-xl hover:border-brand-red hover:bg-brand-red/5 transition-all duration-300" data-v-bedacdbc><div class="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300" data-v-bedacdbc><svg class="w-6 h-6 text-brand-red group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-bedacdbc><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-v-bedacdbc></path></svg></div><div class="text-left" data-v-bedacdbc><span class="text-brand-dark text-base font-bold uppercase group-hover:text-brand-red transition-colors duration-300" data-v-bedacdbc>Book a Strategy Session</span><p class="text-gray-500 text-xs font-normal" data-v-bedacdbc>Schedule a Call</p></div></button><a href="/" class="mobile-menu-link group flex items-center px-4 py-4 border border-gray-200 rounded-xl hover:border-brand-red hover:bg-brand-red/5 transition-all duration-300" data-v-bedacdbc><div class="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300" data-v-bedacdbc><svg class="w-6 h-6 text-brand-red group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-bedacdbc><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" data-v-bedacdbc></path></svg></div><div data-v-bedacdbc><span class="text-brand-dark text-base font-bold uppercase group-hover:text-brand-red transition-colors duration-300" data-v-bedacdbc>Back to Home</span><p class="text-gray-500 text-xs font-normal" data-v-bedacdbc>Return to Homepage</p></div></a></div></div></div><div class="${ssrRenderClass(["mobile-menu-overlay fixed inset-0 bg-black/50 z-40 transition-opacity duration-300", mobileMenuOpen.value ? "opacity-100 visible" : "opacity-0 invisible"])}" data-v-bedacdbc></div></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (showCalendlyModal.value) {
          _push2(`<div class="calendly-modal-overlay fixed inset-0 z-[9999] flex items-center justify-center p-4" data-v-bedacdbc><div class="calendly-modal-container bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden relative" data-v-bedacdbc><button class="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200" data-v-bedacdbc><svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-bedacdbc><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-bedacdbc></path></svg></button><div class="bg-gradient-to-r from-brand-dark to-gray-800 px-8 py-6" data-v-bedacdbc><h2 class="text-2xl sm:text-3xl font-bold text-white" data-v-bedacdbc>Book a Strategy Session</h2><p class="text-gray-300 mt-2" data-v-bedacdbc>Let&#39;s discuss how we can help unlock the value of your data</p></div>`);
          if (isLoading.value) {
            _push2(`<div class="calendly-loading-container px-8 py-20" data-v-bedacdbc><div class="text-center mb-6" data-v-bedacdbc><div class="inline-block animate-spin rounded-full h-12 w-12 border-b-4 border-brand-red mb-4" data-v-bedacdbc></div><p class="text-lg font-semibold text-brand-dark" data-v-bedacdbc>Loading Calendar...</p><p class="text-sm text-gray-500 mt-2" data-v-bedacdbc>${ssrInterpolate(loadingProgress.value)}%</p></div><div class="w-full max-w-md mx-auto bg-gray-200 rounded-full h-3 overflow-hidden" data-v-bedacdbc><div class="bg-gradient-to-r from-brand-red to-red-500 h-full rounded-full transition-all duration-300 ease-out" style="${ssrRenderStyle({ width: loadingProgress.value + "%" })}" data-v-bedacdbc></div></div></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<div class="calendly-widget-wrapper" style="${ssrRenderStyle([
            { "height": "700px", "overflow": "hidden" },
            !isLoading.value ? null : { display: "none" }
          ])}" data-v-bedacdbc><div class="calendly-inline-widget" data-url="https://calendly.com/connect-jellyfishtechnologies/meeting-with-jellyfish-technologies-clone" style="${ssrRenderStyle({ "min-width": "320px", "height": "100%" })}" data-v-bedacdbc></div></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HeaderSimple.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HeaderSimple = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bedacdbc"]]);
export {
  HeaderSimple as H
};
