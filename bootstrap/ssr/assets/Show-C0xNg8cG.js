import { onMounted, mergeProps, unref, withCtx, createBlock, createCommentVNode, openBlock, nextTick, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { H as Header } from "./Header-DHb6HnRe.js";
import { F as FooterSection } from "./FooterSection-Cp7kRGnW.js";
import { u as useCanonical } from "./useCanonical-DTCbHnHl.js";
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
    },
    isPreview: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    if (!props.isPreview && props.blog?.slug) {
      useCanonical(`https://www.sinki.ai/blog/${props.blog.slug}`);
    }
    const processCTABlocks = () => {
      nextTick(() => {
        const blogContent = document.querySelector(".blog-content");
        if (!blogContent) return;
        const ctaElements = blogContent.querySelectorAll(".blog-cta-embed[data-cta]");
        ctaElements.forEach((element) => {
          try {
            const ctaData = JSON.parse(element.getAttribute("data-cta"));
            const ctaHTML = `
                    <div class="blog-cta-wrapper-processed" style="padding: 0;">
                        <div class="blog-cta-container-processed" style="
                            position: relative;
                            border-radius: 25px;
                            padding: 48px 32px;
                            text-align: center;
                            overflow: hidden;
                            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
                            min-height: 320px;
                            background-color: #F6F6E0;
                            transition: transform 0.3s ease, box-shadow 0.3s ease;
                            display: block;
                        ">
                            <div style="position: relative; z-index: 10; margin: 0 auto;">
                                <h2 style="
                                    color: #121212;
                                    font-weight: 600;
                                    font-size: 36px;
                                    line-height: 1.2;
                                    margin-bottom: 16px;
                                    margin-top: 0;
                                    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                                    display: block;
                                ">${ctaData.title}</h2>
                                <p style="
                                    color: #666666;
                                    font-size: 20px;
                                    line-height: 1.5;
                                    margin-bottom: 32px;
                                    margin-top: 0;
                                    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                                    margin-left: auto;
                                    margin-right: auto;
                                    margin-bottom: 32px;
                                    display: block;
                                ">${ctaData.description}</p>
                                <a href="${ctaData.buttonUrl}" style="
                                    display: inline-flex;
                                    align-items: center;
                                    gap: 12px;
                                    padding: 14px 28px;
                                    background-color: black;
                                    color: white;
                                    text-decoration: none;
                                    border-radius: 50px;
                                    font-weight: bold;
                                    font-size: 18px;
                                    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
                                    transition: all 0.3s ease;
                                    border: 2px solid black;
                                    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                                    margin: 0 auto;
                                " onmouseover="this.style.backgroundColor='transparent'; this.style.color='black';" onmouseout="this.style.backgroundColor='black'; this.style.color='white';">
                                    <span style="color: inherit; text-decoration: none;">${ctaData.buttonText}</span>
                                    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="transition: transform 0.3s ease;">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                `;
            element.outerHTML = ctaHTML;
          } catch (error) {
            console.warn("Failed to process CTA block:", error);
          }
        });
      });
    };
    onMounted(() => {
      processCTABlocks();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white" }, _attrs))} data-v-a135b558>`);
      _push(ssrRenderComponent(unref(Head), {
        title: __props.blog.meta_title || __props.blog.title
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!__props.isPreview) {
              _push2(`<meta name="description"${ssrRenderAttr("content", __props.blog.meta_description)} data-v-a135b558${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (!__props.isPreview) {
              _push2(`<meta name="keywords"${ssrRenderAttr("content", __props.blog.meta_keywords)} data-v-a135b558${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.isPreview) {
              _push2(`<meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" data-v-a135b558${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.isPreview) {
              _push2(`<meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" data-v-a135b558${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.isPreview) {
              _push2(`<meta name="bingbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" data-v-a135b558${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !__props.isPreview ? (openBlock(), createBlock("meta", {
                key: 0,
                name: "description",
                content: __props.blog.meta_description
              }, null, 8, ["content"])) : createCommentVNode("", true),
              !__props.isPreview ? (openBlock(), createBlock("meta", {
                key: 1,
                name: "keywords",
                content: __props.blog.meta_keywords
              }, null, 8, ["content"])) : createCommentVNode("", true),
              __props.isPreview ? (openBlock(), createBlock("meta", {
                key: 2,
                name: "robots",
                content: "noindex, nofollow, noarchive, nosnippet, noimageindex"
              })) : createCommentVNode("", true),
              __props.isPreview ? (openBlock(), createBlock("meta", {
                key: 3,
                name: "googlebot",
                content: "noindex, nofollow, noarchive, nosnippet, noimageindex"
              })) : createCommentVNode("", true),
              __props.isPreview ? (openBlock(), createBlock("meta", {
                key: 4,
                name: "bingbot",
                content: "noindex, nofollow, noarchive, nosnippet, noimageindex"
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.isPreview) {
        _push(`<div class="bg-yellow-500 text-black px-4 py-2 text-center font-medium" data-v-a135b558><span class="inline-flex items-center" data-v-a135b558><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-a135b558><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-a135b558></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-v-a135b558></path></svg> You are viewing a preview of this draft blog post. This is not visible to the public. </span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<section class="hero-section relative overflow-hidden" data-v-a135b558><div class="absolute inset-0 bg-gradient-to-b from-[#F6F6E0] via-[#F6F6E0]/90 to-transparent" data-v-a135b558></div><div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px] relative z-10" data-v-a135b558><div class="max-w-[1720px] mx-auto" data-v-a135b558><div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-48 pb-24" data-v-a135b558><div class="lg:col-span-7 space-y-8" data-v-a135b558><h1 class="text-[#121212] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] font-semibold leading-tight md:leading-snug lg:leading-[1.2] xl:leading-[1.15] font-instrument-sans" data-v-a135b558>${ssrInterpolate(__props.blog.title)}</h1><div class="flex items-center space-x-4" data-v-a135b558><div class="w-[60px] h-[60px] rounded-full flex-shrink-0 overflow-hidden" data-v-a135b558>`);
      if (__props.blog.author.profile_image_url) {
        _push(`<img${ssrRenderAttr("src", __props.blog.author.profile_image_url)}${ssrRenderAttr("alt", __props.blog.author.name)} class="w-full h-full object-cover" data-v-a135b558>`);
      } else {
        _push(`<div class="w-full h-full bg-[#FF3621] flex items-center justify-center" data-v-a135b558><span class="text-white text-xl font-semibold font-instrument-sans" data-v-a135b558>${ssrInterpolate(__props.blog.author.name.charAt(0).toUpperCase())}</span></div>`);
      }
      _push(`</div><div data-v-a135b558><h3 class="text-black text-xl font-semibold leading-5 font-instrument-sans" data-v-a135b558>${ssrInterpolate(__props.blog.author.name)}</h3><p class="text-[#666666] text-base font-medium leading-5 mt-1 font-instrument-sans" data-v-a135b558>${ssrInterpolate(__props.blog.author.role || "Author")}</p></div></div></div><div class="lg:col-span-5 relative" data-v-a135b558><div class="w-4/5 lg:w-4/5 w-full aspect-[100/60] bg-gray-100 rounded-[20px] overflow-hidden shadow-lg" data-v-a135b558><img${ssrRenderAttr("src", __props.blog.featured_image || "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjxzdmcgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgNjQgNjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMTY4IiB5PSIxMTgiPgo8cGF0aCBkPSJNNTYgNDhWMTZIOFY0OEg1NlpNMTYgMjRIMjRWMzJIMTZWMjRaTTMyIDM2SDE2VjQwSDMyVjM2Wk00OCAzNkg0MFY0MEg0OFYzNlpNNDggMjRINDBWMzJINDhWMjRaIiBmaWxsPSIjOUNBNEFGIi8+Cjwvc3ZnPgo8L3N2Zz4=")}${ssrRenderAttr("alt", __props.blog.title)} class="w-full h-full" data-v-a135b558></div></div></div></div></div></section><div class="spacer-section" data-v-a135b558></div><section class="blog-content-section pb-10" data-v-a135b558><div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px]" data-v-a135b558><div class="max-w-[1720px] mx-auto" data-v-a135b558><div class="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12" data-v-a135b558><div class="lg:col-span-3" data-v-a135b558><div class="blog-content text-[#121212] text-[21px] font-normal leading-[37.8px] tracking-[0.42px] md:text-justify font-instrument-sans space-y-8" data-v-a135b558>${__props.blog.content ?? ""}</div>`);
      if (__props.blog.quote) {
        _push(`<div class="quote-section my-16 flex items-start space-x-6" data-v-a135b558><div class="w-[83px] h-[64px] flex-shrink-0 flex items-center justify-center bg-gray-100 rounded-lg" data-v-a135b558><svg width="40" height="32" viewBox="0 0 40 32" fill="#9CA4AF" data-v-a135b558><path d="M12 8C8 8 5 11 5 15v10h8V15H9c0-2 2-4 4-4V8zm15 0c-4 0-7 3-7 7v10h8V15h-4c0-2 2-4 4-4V8z" data-v-a135b558></path></svg></div><div data-v-a135b558><blockquote class="text-[#121212] text-[30px] font-semibold leading-[45px] tracking-[0.6px] font-instrument-sans mb-4" data-v-a135b558> &quot;${ssrInterpolate(__props.blog.quote.text)}&quot; </blockquote><cite class="text-[#121212] text-[21px] font-normal leading-[37.8px] tracking-[0.42px] font-instrument-sans not-italic" data-v-a135b558> ─ ${ssrInterpolate(__props.blog.quote.author)}</cite></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.blog.comparison_table) {
        _push(`<div class="comparison-table-section my-16" data-v-a135b558><h2 class="text-[#121212] text-4xl font-semibold leading-[43.2px] tracking-[0.72px] font-instrument-sans mb-8" data-v-a135b558>${ssrInterpolate(__props.blog.comparison_table.title)}</h2><div class="overflow-x-auto rounded-[5px] border border-[#CDD7D1]" data-v-a135b558><table class="w-full" data-v-a135b558><thead data-v-a135b558><tr class="bg-[#FFFBE5]" data-v-a135b558><th class="px-6 py-4 text-left text-[#121212] text-[25px] font-semibold leading-[30px] tracking-[0.5px] font-instrument-sans border-b border-r border-[#CDD7D1]" data-v-a135b558> Feature </th><th class="px-6 py-4 text-left text-[#121212] text-[25px] font-semibold leading-[30px] tracking-[0.5px] font-instrument-sans border-b border-r border-[#CDD7D1]" data-v-a135b558> Generative AI </th><th class="px-6 py-4 text-left text-[#121212] text-[25px] font-semibold leading-[30px] tracking-[0.5px] font-instrument-sans border-b border-[#CDD7D1]" data-v-a135b558> Predictive AI </th></tr></thead><tbody data-v-a135b558><!--[-->`);
        ssrRenderList(__props.blog.comparison_table.rows, (row, index) => {
          _push(`<tr class="${ssrRenderClass(index % 2 === 0 ? "bg-[#FFFBE5]" : "bg-white")}" data-v-a135b558><td class="px-6 py-4 text-[#121212] text-[22px] font-semibold leading-[26.4px] tracking-[0.44px] font-instrument-sans border-b border-r border-[#CDD7D1]" data-v-a135b558>${ssrInterpolate(row.feature)}</td><td class="px-6 py-4 text-[#121212] text-[21px] font-normal leading-[37.8px] tracking-[0.42px] font-instrument-sans border-b border-r border-[#CDD7D1]" data-v-a135b558>${ssrInterpolate(row.generative)}</td><td class="px-6 py-4 text-[#121212] text-[21px] font-normal leading-[37.8px] tracking-[0.42px] font-instrument-sans border-b border-[#CDD7D1]" data-v-a135b558>${ssrInterpolate(row.predictive)}</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="lg:col-span-1" data-v-a135b558><div class="sticky top-8" data-v-a135b558><div class="hidden lg:block" data-v-a135b558></div></div></div></div></div></div></section><section class="py-8 bg-white" data-v-a135b558><div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px]" data-v-a135b558><div class="max-w-[1720px] mx-auto" data-v-a135b558><div class="flex items-center justify-center gap-4" data-v-a135b558>`);
      if (__props.previousBlog) {
        _push(`<button class="bg-black text-white px-8 py-3 rounded-[10px] font-semibold text-[16px] leading-[19.2px] tracking-[0.32px] font-instrument-sans hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center min-w-[120px]" data-v-a135b558> Previous </button>`);
      } else {
        _push(`<button disabled class="bg-gray-300 text-gray-500 px-8 py-3 rounded-[10px] font-semibold text-[16px] leading-[19.2px] tracking-[0.32px] font-instrument-sans flex items-center justify-center min-w-[120px] cursor-not-allowed" data-v-a135b558> Previous </button>`);
      }
      if (__props.nextBlog) {
        _push(`<button class="bg-black text-white px-8 py-3 rounded-[10px] font-semibold text-[16px] leading-[19.2px] tracking-[0.32px] font-instrument-sans hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center min-w-[120px]" data-v-a135b558> Next </button>`);
      } else {
        _push(`<button disabled class="bg-gray-300 text-gray-500 px-8 py-3 rounded-[10px] font-semibold text-[16px] leading-[19.2px] tracking-[0.32px] font-instrument-sans flex items-center justify-center min-w-[120px] cursor-not-allowed" data-v-a135b558> Next </button>`);
      }
      _push(`</div></div></div></section>`);
      if (__props.relatedBlogs && __props.relatedBlogs.length > 0) {
        _push(`<section class="related-blogs-section py-16 bg-white" data-v-a135b558><div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px]" data-v-a135b558><div class="max-w-[1720px] mx-auto" data-v-a135b558><h2 class="text-[#121212] text-5xl font-semibold leading-[62.4px] tracking-[1.04px] font-instrument-sans mb-12 text-center" data-v-a135b558> Related Articles </h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-v-a135b558><!--[-->`);
        ssrRenderList(__props.relatedBlogs, (relatedBlog) => {
          _push(`<a${ssrRenderAttr("href", `/blog/${relatedBlog.slug}`)} class="group bg-white rounded-[25px] border border-[#E8E8E8] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2" data-v-a135b558><div class="relative overflow-hidden h-[229px] bg-gray-100" data-v-a135b558><img${ssrRenderAttr("src", relatedBlog.featured_image || "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyOSIgdmlld0JveD0iMCAwIDQwMCAyMjkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjI5IiBmaWxsPSIjRjNGNEY2Ii8+Cjxzdmcgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgNDggNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMTc2IiB5PSI5MCI+CjxwYXRoIGQ9Ik00MCAzNlYxMkg4VjM2SDQwWk0xNiAxOEgyMFYyNEgxNlYxOFpNMjQgMjhIMTZWMzBIMjRWMjhaTTMyIDI4SDI0VjMwSDMyVjI4Wk0zMiAxOEgyNFYyNEgzMlYxOFoiIGZpbGw9IiM5Q0E0QUYiLz4KPC9zdmc+Cjwvc3ZnPg==")}${ssrRenderAttr("alt", relatedBlog.title)} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-v-a135b558></div><div class="p-6" data-v-a135b558><h3 class="text-[#121212] text-2xl font-semibold leading-[28.8px] tracking-[0.48px] font-instrument-sans mb-4" data-v-a135b558>${ssrInterpolate(relatedBlog.title)}</h3><div class="mt-4 flex items-center" data-v-a135b558><div class="inline-flex items-center text-[#FF3621] font-semibold text-[21px] leading-[25.2px] tracking-[0.42px] font-instrument-sans" data-v-a135b558> Read more <div class="w-[40px] h-[40px] ml-[16px] flex items-center justify-center overflow-hidden" data-v-a135b558><svg class="absolute transition-transform duration-200 group-hover:translate-x-1" width="34" height="2" viewBox="0 0 34 2" fill="none" data-v-a135b558><rect width="33.08" height="1.28" fill="#FF3621" data-v-a135b558></rect></svg><svg class="relative ml-[23px] transition-transform duration-200 group-hover:translate-x-1" width="11" height="12" viewBox="0 0 11 12" fill="none" data-v-a135b558><path d="M10.69 5.945L0 0V11.89L10.69 5.945Z" fill="#FF3621" data-v-a135b558></path></svg></div></div></div></div></a>`);
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
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a135b558"]]);
export {
  Show as default
};
