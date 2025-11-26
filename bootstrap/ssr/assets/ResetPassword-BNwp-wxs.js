import { ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderDynamicModel, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm, Head } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "ResetPassword",
  __ssrInlineRender: true,
  props: {
    email: String,
    resetToken: String
  },
  setup(__props) {
    const props = __props;
    const showPassword = ref(false);
    const showConfirmPassword = ref(false);
    const form = useForm({
      password: "",
      password_confirmation: "",
      reset_token: props.resetToken
    });
    const passwordLength = computed(() => form.password.length);
    const hasUpperCase = computed(() => /[A-Z]/.test(form.password));
    const hasLowerCase = computed(() => /[a-z]/.test(form.password));
    const hasNumber = computed(() => /\d/.test(form.password));
    const passwordRequirementsMet = computed(() => {
      return passwordLength.value >= 8 && hasUpperCase.value && hasLowerCase.value && hasNumber.value;
    });
    const passwordsMatch = computed(() => {
      return form.password && form.password_confirmation && form.password === form.password_confirmation;
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
      }, _attrs))} data-v-f3999cb4>`);
      _push(ssrRenderComponent(unref(Head), { title: "Reset Password - Sinki.ai" }, null, _parent));
      _push(`<div class="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent z-0" data-v-f3999cb4></div><div class="relative z-10 w-full max-w-md mx-4" data-v-f3999cb4><div class="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 md:p-10" data-v-f3999cb4><div class="text-center mb-8" data-v-f3999cb4><div class="mb-6" data-v-f3999cb4><img src="/images/sinkilogo1.png" alt="Sinki.ai Logo" class="h-16 md:h-20 w-auto mx-auto object-contain" data-v-f3999cb4></div><div class="text-6xl mb-4" data-v-f3999cb4>🔐</div><h1 class="text-2xl md:text-3xl font-bold text-white mb-2" data-v-f3999cb4> Set New Password </h1><p class="text-white/80 text-sm md:text-base mb-4" data-v-f3999cb4> Create a strong new password for your account </p><div class="bg-white/5 rounded-xl p-4 border border-white/10" data-v-f3999cb4><p class="text-white/90 text-sm" data-v-f3999cb4> 👤 Account: <span class="font-mono text-brand-red" data-v-f3999cb4>${ssrInterpolate(__props.email)}</span></p></div></div><form class="space-y-6" data-v-f3999cb4><input type="hidden"${ssrRenderAttr("value", unref(form).reset_token)} data-v-f3999cb4><div class="space-y-2" data-v-f3999cb4><label for="password" class="block text-sm font-semibold text-white/90" data-v-f3999cb4> New Password </label><div class="relative" data-v-f3999cb4><input id="password"${ssrRenderDynamicModel(showPassword.value ? "text" : "password", unref(form).password, null)}${ssrRenderAttr("type", showPassword.value ? "text" : "password")} class="${ssrRenderClass([{ "border-red-500 ring-2 ring-red-500": unref(form).errors.password }, "w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-300"])}" placeholder="Enter new password" required autocomplete="new-password" minlength="8" data-v-f3999cb4><button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3 text-white/60 hover:text-white transition-colors duration-200" data-v-f3999cb4>`);
      if (showPassword.value) {
        _push(`<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-f3999cb4><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L8.464 8.464M9.878 9.878H9m6.242 6.242l2.828 2.828M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-f3999cb4></path></svg>`);
      } else {
        _push(`<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-f3999cb4><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-f3999cb4></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.543 7-1.275 4.057-5.065 7-9.543 7-4.477 0-8.268-2.943-9.542-7z" data-v-f3999cb4></path></svg>`);
      }
      _push(`</button></div>`);
      if (unref(form).errors.password) {
        _push(`<div class="text-red-400 text-sm mt-1 font-medium" data-v-f3999cb4>${ssrInterpolate(unref(form).errors.password)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-2" data-v-f3999cb4><label for="password_confirmation" class="block text-sm font-semibold text-white/90" data-v-f3999cb4> Confirm New Password </label><div class="relative" data-v-f3999cb4><input id="password_confirmation"${ssrRenderDynamicModel(showConfirmPassword.value ? "text" : "password", unref(form).password_confirmation, null)}${ssrRenderAttr("type", showConfirmPassword.value ? "text" : "password")} class="${ssrRenderClass([{
        "border-green-500 ring-2 ring-green-500": unref(form).password && unref(form).password_confirmation && unref(form).password === unref(form).password_confirmation,
        "border-red-500 ring-2 ring-red-500": unref(form).password && unref(form).password_confirmation && unref(form).password !== unref(form).password_confirmation
      }, "w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-300"])}" placeholder="Confirm new password" required autocomplete="new-password" minlength="8" data-v-f3999cb4><button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3 text-white/60 hover:text-white transition-colors duration-200" data-v-f3999cb4>`);
      if (showConfirmPassword.value) {
        _push(`<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-f3999cb4><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L8.464 8.464M9.878 9.878H9m6.242 6.242l2.828 2.828M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-f3999cb4></path></svg>`);
      } else {
        _push(`<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-f3999cb4><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-f3999cb4></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.543 7-1.275 4.057-5.065 7-9.543 7-4.477 0-8.268-2.943-9.542-7z" data-v-f3999cb4></path></svg>`);
      }
      _push(`</button></div>`);
      if (unref(form).password && unref(form).password_confirmation) {
        _push(`<div class="text-sm mt-1 font-medium" data-v-f3999cb4>`);
        if (unref(form).password === unref(form).password_confirmation) {
          _push(`<span class="text-green-400 flex items-center" data-v-f3999cb4><svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-f3999cb4><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-v-f3999cb4></path></svg> Passwords match </span>`);
        } else {
          _push(`<span class="text-red-400 flex items-center" data-v-f3999cb4><svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-f3999cb4><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-f3999cb4></path></svg> Passwords don&#39;t match </span>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-white/5 rounded-xl p-4 border border-white/10" data-v-f3999cb4><p class="text-white/90 text-sm font-medium mb-2" data-v-f3999cb4>Password Requirements:</p><ul class="text-white/70 text-xs space-y-1" data-v-f3999cb4><li class="${ssrRenderClass([{ "text-green-400": passwordLength.value >= 8 }, "flex items-center"])}" data-v-f3999cb4><svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-f3999cb4>`);
      if (passwordLength.value >= 8) {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-v-f3999cb4></path>`);
      } else {
        _push(`<circle cx="12" cy="12" r="10" data-v-f3999cb4></circle>`);
      }
      _push(`</svg> At least 8 characters </li><li class="${ssrRenderClass([{ "text-green-400": hasUpperCase.value }, "flex items-center"])}" data-v-f3999cb4><svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-f3999cb4>`);
      if (hasUpperCase.value) {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-v-f3999cb4></path>`);
      } else {
        _push(`<circle cx="12" cy="12" r="10" data-v-f3999cb4></circle>`);
      }
      _push(`</svg> One uppercase letter </li><li class="${ssrRenderClass([{ "text-green-400": hasLowerCase.value }, "flex items-center"])}" data-v-f3999cb4><svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-f3999cb4>`);
      if (hasLowerCase.value) {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-v-f3999cb4></path>`);
      } else {
        _push(`<circle cx="12" cy="12" r="10" data-v-f3999cb4></circle>`);
      }
      _push(`</svg> One lowercase letter </li><li class="${ssrRenderClass([{ "text-green-400": hasNumber.value }, "flex items-center"])}" data-v-f3999cb4><svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-f3999cb4>`);
      if (hasNumber.value) {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-v-f3999cb4></path>`);
      } else {
        _push(`<circle cx="12" cy="12" r="10" data-v-f3999cb4></circle>`);
      }
      _push(`</svg> One number </li></ul></div><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing || !passwordsMatch.value || !passwordRequirementsMet.value) ? " disabled" : ""} class="w-full bg-brand-red hover:bg-red-600 disabled:bg-red-400 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-transparent disabled:cursor-not-allowed transform hover:translate-y-[-2px] active:translate-y-0 shadow-lg hover:shadow-xl" data-v-f3999cb4>`);
      if (unref(form).processing) {
        _push(`<span class="flex items-center justify-center" data-v-f3999cb4><svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-f3999cb4><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-f3999cb4></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-f3999cb4></path></svg> Resetting Password... </span>`);
      } else {
        _push(`<span class="flex items-center justify-center" data-v-f3999cb4><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-f3999cb4><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-f3999cb4></path></svg> Reset Password </span>`);
      }
      _push(`</button></form><div class="mt-6 text-center" data-v-f3999cb4><p class="text-white/60 text-xs" data-v-f3999cb4> 🔒 After resetting, you&#39;ll be redirected to login with your new password </p></div></div></div><div class="absolute inset-0 pointer-events-none z-0" data-v-f3999cb4><div class="floating-particle particle-1" data-v-f3999cb4></div><div class="floating-particle particle-2" data-v-f3999cb4></div><div class="floating-particle particle-3" data-v-f3999cb4></div><div class="floating-particle particle-4" data-v-f3999cb4></div><div class="floating-particle particle-5" data-v-f3999cb4></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ResetPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f3999cb4"]]);
export {
  ResetPassword as default
};
