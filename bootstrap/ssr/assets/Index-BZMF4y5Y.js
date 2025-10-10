import { mergeProps, withCtx, unref, createVNode, createBlock, openBlock, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { A as AdminLayout } from "./AdminLayout-CcF1p51h.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AdminLayout, mergeProps({
        "page-title": "Analytics",
        "page-subtitle": "View system analytics and reports"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Analytics - Admin Dashboard" }, null, _parent2, _scopeId));
            _push2(`<div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6" data-v-0d128b7b${_scopeId}><div class="text-center py-12" data-v-0d128b7b${_scopeId}><svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0d128b7b${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" data-v-0d128b7b${_scopeId}></path></svg><h3 class="mt-4 text-lg font-medium text-gray-900" data-v-0d128b7b${_scopeId}>Analytics Dashboard</h3><p class="mt-2 text-gray-600" data-v-0d128b7b${_scopeId}>Analytics and reporting features will be implemented here.</p><div class="mt-6" data-v-0d128b7b${_scopeId}><button class="bg-brand-red text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200" data-v-0d128b7b${_scopeId}> Generate Report </button></div></div></div>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Analytics - Admin Dashboard" }),
              createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6" }, [
                createVNode("div", { class: "text-center py-12" }, [
                  (openBlock(), createBlock("svg", {
                    class: "mx-auto h-12 w-12 text-gray-400",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    })
                  ])),
                  createVNode("h3", { class: "mt-4 text-lg font-medium text-gray-900" }, "Analytics Dashboard"),
                  createVNode("p", { class: "mt-2 text-gray-600" }, "Analytics and reporting features will be implemented here."),
                  createVNode("div", { class: "mt-6" }, [
                    createVNode("button", { class: "bg-brand-red text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200" }, " Generate Report ")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Analytics/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0d128b7b"]]);
export {
  Index as default
};
