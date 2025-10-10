import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/vue3";
import { H as Header } from "./Header-CLonHj5B.js";
import { C as ContactCTA } from "./ContactCTA-kb7qOKzP.js";
import { F as FooterSection } from "./FooterSection-X25pRJx9.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    blogs: {
      type: Array,
      default: () => []
    },
    totalBlogs: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white font-instrument" }, _attrs))} data-v-96e825b8>`);
      _push(ssrRenderComponent(unref(Head), { title: "Blog - Sinki.io" }, null, _parent));
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<section class="pt-[166px] relative blog-hero-section" data-v-96e825b8><div class="blog-background" data-v-96e825b8><div class="absolute inset-0 bg-gradient-to-br from-beige/15 to-cream/8" data-v-96e825b8></div><div class="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-brand-red/12 to-transparent rounded-full animate-pulse-slow" data-v-96e825b8></div><div class="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-brand-red/6 to-transparent rounded-full animate-pulse-slow-delayed" data-v-96e825b8></div></div><div class="max-w-[1920px] mx-auto px-12 relative z-10" data-v-96e825b8><div class="text-left ml-[6px]" data-v-96e825b8><p class="text-[18px] font-medium text-[#121212] uppercase tracking-[1.8px] mb-6 leading-[19.8px] mt-[15px]" data-v-96e825b8> Insights &amp; Resources </p><h1 class="text-[102px] font-semibold text-[#121212] mb-8 leading-[112.2px] max-w-[1500px]" data-v-96e825b8> Latest Insights on <span class="block" data-v-96e825b8>Databricks, Data &amp; AI</span></h1><p class="text-[30px] text-[#121212] font-normal leading-[45px] max-w-[899px]" data-v-96e825b8> Stay ahead with guides, blogs, and practical insights to help your enterprise scale smarter with Databricks. </p></div></div></section><section class="py-16 bg-white" data-v-96e825b8><div class="max-w-[1920px] mx-auto px-6" data-v-96e825b8>`);
      if (__props.blogs.length > 0) {
        _push(`<div class="flex flex-wrap gap-[20px] ml-[24px]" data-v-96e825b8><!--[-->`);
        ssrRenderList(__props.blogs, (blog) => {
          _push(`<article class="bg-white border border-[#E0EAE4] rounded-[25px] overflow-visible group w-[594px] h-[560px] shadow-[0px_4px_4px_rgba(0,0,0,0.05)] relative" data-v-96e825b8><div class="relative overflow-hidden rounded-[20px] mx-[20px] mt-[20px]" data-v-96e825b8><img${ssrRenderAttr("src", blog.featured_image || "/images/default-blog.jpg")}${ssrRenderAttr("alt", blog.title)} class="w-[554px] h-[288px] object-cover transition-transform duration-300 group-hover:scale-105 rounded-[20px]" data-v-96e825b8><div class="absolute top-[-30px] right-[-30px] w-[30px] h-[30px] bg-transparent overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-v-96e825b8><svg class="w-full h-full" viewBox="0 0 30 30" fill="none" data-v-96e825b8><path d="M7.48 7.5L22.51 7.5L22.51 22.53" stroke="#121212" stroke-width="2" data-v-96e825b8></path><path d="M22.51 7.5L7.48 22.53" stroke="#121212" stroke-width="2" data-v-96e825b8></path></svg></div></div><div class="px-[31px] pt-[37px]" data-v-96e825b8><div class="mb-[31px]" data-v-96e825b8><span class="inline-flex items-center justify-center bg-[#E0EAE4] text-black text-[14px] font-semibold px-[20px] py-[5px] rounded-[20px] uppercase tracking-[0.28px] leading-[16.8px]" data-v-96e825b8> BLOG </span></div><h3 class="text-[30px] font-semibold text-[#121212] mb-[19px] leading-[36px] tracking-[0.6px] max-w-[512px] min-h-[72px]" data-v-96e825b8>`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("blog.show", blog.slug),
            class: "hover:text-gray-700 transition-colors duration-200"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(blog.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(blog.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</h3><div class="mt-[15px] flex items-center" data-v-96e825b8>`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("blog.show", blog.slug),
            class: "inline-flex items-center text-[#FF3621] hover:text-[#e52e1c] font-semibold text-[21px] transition-colors duration-200 group/link leading-[25.2px] tracking-[0.42px]"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Read more <div class="w-[40px] h-[40px] ml-[16px] flex items-center justify-center overflow-hidden" data-v-96e825b8${_scopeId}><svg class="absolute transition-transform duration-200 group-hover/link:translate-x-1" width="34" height="2" viewBox="0 0 34 2" fill="none" data-v-96e825b8${_scopeId}><rect width="33.08" height="1.28" fill="#FF3621" data-v-96e825b8${_scopeId}></rect></svg><svg class="relative ml-[23px] transition-transform duration-200 group-hover/link:translate-x-1" width="11" height="12" viewBox="0 0 11 12" fill="none" data-v-96e825b8${_scopeId}><path d="M10.69 5.945L0 0V11.89L10.69 5.945Z" fill="#FF3621" data-v-96e825b8${_scopeId}></path></svg></div>`);
              } else {
                return [
                  createTextVNode(" Read more "),
                  createVNode("div", { class: "w-[40px] h-[40px] ml-[16px] flex items-center justify-center overflow-hidden" }, [
                    (openBlock(), createBlock("svg", {
                      class: "absolute transition-transform duration-200 group-hover/link:translate-x-1",
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
                      class: "relative ml-[23px] transition-transform duration-200 group-hover/link:translate-x-1",
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
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></article>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center py-16" data-v-96e825b8><svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-96e825b8><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" data-v-96e825b8></path></svg><h3 class="text-lg font-medium text-gray-900 mb-2" data-v-96e825b8>No blog posts yet</h3><p class="text-gray-500" data-v-96e825b8>Check back soon for our latest articles and insights.</p></div>`);
      }
      _push(`</div></section>`);
      _push(ssrRenderComponent(ContactCTA, null, null, _parent));
      _push(ssrRenderComponent(FooterSection, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Blog/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-96e825b8"]]);
export {
  Index as default
};
