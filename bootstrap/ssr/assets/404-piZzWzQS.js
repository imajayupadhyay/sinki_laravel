import { mergeProps, unref, withCtx, createBlock, createTextVNode, openBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "404",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4" }, _attrs))} data-v-b4883dbc>`);
      _push(ssrRenderComponent(unref(Head), { title: "Page Not Found - Sinki.ai" }, null, _parent));
      _push(`<div class="max-w-lg w-full text-center" data-v-b4883dbc><div class="mb-8 flex justify-center" data-v-b4883dbc><svg class="w-64 h-64 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-b4883dbc><g transform="scale(0.8) translate(3, 3)" data-v-b4883dbc><circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="2" fill="none" data-v-b4883dbc></circle><path d="M21 21l-6-6" stroke="currentColor" stroke-width="2" data-v-b4883dbc></path><g transform="translate(10, 10)" data-v-b4883dbc><circle cx="0" cy="0" r="5" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.3" data-v-b4883dbc></circle><path d="M-1.5,-1.5 Q0,-3 1.5,-1.5 Q0,0 0,1" stroke="currentColor" stroke-width="1.5" fill="none" data-v-b4883dbc></path><circle cx="0" cy="2.5" r="0.3" fill="currentColor" data-v-b4883dbc></circle></g><circle cx="3" cy="5" r="1" fill="currentColor" opacity="0.2" data-v-b4883dbc></circle><circle cx="19" cy="7" r="0.8" fill="currentColor" opacity="0.15" data-v-b4883dbc></circle><circle cx="5" cy="18" r="0.6" fill="currentColor" opacity="0.1" data-v-b4883dbc></circle><circle cx="17" cy="16" r="0.9" fill="currentColor" opacity="0.2" data-v-b4883dbc></circle></g></svg></div><div class="mb-8" data-v-b4883dbc><h1 class="text-8xl md:text-9xl font-bold text-brand-red mb-4 tracking-tight" data-v-b4883dbc> 404 </h1><h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4" data-v-b4883dbc> Page Not Found </h2><p class="text-lg text-gray-600 mb-8 leading-relaxed" data-v-b4883dbc> Oops! The page you&#39;re looking for seems to have wandered off into the digital void. Don&#39;t worry, it happens to the best of us. </p></div><div class="flex flex-col sm:flex-row gap-4 justify-center items-center" data-v-b4883dbc>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: "inline-flex items-center px-8 py-3 bg-brand-red text-white font-semibold rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b4883dbc${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" data-v-b4883dbc${_scopeId}></path></svg> Back to Home `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-5 h-5 mr-2",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                })
              ])),
              createTextVNode(" Back to Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-medium rounded-full border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200" data-v-b4883dbc><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b4883dbc><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-v-b4883dbc></path></svg> Go Back </button></div><div class="mt-12 pt-8 border-t border-gray-200" data-v-b4883dbc><p class="text-sm text-gray-500 mb-4" data-v-b4883dbc> Need help? Here are some useful links: </p><div class="flex flex-wrap gap-4 justify-center" data-v-b4883dbc>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: "text-brand-red hover:text-red-600 text-sm font-medium transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/contact",
        class: "text-brand-red hover:text-red-600 text-sm font-medium transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact Us `);
          } else {
            return [
              createTextVNode(" Contact Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="text-brand-red hover:text-red-600 text-sm font-medium transition-colors duration-200" data-v-b4883dbc> Report Issue </button></div></div><div class="mt-8" data-v-b4883dbc><img src="/images/sinkilogo1.png" alt="Sinki.ai" class="h-8 w-auto mx-auto opacity-60 hover:opacity-80 transition-opacity duration-300" data-v-b4883dbc></div></div><div class="fixed inset-0 pointer-events-none overflow-hidden" data-v-b4883dbc><div class="floating-element floating-element-1" data-v-b4883dbc></div><div class="floating-element floating-element-2" data-v-b4883dbc></div><div class="floating-element floating-element-3" data-v-b4883dbc></div><div class="floating-element floating-element-4" data-v-b4883dbc></div><div class="floating-element floating-element-5" data-v-b4883dbc></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Errors/404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b4883dbc"]]);
export {
  _404 as default
};
