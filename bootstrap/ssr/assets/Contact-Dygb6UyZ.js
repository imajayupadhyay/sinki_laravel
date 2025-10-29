import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent } from "vue/server-renderer";
import { useForm, Head } from "@inertiajs/vue3";
import { H as HeaderSimple } from "./HeaderSimple-CNt_VpHb.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { C as ContactCTA } from "./ContactCTA-kb7qOKzP.js";
import { F as FooterSection } from "./FooterSection-X25pRJx9.js";
const _sfc_main$1 = {
  __name: "ContactHero",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      services: "",
      message: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "contact-section mt-15" }, _attrs))} data-v-f729c4ec><div class="contact-background" data-v-f729c4ec><div class="absolute inset-0 bg-gradient-to-br from-beige/20 to-cream/30" data-v-f729c4ec></div><div class="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-brand-red/10 to-transparent rounded-full animate-pulse-slow" data-v-f729c4ec></div><div class="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-brand-red/5 to-transparent rounded-full animate-pulse-slow-delayed" data-v-f729c4ec></div></div><div class="container-custom relative z-10" data-v-f729c4ec><div class="text-center mb-16 animate-fade-in" data-v-f729c4ec><h3 class="text-xl lg:text-2xl text-brand-red font-semibold mb-6" data-v-f729c4ec>Get in Touch With Us</h3><h1 class="contact-hero-title text-4xl sm:text-5xl md:text-6xl font-bold text-brand-dark leading-tight mb-8" data-v-f729c4ec> Let&#39;s Simplify Your Databricks Journey </h1><p class="text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto" data-v-f729c4ec> Whether you&#39;re exploring Databricks for the first time, scaling AI, or fixing data challenges, you don&#39;t have to do it alone. Our experts are here to listen, guide, and get you results faster. </p></div>`);
      if (_ctx.$page.props.flash && _ctx.$page.props.flash.success) {
        _push(`<div class="mb-8 mx-auto max-w-4xl" data-v-f729c4ec><div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg" data-v-f729c4ec><div class="flex" data-v-f729c4ec><div class="flex-shrink-0" data-v-f729c4ec><svg class="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor" data-v-f729c4ec><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-v-f729c4ec></path></svg></div><div class="ml-3" data-v-f729c4ec><p class="text-sm text-green-700 font-medium" data-v-f729c4ec>${ssrInterpolate(_ctx.$page.props.flash.success)}</p></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="w-full px-4 sm:px-8 lg:px-20 xl:px-32" data-v-f729c4ec><div class="overflow-hidden rounded-3xl shadow-2xl w-full" data-v-f729c4ec><div class="bg-gray-50 p-6 sm:p-8 lg:p-12" data-v-f729c4ec><form class="contact-form space-y-6" data-v-f729c4ec><div class="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8" data-v-f729c4ec><div class="form-group relative" data-v-f729c4ec><label for="name" class="block text-sm font-medium text-gray-700 mb-2" data-v-f729c4ec>Name</label><input type="text" id="name"${ssrRenderAttr("value", unref(form).name)} placeholder="Your First Name" class="${ssrRenderClass([{ "border-red-500": unref(form).errors.name }, "w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-brand-red transition-all duration-300 text-gray-900 placeholder-gray-500"])}" required data-v-f729c4ec>`);
      if (unref(form).errors.name) {
        _push(`<span class="text-red-500 text-xs mt-1" data-v-f729c4ec>${ssrInterpolate(unref(form).errors.name)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group relative" data-v-f729c4ec><label for="email" class="block text-sm font-medium text-gray-700 mb-2" data-v-f729c4ec>Email</label><input type="email" id="email"${ssrRenderAttr("value", unref(form).email)} placeholder="Your Business Email" class="${ssrRenderClass([{ "border-red-500": unref(form).errors.email }, "w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-brand-red transition-all duration-300 text-gray-900 placeholder-gray-500"])}" required data-v-f729c4ec>`);
      if (unref(form).errors.email) {
        _push(`<span class="text-red-500 text-xs mt-1" data-v-f729c4ec>${ssrInterpolate(unref(form).errors.email)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group relative" data-v-f729c4ec><label for="phone" class="block text-sm font-medium text-gray-700 mb-2" data-v-f729c4ec>Phone</label><input type="tel" id="phone"${ssrRenderAttr("value", unref(form).phone)} placeholder="Your Phone number" class="${ssrRenderClass([{ "border-red-500": unref(form).errors.phone }, "w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-brand-red transition-all duration-300 text-gray-900 placeholder-gray-500"])}" required data-v-f729c4ec>`);
      if (unref(form).errors.phone) {
        _push(`<span class="text-red-500 text-xs mt-1" data-v-f729c4ec>${ssrInterpolate(unref(form).errors.phone)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" data-v-f729c4ec><div class="form-group relative" data-v-f729c4ec><label for="company" class="block text-sm font-medium text-gray-700 mb-2" data-v-f729c4ec>Company</label><input type="text" id="company"${ssrRenderAttr("value", unref(form).company)} placeholder="Your Company Name" class="${ssrRenderClass([{ "border-red-500": unref(form).errors.company }, "w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-brand-red transition-all duration-300 text-gray-900 placeholder-gray-500"])}" required data-v-f729c4ec>`);
      if (unref(form).errors.company) {
        _push(`<span class="text-red-500 text-xs mt-1" data-v-f729c4ec>${ssrInterpolate(unref(form).errors.company)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group relative" data-v-f729c4ec><label for="services" class="block text-sm font-medium text-gray-700 mb-2" data-v-f729c4ec>Service Interested In</label><select id="services" class="${ssrRenderClass([{ "border-red-500": unref(form).errors.services }, "w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-brand-red transition-all duration-300 text-gray-900"])}" required data-v-f729c4ec><option value="" disabled selected data-v-f729c4ec>Select a service</option><option value="Databricks Implementation" data-v-f729c4ec${ssrIncludeBooleanAttr(Array.isArray(unref(form).services) ? ssrLooseContain(unref(form).services, "Databricks Implementation") : ssrLooseEqual(unref(form).services, "Databricks Implementation")) ? " selected" : ""}>Databricks Implementation</option><option value="Data Engineering" data-v-f729c4ec${ssrIncludeBooleanAttr(Array.isArray(unref(form).services) ? ssrLooseContain(unref(form).services, "Data Engineering") : ssrLooseEqual(unref(form).services, "Data Engineering")) ? " selected" : ""}>Data Engineering</option><option value="AI &amp; Machine Learning" data-v-f729c4ec${ssrIncludeBooleanAttr(Array.isArray(unref(form).services) ? ssrLooseContain(unref(form).services, "AI & Machine Learning") : ssrLooseEqual(unref(form).services, "AI & Machine Learning")) ? " selected" : ""}>AI &amp; Machine Learning</option><option value="Data Analytics" data-v-f729c4ec${ssrIncludeBooleanAttr(Array.isArray(unref(form).services) ? ssrLooseContain(unref(form).services, "Data Analytics") : ssrLooseEqual(unref(form).services, "Data Analytics")) ? " selected" : ""}>Data Analytics</option><option value="Migration Services" data-v-f729c4ec${ssrIncludeBooleanAttr(Array.isArray(unref(form).services) ? ssrLooseContain(unref(form).services, "Migration Services") : ssrLooseEqual(unref(form).services, "Migration Services")) ? " selected" : ""}>Migration Services</option><option value="Training &amp; Support" data-v-f729c4ec${ssrIncludeBooleanAttr(Array.isArray(unref(form).services) ? ssrLooseContain(unref(form).services, "Training & Support") : ssrLooseEqual(unref(form).services, "Training & Support")) ? " selected" : ""}>Training &amp; Support</option><option value="Consulting" data-v-f729c4ec${ssrIncludeBooleanAttr(Array.isArray(unref(form).services) ? ssrLooseContain(unref(form).services, "Consulting") : ssrLooseEqual(unref(form).services, "Consulting")) ? " selected" : ""}>Consulting</option><option value="Other" data-v-f729c4ec${ssrIncludeBooleanAttr(Array.isArray(unref(form).services) ? ssrLooseContain(unref(form).services, "Other") : ssrLooseEqual(unref(form).services, "Other")) ? " selected" : ""}>Other</option></select>`);
      if (unref(form).errors.services) {
        _push(`<span class="text-red-500 text-xs mt-1" data-v-f729c4ec>${ssrInterpolate(unref(form).errors.services)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="form-group relative" data-v-f729c4ec><label for="message" class="block text-sm font-medium text-gray-700 mb-2" data-v-f729c4ec>Message</label><textarea id="message" rows="4" placeholder="Tell us how we can help you with Databricks..." class="${ssrRenderClass([{ "border-red-500": unref(form).errors.message }, "w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-brand-red transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none"])}" required data-v-f729c4ec>${ssrInterpolate(unref(form).message)}</textarea>`);
      if (unref(form).errors.message) {
        _push(`<span class="text-red-500 text-xs mt-1" data-v-f729c4ec>${ssrInterpolate(unref(form).errors.message)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="submit-button-container flex justify-end" data-v-f729c4ec><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="btn-primary bg-brand-red text-white font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full border-2 border-brand-red transition-all duration-300 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed" data-v-f729c4ec>`);
      if (!unref(form).processing) {
        _push(`<span data-v-f729c4ec>Send Message</span>`);
      } else {
        _push(`<span data-v-f729c4ec>Sending...</span>`);
      }
      _push(`</button></div></form></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Contact/ContactHero.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ContactHero = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f729c4ec"]]);
const _sfc_main = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white" }, _attrs))} data-v-e395dedc>`);
      _push(ssrRenderComponent(unref(Head), { title: "Contact Us - Databricks Consulting Services" }, null, _parent));
      _push(ssrRenderComponent(HeaderSimple, null, null, _parent));
      _push(ssrRenderComponent(ContactHero, null, null, _parent));
      _push(ssrRenderComponent(ContactCTA, null, null, _parent));
      _push(ssrRenderComponent(FooterSection, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e395dedc"]]);
export {
  Contact as default
};
