import { mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/vue3";
import { H as Header } from "./Header-ajouT7_M.js";
import { F as FooterSection } from "./FooterSection-X25pRJx9.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    blog: {
      type: Object,
      required: true
    },
    previousBlog: {
      type: Object,
      default: null
    },
    nextBlog: {
      type: Object,
      default: null
    },
    relatedBlogs: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white" }, _attrs))} data-v-3a09685a>`);
      _push(ssrRenderComponent(unref(Head), {
        title: __props.blog.meta_title || __props.blog.title
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<meta name="description"${ssrRenderAttr("content", __props.blog.meta_description)} data-v-3a09685a${_scopeId}><meta name="keywords"${ssrRenderAttr("content", __props.blog.meta_keywords)} data-v-3a09685a${_scopeId}>`);
          } else {
            return [
              createVNode("meta", {
                name: "description",
                content: __props.blog.meta_description
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "keywords",
                content: __props.blog.meta_keywords
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<section class="hero-section relative overflow-hidden" data-v-3a09685a><div class="absolute inset-0 bg-gradient-to-b from-[#F6F6E0] via-[#F6F6E0]/90 to-transparent" data-v-3a09685a></div><div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px] relative z-10" data-v-3a09685a><div class="max-w-[1720px] mx-auto" data-v-3a09685a><div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-36 pb-24" data-v-3a09685a><div class="lg:col-span-7 space-y-8" data-v-3a09685a><h1 class="text-[#121212] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] font-semibold leading-tight md:leading-snug lg:leading-[1.2] xl:leading-[1.15] font-instrument-sans" data-v-3a09685a>${ssrInterpolate(__props.blog.title)}</h1><div class="flex items-center space-x-4" data-v-3a09685a><img${ssrRenderAttr("src", __props.blog.author.avatar || "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMzAiIGZpbGw9IiNGM0Y0RjYiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIxOCIgeT0iMTgiPgo8cGF0aCBkPSJNMTIgMTJDMTQuNzYxNCAxMiAxNyA5Ljc2MTQyIDE3IDdDMTcgNC4yMzg1OCAxNC43NjE0IDIgMTIgMkM5LjIzODU4IDIgNyA0LjIzODU4IDcgN0M3IDkuNzYxNDIgOS4yMzg1OCAxMiAxMiAxMloiIGZpbGw9IiM5Q0E0QUYiLz4KPHBhdGggZD0iTTEyIDEzQzguMTM0MDEgMTMgNSAxNi4xMzQgNSAyMEMyMSAyMC4yNzYxIDIxIDIwIDIxIDIwQzIxIDE2LjEzNDEgMTcuODY2IDEzIDEyIDEzWiIgZmlsbD0iIzlDQTRBRiIvPgo8L3N2Zz4KPC9zdmc+")}${ssrRenderAttr("alt", __props.blog.author.name)} class="w-[60px] h-[60px] rounded-full object-cover bg-gray-100" data-v-3a09685a><div data-v-3a09685a><h3 class="text-black text-xl font-semibold leading-5 font-instrument-sans" data-v-3a09685a>${ssrInterpolate(__props.blog.author.name)}</h3><p class="text-[#666666] text-base font-medium leading-5 mt-1 font-instrument-sans" data-v-3a09685a>${ssrInterpolate(__props.blog.author.role || "Author")}</p></div></div></div><div class="lg:col-span-5 relative" data-v-3a09685a><div class="w-full aspect-[100/50] bg-gray-100 rounded-[20px] overflow-hidden shadow-lg" data-v-3a09685a><img${ssrRenderAttr("src", __props.blog.featured_image || "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjxzdmcgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgNjQgNjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMTY4IiB5PSIxMTgiPgo8cGF0aCBkPSJNNTYgNDhWMTZIOFY0OEg1NlpNMTYgMjRIMjRWMzJIMTZWMjRaTTMyIDM2SDE2VjQwSDMyVjM2Wk00OCAzNkg0MFY0MEg0OFYzNlpNNDggMjRINDBWMzJINDhWMjRaIiBmaWxsPSIjOUNBNEFGIi8+Cjwvc3ZnPgo8L3N2Zz4=")}${ssrRenderAttr("alt", __props.blog.title)} class="w-full h-full object-cover" data-v-3a09685a></div></div></div></div></div></section><div class="spacer-section" data-v-3a09685a></div><section class="blog-content-section pb-10" data-v-3a09685a><div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px]" data-v-3a09685a><div class="max-w-[1720px] mx-auto" data-v-3a09685a><div class="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12" data-v-3a09685a><div class="lg:col-span-3" data-v-3a09685a><div class="blog-content text-[#121212] text-[21px] font-normal leading-[37.8px] tracking-[0.42px] text-justify font-instrument-sans space-y-8" data-v-3a09685a>${__props.blog.content ?? ""}</div>`);
      if (__props.blog.quote) {
        _push(`<div class="quote-section my-16 flex items-start space-x-6" data-v-3a09685a><div class="w-[83px] h-[64px] flex-shrink-0 flex items-center justify-center bg-gray-100 rounded-lg" data-v-3a09685a><svg width="40" height="32" viewBox="0 0 40 32" fill="#9CA4AF" data-v-3a09685a><path d="M12 8C8 8 5 11 5 15v10h8V15H9c0-2 2-4 4-4V8zm15 0c-4 0-7 3-7 7v10h8V15h-4c0-2 2-4 4-4V8z" data-v-3a09685a></path></svg></div><div data-v-3a09685a><blockquote class="text-[#121212] text-[30px] font-semibold leading-[45px] tracking-[0.6px] font-instrument-sans mb-4" data-v-3a09685a> &quot;${ssrInterpolate(__props.blog.quote.text)}&quot; </blockquote><cite class="text-[#121212] text-[21px] font-normal leading-[37.8px] tracking-[0.42px] font-instrument-sans not-italic" data-v-3a09685a> ─ ${ssrInterpolate(__props.blog.quote.author)}</cite></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.blog.comparison_table) {
        _push(`<div class="comparison-table-section my-16" data-v-3a09685a><h2 class="text-[#121212] text-4xl font-semibold leading-[43.2px] tracking-[0.72px] font-instrument-sans mb-8" data-v-3a09685a>${ssrInterpolate(__props.blog.comparison_table.title)}</h2><div class="overflow-x-auto rounded-[5px] border border-[#CDD7D1]" data-v-3a09685a><table class="w-full" data-v-3a09685a><thead data-v-3a09685a><tr class="bg-[#FFFBE5]" data-v-3a09685a><th class="px-6 py-4 text-left text-[#121212] text-[25px] font-semibold leading-[30px] tracking-[0.5px] font-instrument-sans border-b border-r border-[#CDD7D1]" data-v-3a09685a> Feature </th><th class="px-6 py-4 text-left text-[#121212] text-[25px] font-semibold leading-[30px] tracking-[0.5px] font-instrument-sans border-b border-r border-[#CDD7D1]" data-v-3a09685a> Generative AI </th><th class="px-6 py-4 text-left text-[#121212] text-[25px] font-semibold leading-[30px] tracking-[0.5px] font-instrument-sans border-b border-[#CDD7D1]" data-v-3a09685a> Predictive AI </th></tr></thead><tbody data-v-3a09685a><!--[-->`);
        ssrRenderList(__props.blog.comparison_table.rows, (row, index) => {
          _push(`<tr class="${ssrRenderClass(index % 2 === 0 ? "bg-[#FFFBE5]" : "bg-white")}" data-v-3a09685a><td class="px-6 py-4 text-[#121212] text-[22px] font-semibold leading-[26.4px] tracking-[0.44px] font-instrument-sans border-b border-r border-[#CDD7D1]" data-v-3a09685a>${ssrInterpolate(row.feature)}</td><td class="px-6 py-4 text-[#121212] text-[21px] font-normal leading-[37.8px] tracking-[0.42px] font-instrument-sans border-b border-r border-[#CDD7D1]" data-v-3a09685a>${ssrInterpolate(row.generative)}</td><td class="px-6 py-4 text-[#121212] text-[21px] font-normal leading-[37.8px] tracking-[0.42px] font-instrument-sans border-b border-[#CDD7D1]" data-v-3a09685a>${ssrInterpolate(row.predictive)}</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="lg:col-span-1" data-v-3a09685a><div class="sticky top-8" data-v-3a09685a><div class="hidden lg:block" data-v-3a09685a></div></div></div></div></div></div></section>`);
      if (__props.previousBlog || __props.nextBlog) {
        _push(`<section class="py-16 bg-white" data-v-3a09685a><div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px]" data-v-3a09685a><div class="max-w-[1720px] mx-auto" data-v-3a09685a><div class="flex items-center justify-center gap-4" data-v-3a09685a>`);
        if (__props.previousBlog) {
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("blog.show", __props.previousBlog.slug),
            class: "bg-black text-white px-8 py-4 rounded-[10px] font-semibold text-[16px] leading-[19.2px] tracking-[0.32px] font-instrument-sans hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center min-w-[120px]"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Previous `);
              } else {
                return [
                  createTextVNode(" Previous ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<div class="min-w-[120px]" data-v-3a09685a></div>`);
        }
        if (__props.nextBlog) {
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("blog.show", __props.nextBlog.slug),
            class: "bg-black text-white px-8 py-4 rounded-[10px] font-semibold text-[16px] leading-[19.2px] tracking-[0.32px] font-instrument-sans hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center min-w-[120px]"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Next `);
              } else {
                return [
                  createTextVNode(" Next ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<div class="min-w-[120px]" data-v-3a09685a></div>`);
        }
        _push(`</div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.relatedBlogs && __props.relatedBlogs.length > 0) {
        _push(`<section class="related-blogs-section py-16 bg-white" data-v-3a09685a><div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px]" data-v-3a09685a><div class="max-w-[1720px] mx-auto" data-v-3a09685a><h2 class="text-[#121212] text-5xl font-semibold leading-[62.4px] tracking-[1.04px] font-instrument-sans mb-12 text-center" data-v-3a09685a> Related Articles </h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-v-3a09685a><!--[-->`);
        ssrRenderList(__props.relatedBlogs, (relatedBlog) => {
          _push(`<a${ssrRenderAttr("href", `/blog/${relatedBlog.slug}`)} class="group bg-white rounded-[25px] border border-[#E8E8E8] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2" data-v-3a09685a><div class="relative overflow-hidden h-[229px] bg-gray-100" data-v-3a09685a><img${ssrRenderAttr("src", relatedBlog.featured_image || "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyOSIgdmlld0JveD0iMCAwIDQwMCAyMjkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjI5IiBmaWxsPSIjRjNGNEY2Ii8+Cjxzdmcgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgNDggNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMTc2IiB5PSI5MCI+CjxwYXRoIGQ9Ik00MCAzNlYxMkg4VjM2SDQwWk0xNiAxOEgyMFYyNEgxNlYxOFpNMjQgMjhIMTZWMzBIMjRWMjhaTTMyIDI4SDI0VjMwSDMyVjI4Wk0zMiAxOEgyNFYyNEgzMlYxOFoiIGZpbGw9IiM5Q0E0QUYiLz4KPC9zdmc+Cjwvc3ZnPg==")}${ssrRenderAttr("alt", relatedBlog.title)} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-v-3a09685a></div><div class="p-6" data-v-3a09685a><h3 class="text-[#121212] text-2xl font-semibold leading-[28.8px] tracking-[0.48px] font-instrument-sans mb-4" data-v-3a09685a>${ssrInterpolate(relatedBlog.title)}</h3><div class="mt-4 flex items-center" data-v-3a09685a><div class="inline-flex items-center text-[#FF3621] font-semibold text-[21px] leading-[25.2px] tracking-[0.42px] font-instrument-sans" data-v-3a09685a> Read more <div class="w-[40px] h-[40px] ml-[16px] flex items-center justify-center overflow-hidden" data-v-3a09685a><svg class="absolute transition-transform duration-200 group-hover:translate-x-1" width="34" height="2" viewBox="0 0 34 2" fill="none" data-v-3a09685a><rect width="33.08" height="1.28" fill="#FF3621" data-v-3a09685a></rect></svg><svg class="relative ml-[23px] transition-transform duration-200 group-hover:translate-x-1" width="11" height="12" viewBox="0 0 11 12" fill="none" data-v-3a09685a><path d="M10.69 5.945L0 0V11.89L10.69 5.945Z" fill="#FF3621" data-v-3a09685a></path></svg></div></div></div></div></a>`);
        });
        _push(`<!--]--></div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(FooterSection, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Blog/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3a09685a"]]);
export {
  Show as default
};
