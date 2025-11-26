import { computed, mergeProps, unref, withCtx, createBlock, createCommentVNode, openBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { H as Header } from "./Header-DHb6HnRe.js";
import { S as ServiceHero, I as ImageContentSection, a as ServicesGrid, O as OurApproach, K as KeyBenefits, P as PlatformsWeWorkWith, W as WhyChooseUs, b as InsightsResourcesSection, F as FAQSection } from "./FAQSection-D4wtjyas.js";
import { P as ParnerBadge, S as ServiceCTA } from "./ServiceCTA-JoLLeJ3z.js";
import { F as FooterSection } from "./FooterSection-Cp7kRGnW.js";
import { u as useCanonical } from "./useCanonical-DTCbHnHl.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "DynamicServicePage",
  __ssrInlineRender: true,
  props: {
    servicePage: {
      type: Object,
      required: true
    },
    isPreview: {
      type: Boolean,
      default: false
    },
    blogs: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    if (!props.isPreview && props.servicePage?.slug) {
      useCanonical(`https://www.sinki.ai/services/${props.servicePage.slug}`);
    }
    const orderedSections = computed(() => {
      if (!props.servicePage.sections) {
        return {};
      }
      return Object.entries(props.servicePage.sections).sort(([, a], [, b]) => (a.order || 0) - (b.order || 0)).reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});
    });
    const handleCtaClick = () => {
      const ctaLink = props.servicePage.cta_link || "/contact";
      if (ctaLink.startsWith("http") || ctaLink.startsWith("mailto:") || ctaLink.startsWith("tel:")) {
        window.open(ctaLink, "_blank");
      } else {
        window.location.href = ctaLink;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white" }, _attrs))} data-v-4a2222c3>`);
      _push(ssrRenderComponent(unref(Head), {
        title: __props.servicePage.meta_title || __props.servicePage.title
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!__props.isPreview) {
              _push2(`<meta name="description"${ssrRenderAttr("content", __props.servicePage.meta_description || __props.servicePage.subtitle)} data-v-4a2222c3${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (!__props.isPreview && __props.servicePage.meta_keywords) {
              _push2(`<meta name="keywords"${ssrRenderAttr("content", __props.servicePage.meta_keywords)} data-v-4a2222c3${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.isPreview) {
              _push2(`<meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" data-v-4a2222c3${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.isPreview) {
              _push2(`<meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" data-v-4a2222c3${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.isPreview) {
              _push2(`<meta name="bingbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" data-v-4a2222c3${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !__props.isPreview ? (openBlock(), createBlock("meta", {
                key: 0,
                name: "description",
                content: __props.servicePage.meta_description || __props.servicePage.subtitle
              }, null, 8, ["content"])) : createCommentVNode("", true),
              !__props.isPreview && __props.servicePage.meta_keywords ? (openBlock(), createBlock("meta", {
                key: 1,
                name: "keywords",
                content: __props.servicePage.meta_keywords
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
        _push(`<div class="bg-yellow-500 text-black px-4 py-2 text-center font-medium" data-v-4a2222c3><span class="inline-flex items-center" data-v-4a2222c3><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-4a2222c3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-4a2222c3></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-v-4a2222c3></path></svg> You are viewing a preview of this service page. This is not visible to the public. </span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(ServiceHero, {
        title: __props.servicePage.title,
        subtitle: __props.servicePage.subtitle,
        "cta-text": __props.servicePage.cta_text || "Talk To Our Experts",
        "background-image": __props.servicePage.hero_background_image,
        "background-color": __props.servicePage.hero_background_color || "#121212",
        "overlay-gradient": __props.servicePage.hero_overlay_gradient,
        "title-classes": "text-[2.5rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[5rem]",
        "subtitle-classes": "text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.375rem] 2xl:text-[1.5rem] leading-[1.6]",
        "show-decorative-elements": true,
        onCtaClick: handleCtaClick
      }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(orderedSections.value, (section, sectionKey) => {
        _push(`<!--[-->`);
        if (sectionKey === "partner_badge" && section.enabled) {
          _push(ssrRenderComponent(ParnerBadge, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (sectionKey === "image_content" && section.enabled) {
          _push(ssrRenderComponent(ImageContentSection, {
            title: __props.servicePage.image_content_title || "Unlock the Full Potential of Your Data",
            subtitle: __props.servicePage.image_content_subtitle || "Build Smarter, Faster, and Future-Ready Data Systems",
            descriptions: __props.servicePage.image_content_descriptions || [
              __props.servicePage.description || "Transform your business with our comprehensive service solutions.",
              "At Sinki.ai, our solutions simplify complexity, accelerate insights, and give your teams the confidence to act on data faster, smarter, and with measurable impact."
            ],
            "image-src": __props.servicePage.image_content_image || "/images/serviceside.webp",
            "image-alt": __props.servicePage.title + " Services",
            "image-position": "left",
            "cta-text": __props.servicePage.image_content_cta_text || "Start Your Transformation",
            "background-color": "bg-gray-50",
            onCtaClick: handleCtaClick
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (sectionKey === "services_grid" && section.enabled && __props.servicePage.services_data?.length) {
          _push(ssrRenderComponent(ServicesGrid, {
            title: __props.servicePage.services_grid_title || `Our ${__props.servicePage.title} Services`,
            description: __props.servicePage.services_grid_description || "We offer a comprehensive suite of services.",
            services: __props.servicePage.services_data
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (sectionKey === "our_approach" && section.enabled) {
          _push(ssrRenderComponent(OurApproach, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (sectionKey === "key_benefits" && section.enabled) {
          _push(ssrRenderComponent(KeyBenefits, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (sectionKey === "platforms" && section.enabled) {
          _push(ssrRenderComponent(PlatformsWeWorkWith, {
            "section-id": `platforms-${__props.servicePage.slug}`,
            "section-label": "Platforms We Work With",
            title: __props.servicePage.platforms_title || "Built on the Platforms You Trust",
            description: __props.servicePage.platforms_description || "We bring the best solutions to life on the enterprise platforms you already rely on."
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (sectionKey === "why_choose_us" && section.enabled) {
          _push(ssrRenderComponent(WhyChooseUs, {
            title: __props.servicePage.why_choose_title || `Why Choose us for your ${__props.servicePage.title} needs?`,
            description: __props.servicePage.why_choose_description || "We deliver exceptional results with our proven methodology and expert team.",
            reasons: __props.servicePage.why_choose_data || []
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (sectionKey === "service_cta" && section.enabled) {
          _push(ssrRenderComponent(ServiceCTA, {
            title: __props.servicePage.service_cta_title || `Ready to Get Started with ${__props.servicePage.title}?`,
            description: __props.servicePage.service_cta_description || `Let's simplify your journey, and turn challenges into real results.`,
            "cta-text": __props.servicePage.service_cta_text || "Get Started Now",
            "cta-link": __props.servicePage.cta_link || "/contact",
            "background-image": __props.servicePage.service_cta_image || "/images/cta.webp"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (sectionKey === "insights_resources" && section.enabled) {
          _push(ssrRenderComponent(InsightsResourcesSection, {
            title: "Insights & Resources",
            description: `Stay updated with the latest trends and insights in ${__props.servicePage.title.toLowerCase()}:`,
            blogs: __props.blogs || [],
            "max-blogs": 3
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (sectionKey === "faq" && section.enabled && __props.servicePage.faqs_data?.length) {
          _push(ssrRenderComponent(FAQSection, {
            title: "Frequently Asked Questions",
            faqs: __props.servicePage.faqs_data
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(FooterSection, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Services/DynamicServicePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DynamicServicePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4a2222c3"]]);
export {
  DynamicServicePage as default
};
