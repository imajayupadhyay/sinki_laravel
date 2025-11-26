import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm, Head } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      email: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "min-h-screen relative flex items-center justify-center overflow-hidden",
        style: {
          backgroundImage: "url(/images/heroobannersinki.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }
      }, _attrs))} data-v-caf5e5ac>`);
      _push(ssrRenderComponent(unref(Head), { title: "Forgot Password - Sinki.ai" }, null, _parent));
      _push(`<div class="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent z-0" data-v-caf5e5ac></div><div class="relative z-10 w-full max-w-md mx-4" data-v-caf5e5ac><div class="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 md:p-10" data-v-caf5e5ac><div class="text-center mb-8" data-v-caf5e5ac><div class="mb-6" data-v-caf5e5ac><img src="/images/sinkilogo1.png" alt="Sinki.ai Logo" class="h-16 md:h-20 w-auto mx-auto object-contain" data-v-caf5e5ac></div><div class="text-6xl mb-4" data-v-caf5e5ac>🔑</div><h1 class="text-2xl md:text-3xl font-bold text-white mb-2" data-v-caf5e5ac> Forgot Password </h1><p class="text-white/80 text-sm md:text-base" data-v-caf5e5ac> Enter your email to receive a password reset code </p></div>`);
      if (_ctx.$page.props.flash?.success) {
        _push(`<div class="mb-6" data-v-caf5e5ac><div class="bg-green-500/20 border border-green-500/30 rounded-xl p-4" data-v-caf5e5ac><div class="flex items-center" data-v-caf5e5ac><svg class="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-caf5e5ac><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-v-caf5e5ac></path></svg><p class="text-green-400 text-sm font-medium" data-v-caf5e5ac>${ssrInterpolate(_ctx.$page.props.flash.success)}</p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="space-y-6" data-v-caf5e5ac><div class="space-y-2" data-v-caf5e5ac><label for="email" class="block text-sm font-semibold text-white/90" data-v-caf5e5ac> Admin Email Address </label><div class="relative" data-v-caf5e5ac><input id="email"${ssrRenderAttr("value", unref(form).email)} type="email" class="${ssrRenderClass([{ "border-red-500 ring-2 ring-red-500": unref(form).errors.email }, "w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-300"])}" placeholder="Enter your admin email" required autocomplete="email" data-v-caf5e5ac><div class="absolute inset-y-0 right-0 flex items-center pr-3" data-v-caf5e5ac><svg class="h-5 w-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-caf5e5ac><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" data-v-caf5e5ac></path></svg></div></div>`);
      if (unref(form).errors.email) {
        _push(`<div class="text-red-400 text-sm mt-1 font-medium" data-v-caf5e5ac>${ssrInterpolate(unref(form).errors.email)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-white/5 rounded-xl p-4 border border-white/10" data-v-caf5e5ac><div class="flex items-start" data-v-caf5e5ac><svg class="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-caf5e5ac><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-caf5e5ac></path></svg><div data-v-caf5e5ac><p class="text-white/90 text-sm font-medium" data-v-caf5e5ac>Security Notice</p><p class="text-white/70 text-xs mt-1" data-v-caf5e5ac> A verification code will be sent to your email. This helps ensure account security. </p></div></div></div><div class="space-y-3" data-v-caf5e5ac><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="w-full bg-brand-red hover:bg-red-600 disabled:bg-red-400 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-transparent disabled:cursor-not-allowed transform hover:translate-y-[-2px] active:translate-y-0 shadow-lg hover:shadow-xl" data-v-caf5e5ac>`);
      if (unref(form).processing) {
        _push(`<span class="flex items-center justify-center" data-v-caf5e5ac><svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-caf5e5ac><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-caf5e5ac></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-caf5e5ac></path></svg> Sending... </span>`);
      } else {
        _push(`<span class="flex items-center justify-center" data-v-caf5e5ac><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-caf5e5ac><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-v-caf5e5ac></path></svg> Send Reset Code </span>`);
      }
      _push(`</button><button type="button" class="w-full text-white/60 hover:text-white font-medium py-2 transition-colors duration-300" data-v-caf5e5ac> ← Back to Login </button></div></form><div class="mt-6 text-center" data-v-caf5e5ac><p class="text-white/60 text-xs" data-v-caf5e5ac> 🔒 Reset codes expire after 15 minutes for security </p></div></div></div><div class="absolute inset-0 pointer-events-none z-0" data-v-caf5e5ac><div class="floating-particle particle-1" data-v-caf5e5ac></div><div class="floating-particle particle-2" data-v-caf5e5ac></div><div class="floating-particle particle-3" data-v-caf5e5ac></div><div class="floating-particle particle-4" data-v-caf5e5ac></div><div class="floating-particle particle-5" data-v-caf5e5ac></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ForgotPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-caf5e5ac"]]);
export {
  ForgotPassword as default
};
