import { ref, onMounted, onUnmounted, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm, Head } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "PasswordResetOtp",
  __ssrInlineRender: true,
  props: {
    email: String,
    expiresIn: Number,
    message: String
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      otp_code: ""
    });
    const resendForm = useForm({});
    const timeRemaining = ref(props.expiresIn * 60);
    const canResend = ref(false);
    const resendCooldown = ref(60);
    let timer = null;
    let resendTimer = null;
    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
    };
    const startTimer = () => {
      timer = setInterval(() => {
        if (timeRemaining.value > 0) {
          timeRemaining.value--;
        } else {
          clearInterval(timer);
        }
      }, 1e3);
    };
    const startResendCooldown = () => {
      canResend.value = false;
      resendCooldown.value = 60;
      resendTimer = setInterval(() => {
        if (resendCooldown.value > 0) {
          resendCooldown.value--;
        } else {
          canResend.value = true;
          clearInterval(resendTimer);
        }
      }, 1e3);
    };
    onMounted(() => {
      startTimer();
      startResendCooldown();
    });
    onUnmounted(() => {
      if (timer) clearInterval(timer);
      if (resendTimer) clearInterval(resendTimer);
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
      }, _attrs))} data-v-0d0db251>`);
      _push(ssrRenderComponent(unref(Head), { title: "Password Reset Verification - Sinki.ai" }, null, _parent));
      _push(`<div class="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent z-0" data-v-0d0db251></div><div class="relative z-10 w-full max-w-md mx-4" data-v-0d0db251><div class="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 md:p-10" data-v-0d0db251><div class="text-center mb-8" data-v-0d0db251><div class="mb-6" data-v-0d0db251><img src="/images/sinkilogo1.png" alt="Sinki.ai Logo" class="h-16 md:h-20 w-auto mx-auto object-contain" data-v-0d0db251></div><div class="text-6xl mb-4" data-v-0d0db251>🔐</div><h1 class="text-2xl md:text-3xl font-bold text-white mb-2" data-v-0d0db251> Verify Reset Code </h1><p class="text-white/80 text-sm md:text-base mb-4" data-v-0d0db251> Check your email for the reset verification code </p><div class="bg-white/5 rounded-xl p-4 border border-white/10" data-v-0d0db251><p class="text-white/90 text-sm" data-v-0d0db251> 📧 Sent to: <span class="font-mono text-brand-red" data-v-0d0db251>${ssrInterpolate(__props.email)}</span></p></div></div>`);
      if (_ctx.$page.props.flash?.success || __props.message) {
        _push(`<div class="mb-6" data-v-0d0db251><div class="bg-green-500/20 border border-green-500/30 rounded-xl p-4" data-v-0d0db251><div class="flex items-center" data-v-0d0db251><svg class="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0d0db251><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-v-0d0db251></path></svg><p class="text-green-400 text-sm font-medium" data-v-0d0db251>${ssrInterpolate(_ctx.$page.props.flash?.success || __props.message)}</p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="space-y-6" data-v-0d0db251><div class="space-y-2" data-v-0d0db251><label for="otp_code" class="block text-sm font-semibold text-white/90" data-v-0d0db251> Reset Verification Code </label><div class="relative" data-v-0d0db251><input id="otp_code"${ssrRenderAttr("value", unref(form).otp_code)} type="text" maxlength="6" pattern="[0-9]{6}" inputmode="numeric" autocomplete="one-time-code" class="${ssrRenderClass([{ "border-red-500 ring-2 ring-red-500": unref(form).errors.otp_code }, "w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-300 text-center text-xl tracking-[0.5em] font-mono"])}" placeholder="000000" required data-v-0d0db251><div class="absolute inset-y-0 right-0 flex items-center pr-3" data-v-0d0db251><svg class="h-5 w-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0d0db251><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-0d0db251></path></svg></div></div>`);
      if (unref(form).errors.otp_code) {
        _push(`<div class="text-red-400 text-sm mt-1 font-medium" data-v-0d0db251>${ssrInterpolate(unref(form).errors.otp_code)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="text-center" data-v-0d0db251><div class="bg-white/5 rounded-xl p-3 border border-white/10" data-v-0d0db251><p class="text-white/80 text-sm" data-v-0d0db251>`);
      if (timeRemaining.value > 0) {
        _push(`<span data-v-0d0db251> ⏱️ Code expires in: <span class="font-mono text-brand-red font-bold" data-v-0d0db251>${ssrInterpolate(formatTime(timeRemaining.value))}</span></span>`);
      } else {
        _push(`<span class="text-red-400" data-v-0d0db251> ⚠️ Verification code has expired </span>`);
      }
      _push(`</p></div></div><div class="space-y-3" data-v-0d0db251><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing || unref(form).otp_code.length !== 6) ? " disabled" : ""} class="w-full bg-brand-red hover:bg-red-600 disabled:bg-red-400 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-transparent disabled:cursor-not-allowed transform hover:translate-y-[-2px] active:translate-y-0 shadow-lg hover:shadow-xl" data-v-0d0db251>`);
      if (unref(form).processing) {
        _push(`<span class="flex items-center justify-center" data-v-0d0db251><svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-0d0db251><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-0d0db251></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-0d0db251></path></svg> Verifying... </span>`);
      } else {
        _push(`<span class="flex items-center justify-center" data-v-0d0db251><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0d0db251><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-0d0db251></path></svg> Verify Code </span>`);
      }
      _push(`</button><button type="button"${ssrIncludeBooleanAttr(unref(resendForm).processing || canResend.value === false) ? " disabled" : ""} class="w-full bg-white/10 hover:bg-white/20 disabled:bg-white/5 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 disabled:cursor-not-allowed border border-white/20" data-v-0d0db251>`);
      if (unref(resendForm).processing) {
        _push(`<span class="flex items-center justify-center" data-v-0d0db251><svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-0d0db251><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-0d0db251></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-0d0db251></path></svg> Sending... </span>`);
      } else {
        _push(`<span class="flex items-center justify-center" data-v-0d0db251><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0d0db251><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" data-v-0d0db251></path></svg> ${ssrInterpolate(canResend.value ? "Resend Code" : `Resend in ${resendCooldown.value}s`)}</span>`);
      }
      _push(`</button><button type="button" class="w-full text-white/60 hover:text-white font-medium py-2 transition-colors duration-300" data-v-0d0db251> ← Back to Forgot Password </button></div></form><div class="mt-6 text-center" data-v-0d0db251><p class="text-white/60 text-xs" data-v-0d0db251> 🔒 This code is valid for ${ssrInterpolate(__props.expiresIn)} minutes only </p></div></div></div><div class="absolute inset-0 pointer-events-none z-0" data-v-0d0db251><div class="floating-particle particle-1" data-v-0d0db251></div><div class="floating-particle particle-2" data-v-0d0db251></div><div class="floating-particle particle-3" data-v-0d0db251></div><div class="floating-particle particle-4" data-v-0d0db251></div><div class="floating-particle particle-5" data-v-0d0db251></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/PasswordResetOtp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PasswordResetOtp = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0d0db251"]]);
export {
  PasswordResetOtp as default
};
