import { mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, createBlock, openBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/vue3";
import { H as Header } from "./Header-DHb6HnRe.js";
import { F as FooterSection } from "./FooterSection-Cp7kRGnW.js";
import { u as useCanonical } from "./useCanonical-DTCbHnHl.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    servicePages: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    useCanonical("https://www.sinki.ai/services");
    const failedImages = /* @__PURE__ */ new Set();
    const handleImageError = (event) => {
      const imgSrc = event.target.src;
      if (failedImages.has(imgSrc)) {
        console.warn("Image failed to load, hiding:", imgSrc);
        event.target.style.display = "none";
        return;
      }
      failedImages.add(imgSrc);
      if (imgSrc.includes("placeholder")) {
        event.target.style.display = "none";
      } else {
        event.target.src = "/images/placeholder-service.jpg";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white" }, _attrs))} data-v-13e56269>`);
      _push(ssrRenderComponent(unref(Head), { title: "Our Services | Sinki.ai" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<meta name="description" content="Explore our comprehensive range of technology services designed to transform your business." data-v-13e56269${_scopeId}>`);
          } else {
            return [
              createVNode("meta", {
                name: "description",
                content: "Explore our comprehensive range of technology services designed to transform your business."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<section class="hero-section relative overflow-hidden pt-32 pb-24" data-v-13e56269><div class="absolute inset-0 bg-gradient-to-b from-[#F6F6E0] via-[#F6F6E0]/90 to-transparent" data-v-13e56269></div><div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px] relative z-10" data-v-13e56269><div class="max-w-[1720px] mx-auto text-center" data-v-13e56269><h1 class="text-[#121212] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] font-semibold leading-tight font-instrument-sans mb-6" data-v-13e56269> Our Services </h1><p class="text-[#666666] text-lg sm:text-xl md:text-2xl font-normal leading-relaxed font-instrument-sans max-w-3xl mx-auto" data-v-13e56269> Comprehensive technology solutions to accelerate your digital transformation journey </p></div></div></section><section class="py-16 bg-white" data-v-13e56269><div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px]" data-v-13e56269><div class="max-w-[1720px] mx-auto" data-v-13e56269>`);
      if (__props.servicePages.length === 0) {
        _push(`<div class="text-center py-20" data-v-13e56269><div class="max-w-md mx-auto" data-v-13e56269><svg class="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-13e56269><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-v-13e56269></path></svg><h2 class="text-2xl font-semibold text-gray-900 mb-2" data-v-13e56269>No Services Available</h2><p class="text-gray-600" data-v-13e56269>Our service offerings are being updated. Please check back soon.</p></div></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-v-13e56269><!--[-->`);
        ssrRenderList(__props.servicePages, (service) => {
          _push(ssrRenderComponent(unref(Link), {
            key: service.id,
            href: `/services/${service.slug}`,
            class: "group bg-white rounded-[25px] border border-[#E8E8E8] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="relative overflow-hidden h-[250px] bg-gray-100" data-v-13e56269${_scopeId}><img${ssrRenderAttr("src", service.hero_background_image || "/images/placeholder-service.jpg")}${ssrRenderAttr("alt", service.title)} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-v-13e56269${_scopeId}><div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" data-v-13e56269${_scopeId}></div></div><div class="p-8" data-v-13e56269${_scopeId}><h3 class="text-[#121212] text-2xl font-semibold leading-tight tracking-wide font-instrument-sans mb-4" data-v-13e56269${_scopeId}>${ssrInterpolate(service.title)}</h3><p class="text-[#666666] text-base leading-relaxed font-instrument-sans mb-6" data-v-13e56269${_scopeId}>${ssrInterpolate(service.subtitle)}</p><div class="flex items-center text-[#FF3621] font-semibold text-lg leading-tight tracking-wide font-instrument-sans group-hover:translate-x-2 transition-transform duration-300" data-v-13e56269${_scopeId}> Learn more <div class="w-[40px] h-[40px] ml-4 flex items-center justify-center overflow-hidden" data-v-13e56269${_scopeId}><svg class="absolute transition-transform duration-200 group-hover:translate-x-1" width="34" height="2" viewBox="0 0 34 2" fill="none" data-v-13e56269${_scopeId}><rect width="33.08" height="1.28" fill="#FF3621" data-v-13e56269${_scopeId}></rect></svg><svg class="relative ml-[23px] transition-transform duration-200 group-hover:translate-x-1" width="11" height="12" viewBox="0 0 11 12" fill="none" data-v-13e56269${_scopeId}><path d="M10.69 5.945L0 0V11.89L10.69 5.945Z" fill="#FF3621" data-v-13e56269${_scopeId}></path></svg></div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "relative overflow-hidden h-[250px] bg-gray-100" }, [
                    createVNode("img", {
                      src: service.hero_background_image || "/images/placeholder-service.jpg",
                      alt: service.title,
                      class: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500",
                      onError: handleImageError
                    }, null, 40, ["src", "alt"]),
                    createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" })
                  ]),
                  createVNode("div", { class: "p-8" }, [
                    createVNode("h3", { class: "text-[#121212] text-2xl font-semibold leading-tight tracking-wide font-instrument-sans mb-4" }, toDisplayString(service.title), 1),
                    createVNode("p", { class: "text-[#666666] text-base leading-relaxed font-instrument-sans mb-6" }, toDisplayString(service.subtitle), 1),
                    createVNode("div", { class: "flex items-center text-[#FF3621] font-semibold text-lg leading-tight tracking-wide font-instrument-sans group-hover:translate-x-2 transition-transform duration-300" }, [
                      createTextVNode(" Learn more "),
                      createVNode("div", { class: "w-[40px] h-[40px] ml-4 flex items-center justify-center overflow-hidden" }, [
                        (openBlock(), createBlock("svg", {
                          class: "absolute transition-transform duration-200 group-hover:translate-x-1",
                          width: "34",
                          height: "2",
                          viewBox: "0 0 34 2",
                          fill: "none"
                        }, [
                          createVNode("rect", {
                            width: "33.08",
                            height: "1.28",
                            fill: "#FF3621"
                          })
                        ])),
                        (openBlock(), createBlock("svg", {
                          class: "relative ml-[23px] transition-transform duration-200 group-hover:translate-x-1",
                          width: "11",
                          height: "12",
                          viewBox: "0 0 11 12",
                          fill: "none"
                        }, [
                          createVNode("path", {
                            d: "M10.69 5.945L0 0V11.89L10.69 5.945Z",
                            fill: "#FF3621"
                          })
                        ]))
                      ])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div></section>`);
      _push(ssrRenderComponent(FooterSection, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Services/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-13e56269"]]);
export {
  Index as default
};
