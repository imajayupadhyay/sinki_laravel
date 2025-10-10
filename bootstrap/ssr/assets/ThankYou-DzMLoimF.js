import { ref, onMounted, onBeforeUnmount, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { H as HeaderSimple } from "./HeaderSimple-CNt_VpHb.js";
import { F as FooterSection } from "./FooterSection-X25pRJx9.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "ThankYou",
  __ssrInlineRender: true,
  setup(__props) {
    const showLoading = ref(true);
    ref(null);
    let checkCalendlyWidget = null;
    let messageListener = null;
    const hideCalendlyLoading = () => {
      showLoading.value = false;
      console.log("Calendly widget loaded and visible");
    };
    onMounted(() => {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
      messageListener = (e) => {
        if (e.origin === "https://calendly.com") {
          if (e.data.event === "calendly.profile_page_viewed" || e.data.event === "calendly.event_type_viewed") {
            hideCalendlyLoading();
          }
        }
      };
      window.addEventListener("message", messageListener);
      checkCalendlyWidget = setInterval(() => {
        const calendlyFrame = document.querySelector(".calendly-inline-widget iframe");
        if (calendlyFrame) {
          console.log("Calendly widget iframe found");
          clearInterval(checkCalendlyWidget);
          setTimeout(() => {
            hideCalendlyLoading();
          }, 2e3);
        }
      }, 500);
      setTimeout(() => {
        if (showLoading.value) {
          console.log("Auto-hiding loading after timeout");
          hideCalendlyLoading();
        }
        if (checkCalendlyWidget) {
          clearInterval(checkCalendlyWidget);
        }
      }, 8e3);
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get("scroll") === "calendar" || window.location.hash === "#calendar") {
        setTimeout(() => {
          const calendlySection = document.querySelector(".calendly-section");
          if (calendlySection) {
            calendlySection.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }
        }, 1e3);
      }
    });
    onBeforeUnmount(() => {
      if (checkCalendlyWidget) {
        clearInterval(checkCalendlyWidget);
      }
      if (messageListener) {
        window.removeEventListener("message", messageListener);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white" }, _attrs))} data-v-cee2ad82>`);
      _push(ssrRenderComponent(unref(Head), { title: "Thank You - Databricks Consulting Services" }, null, _parent));
      _push(ssrRenderComponent(HeaderSimple, null, null, _parent));
      _push(`<section class="thank-you-section bg-white pt-32" data-v-cee2ad82><div class="container mx-auto px-4 sm:px-6 lg:px-8" data-v-cee2ad82><div class="max-w-6xl mx-auto" data-v-cee2ad82><div class="flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-16" data-v-cee2ad82><div class="flex-shrink-0" data-v-cee2ad82><div class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg" data-v-cee2ad82><svg class="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" data-v-cee2ad82><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" data-v-cee2ad82></path></svg></div></div><div class="flex-1 text-center lg:text-left mt-6" data-v-cee2ad82><h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight" data-v-cee2ad82> Thank You For Your Enquiry. </h1><p class="text-base sm:text-lg text-gray-600 leading-relaxed" data-v-cee2ad82> We&#39;ve received your request. In the meantime, feel free to choose a time that works best for you to connect with our experts. </p></div></div></div></div></section><section class="calendly-section bg-white pb-8" data-v-cee2ad82><div class="container mx-auto px-4 sm:px-6 lg:px-8" data-v-cee2ad82><div class="max-w-6xl mx-auto" data-v-cee2ad82><div class="calendly-thank-you-loading" style="${ssrRenderStyle(showLoading.value ? null : { display: "none" })}" data-v-cee2ad82><div class="loading-content" data-v-cee2ad82><div class="loading-spinner-calendly" data-v-cee2ad82></div><h3 data-v-cee2ad82>Loading Calendar</h3><p data-v-cee2ad82>Preparing your booking experience...</p></div></div><div style="${ssrRenderStyle({ opacity: showLoading.value ? 0 : 1, transition: "opacity 0.5s ease" })}" data-v-cee2ad82><div class="calendly-inline-widget" data-url="https://calendly.com/d/ctcw-g33-d53/book-a-free-consultation-on-databricks-solutions" style="${ssrRenderStyle({ "min-width": "320px", "height": "700px" })}" data-v-cee2ad82></div></div></div></div></section>`);
      _push(ssrRenderComponent(FooterSection, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ThankYou.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ThankYou = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cee2ad82"]]);
export {
  ThankYou as default
};
