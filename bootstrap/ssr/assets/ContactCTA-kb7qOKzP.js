import { mergeProps, unref, withCtx, createVNode, createBlock, openBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "ContactCTA",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cta-section-contact bg-white py-12 lg:py-16" }, _attrs))} data-v-0887e4e2><div class="container-custom max-w-[1920px] mx-auto px-6 lg:px-24" data-v-0887e4e2><div class="cta-card bg-brand-dark rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-2xl overflow-hidden group" data-v-0887e4e2><div class="flex flex-col lg:flex-row items-center lg:items-center gap-8" data-v-0887e4e2><div class="flex-1 w-full lg:w-[70%] space-y-6" data-v-0887e4e2><div data-v-0887e4e2><h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold text-white leading-tight lg:leading-[61.6px]" data-v-0887e4e2> Want to stop guessing and start getting results? </h2></div><div class="flex flex-col lg:flex-row space-y-6 lg:space-y-0" data-v-0887e4e2><div class="flex-1 lg:pr-8" data-v-0887e4e2><p class="text-lg sm:text-xl lg:text-[22px] text-white leading-relaxed lg:leading-[32px]" data-v-0887e4e2> Stop wrestling with data. Let&#39;s turn it into outcomes that matter. </p></div><div class="flex justify-center lg:justify-start lg:items-center" data-v-0887e4e2>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("contact"),
        class: "bg-brand-red text-white font-bold py-3 sm:py-3.5 px-6 sm:px-8 lg:px-10 rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-sm sm:text-[16px] uppercase tracking-[0.36px] border-2 border-brand-red"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-0887e4e2${_scopeId}>TALK TO AN EXPERT</span><div class="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center" data-v-0887e4e2${_scopeId}><svg class="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" data-v-0887e4e2${_scopeId}><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" data-v-0887e4e2${_scopeId}></path></svg></div>`);
          } else {
            return [
              createVNode("span", null, "TALK TO AN EXPERT"),
              createVNode("div", { class: "w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center" }, [
                (openBlock(), createBlock("svg", {
                  class: "w-4 h-4 sm:w-6 sm:h-6",
                  fill: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", { d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="hidden xl:flex w-[30%] justify-center items-center" data-v-0887e4e2><div class="relative group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" data-v-0887e4e2><div class="w-[180px] h-[180px] rounded-full border-2 border-white flex items-center justify-center group-hover:border-brand-red transition-all duration-500" data-v-0887e4e2><div class="w-[120px] h-[120px] rounded-full border-2 border-white flex items-center justify-center group-hover:border-brand-red transition-all duration-500" data-v-0887e4e2><div class="w-[80px] h-[80px] bg-brand-red rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-500 shadow-2xl" data-v-0887e4e2><svg class="w-8 h-8 text-white group-hover:text-brand-red transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0887e4e2><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-0887e4e2></path></svg></div></div><svg class="absolute inset-0 w-full h-full" viewBox="0 0 180 180" data-v-0887e4e2><defs data-v-0887e4e2><path id="circle-path" d="M 90,90 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" data-v-0887e4e2></path></defs><text class="fill-white group-hover:fill-brand-red text-[14px] font-bold uppercase tracking-wide transition-all duration-500" style="${ssrRenderStyle({ "font-family": "'Instrument Sans', sans-serif" })}" data-v-0887e4e2><textPath href="#circle-path" startOffset="0%" data-v-0887e4e2> START A CONVERSATION ~ START A CONVERSATION ~ </textPath></text></svg></div></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Contact/ContactCTA.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContactCTA = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0887e4e2"]]);
export {
  ContactCTA as C
};
