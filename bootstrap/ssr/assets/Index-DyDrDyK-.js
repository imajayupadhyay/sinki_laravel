import { ref, reactive, onMounted, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, toDisplayString, withModifiers, withDirectives, createTextVNode, vModelText, vModelCheckbox, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { A as AdminLayout } from "./AdminLayout-utiN72C1.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    heroSection: Object,
    partnerBadge: Object,
    storySection: Object,
    whatWeDoSection: Object,
    approachSection: Object,
    leadershipSection: Object,
    whyPartnerSection: Object,
    ctaSection: Object,
    seoSettings: Object
  },
  setup(__props) {
    const props = __props;
    const activeSection = ref("seo-settings");
    const sectionNav = ref(null);
    const heroProcessing = ref(false);
    const heroErrors = ref({});
    const partnerProcessing = ref(false);
    const partnerErrors = ref({});
    const storyProcessing = ref(false);
    const storyErrors = ref({});
    const whatWeDoProcessing = ref(false);
    const whatWeDoErrors = ref({});
    const showAddServiceModal = ref(false);
    const editingService = ref(null);
    const approachProcessing = ref(false);
    const approachErrors = ref({});
    const showAddApproachStepModal = ref(false);
    const editingApproachStep = ref(null);
    const sections = ref([
      {
        id: "seo-settings",
        name: "SEO Settings",
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>'
      },
      {
        id: "hero-section",
        name: "Hero Section",
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>'
      },
      {
        id: "partner-badge-section",
        name: "Partner Badge",
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>'
      },
      {
        id: "story-section",
        name: "Story Section",
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>'
      },
      {
        id: "what-we-do-section",
        name: "What We Do",
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>'
      },
      {
        id: "approach-section",
        name: "Our Approach",
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>'
      },
      {
        id: "leadership-section",
        name: "Leadership",
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>'
      },
      {
        id: "why-partner-section",
        name: "Why Partner",
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>'
      },
      {
        id: "cta-section",
        name: "CTA Section",
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>'
      }
    ]);
    const heroForm = reactive({
      heading: props.heroSection?.heading || "",
      paragraph: props.heroSection?.paragraph || "",
      cta_text: props.heroSection?.cta_text || "",
      cta_link: props.heroSection?.cta_link || "",
      is_active: props.heroSection?.is_active ?? true
    });
    const partnerForm = reactive({
      text: props.partnerBadge?.text || "",
      logo_alt: props.partnerBadge?.logo_alt || "",
      is_active: props.partnerBadge?.is_active ?? true
    });
    const storyForm = reactive({
      header_tag: props.storySection?.header_tag || "OUR STORY",
      title: props.storySection?.title || "",
      subtitle: props.storySection?.subtitle || "",
      descriptions: props.storySection?.descriptions || ["", "", ""],
      image_alt: props.storySection?.image_alt || "",
      image_position: props.storySection?.image_position || "left",
      background_color: props.storySection?.background_color || "bg-white",
      is_active: props.storySection?.is_active ?? true
    });
    const whatWeDoForm = reactive({
      header_tag: props.whatWeDoSection?.header_tag || "HOW WE HELP",
      title: props.whatWeDoSection?.title || "",
      subtitle: props.whatWeDoSection?.subtitle || "",
      is_active: props.whatWeDoSection?.is_active ?? true
    });
    const serviceForm = reactive({
      title: "",
      description: "",
      icon_svg: "",
      sort_order: 1,
      is_active: true
    });
    const serviceProcessing = ref(false);
    const serviceErrors = ref({});
    const approachForm = reactive({
      header_tag: props.approachSection?.header_tag || "HOW WE WORK",
      title: props.approachSection?.title || "Our Data-First Approach",
      subtitle: props.approachSection?.subtitle || "How We Transform Your Data Vision Into Reality",
      cta_text: props.approachSection?.cta_text || "Book A Discovery Session",
      cta_link: props.approachSection?.cta_link || "",
      background_color: props.approachSection?.background_color || "bg-white",
      is_active: props.approachSection?.is_active ?? true
    });
    const approachStepForm = reactive({
      number: 1,
      title: "",
      short_description: "",
      description: "",
      icon_svg: "",
      sort_order: 1,
      is_active: true
    });
    const approachStepProcessing = ref(false);
    const approachStepErrors = ref({});
    const leadershipForm = reactive({
      header_tag: props.leadershipSection?.header_tag || "OUR LEADERSHIP",
      title: props.leadershipSection?.title || "Visionaries Behind Sinki",
      description: props.leadershipSection?.description || "Our leadership brings years of experience in solving real enterprise data challenges and a shared belief that systems work best when they are intentional, structured, and built for long-term clarity.",
      background_color: props.leadershipSection?.background_color || "",
      is_active: props.leadershipSection?.is_active ?? true
    });
    const leadershipMemberForm = reactive({
      name: "",
      position: "",
      bio: "",
      linkedin_url: "",
      twitter_url: "",
      sort_order: 1,
      is_active: true,
      image: null
    });
    const leadershipProcessing = ref(false);
    const leadershipErrors = ref({});
    const showAddLeadershipMemberModal = ref(false);
    const editingLeadershipMember = ref(null);
    const leadershipMemberProcessing = ref(false);
    const whyPartnerForm = reactive({
      title: props.whyPartnerSection?.title || "Why Partner With Us",
      subtitle: props.whyPartnerSection?.subtitle || "We combine strategy, engineering, and agility to turn your data vision into a measurable business impact.",
      background_color: props.whyPartnerSection?.background_color || "",
      is_active: props.whyPartnerSection?.is_active ?? true
    });
    const whyPartnerFeatureForm = reactive({
      title: "",
      description: "",
      icon: "",
      sort_order: 1,
      is_active: true
    });
    const whyPartnerProcessing = ref(false);
    const whyPartnerErrors = ref({});
    const whyPartnerFeatureModalOpen = ref(false);
    const whyPartnerFeatureModalMode = ref("create");
    const editingWhyPartnerFeature = ref(null);
    const whyPartnerFeatureProcessing = ref(false);
    const ctaForm = reactive({
      title: props.ctaSection?.title || "Wherever you are in your data journey, we can<br />help you move faster.",
      description: props.ctaSection?.description || "We'll help you adopt, scale, and succeed with Databricks.",
      cta_text: props.ctaSection?.cta_text || "Start A Conversation",
      cta_link: props.ctaSection?.cta_link || "/contact",
      background_color: props.ctaSection?.background_color || "",
      is_active: props.ctaSection?.is_active ?? true
    });
    const ctaProcessing = ref(false);
    const ctaErrors = ref({});
    const leadershipMemberErrors = ref({});
    const seoForm = reactive({
      title: props.seoSettings?.title || "About Us - Sinki.ai: Databricks Strategy & Innovation Partner",
      description: props.seoSettings?.description || "Learn about Sinki.ai, your trusted Databricks partner. Our team of experts helps organizations unlock the full potential of their data through strategic guidance and innovative solutions.",
      keywords: props.seoSettings?.keywords || "About Sinki.ai, Databricks Partner, Data Strategy Team, Data Engineering Experts, AI Innovation Team, Business Intelligence Consultants",
      og_title: props.seoSettings?.og_title || "",
      og_description: props.seoSettings?.og_description || "",
      og_url: props.seoSettings?.og_url || "https://www.sinki.ai/about",
      twitter_card: props.seoSettings?.twitter_card || "summary_large_image",
      twitter_title: props.seoSettings?.twitter_title || "",
      twitter_description: props.seoSettings?.twitter_description || "",
      custom_head_tags: props.seoSettings?.custom_head_tags || "",
      is_active: props.seoSettings?.is_active ?? true
    });
    const seoProcessing = ref(false);
    const seoErrors = ref({});
    const ogImagePreview = ref(null);
    const twitterImagePreview = ref(null);
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
        activeSection.value = sectionId;
      }
    };
    const updateHero = () => {
      heroProcessing.value = true;
      heroErrors.value = {};
      router.put(route("admin.about-us.hero.update"), heroForm, {
        onSuccess: () => {
          heroProcessing.value = false;
        },
        onError: (errors) => {
          heroErrors.value = errors;
          heroProcessing.value = false;
        }
      });
    };
    const uploadHeroImage = (event) => {
      const file = event.target.files[0];
      if (!file) return;
      const formData = new FormData();
      formData.append("image", file);
      router.post(route("admin.about-us.hero.image.upload"), formData, {
        forceFormData: true,
        onSuccess: () => {
          event.target.value = "";
        }
      });
    };
    const deleteHeroImage = () => {
      if (confirm("Are you sure you want to delete the hero background image?")) {
        router.delete(route("admin.about-us.hero.image.delete"));
      }
    };
    const updatePartnerBadge = () => {
      partnerProcessing.value = true;
      partnerErrors.value = {};
      router.put(route("admin.about-us.partner-badge.update"), partnerForm, {
        onSuccess: () => {
          partnerProcessing.value = false;
        },
        onError: (errors) => {
          partnerErrors.value = errors;
          partnerProcessing.value = false;
        }
      });
    };
    const uploadPartnerLogo = (event) => {
      const file = event.target.files[0];
      if (!file) return;
      const formData = new FormData();
      formData.append("image", file);
      router.post(route("admin.about-us.partner-badge.logo.upload"), formData, {
        forceFormData: true,
        onSuccess: () => {
          event.target.value = "";
        }
      });
    };
    const deletePartnerLogo = () => {
      if (confirm("Are you sure you want to delete the partner logo?")) {
        router.delete(route("admin.about-us.partner-badge.logo.delete"));
      }
    };
    const updateStorySection = () => {
      storyProcessing.value = true;
      storyErrors.value = {};
      router.put(route("admin.about-us.story-section.update"), storyForm, {
        onSuccess: () => {
          storyProcessing.value = false;
        },
        onError: (errors) => {
          storyErrors.value = errors;
          storyProcessing.value = false;
        }
      });
    };
    const uploadStoryImage = (event) => {
      const file = event.target.files[0];
      if (!file) return;
      const formData = new FormData();
      formData.append("image", file);
      router.post(route("admin.about-us.story-section.image.upload"), formData, {
        forceFormData: true,
        onSuccess: () => {
          event.target.value = "";
        }
      });
    };
    const deleteStoryImage = () => {
      if (confirm("Are you sure you want to delete the story image?")) {
        router.delete(route("admin.about-us.story-section.image.delete"));
      }
    };
    const addDescription = () => {
      storyForm.descriptions.push("");
    };
    const removeDescription = (index) => {
      if (storyForm.descriptions.length > 1) {
        storyForm.descriptions.splice(index, 1);
      }
    };
    const updateWhatWeDo = () => {
      whatWeDoProcessing.value = true;
      whatWeDoErrors.value = {};
      router.put(route("admin.about-us.what-we-do.update"), whatWeDoForm, {
        onSuccess: () => {
          whatWeDoProcessing.value = false;
        },
        onError: (errors) => {
          whatWeDoErrors.value = errors;
          whatWeDoProcessing.value = false;
        }
      });
    };
    const uploadWhatWeDoBackground = (event) => {
      const file = event.target.files[0];
      if (!file) return;
      const formData = new FormData();
      formData.append("image", file);
      router.post(route("admin.about-us.what-we-do.background.upload"), formData, {
        forceFormData: true,
        onSuccess: () => {
          event.target.value = "";
        }
      });
    };
    const deleteWhatWeDoBackground = () => {
      if (confirm("Are you sure you want to delete the background image?")) {
        router.delete(route("admin.about-us.what-we-do.background.delete"));
      }
    };
    const addService = () => {
      serviceForm.title = "";
      serviceForm.description = "";
      serviceForm.icon_svg = "";
      serviceForm.sort_order = props.whatWeDoSection?.items?.length ? Math.max(...props.whatWeDoSection.items.map((i) => i.sort_order)) + 1 : 1;
      serviceForm.is_active = true;
      editingService.value = null;
      showAddServiceModal.value = true;
    };
    const editService = (service) => {
      serviceForm.title = service.title;
      serviceForm.description = service.description;
      serviceForm.icon_svg = service.icon_svg;
      serviceForm.sort_order = service.sort_order;
      serviceForm.is_active = service.is_active;
      editingService.value = service;
      showAddServiceModal.value = true;
    };
    const saveService = () => {
      serviceProcessing.value = true;
      serviceErrors.value = {};
      const url = editingService.value ? route("admin.about-us.what-we-do.items.update", editingService.value.id) : route("admin.about-us.what-we-do.items.store");
      const method = editingService.value ? "put" : "post";
      router[method](url, serviceForm, {
        onSuccess: () => {
          serviceProcessing.value = false;
          showAddServiceModal.value = false;
          editingService.value = null;
        },
        onError: (errors) => {
          serviceErrors.value = errors;
          serviceProcessing.value = false;
        }
      });
    };
    const deleteService = (service) => {
      if (confirm(`Are you sure you want to delete "${service.title}"?`)) {
        router.delete(route("admin.about-us.what-we-do.items.delete", service.id));
      }
    };
    const cancelServiceEdit = () => {
      showAddServiceModal.value = false;
      editingService.value = null;
      serviceForm.title = "";
      serviceForm.description = "";
      serviceForm.icon_svg = "";
      serviceForm.sort_order = 1;
      serviceForm.is_active = true;
    };
    const updateApproach = () => {
      approachProcessing.value = true;
      approachErrors.value = {};
      router.put(route("admin.about-us.approach.update"), approachForm, {
        onSuccess: () => {
          approachProcessing.value = false;
        },
        onError: (errors) => {
          approachErrors.value = errors;
          approachProcessing.value = false;
        }
      });
    };
    const addApproachStep = () => {
      approachStepForm.number = props.approachSection?.steps?.length ? Math.max(...props.approachSection.steps.map((s) => s.number)) + 1 : 1;
      approachStepForm.title = "";
      approachStepForm.short_description = "";
      approachStepForm.description = "";
      approachStepForm.icon_svg = "";
      approachStepForm.sort_order = props.approachSection?.steps?.length ? Math.max(...props.approachSection.steps.map((s) => s.sort_order)) + 1 : 1;
      approachStepForm.is_active = true;
      editingApproachStep.value = null;
      showAddApproachStepModal.value = true;
    };
    const editApproachStep = (step) => {
      approachStepForm.number = step.number;
      approachStepForm.title = step.title;
      approachStepForm.short_description = step.short_description;
      approachStepForm.description = step.description;
      approachStepForm.icon_svg = step.icon_svg;
      approachStepForm.sort_order = step.sort_order;
      approachStepForm.is_active = step.is_active;
      editingApproachStep.value = step;
      showAddApproachStepModal.value = true;
    };
    const saveApproachStep = () => {
      approachStepProcessing.value = true;
      approachStepErrors.value = {};
      const url = editingApproachStep.value ? route("admin.about-us.approach.steps.update", editingApproachStep.value.id) : route("admin.about-us.approach.steps.store");
      const method = editingApproachStep.value ? "put" : "post";
      router[method](url, approachStepForm, {
        onSuccess: () => {
          approachStepProcessing.value = false;
          showAddApproachStepModal.value = false;
          editingApproachStep.value = null;
        },
        onError: (errors) => {
          approachStepErrors.value = errors;
          approachStepProcessing.value = false;
        }
      });
    };
    const deleteApproachStep = (step) => {
      if (confirm(`Are you sure you want to delete "${step.title}"?`)) {
        router.delete(route("admin.about-us.approach.steps.delete", step.id));
      }
    };
    const cancelApproachStepEdit = () => {
      showAddApproachStepModal.value = false;
      editingApproachStep.value = null;
      approachStepForm.number = 1;
      approachStepForm.title = "";
      approachStepForm.short_description = "";
      approachStepForm.description = "";
      approachStepForm.icon_svg = "";
      approachStepForm.sort_order = 1;
      approachStepForm.is_active = true;
    };
    const updateLeadership = () => {
      leadershipProcessing.value = true;
      leadershipErrors.value = {};
      router.put(route("admin.about-us.leadership.update"), leadershipForm, {
        onSuccess: () => {
          leadershipProcessing.value = false;
        },
        onError: (errors) => {
          leadershipErrors.value = errors;
          leadershipProcessing.value = false;
        }
      });
    };
    const uploadLeadershipBackground = (event) => {
      const file = event.target.files[0];
      if (!file) return;
      const formData = new FormData();
      formData.append("background_image", file);
      router.post(route("admin.about-us.leadership.background.upload"), formData, {
        onSuccess: () => {
          event.target.value = "";
        },
        onError: (errors) => {
          console.error("Upload error:", errors);
        }
      });
    };
    const deleteLeadershipBackground = () => {
      if (confirm("Are you sure you want to delete the background image?")) {
        router.delete(route("admin.about-us.leadership.background.delete"));
      }
    };
    const addLeadershipMember = () => {
      leadershipMemberForm.name = "";
      leadershipMemberForm.position = "";
      leadershipMemberForm.bio = "";
      leadershipMemberForm.linkedin_url = "";
      leadershipMemberForm.twitter_url = "";
      leadershipMemberForm.sort_order = props.leadershipSection?.members?.length ? Math.max(...props.leadershipSection.members.map((m) => m.sort_order)) + 1 : 1;
      leadershipMemberForm.is_active = true;
      leadershipMemberForm.image = null;
      editingLeadershipMember.value = null;
      showAddLeadershipMemberModal.value = true;
    };
    const editLeadershipMember = (member) => {
      leadershipMemberForm.name = member.name;
      leadershipMemberForm.position = member.position;
      leadershipMemberForm.bio = member.bio || "";
      leadershipMemberForm.linkedin_url = member.linkedin_url || "";
      leadershipMemberForm.twitter_url = member.twitter_url || "";
      leadershipMemberForm.sort_order = member.sort_order;
      leadershipMemberForm.is_active = member.is_active;
      leadershipMemberForm.image = null;
      editingLeadershipMember.value = member;
      showAddLeadershipMemberModal.value = true;
    };
    const saveLeadershipMember = () => {
      leadershipMemberProcessing.value = true;
      leadershipMemberErrors.value = {};
      const formData = new FormData();
      formData.append("name", leadershipMemberForm.name);
      formData.append("position", leadershipMemberForm.position);
      formData.append("bio", leadershipMemberForm.bio);
      formData.append("linkedin_url", leadershipMemberForm.linkedin_url);
      formData.append("twitter_url", leadershipMemberForm.twitter_url);
      formData.append("sort_order", leadershipMemberForm.sort_order);
      formData.append("is_active", leadershipMemberForm.is_active ? "1" : "0");
      if (leadershipMemberForm.image) {
        formData.append("image", leadershipMemberForm.image);
      }
      const url = editingLeadershipMember.value ? route("admin.about-us.leadership.members.update", editingLeadershipMember.value.id) : route("admin.about-us.leadership.members.store");
      editingLeadershipMember.value ? "post" : "post";
      if (editingLeadershipMember.value) {
        formData.append("_method", "PUT");
      }
      router.post(url, formData, {
        onSuccess: () => {
          leadershipMemberProcessing.value = false;
          showAddLeadershipMemberModal.value = false;
          editingLeadershipMember.value = null;
        },
        onError: (errors) => {
          leadershipMemberErrors.value = errors;
          leadershipMemberProcessing.value = false;
        }
      });
    };
    const deleteLeadershipMember = (member) => {
      if (confirm(`Are you sure you want to delete "${member.name}"?`)) {
        router.delete(route("admin.about-us.leadership.members.delete", member.id));
      }
    };
    const cancelLeadershipMemberEdit = () => {
      showAddLeadershipMemberModal.value = false;
      editingLeadershipMember.value = null;
      leadershipMemberForm.name = "";
      leadershipMemberForm.position = "";
      leadershipMemberForm.bio = "";
      leadershipMemberForm.linkedin_url = "";
      leadershipMemberForm.twitter_url = "";
      leadershipMemberForm.sort_order = 1;
      leadershipMemberForm.is_active = true;
      leadershipMemberForm.image = null;
    };
    const updateWhyPartner = () => {
      whyPartnerProcessing.value = true;
      whyPartnerErrors.value = {};
      router.put(route("admin.about-us.why-partner.update"), {
        title: whyPartnerForm.title,
        subtitle: whyPartnerForm.subtitle,
        background_color: whyPartnerForm.background_color,
        is_active: whyPartnerForm.is_active
      }, {
        onSuccess: () => {
          whyPartnerProcessing.value = false;
        },
        onError: (errors) => {
          whyPartnerErrors.value = errors;
          whyPartnerProcessing.value = false;
        }
      });
    };
    const uploadWhyPartnerBackground = (event) => {
      const file = event.target.files[0];
      if (!file) return;
      const formData = new FormData();
      formData.append("background_image", file);
      router.post(route("admin.about-us.why-partner.background.upload"), formData, {
        forceFormData: true,
        onSuccess: () => {
          event.target.value = "";
        },
        onError: (errors) => {
          console.error("Upload failed:", errors);
          event.target.value = "";
        }
      });
    };
    const deleteWhyPartnerBackground = () => {
      if (confirm("Are you sure you want to delete the background image?")) {
        router.delete(route("admin.about-us.why-partner.background.delete"));
      }
    };
    const addWhyPartnerFeature = () => {
      whyPartnerFeatureModalMode.value = "create";
      whyPartnerFeatureForm.title = "";
      whyPartnerFeatureForm.description = "";
      whyPartnerFeatureForm.icon = "";
      whyPartnerFeatureForm.sort_order = (props.whyPartnerSection?.features?.length || 0) + 1;
      whyPartnerFeatureForm.is_active = true;
      whyPartnerFeatureModalOpen.value = true;
    };
    const editWhyPartnerFeature = (feature) => {
      whyPartnerFeatureModalMode.value = "edit";
      editingWhyPartnerFeature.value = feature;
      whyPartnerFeatureForm.title = feature.title;
      whyPartnerFeatureForm.description = feature.description;
      whyPartnerFeatureForm.icon = feature.icon || "";
      whyPartnerFeatureForm.sort_order = feature.sort_order;
      whyPartnerFeatureForm.is_active = feature.is_active;
      whyPartnerFeatureModalOpen.value = true;
    };
    const saveWhyPartnerFeature = () => {
      whyPartnerFeatureProcessing.value = true;
      const data = {
        title: whyPartnerFeatureForm.title,
        description: whyPartnerFeatureForm.description,
        icon: whyPartnerFeatureForm.icon,
        sort_order: whyPartnerFeatureForm.sort_order,
        is_active: whyPartnerFeatureForm.is_active
      };
      if (whyPartnerFeatureModalMode.value === "create") {
        router.post(route("admin.about-us.why-partner.features.store"), data, {
          onSuccess: () => {
            whyPartnerFeatureProcessing.value = false;
            whyPartnerFeatureModalOpen.value = false;
          },
          onError: (errors) => {
            whyPartnerFeatureProcessing.value = false;
            console.error("Create failed:", errors);
          }
        });
      } else {
        router.put(route("admin.about-us.why-partner.features.update", editingWhyPartnerFeature.value.id), data, {
          onSuccess: () => {
            whyPartnerFeatureProcessing.value = false;
            whyPartnerFeatureModalOpen.value = false;
            editingWhyPartnerFeature.value = null;
          },
          onError: (errors) => {
            whyPartnerFeatureProcessing.value = false;
            console.error("Update failed:", errors);
          }
        });
      }
    };
    const deleteWhyPartnerFeature = (featureId) => {
      if (confirm("Are you sure you want to delete this feature?")) {
        router.delete(route("admin.about-us.why-partner.features.delete", featureId));
      }
    };
    const cancelWhyPartnerFeatureEdit = () => {
      whyPartnerFeatureModalOpen.value = false;
      editingWhyPartnerFeature.value = null;
      whyPartnerFeatureForm.title = "";
      whyPartnerFeatureForm.description = "";
      whyPartnerFeatureForm.icon = "";
      whyPartnerFeatureForm.sort_order = 1;
      whyPartnerFeatureForm.is_active = true;
    };
    const updateCTA = () => {
      ctaProcessing.value = true;
      ctaErrors.value = {};
      router.put(route("admin.about-us.cta.update"), {
        title: ctaForm.title,
        description: ctaForm.description,
        cta_text: ctaForm.cta_text,
        cta_link: ctaForm.cta_link,
        background_color: ctaForm.background_color,
        is_active: ctaForm.is_active
      }, {
        onSuccess: () => {
          ctaProcessing.value = false;
        },
        onError: (errors) => {
          ctaErrors.value = errors;
          ctaProcessing.value = false;
        }
      });
    };
    const updateSeoSettings = () => {
      seoProcessing.value = true;
      seoErrors.value = {};
      router.put(route("admin.about-us.seo.update"), {
        title: seoForm.title,
        description: seoForm.description,
        keywords: seoForm.keywords,
        og_title: seoForm.og_title,
        og_description: seoForm.og_description,
        og_url: seoForm.og_url,
        twitter_card: seoForm.twitter_card,
        twitter_title: seoForm.twitter_title,
        twitter_description: seoForm.twitter_description,
        custom_head_tags: seoForm.custom_head_tags,
        is_active: seoForm.is_active
      }, {
        onSuccess: () => {
          seoProcessing.value = false;
        },
        onError: (errors) => {
          seoErrors.value = errors;
          seoProcessing.value = false;
        }
      });
    };
    const handleSeoImageUpload = (event, type) => {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        if (type === "og_image") {
          ogImagePreview.value = e.target.result;
        } else if (type === "twitter_image") {
          twitterImagePreview.value = e.target.result;
        }
      };
      reader.readAsDataURL(file);
      const formData = new FormData();
      formData.append("image", file);
      formData.append("type", type);
      router.post(route("admin.about-us.seo.image.upload"), formData, {
        onSuccess: () => {
          if (type === "og_image") {
            ogImagePreview.value = null;
          } else if (type === "twitter_image") {
            twitterImagePreview.value = null;
          }
          window.location.reload();
        },
        onError: (formErrors) => {
          seoErrors.value = formErrors;
          if (type === "og_image") {
            ogImagePreview.value = null;
          } else if (type === "twitter_image") {
            twitterImagePreview.value = null;
          }
        }
      });
    };
    const deleteSeoImage = (type) => {
      if (confirm(`Are you sure you want to delete this ${type.replace("_", " ")}?`)) {
        router.delete(route("admin.about-us.seo.image.delete", { type }), {
          onSuccess: () => {
            window.location.reload();
          }
        });
      }
    };
    const uploadCTABackground = (event) => {
      const file = event.target.files[0];
      if (!file) return;
      const formData = new FormData();
      formData.append("background_image", file);
      router.post(route("admin.about-us.cta.background.upload"), formData, {
        forceFormData: true,
        onSuccess: () => {
          event.target.value = "";
        },
        onError: (errors) => {
          console.error("Upload failed:", errors);
          event.target.value = "";
        }
      });
    };
    const deleteCTABackground = () => {
      if (confirm("Are you sure you want to delete the background image?")) {
        router.delete(route("admin.about-us.cta.background.delete"));
      }
    };
    onMounted(() => {
      const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -80% 0px",
        threshold: 0
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id;
          }
        });
      }, observerOptions);
      sections.value.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.observe(element);
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AdminLayout, mergeProps({
        "page-title": "About Us Management",
        "page-subtitle": "Manage your website's About Us page content"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm mb-8" data-v-6225c687${_scopeId}><div class="mx-auto" data-v-6225c687${_scopeId}><nav class="flex space-x-8 overflow-x-auto py-4 px-0" data-v-6225c687${_scopeId}><!--[-->`);
            ssrRenderList(sections.value, (section) => {
              _push2(`<button class="${ssrRenderClass([
                "whitespace-nowrap px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 flex items-center space-x-2",
                activeSection.value === section.id ? "bg-blue-100 text-blue-700 border-blue-200 border" : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              ])}" data-v-6225c687${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}>${section.icon ?? ""}</svg><span data-v-6225c687${_scopeId}>${ssrInterpolate(section.name)}</span></button>`);
            });
            _push2(`<!--]--></nav></div></div><div id="seo-settings" class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8" data-v-6225c687${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-6225c687${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-6225c687${_scopeId}>SEO Settings</h2><p class="text-sm text-gray-600 mt-1" data-v-6225c687${_scopeId}>Manage meta tags, Open Graph, and Twitter Card settings for better SEO</p></div><div class="p-6" data-v-6225c687${_scopeId}><form data-v-6225c687${_scopeId}><div class="space-y-6" data-v-6225c687${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-6225c687${_scopeId}><div data-v-6225c687${_scopeId}><label for="seo_title" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Page Title <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><input type="text" id="seo_title"${ssrRenderAttr("value", seoForm.title)} placeholder="Enter page title" class="${ssrRenderClass([{ "border-red-500": seoErrors.value.title }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
            if (seoErrors.value.title) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(seoErrors.value.title)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center" data-v-6225c687${_scopeId}><label class="relative inline-flex items-center cursor-pointer" data-v-6225c687${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(seoForm.is_active) ? ssrLooseContain(seoForm.is_active, null) : seoForm.is_active) ? " checked" : ""} class="sr-only peer" data-v-6225c687${_scopeId}><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" data-v-6225c687${_scopeId}></div><span class="ml-3 text-sm font-medium text-gray-700" data-v-6225c687${_scopeId}>SEO Settings Active</span></label></div></div><div data-v-6225c687${_scopeId}><label for="seo_description" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Meta Description <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><textarea id="seo_description" rows="3" placeholder="Enter meta description (150-160 characters recommended)" class="${ssrRenderClass([{ "border-red-500": seoErrors.value.description }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"])}" data-v-6225c687${_scopeId}>${ssrInterpolate(seoForm.description)}</textarea>`);
            if (seoErrors.value.description) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(seoErrors.value.description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<p class="mt-1 text-xs text-gray-500" data-v-6225c687${_scopeId}>${ssrInterpolate(seoForm.description?.length || 0)}/160 characters</p></div><div data-v-6225c687${_scopeId}><label for="seo_keywords" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Keywords </label><input type="text" id="seo_keywords"${ssrRenderAttr("value", seoForm.keywords)} placeholder="Enter keywords separated by commas" class="${ssrRenderClass([{ "border-red-500": seoErrors.value.keywords }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
            if (seoErrors.value.keywords) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(seoErrors.value.keywords)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<p class="mt-1 text-xs text-gray-500" data-v-6225c687${_scopeId}>Separate keywords with commas</p></div><div class="border-t border-gray-200 pt-6" data-v-6225c687${_scopeId}><h3 class="text-md font-medium text-gray-900 mb-4" data-v-6225c687${_scopeId}>Open Graph Settings</h3><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-6225c687${_scopeId}><div data-v-6225c687${_scopeId}><label for="og_title" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> OG Title </label><input type="text" id="og_title"${ssrRenderAttr("value", seoForm.og_title)} placeholder="Leave empty to use page title" class="${ssrRenderClass([{ "border-red-500": seoErrors.value.og_title }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
            if (seoErrors.value.og_title) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(seoErrors.value.og_title)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-6225c687${_scopeId}><label for="og_url" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> OG URL </label><input type="url" id="og_url"${ssrRenderAttr("value", seoForm.og_url)} placeholder="https://www.sinki.ai/about" class="${ssrRenderClass([{ "border-red-500": seoErrors.value.og_url }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
            if (seoErrors.value.og_url) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(seoErrors.value.og_url)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="lg:col-span-2" data-v-6225c687${_scopeId}><label for="og_description" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> OG Description </label><textarea id="og_description" rows="2" placeholder="Leave empty to use meta description" class="${ssrRenderClass([{ "border-red-500": seoErrors.value.og_description }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"])}" data-v-6225c687${_scopeId}>${ssrInterpolate(seoForm.og_description)}</textarea>`);
            if (seoErrors.value.og_description) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(seoErrors.value.og_description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="mt-6" data-v-6225c687${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Open Graph Image </label><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-6225c687${_scopeId}><div data-v-6225c687${_scopeId}><input type="file" id="og_image_upload" accept="image/*" class="hidden" data-v-6225c687${_scopeId}><label for="og_image_upload" class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100" data-v-6225c687${_scopeId}><div class="flex flex-col items-center justify-center pt-5 pb-6" data-v-6225c687${_scopeId}><svg class="w-8 h-8 mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" data-v-6225c687${_scopeId}></path></svg><p class="mb-2 text-sm text-gray-500" data-v-6225c687${_scopeId}>Upload OG Image</p><p class="text-xs text-gray-500" data-v-6225c687${_scopeId}>1200x630px recommended</p></div></label></div><div data-v-6225c687${_scopeId}><div class="aspect-[1200/630] bg-gray-100 rounded-lg overflow-hidden" data-v-6225c687${_scopeId}>`);
            if (ogImagePreview.value || __props.seoSettings?.og_image_url) {
              _push2(`<div class="w-full h-full relative group" data-v-6225c687${_scopeId}><img${ssrRenderAttr("src", ogImagePreview.value || __props.seoSettings?.og_image_url)} alt="Open Graph image preview" class="w-full h-full object-cover" data-v-6225c687${_scopeId}><div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center" data-v-6225c687${_scopeId}><button type="button" class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors" data-v-6225c687${_scopeId}> Delete Image </button></div></div>`);
            } else {
              _push2(`<div class="w-full h-full flex items-center justify-center text-gray-400" data-v-6225c687${_scopeId}><svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" data-v-6225c687${_scopeId}></path></svg></div>`);
            }
            _push2(`</div></div></div></div></div><div class="border-t border-gray-200 pt-6" data-v-6225c687${_scopeId}><h3 class="text-md font-medium text-gray-900 mb-4" data-v-6225c687${_scopeId}>Twitter Card Settings</h3><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-6225c687${_scopeId}><div data-v-6225c687${_scopeId}><label for="twitter_card" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Card Type </label><select id="twitter_card" class="${ssrRenderClass([{ "border-red-500": seoErrors.value.twitter_card }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}><option value="summary" data-v-6225c687${ssrIncludeBooleanAttr(Array.isArray(seoForm.twitter_card) ? ssrLooseContain(seoForm.twitter_card, "summary") : ssrLooseEqual(seoForm.twitter_card, "summary")) ? " selected" : ""}${_scopeId}>Summary</option><option value="summary_large_image" data-v-6225c687${ssrIncludeBooleanAttr(Array.isArray(seoForm.twitter_card) ? ssrLooseContain(seoForm.twitter_card, "summary_large_image") : ssrLooseEqual(seoForm.twitter_card, "summary_large_image")) ? " selected" : ""}${_scopeId}>Summary Large Image</option><option value="app" data-v-6225c687${ssrIncludeBooleanAttr(Array.isArray(seoForm.twitter_card) ? ssrLooseContain(seoForm.twitter_card, "app") : ssrLooseEqual(seoForm.twitter_card, "app")) ? " selected" : ""}${_scopeId}>App</option><option value="player" data-v-6225c687${ssrIncludeBooleanAttr(Array.isArray(seoForm.twitter_card) ? ssrLooseContain(seoForm.twitter_card, "player") : ssrLooseEqual(seoForm.twitter_card, "player")) ? " selected" : ""}${_scopeId}>Player</option></select>`);
            if (seoErrors.value.twitter_card) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(seoErrors.value.twitter_card)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-6225c687${_scopeId}><label for="twitter_title" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Twitter Title </label><input type="text" id="twitter_title"${ssrRenderAttr("value", seoForm.twitter_title)} placeholder="Leave empty to use OG title" class="${ssrRenderClass([{ "border-red-500": seoErrors.value.twitter_title }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
            if (seoErrors.value.twitter_title) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(seoErrors.value.twitter_title)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="lg:col-span-2" data-v-6225c687${_scopeId}><label for="twitter_description" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Twitter Description </label><textarea id="twitter_description" rows="2" placeholder="Leave empty to use OG description" class="${ssrRenderClass([{ "border-red-500": seoErrors.value.twitter_description }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"])}" data-v-6225c687${_scopeId}>${ssrInterpolate(seoForm.twitter_description)}</textarea>`);
            if (seoErrors.value.twitter_description) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(seoErrors.value.twitter_description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="mt-6" data-v-6225c687${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Twitter Image </label><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-6225c687${_scopeId}><div data-v-6225c687${_scopeId}><input type="file" id="twitter_image_upload" accept="image/*" class="hidden" data-v-6225c687${_scopeId}><label for="twitter_image_upload" class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100" data-v-6225c687${_scopeId}><div class="flex flex-col items-center justify-center pt-5 pb-6" data-v-6225c687${_scopeId}><svg class="w-8 h-8 mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" data-v-6225c687${_scopeId}></path></svg><p class="mb-2 text-sm text-gray-500" data-v-6225c687${_scopeId}>Upload Twitter Image</p><p class="text-xs text-gray-500" data-v-6225c687${_scopeId}>1200x675px recommended</p></div></label></div><div data-v-6225c687${_scopeId}><div class="aspect-[1200/675] bg-gray-100 rounded-lg overflow-hidden" data-v-6225c687${_scopeId}>`);
            if (twitterImagePreview.value || __props.seoSettings?.twitter_image_url) {
              _push2(`<div class="w-full h-full relative group" data-v-6225c687${_scopeId}><img${ssrRenderAttr("src", twitterImagePreview.value || __props.seoSettings?.twitter_image_url)} alt="Twitter image preview" class="w-full h-full object-cover" data-v-6225c687${_scopeId}><div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center" data-v-6225c687${_scopeId}><button type="button" class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors" data-v-6225c687${_scopeId}> Delete Image </button></div></div>`);
            } else {
              _push2(`<div class="w-full h-full flex items-center justify-center text-gray-400" data-v-6225c687${_scopeId}><svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" data-v-6225c687${_scopeId}></path></svg></div>`);
            }
            _push2(`</div></div></div></div></div><div class="border-t border-gray-200 pt-6" data-v-6225c687${_scopeId}><h3 class="text-md font-medium text-gray-900 mb-4" data-v-6225c687${_scopeId}>Advanced Settings</h3><div data-v-6225c687${_scopeId}><label for="custom_head_tags" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Custom Head Tags </label><textarea id="custom_head_tags" rows="4" placeholder="Enter custom meta tags, schema markup, or other head elements" class="${ssrRenderClass([{ "border-red-500": seoErrors.value.custom_head_tags }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none font-mono text-sm"])}" data-v-6225c687${_scopeId}>${ssrInterpolate(seoForm.custom_head_tags)}</textarea>`);
            if (seoErrors.value.custom_head_tags) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(seoErrors.value.custom_head_tags)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<p class="mt-1 text-xs text-gray-500" data-v-6225c687${_scopeId}>Add custom HTML tags that will be inserted in the &lt;head&gt; section</p></div></div><div class="pt-6 border-t border-gray-200" data-v-6225c687${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(seoProcessing.value) ? " disabled" : ""} class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150" data-v-6225c687${_scopeId}>`);
            if (seoProcessing.value) {
              _push2(`<svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-6225c687${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-6225c687${_scopeId}></path></svg>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(seoProcessing.value ? "Updating..." : "Update SEO Settings")}</button></div></div></form></div></div><div id="hero-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8" data-v-6225c687${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-6225c687${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-6225c687${_scopeId}>Hero Section</h2><p class="text-sm text-gray-600 mt-1" data-v-6225c687${_scopeId}>Manage the main hero section with background image, heading, paragraph and call-to-action</p></div><div class="p-6" data-v-6225c687${_scopeId}><form data-v-6225c687${_scopeId}><div class="space-y-6" data-v-6225c687${_scopeId}><div data-v-6225c687${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Background Image </label>`);
            if (__props.heroSection?.background_image) {
              _push2(`<div class="mb-4" data-v-6225c687${_scopeId}><div class="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden" data-v-6225c687${_scopeId}><img${ssrRenderAttr("src", `/storage/${__props.heroSection.background_image}`)} alt="Hero background" class="w-full h-full object-cover" data-v-6225c687${_scopeId}><div class="absolute top-2 right-2" data-v-6225c687${_scopeId}><button type="button" class="bg-red-600 text-white p-1 rounded-full hover:bg-red-700 transition-colors" data-v-6225c687${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-6225c687${_scopeId}></path></svg></button></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center justify-center w-full" data-v-6225c687${_scopeId}><label for="hero-image-upload" class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100" data-v-6225c687${_scopeId}><div class="flex flex-col items-center justify-center pt-5 pb-6" data-v-6225c687${_scopeId}><svg class="w-8 h-8 mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" data-v-6225c687${_scopeId}></path></svg><p class="mb-2 text-sm text-gray-500" data-v-6225c687${_scopeId}><span class="font-semibold" data-v-6225c687${_scopeId}>Click to upload</span> background image </p><p class="text-xs text-gray-500" data-v-6225c687${_scopeId}>PNG, JPG or GIF (MAX. 2MB)</p></div><input id="hero-image-upload" type="file" class="hidden" accept="image/*" data-v-6225c687${_scopeId}></label></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-6225c687${_scopeId}><div data-v-6225c687${_scopeId}><label for="hero_heading" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Heading <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><input type="text" id="hero_heading"${ssrRenderAttr("value", heroForm.heading)} placeholder="Enter hero heading" class="${ssrRenderClass([{ "border-red-500": heroErrors.value.heading }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
            if (heroErrors.value.heading) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(heroErrors.value.heading)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center" data-v-6225c687${_scopeId}><label class="relative inline-flex items-center cursor-pointer" data-v-6225c687${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(heroForm.is_active) ? ssrLooseContain(heroForm.is_active, null) : heroForm.is_active) ? " checked" : ""} class="sr-only peer" data-v-6225c687${_scopeId}><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" data-v-6225c687${_scopeId}></div><span class="ml-3 text-sm font-medium text-gray-700" data-v-6225c687${_scopeId}>Hero Section Active</span></label></div></div><div data-v-6225c687${_scopeId}><label for="hero_paragraph" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Paragraph <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><textarea id="hero_paragraph" rows="4" placeholder="Enter hero paragraph content" class="${ssrRenderClass([{ "border-red-500": heroErrors.value.paragraph }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"])}" data-v-6225c687${_scopeId}>${ssrInterpolate(heroForm.paragraph)}</textarea>`);
            if (heroErrors.value.paragraph) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(heroErrors.value.paragraph)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-6225c687${_scopeId}><div data-v-6225c687${_scopeId}><label for="hero_cta_text" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Call-to-Action Text </label><input type="text" id="hero_cta_text"${ssrRenderAttr("value", heroForm.cta_text)} placeholder="e.g., Get Started" class="${ssrRenderClass([{ "border-red-500": heroErrors.value.cta_text }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
            if (heroErrors.value.cta_text) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(heroErrors.value.cta_text)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-6225c687${_scopeId}><label for="hero_cta_link" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Call-to-Action Link </label><input type="url" id="hero_cta_link"${ssrRenderAttr("value", heroForm.cta_link)} placeholder="https://example.com" class="${ssrRenderClass([{ "border-red-500": heroErrors.value.cta_link }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
            if (heroErrors.value.cta_link) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(heroErrors.value.cta_link)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="flex justify-end" data-v-6225c687${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(heroProcessing.value) ? " disabled" : ""} class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed" data-v-6225c687${_scopeId}>`);
            if (heroProcessing.value) {
              _push2(`<span class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" data-v-6225c687${_scopeId}></span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(heroProcessing.value ? "Saving..." : "Save Hero Section")}</button></div></div></form></div></div><div id="partner-badge-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8" data-v-6225c687${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-6225c687${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-6225c687${_scopeId}>Partner Badge Section</h2><p class="text-sm text-gray-600 mt-1" data-v-6225c687${_scopeId}>Manage the partner badge text and logo display</p></div><div class="p-6" data-v-6225c687${_scopeId}><form data-v-6225c687${_scopeId}><div class="space-y-6" data-v-6225c687${_scopeId}><div data-v-6225c687${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Partner Logo </label>`);
            if (__props.partnerBadge?.logo_image) {
              _push2(`<div class="mb-4" data-v-6225c687${_scopeId}><div class="relative w-32 h-16 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center" data-v-6225c687${_scopeId}><img${ssrRenderAttr("src", `/storage/${__props.partnerBadge.logo_image}`)}${ssrRenderAttr("alt", partnerForm.logo_alt)} class="max-w-full max-h-full object-contain" data-v-6225c687${_scopeId}><div class="absolute top-1 right-1" data-v-6225c687${_scopeId}><button type="button" class="bg-red-600 text-white p-1 rounded-full hover:bg-red-700 transition-colors" data-v-6225c687${_scopeId}><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-6225c687${_scopeId}></path></svg></button></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center justify-center w-full" data-v-6225c687${_scopeId}><label for="partner-logo-upload" class="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100" data-v-6225c687${_scopeId}><div class="flex flex-col items-center justify-center pt-3 pb-3" data-v-6225c687${_scopeId}><svg class="w-6 h-6 mb-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" data-v-6225c687${_scopeId}></path></svg><p class="text-xs text-gray-500" data-v-6225c687${_scopeId}><span class="font-semibold" data-v-6225c687${_scopeId}>Click to upload</span> partner logo </p><p class="text-xs text-gray-500" data-v-6225c687${_scopeId}>PNG, JPG or SVG (MAX. 2MB)</p></div><input id="partner-logo-upload" type="file" class="hidden" accept="image/*" data-v-6225c687${_scopeId}></label></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-6225c687${_scopeId}><div data-v-6225c687${_scopeId}><label for="partner_text" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Badge Text <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><input type="text" id="partner_text"${ssrRenderAttr("value", partnerForm.text)} placeholder="e.g., An Official Databricks Partner" class="${ssrRenderClass([{ "border-red-500": partnerErrors.value.text }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
            if (partnerErrors.value.text) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(partnerErrors.value.text)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center" data-v-6225c687${_scopeId}><label class="relative inline-flex items-center cursor-pointer" data-v-6225c687${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(partnerForm.is_active) ? ssrLooseContain(partnerForm.is_active, null) : partnerForm.is_active) ? " checked" : ""} class="sr-only peer" data-v-6225c687${_scopeId}><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" data-v-6225c687${_scopeId}></div><span class="ml-3 text-sm font-medium text-gray-700" data-v-6225c687${_scopeId}>Partner Badge Active</span></label></div></div><div data-v-6225c687${_scopeId}><label for="partner_logo_alt" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Logo Alt Text </label><input type="text" id="partner_logo_alt"${ssrRenderAttr("value", partnerForm.logo_alt)} placeholder="e.g., Databricks Logo" class="${ssrRenderClass([{ "border-red-500": partnerErrors.value.logo_alt }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
            if (partnerErrors.value.logo_alt) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(partnerErrors.value.logo_alt)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex justify-end" data-v-6225c687${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(partnerProcessing.value) ? " disabled" : ""} class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed" data-v-6225c687${_scopeId}>`);
            if (partnerProcessing.value) {
              _push2(`<span class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" data-v-6225c687${_scopeId}></span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(partnerProcessing.value ? "Saving..." : "Save Partner Badge")}</button></div></div></form></div></div><div id="story-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8" data-v-6225c687${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-6225c687${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-6225c687${_scopeId}>Story Section</h2><p class="text-sm text-gray-600 mt-1" data-v-6225c687${_scopeId}>Manage the about story content with image, title, and descriptions</p></div><div class="p-6" data-v-6225c687${_scopeId}><form data-v-6225c687${_scopeId}><div class="space-y-6" data-v-6225c687${_scopeId}><div data-v-6225c687${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Story Image </label>`);
            if (__props.storySection?.image_path) {
              _push2(`<div class="mb-4" data-v-6225c687${_scopeId}><div class="relative w-48 h-32 bg-gray-100 rounded-lg overflow-hidden" data-v-6225c687${_scopeId}><img${ssrRenderAttr("src", `/storage/${__props.storySection.image_path}`)}${ssrRenderAttr("alt", storyForm.image_alt)} class="w-full h-full object-cover" data-v-6225c687${_scopeId}><div class="absolute top-2 right-2" data-v-6225c687${_scopeId}><button type="button" class="bg-red-600 text-white p-1 rounded-full hover:bg-red-700 transition-colors" data-v-6225c687${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-6225c687${_scopeId}></path></svg></button></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center justify-center w-full" data-v-6225c687${_scopeId}><label for="story-image-upload" class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100" data-v-6225c687${_scopeId}><div class="flex flex-col items-center justify-center pt-5 pb-6" data-v-6225c687${_scopeId}><svg class="w-8 h-8 mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" data-v-6225c687${_scopeId}></path></svg><p class="mb-2 text-sm text-gray-500" data-v-6225c687${_scopeId}><span class="font-semibold" data-v-6225c687${_scopeId}>Click to upload</span> story image </p><p class="text-xs text-gray-500" data-v-6225c687${_scopeId}>PNG, JPG or GIF (MAX. 2MB)</p></div><input id="story-image-upload" type="file" class="hidden" accept="image/*" data-v-6225c687${_scopeId}></label></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-6225c687${_scopeId}><div data-v-6225c687${_scopeId}><label for="story_header_tag" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Header Tag <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><input type="text" id="story_header_tag"${ssrRenderAttr("value", storyForm.header_tag)} placeholder="e.g., OUR STORY" class="${ssrRenderClass([{ "border-red-500": storyErrors.value.header_tag }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
            if (storyErrors.value.header_tag) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(storyErrors.value.header_tag)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center" data-v-6225c687${_scopeId}><label class="relative inline-flex items-center cursor-pointer" data-v-6225c687${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(storyForm.is_active) ? ssrLooseContain(storyForm.is_active, null) : storyForm.is_active) ? " checked" : ""} class="sr-only peer" data-v-6225c687${_scopeId}><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" data-v-6225c687${_scopeId}></div><span class="ml-3 text-sm font-medium text-gray-700" data-v-6225c687${_scopeId}>Story Section Active</span></label></div></div><div data-v-6225c687${_scopeId}><label for="story_title" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Title <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><input type="text" id="story_title"${ssrRenderAttr("value", storyForm.title)} placeholder="e.g., Sinki, a Name with a Purpose" class="${ssrRenderClass([{ "border-red-500": storyErrors.value.title }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
            if (storyErrors.value.title) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(storyErrors.value.title)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-6225c687${_scopeId}><label for="story_subtitle" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Subtitle (Optional) </label><input type="text" id="story_subtitle"${ssrRenderAttr("value", storyForm.subtitle)} placeholder="Optional subtitle text" class="${ssrRenderClass([{ "border-red-500": storyErrors.value.subtitle }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
            if (storyErrors.value.subtitle) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(storyErrors.value.subtitle)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-6225c687${_scopeId}><div class="flex justify-between items-center mb-2" data-v-6225c687${_scopeId}><label class="block text-sm font-medium text-gray-700" data-v-6225c687${_scopeId}> Description Paragraphs <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><button type="button" class="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red" data-v-6225c687${_scopeId}><svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" data-v-6225c687${_scopeId}></path></svg> Add Paragraph </button></div><div class="space-y-4" data-v-6225c687${_scopeId}><!--[-->`);
            ssrRenderList(storyForm.descriptions, (description, index) => {
              _push2(`<div class="relative" data-v-6225c687${_scopeId}><div class="flex items-start space-x-2" data-v-6225c687${_scopeId}><div class="flex-1" data-v-6225c687${_scopeId}><textarea rows="3"${ssrRenderAttr("placeholder", `Paragraph ${index + 1} - You can use HTML tags like <em> and <strong>`)} class="${ssrRenderClass([{ "border-red-500": storyErrors.value[`descriptions.${index}`] }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"])}" data-v-6225c687${_scopeId}>${ssrInterpolate(storyForm.descriptions[index])}</textarea>`);
              if (storyErrors.value[`descriptions.${index}`]) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(storyErrors.value[`descriptions.${index}`])}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (storyForm.descriptions.length > 1) {
                _push2(`<button type="button" class="flex-shrink-0 mt-2 p-1 text-red-600 hover:text-red-800 transition-colors" data-v-6225c687${_scopeId}><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-v-6225c687${_scopeId}></path></svg></button>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6" data-v-6225c687${_scopeId}><div data-v-6225c687${_scopeId}><label for="story_image_alt" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Image Alt Text </label><input type="text" id="story_image_alt"${ssrRenderAttr("value", storyForm.image_alt)} placeholder="e.g., Helsinki city representing our inspiration" class="${ssrRenderClass([{ "border-red-500": storyErrors.value.image_alt }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
            if (storyErrors.value.image_alt) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(storyErrors.value.image_alt)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-6225c687${_scopeId}><label for="story_image_position" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Image Position <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><select id="story_image_position" class="${ssrRenderClass([{ "border-red-500": storyErrors.value.image_position }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}><option value="left" data-v-6225c687${ssrIncludeBooleanAttr(Array.isArray(storyForm.image_position) ? ssrLooseContain(storyForm.image_position, "left") : ssrLooseEqual(storyForm.image_position, "left")) ? " selected" : ""}${_scopeId}>Left</option><option value="right" data-v-6225c687${ssrIncludeBooleanAttr(Array.isArray(storyForm.image_position) ? ssrLooseContain(storyForm.image_position, "right") : ssrLooseEqual(storyForm.image_position, "right")) ? " selected" : ""}${_scopeId}>Right</option></select>`);
            if (storyErrors.value.image_position) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(storyErrors.value.image_position)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-6225c687${_scopeId}><label for="story_background_color" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Background Color <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><select id="story_background_color" class="${ssrRenderClass([{ "border-red-500": storyErrors.value.background_color }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}><option value="bg-white" data-v-6225c687${ssrIncludeBooleanAttr(Array.isArray(storyForm.background_color) ? ssrLooseContain(storyForm.background_color, "bg-white") : ssrLooseEqual(storyForm.background_color, "bg-white")) ? " selected" : ""}${_scopeId}>White</option><option value="bg-gray-50" data-v-6225c687${ssrIncludeBooleanAttr(Array.isArray(storyForm.background_color) ? ssrLooseContain(storyForm.background_color, "bg-gray-50") : ssrLooseEqual(storyForm.background_color, "bg-gray-50")) ? " selected" : ""}${_scopeId}>Light Gray</option><option value="bg-gray-100" data-v-6225c687${ssrIncludeBooleanAttr(Array.isArray(storyForm.background_color) ? ssrLooseContain(storyForm.background_color, "bg-gray-100") : ssrLooseEqual(storyForm.background_color, "bg-gray-100")) ? " selected" : ""}${_scopeId}>Gray</option><option value="bg-blue-50" data-v-6225c687${ssrIncludeBooleanAttr(Array.isArray(storyForm.background_color) ? ssrLooseContain(storyForm.background_color, "bg-blue-50") : ssrLooseEqual(storyForm.background_color, "bg-blue-50")) ? " selected" : ""}${_scopeId}>Light Blue</option><option value="bg-green-50" data-v-6225c687${ssrIncludeBooleanAttr(Array.isArray(storyForm.background_color) ? ssrLooseContain(storyForm.background_color, "bg-green-50") : ssrLooseEqual(storyForm.background_color, "bg-green-50")) ? " selected" : ""}${_scopeId}>Light Green</option></select>`);
            if (storyErrors.value.background_color) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(storyErrors.value.background_color)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="flex justify-end" data-v-6225c687${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(storyProcessing.value) ? " disabled" : ""} class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed" data-v-6225c687${_scopeId}>`);
            if (storyProcessing.value) {
              _push2(`<span class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" data-v-6225c687${_scopeId}></span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(storyProcessing.value ? "Saving..." : "Save Story Section")}</button></div></div></form></div></div><div id="what-we-do-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8" data-v-6225c687${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-6225c687${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-6225c687${_scopeId}>What We Do Section</h2><p class="text-sm text-gray-600 mt-1" data-v-6225c687${_scopeId}>Manage the what we do section header and background</p></div><div class="p-6" data-v-6225c687${_scopeId}><form data-v-6225c687${_scopeId}><div class="space-y-6" data-v-6225c687${_scopeId}><div data-v-6225c687${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Background Image </label>`);
            if (__props.whatWeDoSection?.background_image) {
              _push2(`<div class="mb-4" data-v-6225c687${_scopeId}><div class="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden" data-v-6225c687${_scopeId}><img${ssrRenderAttr("src", `/storage/${__props.whatWeDoSection.background_image}`)} alt="Background image" class="w-full h-full object-cover" data-v-6225c687${_scopeId}><div class="absolute top-2 right-2" data-v-6225c687${_scopeId}><button type="button" class="bg-red-600 text-white p-1 rounded-full hover:bg-red-700 transition-colors" data-v-6225c687${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-6225c687${_scopeId}></path></svg></button></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center justify-center w-full" data-v-6225c687${_scopeId}><label for="what-we-do-bg-upload" class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100" data-v-6225c687${_scopeId}><div class="flex flex-col items-center justify-center pt-5 pb-6" data-v-6225c687${_scopeId}><svg class="w-8 h-8 mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" data-v-6225c687${_scopeId}></path></svg><p class="mb-2 text-sm text-gray-500" data-v-6225c687${_scopeId}><span class="font-semibold" data-v-6225c687${_scopeId}>Click to upload</span> background image </p><p class="text-xs text-gray-500" data-v-6225c687${_scopeId}>PNG, JPG or GIF (MAX. 2MB)</p></div><input id="what-we-do-bg-upload" type="file" class="hidden" accept="image/*" data-v-6225c687${_scopeId}></label></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-6225c687${_scopeId}><div data-v-6225c687${_scopeId}><label for="what_we_do_header_tag" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Header Tag <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><input type="text" id="what_we_do_header_tag"${ssrRenderAttr("value", whatWeDoForm.header_tag)} placeholder="e.g., HOW WE HELP" class="${ssrRenderClass([{ "border-red-500": whatWeDoErrors.value.header_tag }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
            if (whatWeDoErrors.value.header_tag) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(whatWeDoErrors.value.header_tag)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center" data-v-6225c687${_scopeId}><label class="relative inline-flex items-center cursor-pointer" data-v-6225c687${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(whatWeDoForm.is_active) ? ssrLooseContain(whatWeDoForm.is_active, null) : whatWeDoForm.is_active) ? " checked" : ""} class="sr-only peer" data-v-6225c687${_scopeId}><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" data-v-6225c687${_scopeId}></div><span class="ml-3 text-sm font-medium text-gray-700" data-v-6225c687${_scopeId}>What We Do Section Active</span></label></div></div><div data-v-6225c687${_scopeId}><label for="what_we_do_title" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Title <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><input type="text" id="what_we_do_title"${ssrRenderAttr("value", whatWeDoForm.title)} placeholder="e.g., What We Do" class="${ssrRenderClass([{ "border-red-500": whatWeDoErrors.value.title }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
            if (whatWeDoErrors.value.title) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(whatWeDoErrors.value.title)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-6225c687${_scopeId}><label for="what_we_do_subtitle" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Subtitle <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><textarea id="what_we_do_subtitle" rows="2" placeholder="e.g., We help enterprises harness the full power of Databricks to unify data, analytics, and AI." class="${ssrRenderClass([{ "border-red-500": whatWeDoErrors.value.subtitle }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"])}" data-v-6225c687${_scopeId}>${ssrInterpolate(whatWeDoForm.subtitle)}</textarea>`);
            if (whatWeDoErrors.value.subtitle) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(whatWeDoErrors.value.subtitle)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="border border-gray-200 rounded-lg p-6" data-v-6225c687${_scopeId}><div class="flex justify-between items-center mb-4" data-v-6225c687${_scopeId}><h3 class="text-lg font-medium text-gray-900" data-v-6225c687${_scopeId}>Service Items</h3><button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-brand-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" data-v-6225c687${_scopeId}><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" data-v-6225c687${_scopeId}></path></svg> Add Service </button></div>`);
            if (__props.whatWeDoSection?.items?.length) {
              _push2(`<div class="space-y-4" data-v-6225c687${_scopeId}><!--[-->`);
              ssrRenderList(__props.whatWeDoSection.items, (item, index) => {
                _push2(`<div class="border border-gray-300 rounded-lg p-4 bg-gray-50" data-v-6225c687${_scopeId}><div class="flex items-start justify-between" data-v-6225c687${_scopeId}><div class="flex-1 min-w-0" data-v-6225c687${_scopeId}><div class="flex items-center space-x-3 mb-2" data-v-6225c687${_scopeId}><div class="flex-shrink-0" data-v-6225c687${_scopeId}><div class="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center" data-v-6225c687${_scopeId}><svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-6225c687${_scopeId}>${item.icon_svg ?? ""}</svg></div></div><div class="flex-1 min-w-0" data-v-6225c687${_scopeId}><h4 class="text-sm font-medium text-gray-900 truncate" data-v-6225c687${_scopeId}>${ssrInterpolate(item.title)}</h4><p class="text-xs text-gray-500" data-v-6225c687${_scopeId}>Sort Order: ${ssrInterpolate(item.sort_order)}</p></div><div class="flex items-center space-x-2" data-v-6225c687${_scopeId}><span class="${ssrRenderClass([item.is_active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800", "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"])}" data-v-6225c687${_scopeId}>${ssrInterpolate(item.is_active ? "Active" : "Inactive")}</span><button type="button" class="text-brand-red hover:text-red-700" data-v-6225c687${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" data-v-6225c687${_scopeId}></path></svg></button><button type="button" class="text-red-600 hover:text-red-800" data-v-6225c687${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-v-6225c687${_scopeId}></path></svg></button></div></div><p class="text-sm text-gray-600" data-v-6225c687${_scopeId}>${ssrInterpolate(item.description)}</p></div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="text-center py-8 text-gray-500" data-v-6225c687${_scopeId}><svg class="w-12 h-12 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-v-6225c687${_scopeId}></path></svg><p data-v-6225c687${_scopeId}>No service items found. Run the seeder or add services manually.</p></div>`);
            }
            _push2(`</div><div class="flex justify-end" data-v-6225c687${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(whatWeDoProcessing.value) ? " disabled" : ""} class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed" data-v-6225c687${_scopeId}>`);
            if (whatWeDoProcessing.value) {
              _push2(`<span class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" data-v-6225c687${_scopeId}></span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(whatWeDoProcessing.value ? "Saving..." : "Save What We Do Section")}</button></div></div></form></div></div><div id="approach-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8" data-v-6225c687${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-6225c687${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-6225c687${_scopeId}>Our Approach Section</h2><p class="text-sm text-gray-600 mt-1" data-v-6225c687${_scopeId}>Manage the approach section header and process steps</p></div><div class="p-6" data-v-6225c687${_scopeId}><form data-v-6225c687${_scopeId}><div class="space-y-6" data-v-6225c687${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-6225c687${_scopeId}><div data-v-6225c687${_scopeId}><label for="approach_header_tag" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Header Tag <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><input type="text" id="approach_header_tag"${ssrRenderAttr("value", approachForm.header_tag)} placeholder="e.g., HOW WE WORK" class="${ssrRenderClass([{ "border-red-500": approachErrors.value.header_tag }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
            if (approachErrors.value.header_tag) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(approachErrors.value.header_tag)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center" data-v-6225c687${_scopeId}><label class="relative inline-flex items-center cursor-pointer" data-v-6225c687${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(approachForm.is_active) ? ssrLooseContain(approachForm.is_active, null) : approachForm.is_active) ? " checked" : ""} class="sr-only peer" data-v-6225c687${_scopeId}><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" data-v-6225c687${_scopeId}></div><span class="ml-3 text-sm font-medium text-gray-700" data-v-6225c687${_scopeId}>Approach Section Active</span></label></div></div><div data-v-6225c687${_scopeId}><label for="approach_title" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Title <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><input type="text" id="approach_title"${ssrRenderAttr("value", approachForm.title)} placeholder="e.g., Our Data-First Approach" class="${ssrRenderClass([{ "border-red-500": approachErrors.value.title }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
            if (approachErrors.value.title) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(approachErrors.value.title)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-6225c687${_scopeId}><label for="approach_subtitle" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Subtitle <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><textarea id="approach_subtitle" rows="2" placeholder="e.g., How We Transform Your Data Vision Into Reality" class="${ssrRenderClass([{ "border-red-500": approachErrors.value.subtitle }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"])}" data-v-6225c687${_scopeId}>${ssrInterpolate(approachForm.subtitle)}</textarea>`);
            if (approachErrors.value.subtitle) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(approachErrors.value.subtitle)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-6225c687${_scopeId}><div data-v-6225c687${_scopeId}><label for="approach_cta_text" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Call-to-Action Text <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><input type="text" id="approach_cta_text"${ssrRenderAttr("value", approachForm.cta_text)} placeholder="e.g., Book A Discovery Session" class="${ssrRenderClass([{ "border-red-500": approachErrors.value.cta_text }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
            if (approachErrors.value.cta_text) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(approachErrors.value.cta_text)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-6225c687${_scopeId}><label for="approach_background_color" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Background Color </label><select id="approach_background_color" class="${ssrRenderClass([{ "border-red-500": approachErrors.value.background_color }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}><option value="bg-white" data-v-6225c687${ssrIncludeBooleanAttr(Array.isArray(approachForm.background_color) ? ssrLooseContain(approachForm.background_color, "bg-white") : ssrLooseEqual(approachForm.background_color, "bg-white")) ? " selected" : ""}${_scopeId}>White</option><option value="bg-gray-50" data-v-6225c687${ssrIncludeBooleanAttr(Array.isArray(approachForm.background_color) ? ssrLooseContain(approachForm.background_color, "bg-gray-50") : ssrLooseEqual(approachForm.background_color, "bg-gray-50")) ? " selected" : ""}${_scopeId}>Light Gray</option><option value="bg-gray-100" data-v-6225c687${ssrIncludeBooleanAttr(Array.isArray(approachForm.background_color) ? ssrLooseContain(approachForm.background_color, "bg-gray-100") : ssrLooseEqual(approachForm.background_color, "bg-gray-100")) ? " selected" : ""}${_scopeId}>Gray</option><option value="bg-blue-50" data-v-6225c687${ssrIncludeBooleanAttr(Array.isArray(approachForm.background_color) ? ssrLooseContain(approachForm.background_color, "bg-blue-50") : ssrLooseEqual(approachForm.background_color, "bg-blue-50")) ? " selected" : ""}${_scopeId}>Light Blue</option><option value="bg-green-50" data-v-6225c687${ssrIncludeBooleanAttr(Array.isArray(approachForm.background_color) ? ssrLooseContain(approachForm.background_color, "bg-green-50") : ssrLooseEqual(approachForm.background_color, "bg-green-50")) ? " selected" : ""}${_scopeId}>Light Green</option></select>`);
            if (approachErrors.value.background_color) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(approachErrors.value.background_color)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div data-v-6225c687${_scopeId}><label for="approach_cta_link" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Call-to-Action Link (Optional) </label><input type="url" id="approach_cta_link"${ssrRenderAttr("value", approachForm.cta_link)} placeholder="https://example.com" class="${ssrRenderClass([{ "border-red-500": approachErrors.value.cta_link }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
            if (approachErrors.value.cta_link) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(approachErrors.value.cta_link)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="border border-gray-200 rounded-lg p-6" data-v-6225c687${_scopeId}><div class="flex justify-between items-center mb-4" data-v-6225c687${_scopeId}><h3 class="text-lg font-medium text-gray-900" data-v-6225c687${_scopeId}>Approach Steps</h3><button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-brand-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" data-v-6225c687${_scopeId}><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" data-v-6225c687${_scopeId}></path></svg> Add Step </button></div>`);
            if (__props.approachSection?.steps?.length) {
              _push2(`<div class="space-y-4" data-v-6225c687${_scopeId}><!--[-->`);
              ssrRenderList(__props.approachSection.steps, (step, index) => {
                _push2(`<div class="border border-gray-300 rounded-lg p-4 bg-gray-50" data-v-6225c687${_scopeId}><div class="flex items-start justify-between" data-v-6225c687${_scopeId}><div class="flex-1 min-w-0" data-v-6225c687${_scopeId}><div class="flex items-center space-x-3 mb-2" data-v-6225c687${_scopeId}><div class="flex-shrink-0" data-v-6225c687${_scopeId}><div class="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center" data-v-6225c687${_scopeId}><span class="text-white font-bold text-sm" data-v-6225c687${_scopeId}>${ssrInterpolate(step.number)}</span></div></div><div class="flex-1 min-w-0" data-v-6225c687${_scopeId}><h4 class="text-sm font-medium text-gray-900 truncate" data-v-6225c687${_scopeId}>${ssrInterpolate(step.title)}</h4><p class="text-xs text-gray-500" data-v-6225c687${_scopeId}>Sort Order: ${ssrInterpolate(step.sort_order)}</p></div><div class="flex items-center space-x-2" data-v-6225c687${_scopeId}><span class="${ssrRenderClass([step.is_active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800", "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"])}" data-v-6225c687${_scopeId}>${ssrInterpolate(step.is_active ? "Active" : "Inactive")}</span><button type="button" class="text-brand-red hover:text-red-700" data-v-6225c687${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" data-v-6225c687${_scopeId}></path></svg></button><button type="button" class="text-red-600 hover:text-red-800" data-v-6225c687${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-v-6225c687${_scopeId}></path></svg></button></div></div><p class="text-sm text-gray-600 mb-1" data-v-6225c687${_scopeId}><strong data-v-6225c687${_scopeId}>Short:</strong> ${ssrInterpolate(step.short_description)}</p><p class="text-sm text-gray-600" data-v-6225c687${_scopeId}><strong data-v-6225c687${_scopeId}>Description:</strong> ${ssrInterpolate(step.description)}</p></div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="text-center py-8 text-gray-500" data-v-6225c687${_scopeId}><svg class="w-12 h-12 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-v-6225c687${_scopeId}></path></svg><p data-v-6225c687${_scopeId}>No approach steps found. Run the seeder or add steps manually.</p></div>`);
            }
            _push2(`</div><div class="flex justify-end" data-v-6225c687${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(approachProcessing.value) ? " disabled" : ""} class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed" data-v-6225c687${_scopeId}>`);
            if (approachProcessing.value) {
              _push2(`<span class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" data-v-6225c687${_scopeId}></span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(approachProcessing.value ? "Saving..." : "Save Approach Section")}</button></div></div></form></div></div><div id="leadership-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8" data-v-6225c687${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-6225c687${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-6225c687${_scopeId}>Leadership Section</h2><p class="text-sm text-gray-600 mt-1" data-v-6225c687${_scopeId}>Manage the leadership section header and team members</p></div><div class="p-6" data-v-6225c687${_scopeId}><form data-v-6225c687${_scopeId}><div class="space-y-6" data-v-6225c687${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-6225c687${_scopeId}><div data-v-6225c687${_scopeId}><label for="leadership_header_tag" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Header Tag <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><input type="text" id="leadership_header_tag"${ssrRenderAttr("value", leadershipForm.header_tag)} placeholder="e.g., OUR LEADERSHIP" class="${ssrRenderClass([{ "border-red-500": leadershipErrors.value.header_tag }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
            if (leadershipErrors.value.header_tag) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(leadershipErrors.value.header_tag)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center" data-v-6225c687${_scopeId}><label class="relative inline-flex items-center cursor-pointer" data-v-6225c687${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(leadershipForm.is_active) ? ssrLooseContain(leadershipForm.is_active, null) : leadershipForm.is_active) ? " checked" : ""} class="sr-only peer" data-v-6225c687${_scopeId}><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" data-v-6225c687${_scopeId}></div><span class="ml-3 text-sm font-medium text-gray-700" data-v-6225c687${_scopeId}>Leadership Section Active</span></label></div></div><div data-v-6225c687${_scopeId}><label for="leadership_title" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Title <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><input type="text" id="leadership_title"${ssrRenderAttr("value", leadershipForm.title)} placeholder="e.g., Visionaries Behind Sinki" class="${ssrRenderClass([{ "border-red-500": leadershipErrors.value.title }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
            if (leadershipErrors.value.title) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(leadershipErrors.value.title)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-6225c687${_scopeId}><label for="leadership_description" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Description <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><textarea id="leadership_description" rows="3" placeholder="e.g., Our leadership brings years of experience..." class="${ssrRenderClass([{ "border-red-500": leadershipErrors.value.description }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"])}" data-v-6225c687${_scopeId}>${ssrInterpolate(leadershipForm.description)}</textarea>`);
            if (leadershipErrors.value.description) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(leadershipErrors.value.description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-6225c687${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Background Image </label>`);
            if (__props.leadershipSection?.background_image) {
              _push2(`<div class="mb-4" data-v-6225c687${_scopeId}><div class="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden" data-v-6225c687${_scopeId}><img${ssrRenderAttr("src", `/storage/${__props.leadershipSection.background_image}`)} alt="Leadership background" class="w-full h-full object-cover" data-v-6225c687${_scopeId}><div class="absolute top-2 right-2" data-v-6225c687${_scopeId}><button type="button" class="bg-red-600 text-white p-1 rounded-full hover:bg-red-700 transition-colors" data-v-6225c687${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-6225c687${_scopeId}></path></svg></button></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<input type="file" accept="image/*" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-red file:text-white hover:file:bg-red-700" data-v-6225c687${_scopeId}><p class="mt-1 text-xs text-gray-500" data-v-6225c687${_scopeId}> Upload a background image for the leadership section. Recommended size: 1920x1080px. </p></div><div data-v-6225c687${_scopeId}><label for="leadership_background_color" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Background Color (Optional) </label><select id="leadership_background_color" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red" data-v-6225c687${_scopeId}><option value="" data-v-6225c687${ssrIncludeBooleanAttr(Array.isArray(leadershipForm.background_color) ? ssrLooseContain(leadershipForm.background_color, "") : ssrLooseEqual(leadershipForm.background_color, "")) ? " selected" : ""}${_scopeId}>Default</option><option value="bg-white" data-v-6225c687${ssrIncludeBooleanAttr(Array.isArray(leadershipForm.background_color) ? ssrLooseContain(leadershipForm.background_color, "bg-white") : ssrLooseEqual(leadershipForm.background_color, "bg-white")) ? " selected" : ""}${_scopeId}>White</option><option value="bg-gray-50" data-v-6225c687${ssrIncludeBooleanAttr(Array.isArray(leadershipForm.background_color) ? ssrLooseContain(leadershipForm.background_color, "bg-gray-50") : ssrLooseEqual(leadershipForm.background_color, "bg-gray-50")) ? " selected" : ""}${_scopeId}>Light Gray</option><option value="bg-gray-900" data-v-6225c687${ssrIncludeBooleanAttr(Array.isArray(leadershipForm.background_color) ? ssrLooseContain(leadershipForm.background_color, "bg-gray-900") : ssrLooseEqual(leadershipForm.background_color, "bg-gray-900")) ? " selected" : ""}${_scopeId}>Dark Gray</option><option value="bg-blue-50" data-v-6225c687${ssrIncludeBooleanAttr(Array.isArray(leadershipForm.background_color) ? ssrLooseContain(leadershipForm.background_color, "bg-blue-50") : ssrLooseEqual(leadershipForm.background_color, "bg-blue-50")) ? " selected" : ""}${_scopeId}>Light Blue</option><option value="bg-green-50" data-v-6225c687${ssrIncludeBooleanAttr(Array.isArray(leadershipForm.background_color) ? ssrLooseContain(leadershipForm.background_color, "bg-green-50") : ssrLooseEqual(leadershipForm.background_color, "bg-green-50")) ? " selected" : ""}${_scopeId}>Light Green</option></select></div><div class="border border-gray-200 rounded-lg p-6" data-v-6225c687${_scopeId}><div class="flex justify-between items-center mb-4" data-v-6225c687${_scopeId}><h3 class="text-lg font-medium text-gray-900" data-v-6225c687${_scopeId}>Team Members</h3><button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-brand-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" data-v-6225c687${_scopeId}><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" data-v-6225c687${_scopeId}></path></svg> Add Member </button></div>`);
            if (__props.leadershipSection?.members?.length) {
              _push2(`<div class="space-y-4" data-v-6225c687${_scopeId}><!--[-->`);
              ssrRenderList(__props.leadershipSection.members, (member, index) => {
                _push2(`<div class="border border-gray-300 rounded-lg p-4 bg-gray-50" data-v-6225c687${_scopeId}><div class="flex items-start justify-between" data-v-6225c687${_scopeId}><div class="flex items-start space-x-4 flex-1" data-v-6225c687${_scopeId}><div class="flex-shrink-0" data-v-6225c687${_scopeId}><div class="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden" data-v-6225c687${_scopeId}>`);
                if (member.image) {
                  _push2(`<img${ssrRenderAttr("src", `/storage/${member.image}`)}${ssrRenderAttr("alt", member.name)} class="w-full h-full object-cover" data-v-6225c687${_scopeId}>`);
                } else {
                  _push2(`<div class="w-full h-full flex items-center justify-center text-gray-400" data-v-6225c687${_scopeId}><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" data-v-6225c687${_scopeId}></path></svg></div>`);
                }
                _push2(`</div></div><div class="flex-1 min-w-0" data-v-6225c687${_scopeId}><div class="flex items-center space-x-3 mb-2" data-v-6225c687${_scopeId}><h4 class="text-sm font-medium text-gray-900 truncate" data-v-6225c687${_scopeId}>${ssrInterpolate(member.name)}</h4><span class="${ssrRenderClass([member.is_active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800", "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"])}" data-v-6225c687${_scopeId}>${ssrInterpolate(member.is_active ? "Active" : "Inactive")}</span></div><p class="text-sm text-gray-600 mb-1" data-v-6225c687${_scopeId}><strong data-v-6225c687${_scopeId}>Position:</strong> ${ssrInterpolate(member.position)}</p><p class="text-xs text-gray-500" data-v-6225c687${_scopeId}>Sort Order: ${ssrInterpolate(member.sort_order)}</p>`);
                if (member.bio) {
                  _push2(`<div class="mt-2" data-v-6225c687${_scopeId}><p class="text-sm text-gray-600" data-v-6225c687${_scopeId}><strong data-v-6225c687${_scopeId}>Bio:</strong> ${ssrInterpolate(member.bio.substring(0, 100))}${ssrInterpolate(member.bio.length > 100 ? "..." : "")}</p></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="flex items-center space-x-2 flex-shrink-0" data-v-6225c687${_scopeId}><button type="button" class="text-brand-red hover:text-red-700" data-v-6225c687${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" data-v-6225c687${_scopeId}></path></svg></button><button type="button" class="text-red-600 hover:text-red-800" data-v-6225c687${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-v-6225c687${_scopeId}></path></svg></button></div></div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="text-center py-8 text-gray-500" data-v-6225c687${_scopeId}><svg class="w-12 h-12 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" data-v-6225c687${_scopeId}></path></svg><p data-v-6225c687${_scopeId}>No team members found. Add the first member to get started.</p></div>`);
            }
            _push2(`</div><div class="flex justify-end" data-v-6225c687${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(leadershipProcessing.value) ? " disabled" : ""} class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed" data-v-6225c687${_scopeId}>`);
            if (leadershipProcessing.value) {
              _push2(`<span class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" data-v-6225c687${_scopeId}></span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(leadershipProcessing.value ? "Saving..." : "Save Leadership Section")}</button></div></div></form></div></div>`);
            if (showAddServiceModal.value) {
              _push2(`<div class="fixed inset-0 z-50 overflow-y-auto" data-v-6225c687${_scopeId}><div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" data-v-6225c687${_scopeId}><div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" data-v-6225c687${_scopeId}></div><div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" data-v-6225c687${_scopeId}><div class="sm:flex sm:items-start" data-v-6225c687${_scopeId}><div class="mt-3 text-center sm:mt-0 sm:text-left w-full" data-v-6225c687${_scopeId}><h3 class="text-lg leading-6 font-medium text-gray-900 mb-4" data-v-6225c687${_scopeId}>${ssrInterpolate(editingService.value ? "Edit Service Item" : "Add Service Item")}</h3><form data-v-6225c687${_scopeId}><div class="space-y-4" data-v-6225c687${_scopeId}><div data-v-6225c687${_scopeId}><label for="service-title" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Title </label><input id="service-title"${ssrRenderAttr("value", serviceForm.title)} type="text" required class="${ssrRenderClass([{ "border-red-500": serviceErrors.value.title }, "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
              if (serviceErrors.value.title) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(serviceErrors.value.title)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-6225c687${_scopeId}><label for="service-description" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Description </label><textarea id="service-description" rows="3" required class="${ssrRenderClass([{ "border-red-500": serviceErrors.value.description }, "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>${ssrInterpolate(serviceForm.description)}</textarea>`);
              if (serviceErrors.value.description) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(serviceErrors.value.description)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-6225c687${_scopeId}><label for="service-icon" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Icon SVG </label><textarea id="service-icon" rows="3" placeholder="&lt;path d=&#39;...&#39;/&gt;" class="${ssrRenderClass([{ "border-red-500": serviceErrors.value.icon_svg }, "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red font-mono"])}" data-v-6225c687${_scopeId}>${ssrInterpolate(serviceForm.icon_svg)}</textarea>`);
              if (serviceErrors.value.icon_svg) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(serviceErrors.value.icon_svg)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<p class="mt-1 text-xs text-gray-500" data-v-6225c687${_scopeId}> Enter the path elements for the SVG icon (without &lt;svg&gt; wrapper) </p></div><div data-v-6225c687${_scopeId}><label for="service-sort-order" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Sort Order </label><input id="service-sort-order"${ssrRenderAttr("value", serviceForm.sort_order)} type="number" min="1" required class="${ssrRenderClass([{ "border-red-500": serviceErrors.value.sort_order }, "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
              if (serviceErrors.value.sort_order) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(serviceErrors.value.sort_order)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex items-center" data-v-6225c687${_scopeId}><input id="service-is-active"${ssrIncludeBooleanAttr(Array.isArray(serviceForm.is_active) ? ssrLooseContain(serviceForm.is_active, null) : serviceForm.is_active) ? " checked" : ""} type="checkbox" class="rounded border-gray-300 text-brand-red focus:ring-brand-red" data-v-6225c687${_scopeId}><label for="service-is-active" class="ml-2 block text-sm text-gray-700" data-v-6225c687${_scopeId}> Active </label></div></div><div class="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse" data-v-6225c687${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(serviceProcessing.value) ? " disabled" : ""} class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-brand-red text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50" data-v-6225c687${_scopeId}>`);
              if (serviceProcessing.value) {
                _push2(`<span class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" data-v-6225c687${_scopeId}></span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(` ${ssrInterpolate(serviceProcessing.value ? "Saving..." : editingService.value ? "Update" : "Add")} Service </button><button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:mt-0 sm:w-auto sm:text-sm" data-v-6225c687${_scopeId}> Cancel </button></div></form></div></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (showAddApproachStepModal.value) {
              _push2(`<div class="fixed inset-0 z-50 overflow-y-auto" data-v-6225c687${_scopeId}><div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" data-v-6225c687${_scopeId}><div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" data-v-6225c687${_scopeId}></div><div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" data-v-6225c687${_scopeId}><div class="sm:flex sm:items-start" data-v-6225c687${_scopeId}><div class="mt-3 text-center sm:mt-0 sm:text-left w-full" data-v-6225c687${_scopeId}><h3 class="text-lg leading-6 font-medium text-gray-900 mb-4" data-v-6225c687${_scopeId}>${ssrInterpolate(editingApproachStep.value ? "Edit Approach Step" : "Add Approach Step")}</h3><form data-v-6225c687${_scopeId}><div class="space-y-4" data-v-6225c687${_scopeId}><div data-v-6225c687${_scopeId}><label for="step-number" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Step Number </label><input id="step-number"${ssrRenderAttr("value", approachStepForm.number)} type="number" min="1" required class="${ssrRenderClass([{ "border-red-500": approachStepErrors.value.number }, "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
              if (approachStepErrors.value.number) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(approachStepErrors.value.number)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-6225c687${_scopeId}><label for="step-title" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Title </label><input id="step-title"${ssrRenderAttr("value", approachStepForm.title)} type="text" required class="${ssrRenderClass([{ "border-red-500": approachStepErrors.value.title }, "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
              if (approachStepErrors.value.title) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(approachStepErrors.value.title)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-6225c687${_scopeId}><label for="step-short-description" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Short Description </label><input id="step-short-description"${ssrRenderAttr("value", approachStepForm.short_description)} type="text" required class="${ssrRenderClass([{ "border-red-500": approachStepErrors.value.short_description }, "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
              if (approachStepErrors.value.short_description) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(approachStepErrors.value.short_description)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-6225c687${_scopeId}><label for="step-description" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Description </label><textarea id="step-description" rows="3" required class="${ssrRenderClass([{ "border-red-500": approachStepErrors.value.description }, "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>${ssrInterpolate(approachStepForm.description)}</textarea>`);
              if (approachStepErrors.value.description) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(approachStepErrors.value.description)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-6225c687${_scopeId}><label for="step-icon" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Icon SVG </label><textarea id="step-icon" rows="3" placeholder="&lt;path d=&#39;...&#39;/&gt;" class="${ssrRenderClass([{ "border-red-500": approachStepErrors.value.icon_svg }, "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red font-mono"])}" data-v-6225c687${_scopeId}>${ssrInterpolate(approachStepForm.icon_svg)}</textarea>`);
              if (approachStepErrors.value.icon_svg) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(approachStepErrors.value.icon_svg)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<p class="mt-1 text-xs text-gray-500" data-v-6225c687${_scopeId}> Enter the path elements for the SVG icon (without &lt;svg&gt; wrapper) </p></div><div data-v-6225c687${_scopeId}><label for="step-sort-order" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Sort Order </label><input id="step-sort-order"${ssrRenderAttr("value", approachStepForm.sort_order)} type="number" min="1" required class="${ssrRenderClass([{ "border-red-500": approachStepErrors.value.sort_order }, "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
              if (approachStepErrors.value.sort_order) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(approachStepErrors.value.sort_order)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex items-center" data-v-6225c687${_scopeId}><input id="step-is-active"${ssrIncludeBooleanAttr(Array.isArray(approachStepForm.is_active) ? ssrLooseContain(approachStepForm.is_active, null) : approachStepForm.is_active) ? " checked" : ""} type="checkbox" class="rounded border-gray-300 text-brand-red focus:ring-brand-red" data-v-6225c687${_scopeId}><label for="step-is-active" class="ml-2 block text-sm text-gray-700" data-v-6225c687${_scopeId}> Active </label></div></div><div class="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse" data-v-6225c687${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(approachStepProcessing.value) ? " disabled" : ""} class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-brand-red text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50" data-v-6225c687${_scopeId}>`);
              if (approachStepProcessing.value) {
                _push2(`<span class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" data-v-6225c687${_scopeId}></span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(` ${ssrInterpolate(approachStepProcessing.value ? "Saving..." : editingApproachStep.value ? "Update" : "Add")} Step </button><button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:mt-0 sm:w-auto sm:text-sm" data-v-6225c687${_scopeId}> Cancel </button></div></form></div></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (showAddLeadershipMemberModal.value) {
              _push2(`<div class="fixed inset-0 z-50 overflow-y-auto" data-v-6225c687${_scopeId}><div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" data-v-6225c687${_scopeId}><div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" data-v-6225c687${_scopeId}></div><div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" data-v-6225c687${_scopeId}><div class="sm:flex sm:items-start" data-v-6225c687${_scopeId}><div class="mt-3 text-center sm:mt-0 sm:text-left w-full" data-v-6225c687${_scopeId}><h3 class="text-lg leading-6 font-medium text-gray-900 mb-4" data-v-6225c687${_scopeId}>${ssrInterpolate(editingLeadershipMember.value ? "Edit Team Member" : "Add Team Member")}</h3><form data-v-6225c687${_scopeId}><div class="space-y-4" data-v-6225c687${_scopeId}><div data-v-6225c687${_scopeId}><label for="member-name" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Name <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><input id="member-name"${ssrRenderAttr("value", leadershipMemberForm.name)} type="text" required class="${ssrRenderClass([{ "border-red-500": leadershipMemberErrors.value.name }, "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
              if (leadershipMemberErrors.value.name) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(leadershipMemberErrors.value.name)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-6225c687${_scopeId}><label for="member-position" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Position <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><input id="member-position"${ssrRenderAttr("value", leadershipMemberForm.position)} type="text" required class="${ssrRenderClass([{ "border-red-500": leadershipMemberErrors.value.position }, "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
              if (leadershipMemberErrors.value.position) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(leadershipMemberErrors.value.position)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-6225c687${_scopeId}><label for="member-bio" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Bio (Optional) </label><textarea id="member-bio" rows="3" class="${ssrRenderClass([{ "border-red-500": leadershipMemberErrors.value.bio }, "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"])}" placeholder="Brief description of the team member" data-v-6225c687${_scopeId}>${ssrInterpolate(leadershipMemberForm.bio)}</textarea>`);
              if (leadershipMemberErrors.value.bio) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(leadershipMemberErrors.value.bio)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-6225c687${_scopeId}><label for="member-image" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Profile Image (Optional) </label><input id="member-image" type="file" accept="image/*" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-red file:text-white hover:file:bg-red-700" data-v-6225c687${_scopeId}>`);
              if (leadershipMemberErrors.value.image) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(leadershipMemberErrors.value.image)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<p class="mt-1 text-xs text-gray-500" data-v-6225c687${_scopeId}> Upload a profile image. Recommended size: 300x400px (3:4 aspect ratio). </p></div><div data-v-6225c687${_scopeId}><label for="member-linkedin" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> LinkedIn URL (Optional) </label><input id="member-linkedin"${ssrRenderAttr("value", leadershipMemberForm.linkedin_url)} type="url" class="${ssrRenderClass([{ "border-red-500": leadershipMemberErrors.value.linkedin_url }, "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"])}" placeholder="https://linkedin.com/in/username" data-v-6225c687${_scopeId}>`);
              if (leadershipMemberErrors.value.linkedin_url) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(leadershipMemberErrors.value.linkedin_url)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-6225c687${_scopeId}><label for="member-twitter" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Twitter URL (Optional) </label><input id="member-twitter"${ssrRenderAttr("value", leadershipMemberForm.twitter_url)} type="url" class="${ssrRenderClass([{ "border-red-500": leadershipMemberErrors.value.twitter_url }, "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"])}" placeholder="https://twitter.com/username" data-v-6225c687${_scopeId}>`);
              if (leadershipMemberErrors.value.twitter_url) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(leadershipMemberErrors.value.twitter_url)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-6225c687${_scopeId}><label for="member-sort-order" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Sort Order </label><input id="member-sort-order"${ssrRenderAttr("value", leadershipMemberForm.sort_order)} type="number" min="1" required class="${ssrRenderClass([{ "border-red-500": leadershipMemberErrors.value.sort_order }, "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
              if (leadershipMemberErrors.value.sort_order) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(leadershipMemberErrors.value.sort_order)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex items-center" data-v-6225c687${_scopeId}><input id="member-is-active"${ssrIncludeBooleanAttr(Array.isArray(leadershipMemberForm.is_active) ? ssrLooseContain(leadershipMemberForm.is_active, null) : leadershipMemberForm.is_active) ? " checked" : ""} type="checkbox" class="rounded border-gray-300 text-brand-red focus:ring-brand-red" data-v-6225c687${_scopeId}><label for="member-is-active" class="ml-2 block text-sm text-gray-700" data-v-6225c687${_scopeId}> Active </label></div></div><div class="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse" data-v-6225c687${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(leadershipMemberProcessing.value) ? " disabled" : ""} class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-brand-red text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50" data-v-6225c687${_scopeId}>`);
              if (leadershipMemberProcessing.value) {
                _push2(`<span class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" data-v-6225c687${_scopeId}></span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(` ${ssrInterpolate(leadershipMemberProcessing.value ? "Saving..." : editingLeadershipMember.value ? "Update" : "Add")} Member </button><button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:mt-0 sm:w-auto sm:text-sm" data-v-6225c687${_scopeId}> Cancel </button></div></form></div></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div id="why-partner-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8" data-v-6225c687${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-6225c687${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-6225c687${_scopeId}>Why Partner With Us Section</h2><p class="text-sm text-gray-600 mt-1" data-v-6225c687${_scopeId}>Manage the why partner section content and features</p></div><div class="p-6" data-v-6225c687${_scopeId}><form data-v-6225c687${_scopeId}><div class="space-y-6" data-v-6225c687${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-6225c687${_scopeId}><div data-v-6225c687${_scopeId}><label for="why_partner_title" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Title <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><input type="text" id="why_partner_title"${ssrRenderAttr("value", whyPartnerForm.title)} placeholder="e.g., Why Partner With Us" class="${ssrRenderClass([{ "border-red-500": whyPartnerErrors.value.title }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
            if (whyPartnerErrors.value.title) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(whyPartnerErrors.value.title)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-6225c687${_scopeId}><label for="why_partner_background_color" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Background Color </label><input type="text" id="why_partner_background_color"${ssrRenderAttr("value", whyPartnerForm.background_color)} class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red" placeholder="e.g., #ffffff or white" data-v-6225c687${_scopeId}></div></div><div data-v-6225c687${_scopeId}><label for="why_partner_subtitle" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Subtitle <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><textarea id="why_partner_subtitle" rows="3" placeholder="Enter the subtitle description..." class="${ssrRenderClass([{ "border-red-500": whyPartnerErrors.value.subtitle }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>${ssrInterpolate(whyPartnerForm.subtitle)}</textarea>`);
            if (whyPartnerErrors.value.subtitle) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(whyPartnerErrors.value.subtitle)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-6225c687${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Background Image </label>`);
            if (__props.whyPartnerSection?.background_image) {
              _push2(`<div class="mb-4" data-v-6225c687${_scopeId}><div class="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden" data-v-6225c687${_scopeId}><img${ssrRenderAttr("src", `/storage/${__props.whyPartnerSection.background_image}`)} alt="Why Partner background" class="w-full h-full object-cover" data-v-6225c687${_scopeId}><div class="absolute top-2 right-2" data-v-6225c687${_scopeId}><button type="button" class="bg-red-500 hover:bg-red-600 text-white p-1 rounded-md transition-colors duration-200" data-v-6225c687${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-v-6225c687${_scopeId}></path></svg></button></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-brand-red transition-colors duration-200" data-v-6225c687${_scopeId}><input type="file" accept="image/*" class="hidden" data-v-6225c687${_scopeId}><div class="text-center" data-v-6225c687${_scopeId}><svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" data-v-6225c687${_scopeId}><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-6225c687${_scopeId}></path></svg><div class="mt-4" data-v-6225c687${_scopeId}><button type="button" class="bg-brand-red hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-200" data-v-6225c687${_scopeId}>${ssrInterpolate(__props.whyPartnerSection?.background_image ? "Change Background Image" : "Upload Background Image")}</button></div><p class="mt-2 text-sm text-gray-500" data-v-6225c687${_scopeId}>PNG, JPG, GIF up to 5MB</p></div></div></div><div class="flex justify-end space-x-4" data-v-6225c687${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(whyPartnerProcessing.value) ? " disabled" : ""} class="bg-brand-red hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed" data-v-6225c687${_scopeId}>${ssrInterpolate(whyPartnerProcessing.value ? "Updating..." : "Update Section")}</button></div></div></form><div class="mt-8 pt-8 border-t border-gray-200" data-v-6225c687${_scopeId}><div class="flex justify-between items-center mb-6" data-v-6225c687${_scopeId}><h3 class="text-lg font-medium text-gray-900" data-v-6225c687${_scopeId}>Features</h3><button class="bg-brand-red hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200" data-v-6225c687${_scopeId}> Add Feature </button></div><div class="space-y-4" data-v-6225c687${_scopeId}><!--[-->`);
            ssrRenderList(__props.whyPartnerSection?.features || [], (feature, index) => {
              _push2(`<div class="bg-gray-50 p-4 rounded-lg border" data-v-6225c687${_scopeId}><div class="flex items-start justify-between" data-v-6225c687${_scopeId}><div class="flex-1" data-v-6225c687${_scopeId}><h4 class="text-lg font-medium text-gray-900" data-v-6225c687${_scopeId}>${ssrInterpolate(feature.title)}</h4><p class="text-sm text-gray-600 mt-1" data-v-6225c687${_scopeId}>${ssrInterpolate(feature.description)}</p><div class="flex items-center mt-2 space-x-4" data-v-6225c687${_scopeId}><span class="text-xs text-gray-500" data-v-6225c687${_scopeId}>Sort Order: ${ssrInterpolate(feature.sort_order)}</span><span class="text-xs text-gray-500" data-v-6225c687${_scopeId}>Status: ${ssrInterpolate(feature.is_active ? "Active" : "Inactive")}</span></div></div><div class="flex items-center space-x-2 ml-4" data-v-6225c687${_scopeId}><button class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition-colors duration-200" data-v-6225c687${_scopeId}> Edit </button><button class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition-colors duration-200" data-v-6225c687${_scopeId}> Delete </button></div></div></div>`);
            });
            _push2(`<!--]-->`);
            if (!__props.whyPartnerSection?.features?.length) {
              _push2(`<div class="text-center py-8" data-v-6225c687${_scopeId}><svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-6225c687${_scopeId}></path></svg><h3 class="mt-2 text-sm font-medium text-gray-900" data-v-6225c687${_scopeId}>No features</h3><p class="mt-1 text-sm text-gray-500" data-v-6225c687${_scopeId}>Get started by adding your first feature.</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div>`);
            if (whyPartnerFeatureModalOpen.value) {
              _push2(`<div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50" data-v-6225c687${_scopeId}><div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" data-v-6225c687${_scopeId}><div class="mt-3" data-v-6225c687${_scopeId}><div class="flex items-center justify-between mb-4" data-v-6225c687${_scopeId}><h3 class="text-lg font-medium text-gray-900" data-v-6225c687${_scopeId}>${ssrInterpolate(whyPartnerFeatureModalMode.value === "create" ? "Add New Feature" : "Edit Feature")}</h3><button class="text-gray-400 hover:text-gray-600" data-v-6225c687${_scopeId}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-6225c687${_scopeId}></path></svg></button></div><form data-v-6225c687${_scopeId}><div class="space-y-4" data-v-6225c687${_scopeId}><div data-v-6225c687${_scopeId}><label for="feature_title" class="block text-sm font-medium text-gray-700 mb-1" data-v-6225c687${_scopeId}> Title <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><input type="text" id="feature_title"${ssrRenderAttr("value", whyPartnerFeatureForm.title)} class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red" placeholder="e.g., Certified Databricks Expertise" required data-v-6225c687${_scopeId}></div><div data-v-6225c687${_scopeId}><label for="feature_description" class="block text-sm font-medium text-gray-700 mb-1" data-v-6225c687${_scopeId}> Description <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><textarea id="feature_description" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red" placeholder="Enter the feature description..." required data-v-6225c687${_scopeId}>${ssrInterpolate(whyPartnerFeatureForm.description)}</textarea></div><div data-v-6225c687${_scopeId}><label for="feature_sort_order" class="block text-sm font-medium text-gray-700 mb-1" data-v-6225c687${_scopeId}> Sort Order <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><input type="number" id="feature_sort_order"${ssrRenderAttr("value", whyPartnerFeatureForm.sort_order)} class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red" placeholder="1" min="0" required data-v-6225c687${_scopeId}></div>`);
              if (whyPartnerFeatureModalMode.value === "edit") {
                _push2(`<div class="flex items-center" data-v-6225c687${_scopeId}><label class="relative inline-flex items-center cursor-pointer" data-v-6225c687${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(whyPartnerFeatureForm.is_active) ? ssrLooseContain(whyPartnerFeatureForm.is_active, null) : whyPartnerFeatureForm.is_active) ? " checked" : ""} class="sr-only peer" data-v-6225c687${_scopeId}><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" data-v-6225c687${_scopeId}></div><span class="ml-3 text-sm font-medium text-gray-700" data-v-6225c687${_scopeId}>Feature Active</span></label></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex justify-end space-x-3 mt-6" data-v-6225c687${_scopeId}><button type="button" class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md font-medium transition-colors duration-200" data-v-6225c687${_scopeId}> Cancel </button><button type="submit"${ssrIncludeBooleanAttr(whyPartnerFeatureProcessing.value) ? " disabled" : ""} class="bg-brand-red hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed" data-v-6225c687${_scopeId}>${ssrInterpolate(whyPartnerFeatureProcessing.value ? "Saving..." : whyPartnerFeatureModalMode.value === "create" ? "Add Feature" : "Update Feature")}</button></div></form></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div id="cta-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8" data-v-6225c687${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-6225c687${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-6225c687${_scopeId}>CTA (Call-to-Action) Section</h2><p class="text-sm text-gray-600 mt-1" data-v-6225c687${_scopeId}>Manage the call-to-action section content and styling</p></div><div class="p-6" data-v-6225c687${_scopeId}><form data-v-6225c687${_scopeId}><div class="space-y-6" data-v-6225c687${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-6225c687${_scopeId}><div data-v-6225c687${_scopeId}><label for="cta_title" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Title <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><textarea id="cta_title" rows="2" placeholder="e.g., Wherever you are in your data journey, we can&lt;br /&gt;help you move faster." class="${ssrRenderClass([{ "border-red-500": ctaErrors.value.title }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>${ssrInterpolate(ctaForm.title)}</textarea>`);
            if (ctaErrors.value.title) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(ctaErrors.value.title)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<p class="mt-1 text-xs text-gray-500" data-v-6225c687${_scopeId}>HTML tags like &lt;br /&gt; are supported</p></div><div data-v-6225c687${_scopeId}><label for="cta_background_color" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Background Color </label><input type="text" id="cta_background_color"${ssrRenderAttr("value", ctaForm.background_color)} class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red" placeholder="e.g., #ffffff or white" data-v-6225c687${_scopeId}></div></div><div data-v-6225c687${_scopeId}><label for="cta_description" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Description <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><textarea id="cta_description" rows="2" placeholder="Enter the description..." class="${ssrRenderClass([{ "border-red-500": ctaErrors.value.description }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>${ssrInterpolate(ctaForm.description)}</textarea>`);
            if (ctaErrors.value.description) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(ctaErrors.value.description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-6225c687${_scopeId}><div data-v-6225c687${_scopeId}><label for="cta_text" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Button Text <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><input type="text" id="cta_text"${ssrRenderAttr("value", ctaForm.cta_text)} placeholder="e.g., Start A Conversation" class="${ssrRenderClass([{ "border-red-500": ctaErrors.value.cta_text }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
            if (ctaErrors.value.cta_text) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(ctaErrors.value.cta_text)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-6225c687${_scopeId}><label for="cta_link" class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Button Link <span class="text-red-500" data-v-6225c687${_scopeId}>*</span></label><input type="text" id="cta_link"${ssrRenderAttr("value", ctaForm.cta_link)} placeholder="e.g., /contact" class="${ssrRenderClass([{ "border-red-500": ctaErrors.value.cta_link }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-6225c687${_scopeId}>`);
            if (ctaErrors.value.cta_link) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-6225c687${_scopeId}>${ssrInterpolate(ctaErrors.value.cta_link)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div data-v-6225c687${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-6225c687${_scopeId}> Background Image </label>`);
            if (__props.ctaSection?.background_image) {
              _push2(`<div class="mb-4" data-v-6225c687${_scopeId}><div class="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden" data-v-6225c687${_scopeId}><img${ssrRenderAttr("src", `/storage/${__props.ctaSection.background_image}`)} alt="CTA background" class="w-full h-full object-cover" data-v-6225c687${_scopeId}><div class="absolute top-2 right-2" data-v-6225c687${_scopeId}><button type="button" class="bg-red-500 hover:bg-red-600 text-white p-1 rounded-md transition-colors duration-200" data-v-6225c687${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6225c687${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-v-6225c687${_scopeId}></path></svg></button></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-brand-red transition-colors duration-200" data-v-6225c687${_scopeId}><input type="file" accept="image/*" class="hidden" data-v-6225c687${_scopeId}><div class="text-center" data-v-6225c687${_scopeId}><svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" data-v-6225c687${_scopeId}><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-6225c687${_scopeId}></path></svg><div class="mt-4" data-v-6225c687${_scopeId}><button type="button" class="bg-brand-red hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-200" data-v-6225c687${_scopeId}>${ssrInterpolate(__props.ctaSection?.background_image ? "Change Background Image" : "Upload Background Image")}</button></div><p class="mt-2 text-sm text-gray-500" data-v-6225c687${_scopeId}>PNG, JPG, GIF up to 5MB</p><p class="mt-1 text-xs text-gray-500" data-v-6225c687${_scopeId}>Default: /images/cta.webp</p></div></div></div><div class="flex justify-end space-x-4" data-v-6225c687${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(ctaProcessing.value) ? " disabled" : ""} class="bg-brand-red hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed" data-v-6225c687${_scopeId}>${ssrInterpolate(ctaProcessing.value ? "Updating..." : "Update Section")}</button></div></div></form></div></div>`);
          } else {
            return [
              createVNode("div", { class: "sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm mb-8" }, [
                createVNode("div", { class: "mx-auto" }, [
                  createVNode("nav", {
                    class: "flex space-x-8 overflow-x-auto py-4 px-0",
                    ref_key: "sectionNav",
                    ref: sectionNav
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(sections.value, (section) => {
                      return openBlock(), createBlock("button", {
                        key: section.id,
                        onClick: ($event) => scrollToSection(section.id),
                        class: [
                          "whitespace-nowrap px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 flex items-center space-x-2",
                          activeSection.value === section.id ? "bg-blue-100 text-blue-700 border-blue-200 border" : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                        ]
                      }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-4 h-4",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          innerHTML: section.icon
                        }, null, 8, ["innerHTML"])),
                        createVNode("span", null, toDisplayString(section.name), 1)
                      ], 10, ["onClick"]);
                    }), 128))
                  ], 512)
                ])
              ]),
              createVNode("div", {
                id: "seo-settings",
                class: "bg-white rounded-lg shadow-sm border border-gray-200 mb-8"
              }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "SEO Settings"),
                  createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Manage meta tags, Open Graph, and Twitter Card settings for better SEO")
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(updateSeoSettings, ["prevent"])
                  }, [
                    createVNode("div", { class: "space-y-6" }, [
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "seo_title",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, [
                            createTextVNode(" Page Title "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "seo_title",
                            "onUpdate:modelValue": ($event) => seoForm.title = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": seoErrors.value.title }],
                            placeholder: "Enter page title"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, seoForm.title]
                          ]),
                          seoErrors.value.title ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(seoErrors.value.title), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("label", { class: "relative inline-flex items-center cursor-pointer" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => seoForm.is_active = $event,
                              class: "sr-only peer"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, seoForm.is_active]
                            ]),
                            createVNode("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" }),
                            createVNode("span", { class: "ml-3 text-sm font-medium text-gray-700" }, "SEO Settings Active")
                          ])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "seo_description",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, [
                          createTextVNode(" Meta Description "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("textarea", {
                          id: "seo_description",
                          "onUpdate:modelValue": ($event) => seoForm.description = $event,
                          rows: "3",
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none", { "border-red-500": seoErrors.value.description }],
                          placeholder: "Enter meta description (150-160 characters recommended)"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, seoForm.description]
                        ]),
                        seoErrors.value.description ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(seoErrors.value.description), 1)) : createCommentVNode("", true),
                        createVNode("p", { class: "mt-1 text-xs text-gray-500" }, toDisplayString(seoForm.description?.length || 0) + "/160 characters", 1)
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "seo_keywords",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, " Keywords "),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "seo_keywords",
                          "onUpdate:modelValue": ($event) => seoForm.keywords = $event,
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": seoErrors.value.keywords }],
                          placeholder: "Enter keywords separated by commas"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, seoForm.keywords]
                        ]),
                        seoErrors.value.keywords ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(seoErrors.value.keywords), 1)) : createCommentVNode("", true),
                        createVNode("p", { class: "mt-1 text-xs text-gray-500" }, "Separate keywords with commas")
                      ]),
                      createVNode("div", { class: "border-t border-gray-200 pt-6" }, [
                        createVNode("h3", { class: "text-md font-medium text-gray-900 mb-4" }, "Open Graph Settings"),
                        createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                          createVNode("div", null, [
                            createVNode("label", {
                              for: "og_title",
                              class: "block text-sm font-medium text-gray-700 mb-2"
                            }, " OG Title "),
                            withDirectives(createVNode("input", {
                              type: "text",
                              id: "og_title",
                              "onUpdate:modelValue": ($event) => seoForm.og_title = $event,
                              class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": seoErrors.value.og_title }],
                              placeholder: "Leave empty to use page title"
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, seoForm.og_title]
                            ]),
                            seoErrors.value.og_title ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-1 text-sm text-red-600"
                            }, toDisplayString(seoErrors.value.og_title), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", null, [
                            createVNode("label", {
                              for: "og_url",
                              class: "block text-sm font-medium text-gray-700 mb-2"
                            }, " OG URL "),
                            withDirectives(createVNode("input", {
                              type: "url",
                              id: "og_url",
                              "onUpdate:modelValue": ($event) => seoForm.og_url = $event,
                              class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": seoErrors.value.og_url }],
                              placeholder: "https://www.sinki.ai/about"
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, seoForm.og_url]
                            ]),
                            seoErrors.value.og_url ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-1 text-sm text-red-600"
                            }, toDisplayString(seoErrors.value.og_url), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "lg:col-span-2" }, [
                            createVNode("label", {
                              for: "og_description",
                              class: "block text-sm font-medium text-gray-700 mb-2"
                            }, " OG Description "),
                            withDirectives(createVNode("textarea", {
                              id: "og_description",
                              "onUpdate:modelValue": ($event) => seoForm.og_description = $event,
                              rows: "2",
                              class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none", { "border-red-500": seoErrors.value.og_description }],
                              placeholder: "Leave empty to use meta description"
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, seoForm.og_description]
                            ]),
                            seoErrors.value.og_description ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-1 text-sm text-red-600"
                            }, toDisplayString(seoErrors.value.og_description), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "mt-6" }, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Open Graph Image "),
                          createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                            createVNode("div", null, [
                              createVNode("input", {
                                type: "file",
                                id: "og_image_upload",
                                accept: "image/*",
                                class: "hidden",
                                onChange: ($event) => handleSeoImageUpload($event, "og_image")
                              }, null, 40, ["onChange"]),
                              createVNode("label", {
                                for: "og_image_upload",
                                class: "flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                              }, [
                                createVNode("div", { class: "flex flex-col items-center justify-center pt-5 pb-6" }, [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-8 h-8 mb-4 text-gray-500",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                    })
                                  ])),
                                  createVNode("p", { class: "mb-2 text-sm text-gray-500" }, "Upload OG Image"),
                                  createVNode("p", { class: "text-xs text-gray-500" }, "1200x630px recommended")
                                ])
                              ])
                            ]),
                            createVNode("div", null, [
                              createVNode("div", { class: "aspect-[1200/630] bg-gray-100 rounded-lg overflow-hidden" }, [
                                ogImagePreview.value || __props.seoSettings?.og_image_url ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "w-full h-full relative group"
                                }, [
                                  createVNode("img", {
                                    src: ogImagePreview.value || __props.seoSettings?.og_image_url,
                                    alt: "Open Graph image preview",
                                    class: "w-full h-full object-cover"
                                  }, null, 8, ["src"]),
                                  createVNode("div", { class: "absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center" }, [
                                    createVNode("button", {
                                      type: "button",
                                      onClick: ($event) => deleteSeoImage("og_image"),
                                      class: "bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                                    }, " Delete Image ", 8, ["onClick"])
                                  ])
                                ])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "w-full h-full flex items-center justify-center text-gray-400"
                                }, [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-12 h-12",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    })
                                  ]))
                                ]))
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "border-t border-gray-200 pt-6" }, [
                        createVNode("h3", { class: "text-md font-medium text-gray-900 mb-4" }, "Twitter Card Settings"),
                        createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                          createVNode("div", null, [
                            createVNode("label", {
                              for: "twitter_card",
                              class: "block text-sm font-medium text-gray-700 mb-2"
                            }, " Card Type "),
                            withDirectives(createVNode("select", {
                              id: "twitter_card",
                              "onUpdate:modelValue": ($event) => seoForm.twitter_card = $event,
                              class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": seoErrors.value.twitter_card }]
                            }, [
                              createVNode("option", { value: "summary" }, "Summary"),
                              createVNode("option", { value: "summary_large_image" }, "Summary Large Image"),
                              createVNode("option", { value: "app" }, "App"),
                              createVNode("option", { value: "player" }, "Player")
                            ], 10, ["onUpdate:modelValue"]), [
                              [vModelSelect, seoForm.twitter_card]
                            ]),
                            seoErrors.value.twitter_card ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-1 text-sm text-red-600"
                            }, toDisplayString(seoErrors.value.twitter_card), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", null, [
                            createVNode("label", {
                              for: "twitter_title",
                              class: "block text-sm font-medium text-gray-700 mb-2"
                            }, " Twitter Title "),
                            withDirectives(createVNode("input", {
                              type: "text",
                              id: "twitter_title",
                              "onUpdate:modelValue": ($event) => seoForm.twitter_title = $event,
                              class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": seoErrors.value.twitter_title }],
                              placeholder: "Leave empty to use OG title"
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, seoForm.twitter_title]
                            ]),
                            seoErrors.value.twitter_title ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-1 text-sm text-red-600"
                            }, toDisplayString(seoErrors.value.twitter_title), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "lg:col-span-2" }, [
                            createVNode("label", {
                              for: "twitter_description",
                              class: "block text-sm font-medium text-gray-700 mb-2"
                            }, " Twitter Description "),
                            withDirectives(createVNode("textarea", {
                              id: "twitter_description",
                              "onUpdate:modelValue": ($event) => seoForm.twitter_description = $event,
                              rows: "2",
                              class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none", { "border-red-500": seoErrors.value.twitter_description }],
                              placeholder: "Leave empty to use OG description"
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, seoForm.twitter_description]
                            ]),
                            seoErrors.value.twitter_description ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-1 text-sm text-red-600"
                            }, toDisplayString(seoErrors.value.twitter_description), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "mt-6" }, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Twitter Image "),
                          createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                            createVNode("div", null, [
                              createVNode("input", {
                                type: "file",
                                id: "twitter_image_upload",
                                accept: "image/*",
                                class: "hidden",
                                onChange: ($event) => handleSeoImageUpload($event, "twitter_image")
                              }, null, 40, ["onChange"]),
                              createVNode("label", {
                                for: "twitter_image_upload",
                                class: "flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                              }, [
                                createVNode("div", { class: "flex flex-col items-center justify-center pt-5 pb-6" }, [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-8 h-8 mb-4 text-gray-500",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                    })
                                  ])),
                                  createVNode("p", { class: "mb-2 text-sm text-gray-500" }, "Upload Twitter Image"),
                                  createVNode("p", { class: "text-xs text-gray-500" }, "1200x675px recommended")
                                ])
                              ])
                            ]),
                            createVNode("div", null, [
                              createVNode("div", { class: "aspect-[1200/675] bg-gray-100 rounded-lg overflow-hidden" }, [
                                twitterImagePreview.value || __props.seoSettings?.twitter_image_url ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "w-full h-full relative group"
                                }, [
                                  createVNode("img", {
                                    src: twitterImagePreview.value || __props.seoSettings?.twitter_image_url,
                                    alt: "Twitter image preview",
                                    class: "w-full h-full object-cover"
                                  }, null, 8, ["src"]),
                                  createVNode("div", { class: "absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center" }, [
                                    createVNode("button", {
                                      type: "button",
                                      onClick: ($event) => deleteSeoImage("twitter_image"),
                                      class: "bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                                    }, " Delete Image ", 8, ["onClick"])
                                  ])
                                ])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "w-full h-full flex items-center justify-center text-gray-400"
                                }, [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-12 h-12",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    })
                                  ]))
                                ]))
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "border-t border-gray-200 pt-6" }, [
                        createVNode("h3", { class: "text-md font-medium text-gray-900 mb-4" }, "Advanced Settings"),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "custom_head_tags",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, " Custom Head Tags "),
                          withDirectives(createVNode("textarea", {
                            id: "custom_head_tags",
                            "onUpdate:modelValue": ($event) => seoForm.custom_head_tags = $event,
                            rows: "4",
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none font-mono text-sm", { "border-red-500": seoErrors.value.custom_head_tags }],
                            placeholder: "Enter custom meta tags, schema markup, or other head elements"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, seoForm.custom_head_tags]
                          ]),
                          seoErrors.value.custom_head_tags ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(seoErrors.value.custom_head_tags), 1)) : createCommentVNode("", true),
                          createVNode("p", { class: "mt-1 text-xs text-gray-500" }, "Add custom HTML tags that will be inserted in the <head> section")
                        ])
                      ]),
                      createVNode("div", { class: "pt-6 border-t border-gray-200" }, [
                        createVNode("button", {
                          type: "submit",
                          disabled: seoProcessing.value,
                          class: "inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
                        }, [
                          seoProcessing.value ? (openBlock(), createBlock("svg", {
                            key: 0,
                            class: "animate-spin -ml-1 mr-3 h-4 w-4 text-white",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("circle", {
                              class: "opacity-25",
                              cx: "12",
                              cy: "12",
                              r: "10",
                              stroke: "currentColor",
                              "stroke-width": "4"
                            }),
                            createVNode("path", {
                              class: "opacity-75",
                              fill: "currentColor",
                              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            })
                          ])) : createCommentVNode("", true),
                          createTextVNode(" " + toDisplayString(seoProcessing.value ? "Updating..." : "Update SEO Settings"), 1)
                        ], 8, ["disabled"])
                      ])
                    ])
                  ], 32)
                ])
              ]),
              createVNode("div", {
                id: "hero-section",
                class: "bg-white rounded-lg shadow-sm border border-gray-200 mb-8"
              }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Hero Section"),
                  createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Manage the main hero section with background image, heading, paragraph and call-to-action")
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(updateHero, ["prevent"])
                  }, [
                    createVNode("div", { class: "space-y-6" }, [
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Background Image "),
                        __props.heroSection?.background_image ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mb-4"
                        }, [
                          createVNode("div", { class: "relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden" }, [
                            createVNode("img", {
                              src: `/storage/${__props.heroSection.background_image}`,
                              alt: "Hero background",
                              class: "w-full h-full object-cover"
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "absolute top-2 right-2" }, [
                              createVNode("button", {
                                type: "button",
                                onClick: deleteHeroImage,
                                class: "bg-red-600 text-white p-1 rounded-full hover:bg-red-700 transition-colors"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M6 18L18 6M6 6l12 12"
                                  })
                                ]))
                              ])
                            ])
                          ])
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "flex items-center justify-center w-full" }, [
                          createVNode("label", {
                            for: "hero-image-upload",
                            class: "flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                          }, [
                            createVNode("div", { class: "flex flex-col items-center justify-center pt-5 pb-6" }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-8 h-8 mb-4 text-gray-500",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                })
                              ])),
                              createVNode("p", { class: "mb-2 text-sm text-gray-500" }, [
                                createVNode("span", { class: "font-semibold" }, "Click to upload"),
                                createTextVNode(" background image ")
                              ]),
                              createVNode("p", { class: "text-xs text-gray-500" }, "PNG, JPG or GIF (MAX. 2MB)")
                            ]),
                            createVNode("input", {
                              id: "hero-image-upload",
                              type: "file",
                              class: "hidden",
                              accept: "image/*",
                              onChange: uploadHeroImage
                            }, null, 32)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "hero_heading",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, [
                            createTextVNode(" Heading "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "hero_heading",
                            "onUpdate:modelValue": ($event) => heroForm.heading = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": heroErrors.value.heading }],
                            placeholder: "Enter hero heading"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, heroForm.heading]
                          ]),
                          heroErrors.value.heading ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(heroErrors.value.heading), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("label", { class: "relative inline-flex items-center cursor-pointer" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => heroForm.is_active = $event,
                              class: "sr-only peer"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, heroForm.is_active]
                            ]),
                            createVNode("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" }),
                            createVNode("span", { class: "ml-3 text-sm font-medium text-gray-700" }, "Hero Section Active")
                          ])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "hero_paragraph",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, [
                          createTextVNode(" Paragraph "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("textarea", {
                          id: "hero_paragraph",
                          "onUpdate:modelValue": ($event) => heroForm.paragraph = $event,
                          rows: "4",
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none", { "border-red-500": heroErrors.value.paragraph }],
                          placeholder: "Enter hero paragraph content"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, heroForm.paragraph]
                        ]),
                        heroErrors.value.paragraph ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(heroErrors.value.paragraph), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "hero_cta_text",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, " Call-to-Action Text "),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "hero_cta_text",
                            "onUpdate:modelValue": ($event) => heroForm.cta_text = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": heroErrors.value.cta_text }],
                            placeholder: "e.g., Get Started"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, heroForm.cta_text]
                          ]),
                          heroErrors.value.cta_text ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(heroErrors.value.cta_text), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "hero_cta_link",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, " Call-to-Action Link "),
                          withDirectives(createVNode("input", {
                            type: "url",
                            id: "hero_cta_link",
                            "onUpdate:modelValue": ($event) => heroForm.cta_link = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": heroErrors.value.cta_link }],
                            placeholder: "https://example.com"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, heroForm.cta_link]
                          ]),
                          heroErrors.value.cta_link ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(heroErrors.value.cta_link), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "flex justify-end" }, [
                        createVNode("button", {
                          type: "submit",
                          disabled: heroProcessing.value,
                          class: "inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                        }, [
                          heroProcessing.value ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                          })) : createCommentVNode("", true),
                          createTextVNode(" " + toDisplayString(heroProcessing.value ? "Saving..." : "Save Hero Section"), 1)
                        ], 8, ["disabled"])
                      ])
                    ])
                  ], 32)
                ])
              ]),
              createVNode("div", {
                id: "partner-badge-section",
                class: "bg-white rounded-lg shadow-sm border border-gray-200 mb-8"
              }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Partner Badge Section"),
                  createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Manage the partner badge text and logo display")
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(updatePartnerBadge, ["prevent"])
                  }, [
                    createVNode("div", { class: "space-y-6" }, [
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Partner Logo "),
                        __props.partnerBadge?.logo_image ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mb-4"
                        }, [
                          createVNode("div", { class: "relative w-32 h-16 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center" }, [
                            createVNode("img", {
                              src: `/storage/${__props.partnerBadge.logo_image}`,
                              alt: partnerForm.logo_alt,
                              class: "max-w-full max-h-full object-contain"
                            }, null, 8, ["src", "alt"]),
                            createVNode("div", { class: "absolute top-1 right-1" }, [
                              createVNode("button", {
                                type: "button",
                                onClick: deletePartnerLogo,
                                class: "bg-red-600 text-white p-1 rounded-full hover:bg-red-700 transition-colors"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-3 h-3",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M6 18L18 6M6 6l12 12"
                                  })
                                ]))
                              ])
                            ])
                          ])
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "flex items-center justify-center w-full" }, [
                          createVNode("label", {
                            for: "partner-logo-upload",
                            class: "flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                          }, [
                            createVNode("div", { class: "flex flex-col items-center justify-center pt-3 pb-3" }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-6 h-6 mb-2 text-gray-500",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                })
                              ])),
                              createVNode("p", { class: "text-xs text-gray-500" }, [
                                createVNode("span", { class: "font-semibold" }, "Click to upload"),
                                createTextVNode(" partner logo ")
                              ]),
                              createVNode("p", { class: "text-xs text-gray-500" }, "PNG, JPG or SVG (MAX. 2MB)")
                            ]),
                            createVNode("input", {
                              id: "partner-logo-upload",
                              type: "file",
                              class: "hidden",
                              accept: "image/*",
                              onChange: uploadPartnerLogo
                            }, null, 32)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "partner_text",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, [
                            createTextVNode(" Badge Text "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "partner_text",
                            "onUpdate:modelValue": ($event) => partnerForm.text = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": partnerErrors.value.text }],
                            placeholder: "e.g., An Official Databricks Partner"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, partnerForm.text]
                          ]),
                          partnerErrors.value.text ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(partnerErrors.value.text), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("label", { class: "relative inline-flex items-center cursor-pointer" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => partnerForm.is_active = $event,
                              class: "sr-only peer"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, partnerForm.is_active]
                            ]),
                            createVNode("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" }),
                            createVNode("span", { class: "ml-3 text-sm font-medium text-gray-700" }, "Partner Badge Active")
                          ])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "partner_logo_alt",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, " Logo Alt Text "),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "partner_logo_alt",
                          "onUpdate:modelValue": ($event) => partnerForm.logo_alt = $event,
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": partnerErrors.value.logo_alt }],
                          placeholder: "e.g., Databricks Logo"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, partnerForm.logo_alt]
                        ]),
                        partnerErrors.value.logo_alt ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(partnerErrors.value.logo_alt), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "flex justify-end" }, [
                        createVNode("button", {
                          type: "submit",
                          disabled: partnerProcessing.value,
                          class: "inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                        }, [
                          partnerProcessing.value ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                          })) : createCommentVNode("", true),
                          createTextVNode(" " + toDisplayString(partnerProcessing.value ? "Saving..." : "Save Partner Badge"), 1)
                        ], 8, ["disabled"])
                      ])
                    ])
                  ], 32)
                ])
              ]),
              createVNode("div", {
                id: "story-section",
                class: "bg-white rounded-lg shadow-sm border border-gray-200 mb-8"
              }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Story Section"),
                  createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Manage the about story content with image, title, and descriptions")
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(updateStorySection, ["prevent"])
                  }, [
                    createVNode("div", { class: "space-y-6" }, [
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Story Image "),
                        __props.storySection?.image_path ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mb-4"
                        }, [
                          createVNode("div", { class: "relative w-48 h-32 bg-gray-100 rounded-lg overflow-hidden" }, [
                            createVNode("img", {
                              src: `/storage/${__props.storySection.image_path}`,
                              alt: storyForm.image_alt,
                              class: "w-full h-full object-cover"
                            }, null, 8, ["src", "alt"]),
                            createVNode("div", { class: "absolute top-2 right-2" }, [
                              createVNode("button", {
                                type: "button",
                                onClick: deleteStoryImage,
                                class: "bg-red-600 text-white p-1 rounded-full hover:bg-red-700 transition-colors"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M6 18L18 6M6 6l12 12"
                                  })
                                ]))
                              ])
                            ])
                          ])
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "flex items-center justify-center w-full" }, [
                          createVNode("label", {
                            for: "story-image-upload",
                            class: "flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                          }, [
                            createVNode("div", { class: "flex flex-col items-center justify-center pt-5 pb-6" }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-8 h-8 mb-4 text-gray-500",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                })
                              ])),
                              createVNode("p", { class: "mb-2 text-sm text-gray-500" }, [
                                createVNode("span", { class: "font-semibold" }, "Click to upload"),
                                createTextVNode(" story image ")
                              ]),
                              createVNode("p", { class: "text-xs text-gray-500" }, "PNG, JPG or GIF (MAX. 2MB)")
                            ]),
                            createVNode("input", {
                              id: "story-image-upload",
                              type: "file",
                              class: "hidden",
                              accept: "image/*",
                              onChange: uploadStoryImage
                            }, null, 32)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "story_header_tag",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, [
                            createTextVNode(" Header Tag "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "story_header_tag",
                            "onUpdate:modelValue": ($event) => storyForm.header_tag = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": storyErrors.value.header_tag }],
                            placeholder: "e.g., OUR STORY"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, storyForm.header_tag]
                          ]),
                          storyErrors.value.header_tag ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(storyErrors.value.header_tag), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("label", { class: "relative inline-flex items-center cursor-pointer" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => storyForm.is_active = $event,
                              class: "sr-only peer"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, storyForm.is_active]
                            ]),
                            createVNode("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" }),
                            createVNode("span", { class: "ml-3 text-sm font-medium text-gray-700" }, "Story Section Active")
                          ])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "story_title",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, [
                          createTextVNode(" Title "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "story_title",
                          "onUpdate:modelValue": ($event) => storyForm.title = $event,
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": storyErrors.value.title }],
                          placeholder: "e.g., Sinki, a Name with a Purpose"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, storyForm.title]
                        ]),
                        storyErrors.value.title ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(storyErrors.value.title), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "story_subtitle",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, " Subtitle (Optional) "),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "story_subtitle",
                          "onUpdate:modelValue": ($event) => storyForm.subtitle = $event,
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": storyErrors.value.subtitle }],
                          placeholder: "Optional subtitle text"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, storyForm.subtitle]
                        ]),
                        storyErrors.value.subtitle ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(storyErrors.value.subtitle), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "flex justify-between items-center mb-2" }, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700" }, [
                            createTextVNode(" Description Paragraphs "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          createVNode("button", {
                            type: "button",
                            onClick: addDescription,
                            class: "inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red"
                          }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-3 h-3 mr-1",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                              })
                            ])),
                            createTextVNode(" Add Paragraph ")
                          ])
                        ]),
                        createVNode("div", { class: "space-y-4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(storyForm.descriptions, (description, index) => {
                            return openBlock(), createBlock("div", {
                              key: index,
                              class: "relative"
                            }, [
                              createVNode("div", { class: "flex items-start space-x-2" }, [
                                createVNode("div", { class: "flex-1" }, [
                                  withDirectives(createVNode("textarea", {
                                    "onUpdate:modelValue": ($event) => storyForm.descriptions[index] = $event,
                                    rows: "3",
                                    class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none", { "border-red-500": storyErrors.value[`descriptions.${index}`] }],
                                    placeholder: `Paragraph ${index + 1} - You can use HTML tags like <em> and <strong>`
                                  }, null, 10, ["onUpdate:modelValue", "placeholder"]), [
                                    [vModelText, storyForm.descriptions[index]]
                                  ]),
                                  storyErrors.value[`descriptions.${index}`] ? (openBlock(), createBlock("p", {
                                    key: 0,
                                    class: "mt-1 text-sm text-red-600"
                                  }, toDisplayString(storyErrors.value[`descriptions.${index}`]), 1)) : createCommentVNode("", true)
                                ]),
                                storyForm.descriptions.length > 1 ? (openBlock(), createBlock("button", {
                                  key: 0,
                                  type: "button",
                                  onClick: ($event) => removeDescription(index),
                                  class: "flex-shrink-0 mt-2 p-1 text-red-600 hover:text-red-800 transition-colors"
                                }, [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    })
                                  ]))
                                ], 8, ["onClick"])) : createCommentVNode("", true)
                              ])
                            ]);
                          }), 128))
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-3 gap-6" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "story_image_alt",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, " Image Alt Text "),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "story_image_alt",
                            "onUpdate:modelValue": ($event) => storyForm.image_alt = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": storyErrors.value.image_alt }],
                            placeholder: "e.g., Helsinki city representing our inspiration"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, storyForm.image_alt]
                          ]),
                          storyErrors.value.image_alt ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(storyErrors.value.image_alt), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "story_image_position",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, [
                            createTextVNode(" Image Position "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("select", {
                            id: "story_image_position",
                            "onUpdate:modelValue": ($event) => storyForm.image_position = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": storyErrors.value.image_position }]
                          }, [
                            createVNode("option", { value: "left" }, "Left"),
                            createVNode("option", { value: "right" }, "Right")
                          ], 10, ["onUpdate:modelValue"]), [
                            [vModelSelect, storyForm.image_position]
                          ]),
                          storyErrors.value.image_position ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(storyErrors.value.image_position), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "story_background_color",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, [
                            createTextVNode(" Background Color "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("select", {
                            id: "story_background_color",
                            "onUpdate:modelValue": ($event) => storyForm.background_color = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": storyErrors.value.background_color }]
                          }, [
                            createVNode("option", { value: "bg-white" }, "White"),
                            createVNode("option", { value: "bg-gray-50" }, "Light Gray"),
                            createVNode("option", { value: "bg-gray-100" }, "Gray"),
                            createVNode("option", { value: "bg-blue-50" }, "Light Blue"),
                            createVNode("option", { value: "bg-green-50" }, "Light Green")
                          ], 10, ["onUpdate:modelValue"]), [
                            [vModelSelect, storyForm.background_color]
                          ]),
                          storyErrors.value.background_color ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(storyErrors.value.background_color), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "flex justify-end" }, [
                        createVNode("button", {
                          type: "submit",
                          disabled: storyProcessing.value,
                          class: "inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                        }, [
                          storyProcessing.value ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                          })) : createCommentVNode("", true),
                          createTextVNode(" " + toDisplayString(storyProcessing.value ? "Saving..." : "Save Story Section"), 1)
                        ], 8, ["disabled"])
                      ])
                    ])
                  ], 32)
                ])
              ]),
              createVNode("div", {
                id: "what-we-do-section",
                class: "bg-white rounded-lg shadow-sm border border-gray-200 mb-8"
              }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "What We Do Section"),
                  createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Manage the what we do section header and background")
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(updateWhatWeDo, ["prevent"])
                  }, [
                    createVNode("div", { class: "space-y-6" }, [
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Background Image "),
                        __props.whatWeDoSection?.background_image ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mb-4"
                        }, [
                          createVNode("div", { class: "relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden" }, [
                            createVNode("img", {
                              src: `/storage/${__props.whatWeDoSection.background_image}`,
                              alt: "Background image",
                              class: "w-full h-full object-cover"
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "absolute top-2 right-2" }, [
                              createVNode("button", {
                                type: "button",
                                onClick: deleteWhatWeDoBackground,
                                class: "bg-red-600 text-white p-1 rounded-full hover:bg-red-700 transition-colors"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M6 18L18 6M6 6l12 12"
                                  })
                                ]))
                              ])
                            ])
                          ])
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "flex items-center justify-center w-full" }, [
                          createVNode("label", {
                            for: "what-we-do-bg-upload",
                            class: "flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                          }, [
                            createVNode("div", { class: "flex flex-col items-center justify-center pt-5 pb-6" }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-8 h-8 mb-4 text-gray-500",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                })
                              ])),
                              createVNode("p", { class: "mb-2 text-sm text-gray-500" }, [
                                createVNode("span", { class: "font-semibold" }, "Click to upload"),
                                createTextVNode(" background image ")
                              ]),
                              createVNode("p", { class: "text-xs text-gray-500" }, "PNG, JPG or GIF (MAX. 2MB)")
                            ]),
                            createVNode("input", {
                              id: "what-we-do-bg-upload",
                              type: "file",
                              class: "hidden",
                              accept: "image/*",
                              onChange: uploadWhatWeDoBackground
                            }, null, 32)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "what_we_do_header_tag",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, [
                            createTextVNode(" Header Tag "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "what_we_do_header_tag",
                            "onUpdate:modelValue": ($event) => whatWeDoForm.header_tag = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": whatWeDoErrors.value.header_tag }],
                            placeholder: "e.g., HOW WE HELP"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, whatWeDoForm.header_tag]
                          ]),
                          whatWeDoErrors.value.header_tag ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(whatWeDoErrors.value.header_tag), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("label", { class: "relative inline-flex items-center cursor-pointer" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => whatWeDoForm.is_active = $event,
                              class: "sr-only peer"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, whatWeDoForm.is_active]
                            ]),
                            createVNode("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" }),
                            createVNode("span", { class: "ml-3 text-sm font-medium text-gray-700" }, "What We Do Section Active")
                          ])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "what_we_do_title",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, [
                          createTextVNode(" Title "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "what_we_do_title",
                          "onUpdate:modelValue": ($event) => whatWeDoForm.title = $event,
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": whatWeDoErrors.value.title }],
                          placeholder: "e.g., What We Do"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, whatWeDoForm.title]
                        ]),
                        whatWeDoErrors.value.title ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(whatWeDoErrors.value.title), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "what_we_do_subtitle",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, [
                          createTextVNode(" Subtitle "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("textarea", {
                          id: "what_we_do_subtitle",
                          "onUpdate:modelValue": ($event) => whatWeDoForm.subtitle = $event,
                          rows: "2",
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none", { "border-red-500": whatWeDoErrors.value.subtitle }],
                          placeholder: "e.g., We help enterprises harness the full power of Databricks to unify data, analytics, and AI."
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, whatWeDoForm.subtitle]
                        ]),
                        whatWeDoErrors.value.subtitle ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(whatWeDoErrors.value.subtitle), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "border border-gray-200 rounded-lg p-6" }, [
                        createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                          createVNode("h3", { class: "text-lg font-medium text-gray-900" }, "Service Items"),
                          createVNode("button", {
                            type: "button",
                            onClick: addService,
                            class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-brand-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-4 h-4 mr-2",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                              })
                            ])),
                            createTextVNode(" Add Service ")
                          ])
                        ]),
                        __props.whatWeDoSection?.items?.length ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "space-y-4"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.whatWeDoSection.items, (item, index) => {
                            return openBlock(), createBlock("div", {
                              key: item.id,
                              class: "border border-gray-300 rounded-lg p-4 bg-gray-50"
                            }, [
                              createVNode("div", { class: "flex items-start justify-between" }, [
                                createVNode("div", { class: "flex-1 min-w-0" }, [
                                  createVNode("div", { class: "flex items-center space-x-3 mb-2" }, [
                                    createVNode("div", { class: "flex-shrink-0" }, [
                                      createVNode("div", { class: "w-8 h-8 bg-brand-red rounded-full flex items-center justify-center" }, [
                                        (openBlock(), createBlock("svg", {
                                          class: "w-4 h-4 text-white",
                                          fill: "none",
                                          stroke: "currentColor",
                                          "stroke-width": "2",
                                          viewBox: "0 0 24 24",
                                          innerHTML: item.icon_svg
                                        }, null, 8, ["innerHTML"]))
                                      ])
                                    ]),
                                    createVNode("div", { class: "flex-1 min-w-0" }, [
                                      createVNode("h4", { class: "text-sm font-medium text-gray-900 truncate" }, toDisplayString(item.title), 1),
                                      createVNode("p", { class: "text-xs text-gray-500" }, "Sort Order: " + toDisplayString(item.sort_order), 1)
                                    ]),
                                    createVNode("div", { class: "flex items-center space-x-2" }, [
                                      createVNode("span", {
                                        class: [item.is_active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800", "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"]
                                      }, toDisplayString(item.is_active ? "Active" : "Inactive"), 3),
                                      createVNode("button", {
                                        type: "button",
                                        onClick: ($event) => editService(item),
                                        class: "text-brand-red hover:text-red-700"
                                      }, [
                                        (openBlock(), createBlock("svg", {
                                          class: "w-4 h-4",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24"
                                        }, [
                                          createVNode("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                          })
                                        ]))
                                      ], 8, ["onClick"]),
                                      createVNode("button", {
                                        type: "button",
                                        onClick: ($event) => deleteService(item),
                                        class: "text-red-600 hover:text-red-800"
                                      }, [
                                        (openBlock(), createBlock("svg", {
                                          class: "w-4 h-4",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24"
                                        }, [
                                          createVNode("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                          })
                                        ]))
                                      ], 8, ["onClick"])
                                    ])
                                  ]),
                                  createVNode("p", { class: "text-sm text-gray-600" }, toDisplayString(item.description), 1)
                                ])
                              ])
                            ]);
                          }), 128))
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "text-center py-8 text-gray-500"
                        }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-12 h-12 mx-auto mb-4 text-gray-400",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            })
                          ])),
                          createVNode("p", null, "No service items found. Run the seeder or add services manually.")
                        ]))
                      ]),
                      createVNode("div", { class: "flex justify-end" }, [
                        createVNode("button", {
                          type: "submit",
                          disabled: whatWeDoProcessing.value,
                          class: "inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                        }, [
                          whatWeDoProcessing.value ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                          })) : createCommentVNode("", true),
                          createTextVNode(" " + toDisplayString(whatWeDoProcessing.value ? "Saving..." : "Save What We Do Section"), 1)
                        ], 8, ["disabled"])
                      ])
                    ])
                  ], 32)
                ])
              ]),
              createVNode("div", {
                id: "approach-section",
                class: "bg-white rounded-lg shadow-sm border border-gray-200 mb-8"
              }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Our Approach Section"),
                  createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Manage the approach section header and process steps")
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(updateApproach, ["prevent"])
                  }, [
                    createVNode("div", { class: "space-y-6" }, [
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "approach_header_tag",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, [
                            createTextVNode(" Header Tag "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "approach_header_tag",
                            "onUpdate:modelValue": ($event) => approachForm.header_tag = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": approachErrors.value.header_tag }],
                            placeholder: "e.g., HOW WE WORK"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, approachForm.header_tag]
                          ]),
                          approachErrors.value.header_tag ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(approachErrors.value.header_tag), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("label", { class: "relative inline-flex items-center cursor-pointer" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => approachForm.is_active = $event,
                              class: "sr-only peer"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, approachForm.is_active]
                            ]),
                            createVNode("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" }),
                            createVNode("span", { class: "ml-3 text-sm font-medium text-gray-700" }, "Approach Section Active")
                          ])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "approach_title",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, [
                          createTextVNode(" Title "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "approach_title",
                          "onUpdate:modelValue": ($event) => approachForm.title = $event,
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": approachErrors.value.title }],
                          placeholder: "e.g., Our Data-First Approach"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, approachForm.title]
                        ]),
                        approachErrors.value.title ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(approachErrors.value.title), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "approach_subtitle",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, [
                          createTextVNode(" Subtitle "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("textarea", {
                          id: "approach_subtitle",
                          "onUpdate:modelValue": ($event) => approachForm.subtitle = $event,
                          rows: "2",
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none", { "border-red-500": approachErrors.value.subtitle }],
                          placeholder: "e.g., How We Transform Your Data Vision Into Reality"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, approachForm.subtitle]
                        ]),
                        approachErrors.value.subtitle ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(approachErrors.value.subtitle), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "approach_cta_text",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, [
                            createTextVNode(" Call-to-Action Text "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "approach_cta_text",
                            "onUpdate:modelValue": ($event) => approachForm.cta_text = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": approachErrors.value.cta_text }],
                            placeholder: "e.g., Book A Discovery Session"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, approachForm.cta_text]
                          ]),
                          approachErrors.value.cta_text ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(approachErrors.value.cta_text), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "approach_background_color",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, " Background Color "),
                          withDirectives(createVNode("select", {
                            id: "approach_background_color",
                            "onUpdate:modelValue": ($event) => approachForm.background_color = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": approachErrors.value.background_color }]
                          }, [
                            createVNode("option", { value: "bg-white" }, "White"),
                            createVNode("option", { value: "bg-gray-50" }, "Light Gray"),
                            createVNode("option", { value: "bg-gray-100" }, "Gray"),
                            createVNode("option", { value: "bg-blue-50" }, "Light Blue"),
                            createVNode("option", { value: "bg-green-50" }, "Light Green")
                          ], 10, ["onUpdate:modelValue"]), [
                            [vModelSelect, approachForm.background_color]
                          ]),
                          approachErrors.value.background_color ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(approachErrors.value.background_color), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "approach_cta_link",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, " Call-to-Action Link (Optional) "),
                        withDirectives(createVNode("input", {
                          type: "url",
                          id: "approach_cta_link",
                          "onUpdate:modelValue": ($event) => approachForm.cta_link = $event,
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": approachErrors.value.cta_link }],
                          placeholder: "https://example.com"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, approachForm.cta_link]
                        ]),
                        approachErrors.value.cta_link ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(approachErrors.value.cta_link), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "border border-gray-200 rounded-lg p-6" }, [
                        createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                          createVNode("h3", { class: "text-lg font-medium text-gray-900" }, "Approach Steps"),
                          createVNode("button", {
                            type: "button",
                            onClick: addApproachStep,
                            class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-brand-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-4 h-4 mr-2",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                              })
                            ])),
                            createTextVNode(" Add Step ")
                          ])
                        ]),
                        __props.approachSection?.steps?.length ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "space-y-4"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.approachSection.steps, (step, index) => {
                            return openBlock(), createBlock("div", {
                              key: step.id,
                              class: "border border-gray-300 rounded-lg p-4 bg-gray-50"
                            }, [
                              createVNode("div", { class: "flex items-start justify-between" }, [
                                createVNode("div", { class: "flex-1 min-w-0" }, [
                                  createVNode("div", { class: "flex items-center space-x-3 mb-2" }, [
                                    createVNode("div", { class: "flex-shrink-0" }, [
                                      createVNode("div", { class: "w-8 h-8 bg-brand-red rounded-full flex items-center justify-center" }, [
                                        createVNode("span", { class: "text-white font-bold text-sm" }, toDisplayString(step.number), 1)
                                      ])
                                    ]),
                                    createVNode("div", { class: "flex-1 min-w-0" }, [
                                      createVNode("h4", { class: "text-sm font-medium text-gray-900 truncate" }, toDisplayString(step.title), 1),
                                      createVNode("p", { class: "text-xs text-gray-500" }, "Sort Order: " + toDisplayString(step.sort_order), 1)
                                    ]),
                                    createVNode("div", { class: "flex items-center space-x-2" }, [
                                      createVNode("span", {
                                        class: [step.is_active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800", "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"]
                                      }, toDisplayString(step.is_active ? "Active" : "Inactive"), 3),
                                      createVNode("button", {
                                        type: "button",
                                        onClick: ($event) => editApproachStep(step),
                                        class: "text-brand-red hover:text-red-700"
                                      }, [
                                        (openBlock(), createBlock("svg", {
                                          class: "w-4 h-4",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24"
                                        }, [
                                          createVNode("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                          })
                                        ]))
                                      ], 8, ["onClick"]),
                                      createVNode("button", {
                                        type: "button",
                                        onClick: ($event) => deleteApproachStep(step),
                                        class: "text-red-600 hover:text-red-800"
                                      }, [
                                        (openBlock(), createBlock("svg", {
                                          class: "w-4 h-4",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24"
                                        }, [
                                          createVNode("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                          })
                                        ]))
                                      ], 8, ["onClick"])
                                    ])
                                  ]),
                                  createVNode("p", { class: "text-sm text-gray-600 mb-1" }, [
                                    createVNode("strong", null, "Short:"),
                                    createTextVNode(" " + toDisplayString(step.short_description), 1)
                                  ]),
                                  createVNode("p", { class: "text-sm text-gray-600" }, [
                                    createVNode("strong", null, "Description:"),
                                    createTextVNode(" " + toDisplayString(step.description), 1)
                                  ])
                                ])
                              ])
                            ]);
                          }), 128))
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "text-center py-8 text-gray-500"
                        }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-12 h-12 mx-auto mb-4 text-gray-400",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M13 10V3L4 14h7v7l9-11h-7z"
                            })
                          ])),
                          createVNode("p", null, "No approach steps found. Run the seeder or add steps manually.")
                        ]))
                      ]),
                      createVNode("div", { class: "flex justify-end" }, [
                        createVNode("button", {
                          type: "submit",
                          disabled: approachProcessing.value,
                          class: "inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                        }, [
                          approachProcessing.value ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                          })) : createCommentVNode("", true),
                          createTextVNode(" " + toDisplayString(approachProcessing.value ? "Saving..." : "Save Approach Section"), 1)
                        ], 8, ["disabled"])
                      ])
                    ])
                  ], 32)
                ])
              ]),
              createVNode("div", {
                id: "leadership-section",
                class: "bg-white rounded-lg shadow-sm border border-gray-200 mb-8"
              }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Leadership Section"),
                  createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Manage the leadership section header and team members")
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(updateLeadership, ["prevent"])
                  }, [
                    createVNode("div", { class: "space-y-6" }, [
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "leadership_header_tag",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, [
                            createTextVNode(" Header Tag "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "leadership_header_tag",
                            "onUpdate:modelValue": ($event) => leadershipForm.header_tag = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": leadershipErrors.value.header_tag }],
                            placeholder: "e.g., OUR LEADERSHIP"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, leadershipForm.header_tag]
                          ]),
                          leadershipErrors.value.header_tag ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(leadershipErrors.value.header_tag), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("label", { class: "relative inline-flex items-center cursor-pointer" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => leadershipForm.is_active = $event,
                              class: "sr-only peer"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, leadershipForm.is_active]
                            ]),
                            createVNode("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" }),
                            createVNode("span", { class: "ml-3 text-sm font-medium text-gray-700" }, "Leadership Section Active")
                          ])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "leadership_title",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, [
                          createTextVNode(" Title "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "leadership_title",
                          "onUpdate:modelValue": ($event) => leadershipForm.title = $event,
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": leadershipErrors.value.title }],
                          placeholder: "e.g., Visionaries Behind Sinki"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, leadershipForm.title]
                        ]),
                        leadershipErrors.value.title ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(leadershipErrors.value.title), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "leadership_description",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, [
                          createTextVNode(" Description "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("textarea", {
                          id: "leadership_description",
                          "onUpdate:modelValue": ($event) => leadershipForm.description = $event,
                          rows: "3",
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none", { "border-red-500": leadershipErrors.value.description }],
                          placeholder: "e.g., Our leadership brings years of experience..."
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, leadershipForm.description]
                        ]),
                        leadershipErrors.value.description ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(leadershipErrors.value.description), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Background Image "),
                        __props.leadershipSection?.background_image ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mb-4"
                        }, [
                          createVNode("div", { class: "relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden" }, [
                            createVNode("img", {
                              src: `/storage/${__props.leadershipSection.background_image}`,
                              alt: "Leadership background",
                              class: "w-full h-full object-cover"
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "absolute top-2 right-2" }, [
                              createVNode("button", {
                                type: "button",
                                onClick: deleteLeadershipBackground,
                                class: "bg-red-600 text-white p-1 rounded-full hover:bg-red-700 transition-colors"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M6 18L18 6M6 6l12 12"
                                  })
                                ]))
                              ])
                            ])
                          ])
                        ])) : createCommentVNode("", true),
                        createVNode("input", {
                          type: "file",
                          accept: "image/*",
                          onChange: uploadLeadershipBackground,
                          class: "w-full border border-gray-300 rounded-md px-3 py-2 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-red file:text-white hover:file:bg-red-700"
                        }, null, 32),
                        createVNode("p", { class: "mt-1 text-xs text-gray-500" }, " Upload a background image for the leadership section. Recommended size: 1920x1080px. ")
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "leadership_background_color",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, " Background Color (Optional) "),
                        withDirectives(createVNode("select", {
                          id: "leadership_background_color",
                          "onUpdate:modelValue": ($event) => leadershipForm.background_color = $event,
                          class: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                        }, [
                          createVNode("option", { value: "" }, "Default"),
                          createVNode("option", { value: "bg-white" }, "White"),
                          createVNode("option", { value: "bg-gray-50" }, "Light Gray"),
                          createVNode("option", { value: "bg-gray-900" }, "Dark Gray"),
                          createVNode("option", { value: "bg-blue-50" }, "Light Blue"),
                          createVNode("option", { value: "bg-green-50" }, "Light Green")
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, leadershipForm.background_color]
                        ])
                      ]),
                      createVNode("div", { class: "border border-gray-200 rounded-lg p-6" }, [
                        createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                          createVNode("h3", { class: "text-lg font-medium text-gray-900" }, "Team Members"),
                          createVNode("button", {
                            type: "button",
                            onClick: addLeadershipMember,
                            class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-brand-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-4 h-4 mr-2",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                              })
                            ])),
                            createTextVNode(" Add Member ")
                          ])
                        ]),
                        __props.leadershipSection?.members?.length ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "space-y-4"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.leadershipSection.members, (member, index) => {
                            return openBlock(), createBlock("div", {
                              key: member.id,
                              class: "border border-gray-300 rounded-lg p-4 bg-gray-50"
                            }, [
                              createVNode("div", { class: "flex items-start justify-between" }, [
                                createVNode("div", { class: "flex items-start space-x-4 flex-1" }, [
                                  createVNode("div", { class: "flex-shrink-0" }, [
                                    createVNode("div", { class: "w-16 h-16 bg-gray-200 rounded-lg overflow-hidden" }, [
                                      member.image ? (openBlock(), createBlock("img", {
                                        key: 0,
                                        src: `/storage/${member.image}`,
                                        alt: member.name,
                                        class: "w-full h-full object-cover"
                                      }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                                        key: 1,
                                        class: "w-full h-full flex items-center justify-center text-gray-400"
                                      }, [
                                        (openBlock(), createBlock("svg", {
                                          class: "w-8 h-8",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24"
                                        }, [
                                          createVNode("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                          })
                                        ]))
                                      ]))
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex-1 min-w-0" }, [
                                    createVNode("div", { class: "flex items-center space-x-3 mb-2" }, [
                                      createVNode("h4", { class: "text-sm font-medium text-gray-900 truncate" }, toDisplayString(member.name), 1),
                                      createVNode("span", {
                                        class: [member.is_active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800", "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"]
                                      }, toDisplayString(member.is_active ? "Active" : "Inactive"), 3)
                                    ]),
                                    createVNode("p", { class: "text-sm text-gray-600 mb-1" }, [
                                      createVNode("strong", null, "Position:"),
                                      createTextVNode(" " + toDisplayString(member.position), 1)
                                    ]),
                                    createVNode("p", { class: "text-xs text-gray-500" }, "Sort Order: " + toDisplayString(member.sort_order), 1),
                                    member.bio ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "mt-2"
                                    }, [
                                      createVNode("p", { class: "text-sm text-gray-600" }, [
                                        createVNode("strong", null, "Bio:"),
                                        createTextVNode(" " + toDisplayString(member.bio.substring(0, 100)) + toDisplayString(member.bio.length > 100 ? "..." : ""), 1)
                                      ])
                                    ])) : createCommentVNode("", true)
                                  ]),
                                  createVNode("div", { class: "flex items-center space-x-2 flex-shrink-0" }, [
                                    createVNode("button", {
                                      type: "button",
                                      onClick: ($event) => editLeadershipMember(member),
                                      class: "text-brand-red hover:text-red-700"
                                    }, [
                                      (openBlock(), createBlock("svg", {
                                        class: "w-4 h-4",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24"
                                      }, [
                                        createVNode("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                        })
                                      ]))
                                    ], 8, ["onClick"]),
                                    createVNode("button", {
                                      type: "button",
                                      onClick: ($event) => deleteLeadershipMember(member),
                                      class: "text-red-600 hover:text-red-800"
                                    }, [
                                      (openBlock(), createBlock("svg", {
                                        class: "w-4 h-4",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24"
                                      }, [
                                        createVNode("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        })
                                      ]))
                                    ], 8, ["onClick"])
                                  ])
                                ])
                              ])
                            ]);
                          }), 128))
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "text-center py-8 text-gray-500"
                        }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-12 h-12 mx-auto mb-4 text-gray-400",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            })
                          ])),
                          createVNode("p", null, "No team members found. Add the first member to get started.")
                        ]))
                      ]),
                      createVNode("div", { class: "flex justify-end" }, [
                        createVNode("button", {
                          type: "submit",
                          disabled: leadershipProcessing.value,
                          class: "inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                        }, [
                          leadershipProcessing.value ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                          })) : createCommentVNode("", true),
                          createTextVNode(" " + toDisplayString(leadershipProcessing.value ? "Saving..." : "Save Leadership Section"), 1)
                        ], 8, ["disabled"])
                      ])
                    ])
                  ], 32)
                ])
              ]),
              showAddServiceModal.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "fixed inset-0 z-50 overflow-y-auto"
              }, [
                createVNode("div", { class: "flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" }, [
                  createVNode("div", {
                    class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                    onClick: cancelServiceEdit
                  }),
                  createVNode("div", { class: "inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" }, [
                    createVNode("div", { class: "sm:flex sm:items-start" }, [
                      createVNode("div", { class: "mt-3 text-center sm:mt-0 sm:text-left w-full" }, [
                        createVNode("h3", { class: "text-lg leading-6 font-medium text-gray-900 mb-4" }, toDisplayString(editingService.value ? "Edit Service Item" : "Add Service Item"), 1),
                        createVNode("form", {
                          onSubmit: withModifiers(saveService, ["prevent"])
                        }, [
                          createVNode("div", { class: "space-y-4" }, [
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "service-title",
                                class: "block text-sm font-medium text-gray-700 mb-2"
                              }, " Title "),
                              withDirectives(createVNode("input", {
                                id: "service-title",
                                "onUpdate:modelValue": ($event) => serviceForm.title = $event,
                                type: "text",
                                required: "",
                                class: ["w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": serviceErrors.value.title }]
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [vModelText, serviceForm.title]
                              ]),
                              serviceErrors.value.title ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-1 text-sm text-red-600"
                              }, toDisplayString(serviceErrors.value.title), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "service-description",
                                class: "block text-sm font-medium text-gray-700 mb-2"
                              }, " Description "),
                              withDirectives(createVNode("textarea", {
                                id: "service-description",
                                "onUpdate:modelValue": ($event) => serviceForm.description = $event,
                                rows: "3",
                                required: "",
                                class: ["w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": serviceErrors.value.description }]
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [vModelText, serviceForm.description]
                              ]),
                              serviceErrors.value.description ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-1 text-sm text-red-600"
                              }, toDisplayString(serviceErrors.value.description), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "service-icon",
                                class: "block text-sm font-medium text-gray-700 mb-2"
                              }, " Icon SVG "),
                              withDirectives(createVNode("textarea", {
                                id: "service-icon",
                                "onUpdate:modelValue": ($event) => serviceForm.icon_svg = $event,
                                rows: "3",
                                placeholder: "<path d='...'/>",
                                class: ["w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red font-mono", { "border-red-500": serviceErrors.value.icon_svg }]
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [vModelText, serviceForm.icon_svg]
                              ]),
                              serviceErrors.value.icon_svg ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-1 text-sm text-red-600"
                              }, toDisplayString(serviceErrors.value.icon_svg), 1)) : createCommentVNode("", true),
                              createVNode("p", { class: "mt-1 text-xs text-gray-500" }, " Enter the path elements for the SVG icon (without <svg> wrapper) ")
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "service-sort-order",
                                class: "block text-sm font-medium text-gray-700 mb-2"
                              }, " Sort Order "),
                              withDirectives(createVNode("input", {
                                id: "service-sort-order",
                                "onUpdate:modelValue": ($event) => serviceForm.sort_order = $event,
                                type: "number",
                                min: "1",
                                required: "",
                                class: ["w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": serviceErrors.value.sort_order }]
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [
                                  vModelText,
                                  serviceForm.sort_order,
                                  void 0,
                                  { number: true }
                                ]
                              ]),
                              serviceErrors.value.sort_order ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-1 text-sm text-red-600"
                              }, toDisplayString(serviceErrors.value.sort_order), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "flex items-center" }, [
                              withDirectives(createVNode("input", {
                                id: "service-is-active",
                                "onUpdate:modelValue": ($event) => serviceForm.is_active = $event,
                                type: "checkbox",
                                class: "rounded border-gray-300 text-brand-red focus:ring-brand-red"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelCheckbox, serviceForm.is_active]
                              ]),
                              createVNode("label", {
                                for: "service-is-active",
                                class: "ml-2 block text-sm text-gray-700"
                              }, " Active ")
                            ])
                          ]),
                          createVNode("div", { class: "mt-5 sm:mt-6 sm:flex sm:flex-row-reverse" }, [
                            createVNode("button", {
                              type: "submit",
                              disabled: serviceProcessing.value,
                              class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-brand-red text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50"
                            }, [
                              serviceProcessing.value ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                              })) : createCommentVNode("", true),
                              createTextVNode(" " + toDisplayString(serviceProcessing.value ? "Saving..." : editingService.value ? "Update" : "Add") + " Service ", 1)
                            ], 8, ["disabled"]),
                            createVNode("button", {
                              type: "button",
                              onClick: cancelServiceEdit,
                              class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:mt-0 sm:w-auto sm:text-sm"
                            }, " Cancel ")
                          ])
                        ], 32)
                      ])
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true),
              showAddApproachStepModal.value ? (openBlock(), createBlock("div", {
                key: 1,
                class: "fixed inset-0 z-50 overflow-y-auto"
              }, [
                createVNode("div", { class: "flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" }, [
                  createVNode("div", {
                    class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                    onClick: cancelApproachStepEdit
                  }),
                  createVNode("div", { class: "inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" }, [
                    createVNode("div", { class: "sm:flex sm:items-start" }, [
                      createVNode("div", { class: "mt-3 text-center sm:mt-0 sm:text-left w-full" }, [
                        createVNode("h3", { class: "text-lg leading-6 font-medium text-gray-900 mb-4" }, toDisplayString(editingApproachStep.value ? "Edit Approach Step" : "Add Approach Step"), 1),
                        createVNode("form", {
                          onSubmit: withModifiers(saveApproachStep, ["prevent"])
                        }, [
                          createVNode("div", { class: "space-y-4" }, [
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "step-number",
                                class: "block text-sm font-medium text-gray-700 mb-2"
                              }, " Step Number "),
                              withDirectives(createVNode("input", {
                                id: "step-number",
                                "onUpdate:modelValue": ($event) => approachStepForm.number = $event,
                                type: "number",
                                min: "1",
                                required: "",
                                class: ["w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": approachStepErrors.value.number }]
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [
                                  vModelText,
                                  approachStepForm.number,
                                  void 0,
                                  { number: true }
                                ]
                              ]),
                              approachStepErrors.value.number ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-1 text-sm text-red-600"
                              }, toDisplayString(approachStepErrors.value.number), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "step-title",
                                class: "block text-sm font-medium text-gray-700 mb-2"
                              }, " Title "),
                              withDirectives(createVNode("input", {
                                id: "step-title",
                                "onUpdate:modelValue": ($event) => approachStepForm.title = $event,
                                type: "text",
                                required: "",
                                class: ["w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": approachStepErrors.value.title }]
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [vModelText, approachStepForm.title]
                              ]),
                              approachStepErrors.value.title ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-1 text-sm text-red-600"
                              }, toDisplayString(approachStepErrors.value.title), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "step-short-description",
                                class: "block text-sm font-medium text-gray-700 mb-2"
                              }, " Short Description "),
                              withDirectives(createVNode("input", {
                                id: "step-short-description",
                                "onUpdate:modelValue": ($event) => approachStepForm.short_description = $event,
                                type: "text",
                                required: "",
                                class: ["w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": approachStepErrors.value.short_description }]
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [vModelText, approachStepForm.short_description]
                              ]),
                              approachStepErrors.value.short_description ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-1 text-sm text-red-600"
                              }, toDisplayString(approachStepErrors.value.short_description), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "step-description",
                                class: "block text-sm font-medium text-gray-700 mb-2"
                              }, " Description "),
                              withDirectives(createVNode("textarea", {
                                id: "step-description",
                                "onUpdate:modelValue": ($event) => approachStepForm.description = $event,
                                rows: "3",
                                required: "",
                                class: ["w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": approachStepErrors.value.description }]
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [vModelText, approachStepForm.description]
                              ]),
                              approachStepErrors.value.description ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-1 text-sm text-red-600"
                              }, toDisplayString(approachStepErrors.value.description), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "step-icon",
                                class: "block text-sm font-medium text-gray-700 mb-2"
                              }, " Icon SVG "),
                              withDirectives(createVNode("textarea", {
                                id: "step-icon",
                                "onUpdate:modelValue": ($event) => approachStepForm.icon_svg = $event,
                                rows: "3",
                                placeholder: "<path d='...'/>",
                                class: ["w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red font-mono", { "border-red-500": approachStepErrors.value.icon_svg }]
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [vModelText, approachStepForm.icon_svg]
                              ]),
                              approachStepErrors.value.icon_svg ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-1 text-sm text-red-600"
                              }, toDisplayString(approachStepErrors.value.icon_svg), 1)) : createCommentVNode("", true),
                              createVNode("p", { class: "mt-1 text-xs text-gray-500" }, " Enter the path elements for the SVG icon (without <svg> wrapper) ")
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "step-sort-order",
                                class: "block text-sm font-medium text-gray-700 mb-2"
                              }, " Sort Order "),
                              withDirectives(createVNode("input", {
                                id: "step-sort-order",
                                "onUpdate:modelValue": ($event) => approachStepForm.sort_order = $event,
                                type: "number",
                                min: "1",
                                required: "",
                                class: ["w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": approachStepErrors.value.sort_order }]
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [
                                  vModelText,
                                  approachStepForm.sort_order,
                                  void 0,
                                  { number: true }
                                ]
                              ]),
                              approachStepErrors.value.sort_order ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-1 text-sm text-red-600"
                              }, toDisplayString(approachStepErrors.value.sort_order), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "flex items-center" }, [
                              withDirectives(createVNode("input", {
                                id: "step-is-active",
                                "onUpdate:modelValue": ($event) => approachStepForm.is_active = $event,
                                type: "checkbox",
                                class: "rounded border-gray-300 text-brand-red focus:ring-brand-red"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelCheckbox, approachStepForm.is_active]
                              ]),
                              createVNode("label", {
                                for: "step-is-active",
                                class: "ml-2 block text-sm text-gray-700"
                              }, " Active ")
                            ])
                          ]),
                          createVNode("div", { class: "mt-5 sm:mt-6 sm:flex sm:flex-row-reverse" }, [
                            createVNode("button", {
                              type: "submit",
                              disabled: approachStepProcessing.value,
                              class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-brand-red text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50"
                            }, [
                              approachStepProcessing.value ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                              })) : createCommentVNode("", true),
                              createTextVNode(" " + toDisplayString(approachStepProcessing.value ? "Saving..." : editingApproachStep.value ? "Update" : "Add") + " Step ", 1)
                            ], 8, ["disabled"]),
                            createVNode("button", {
                              type: "button",
                              onClick: cancelApproachStepEdit,
                              class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:mt-0 sm:w-auto sm:text-sm"
                            }, " Cancel ")
                          ])
                        ], 32)
                      ])
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true),
              showAddLeadershipMemberModal.value ? (openBlock(), createBlock("div", {
                key: 2,
                class: "fixed inset-0 z-50 overflow-y-auto"
              }, [
                createVNode("div", { class: "flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" }, [
                  createVNode("div", {
                    class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                    onClick: cancelLeadershipMemberEdit
                  }),
                  createVNode("div", { class: "inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" }, [
                    createVNode("div", { class: "sm:flex sm:items-start" }, [
                      createVNode("div", { class: "mt-3 text-center sm:mt-0 sm:text-left w-full" }, [
                        createVNode("h3", { class: "text-lg leading-6 font-medium text-gray-900 mb-4" }, toDisplayString(editingLeadershipMember.value ? "Edit Team Member" : "Add Team Member"), 1),
                        createVNode("form", {
                          onSubmit: withModifiers(saveLeadershipMember, ["prevent"])
                        }, [
                          createVNode("div", { class: "space-y-4" }, [
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "member-name",
                                class: "block text-sm font-medium text-gray-700 mb-2"
                              }, [
                                createTextVNode(" Name "),
                                createVNode("span", { class: "text-red-500" }, "*")
                              ]),
                              withDirectives(createVNode("input", {
                                id: "member-name",
                                "onUpdate:modelValue": ($event) => leadershipMemberForm.name = $event,
                                type: "text",
                                required: "",
                                class: ["w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": leadershipMemberErrors.value.name }]
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [vModelText, leadershipMemberForm.name]
                              ]),
                              leadershipMemberErrors.value.name ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-1 text-sm text-red-600"
                              }, toDisplayString(leadershipMemberErrors.value.name), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "member-position",
                                class: "block text-sm font-medium text-gray-700 mb-2"
                              }, [
                                createTextVNode(" Position "),
                                createVNode("span", { class: "text-red-500" }, "*")
                              ]),
                              withDirectives(createVNode("input", {
                                id: "member-position",
                                "onUpdate:modelValue": ($event) => leadershipMemberForm.position = $event,
                                type: "text",
                                required: "",
                                class: ["w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": leadershipMemberErrors.value.position }]
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [vModelText, leadershipMemberForm.position]
                              ]),
                              leadershipMemberErrors.value.position ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-1 text-sm text-red-600"
                              }, toDisplayString(leadershipMemberErrors.value.position), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "member-bio",
                                class: "block text-sm font-medium text-gray-700 mb-2"
                              }, " Bio (Optional) "),
                              withDirectives(createVNode("textarea", {
                                id: "member-bio",
                                "onUpdate:modelValue": ($event) => leadershipMemberForm.bio = $event,
                                rows: "3",
                                class: ["w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": leadershipMemberErrors.value.bio }],
                                placeholder: "Brief description of the team member"
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [vModelText, leadershipMemberForm.bio]
                              ]),
                              leadershipMemberErrors.value.bio ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-1 text-sm text-red-600"
                              }, toDisplayString(leadershipMemberErrors.value.bio), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "member-image",
                                class: "block text-sm font-medium text-gray-700 mb-2"
                              }, " Profile Image (Optional) "),
                              createVNode("input", {
                                id: "member-image",
                                onChange: ($event) => leadershipMemberForm.image = $event.target.files[0],
                                type: "file",
                                accept: "image/*",
                                class: "w-full border border-gray-300 rounded-md px-3 py-2 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-red file:text-white hover:file:bg-red-700"
                              }, null, 40, ["onChange"]),
                              leadershipMemberErrors.value.image ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-1 text-sm text-red-600"
                              }, toDisplayString(leadershipMemberErrors.value.image), 1)) : createCommentVNode("", true),
                              createVNode("p", { class: "mt-1 text-xs text-gray-500" }, " Upload a profile image. Recommended size: 300x400px (3:4 aspect ratio). ")
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "member-linkedin",
                                class: "block text-sm font-medium text-gray-700 mb-2"
                              }, " LinkedIn URL (Optional) "),
                              withDirectives(createVNode("input", {
                                id: "member-linkedin",
                                "onUpdate:modelValue": ($event) => leadershipMemberForm.linkedin_url = $event,
                                type: "url",
                                class: ["w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": leadershipMemberErrors.value.linkedin_url }],
                                placeholder: "https://linkedin.com/in/username"
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [vModelText, leadershipMemberForm.linkedin_url]
                              ]),
                              leadershipMemberErrors.value.linkedin_url ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-1 text-sm text-red-600"
                              }, toDisplayString(leadershipMemberErrors.value.linkedin_url), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "member-twitter",
                                class: "block text-sm font-medium text-gray-700 mb-2"
                              }, " Twitter URL (Optional) "),
                              withDirectives(createVNode("input", {
                                id: "member-twitter",
                                "onUpdate:modelValue": ($event) => leadershipMemberForm.twitter_url = $event,
                                type: "url",
                                class: ["w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": leadershipMemberErrors.value.twitter_url }],
                                placeholder: "https://twitter.com/username"
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [vModelText, leadershipMemberForm.twitter_url]
                              ]),
                              leadershipMemberErrors.value.twitter_url ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-1 text-sm text-red-600"
                              }, toDisplayString(leadershipMemberErrors.value.twitter_url), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "member-sort-order",
                                class: "block text-sm font-medium text-gray-700 mb-2"
                              }, " Sort Order "),
                              withDirectives(createVNode("input", {
                                id: "member-sort-order",
                                "onUpdate:modelValue": ($event) => leadershipMemberForm.sort_order = $event,
                                type: "number",
                                min: "1",
                                required: "",
                                class: ["w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": leadershipMemberErrors.value.sort_order }]
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [
                                  vModelText,
                                  leadershipMemberForm.sort_order,
                                  void 0,
                                  { number: true }
                                ]
                              ]),
                              leadershipMemberErrors.value.sort_order ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-1 text-sm text-red-600"
                              }, toDisplayString(leadershipMemberErrors.value.sort_order), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "flex items-center" }, [
                              withDirectives(createVNode("input", {
                                id: "member-is-active",
                                "onUpdate:modelValue": ($event) => leadershipMemberForm.is_active = $event,
                                type: "checkbox",
                                class: "rounded border-gray-300 text-brand-red focus:ring-brand-red"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelCheckbox, leadershipMemberForm.is_active]
                              ]),
                              createVNode("label", {
                                for: "member-is-active",
                                class: "ml-2 block text-sm text-gray-700"
                              }, " Active ")
                            ])
                          ]),
                          createVNode("div", { class: "mt-5 sm:mt-6 sm:flex sm:flex-row-reverse" }, [
                            createVNode("button", {
                              type: "submit",
                              disabled: leadershipMemberProcessing.value,
                              class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-brand-red text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50"
                            }, [
                              leadershipMemberProcessing.value ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                              })) : createCommentVNode("", true),
                              createTextVNode(" " + toDisplayString(leadershipMemberProcessing.value ? "Saving..." : editingLeadershipMember.value ? "Update" : "Add") + " Member ", 1)
                            ], 8, ["disabled"]),
                            createVNode("button", {
                              type: "button",
                              onClick: cancelLeadershipMemberEdit,
                              class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:mt-0 sm:w-auto sm:text-sm"
                            }, " Cancel ")
                          ])
                        ], 32)
                      ])
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true),
              createVNode("div", {
                id: "why-partner-section",
                class: "bg-white rounded-lg shadow-sm border border-gray-200 mb-8"
              }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Why Partner With Us Section"),
                  createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Manage the why partner section content and features")
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(updateWhyPartner, ["prevent"])
                  }, [
                    createVNode("div", { class: "space-y-6" }, [
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "why_partner_title",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, [
                            createTextVNode(" Title "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "why_partner_title",
                            "onUpdate:modelValue": ($event) => whyPartnerForm.title = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": whyPartnerErrors.value.title }],
                            placeholder: "e.g., Why Partner With Us"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, whyPartnerForm.title]
                          ]),
                          whyPartnerErrors.value.title ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(whyPartnerErrors.value.title), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "why_partner_background_color",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, " Background Color "),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "why_partner_background_color",
                            "onUpdate:modelValue": ($event) => whyPartnerForm.background_color = $event,
                            class: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red",
                            placeholder: "e.g., #ffffff or white"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, whyPartnerForm.background_color]
                          ])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "why_partner_subtitle",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, [
                          createTextVNode(" Subtitle "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("textarea", {
                          id: "why_partner_subtitle",
                          "onUpdate:modelValue": ($event) => whyPartnerForm.subtitle = $event,
                          rows: "3",
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": whyPartnerErrors.value.subtitle }],
                          placeholder: "Enter the subtitle description..."
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, whyPartnerForm.subtitle]
                        ]),
                        whyPartnerErrors.value.subtitle ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(whyPartnerErrors.value.subtitle), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Background Image "),
                        __props.whyPartnerSection?.background_image ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mb-4"
                        }, [
                          createVNode("div", { class: "relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden" }, [
                            createVNode("img", {
                              src: `/storage/${__props.whyPartnerSection.background_image}`,
                              alt: "Why Partner background",
                              class: "w-full h-full object-cover"
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "absolute top-2 right-2" }, [
                              createVNode("button", {
                                type: "button",
                                onClick: deleteWhyPartnerBackground,
                                class: "bg-red-500 hover:bg-red-600 text-white p-1 rounded-md transition-colors duration-200"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  })
                                ]))
                              ])
                            ])
                          ])
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-brand-red transition-colors duration-200" }, [
                          createVNode("input", {
                            type: "file",
                            ref: "whyPartnerBgFileInput",
                            onChange: uploadWhyPartnerBackground,
                            accept: "image/*",
                            class: "hidden"
                          }, null, 544),
                          createVNode("div", { class: "text-center" }, [
                            (openBlock(), createBlock("svg", {
                              class: "mx-auto h-12 w-12 text-gray-400",
                              stroke: "currentColor",
                              fill: "none",
                              viewBox: "0 0 48 48"
                            }, [
                              createVNode("path", {
                                d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                              })
                            ])),
                            createVNode("div", { class: "mt-4" }, [
                              createVNode("button", {
                                type: "button",
                                onClick: ($event) => _ctx.$refs.whyPartnerBgFileInput.click(),
                                class: "bg-brand-red hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
                              }, toDisplayString(__props.whyPartnerSection?.background_image ? "Change Background Image" : "Upload Background Image"), 9, ["onClick"])
                            ]),
                            createVNode("p", { class: "mt-2 text-sm text-gray-500" }, "PNG, JPG, GIF up to 5MB")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "flex justify-end space-x-4" }, [
                        createVNode("button", {
                          type: "submit",
                          disabled: whyPartnerProcessing.value,
                          class: "bg-brand-red hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        }, toDisplayString(whyPartnerProcessing.value ? "Updating..." : "Update Section"), 9, ["disabled"])
                      ])
                    ])
                  ], 32),
                  createVNode("div", { class: "mt-8 pt-8 border-t border-gray-200" }, [
                    createVNode("div", { class: "flex justify-between items-center mb-6" }, [
                      createVNode("h3", { class: "text-lg font-medium text-gray-900" }, "Features"),
                      createVNode("button", {
                        onClick: addWhyPartnerFeature,
                        class: "bg-brand-red hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
                      }, " Add Feature ")
                    ]),
                    createVNode("div", { class: "space-y-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.whyPartnerSection?.features || [], (feature, index) => {
                        return openBlock(), createBlock("div", {
                          key: feature.id,
                          class: "bg-gray-50 p-4 rounded-lg border"
                        }, [
                          createVNode("div", { class: "flex items-start justify-between" }, [
                            createVNode("div", { class: "flex-1" }, [
                              createVNode("h4", { class: "text-lg font-medium text-gray-900" }, toDisplayString(feature.title), 1),
                              createVNode("p", { class: "text-sm text-gray-600 mt-1" }, toDisplayString(feature.description), 1),
                              createVNode("div", { class: "flex items-center mt-2 space-x-4" }, [
                                createVNode("span", { class: "text-xs text-gray-500" }, "Sort Order: " + toDisplayString(feature.sort_order), 1),
                                createVNode("span", { class: "text-xs text-gray-500" }, "Status: " + toDisplayString(feature.is_active ? "Active" : "Inactive"), 1)
                              ])
                            ]),
                            createVNode("div", { class: "flex items-center space-x-2 ml-4" }, [
                              createVNode("button", {
                                onClick: ($event) => editWhyPartnerFeature(feature),
                                class: "bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition-colors duration-200"
                              }, " Edit ", 8, ["onClick"]),
                              createVNode("button", {
                                onClick: ($event) => deleteWhyPartnerFeature(feature.id),
                                class: "bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition-colors duration-200"
                              }, " Delete ", 8, ["onClick"])
                            ])
                          ])
                        ]);
                      }), 128)),
                      !__props.whyPartnerSection?.features?.length ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-center py-8"
                      }, [
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
                            d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          })
                        ])),
                        createVNode("h3", { class: "mt-2 text-sm font-medium text-gray-900" }, "No features"),
                        createVNode("p", { class: "mt-1 text-sm text-gray-500" }, "Get started by adding your first feature.")
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ]),
              whyPartnerFeatureModalOpen.value ? (openBlock(), createBlock("div", {
                key: 3,
                class: "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"
              }, [
                createVNode("div", { class: "relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" }, [
                  createVNode("div", { class: "mt-3" }, [
                    createVNode("div", { class: "flex items-center justify-between mb-4" }, [
                      createVNode("h3", { class: "text-lg font-medium text-gray-900" }, toDisplayString(whyPartnerFeatureModalMode.value === "create" ? "Add New Feature" : "Edit Feature"), 1),
                      createVNode("button", {
                        onClick: cancelWhyPartnerFeatureEdit,
                        class: "text-gray-400 hover:text-gray-600"
                      }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-6 h-6",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M6 18L18 6M6 6l12 12"
                          })
                        ]))
                      ])
                    ]),
                    createVNode("form", {
                      onSubmit: withModifiers(saveWhyPartnerFeature, ["prevent"])
                    }, [
                      createVNode("div", { class: "space-y-4" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "feature_title",
                            class: "block text-sm font-medium text-gray-700 mb-1"
                          }, [
                            createTextVNode(" Title "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "feature_title",
                            "onUpdate:modelValue": ($event) => whyPartnerFeatureForm.title = $event,
                            class: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red",
                            placeholder: "e.g., Certified Databricks Expertise",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, whyPartnerFeatureForm.title]
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "feature_description",
                            class: "block text-sm font-medium text-gray-700 mb-1"
                          }, [
                            createTextVNode(" Description "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("textarea", {
                            id: "feature_description",
                            "onUpdate:modelValue": ($event) => whyPartnerFeatureForm.description = $event,
                            rows: "3",
                            class: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red",
                            placeholder: "Enter the feature description...",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, whyPartnerFeatureForm.description]
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "feature_sort_order",
                            class: "block text-sm font-medium text-gray-700 mb-1"
                          }, [
                            createTextVNode(" Sort Order "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            type: "number",
                            id: "feature_sort_order",
                            "onUpdate:modelValue": ($event) => whyPartnerFeatureForm.sort_order = $event,
                            class: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red",
                            placeholder: "1",
                            min: "0",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [
                              vModelText,
                              whyPartnerFeatureForm.sort_order,
                              void 0,
                              { number: true }
                            ]
                          ])
                        ]),
                        whyPartnerFeatureModalMode.value === "edit" ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex items-center"
                        }, [
                          createVNode("label", { class: "relative inline-flex items-center cursor-pointer" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => whyPartnerFeatureForm.is_active = $event,
                              class: "sr-only peer"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, whyPartnerFeatureForm.is_active]
                            ]),
                            createVNode("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" }),
                            createVNode("span", { class: "ml-3 text-sm font-medium text-gray-700" }, "Feature Active")
                          ])
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "flex justify-end space-x-3 mt-6" }, [
                        createVNode("button", {
                          type: "button",
                          onClick: cancelWhyPartnerFeatureEdit,
                          class: "bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md font-medium transition-colors duration-200"
                        }, " Cancel "),
                        createVNode("button", {
                          type: "submit",
                          disabled: whyPartnerFeatureProcessing.value,
                          class: "bg-brand-red hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        }, toDisplayString(whyPartnerFeatureProcessing.value ? "Saving..." : whyPartnerFeatureModalMode.value === "create" ? "Add Feature" : "Update Feature"), 9, ["disabled"])
                      ])
                    ], 32)
                  ])
                ])
              ])) : createCommentVNode("", true),
              createVNode("div", {
                id: "cta-section",
                class: "bg-white rounded-lg shadow-sm border border-gray-200 mb-8"
              }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "CTA (Call-to-Action) Section"),
                  createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Manage the call-to-action section content and styling")
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(updateCTA, ["prevent"])
                  }, [
                    createVNode("div", { class: "space-y-6" }, [
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "cta_title",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, [
                            createTextVNode(" Title "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("textarea", {
                            id: "cta_title",
                            "onUpdate:modelValue": ($event) => ctaForm.title = $event,
                            rows: "2",
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": ctaErrors.value.title }],
                            placeholder: "e.g., Wherever you are in your data journey, we can<br />help you move faster."
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, ctaForm.title]
                          ]),
                          ctaErrors.value.title ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(ctaErrors.value.title), 1)) : createCommentVNode("", true),
                          createVNode("p", { class: "mt-1 text-xs text-gray-500" }, "HTML tags like <br /> are supported")
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "cta_background_color",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, " Background Color "),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "cta_background_color",
                            "onUpdate:modelValue": ($event) => ctaForm.background_color = $event,
                            class: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red",
                            placeholder: "e.g., #ffffff or white"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, ctaForm.background_color]
                          ])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "cta_description",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, [
                          createTextVNode(" Description "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("textarea", {
                          id: "cta_description",
                          "onUpdate:modelValue": ($event) => ctaForm.description = $event,
                          rows: "2",
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": ctaErrors.value.description }],
                          placeholder: "Enter the description..."
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, ctaForm.description]
                        ]),
                        ctaErrors.value.description ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(ctaErrors.value.description), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "cta_text",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, [
                            createTextVNode(" Button Text "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "cta_text",
                            "onUpdate:modelValue": ($event) => ctaForm.cta_text = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": ctaErrors.value.cta_text }],
                            placeholder: "e.g., Start A Conversation"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, ctaForm.cta_text]
                          ]),
                          ctaErrors.value.cta_text ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(ctaErrors.value.cta_text), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "cta_link",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, [
                            createTextVNode(" Button Link "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "cta_link",
                            "onUpdate:modelValue": ($event) => ctaForm.cta_link = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": ctaErrors.value.cta_link }],
                            placeholder: "e.g., /contact"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, ctaForm.cta_link]
                          ]),
                          ctaErrors.value.cta_link ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(ctaErrors.value.cta_link), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Background Image "),
                        __props.ctaSection?.background_image ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mb-4"
                        }, [
                          createVNode("div", { class: "relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden" }, [
                            createVNode("img", {
                              src: `/storage/${__props.ctaSection.background_image}`,
                              alt: "CTA background",
                              class: "w-full h-full object-cover"
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "absolute top-2 right-2" }, [
                              createVNode("button", {
                                type: "button",
                                onClick: deleteCTABackground,
                                class: "bg-red-500 hover:bg-red-600 text-white p-1 rounded-md transition-colors duration-200"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  })
                                ]))
                              ])
                            ])
                          ])
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-brand-red transition-colors duration-200" }, [
                          createVNode("input", {
                            type: "file",
                            ref: "ctaBgFileInput",
                            onChange: uploadCTABackground,
                            accept: "image/*",
                            class: "hidden"
                          }, null, 544),
                          createVNode("div", { class: "text-center" }, [
                            (openBlock(), createBlock("svg", {
                              class: "mx-auto h-12 w-12 text-gray-400",
                              stroke: "currentColor",
                              fill: "none",
                              viewBox: "0 0 48 48"
                            }, [
                              createVNode("path", {
                                d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                              })
                            ])),
                            createVNode("div", { class: "mt-4" }, [
                              createVNode("button", {
                                type: "button",
                                onClick: ($event) => _ctx.$refs.ctaBgFileInput.click(),
                                class: "bg-brand-red hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
                              }, toDisplayString(__props.ctaSection?.background_image ? "Change Background Image" : "Upload Background Image"), 9, ["onClick"])
                            ]),
                            createVNode("p", { class: "mt-2 text-sm text-gray-500" }, "PNG, JPG, GIF up to 5MB"),
                            createVNode("p", { class: "mt-1 text-xs text-gray-500" }, "Default: /images/cta.webp")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "flex justify-end space-x-4" }, [
                        createVNode("button", {
                          type: "submit",
                          disabled: ctaProcessing.value,
                          class: "bg-brand-red hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        }, toDisplayString(ctaProcessing.value ? "Updating..." : "Update Section"), 9, ["disabled"])
                      ])
                    ])
                  ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/AboutUs/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6225c687"]]);
export {
  Index as default
};
