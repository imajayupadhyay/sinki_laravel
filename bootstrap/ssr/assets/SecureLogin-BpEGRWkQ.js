import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderDynamicModel, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm, Head } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "SecureLogin",
  __ssrInlineRender: true,
  setup(__props) {
    const showPassword = ref(false);
    const form = useForm({
      email: "",
      password: ""
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
      }, _attrs))} data-v-8bbb14e1>`);
      _push(ssrRenderComponent(unref(Head), { title: "Secure Login - Sinki.ai" }, null, _parent));
      _push(`<div class="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent z-0" data-v-8bbb14e1></div><div class="relative z-10 w-full max-w-md mx-4" data-v-8bbb14e1><div class="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 md:p-10" data-v-8bbb14e1><div class="text-center mb-8" data-v-8bbb14e1><div class="mb-6" data-v-8bbb14e1><img src="/images/sinkilogo1.png" alt="Sinki.ai Logo" class="h-16 md:h-20 w-auto mx-auto object-contain" data-v-8bbb14e1></div><h1 class="text-2xl md:text-3xl font-bold text-white mb-2" data-v-8bbb14e1> Secure Access </h1><p class="text-white/80 text-sm md:text-base" data-v-8bbb14e1> Admin Portal - Authorized Personnel Only </p></div><form class="space-y-6" data-v-8bbb14e1><div class="space-y-2" data-v-8bbb14e1><label for="email" class="block text-sm font-semibold text-white/90" data-v-8bbb14e1> Email Address </label><div class="relative" data-v-8bbb14e1><input id="email"${ssrRenderAttr("value", unref(form).email)} type="email" class="${ssrRenderClass([{ "border-red-500 ring-2 ring-red-500": unref(form).errors.email }, "w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-300"])}" placeholder="Enter your email" required data-v-8bbb14e1><div class="absolute inset-y-0 right-0 flex items-center pr-3" data-v-8bbb14e1><svg class="h-5 w-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-8bbb14e1><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" data-v-8bbb14e1></path></svg></div></div>`);
      if (unref(form).errors.email) {
        _push(`<div class="text-red-400 text-sm mt-1 font-medium" data-v-8bbb14e1>${ssrInterpolate(unref(form).errors.email)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-2" data-v-8bbb14e1><label for="password" class="block text-sm font-semibold text-white/90" data-v-8bbb14e1> Password </label><div class="relative" data-v-8bbb14e1><input id="password"${ssrRenderDynamicModel(showPassword.value ? "text" : "password", unref(form).password, null)}${ssrRenderAttr("type", showPassword.value ? "text" : "password")} class="${ssrRenderClass([{ "border-red-500 ring-2 ring-red-500": unref(form).errors.password }, "w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-300"])}" placeholder="Enter your password" required data-v-8bbb14e1><button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3 text-white/60 hover:text-white transition-colors duration-200" data-v-8bbb14e1>`);
      if (showPassword.value) {
        _push(`<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-8bbb14e1><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L8.464 8.464M9.878 9.878H9m6.242 6.242l2.828 2.828M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-8bbb14e1></path></svg>`);
      } else {
        _push(`<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-8bbb14e1><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-8bbb14e1></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.543 7-1.275 4.057-5.065 7-9.543 7-4.477 0-8.268-2.943-9.542-7z" data-v-8bbb14e1></path></svg>`);
      }
      _push(`</button></div>`);
      if (unref(form).errors.password) {
        _push(`<div class="text-red-400 text-sm mt-1 font-medium" data-v-8bbb14e1>${ssrInterpolate(unref(form).errors.password)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="w-full bg-brand-red hover:bg-red-600 disabled:bg-red-400 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-transparent disabled:cursor-not-allowed transform hover:translate-y-[-2px] active:translate-y-0 shadow-lg hover:shadow-xl" data-v-8bbb14e1>`);
      if (unref(form).processing) {
        _push(`<span class="flex items-center justify-center" data-v-8bbb14e1><svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-8bbb14e1><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-8bbb14e1></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-8bbb14e1></path></svg> Authenticating... </span>`);
      } else {
        _push(`<span class="flex items-center justify-center" data-v-8bbb14e1><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-8bbb14e1><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" data-v-8bbb14e1></path></svg> Access Portal </span>`);
      }
      _push(`</button><div class="text-center mt-4" data-v-8bbb14e1><button type="button" class="text-white/70 hover:text-white text-sm transition-colors duration-300 underline underline-offset-2" data-v-8bbb14e1> Forgot your password? </button></div></form><div class="mt-6 text-center" data-v-8bbb14e1><p class="text-white/60 text-xs" data-v-8bbb14e1> 🔒 This portal is protected by advanced security measures </p></div></div></div><div class="absolute inset-0 pointer-events-none z-0" data-v-8bbb14e1><div class="floating-particle particle-1" data-v-8bbb14e1></div><div class="floating-particle particle-2" data-v-8bbb14e1></div><div class="floating-particle particle-3" data-v-8bbb14e1></div><div class="floating-particle particle-4" data-v-8bbb14e1></div><div class="floating-particle particle-5" data-v-8bbb14e1></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/SecureLogin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SecureLogin = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8bbb14e1"]]);
export {
  SecureLogin as default
};
