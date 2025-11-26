import { mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { H as Header } from "./Header-DHb6HnRe.js";
import { S as ServiceHero, I as ImageContentSection, a as ServicesGrid, O as OurApproach, K as KeyBenefits, P as PlatformsWeWorkWith, W as WhyChooseUs, b as InsightsResourcesSection, F as FAQSection } from "./FAQSection-D4wtjyas.js";
import { P as ParnerBadge, S as ServiceCTA } from "./ServiceCTA-JoLLeJ3z.js";
import { F as FooterSection } from "./FooterSection-Cp7kRGnW.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const heroBackgroundImage = "/images/herobannerservice.webp";
const _sfc_main = {
  __name: "DemoService",
  __ssrInlineRender: true,
  setup(__props) {
    const dataEngineeringServices = [
      {
        title: "Data Pipelines",
        description: "We build reliable batch and streaming pipelines using Delta Lake and Auto Loader, ensuring your data flows efficiently from source to target, ready for analytics and AI.",
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>`
      },
      {
        title: "Data Orchestration",
        description: "Automate and manage workflows with Databricks Workflows. From job scheduling to monitoring, we ensure your pipelines run smoothly and are fully auditable.",
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>`
      },
      {
        title: "Data Integration",
        description: "Seamlessly connect diverse sources, databases, APIs, streaming data, or third-party SaaS into Databricks. We use tools like Unity Catalog and Delta Live Tables to maintain secure, consistent access.",
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
        </svg>`
      },
      {
        title: "Data Migration",
        description: "We execute phased, low-risk migrations to Databricks Lakehouse architecture, utilizing tools like Auto Loader and Delta Lake to ensure data integrity, minimal downtime, and business continuity.",
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
        </svg>`
      },
      {
        title: "Data Modernization",
        description: "Upgrade legacy systems with Lakehouse architecture, leveraging Delta Lake for ACID transactions, partitioning strategies for performance, decoupled compute for scalability, & cost management best practices.",
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
        </svg>`
      },
      {
        title: "Data Lakehouse Consulting",
        description: "Our experts provide guidance on architecture, modeling, governance, and analytics integration, ensuring your Lakehouse is optimized for insights, BI, and AI initiatives.",
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>`
      }
    ];
    const dataEngineeringFAQs = [
      {
        question: "What is data modernization?",
        answer: "Data modernization involves upgrading legacy data systems to modern, cloud-based architectures that support real-time analytics and AI applications."
      },
      {
        question: "How long does a typical Databricks migration take?",
        answer: "A typical Databricks migration timeline varies based on complexity and data volume, but most enterprise migrations are completed within 3-6 months with proper planning and phased implementation."
      },
      {
        question: "Will modernization reduce cloud costs?",
        answer: "Yes, data modernization typically reduces costs through optimized storage with Delta Lake, auto-scaling compute resources, and elimination of redundant infrastructure and licensing fees."
      },
      {
        question: "Do you support Unity Catalog and governance implementations?",
        answer: "Absolutely. We specialize in Unity Catalog implementations, including data governance frameworks, access controls, lineage tracking, and compliance management across your entire data estate."
      },
      {
        question: "How do you ensure data quality in pipeline builds?",
        answer: "We implement comprehensive data quality frameworks using Delta Live Tables, automated testing, data validation rules, monitoring dashboards, and alerting systems to ensure data integrity throughout the pipeline."
      },
      {
        question: "Can you help with ML model deployment?",
        answer: "Yes, we provide end-to-end ML operations including model training, deployment, monitoring, and management using Databricks MLflow and integrated CI/CD pipelines for production-ready ML solutions."
      }
    ];
    const handleCtaClick = () => {
      window.Calendly?.initPopupWidget({
        url: "https://calendly.com/your-calendly-link"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white" }, _attrs))} data-v-65dbfd65>`);
      _push(ssrRenderComponent(unref(Head), { title: "Demo Service Page | Sinki.ai" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<meta name="description" content="Demo service page template for reference." data-v-65dbfd65${_scopeId}><meta name="robots" content="noindex, nofollow" data-v-65dbfd65${_scopeId}>`);
          } else {
            return [
              createVNode("meta", {
                name: "description",
                content: "Demo service page template for reference."
              }),
              createVNode("meta", {
                name: "robots",
                content: "noindex, nofollow"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(ServiceHero, {
        title: "Data Engineering & Modernization Services",
        subtitle: "We help enterprises design, modernize, and manage data systems that accelerate insights, drive innovation, and optimize costs.",
        "cta-text": "Talk To Our Experts",
        "background-image": heroBackgroundImage,
        "background-color": "#121212",
        "overlay-gradient": "linear-gradient(180deg, rgba(18,18,18,0.4) 0%, rgba(18,18,18,0.4) 100%)",
        "title-classes": "text-[2.5rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[5rem]",
        "subtitle-classes": "text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.375rem] 2xl:text-[1.5rem] leading-[1.6]",
        "show-decorative-elements": true,
        onCtaClick: handleCtaClick
      }, null, _parent));
      _push(ssrRenderComponent(ParnerBadge, null, null, _parent));
      _push(ssrRenderComponent(ImageContentSection, {
        title: "Unlock the Full Potential of Your Data",
        subtitle: "Build Smarter, Faster, and Future-Ready Data Systems",
        descriptions: [
          "Data Engineering & Modernization is about turning your raw data into a dependable, scalable foundation that drives business outcomes. From robust pipelines to Lakehouse architectures, we help enterprises using Databricks organize, govern, and optimize their data for analytics, AI, and smarter decision-making.",
          "At Sinki.ai, our Databricks-powered solutions simplify complexity, accelerate insights, and give your teams the confidence to act on data faster, smarter, and with measurable impact."
        ],
        "image-src": "/images/serviceside.webp",
        "image-alt": "Data Engineering Services",
        "image-position": "left",
        "cta-text": "Start Your Transformation",
        "background-color": "bg-gray-50",
        onCtaClick: handleCtaClick
      }, null, _parent));
      _push(ssrRenderComponent(ServicesGrid, {
        title: "Our Data Engineering & Modernization Services",
        description: "We offer a comprehensive suite of data engineering and modernization services.",
        services: dataEngineeringServices
      }, null, _parent));
      _push(ssrRenderComponent(OurApproach, null, null, _parent));
      _push(ssrRenderComponent(KeyBenefits, null, null, _parent));
      _push(ssrRenderComponent(PlatformsWeWorkWith, {
        "section-id": "platforms-data-engineering",
        "section-label": "Platforms We Work With",
        title: "Built on the Platforms You Trust",
        description: "We bring Databricks to life on the enterprise platforms you already rely on."
      }, null, _parent));
      _push(ssrRenderComponent(WhyChooseUs, {
        title: "Why Choose us for your Data Engineering needs?",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      }, null, _parent));
      _push(ssrRenderComponent(ServiceCTA, {
        title: "Ready to Get More from Databricks?",
        description: "Let's simplify your Databricks journey, and turn data into real results.",
        "cta-text": "Get Started Now",
        "cta-link": "/contact",
        "background-image": "/images/cta.webp"
      }, null, _parent));
      _push(ssrRenderComponent(InsightsResourcesSection, {
        title: "Insights & Resources",
        description: "Stay updated with the latest trends and insights in data engineering and modernization:",
        blogs: _ctx.blogs,
        "max-blogs": 3
      }, null, _parent));
      _push(ssrRenderComponent(FAQSection, {
        title: "Frequently Asked Questions",
        faqs: dataEngineeringFAQs
      }, null, _parent));
      _push(ssrRenderComponent(FooterSection, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Services/DemoService.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DemoService = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-65dbfd65"]]);
export {
  DemoService as default
};
