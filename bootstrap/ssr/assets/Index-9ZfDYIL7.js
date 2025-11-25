import { ref, onMounted, onUnmounted, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, toDisplayString, withModifiers, withDirectives, createTextVNode, vModelText, vModelCheckbox, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { A as AdminLayout } from "./AdminLayout-DZUdEQLU.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    heroSection: Object,
    partnerBadge: Object,
    whatWeDoSection: Object,
    outcomesSection: Object,
    ourApproachSection: Object,
    coreServicesSection: Object,
    platformsSection: Object,
    whatSetsUsApartSection: Object,
    seoSettings: Object
  },
  setup(__props) {
    const activeSection = ref("seo-settings");
    const sectionNav = ref(null);
    const sections = ref([
      {
        id: "seo-settings",
        name: "SEO Settings",
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>'
      },
      {
        id: "hero-section",
        name: "Hero Section",
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>'
      },
      {
        id: "partner-section",
        name: "Partner Badge",
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>'
      },
      {
        id: "what-we-do-section",
        name: "What We Do",
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>'
      },
      {
        id: "outcomes-section",
        name: "Outcomes",
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>'
      },
      {
        id: "our-approach-section",
        name: "Our Approach",
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>'
      },
      {
        id: "core-services-section",
        name: "Core Services",
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>'
      },
      {
        id: "platforms-section",
        name: "Platforms",
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1H8a1 1 0 00-1 1v3M4 7h16"></path>'
      },
      {
        id: "what-sets-us-apart-section",
        name: "What Sets Us Apart",
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>'
      }
    ]);
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.offsetTop - navHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth"
        });
        activeSection.value = sectionId;
      }
    };
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of sections.value) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          activeSection.value = section.id;
          break;
        }
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", updateActiveSection);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", updateActiveSection);
    });
    const props = __props;
    const imagePreview = ref(null);
    const partnerLogoPreview = ref(null);
    const errors = ref({});
    const partnerErrors = ref({});
    const whatWeDoErrors = ref({});
    const itemErrors = ref({});
    const outcomesErrors = ref({});
    const outcomeItemErrors = ref({});
    const ourApproachErrors = ref({});
    const approachImagePreview = ref(null);
    const seoErrors = ref({});
    const ogImagePreview = ref(null);
    const twitterImagePreview = ref(null);
    const coreServicesErrors = ref({});
    const serviceErrors = ref({});
    const showAddServiceModal = ref(false);
    const showEditServiceModal = ref(false);
    const editingServiceId = ref(null);
    const serviceTagsInput = ref("");
    const showAddItemModal = ref(false);
    const showEditItemModal = ref(false);
    const editingItemId = ref(null);
    const showAddOutcomeItemModal = ref(false);
    const showEditOutcomeItemModal = ref(false);
    const editingOutcomeItemId = ref(null);
    const form = useForm({
      heading: props.heroSection?.heading || "We Help You Unlock The Value Of Your Data",
      paragraph: props.heroSection?.paragraph || "We turn raw data into intelligence with Databricks. From data foundations to AI adoption, we deliver secure, scalable systems.",
      cta_text: props.heroSection?.cta_text || "Schedule Free Consultation",
      cta_link: props.heroSection?.cta_link || "#contact",
      is_active: props.heroSection?.is_active ?? true
    });
    const partnerForm = useForm({
      text: props.partnerBadge?.text || "An Official Databricks Partner",
      logo_alt: props.partnerBadge?.logo_alt || "Databricks Logo",
      is_active: props.partnerBadge?.is_active ?? true
    });
    const whatWeDoForm = useForm({
      label: props.whatWeDoSection?.label || "What We Do",
      heading: props.whatWeDoSection?.heading || "We Simplify Your Databricks Journey End-to-End",
      description: props.whatWeDoSection?.description || "Wherever you are in your Databricks journey, planning, migrating, or scaling, we help you move faster and with confidence.",
      is_active: props.whatWeDoSection?.is_active ?? true
    });
    const outcomesForm = useForm({
      label: props.outcomesSection?.label || "Outcomes You Can Expect",
      heading: props.outcomesSection?.heading || "Real Results You'll Achieve With Us",
      description: props.outcomesSection?.description || "Think outcomes, not overhead. Our expertise ensures Databricks delivers exactly what you need.",
      is_active: props.outcomesSection?.is_active ?? true
    });
    const itemForm = useForm({
      title: "",
      description: "",
      icon_svg: "",
      sort_order: 1,
      is_active: true
    });
    const outcomeItemForm = useForm({
      title: "",
      description: "",
      icon_svg: "",
      sort_order: 1,
      is_active: true
    });
    const ourApproachForm = useForm({
      label: props.ourApproachSection?.label || "Our Approach",
      heading: props.ourApproachSection?.heading || "How We Make Databricks Work for You",
      description: props.ourApproachSection?.description || "Our proven 3-step approach ensures Databricks adapts to your business needs, not the other way around.",
      image_alt: props.ourApproachSection?.image_alt || "Our 3-Step Approach",
      is_active: props.ourApproachSection?.is_active ?? true
    });
    const coreServicesForm = useForm({
      label: props.coreServicesSection?.label || "Core Services",
      heading: props.coreServicesSection?.heading || "Databricks Services We Deliver",
      description: props.coreServicesSection?.description || "From data engineering and governance to AI and analytics, we make sure your Databricks investment delivers measurable impact.",
      is_active: props.coreServicesSection?.is_active ?? true
    });
    const serviceForm = useForm({
      title: "",
      description: "",
      icon_svg: "",
      link_url: "",
      sort_order: 1,
      is_active: true
    });
    const seoForm = useForm({
      title: props.seoSettings?.title || "Sinki.ai: Your Databricks Strategy & Innovation Partner",
      description: props.seoSettings?.description || "At Sinki.ai, we help organizations innovate with Databricks by unifying data, accelerating analytics, and delivering AI-powered business outcomes.",
      keywords: props.seoSettings?.keywords || "Databricks, Data Analytics, AI Solutions, Business Intelligence, Data Strategy, Data Engineering, Machine Learning, Big Data",
      og_title: props.seoSettings?.og_title || "",
      og_description: props.seoSettings?.og_description || "",
      og_url: props.seoSettings?.og_url || "https://www.sinki.ai",
      twitter_card: props.seoSettings?.twitter_card || "summary_large_image",
      twitter_title: props.seoSettings?.twitter_title || "",
      twitter_description: props.seoSettings?.twitter_description || "",
      custom_head_tags: props.seoSettings?.custom_head_tags || "",
      is_active: props.seoSettings?.is_active ?? true
    });
    const updateHeroSection = () => {
      form.put(route("admin.homepage.hero.update"), {
        preserveScroll: true,
        onError: (formErrors) => {
          errors.value = formErrors;
        },
        onSuccess: () => {
          errors.value = {};
        }
      });
    };
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        imagePreview.value = e.target.result;
      };
      reader.readAsDataURL(file);
      const imageForm = useForm({
        image: file
      });
      imageForm.post(route("admin.homepage.hero.image.upload"), {
        preserveScroll: true,
        onSuccess: () => {
          imagePreview.value = null;
          window.location.reload();
        },
        onError: (formErrors) => {
          errors.value = formErrors;
          imagePreview.value = null;
        }
      });
    };
    const deleteImage = () => {
      if (confirm("Are you sure you want to delete this background image?")) {
        const deleteForm = useForm({});
        deleteForm.delete(route("admin.homepage.hero.image.delete"), {
          preserveScroll: true,
          onSuccess: () => {
            window.location.reload();
          }
        });
      }
    };
    const updatePartnerBadge = () => {
      partnerForm.put(route("admin.homepage.partner-badge.update"), {
        preserveScroll: true,
        onError: (formErrors) => {
          partnerErrors.value = formErrors;
        },
        onSuccess: () => {
          partnerErrors.value = {};
        }
      });
    };
    const handlePartnerLogoUpload = (event) => {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        partnerLogoPreview.value = e.target.result;
      };
      reader.readAsDataURL(file);
      const logoForm = useForm({
        image: file
      });
      logoForm.post(route("admin.homepage.partner-badge.logo.upload"), {
        preserveScroll: true,
        onSuccess: () => {
          partnerLogoPreview.value = null;
          window.location.reload();
        },
        onError: (formErrors) => {
          partnerErrors.value = formErrors;
          partnerLogoPreview.value = null;
        }
      });
    };
    const deletePartnerLogo = () => {
      if (confirm("Are you sure you want to delete this partner logo?")) {
        const deleteForm = useForm({});
        deleteForm.delete(route("admin.homepage.partner-badge.logo.delete"), {
          preserveScroll: true,
          onSuccess: () => {
            window.location.reload();
          }
        });
      }
    };
    const updateWhatWeDo = () => {
      whatWeDoForm.put(route("admin.homepage.what-we-do.update"), {
        preserveScroll: true,
        onError: (formErrors) => {
          whatWeDoErrors.value = formErrors;
        },
        onSuccess: () => {
          whatWeDoErrors.value = {};
        }
      });
    };
    const closeItemModal = () => {
      showAddItemModal.value = false;
      showEditItemModal.value = false;
      editingItemId.value = null;
      itemForm.reset();
      itemErrors.value = {};
    };
    const addItem = () => {
      itemForm.post(route("admin.homepage.what-we-do.items.store"), {
        preserveScroll: true,
        onError: (formErrors) => {
          itemErrors.value = formErrors;
        },
        onSuccess: () => {
          itemErrors.value = {};
          closeItemModal();
          window.location.reload();
        }
      });
    };
    const editItem = (item) => {
      editingItemId.value = item.id;
      itemForm.title = item.title;
      itemForm.description = item.description;
      itemForm.icon_svg = item.icon_svg;
      itemForm.sort_order = item.sort_order;
      itemForm.is_active = item.is_active;
      showEditItemModal.value = true;
    };
    const updateItem = () => {
      itemForm.put(route("admin.homepage.what-we-do.items.update", editingItemId.value), {
        preserveScroll: true,
        onError: (formErrors) => {
          itemErrors.value = formErrors;
        },
        onSuccess: () => {
          itemErrors.value = {};
          closeItemModal();
          window.location.reload();
        }
      });
    };
    const deleteItem = (itemId) => {
      if (confirm("Are you sure you want to delete this service container?")) {
        const deleteForm = useForm({});
        deleteForm.delete(route("admin.homepage.what-we-do.items.delete", itemId), {
          preserveScroll: true,
          onSuccess: () => {
            window.location.reload();
          }
        });
      }
    };
    const updateOutcomes = () => {
      outcomesForm.put(route("admin.homepage.outcomes.update"), {
        preserveScroll: true,
        onError: (formErrors) => {
          outcomesErrors.value = formErrors;
        },
        onSuccess: () => {
          outcomesErrors.value = {};
        }
      });
    };
    const showAddOutcomeModal = () => {
      outcomeItemForm.title = "";
      outcomeItemForm.description = "";
      outcomeItemForm.icon_svg = "";
      outcomeItemForm.sort_order = 1;
      outcomeItemForm.is_active = true;
      outcomeItemErrors.value = {};
      showAddOutcomeItemModal.value = true;
    };
    const closeOutcomeModal = () => {
      showAddOutcomeItemModal.value = false;
      showEditOutcomeItemModal.value = false;
      editingOutcomeItemId.value = null;
      outcomeItemForm.clearErrors();
      outcomeItemErrors.value = {};
    };
    const submitOutcomeItem = () => {
      if (showEditOutcomeItemModal.value) {
        updateOutcomeItem();
      } else {
        addOutcomeItem();
      }
    };
    const addOutcomeItem = () => {
      outcomeItemForm.post(route("admin.homepage.outcomes.items.store"), {
        preserveScroll: true,
        onError: (formErrors) => {
          outcomeItemErrors.value = formErrors;
        },
        onSuccess: () => {
          outcomeItemErrors.value = {};
          closeOutcomeModal();
          window.location.reload();
        }
      });
    };
    const editOutcomeItem = (item) => {
      editingOutcomeItemId.value = item.id;
      outcomeItemForm.title = item.title;
      outcomeItemForm.description = item.description;
      outcomeItemForm.icon_svg = item.icon_svg;
      outcomeItemForm.sort_order = item.sort_order;
      outcomeItemForm.is_active = item.is_active;
      showEditOutcomeItemModal.value = true;
    };
    const updateOutcomeItem = () => {
      outcomeItemForm.put(route("admin.homepage.outcomes.items.update", editingOutcomeItemId.value), {
        preserveScroll: true,
        onError: (formErrors) => {
          outcomeItemErrors.value = formErrors;
        },
        onSuccess: () => {
          outcomeItemErrors.value = {};
          closeOutcomeModal();
          window.location.reload();
        }
      });
    };
    const deleteOutcomeItem = (itemId) => {
      if (confirm("Are you sure you want to delete this outcome item?")) {
        const deleteForm = useForm({});
        deleteForm.delete(route("admin.homepage.outcomes.items.delete", itemId), {
          preserveScroll: true,
          onSuccess: () => {
            window.location.reload();
          }
        });
      }
    };
    const updateOurApproach = () => {
      ourApproachForm.put(route("admin.homepage.our-approach.update"), {
        preserveScroll: true,
        onError: (formErrors) => {
          ourApproachErrors.value = formErrors;
        },
        onSuccess: () => {
          ourApproachErrors.value = {};
        }
      });
    };
    const handleApproachImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          approachImagePreview.value = e.target.result;
        };
        reader.readAsDataURL(file);
        const formData = new FormData();
        formData.append("image", file);
        const uploadForm = useForm(formData);
        uploadForm.post(route("admin.homepage.our-approach.image.upload"), {
          preserveScroll: true,
          onSuccess: () => {
            window.location.reload();
          }
        });
      }
    };
    const deleteApproachImage = () => {
      if (confirm("Are you sure you want to delete this image?")) {
        const deleteForm = useForm({});
        deleteForm.delete(route("admin.homepage.our-approach.image.delete"), {
          preserveScroll: true,
          onSuccess: () => {
            approachImagePreview.value = null;
            window.location.reload();
          }
        });
      }
    };
    const updateSeoSettings = () => {
      seoForm.put(route("admin.homepage.seo.update"), {
        preserveScroll: true,
        onError: (formErrors) => {
          seoErrors.value = formErrors;
        },
        onSuccess: () => {
          seoErrors.value = {};
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
      const imageForm = useForm({
        image: file,
        type
      });
      imageForm.post(route("admin.homepage.seo.image.upload"), {
        preserveScroll: true,
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
        const deleteForm = useForm({ type });
        deleteForm.delete(route("admin.homepage.seo.image.delete"), {
          preserveScroll: true,
          onSuccess: () => {
            if (type === "og_image") {
              ogImagePreview.value = null;
            } else if (type === "twitter_image") {
              twitterImagePreview.value = null;
            }
            window.location.reload();
          }
        });
      }
    };
    const updateCoreServices = () => {
      coreServicesForm.put(route("admin.homepage.core-services.update"), {
        preserveScroll: true,
        onError: (formErrors) => {
          coreServicesErrors.value = formErrors;
        },
        onSuccess: () => {
          coreServicesErrors.value = {};
        }
      });
    };
    const closeServiceModal = () => {
      showAddServiceModal.value = false;
      showEditServiceModal.value = false;
      editingServiceId.value = null;
      serviceForm.reset();
      serviceErrors.value = {};
      serviceTagsInput.value = "";
    };
    const editService = (service) => {
      editingServiceId.value = service.id;
      serviceForm.title = service.title;
      serviceForm.description = service.description || "";
      serviceForm.icon_svg = service.icon_svg;
      serviceForm.link_url = service.link_url || "";
      serviceForm.sort_order = service.sort_order;
      serviceForm.is_active = service.is_active;
      serviceTagsInput.value = service.tags ? service.tags.join(", ") : "";
      showEditServiceModal.value = true;
    };
    const submitServiceForm = () => {
      const tags = serviceTagsInput.value.split(",").map((tag) => tag.trim()).filter((tag) => tag.length > 0);
      serviceForm.tags = tags;
      if (showEditServiceModal.value) {
        serviceForm.put(route("admin.homepage.core-services.service.update", editingServiceId.value), {
          preserveScroll: true,
          onError: (formErrors) => {
            serviceErrors.value = formErrors;
          },
          onSuccess: () => {
            closeServiceModal();
            window.location.reload();
          }
        });
      } else {
        serviceForm.post(route("admin.homepage.core-services.service.store"), {
          preserveScroll: true,
          onError: (formErrors) => {
            serviceErrors.value = formErrors;
          },
          onSuccess: () => {
            closeServiceModal();
            window.location.reload();
          }
        });
      }
    };
    const deleteService = (serviceId) => {
      if (confirm("Are you sure you want to delete this service? This action cannot be undone.")) {
        const deleteForm = useForm({});
        deleteForm.delete(route("admin.homepage.core-services.service.destroy", serviceId), {
          preserveScroll: true,
          onSuccess: () => {
            window.location.reload();
          }
        });
      }
    };
    const platformsErrors = ref({});
    const platformFormErrors = ref({});
    const showPlatformModal = ref(false);
    const showEditPlatformModal = ref(false);
    const editingPlatformId = ref(null);
    const platformsForm = useForm({
      label: props.platformsSection?.label || "Platforms We Work With",
      heading: props.platformsSection?.heading || "Built on the Platforms You Trust",
      description: props.platformsSection?.description || "We bring Databricks to life on the enterprise platforms you already rely on.",
      is_active: props.platformsSection?.is_active || true
    });
    const platformForm = useForm({
      name: "",
      image_path: "",
      row_number: 1,
      sort_order: 1,
      is_active: true
    });
    const getPlatformsByRow = (rowNumber) => {
      if (!props.platformsSection?.platforms) return [];
      return props.platformsSection.platforms.filter((platform) => platform.row_number === rowNumber).sort((a, b) => a.sort_order - b.sort_order);
    };
    const updatePlatforms = () => {
      platformsForm.put(route("admin.homepage.platforms.update"), {
        preserveScroll: true,
        onSuccess: () => {
          platformsErrors.value = {};
        },
        onError: (errors2) => {
          platformsErrors.value = errors2;
        }
      });
    };
    const openAddPlatformModal = () => {
      showPlatformModal.value = true;
      showEditPlatformModal.value = false;
      platformForm.reset();
      platformFormErrors.value = {};
    };
    const closePlatformModal = () => {
      showPlatformModal.value = false;
      showEditPlatformModal.value = false;
      editingPlatformId.value = null;
      platformForm.reset();
      platformFormErrors.value = {};
    };
    const editPlatform = (platform) => {
      editingPlatformId.value = platform.id;
      platformForm.name = platform.name;
      platformForm.image_path = platform.image_path;
      platformForm.row_number = platform.row_number;
      platformForm.sort_order = platform.sort_order;
      platformForm.is_active = platform.is_active;
      showPlatformModal.value = true;
      showEditPlatformModal.value = true;
    };
    const submitPlatform = () => {
      if (showEditPlatformModal.value) {
        platformForm.put(route("admin.homepage.platforms.platform.update", editingPlatformId.value), {
          preserveScroll: true,
          onSuccess: () => {
            closePlatformModal();
            window.location.reload();
          },
          onError: (errors2) => {
            platformFormErrors.value = errors2;
          }
        });
      } else {
        platformForm.post(route("admin.homepage.platforms.platform.store"), {
          preserveScroll: true,
          onSuccess: () => {
            closePlatformModal();
            window.location.reload();
          },
          onError: (errors2) => {
            platformFormErrors.value = errors2;
          }
        });
      }
    };
    const deletePlatform = (platform) => {
      if (confirm("Are you sure you want to delete this platform? This action cannot be undone.")) {
        const deleteForm = useForm({});
        deleteForm.delete(route("admin.homepage.platforms.platform.destroy", platform.id), {
          preserveScroll: true,
          onSuccess: () => {
            window.location.reload();
          }
        });
      }
    };
    const whatSetsUsApartErrors = ref({});
    const whatSetsUsApartItemErrors = ref({});
    const showWhatSetsUsApartItemModal = ref(false);
    const showEditWhatSetsUsApartItemModal = ref(false);
    const editingWhatSetsUsApartItemId = ref(null);
    const whatSetsUsApartForm = useForm({
      label: props.whatSetsUsApartSection?.label || "What Sets Us Apart",
      heading: props.whatSetsUsApartSection?.heading || "Your Databricks Partner, Every Step of the Way",
      description: props.whatSetsUsApartSection?.description || "We don't just implement Databricks. We simplify it, tailor it, and make it deliver real business outcomes.",
      background_image: props.whatSetsUsApartSection?.background_image || "heroobannersinki.png",
      background_image_alt: props.whatSetsUsApartSection?.background_image_alt || "",
      is_active: props.whatSetsUsApartSection?.is_active || true
    });
    const whatSetsUsApartItemForm = useForm({
      title: "",
      description: "",
      icon_svg: "",
      sort_order: 1,
      is_active: true
    });
    const updateWhatSetsUsApart = () => {
      whatSetsUsApartForm.put(route("admin.homepage.what-sets-us-apart.update"), {
        preserveScroll: true,
        onSuccess: () => {
          whatSetsUsApartErrors.value = {};
        },
        onError: (errors2) => {
          whatSetsUsApartErrors.value = errors2;
        }
      });
    };
    const openAddWhatSetsUsApartItemModal = () => {
      showWhatSetsUsApartItemModal.value = true;
      showEditWhatSetsUsApartItemModal.value = false;
      whatSetsUsApartItemForm.reset();
      whatSetsUsApartItemErrors.value = {};
    };
    const closeWhatSetsUsApartItemModal = () => {
      showWhatSetsUsApartItemModal.value = false;
      showEditWhatSetsUsApartItemModal.value = false;
      editingWhatSetsUsApartItemId.value = null;
      whatSetsUsApartItemForm.reset();
      whatSetsUsApartItemErrors.value = {};
    };
    const editWhatSetsUsApartItem = (item) => {
      editingWhatSetsUsApartItemId.value = item.id;
      whatSetsUsApartItemForm.title = item.title;
      whatSetsUsApartItemForm.description = item.description;
      whatSetsUsApartItemForm.icon_svg = item.icon_svg;
      whatSetsUsApartItemForm.sort_order = item.sort_order;
      whatSetsUsApartItemForm.is_active = item.is_active;
      showWhatSetsUsApartItemModal.value = true;
      showEditWhatSetsUsApartItemModal.value = true;
    };
    const submitWhatSetsUsApartItem = () => {
      if (showEditWhatSetsUsApartItemModal.value) {
        whatSetsUsApartItemForm.put(route("admin.homepage.what-sets-us-apart.item.update", editingWhatSetsUsApartItemId.value), {
          preserveScroll: true,
          onSuccess: () => {
            closeWhatSetsUsApartItemModal();
            window.location.reload();
          },
          onError: (errors2) => {
            whatSetsUsApartItemErrors.value = errors2;
          }
        });
      } else {
        whatSetsUsApartItemForm.post(route("admin.homepage.what-sets-us-apart.item.store"), {
          preserveScroll: true,
          onSuccess: () => {
            closeWhatSetsUsApartItemModal();
            window.location.reload();
          },
          onError: (errors2) => {
            whatSetsUsApartItemErrors.value = errors2;
          }
        });
      }
    };
    const deleteWhatSetsUsApartItem = (item) => {
      if (confirm("Are you sure you want to delete this feature item? This action cannot be undone.")) {
        const deleteForm = useForm({});
        deleteForm.delete(route("admin.homepage.what-sets-us-apart.item.destroy", item.id), {
          preserveScroll: true,
          onSuccess: () => {
            window.location.reload();
          }
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AdminLayout, mergeProps({
        "page-title": "Homepage Management",
        "page-subtitle": "Manage your website's homepage content"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm mb-8" data-v-0050c147${_scopeId}><div class="mx-auto" data-v-0050c147${_scopeId}><nav class="flex space-x-8 overflow-x-auto py-4 px-0" data-v-0050c147${_scopeId}><!--[-->`);
            ssrRenderList(sections.value, (section) => {
              _push2(`<button class="${ssrRenderClass([
                "whitespace-nowrap px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 flex items-center space-x-2",
                activeSection.value === section.id ? "bg-blue-100 text-blue-700 border-blue-200 border" : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              ])}" data-v-0050c147${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0050c147${_scopeId}>${section.icon ?? ""}</svg><span data-v-0050c147${_scopeId}>${ssrInterpolate(section.name)}</span></button>`);
            });
            _push2(`<!--]--></nav></div></div><div id="seo-settings" class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8" data-v-0050c147${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-0050c147${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-0050c147${_scopeId}>SEO Settings</h2><p class="text-sm text-gray-600 mt-1" data-v-0050c147${_scopeId}>Manage meta tags, Open Graph, and Twitter Card settings for better SEO</p></div><div class="p-6" data-v-0050c147${_scopeId}><form data-v-0050c147${_scopeId}><div class="space-y-6" data-v-0050c147${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-0050c147${_scopeId}><div data-v-0050c147${_scopeId}><label for="seo_title" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Page Title <span class="text-red-500" data-v-0050c147${_scopeId}>*</span></label><input type="text" id="seo_title"${ssrRenderAttr("value", unref(seoForm).title)} placeholder="Enter page title" class="${ssrRenderClass([{ "border-red-500": seoErrors.value.title }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-0050c147${_scopeId}>`);
            if (seoErrors.value.title) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(seoErrors.value.title)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center" data-v-0050c147${_scopeId}><label class="relative inline-flex items-center cursor-pointer" data-v-0050c147${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(seoForm).is_active) ? ssrLooseContain(unref(seoForm).is_active, null) : unref(seoForm).is_active) ? " checked" : ""} class="sr-only peer" data-v-0050c147${_scopeId}><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" data-v-0050c147${_scopeId}></div><span class="ml-3 text-sm font-medium text-gray-700" data-v-0050c147${_scopeId}>SEO Settings Active</span></label></div></div><div data-v-0050c147${_scopeId}><label for="seo_description" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Meta Description <span class="text-red-500" data-v-0050c147${_scopeId}>*</span></label><textarea id="seo_description" rows="3" placeholder="Enter meta description (150-160 characters recommended)" class="${ssrRenderClass([{ "border-red-500": seoErrors.value.description }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"])}" data-v-0050c147${_scopeId}>${ssrInterpolate(unref(seoForm).description)}</textarea>`);
            if (seoErrors.value.description) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(seoErrors.value.description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<p class="mt-1 text-xs text-gray-500" data-v-0050c147${_scopeId}>${ssrInterpolate(unref(seoForm).description?.length || 0)}/160 characters</p></div><div data-v-0050c147${_scopeId}><label for="seo_keywords" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Keywords </label><input type="text" id="seo_keywords"${ssrRenderAttr("value", unref(seoForm).keywords)} placeholder="Enter keywords separated by commas" class="${ssrRenderClass([{ "border-red-500": seoErrors.value.keywords }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-0050c147${_scopeId}>`);
            if (seoErrors.value.keywords) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(seoErrors.value.keywords)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<p class="mt-1 text-xs text-gray-500" data-v-0050c147${_scopeId}>Separate keywords with commas</p></div><div class="border-t border-gray-200 pt-6" data-v-0050c147${_scopeId}><h3 class="text-md font-medium text-gray-900 mb-4" data-v-0050c147${_scopeId}>Open Graph Settings</h3><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-0050c147${_scopeId}><div data-v-0050c147${_scopeId}><label for="og_title" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> OG Title </label><input type="text" id="og_title"${ssrRenderAttr("value", unref(seoForm).og_title)} placeholder="Leave empty to use page title" class="${ssrRenderClass([{ "border-red-500": seoErrors.value.og_title }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-0050c147${_scopeId}>`);
            if (seoErrors.value.og_title) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(seoErrors.value.og_title)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-0050c147${_scopeId}><label for="og_url" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> OG URL </label><input type="url" id="og_url"${ssrRenderAttr("value", unref(seoForm).og_url)} placeholder="https://www.sinki.ai" class="${ssrRenderClass([{ "border-red-500": seoErrors.value.og_url }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-0050c147${_scopeId}>`);
            if (seoErrors.value.og_url) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(seoErrors.value.og_url)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="lg:col-span-2" data-v-0050c147${_scopeId}><label for="og_description" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> OG Description </label><textarea id="og_description" rows="2" placeholder="Leave empty to use meta description" class="${ssrRenderClass([{ "border-red-500": seoErrors.value.og_description }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"])}" data-v-0050c147${_scopeId}>${ssrInterpolate(unref(seoForm).og_description)}</textarea>`);
            if (seoErrors.value.og_description) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(seoErrors.value.og_description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="mt-6" data-v-0050c147${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Open Graph Image </label><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-0050c147${_scopeId}><div data-v-0050c147${_scopeId}><div class="border-2 border-dashed border-gray-300 rounded-lg p-4" data-v-0050c147${_scopeId}><div class="text-center" data-v-0050c147${_scopeId}><svg class="mx-auto h-8 w-8 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" data-v-0050c147${_scopeId}><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-0050c147${_scopeId}></path></svg><div class="mt-2" data-v-0050c147${_scopeId}><label for="og_image" class="cursor-pointer" data-v-0050c147${_scopeId}><span class="text-sm font-medium text-gray-900" data-v-0050c147${_scopeId}> Upload OG Image </span><input id="og_image" type="file" accept="image/*" class="sr-only" data-v-0050c147${_scopeId}></label></div><p class="text-xs text-gray-500" data-v-0050c147${_scopeId}>Recommended: 1200x630px</p></div></div></div><div data-v-0050c147${_scopeId}><div class="aspect-[1200/630] bg-gray-100 rounded-lg overflow-hidden" data-v-0050c147${_scopeId}>`);
            if (ogImagePreview.value || __props.seoSettings?.og_image_url) {
              _push2(`<div class="w-full h-full relative group" data-v-0050c147${_scopeId}><img${ssrRenderAttr("src", ogImagePreview.value || __props.seoSettings?.og_image_url)} alt="Open Graph image preview" class="w-full h-full object-cover" data-v-0050c147${_scopeId}><div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center" data-v-0050c147${_scopeId}><button class="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700" data-v-0050c147${_scopeId}> Delete </button></div></div>`);
            } else {
              _push2(`<div class="w-full h-full flex items-center justify-center" data-v-0050c147${_scopeId}><p class="text-sm text-gray-500" data-v-0050c147${_scopeId}>No OG image</p></div>`);
            }
            _push2(`</div></div></div></div></div><div class="border-t border-gray-200 pt-6" data-v-0050c147${_scopeId}><h3 class="text-md font-medium text-gray-900 mb-4" data-v-0050c147${_scopeId}>Twitter Card Settings</h3><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-0050c147${_scopeId}><div data-v-0050c147${_scopeId}><label for="twitter_card" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Card Type </label><select id="twitter_card" class="${ssrRenderClass([{ "border-red-500": seoErrors.value.twitter_card }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-0050c147${_scopeId}><option value="summary" data-v-0050c147${ssrIncludeBooleanAttr(Array.isArray(unref(seoForm).twitter_card) ? ssrLooseContain(unref(seoForm).twitter_card, "summary") : ssrLooseEqual(unref(seoForm).twitter_card, "summary")) ? " selected" : ""}${_scopeId}>Summary</option><option value="summary_large_image" data-v-0050c147${ssrIncludeBooleanAttr(Array.isArray(unref(seoForm).twitter_card) ? ssrLooseContain(unref(seoForm).twitter_card, "summary_large_image") : ssrLooseEqual(unref(seoForm).twitter_card, "summary_large_image")) ? " selected" : ""}${_scopeId}>Summary Large Image</option><option value="app" data-v-0050c147${ssrIncludeBooleanAttr(Array.isArray(unref(seoForm).twitter_card) ? ssrLooseContain(unref(seoForm).twitter_card, "app") : ssrLooseEqual(unref(seoForm).twitter_card, "app")) ? " selected" : ""}${_scopeId}>App</option><option value="player" data-v-0050c147${ssrIncludeBooleanAttr(Array.isArray(unref(seoForm).twitter_card) ? ssrLooseContain(unref(seoForm).twitter_card, "player") : ssrLooseEqual(unref(seoForm).twitter_card, "player")) ? " selected" : ""}${_scopeId}>Player</option></select>`);
            if (seoErrors.value.twitter_card) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(seoErrors.value.twitter_card)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-0050c147${_scopeId}><label for="twitter_title" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Twitter Title </label><input type="text" id="twitter_title"${ssrRenderAttr("value", unref(seoForm).twitter_title)} placeholder="Leave empty to use OG title" class="${ssrRenderClass([{ "border-red-500": seoErrors.value.twitter_title }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-0050c147${_scopeId}>`);
            if (seoErrors.value.twitter_title) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(seoErrors.value.twitter_title)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="lg:col-span-2" data-v-0050c147${_scopeId}><label for="twitter_description" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Twitter Description </label><textarea id="twitter_description" rows="2" placeholder="Leave empty to use OG description" class="${ssrRenderClass([{ "border-red-500": seoErrors.value.twitter_description }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"])}" data-v-0050c147${_scopeId}>${ssrInterpolate(unref(seoForm).twitter_description)}</textarea>`);
            if (seoErrors.value.twitter_description) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(seoErrors.value.twitter_description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="mt-6" data-v-0050c147${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Twitter Image </label><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-0050c147${_scopeId}><div data-v-0050c147${_scopeId}><div class="border-2 border-dashed border-gray-300 rounded-lg p-4" data-v-0050c147${_scopeId}><div class="text-center" data-v-0050c147${_scopeId}><svg class="mx-auto h-8 w-8 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" data-v-0050c147${_scopeId}><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-0050c147${_scopeId}></path></svg><div class="mt-2" data-v-0050c147${_scopeId}><label for="twitter_image" class="cursor-pointer" data-v-0050c147${_scopeId}><span class="text-sm font-medium text-gray-900" data-v-0050c147${_scopeId}> Upload Twitter Image </span><input id="twitter_image" type="file" accept="image/*" class="sr-only" data-v-0050c147${_scopeId}></label></div><p class="text-xs text-gray-500" data-v-0050c147${_scopeId}>Recommended: 1200x675px</p></div></div></div><div data-v-0050c147${_scopeId}><div class="aspect-[1200/675] bg-gray-100 rounded-lg overflow-hidden" data-v-0050c147${_scopeId}>`);
            if (twitterImagePreview.value || __props.seoSettings?.twitter_image_url) {
              _push2(`<div class="w-full h-full relative group" data-v-0050c147${_scopeId}><img${ssrRenderAttr("src", twitterImagePreview.value || __props.seoSettings?.twitter_image_url)} alt="Twitter image preview" class="w-full h-full object-cover" data-v-0050c147${_scopeId}><div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center" data-v-0050c147${_scopeId}><button class="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700" data-v-0050c147${_scopeId}> Delete </button></div></div>`);
            } else {
              _push2(`<div class="w-full h-full flex items-center justify-center" data-v-0050c147${_scopeId}><p class="text-sm text-gray-500" data-v-0050c147${_scopeId}>No Twitter image</p></div>`);
            }
            _push2(`</div></div></div></div></div><div class="border-t border-gray-200 pt-6" data-v-0050c147${_scopeId}><div data-v-0050c147${_scopeId}><label for="custom_head_tags" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Custom Head Tags </label><textarea id="custom_head_tags" rows="4" placeholder="Enter custom meta tags, schema markup, or other head elements" class="${ssrRenderClass([{ "border-red-500": seoErrors.value.custom_head_tags }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none font-mono text-sm"])}" data-v-0050c147${_scopeId}>${ssrInterpolate(unref(seoForm).custom_head_tags)}</textarea>`);
            if (seoErrors.value.custom_head_tags) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(seoErrors.value.custom_head_tags)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<p class="mt-1 text-xs text-gray-500" data-v-0050c147${_scopeId}>Add custom HTML tags that will be inserted in the &lt;head&gt; section</p></div></div><div class="pt-6 border-t border-gray-200" data-v-0050c147${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(seoForm).processing) ? " disabled" : ""} class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150" data-v-0050c147${_scopeId}>`);
            if (unref(seoForm).processing) {
              _push2(`<svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-0050c147${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-0050c147${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-0050c147${_scopeId}></path></svg>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(unref(seoForm).processing ? "Updating..." : "Update SEO Settings")}</button></div></div></form></div></div><div id="hero-section" class="bg-white rounded-lg shadow-sm border border-gray-200" data-v-0050c147${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-0050c147${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-0050c147${_scopeId}>Hero Section</h2><p class="text-sm text-gray-600 mt-1" data-v-0050c147${_scopeId}>Customize the main banner section of your homepage</p></div><div class="p-6" data-v-0050c147${_scopeId}><form data-v-0050c147${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-2 gap-8" data-v-0050c147${_scopeId}><div class="space-y-6" data-v-0050c147${_scopeId}><div data-v-0050c147${_scopeId}><label for="heading" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Heading </label><input type="text" id="heading"${ssrRenderAttr("value", unref(form).heading)} placeholder="Enter hero heading" class="${ssrRenderClass([{ "border-red-500": errors.value.heading }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-0050c147${_scopeId}>`);
            if (errors.value.heading) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(errors.value.heading)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-0050c147${_scopeId}><label for="paragraph" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Description </label><textarea id="paragraph" rows="4" placeholder="Enter hero description" class="${ssrRenderClass([{ "border-red-500": errors.value.paragraph }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"])}" data-v-0050c147${_scopeId}>${ssrInterpolate(unref(form).paragraph)}</textarea>`);
            if (errors.value.paragraph) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(errors.value.paragraph)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-0050c147${_scopeId}><label for="cta_text" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Button Text </label><input type="text" id="cta_text"${ssrRenderAttr("value", unref(form).cta_text)} placeholder="Enter button text" class="${ssrRenderClass([{ "border-red-500": errors.value.cta_text }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-0050c147${_scopeId}>`);
            if (errors.value.cta_text) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(errors.value.cta_text)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-0050c147${_scopeId}><label for="cta_link" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Button Link </label><input type="text" id="cta_link"${ssrRenderAttr("value", unref(form).cta_link)} placeholder="Enter button link (e.g., #contact, /services)" class="${ssrRenderClass([{ "border-red-500": errors.value.cta_link }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-0050c147${_scopeId}>`);
            if (errors.value.cta_link) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(errors.value.cta_link)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-0050c147${_scopeId}><label class="flex items-center" data-v-0050c147${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_active) ? ssrLooseContain(unref(form).is_active, null) : unref(form).is_active) ? " checked" : ""} class="rounded border-gray-300 text-brand-red focus:ring-brand-red" data-v-0050c147${_scopeId}><span class="ml-2 text-sm text-gray-700" data-v-0050c147${_scopeId}>Active</span></label></div><div class="pt-4" data-v-0050c147${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150" data-v-0050c147${_scopeId}>`);
            if (unref(form).processing) {
              _push2(`<svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-0050c147${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-0050c147${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-0050c147${_scopeId}></path></svg>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(unref(form).processing ? "Updating..." : "Update Hero Section")}</button></div></div><div data-v-0050c147${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Background Image </label>`);
            if (__props.heroSection?.background_image || imagePreview.value) {
              _push2(`<div class="mb-4" data-v-0050c147${_scopeId}><div class="relative" data-v-0050c147${_scopeId}><img${ssrRenderAttr("src", imagePreview.value || `/storage/${__props.heroSection.background_image}`)} alt="Hero background" class="w-full h-48 object-cover rounded-lg border border-gray-200" data-v-0050c147${_scopeId}><button type="button" class="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors" title="Delete image" data-v-0050c147${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0050c147${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1H8a1 1 0 00-1 1v3M4 7h16" data-v-0050c147${_scopeId}></path></svg></button></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="border-2 border-dashed border-gray-300 rounded-lg p-6" data-v-0050c147${_scopeId}><div class="text-center" data-v-0050c147${_scopeId}><svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" data-v-0050c147${_scopeId}><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-0050c147${_scopeId}></path></svg><div class="mt-4" data-v-0050c147${_scopeId}><label for="hero_image" class="cursor-pointer" data-v-0050c147${_scopeId}><span class="mt-2 block text-sm font-medium text-gray-900" data-v-0050c147${_scopeId}> Click to upload a new image </span><span class="mt-1 block text-xs text-gray-500" data-v-0050c147${_scopeId}> PNG, JPG, GIF up to 2MB </span></label><input id="hero_image" type="file" accept="image/*" class="sr-only" data-v-0050c147${_scopeId}></div></div></div></div></div></form></div></div><div id="partner-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mt-8" data-v-0050c147${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-0050c147${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-0050c147${_scopeId}>Partner Badge Section</h2><p class="text-sm text-gray-600 mt-1" data-v-0050c147${_scopeId}>Customize the partner badge that appears below the hero section</p></div><div class="p-6" data-v-0050c147${_scopeId}><form data-v-0050c147${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-2 gap-8" data-v-0050c147${_scopeId}><div class="space-y-6" data-v-0050c147${_scopeId}><div data-v-0050c147${_scopeId}><label for="partner_text" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Partner Text </label><input type="text" id="partner_text"${ssrRenderAttr("value", unref(partnerForm).text)} placeholder="Enter partner text" class="${ssrRenderClass([{ "border-red-500": partnerErrors.value.text }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-0050c147${_scopeId}>`);
            if (partnerErrors.value.text) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(partnerErrors.value.text)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-0050c147${_scopeId}><label for="logo_alt" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Logo Alt Text </label><input type="text" id="logo_alt"${ssrRenderAttr("value", unref(partnerForm).logo_alt)} placeholder="Enter logo alt text (for accessibility)" class="${ssrRenderClass([{ "border-red-500": partnerErrors.value.logo_alt }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-0050c147${_scopeId}>`);
            if (partnerErrors.value.logo_alt) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(partnerErrors.value.logo_alt)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-0050c147${_scopeId}><label class="flex items-center" data-v-0050c147${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(partnerForm).is_active) ? ssrLooseContain(unref(partnerForm).is_active, null) : unref(partnerForm).is_active) ? " checked" : ""} class="rounded border-gray-300 text-brand-red focus:ring-brand-red" data-v-0050c147${_scopeId}><span class="ml-2 text-sm text-gray-700" data-v-0050c147${_scopeId}>Active</span></label></div><div class="pt-4" data-v-0050c147${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(partnerForm).processing) ? " disabled" : ""} class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150" data-v-0050c147${_scopeId}>`);
            if (unref(partnerForm).processing) {
              _push2(`<svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-0050c147${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-0050c147${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-0050c147${_scopeId}></path></svg>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(unref(partnerForm).processing ? "Updating..." : "Update Partner Badge")}</button></div></div><div data-v-0050c147${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Partner Logo </label>`);
            if (__props.partnerBadge?.logo_image || partnerLogoPreview.value) {
              _push2(`<div class="mb-4" data-v-0050c147${_scopeId}><div class="relative" data-v-0050c147${_scopeId}><img${ssrRenderAttr("src", partnerLogoPreview.value || `/storage/${__props.partnerBadge.logo_image}`)}${ssrRenderAttr("alt", __props.partnerBadge?.logo_alt || "Partner Logo")} class="w-full max-w-xs h-24 object-contain rounded-lg border border-gray-200 bg-gray-50 p-4" data-v-0050c147${_scopeId}><button type="button" class="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors" title="Delete logo" data-v-0050c147${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0050c147${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1H8a1 1 0 00-1 1v3M4 7h16" data-v-0050c147${_scopeId}></path></svg></button></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="border-2 border-dashed border-gray-300 rounded-lg p-6" data-v-0050c147${_scopeId}><div class="text-center" data-v-0050c147${_scopeId}><svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" data-v-0050c147${_scopeId}><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-0050c147${_scopeId}></path></svg><div class="mt-4" data-v-0050c147${_scopeId}><label for="partner_logo" class="cursor-pointer" data-v-0050c147${_scopeId}><span class="mt-2 block text-sm font-medium text-gray-900" data-v-0050c147${_scopeId}> Click to upload a new logo </span><span class="mt-1 block text-xs text-gray-500" data-v-0050c147${_scopeId}> PNG, JPG, SVG up to 2MB </span></label><input id="partner_logo" type="file" accept="image/*" class="sr-only" data-v-0050c147${_scopeId}></div></div></div></div></div></form></div></div><div id="what-we-do-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mt-8" data-v-0050c147${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-0050c147${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-0050c147${_scopeId}>What We Do Section</h2><p class="text-sm text-gray-600 mt-1" data-v-0050c147${_scopeId}>Manage the heading, description, and service containers</p></div><div class="p-6" data-v-0050c147${_scopeId}><form class="mb-8" data-v-0050c147${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-0050c147${_scopeId}><div data-v-0050c147${_scopeId}><label for="what_we_do_label" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Section Label </label><input type="text" id="what_we_do_label"${ssrRenderAttr("value", unref(whatWeDoForm).label)} placeholder="Enter section label" class="${ssrRenderClass([{ "border-red-500": whatWeDoErrors.value.label }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-0050c147${_scopeId}>`);
            if (whatWeDoErrors.value.label) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(whatWeDoErrors.value.label)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center" data-v-0050c147${_scopeId}><label class="flex items-center" data-v-0050c147${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(whatWeDoForm).is_active) ? ssrLooseContain(unref(whatWeDoForm).is_active, null) : unref(whatWeDoForm).is_active) ? " checked" : ""} class="rounded border-gray-300 text-brand-red focus:ring-brand-red" data-v-0050c147${_scopeId}><span class="ml-2 text-sm text-gray-700" data-v-0050c147${_scopeId}>Active</span></label></div><div class="lg:col-span-2" data-v-0050c147${_scopeId}><label for="what_we_do_heading" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Main Heading </label><input type="text" id="what_we_do_heading"${ssrRenderAttr("value", unref(whatWeDoForm).heading)} placeholder="Enter main heading" class="${ssrRenderClass([{ "border-red-500": whatWeDoErrors.value.heading }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-0050c147${_scopeId}>`);
            if (whatWeDoErrors.value.heading) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(whatWeDoErrors.value.heading)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="lg:col-span-2" data-v-0050c147${_scopeId}><label for="what_we_do_description" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Description </label><textarea id="what_we_do_description" rows="3" placeholder="Enter section description" class="${ssrRenderClass([{ "border-red-500": whatWeDoErrors.value.description }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"])}" data-v-0050c147${_scopeId}>${ssrInterpolate(unref(whatWeDoForm).description)}</textarea>`);
            if (whatWeDoErrors.value.description) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(whatWeDoErrors.value.description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="mt-6" data-v-0050c147${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(whatWeDoForm).processing) ? " disabled" : ""} class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150" data-v-0050c147${_scopeId}>`);
            if (unref(whatWeDoForm).processing) {
              _push2(`<svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-0050c147${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-0050c147${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-0050c147${_scopeId}></path></svg>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(unref(whatWeDoForm).processing ? "Updating..." : "Update Section Info")}</button></div></form><div class="border-t border-gray-200 pt-8" data-v-0050c147${_scopeId}><div class="flex justify-between items-center mb-6" data-v-0050c147${_scopeId}><h3 class="text-lg font-medium text-gray-900" data-v-0050c147${_scopeId}>Service Containers</h3><button type="button" class="inline-flex items-center px-4 py-2 bg-green-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 focus:bg-green-700 active:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition ease-in-out duration-150" data-v-0050c147${_scopeId}><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0050c147${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" data-v-0050c147${_scopeId}></path></svg> Add Container </button></div>`);
            if (__props.whatWeDoSection?.items?.length) {
              _push2(`<div class="space-y-4" data-v-0050c147${_scopeId}><!--[-->`);
              ssrRenderList(__props.whatWeDoSection.items, (item) => {
                _push2(`<div class="border border-gray-200 rounded-lg p-4 bg-gray-50" data-v-0050c147${_scopeId}><div class="flex justify-between items-start" data-v-0050c147${_scopeId}><div class="flex-1" data-v-0050c147${_scopeId}><div class="flex items-center space-x-4 mb-2" data-v-0050c147${_scopeId}><span class="text-sm font-medium text-gray-500" data-v-0050c147${_scopeId}>Order: ${ssrInterpolate(item.sort_order)}</span><span class="${ssrRenderClass([item.is_active ? "text-green-600" : "text-red-600", "text-sm font-medium"])}" data-v-0050c147${_scopeId}>${ssrInterpolate(item.is_active ? "Active" : "Inactive")}</span></div><h4 class="text-lg font-medium text-gray-900 mb-2" data-v-0050c147${_scopeId}>${ssrInterpolate(item.title)}</h4><p class="text-gray-600 mb-3" data-v-0050c147${_scopeId}>${ssrInterpolate(item.description)}</p><div class="bg-white p-2 rounded border inline-block" data-v-0050c147${_scopeId}><div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center" data-v-0050c147${_scopeId}>${item.icon_svg ?? ""}</div></div></div><div class="flex space-x-2 ml-4" data-v-0050c147${_scopeId}><button class="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700" data-v-0050c147${_scopeId}> Edit </button><button class="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700" data-v-0050c147${_scopeId}> Delete </button></div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="text-center py-8 text-gray-500" data-v-0050c147${_scopeId}> No service containers added yet. Click &quot;Add Container&quot; to get started. </div>`);
            }
            _push2(`</div></div></div>`);
            if (showAddItemModal.value || showEditItemModal.value) {
              _push2(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" data-v-0050c147${_scopeId}><div class="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" data-v-0050c147${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-0050c147${_scopeId}><h3 class="text-lg font-semibold text-gray-900" data-v-0050c147${_scopeId}>${ssrInterpolate(showEditItemModal.value ? "Edit Service Container" : "Add Service Container")}</h3></div><form class="p-6" data-v-0050c147${_scopeId}><div class="space-y-6" data-v-0050c147${_scopeId}><div data-v-0050c147${_scopeId}><label for="item_title" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Title </label><input type="text" id="item_title"${ssrRenderAttr("value", unref(itemForm).title)} placeholder="Enter container title" class="${ssrRenderClass([{ "border-red-500": itemErrors.value.title }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-0050c147${_scopeId}>`);
              if (itemErrors.value.title) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(itemErrors.value.title)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-0050c147${_scopeId}><label for="item_description" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Description </label><textarea id="item_description" rows="3" placeholder="Enter container description" class="${ssrRenderClass([{ "border-red-500": itemErrors.value.description }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"])}" data-v-0050c147${_scopeId}>${ssrInterpolate(unref(itemForm).description)}</textarea>`);
              if (itemErrors.value.description) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(itemErrors.value.description)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-0050c147${_scopeId}><label for="item_icon_svg" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Icon SVG Code </label><textarea id="item_icon_svg" rows="4" placeholder="Enter SVG code for the icon" class="${ssrRenderClass([{ "border-red-500": itemErrors.value.icon_svg }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none font-mono text-xs"])}" data-v-0050c147${_scopeId}>${ssrInterpolate(unref(itemForm).icon_svg)}</textarea>`);
              if (itemErrors.value.icon_svg) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(itemErrors.value.icon_svg)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<p class="mt-1 text-xs text-gray-500" data-v-0050c147${_scopeId}>Paste the complete SVG code including &lt;svg&gt; tags</p></div>`);
              if (unref(itemForm).icon_svg) {
                _push2(`<div data-v-0050c147${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}>Icon Preview</label><div class="bg-gray-100 p-4 rounded-lg" data-v-0050c147${_scopeId}><div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto" data-v-0050c147${_scopeId}>${unref(itemForm).icon_svg ?? ""}</div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="grid grid-cols-2 gap-4" data-v-0050c147${_scopeId}><div data-v-0050c147${_scopeId}><label for="item_sort_order" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Sort Order </label><input type="number" id="item_sort_order"${ssrRenderAttr("value", unref(itemForm).sort_order)} class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red" min="1" data-v-0050c147${_scopeId}></div><div class="flex items-end" data-v-0050c147${_scopeId}><label class="flex items-center" data-v-0050c147${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(itemForm).is_active) ? ssrLooseContain(unref(itemForm).is_active, null) : unref(itemForm).is_active) ? " checked" : ""} class="rounded border-gray-300 text-brand-red focus:ring-brand-red" data-v-0050c147${_scopeId}><span class="ml-2 text-sm text-gray-700" data-v-0050c147${_scopeId}>Active</span></label></div></div></div><div class="flex justify-end space-x-3 mt-8" data-v-0050c147${_scopeId}><button type="button" class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50" data-v-0050c147${_scopeId}> Cancel </button><button type="submit"${ssrIncludeBooleanAttr(unref(itemForm).processing) ? " disabled" : ""} class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150" data-v-0050c147${_scopeId}>${ssrInterpolate(unref(itemForm).processing ? "Saving..." : showEditItemModal.value ? "Update Container" : "Add Container")}</button></div></form></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div id="outcomes-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mt-8" data-v-0050c147${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-0050c147${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-0050c147${_scopeId}>Outcomes Section</h2><p class="text-sm text-gray-600 mt-1" data-v-0050c147${_scopeId}>Manage the outcomes you can expect section content</p></div><div class="p-6" data-v-0050c147${_scopeId}><form class="mb-8" data-v-0050c147${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-0050c147${_scopeId}><div data-v-0050c147${_scopeId}><label for="outcomes_label" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Section Label </label><input type="text" id="outcomes_label"${ssrRenderAttr("value", unref(outcomesForm).label)} class="${ssrRenderClass([{ "border-red-500": outcomesErrors.value.label }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-0050c147${_scopeId}>`);
            if (outcomesErrors.value.label) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(outcomesErrors.value.label)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-start" data-v-0050c147${_scopeId}><div class="mt-8" data-v-0050c147${_scopeId}><label class="relative inline-flex items-center cursor-pointer" data-v-0050c147${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(outcomesForm).is_active) ? ssrLooseContain(unref(outcomesForm).is_active, null) : unref(outcomesForm).is_active) ? " checked" : ""} class="sr-only peer" data-v-0050c147${_scopeId}><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" data-v-0050c147${_scopeId}></div><span class="ml-3 text-sm font-medium text-gray-700" data-v-0050c147${_scopeId}>Section Active</span></label></div></div></div><div class="mt-6" data-v-0050c147${_scopeId}><label for="outcomes_heading" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Section Heading </label><input type="text" id="outcomes_heading"${ssrRenderAttr("value", unref(outcomesForm).heading)} class="${ssrRenderClass([{ "border-red-500": outcomesErrors.value.heading }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-0050c147${_scopeId}>`);
            if (outcomesErrors.value.heading) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(outcomesErrors.value.heading)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mt-6" data-v-0050c147${_scopeId}><label for="outcomes_description" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Section Description </label><textarea id="outcomes_description" rows="3" class="${ssrRenderClass([{ "border-red-500": outcomesErrors.value.description }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"])}" data-v-0050c147${_scopeId}>${ssrInterpolate(unref(outcomesForm).description)}</textarea>`);
            if (outcomesErrors.value.description) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(outcomesErrors.value.description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mt-6" data-v-0050c147${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(outcomesForm).processing) ? " disabled" : ""} class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150" data-v-0050c147${_scopeId}>`);
            if (unref(outcomesForm).processing) {
              _push2(`<svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-0050c147${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-0050c147${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-0050c147${_scopeId}></path></svg>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(unref(outcomesForm).processing ? "Updating..." : "Update Section Info")}</button></div></form><div class="border-t border-gray-200 pt-8" data-v-0050c147${_scopeId}><div class="flex justify-between items-center mb-6" data-v-0050c147${_scopeId}><div data-v-0050c147${_scopeId}><h3 class="text-lg font-medium text-gray-900" data-v-0050c147${_scopeId}>Outcome Items</h3><p class="text-sm text-gray-600 mt-1" data-v-0050c147${_scopeId}>Manage individual outcome cards</p></div><button class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 transition ease-in-out duration-150" data-v-0050c147${_scopeId}><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0050c147${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" data-v-0050c147${_scopeId}></path></svg> Add Outcome Item </button></div>`);
            if (__props.outcomesSection?.items?.length) {
              _push2(`<div class="space-y-4" data-v-0050c147${_scopeId}><!--[-->`);
              ssrRenderList(__props.outcomesSection.items, (item) => {
                _push2(`<div class="bg-gray-50 border border-gray-200 rounded-lg p-4" data-v-0050c147${_scopeId}><div class="flex items-start justify-between" data-v-0050c147${_scopeId}><div class="flex items-start space-x-4 flex-1" data-v-0050c147${_scopeId}><div class="flex-shrink-0" data-v-0050c147${_scopeId}><div class="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center" data-v-0050c147${_scopeId}><div class="w-6 h-6 text-white" data-v-0050c147${_scopeId}>${item.icon_svg ?? ""}</div></div></div><div class="flex-1 min-w-0" data-v-0050c147${_scopeId}><h4 class="text-sm font-medium text-gray-900 mb-1" data-v-0050c147${_scopeId}>${ssrInterpolate(item.title)}</h4><p class="text-sm text-gray-600 mb-2" data-v-0050c147${_scopeId}>${ssrInterpolate(item.description)}</p><div class="flex items-center space-x-4 text-xs text-gray-500" data-v-0050c147${_scopeId}><span data-v-0050c147${_scopeId}>Sort Order: ${ssrInterpolate(item.sort_order)}</span><span class="${ssrRenderClass(item.is_active ? "text-green-600" : "text-red-600")}" data-v-0050c147${_scopeId}>${ssrInterpolate(item.is_active ? "Active" : "Inactive")}</span></div></div></div><div class="flex items-center space-x-2 ml-4" data-v-0050c147${_scopeId}><button class="text-blue-600 hover:text-blue-900 text-sm" data-v-0050c147${_scopeId}> Edit </button><button class="text-red-600 hover:text-red-900 text-sm" data-v-0050c147${_scopeId}> Delete </button></div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="text-center py-8" data-v-0050c147${_scopeId}><svg class="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0050c147${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" data-v-0050c147${_scopeId}></path></svg><h3 class="text-sm font-medium text-gray-900 mb-1" data-v-0050c147${_scopeId}>No outcome items</h3><p class="text-sm text-gray-600" data-v-0050c147${_scopeId}>Get started by adding your first outcome item.</p></div>`);
            }
            _push2(`</div></div></div>`);
            if (showAddOutcomeItemModal.value || showEditOutcomeItemModal.value) {
              _push2(`<div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50" data-v-0050c147${_scopeId}><div class="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white" data-v-0050c147${_scopeId}><div class="mt-3" data-v-0050c147${_scopeId}><div class="flex items-center justify-between pb-4 border-b border-gray-200" data-v-0050c147${_scopeId}><h3 class="text-lg font-medium text-gray-900" data-v-0050c147${_scopeId}>${ssrInterpolate(showEditOutcomeItemModal.value ? "Edit Outcome Item" : "Add New Outcome Item")}</h3><button class="text-gray-400 hover:text-gray-600" data-v-0050c147${_scopeId}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0050c147${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-0050c147${_scopeId}></path></svg></button></div><form class="mt-6 space-y-6" data-v-0050c147${_scopeId}><div data-v-0050c147${_scopeId}><label for="outcome_title" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Title <span class="text-red-500" data-v-0050c147${_scopeId}>*</span></label><input type="text" id="outcome_title"${ssrRenderAttr("value", unref(outcomeItemForm).title)} class="${ssrRenderClass([{ "border-red-500": outcomeItemErrors.value.title }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-0050c147${_scopeId}>`);
              if (outcomeItemErrors.value.title) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(outcomeItemErrors.value.title)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-0050c147${_scopeId}><label for="outcome_description" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Description <span class="text-red-500" data-v-0050c147${_scopeId}>*</span></label><textarea id="outcome_description" rows="3" class="${ssrRenderClass([{ "border-red-500": outcomeItemErrors.value.description }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"])}" data-v-0050c147${_scopeId}>${ssrInterpolate(unref(outcomeItemForm).description)}</textarea>`);
              if (outcomeItemErrors.value.description) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(outcomeItemErrors.value.description)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-0050c147${_scopeId}><label for="outcome_icon_svg" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Icon SVG <span class="text-red-500" data-v-0050c147${_scopeId}>*</span></label><textarea id="outcome_icon_svg" rows="6" placeholder="Paste your SVG code here..." class="${ssrRenderClass([{ "border-red-500": outcomeItemErrors.value.icon_svg }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none font-mono text-sm"])}" data-v-0050c147${_scopeId}>${ssrInterpolate(unref(outcomeItemForm).icon_svg)}</textarea>`);
              if (outcomeItemErrors.value.icon_svg) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(outcomeItemErrors.value.icon_svg)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<p class="mt-1 text-xs text-gray-500" data-v-0050c147${_scopeId}>Paste the complete SVG code including the opening and closing tags.</p></div>`);
              if (unref(outcomeItemForm).icon_svg) {
                _push2(`<div class="flex items-center space-x-4" data-v-0050c147${_scopeId}><span class="text-sm font-medium text-gray-700" data-v-0050c147${_scopeId}>Preview:</span><div class="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center" data-v-0050c147${_scopeId}><div class="w-6 h-6 text-white" data-v-0050c147${_scopeId}>${unref(outcomeItemForm).icon_svg ?? ""}</div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="grid grid-cols-2 gap-4" data-v-0050c147${_scopeId}><div data-v-0050c147${_scopeId}><label for="outcome_sort_order" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Sort Order </label><input type="number" id="outcome_sort_order"${ssrRenderAttr("value", unref(outcomeItemForm).sort_order)} min="1" class="${ssrRenderClass([{ "border-red-500": outcomeItemErrors.value.sort_order }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-0050c147${_scopeId}>`);
              if (outcomeItemErrors.value.sort_order) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(outcomeItemErrors.value.sort_order)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex items-center" data-v-0050c147${_scopeId}><label class="relative inline-flex items-center cursor-pointer" data-v-0050c147${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(outcomeItemForm).is_active) ? ssrLooseContain(unref(outcomeItemForm).is_active, null) : unref(outcomeItemForm).is_active) ? " checked" : ""} class="sr-only peer" data-v-0050c147${_scopeId}><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" data-v-0050c147${_scopeId}></div><span class="ml-3 text-sm font-medium text-gray-700" data-v-0050c147${_scopeId}>Active</span></label></div></div><div class="flex items-center justify-end pt-6 border-t border-gray-200 space-x-3" data-v-0050c147${_scopeId}><button type="button" class="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition ease-in-out duration-150" data-v-0050c147${_scopeId}> Cancel </button><button type="submit"${ssrIncludeBooleanAttr(unref(outcomeItemForm).processing) ? " disabled" : ""} class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150" data-v-0050c147${_scopeId}>${ssrInterpolate(unref(outcomeItemForm).processing ? "Saving..." : showEditOutcomeItemModal.value ? "Update Outcome" : "Add Outcome")}</button></div></form></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div id="our-approach-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mt-8" data-v-0050c147${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-0050c147${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-0050c147${_scopeId}>Our Approach Section</h2><p class="text-sm text-gray-600 mt-1" data-v-0050c147${_scopeId}>Manage the our approach section content and image</p></div><div class="p-6" data-v-0050c147${_scopeId}><form class="mb-8" data-v-0050c147${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-0050c147${_scopeId}><div data-v-0050c147${_scopeId}><label for="approach_label" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Section Label </label><input type="text" id="approach_label"${ssrRenderAttr("value", unref(ourApproachForm).label)} class="${ssrRenderClass([{ "border-red-500": ourApproachErrors.value.label }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-0050c147${_scopeId}>`);
            if (ourApproachErrors.value.label) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(ourApproachErrors.value.label)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-start" data-v-0050c147${_scopeId}><div class="mt-8" data-v-0050c147${_scopeId}><label class="relative inline-flex items-center cursor-pointer" data-v-0050c147${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(ourApproachForm).is_active) ? ssrLooseContain(unref(ourApproachForm).is_active, null) : unref(ourApproachForm).is_active) ? " checked" : ""} class="sr-only peer" data-v-0050c147${_scopeId}><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" data-v-0050c147${_scopeId}></div><span class="ml-3 text-sm font-medium text-gray-700" data-v-0050c147${_scopeId}>Section Active</span></label></div></div></div><div class="mt-6" data-v-0050c147${_scopeId}><label for="approach_heading" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Section Heading </label><input type="text" id="approach_heading"${ssrRenderAttr("value", unref(ourApproachForm).heading)} class="${ssrRenderClass([{ "border-red-500": ourApproachErrors.value.heading }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-0050c147${_scopeId}>`);
            if (ourApproachErrors.value.heading) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(ourApproachErrors.value.heading)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mt-6" data-v-0050c147${_scopeId}><label for="approach_description" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Section Description </label><textarea id="approach_description" rows="3" class="${ssrRenderClass([{ "border-red-500": ourApproachErrors.value.description }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"])}" data-v-0050c147${_scopeId}>${ssrInterpolate(unref(ourApproachForm).description)}</textarea>`);
            if (ourApproachErrors.value.description) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(ourApproachErrors.value.description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mt-6" data-v-0050c147${_scopeId}><label for="approach_image_alt" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Image Alt Text </label><input type="text" id="approach_image_alt"${ssrRenderAttr("value", unref(ourApproachForm).image_alt)} class="${ssrRenderClass([{ "border-red-500": ourApproachErrors.value.image_alt }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" placeholder="e.g., Our 3-Step Approach Diagram" data-v-0050c147${_scopeId}>`);
            if (ourApproachErrors.value.image_alt) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(ourApproachErrors.value.image_alt)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<p class="mt-1 text-xs text-gray-500" data-v-0050c147${_scopeId}>This text will be used for accessibility and SEO</p></div><div class="mt-6" data-v-0050c147${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(ourApproachForm).processing) ? " disabled" : ""} class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150" data-v-0050c147${_scopeId}>`);
            if (unref(ourApproachForm).processing) {
              _push2(`<svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-0050c147${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-0050c147${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-0050c147${_scopeId}></path></svg>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(unref(ourApproachForm).processing ? "Updating..." : "Update Section Info")}</button></div></form><div class="border-t border-gray-200 pt-8" data-v-0050c147${_scopeId}><div class="flex justify-between items-center mb-6" data-v-0050c147${_scopeId}><div data-v-0050c147${_scopeId}><h3 class="text-lg font-medium text-gray-900" data-v-0050c147${_scopeId}>Section Image</h3><p class="text-sm text-gray-600 mt-1" data-v-0050c147${_scopeId}>Upload an image for the approach section</p></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-8" data-v-0050c147${_scopeId}><div data-v-0050c147${_scopeId}><div class="border-2 border-dashed border-gray-300 rounded-lg p-6" data-v-0050c147${_scopeId}><div class="text-center" data-v-0050c147${_scopeId}><svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" data-v-0050c147${_scopeId}><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-0050c147${_scopeId}></path></svg><div class="mt-4" data-v-0050c147${_scopeId}><label for="approach-image-upload" class="cursor-pointer" data-v-0050c147${_scopeId}><span class="mt-2 block text-sm font-medium text-gray-900" data-v-0050c147${_scopeId}> Upload a new approach image </span><input id="approach-image-upload" name="approach-image-upload" type="file" class="sr-only" accept="image/*" data-v-0050c147${_scopeId}></label></div><p class="mt-2 text-xs text-gray-500" data-v-0050c147${_scopeId}>PNG, JPG, GIF, SVG up to 2MB</p></div></div></div><div data-v-0050c147${_scopeId}><div class="aspect-square w-full bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center" data-v-0050c147${_scopeId}>`);
            if (approachImagePreview.value || __props.ourApproachSection?.image_url) {
              _push2(`<div class="w-full h-full relative group" data-v-0050c147${_scopeId}><img${ssrRenderAttr("src", approachImagePreview.value || __props.ourApproachSection?.image_url)}${ssrRenderAttr("alt", __props.ourApproachSection?.image_alt || "Approach section preview")} class="w-full h-full object-contain" data-v-0050c147${_scopeId}><div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center" data-v-0050c147${_scopeId}><button class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200" data-v-0050c147${_scopeId}> Delete Image </button></div></div>`);
            } else {
              _push2(`<div class="text-center" data-v-0050c147${_scopeId}><svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0050c147${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" data-v-0050c147${_scopeId}></path></svg><p class="mt-2 text-sm text-gray-500" data-v-0050c147${_scopeId}>No image uploaded</p></div>`);
            }
            _push2(`</div></div></div></div></div></div><div id="core-services-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mt-8" data-v-0050c147${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-0050c147${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-0050c147${_scopeId}>Core Services Section</h2><p class="text-sm text-gray-600 mt-1" data-v-0050c147${_scopeId}>Manage the core services section content and service cards</p></div><div class="p-6" data-v-0050c147${_scopeId}><form class="mb-8" data-v-0050c147${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-0050c147${_scopeId}><div data-v-0050c147${_scopeId}><label for="core_services_label" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Section Label </label><input type="text" id="core_services_label"${ssrRenderAttr("value", unref(coreServicesForm).label)} class="${ssrRenderClass([{ "border-red-500": coreServicesErrors.value.label }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"])}" placeholder="e.g., Core Services" data-v-0050c147${_scopeId}>`);
            if (coreServicesErrors.value.label) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(coreServicesErrors.value.label)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center" data-v-0050c147${_scopeId}><label class="relative inline-flex items-center cursor-pointer" data-v-0050c147${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(coreServicesForm).is_active) ? ssrLooseContain(unref(coreServicesForm).is_active, null) : unref(coreServicesForm).is_active) ? " checked" : ""} class="sr-only peer" data-v-0050c147${_scopeId}><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" data-v-0050c147${_scopeId}></div><span class="ml-3 text-sm font-medium text-gray-700" data-v-0050c147${_scopeId}>Section Active</span></label></div></div><div class="mt-6" data-v-0050c147${_scopeId}><label for="core_services_heading" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Section Heading </label><input type="text" id="core_services_heading"${ssrRenderAttr("value", unref(coreServicesForm).heading)} class="${ssrRenderClass([{ "border-red-500": coreServicesErrors.value.heading }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"])}" placeholder="e.g., Databricks Services We Deliver" data-v-0050c147${_scopeId}>`);
            if (coreServicesErrors.value.heading) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(coreServicesErrors.value.heading)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mt-6" data-v-0050c147${_scopeId}><label for="core_services_description" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Section Description </label><textarea id="core_services_description" rows="3" class="${ssrRenderClass([{ "border-red-500": coreServicesErrors.value.description }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"])}" placeholder="Enter section description" data-v-0050c147${_scopeId}>${ssrInterpolate(unref(coreServicesForm).description)}</textarea>`);
            if (coreServicesErrors.value.description) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(coreServicesErrors.value.description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mt-6" data-v-0050c147${_scopeId}><button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"${ssrIncludeBooleanAttr(unref(coreServicesForm).processing) ? " disabled" : ""} data-v-0050c147${_scopeId}>`);
            if (unref(coreServicesForm).processing) {
              _push2(`<svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-0050c147${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-0050c147${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-0050c147${_scopeId}></path></svg>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(unref(coreServicesForm).processing ? "Updating..." : "Update Section Info")}</button></div></form><div class="border-t border-gray-200 pt-6" data-v-0050c147${_scopeId}><div class="flex items-center justify-between mb-6" data-v-0050c147${_scopeId}><h3 class="text-lg font-medium text-gray-900" data-v-0050c147${_scopeId}>Service Cards</h3><button class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center text-sm" data-v-0050c147${_scopeId}><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0050c147${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" data-v-0050c147${_scopeId}></path></svg> Add Service Card </button></div>`);
            if (__props.coreServicesSection?.services?.length) {
              _push2(`<div class="space-y-4" data-v-0050c147${_scopeId}><!--[-->`);
              ssrRenderList(__props.coreServicesSection.services, (service) => {
                _push2(`<div class="bg-gray-50 rounded-lg p-6 border border-gray-200" data-v-0050c147${_scopeId}><div class="flex items-start justify-between" data-v-0050c147${_scopeId}><div class="flex-1" data-v-0050c147${_scopeId}><h4 class="font-medium text-gray-900 mb-2" data-v-0050c147${_scopeId}>${ssrInterpolate(service.title)}</h4><p class="text-sm text-gray-600 mb-3" data-v-0050c147${_scopeId}>${ssrInterpolate(service.description || "No description")}</p>`);
                if (service.tags?.length) {
                  _push2(`<div class="flex flex-wrap gap-2 mb-3" data-v-0050c147${_scopeId}><!--[-->`);
                  ssrRenderList(service.tags, (tag) => {
                    _push2(`<span class="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full" data-v-0050c147${_scopeId}>${ssrInterpolate(tag)}</span>`);
                  });
                  _push2(`<!--]--></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="flex items-center space-x-4 text-xs text-gray-500" data-v-0050c147${_scopeId}><span data-v-0050c147${_scopeId}>Status: ${ssrInterpolate(service.is_active ? "Active" : "Inactive")}</span><span data-v-0050c147${_scopeId}>Order: ${ssrInterpolate(service.sort_order)}</span>`);
                if (service.link_url) {
                  _push2(`<span data-v-0050c147${_scopeId}>Link: ${ssrInterpolate(service.link_url)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div><div class="flex items-center space-x-2 ml-4" data-v-0050c147${_scopeId}><button class="text-blue-600 hover:text-blue-800 p-2" title="Edit Service" data-v-0050c147${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0050c147${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" data-v-0050c147${_scopeId}></path></svg></button><button class="text-red-600 hover:text-red-800 p-2" title="Delete Service" data-v-0050c147${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0050c147${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-v-0050c147${_scopeId}></path></svg></button></div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="text-center py-12" data-v-0050c147${_scopeId}><svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0050c147${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-v-0050c147${_scopeId}></path></svg><h3 class="mt-2 text-sm font-medium text-gray-900" data-v-0050c147${_scopeId}>No service cards</h3><p class="mt-1 text-sm text-gray-500" data-v-0050c147${_scopeId}>Get started by creating your first service card.</p></div>`);
            }
            _push2(`</div></div></div>`);
            if (showAddServiceModal.value || showEditServiceModal.value) {
              _push2(`<div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50" data-v-0050c147${_scopeId}><div class="relative top-20 mx-auto p-5 border w-11/12 max-w-2xl shadow-lg rounded-md bg-white" data-v-0050c147${_scopeId}><div class="flex items-center justify-between mb-4" data-v-0050c147${_scopeId}><h3 class="text-lg font-medium text-gray-900" data-v-0050c147${_scopeId}>${ssrInterpolate(showEditServiceModal.value ? "Edit Service Card" : "Add Service Card")}</h3><button class="text-gray-400 hover:text-gray-600" data-v-0050c147${_scopeId}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0050c147${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-0050c147${_scopeId}></path></svg></button></div><form class="space-y-6" data-v-0050c147${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-0050c147${_scopeId}><div data-v-0050c147${_scopeId}><label for="service_title" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Service Title * </label><input type="text" id="service_title"${ssrRenderAttr("value", unref(serviceForm).title)} class="${ssrRenderClass([{ "border-red-500": serviceErrors.value.title }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"])}" placeholder="Enter service title" required data-v-0050c147${_scopeId}>`);
              if (serviceErrors.value.title) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(serviceErrors.value.title)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-0050c147${_scopeId}><label for="service_link" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Link URL </label><input type="text" id="service_link"${ssrRenderAttr("value", unref(serviceForm).link_url)} class="${ssrRenderClass([{ "border-red-500": serviceErrors.value.link_url }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"])}" placeholder="e.g., /services/data-engineering" data-v-0050c147${_scopeId}>`);
              if (serviceErrors.value.link_url) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(serviceErrors.value.link_url)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div data-v-0050c147${_scopeId}><label for="service_description" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Description </label><textarea id="service_description" rows="3" class="${ssrRenderClass([{ "border-red-500": serviceErrors.value.description }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"])}" placeholder="Enter service description" data-v-0050c147${_scopeId}>${ssrInterpolate(unref(serviceForm).description)}</textarea>`);
              if (serviceErrors.value.description) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(serviceErrors.value.description)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-0050c147${_scopeId}><label for="service_icon" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Icon SVG Path * </label><textarea id="service_icon" rows="2" class="${ssrRenderClass([{ "border-red-500": serviceErrors.value.icon_svg }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"])}" placeholder="Enter SVG path for the icon (e.g., M19.428 15.428a2 2 0 00-1.022-.547...)" required data-v-0050c147${_scopeId}>${ssrInterpolate(unref(serviceForm).icon_svg)}</textarea>`);
              if (serviceErrors.value.icon_svg) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(serviceErrors.value.icon_svg)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<p class="mt-1 text-xs text-gray-500" data-v-0050c147${_scopeId}>Enter the SVG path element for the icon</p></div><div data-v-0050c147${_scopeId}><label for="service_tags" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Tags (comma-separated) </label><input type="text" id="service_tags"${ssrRenderAttr("value", serviceTagsInput.value)} class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., Data Pipelines, Data Integration, Migration" data-v-0050c147${_scopeId}><p class="mt-1 text-xs text-gray-500" data-v-0050c147${_scopeId}>Separate multiple tags with commas</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-0050c147${_scopeId}><div data-v-0050c147${_scopeId}><label for="service_sort_order" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Sort Order </label><input type="number" id="service_sort_order"${ssrRenderAttr("value", unref(serviceForm).sort_order)} class="${ssrRenderClass([{ "border-red-500": serviceErrors.value.sort_order }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"])}" placeholder="1" min="1" data-v-0050c147${_scopeId}>`);
              if (serviceErrors.value.sort_order) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(serviceErrors.value.sort_order)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex items-center" data-v-0050c147${_scopeId}><label class="relative inline-flex items-center cursor-pointer" data-v-0050c147${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(serviceForm).is_active) ? ssrLooseContain(unref(serviceForm).is_active, null) : unref(serviceForm).is_active) ? " checked" : ""} class="sr-only peer" data-v-0050c147${_scopeId}><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" data-v-0050c147${_scopeId}></div><span class="ml-3 text-sm font-medium text-gray-700" data-v-0050c147${_scopeId}>Service Active</span></label></div></div><div class="flex items-center justify-end space-x-3 pt-4 border-t border-gray-200" data-v-0050c147${_scopeId}><button type="button" class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50" data-v-0050c147${_scopeId}> Cancel </button><button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"${ssrIncludeBooleanAttr(unref(serviceForm).processing) ? " disabled" : ""} data-v-0050c147${_scopeId}>`);
              if (unref(serviceForm).processing) {
                _push2(`<svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-0050c147${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-0050c147${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-0050c147${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(` ${ssrInterpolate(unref(serviceForm).processing ? "Saving..." : showEditServiceModal.value ? "Update Service" : "Create Service")}</button></div></form></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div id="platforms-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mt-8" data-v-0050c147${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-0050c147${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-0050c147${_scopeId}>Platforms Section</h2><p class="text-sm text-gray-600 mt-1" data-v-0050c147${_scopeId}>Manage the platforms section content and platform cards</p></div><div class="p-6" data-v-0050c147${_scopeId}><form class="mb-8" data-v-0050c147${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-0050c147${_scopeId}><div data-v-0050c147${_scopeId}><label for="platforms_label" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Section Label </label><input type="text" id="platforms_label"${ssrRenderAttr("value", unref(platformsForm).label)} class="${ssrRenderClass([{ "border-red-500": platformsErrors.value.label }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"])}" placeholder="e.g., Platforms We Work With" data-v-0050c147${_scopeId}>`);
            if (platformsErrors.value.label) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(platformsErrors.value.label)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center" data-v-0050c147${_scopeId}><label class="relative inline-flex items-center cursor-pointer" data-v-0050c147${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(platformsForm).is_active) ? ssrLooseContain(unref(platformsForm).is_active, null) : unref(platformsForm).is_active) ? " checked" : ""} class="sr-only peer" data-v-0050c147${_scopeId}><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" data-v-0050c147${_scopeId}></div><span class="ml-3 text-sm font-medium text-gray-700" data-v-0050c147${_scopeId}>Section Active</span></label></div></div><div class="mt-6" data-v-0050c147${_scopeId}><label for="platforms_heading" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Section Heading </label><input type="text" id="platforms_heading"${ssrRenderAttr("value", unref(platformsForm).heading)} class="${ssrRenderClass([{ "border-red-500": platformsErrors.value.heading }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"])}" placeholder="e.g., Built on the Platforms You Trust" data-v-0050c147${_scopeId}>`);
            if (platformsErrors.value.heading) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(platformsErrors.value.heading)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mt-6" data-v-0050c147${_scopeId}><label for="platforms_description" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Section Description </label><textarea id="platforms_description" rows="3" class="${ssrRenderClass([{ "border-red-500": platformsErrors.value.description }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"])}" placeholder="e.g., We bring Databricks to life on the enterprise platforms you already rely on." data-v-0050c147${_scopeId}>${ssrInterpolate(unref(platformsForm).description)}</textarea>`);
            if (platformsErrors.value.description) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(platformsErrors.value.description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mt-6" data-v-0050c147${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(platformsForm).processing) ? " disabled" : ""} class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50" data-v-0050c147${_scopeId}>${ssrInterpolate(unref(platformsForm).processing ? "Saving..." : "Update Section")}</button></div></form><div class="space-y-6" data-v-0050c147${_scopeId}><div class="flex justify-between items-center" data-v-0050c147${_scopeId}><h3 class="text-lg font-medium text-gray-900" data-v-0050c147${_scopeId}>Platform Cards</h3><button class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" data-v-0050c147${_scopeId}><svg class="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0050c147${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" data-v-0050c147${_scopeId}></path></svg> Add Platform </button></div><div class="space-y-6" data-v-0050c147${_scopeId}><!--[-->`);
            ssrRenderList([1, 2, 3], (rowNumber) => {
              _push2(`<div class="bg-gray-50 rounded-lg p-4" data-v-0050c147${_scopeId}><h4 class="text-sm font-medium text-gray-700 mb-3" data-v-0050c147${_scopeId}> Row ${ssrInterpolate(rowNumber)} <span class="text-xs text-gray-500" data-v-0050c147${_scopeId}> (${ssrInterpolate(rowNumber === 1 ? "1 platform" : rowNumber === 2 ? "3 platforms" : "2 platforms")}) </span></h4><div class="space-y-3" data-v-0050c147${_scopeId}>`);
              if (getPlatformsByRow(rowNumber).length > 0) {
                _push2(`<!--[-->`);
                ssrRenderList(getPlatformsByRow(rowNumber), (platform) => {
                  _push2(`<div class="bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-between" data-v-0050c147${_scopeId}><div class="flex items-center space-x-4" data-v-0050c147${_scopeId}><div class="flex-shrink-0" data-v-0050c147${_scopeId}><img${ssrRenderAttr("src", `/images/platforms/${platform.image_path}`)}${ssrRenderAttr("alt", platform.name)} class="w-12 h-8 object-contain" data-v-0050c147${_scopeId}></div><div data-v-0050c147${_scopeId}><p class="text-sm font-medium text-gray-900" data-v-0050c147${_scopeId}>${ssrInterpolate(platform.name)}</p><p class="text-xs text-gray-500" data-v-0050c147${_scopeId}> Image: ${ssrInterpolate(platform.image_path)} | Sort: ${ssrInterpolate(platform.sort_order)} <span class="${ssrRenderClass(platform.is_active ? "text-green-600" : "text-red-600")}" data-v-0050c147${_scopeId}> | ${ssrInterpolate(platform.is_active ? "Active" : "Inactive")}</span></p></div></div><div class="flex items-center space-x-2" data-v-0050c147${_scopeId}><button class="text-blue-600 hover:text-blue-800 text-sm font-medium" data-v-0050c147${_scopeId}> Edit </button><button class="text-red-600 hover:text-red-800 text-sm font-medium" data-v-0050c147${_scopeId}> Delete </button></div></div>`);
                });
                _push2(`<!--]-->`);
              } else {
                _push2(`<div class="text-sm text-gray-500 italic text-center py-4" data-v-0050c147${_scopeId}> No platforms in this row </div>`);
              }
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div></div>`);
            if (showPlatformModal.value) {
              _push2(`<div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center p-4" data-v-0050c147${_scopeId}><div class="bg-white rounded-lg shadow-xl max-w-md w-full p-6" data-v-0050c147${_scopeId}><div class="flex justify-between items-center mb-4" data-v-0050c147${_scopeId}><h3 class="text-lg font-medium text-gray-900" data-v-0050c147${_scopeId}>${ssrInterpolate(showEditPlatformModal.value ? "Edit Platform" : "Add Platform")}</h3><button class="text-gray-400 hover:text-gray-600" data-v-0050c147${_scopeId}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0050c147${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-0050c147${_scopeId}></path></svg></button></div><form data-v-0050c147${_scopeId}><div class="space-y-4" data-v-0050c147${_scopeId}><div data-v-0050c147${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}>Platform Name</label><input type="text"${ssrRenderAttr("value", unref(platformForm).name)} class="${ssrRenderClass([{ "border-red-500": platformFormErrors.value.name }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"])}" placeholder="e.g., Databricks" data-v-0050c147${_scopeId}>`);
              if (platformFormErrors.value.name) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(platformFormErrors.value.name)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-0050c147${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}>Image Path</label><input type="text"${ssrRenderAttr("value", unref(platformForm).image_path)} class="${ssrRenderClass([{ "border-red-500": platformFormErrors.value.image_path }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"])}" placeholder="e.g., databricks.png" data-v-0050c147${_scopeId}>`);
              if (platformFormErrors.value.image_path) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(platformFormErrors.value.image_path)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<p class="mt-1 text-xs text-gray-500" data-v-0050c147${_scopeId}>File should be in /public/images/platforms/</p></div><div data-v-0050c147${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}>Row Number</label><select class="${ssrRenderClass([{ "border-red-500": platformFormErrors.value.row_number }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"])}" data-v-0050c147${_scopeId}><option value="1" data-v-0050c147${ssrIncludeBooleanAttr(Array.isArray(unref(platformForm).row_number) ? ssrLooseContain(unref(platformForm).row_number, "1") : ssrLooseEqual(unref(platformForm).row_number, "1")) ? " selected" : ""}${_scopeId}>Row 1 (1 platform)</option><option value="2" data-v-0050c147${ssrIncludeBooleanAttr(Array.isArray(unref(platformForm).row_number) ? ssrLooseContain(unref(platformForm).row_number, "2") : ssrLooseEqual(unref(platformForm).row_number, "2")) ? " selected" : ""}${_scopeId}>Row 2 (3 platforms)</option><option value="3" data-v-0050c147${ssrIncludeBooleanAttr(Array.isArray(unref(platformForm).row_number) ? ssrLooseContain(unref(platformForm).row_number, "3") : ssrLooseEqual(unref(platformForm).row_number, "3")) ? " selected" : ""}${_scopeId}>Row 3 (2 platforms)</option></select>`);
              if (platformFormErrors.value.row_number) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(platformFormErrors.value.row_number)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-0050c147${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}>Sort Order</label><input type="number"${ssrRenderAttr("value", unref(platformForm).sort_order)} class="${ssrRenderClass([{ "border-red-500": platformFormErrors.value.sort_order }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"])}" placeholder="1" min="1" data-v-0050c147${_scopeId}>`);
              if (platformFormErrors.value.sort_order) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(platformFormErrors.value.sort_order)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex items-center" data-v-0050c147${_scopeId}><label class="relative inline-flex items-center cursor-pointer" data-v-0050c147${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(platformForm).is_active) ? ssrLooseContain(unref(platformForm).is_active, null) : unref(platformForm).is_active) ? " checked" : ""} class="sr-only peer" data-v-0050c147${_scopeId}><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" data-v-0050c147${_scopeId}></div><span class="ml-3 text-sm font-medium text-gray-700" data-v-0050c147${_scopeId}>Platform Active</span></label></div></div><div class="mt-6 flex justify-end space-x-3" data-v-0050c147${_scopeId}><button type="button" class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-v-0050c147${_scopeId}> Cancel </button><button type="submit"${ssrIncludeBooleanAttr(unref(platformForm).processing) ? " disabled" : ""} class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50" data-v-0050c147${_scopeId}>${ssrInterpolate(unref(platformForm).processing ? "Saving..." : showEditPlatformModal.value ? "Update Platform" : "Create Platform")}</button></div></form></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div id="what-sets-us-apart-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mt-8" data-v-0050c147${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-0050c147${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-0050c147${_scopeId}>What Sets Us Apart Section</h2><p class="text-sm text-gray-600 mt-1" data-v-0050c147${_scopeId}>Manage the what sets us apart section content, background image, and feature items</p></div><div class="p-6" data-v-0050c147${_scopeId}><form class="mb-8" data-v-0050c147${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-0050c147${_scopeId}><div data-v-0050c147${_scopeId}><label for="what_sets_us_apart_label" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Section Label </label><input type="text" id="what_sets_us_apart_label"${ssrRenderAttr("value", unref(whatSetsUsApartForm).label)} class="${ssrRenderClass([{ "border-red-500": whatSetsUsApartErrors.value.label }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"])}" placeholder="e.g., What Sets Us Apart" data-v-0050c147${_scopeId}>`);
            if (whatSetsUsApartErrors.value.label) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(whatSetsUsApartErrors.value.label)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center" data-v-0050c147${_scopeId}><label class="relative inline-flex items-center cursor-pointer" data-v-0050c147${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(whatSetsUsApartForm).is_active) ? ssrLooseContain(unref(whatSetsUsApartForm).is_active, null) : unref(whatSetsUsApartForm).is_active) ? " checked" : ""} class="sr-only peer" data-v-0050c147${_scopeId}><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" data-v-0050c147${_scopeId}></div><span class="ml-3 text-sm font-medium text-gray-700" data-v-0050c147${_scopeId}>Section Active</span></label></div></div><div class="mt-6" data-v-0050c147${_scopeId}><label for="what_sets_us_apart_heading" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Section Heading </label><input type="text" id="what_sets_us_apart_heading"${ssrRenderAttr("value", unref(whatSetsUsApartForm).heading)} class="${ssrRenderClass([{ "border-red-500": whatSetsUsApartErrors.value.heading }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"])}" placeholder="e.g., Your Databricks Partner, Every Step of the Way" data-v-0050c147${_scopeId}>`);
            if (whatSetsUsApartErrors.value.heading) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(whatSetsUsApartErrors.value.heading)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mt-6" data-v-0050c147${_scopeId}><label for="what_sets_us_apart_description" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Section Description </label><textarea id="what_sets_us_apart_description" rows="3" class="${ssrRenderClass([{ "border-red-500": whatSetsUsApartErrors.value.description }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"])}" placeholder="e.g., We don&#39;t just implement Databricks. We simplify it, tailor it, and make it deliver real business outcomes." data-v-0050c147${_scopeId}>${ssrInterpolate(unref(whatSetsUsApartForm).description)}</textarea>`);
            if (whatSetsUsApartErrors.value.description) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(whatSetsUsApartErrors.value.description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6" data-v-0050c147${_scopeId}><div data-v-0050c147${_scopeId}><label for="what_sets_us_apart_background_image" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Background Image Path </label><input type="text" id="what_sets_us_apart_background_image"${ssrRenderAttr("value", unref(whatSetsUsApartForm).background_image)} class="${ssrRenderClass([{ "border-red-500": whatSetsUsApartErrors.value.background_image }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"])}" placeholder="e.g., heroobannersinki.png" data-v-0050c147${_scopeId}>`);
            if (whatSetsUsApartErrors.value.background_image) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(whatSetsUsApartErrors.value.background_image)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<p class="mt-1 text-xs text-gray-500" data-v-0050c147${_scopeId}>File should be in /public/images/</p></div><div data-v-0050c147${_scopeId}><label for="what_sets_us_apart_background_image_alt" class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}> Background Image Alt Text </label><input type="text" id="what_sets_us_apart_background_image_alt"${ssrRenderAttr("value", unref(whatSetsUsApartForm).background_image_alt)} class="${ssrRenderClass([{ "border-red-500": whatSetsUsApartErrors.value.background_image_alt }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"])}" placeholder="e.g., Background" data-v-0050c147${_scopeId}>`);
            if (whatSetsUsApartErrors.value.background_image_alt) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(whatSetsUsApartErrors.value.background_image_alt)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="mt-6" data-v-0050c147${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(whatSetsUsApartForm).processing) ? " disabled" : ""} class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50" data-v-0050c147${_scopeId}>${ssrInterpolate(unref(whatSetsUsApartForm).processing ? "Saving..." : "Update Section")}</button></div></form><div class="space-y-6" data-v-0050c147${_scopeId}><div class="flex justify-between items-center" data-v-0050c147${_scopeId}><h3 class="text-lg font-medium text-gray-900" data-v-0050c147${_scopeId}>Feature Items</h3><button class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" data-v-0050c147${_scopeId}><svg class="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0050c147${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" data-v-0050c147${_scopeId}></path></svg> Add Feature Item </button></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" data-v-0050c147${_scopeId}><!--[-->`);
            ssrRenderList(__props.whatSetsUsApartSection?.items || [], (item) => {
              _push2(`<div class="bg-gray-50 rounded-lg p-4 border border-gray-200" data-v-0050c147${_scopeId}><div class="flex items-center justify-between mb-3" data-v-0050c147${_scopeId}><div class="flex items-center space-x-2" data-v-0050c147${_scopeId}><div class="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center" data-v-0050c147${_scopeId}><svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-0050c147${_scopeId}><path stroke-linecap="round" stroke-linejoin="round"${ssrRenderAttr("d", item.icon_svg)} data-v-0050c147${_scopeId}></path></svg></div><span class="text-xs text-gray-500" data-v-0050c147${_scopeId}>Sort: ${ssrInterpolate(item.sort_order)}</span></div><span class="${ssrRenderClass([item.is_active ? "text-green-600" : "text-red-600", "text-xs"])}" data-v-0050c147${_scopeId}>${ssrInterpolate(item.is_active ? "Active" : "Inactive")}</span></div><h4 class="text-sm font-medium text-gray-900 mb-2" data-v-0050c147${_scopeId}>${ssrInterpolate(item.title)}</h4><p class="text-xs text-gray-600 mb-3 line-clamp-3" data-v-0050c147${_scopeId}>${ssrInterpolate(item.description)}</p><div class="flex items-center justify-between" data-v-0050c147${_scopeId}><button class="text-blue-600 hover:text-blue-800 text-xs font-medium" data-v-0050c147${_scopeId}> Edit </button><button class="text-red-600 hover:text-red-800 text-xs font-medium" data-v-0050c147${_scopeId}> Delete </button></div></div>`);
            });
            _push2(`<!--]--></div></div>`);
            if (showWhatSetsUsApartItemModal.value) {
              _push2(`<div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center p-4" data-v-0050c147${_scopeId}><div class="bg-white rounded-lg shadow-xl max-w-md w-full p-6" data-v-0050c147${_scopeId}><div class="flex justify-between items-center mb-4" data-v-0050c147${_scopeId}><h3 class="text-lg font-medium text-gray-900" data-v-0050c147${_scopeId}>${ssrInterpolate(showEditWhatSetsUsApartItemModal.value ? "Edit Feature Item" : "Add Feature Item")}</h3><button class="text-gray-400 hover:text-gray-600" data-v-0050c147${_scopeId}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0050c147${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-0050c147${_scopeId}></path></svg></button></div><form data-v-0050c147${_scopeId}><div class="space-y-4" data-v-0050c147${_scopeId}><div data-v-0050c147${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}>Title</label><input type="text"${ssrRenderAttr("value", unref(whatSetsUsApartItemForm).title)} class="${ssrRenderClass([{ "border-red-500": whatSetsUsApartItemErrors.value.title }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"])}" placeholder="e.g., We Simplify Databricks" data-v-0050c147${_scopeId}>`);
              if (whatSetsUsApartItemErrors.value.title) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(whatSetsUsApartItemErrors.value.title)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-0050c147${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}>Description</label><textarea rows="3" class="${ssrRenderClass([{ "border-red-500": whatSetsUsApartItemErrors.value.description }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"])}" placeholder="e.g., Tailored solutions aligned to your business objectives" data-v-0050c147${_scopeId}>${ssrInterpolate(unref(whatSetsUsApartItemForm).description)}</textarea>`);
              if (whatSetsUsApartItemErrors.value.description) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(whatSetsUsApartItemErrors.value.description)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-0050c147${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}>Icon SVG Path</label><textarea rows="2" class="${ssrRenderClass([{ "border-red-500": whatSetsUsApartItemErrors.value.icon_svg }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"])}" placeholder="e.g., M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1z" data-v-0050c147${_scopeId}>${ssrInterpolate(unref(whatSetsUsApartItemForm).icon_svg)}</textarea>`);
              if (whatSetsUsApartItemErrors.value.icon_svg) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(whatSetsUsApartItemErrors.value.icon_svg)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<p class="mt-1 text-xs text-gray-500" data-v-0050c147${_scopeId}>SVG path data for the icon</p></div><div data-v-0050c147${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-0050c147${_scopeId}>Sort Order</label><input type="number"${ssrRenderAttr("value", unref(whatSetsUsApartItemForm).sort_order)} class="${ssrRenderClass([{ "border-red-500": whatSetsUsApartItemErrors.value.sort_order }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"])}" placeholder="1" min="1" data-v-0050c147${_scopeId}>`);
              if (whatSetsUsApartItemErrors.value.sort_order) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-0050c147${_scopeId}>${ssrInterpolate(whatSetsUsApartItemErrors.value.sort_order)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex items-center" data-v-0050c147${_scopeId}><label class="relative inline-flex items-center cursor-pointer" data-v-0050c147${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(whatSetsUsApartItemForm).is_active) ? ssrLooseContain(unref(whatSetsUsApartItemForm).is_active, null) : unref(whatSetsUsApartItemForm).is_active) ? " checked" : ""} class="sr-only peer" data-v-0050c147${_scopeId}><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" data-v-0050c147${_scopeId}></div><span class="ml-3 text-sm font-medium text-gray-700" data-v-0050c147${_scopeId}>Item Active</span></label></div></div><div class="mt-6 flex justify-end space-x-3" data-v-0050c147${_scopeId}><button type="button" class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-v-0050c147${_scopeId}> Cancel </button><button type="submit"${ssrIncludeBooleanAttr(unref(whatSetsUsApartItemForm).processing) ? " disabled" : ""} class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50" data-v-0050c147${_scopeId}>${ssrInterpolate(unref(whatSetsUsApartItemForm).processing ? "Saving..." : showEditWhatSetsUsApartItemModal.value ? "Update Item" : "Create Item")}</button></div></form></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
            if (_ctx.$page.props.flash.success) {
              _push2(`<div class="mt-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg" data-v-0050c147${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.success)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.flash.error) {
              _push2(`<div class="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg" data-v-0050c147${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.error)}</div>`);
            } else {
              _push2(`<!---->`);
            }
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
                            "onUpdate:modelValue": ($event) => unref(seoForm).title = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": seoErrors.value.title }],
                            placeholder: "Enter page title"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, unref(seoForm).title]
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
                              "onUpdate:modelValue": ($event) => unref(seoForm).is_active = $event,
                              class: "sr-only peer"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, unref(seoForm).is_active]
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
                          "onUpdate:modelValue": ($event) => unref(seoForm).description = $event,
                          rows: "3",
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none", { "border-red-500": seoErrors.value.description }],
                          placeholder: "Enter meta description (150-160 characters recommended)"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(seoForm).description]
                        ]),
                        seoErrors.value.description ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(seoErrors.value.description), 1)) : createCommentVNode("", true),
                        createVNode("p", { class: "mt-1 text-xs text-gray-500" }, toDisplayString(unref(seoForm).description?.length || 0) + "/160 characters", 1)
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "seo_keywords",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, " Keywords "),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "seo_keywords",
                          "onUpdate:modelValue": ($event) => unref(seoForm).keywords = $event,
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": seoErrors.value.keywords }],
                          placeholder: "Enter keywords separated by commas"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(seoForm).keywords]
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
                              "onUpdate:modelValue": ($event) => unref(seoForm).og_title = $event,
                              class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": seoErrors.value.og_title }],
                              placeholder: "Leave empty to use page title"
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(seoForm).og_title]
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
                              "onUpdate:modelValue": ($event) => unref(seoForm).og_url = $event,
                              class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": seoErrors.value.og_url }],
                              placeholder: "https://www.sinki.ai"
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(seoForm).og_url]
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
                              "onUpdate:modelValue": ($event) => unref(seoForm).og_description = $event,
                              rows: "2",
                              class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none", { "border-red-500": seoErrors.value.og_description }],
                              placeholder: "Leave empty to use meta description"
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(seoForm).og_description]
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
                              createVNode("div", { class: "border-2 border-dashed border-gray-300 rounded-lg p-4" }, [
                                createVNode("div", { class: "text-center" }, [
                                  (openBlock(), createBlock("svg", {
                                    class: "mx-auto h-8 w-8 text-gray-400",
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
                                  createVNode("div", { class: "mt-2" }, [
                                    createVNode("label", {
                                      for: "og_image",
                                      class: "cursor-pointer"
                                    }, [
                                      createVNode("span", { class: "text-sm font-medium text-gray-900" }, " Upload OG Image "),
                                      createVNode("input", {
                                        id: "og_image",
                                        type: "file",
                                        accept: "image/*",
                                        onChange: ($event) => handleSeoImageUpload($event, "og_image"),
                                        class: "sr-only"
                                      }, null, 40, ["onChange"])
                                    ])
                                  ]),
                                  createVNode("p", { class: "text-xs text-gray-500" }, "Recommended: 1200x630px")
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
                                      onClick: ($event) => deleteSeoImage("og_image"),
                                      class: "bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                                    }, " Delete ", 8, ["onClick"])
                                  ])
                                ])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "w-full h-full flex items-center justify-center"
                                }, [
                                  createVNode("p", { class: "text-sm text-gray-500" }, "No OG image")
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
                              "onUpdate:modelValue": ($event) => unref(seoForm).twitter_card = $event,
                              class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": seoErrors.value.twitter_card }]
                            }, [
                              createVNode("option", { value: "summary" }, "Summary"),
                              createVNode("option", { value: "summary_large_image" }, "Summary Large Image"),
                              createVNode("option", { value: "app" }, "App"),
                              createVNode("option", { value: "player" }, "Player")
                            ], 10, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(seoForm).twitter_card]
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
                              "onUpdate:modelValue": ($event) => unref(seoForm).twitter_title = $event,
                              class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": seoErrors.value.twitter_title }],
                              placeholder: "Leave empty to use OG title"
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(seoForm).twitter_title]
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
                              "onUpdate:modelValue": ($event) => unref(seoForm).twitter_description = $event,
                              rows: "2",
                              class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none", { "border-red-500": seoErrors.value.twitter_description }],
                              placeholder: "Leave empty to use OG description"
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(seoForm).twitter_description]
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
                              createVNode("div", { class: "border-2 border-dashed border-gray-300 rounded-lg p-4" }, [
                                createVNode("div", { class: "text-center" }, [
                                  (openBlock(), createBlock("svg", {
                                    class: "mx-auto h-8 w-8 text-gray-400",
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
                                  createVNode("div", { class: "mt-2" }, [
                                    createVNode("label", {
                                      for: "twitter_image",
                                      class: "cursor-pointer"
                                    }, [
                                      createVNode("span", { class: "text-sm font-medium text-gray-900" }, " Upload Twitter Image "),
                                      createVNode("input", {
                                        id: "twitter_image",
                                        type: "file",
                                        accept: "image/*",
                                        onChange: ($event) => handleSeoImageUpload($event, "twitter_image"),
                                        class: "sr-only"
                                      }, null, 40, ["onChange"])
                                    ])
                                  ]),
                                  createVNode("p", { class: "text-xs text-gray-500" }, "Recommended: 1200x675px")
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
                                      onClick: ($event) => deleteSeoImage("twitter_image"),
                                      class: "bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                                    }, " Delete ", 8, ["onClick"])
                                  ])
                                ])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "w-full h-full flex items-center justify-center"
                                }, [
                                  createVNode("p", { class: "text-sm text-gray-500" }, "No Twitter image")
                                ]))
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "border-t border-gray-200 pt-6" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "custom_head_tags",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, " Custom Head Tags "),
                          withDirectives(createVNode("textarea", {
                            id: "custom_head_tags",
                            "onUpdate:modelValue": ($event) => unref(seoForm).custom_head_tags = $event,
                            rows: "4",
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none font-mono text-sm", { "border-red-500": seoErrors.value.custom_head_tags }],
                            placeholder: "Enter custom meta tags, schema markup, or other head elements"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, unref(seoForm).custom_head_tags]
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
                          disabled: unref(seoForm).processing,
                          class: "inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
                        }, [
                          unref(seoForm).processing ? (openBlock(), createBlock("svg", {
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
                          createTextVNode(" " + toDisplayString(unref(seoForm).processing ? "Updating..." : "Update SEO Settings"), 1)
                        ], 8, ["disabled"])
                      ])
                    ])
                  ], 32)
                ])
              ]),
              createVNode("div", {
                id: "hero-section",
                class: "bg-white rounded-lg shadow-sm border border-gray-200"
              }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Hero Section"),
                  createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Customize the main banner section of your homepage")
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(updateHeroSection, ["prevent"])
                  }, [
                    createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-8" }, [
                      createVNode("div", { class: "space-y-6" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "heading",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, " Heading "),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "heading",
                            "onUpdate:modelValue": ($event) => unref(form).heading = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": errors.value.heading }],
                            placeholder: "Enter hero heading"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).heading]
                          ]),
                          errors.value.heading ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(errors.value.heading), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "paragraph",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, " Description "),
                          withDirectives(createVNode("textarea", {
                            id: "paragraph",
                            "onUpdate:modelValue": ($event) => unref(form).paragraph = $event,
                            rows: "4",
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none", { "border-red-500": errors.value.paragraph }],
                            placeholder: "Enter hero description"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).paragraph]
                          ]),
                          errors.value.paragraph ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(errors.value.paragraph), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "cta_text",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, " Button Text "),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "cta_text",
                            "onUpdate:modelValue": ($event) => unref(form).cta_text = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": errors.value.cta_text }],
                            placeholder: "Enter button text"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).cta_text]
                          ]),
                          errors.value.cta_text ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(errors.value.cta_text), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "cta_link",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, " Button Link "),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "cta_link",
                            "onUpdate:modelValue": ($event) => unref(form).cta_link = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": errors.value.cta_link }],
                            placeholder: "Enter button link (e.g., #contact, /services)"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).cta_link]
                          ]),
                          errors.value.cta_link ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(errors.value.cta_link), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "flex items-center" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => unref(form).is_active = $event,
                              class: "rounded border-gray-300 text-brand-red focus:ring-brand-red"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, unref(form).is_active]
                            ]),
                            createVNode("span", { class: "ml-2 text-sm text-gray-700" }, "Active")
                          ])
                        ]),
                        createVNode("div", { class: "pt-4" }, [
                          createVNode("button", {
                            type: "submit",
                            disabled: unref(form).processing,
                            class: "inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
                          }, [
                            unref(form).processing ? (openBlock(), createBlock("svg", {
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
                            createTextVNode(" " + toDisplayString(unref(form).processing ? "Updating..." : "Update Hero Section"), 1)
                          ], 8, ["disabled"])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Background Image "),
                        __props.heroSection?.background_image || imagePreview.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mb-4"
                        }, [
                          createVNode("div", { class: "relative" }, [
                            createVNode("img", {
                              src: imagePreview.value || `/storage/${__props.heroSection.background_image}`,
                              alt: "Hero background",
                              class: "w-full h-48 object-cover rounded-lg border border-gray-200"
                            }, null, 8, ["src"]),
                            createVNode("button", {
                              onClick: deleteImage,
                              type: "button",
                              class: "absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors",
                              title: "Delete image"
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
                                  d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1H8a1 1 0 00-1 1v3M4 7h16"
                                })
                              ]))
                            ])
                          ])
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "border-2 border-dashed border-gray-300 rounded-lg p-6" }, [
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
                              createVNode("label", {
                                for: "hero_image",
                                class: "cursor-pointer"
                              }, [
                                createVNode("span", { class: "mt-2 block text-sm font-medium text-gray-900" }, " Click to upload a new image "),
                                createVNode("span", { class: "mt-1 block text-xs text-gray-500" }, " PNG, JPG, GIF up to 2MB ")
                              ]),
                              createVNode("input", {
                                id: "hero_image",
                                type: "file",
                                accept: "image/*",
                                onChange: handleImageUpload,
                                class: "sr-only"
                              }, null, 32)
                            ])
                          ])
                        ])
                      ])
                    ])
                  ], 32)
                ])
              ]),
              createVNode("div", {
                id: "partner-section",
                class: "bg-white rounded-lg shadow-sm border border-gray-200 mt-8"
              }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Partner Badge Section"),
                  createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Customize the partner badge that appears below the hero section")
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(updatePartnerBadge, ["prevent"])
                  }, [
                    createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-8" }, [
                      createVNode("div", { class: "space-y-6" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "partner_text",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, " Partner Text "),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "partner_text",
                            "onUpdate:modelValue": ($event) => unref(partnerForm).text = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": partnerErrors.value.text }],
                            placeholder: "Enter partner text"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, unref(partnerForm).text]
                          ]),
                          partnerErrors.value.text ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(partnerErrors.value.text), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "logo_alt",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, " Logo Alt Text "),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "logo_alt",
                            "onUpdate:modelValue": ($event) => unref(partnerForm).logo_alt = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": partnerErrors.value.logo_alt }],
                            placeholder: "Enter logo alt text (for accessibility)"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, unref(partnerForm).logo_alt]
                          ]),
                          partnerErrors.value.logo_alt ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(partnerErrors.value.logo_alt), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "flex items-center" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => unref(partnerForm).is_active = $event,
                              class: "rounded border-gray-300 text-brand-red focus:ring-brand-red"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, unref(partnerForm).is_active]
                            ]),
                            createVNode("span", { class: "ml-2 text-sm text-gray-700" }, "Active")
                          ])
                        ]),
                        createVNode("div", { class: "pt-4" }, [
                          createVNode("button", {
                            type: "submit",
                            disabled: unref(partnerForm).processing,
                            class: "inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
                          }, [
                            unref(partnerForm).processing ? (openBlock(), createBlock("svg", {
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
                            createTextVNode(" " + toDisplayString(unref(partnerForm).processing ? "Updating..." : "Update Partner Badge"), 1)
                          ], 8, ["disabled"])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Partner Logo "),
                        __props.partnerBadge?.logo_image || partnerLogoPreview.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mb-4"
                        }, [
                          createVNode("div", { class: "relative" }, [
                            createVNode("img", {
                              src: partnerLogoPreview.value || `/storage/${__props.partnerBadge.logo_image}`,
                              alt: __props.partnerBadge?.logo_alt || "Partner Logo",
                              class: "w-full max-w-xs h-24 object-contain rounded-lg border border-gray-200 bg-gray-50 p-4"
                            }, null, 8, ["src", "alt"]),
                            createVNode("button", {
                              onClick: deletePartnerLogo,
                              type: "button",
                              class: "absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors",
                              title: "Delete logo"
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
                                  d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1H8a1 1 0 00-1 1v3M4 7h16"
                                })
                              ]))
                            ])
                          ])
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "border-2 border-dashed border-gray-300 rounded-lg p-6" }, [
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
                              createVNode("label", {
                                for: "partner_logo",
                                class: "cursor-pointer"
                              }, [
                                createVNode("span", { class: "mt-2 block text-sm font-medium text-gray-900" }, " Click to upload a new logo "),
                                createVNode("span", { class: "mt-1 block text-xs text-gray-500" }, " PNG, JPG, SVG up to 2MB ")
                              ]),
                              createVNode("input", {
                                id: "partner_logo",
                                type: "file",
                                accept: "image/*",
                                onChange: handlePartnerLogoUpload,
                                class: "sr-only"
                              }, null, 32)
                            ])
                          ])
                        ])
                      ])
                    ])
                  ], 32)
                ])
              ]),
              createVNode("div", {
                id: "what-we-do-section",
                class: "bg-white rounded-lg shadow-sm border border-gray-200 mt-8"
              }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "What We Do Section"),
                  createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Manage the heading, description, and service containers")
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(updateWhatWeDo, ["prevent"]),
                    class: "mb-8"
                  }, [
                    createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "what_we_do_label",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, " Section Label "),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "what_we_do_label",
                          "onUpdate:modelValue": ($event) => unref(whatWeDoForm).label = $event,
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": whatWeDoErrors.value.label }],
                          placeholder: "Enter section label"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(whatWeDoForm).label]
                        ]),
                        whatWeDoErrors.value.label ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(whatWeDoErrors.value.label), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("label", { class: "flex items-center" }, [
                          withDirectives(createVNode("input", {
                            type: "checkbox",
                            "onUpdate:modelValue": ($event) => unref(whatWeDoForm).is_active = $event,
                            class: "rounded border-gray-300 text-brand-red focus:ring-brand-red"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, unref(whatWeDoForm).is_active]
                          ]),
                          createVNode("span", { class: "ml-2 text-sm text-gray-700" }, "Active")
                        ])
                      ]),
                      createVNode("div", { class: "lg:col-span-2" }, [
                        createVNode("label", {
                          for: "what_we_do_heading",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, " Main Heading "),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "what_we_do_heading",
                          "onUpdate:modelValue": ($event) => unref(whatWeDoForm).heading = $event,
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": whatWeDoErrors.value.heading }],
                          placeholder: "Enter main heading"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(whatWeDoForm).heading]
                        ]),
                        whatWeDoErrors.value.heading ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(whatWeDoErrors.value.heading), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "lg:col-span-2" }, [
                        createVNode("label", {
                          for: "what_we_do_description",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, " Description "),
                        withDirectives(createVNode("textarea", {
                          id: "what_we_do_description",
                          "onUpdate:modelValue": ($event) => unref(whatWeDoForm).description = $event,
                          rows: "3",
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none", { "border-red-500": whatWeDoErrors.value.description }],
                          placeholder: "Enter section description"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(whatWeDoForm).description]
                        ]),
                        whatWeDoErrors.value.description ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(whatWeDoErrors.value.description), 1)) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode("button", {
                        type: "submit",
                        disabled: unref(whatWeDoForm).processing,
                        class: "inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
                      }, [
                        unref(whatWeDoForm).processing ? (openBlock(), createBlock("svg", {
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
                        createTextVNode(" " + toDisplayString(unref(whatWeDoForm).processing ? "Updating..." : "Update Section Info"), 1)
                      ], 8, ["disabled"])
                    ])
                  ], 32),
                  createVNode("div", { class: "border-t border-gray-200 pt-8" }, [
                    createVNode("div", { class: "flex justify-between items-center mb-6" }, [
                      createVNode("h3", { class: "text-lg font-medium text-gray-900" }, "Service Containers"),
                      createVNode("button", {
                        onClick: ($event) => showAddItemModal.value = true,
                        type: "button",
                        class: "inline-flex items-center px-4 py-2 bg-green-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 focus:bg-green-700 active:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition ease-in-out duration-150"
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
                        createTextVNode(" Add Container ")
                      ], 8, ["onClick"])
                    ]),
                    __props.whatWeDoSection?.items?.length ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "space-y-4"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.whatWeDoSection.items, (item) => {
                        return openBlock(), createBlock("div", {
                          key: item.id,
                          class: "border border-gray-200 rounded-lg p-4 bg-gray-50"
                        }, [
                          createVNode("div", { class: "flex justify-between items-start" }, [
                            createVNode("div", { class: "flex-1" }, [
                              createVNode("div", { class: "flex items-center space-x-4 mb-2" }, [
                                createVNode("span", { class: "text-sm font-medium text-gray-500" }, "Order: " + toDisplayString(item.sort_order), 1),
                                createVNode("span", {
                                  class: ["text-sm font-medium", item.is_active ? "text-green-600" : "text-red-600"]
                                }, toDisplayString(item.is_active ? "Active" : "Inactive"), 3)
                              ]),
                              createVNode("h4", { class: "text-lg font-medium text-gray-900 mb-2" }, toDisplayString(item.title), 1),
                              createVNode("p", { class: "text-gray-600 mb-3" }, toDisplayString(item.description), 1),
                              createVNode("div", { class: "bg-white p-2 rounded border inline-block" }, [
                                createVNode("div", {
                                  class: "w-8 h-8 bg-red-500 rounded-full flex items-center justify-center",
                                  innerHTML: item.icon_svg
                                }, null, 8, ["innerHTML"])
                              ])
                            ]),
                            createVNode("div", { class: "flex space-x-2 ml-4" }, [
                              createVNode("button", {
                                onClick: ($event) => editItem(item),
                                class: "px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
                              }, " Edit ", 8, ["onClick"]),
                              createVNode("button", {
                                onClick: ($event) => deleteItem(item.id),
                                class: "px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700"
                              }, " Delete ", 8, ["onClick"])
                            ])
                          ])
                        ]);
                      }), 128))
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-center py-8 text-gray-500"
                    }, ' No service containers added yet. Click "Add Container" to get started. '))
                  ])
                ])
              ]),
              showAddItemModal.value || showEditItemModal.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              }, [
                createVNode("div", { class: "bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" }, [
                  createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                    createVNode("h3", { class: "text-lg font-semibold text-gray-900" }, toDisplayString(showEditItemModal.value ? "Edit Service Container" : "Add Service Container"), 1)
                  ]),
                  createVNode("form", {
                    onSubmit: withModifiers(($event) => showEditItemModal.value ? updateItem() : addItem(), ["prevent"]),
                    class: "p-6"
                  }, [
                    createVNode("div", { class: "space-y-6" }, [
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "item_title",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, " Title "),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "item_title",
                          "onUpdate:modelValue": ($event) => unref(itemForm).title = $event,
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": itemErrors.value.title }],
                          placeholder: "Enter container title"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(itemForm).title]
                        ]),
                        itemErrors.value.title ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(itemErrors.value.title), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "item_description",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, " Description "),
                        withDirectives(createVNode("textarea", {
                          id: "item_description",
                          "onUpdate:modelValue": ($event) => unref(itemForm).description = $event,
                          rows: "3",
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none", { "border-red-500": itemErrors.value.description }],
                          placeholder: "Enter container description"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(itemForm).description]
                        ]),
                        itemErrors.value.description ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(itemErrors.value.description), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "item_icon_svg",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, " Icon SVG Code "),
                        withDirectives(createVNode("textarea", {
                          id: "item_icon_svg",
                          "onUpdate:modelValue": ($event) => unref(itemForm).icon_svg = $event,
                          rows: "4",
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none font-mono text-xs", { "border-red-500": itemErrors.value.icon_svg }],
                          placeholder: "Enter SVG code for the icon"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(itemForm).icon_svg]
                        ]),
                        itemErrors.value.icon_svg ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(itemErrors.value.icon_svg), 1)) : createCommentVNode("", true),
                        createVNode("p", { class: "mt-1 text-xs text-gray-500" }, "Paste the complete SVG code including <svg> tags")
                      ]),
                      unref(itemForm).icon_svg ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Icon Preview"),
                        createVNode("div", { class: "bg-gray-100 p-4 rounded-lg" }, [
                          createVNode("div", {
                            class: "w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto",
                            innerHTML: unref(itemForm).icon_svg
                          }, null, 8, ["innerHTML"])
                        ])
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "item_sort_order",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, " Sort Order "),
                          withDirectives(createVNode("input", {
                            type: "number",
                            id: "item_sort_order",
                            "onUpdate:modelValue": ($event) => unref(itemForm).sort_order = $event,
                            class: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red",
                            min: "1"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(itemForm).sort_order]
                          ])
                        ]),
                        createVNode("div", { class: "flex items-end" }, [
                          createVNode("label", { class: "flex items-center" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => unref(itemForm).is_active = $event,
                              class: "rounded border-gray-300 text-brand-red focus:ring-brand-red"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, unref(itemForm).is_active]
                            ]),
                            createVNode("span", { class: "ml-2 text-sm text-gray-700" }, "Active")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-end space-x-3 mt-8" }, [
                      createVNode("button", {
                        type: "button",
                        onClick: closeItemModal,
                        class: "px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                      }, " Cancel "),
                      createVNode("button", {
                        type: "submit",
                        disabled: unref(itemForm).processing,
                        class: "inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
                      }, toDisplayString(unref(itemForm).processing ? "Saving..." : showEditItemModal.value ? "Update Container" : "Add Container"), 9, ["disabled"])
                    ])
                  ], 40, ["onSubmit"])
                ])
              ])) : createCommentVNode("", true),
              createVNode("div", {
                id: "outcomes-section",
                class: "bg-white rounded-lg shadow-sm border border-gray-200 mt-8"
              }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Outcomes Section"),
                  createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Manage the outcomes you can expect section content")
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(updateOutcomes, ["prevent"]),
                    class: "mb-8"
                  }, [
                    createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "outcomes_label",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, " Section Label "),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "outcomes_label",
                          "onUpdate:modelValue": ($event) => unref(outcomesForm).label = $event,
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": outcomesErrors.value.label }]
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(outcomesForm).label]
                        ]),
                        outcomesErrors.value.label ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(outcomesErrors.value.label), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "flex items-start" }, [
                        createVNode("div", { class: "mt-8" }, [
                          createVNode("label", { class: "relative inline-flex items-center cursor-pointer" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => unref(outcomesForm).is_active = $event,
                              class: "sr-only peer"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, unref(outcomesForm).is_active]
                            ]),
                            createVNode("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" }),
                            createVNode("span", { class: "ml-3 text-sm font-medium text-gray-700" }, "Section Active")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode("label", {
                        for: "outcomes_heading",
                        class: "block text-sm font-medium text-gray-700 mb-2"
                      }, " Section Heading "),
                      withDirectives(createVNode("input", {
                        type: "text",
                        id: "outcomes_heading",
                        "onUpdate:modelValue": ($event) => unref(outcomesForm).heading = $event,
                        class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": outcomesErrors.value.heading }]
                      }, null, 10, ["onUpdate:modelValue"]), [
                        [vModelText, unref(outcomesForm).heading]
                      ]),
                      outcomesErrors.value.heading ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "mt-1 text-sm text-red-600"
                      }, toDisplayString(outcomesErrors.value.heading), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode("label", {
                        for: "outcomes_description",
                        class: "block text-sm font-medium text-gray-700 mb-2"
                      }, " Section Description "),
                      withDirectives(createVNode("textarea", {
                        id: "outcomes_description",
                        "onUpdate:modelValue": ($event) => unref(outcomesForm).description = $event,
                        rows: "3",
                        class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none", { "border-red-500": outcomesErrors.value.description }]
                      }, null, 10, ["onUpdate:modelValue"]), [
                        [vModelText, unref(outcomesForm).description]
                      ]),
                      outcomesErrors.value.description ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "mt-1 text-sm text-red-600"
                      }, toDisplayString(outcomesErrors.value.description), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode("button", {
                        type: "submit",
                        disabled: unref(outcomesForm).processing,
                        class: "inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
                      }, [
                        unref(outcomesForm).processing ? (openBlock(), createBlock("svg", {
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
                        createTextVNode(" " + toDisplayString(unref(outcomesForm).processing ? "Updating..." : "Update Section Info"), 1)
                      ], 8, ["disabled"])
                    ])
                  ], 32),
                  createVNode("div", { class: "border-t border-gray-200 pt-8" }, [
                    createVNode("div", { class: "flex justify-between items-center mb-6" }, [
                      createVNode("div", null, [
                        createVNode("h3", { class: "text-lg font-medium text-gray-900" }, "Outcome Items"),
                        createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Manage individual outcome cards")
                      ]),
                      createVNode("button", {
                        onClick: showAddOutcomeModal,
                        class: "inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 transition ease-in-out duration-150"
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
                            d: "M12 4v16m8-8H4"
                          })
                        ])),
                        createTextVNode(" Add Outcome Item ")
                      ])
                    ]),
                    __props.outcomesSection?.items?.length ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "space-y-4"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.outcomesSection.items, (item) => {
                        return openBlock(), createBlock("div", {
                          key: item.id,
                          class: "bg-gray-50 border border-gray-200 rounded-lg p-4"
                        }, [
                          createVNode("div", { class: "flex items-start justify-between" }, [
                            createVNode("div", { class: "flex items-start space-x-4 flex-1" }, [
                              createVNode("div", { class: "flex-shrink-0" }, [
                                createVNode("div", { class: "w-12 h-12 bg-brand-red rounded-full flex items-center justify-center" }, [
                                  createVNode("div", {
                                    innerHTML: item.icon_svg,
                                    class: "w-6 h-6 text-white"
                                  }, null, 8, ["innerHTML"])
                                ])
                              ]),
                              createVNode("div", { class: "flex-1 min-w-0" }, [
                                createVNode("h4", { class: "text-sm font-medium text-gray-900 mb-1" }, toDisplayString(item.title), 1),
                                createVNode("p", { class: "text-sm text-gray-600 mb-2" }, toDisplayString(item.description), 1),
                                createVNode("div", { class: "flex items-center space-x-4 text-xs text-gray-500" }, [
                                  createVNode("span", null, "Sort Order: " + toDisplayString(item.sort_order), 1),
                                  createVNode("span", {
                                    class: item.is_active ? "text-green-600" : "text-red-600"
                                  }, toDisplayString(item.is_active ? "Active" : "Inactive"), 3)
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "flex items-center space-x-2 ml-4" }, [
                              createVNode("button", {
                                onClick: ($event) => editOutcomeItem(item),
                                class: "text-blue-600 hover:text-blue-900 text-sm"
                              }, " Edit ", 8, ["onClick"]),
                              createVNode("button", {
                                onClick: ($event) => deleteOutcomeItem(item.id),
                                class: "text-red-600 hover:text-red-900 text-sm"
                              }, " Delete ", 8, ["onClick"])
                            ])
                          ])
                        ]);
                      }), 128))
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-center py-8"
                    }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-12 h-12 text-gray-400 mx-auto mb-4",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        })
                      ])),
                      createVNode("h3", { class: "text-sm font-medium text-gray-900 mb-1" }, "No outcome items"),
                      createVNode("p", { class: "text-sm text-gray-600" }, "Get started by adding your first outcome item.")
                    ]))
                  ])
                ])
              ]),
              showAddOutcomeItemModal.value || showEditOutcomeItemModal.value ? (openBlock(), createBlock("div", {
                key: 1,
                class: "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"
              }, [
                createVNode("div", { class: "relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white" }, [
                  createVNode("div", { class: "mt-3" }, [
                    createVNode("div", { class: "flex items-center justify-between pb-4 border-b border-gray-200" }, [
                      createVNode("h3", { class: "text-lg font-medium text-gray-900" }, toDisplayString(showEditOutcomeItemModal.value ? "Edit Outcome Item" : "Add New Outcome Item"), 1),
                      createVNode("button", {
                        onClick: closeOutcomeModal,
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
                      onSubmit: withModifiers(submitOutcomeItem, ["prevent"]),
                      class: "mt-6 space-y-6"
                    }, [
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "outcome_title",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, [
                          createTextVNode(" Title "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "outcome_title",
                          "onUpdate:modelValue": ($event) => unref(outcomeItemForm).title = $event,
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": outcomeItemErrors.value.title }]
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(outcomeItemForm).title]
                        ]),
                        outcomeItemErrors.value.title ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(outcomeItemErrors.value.title), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "outcome_description",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, [
                          createTextVNode(" Description "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("textarea", {
                          id: "outcome_description",
                          "onUpdate:modelValue": ($event) => unref(outcomeItemForm).description = $event,
                          rows: "3",
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none", { "border-red-500": outcomeItemErrors.value.description }]
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(outcomeItemForm).description]
                        ]),
                        outcomeItemErrors.value.description ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(outcomeItemErrors.value.description), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "outcome_icon_svg",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, [
                          createTextVNode(" Icon SVG "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("textarea", {
                          id: "outcome_icon_svg",
                          "onUpdate:modelValue": ($event) => unref(outcomeItemForm).icon_svg = $event,
                          rows: "6",
                          placeholder: "Paste your SVG code here...",
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none font-mono text-sm", { "border-red-500": outcomeItemErrors.value.icon_svg }]
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(outcomeItemForm).icon_svg]
                        ]),
                        outcomeItemErrors.value.icon_svg ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(outcomeItemErrors.value.icon_svg), 1)) : createCommentVNode("", true),
                        createVNode("p", { class: "mt-1 text-xs text-gray-500" }, "Paste the complete SVG code including the opening and closing tags.")
                      ]),
                      unref(outcomeItemForm).icon_svg ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex items-center space-x-4"
                      }, [
                        createVNode("span", { class: "text-sm font-medium text-gray-700" }, "Preview:"),
                        createVNode("div", { class: "w-12 h-12 bg-brand-red rounded-full flex items-center justify-center" }, [
                          createVNode("div", {
                            innerHTML: unref(outcomeItemForm).icon_svg,
                            class: "w-6 h-6 text-white"
                          }, null, 8, ["innerHTML"])
                        ])
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "outcome_sort_order",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, " Sort Order "),
                          withDirectives(createVNode("input", {
                            type: "number",
                            id: "outcome_sort_order",
                            "onUpdate:modelValue": ($event) => unref(outcomeItemForm).sort_order = $event,
                            min: "1",
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": outcomeItemErrors.value.sort_order }]
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, unref(outcomeItemForm).sort_order]
                          ]),
                          outcomeItemErrors.value.sort_order ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(outcomeItemErrors.value.sort_order), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("label", { class: "relative inline-flex items-center cursor-pointer" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => unref(outcomeItemForm).is_active = $event,
                              class: "sr-only peer"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, unref(outcomeItemForm).is_active]
                            ]),
                            createVNode("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" }),
                            createVNode("span", { class: "ml-3 text-sm font-medium text-gray-700" }, "Active")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center justify-end pt-6 border-t border-gray-200 space-x-3" }, [
                        createVNode("button", {
                          type: "button",
                          onClick: closeOutcomeModal,
                          class: "px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition ease-in-out duration-150"
                        }, " Cancel "),
                        createVNode("button", {
                          type: "submit",
                          disabled: unref(outcomeItemForm).processing,
                          class: "inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
                        }, toDisplayString(unref(outcomeItemForm).processing ? "Saving..." : showEditOutcomeItemModal.value ? "Update Outcome" : "Add Outcome"), 9, ["disabled"])
                      ])
                    ], 32)
                  ])
                ])
              ])) : createCommentVNode("", true),
              createVNode("div", {
                id: "our-approach-section",
                class: "bg-white rounded-lg shadow-sm border border-gray-200 mt-8"
              }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Our Approach Section"),
                  createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Manage the our approach section content and image")
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(updateOurApproach, ["prevent"]),
                    class: "mb-8"
                  }, [
                    createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "approach_label",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, " Section Label "),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "approach_label",
                          "onUpdate:modelValue": ($event) => unref(ourApproachForm).label = $event,
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": ourApproachErrors.value.label }]
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(ourApproachForm).label]
                        ]),
                        ourApproachErrors.value.label ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(ourApproachErrors.value.label), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "flex items-start" }, [
                        createVNode("div", { class: "mt-8" }, [
                          createVNode("label", { class: "relative inline-flex items-center cursor-pointer" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => unref(ourApproachForm).is_active = $event,
                              class: "sr-only peer"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, unref(ourApproachForm).is_active]
                            ]),
                            createVNode("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" }),
                            createVNode("span", { class: "ml-3 text-sm font-medium text-gray-700" }, "Section Active")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode("label", {
                        for: "approach_heading",
                        class: "block text-sm font-medium text-gray-700 mb-2"
                      }, " Section Heading "),
                      withDirectives(createVNode("input", {
                        type: "text",
                        id: "approach_heading",
                        "onUpdate:modelValue": ($event) => unref(ourApproachForm).heading = $event,
                        class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": ourApproachErrors.value.heading }]
                      }, null, 10, ["onUpdate:modelValue"]), [
                        [vModelText, unref(ourApproachForm).heading]
                      ]),
                      ourApproachErrors.value.heading ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "mt-1 text-sm text-red-600"
                      }, toDisplayString(ourApproachErrors.value.heading), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode("label", {
                        for: "approach_description",
                        class: "block text-sm font-medium text-gray-700 mb-2"
                      }, " Section Description "),
                      withDirectives(createVNode("textarea", {
                        id: "approach_description",
                        "onUpdate:modelValue": ($event) => unref(ourApproachForm).description = $event,
                        rows: "3",
                        class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none", { "border-red-500": ourApproachErrors.value.description }]
                      }, null, 10, ["onUpdate:modelValue"]), [
                        [vModelText, unref(ourApproachForm).description]
                      ]),
                      ourApproachErrors.value.description ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "mt-1 text-sm text-red-600"
                      }, toDisplayString(ourApproachErrors.value.description), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode("label", {
                        for: "approach_image_alt",
                        class: "block text-sm font-medium text-gray-700 mb-2"
                      }, " Image Alt Text "),
                      withDirectives(createVNode("input", {
                        type: "text",
                        id: "approach_image_alt",
                        "onUpdate:modelValue": ($event) => unref(ourApproachForm).image_alt = $event,
                        class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": ourApproachErrors.value.image_alt }],
                        placeholder: "e.g., Our 3-Step Approach Diagram"
                      }, null, 10, ["onUpdate:modelValue"]), [
                        [vModelText, unref(ourApproachForm).image_alt]
                      ]),
                      ourApproachErrors.value.image_alt ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "mt-1 text-sm text-red-600"
                      }, toDisplayString(ourApproachErrors.value.image_alt), 1)) : createCommentVNode("", true),
                      createVNode("p", { class: "mt-1 text-xs text-gray-500" }, "This text will be used for accessibility and SEO")
                    ]),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode("button", {
                        type: "submit",
                        disabled: unref(ourApproachForm).processing,
                        class: "inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
                      }, [
                        unref(ourApproachForm).processing ? (openBlock(), createBlock("svg", {
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
                        createTextVNode(" " + toDisplayString(unref(ourApproachForm).processing ? "Updating..." : "Update Section Info"), 1)
                      ], 8, ["disabled"])
                    ])
                  ], 32),
                  createVNode("div", { class: "border-t border-gray-200 pt-8" }, [
                    createVNode("div", { class: "flex justify-between items-center mb-6" }, [
                      createVNode("div", null, [
                        createVNode("h3", { class: "text-lg font-medium text-gray-900" }, "Section Image"),
                        createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Upload an image for the approach section")
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-8" }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "border-2 border-dashed border-gray-300 rounded-lg p-6" }, [
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
                              createVNode("label", {
                                for: "approach-image-upload",
                                class: "cursor-pointer"
                              }, [
                                createVNode("span", { class: "mt-2 block text-sm font-medium text-gray-900" }, " Upload a new approach image "),
                                createVNode("input", {
                                  id: "approach-image-upload",
                                  name: "approach-image-upload",
                                  type: "file",
                                  class: "sr-only",
                                  accept: "image/*",
                                  onChange: handleApproachImageUpload
                                }, null, 32)
                              ])
                            ]),
                            createVNode("p", { class: "mt-2 text-xs text-gray-500" }, "PNG, JPG, GIF, SVG up to 2MB")
                          ])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "aspect-square w-full bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center" }, [
                          approachImagePreview.value || __props.ourApproachSection?.image_url ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "w-full h-full relative group"
                          }, [
                            createVNode("img", {
                              src: approachImagePreview.value || __props.ourApproachSection?.image_url,
                              alt: __props.ourApproachSection?.image_alt || "Approach section preview",
                              class: "w-full h-full object-contain"
                            }, null, 8, ["src", "alt"]),
                            createVNode("div", { class: "absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center" }, [
                              createVNode("button", {
                                onClick: deleteApproachImage,
                                class: "bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200"
                              }, " Delete Image ")
                            ])
                          ])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "text-center"
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
                                d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              })
                            ])),
                            createVNode("p", { class: "mt-2 text-sm text-gray-500" }, "No image uploaded")
                          ]))
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("div", {
                id: "core-services-section",
                class: "bg-white rounded-lg shadow-sm border border-gray-200 mt-8"
              }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Core Services Section"),
                  createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Manage the core services section content and service cards")
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(updateCoreServices, ["prevent"]),
                    class: "mb-8"
                  }, [
                    createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "core_services_label",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, " Section Label "),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "core_services_label",
                          "onUpdate:modelValue": ($event) => unref(coreServicesForm).label = $event,
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", { "border-red-500": coreServicesErrors.value.label }],
                          placeholder: "e.g., Core Services"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(coreServicesForm).label]
                        ]),
                        coreServicesErrors.value.label ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(coreServicesErrors.value.label), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("label", { class: "relative inline-flex items-center cursor-pointer" }, [
                          withDirectives(createVNode("input", {
                            type: "checkbox",
                            "onUpdate:modelValue": ($event) => unref(coreServicesForm).is_active = $event,
                            class: "sr-only peer"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, unref(coreServicesForm).is_active]
                          ]),
                          createVNode("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" }),
                          createVNode("span", { class: "ml-3 text-sm font-medium text-gray-700" }, "Section Active")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode("label", {
                        for: "core_services_heading",
                        class: "block text-sm font-medium text-gray-700 mb-2"
                      }, " Section Heading "),
                      withDirectives(createVNode("input", {
                        type: "text",
                        id: "core_services_heading",
                        "onUpdate:modelValue": ($event) => unref(coreServicesForm).heading = $event,
                        class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", { "border-red-500": coreServicesErrors.value.heading }],
                        placeholder: "e.g., Databricks Services We Deliver"
                      }, null, 10, ["onUpdate:modelValue"]), [
                        [vModelText, unref(coreServicesForm).heading]
                      ]),
                      coreServicesErrors.value.heading ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "mt-1 text-sm text-red-600"
                      }, toDisplayString(coreServicesErrors.value.heading), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode("label", {
                        for: "core_services_description",
                        class: "block text-sm font-medium text-gray-700 mb-2"
                      }, " Section Description "),
                      withDirectives(createVNode("textarea", {
                        id: "core_services_description",
                        "onUpdate:modelValue": ($event) => unref(coreServicesForm).description = $event,
                        rows: "3",
                        class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", { "border-red-500": coreServicesErrors.value.description }],
                        placeholder: "Enter section description"
                      }, null, 10, ["onUpdate:modelValue"]), [
                        [vModelText, unref(coreServicesForm).description]
                      ]),
                      coreServicesErrors.value.description ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "mt-1 text-sm text-red-600"
                      }, toDisplayString(coreServicesErrors.value.description), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode("button", {
                        type: "submit",
                        class: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center",
                        disabled: unref(coreServicesForm).processing
                      }, [
                        unref(coreServicesForm).processing ? (openBlock(), createBlock("svg", {
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
                        createTextVNode(" " + toDisplayString(unref(coreServicesForm).processing ? "Updating..." : "Update Section Info"), 1)
                      ], 8, ["disabled"])
                    ])
                  ], 32),
                  createVNode("div", { class: "border-t border-gray-200 pt-6" }, [
                    createVNode("div", { class: "flex items-center justify-between mb-6" }, [
                      createVNode("h3", { class: "text-lg font-medium text-gray-900" }, "Service Cards"),
                      createVNode("button", {
                        onClick: ($event) => showAddServiceModal.value = true,
                        class: "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center text-sm"
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
                            d: "M12 4v16m8-8H4"
                          })
                        ])),
                        createTextVNode(" Add Service Card ")
                      ], 8, ["onClick"])
                    ]),
                    __props.coreServicesSection?.services?.length ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "space-y-4"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.coreServicesSection.services, (service) => {
                        return openBlock(), createBlock("div", {
                          key: service.id,
                          class: "bg-gray-50 rounded-lg p-6 border border-gray-200"
                        }, [
                          createVNode("div", { class: "flex items-start justify-between" }, [
                            createVNode("div", { class: "flex-1" }, [
                              createVNode("h4", { class: "font-medium text-gray-900 mb-2" }, toDisplayString(service.title), 1),
                              createVNode("p", { class: "text-sm text-gray-600 mb-3" }, toDisplayString(service.description || "No description"), 1),
                              service.tags?.length ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "flex flex-wrap gap-2 mb-3"
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(service.tags, (tag) => {
                                  return openBlock(), createBlock("span", {
                                    key: tag,
                                    class: "inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                                  }, toDisplayString(tag), 1);
                                }), 128))
                              ])) : createCommentVNode("", true),
                              createVNode("div", { class: "flex items-center space-x-4 text-xs text-gray-500" }, [
                                createVNode("span", null, "Status: " + toDisplayString(service.is_active ? "Active" : "Inactive"), 1),
                                createVNode("span", null, "Order: " + toDisplayString(service.sort_order), 1),
                                service.link_url ? (openBlock(), createBlock("span", { key: 0 }, "Link: " + toDisplayString(service.link_url), 1)) : createCommentVNode("", true)
                              ])
                            ]),
                            createVNode("div", { class: "flex items-center space-x-2 ml-4" }, [
                              createVNode("button", {
                                onClick: ($event) => editService(service),
                                class: "text-blue-600 hover:text-blue-800 p-2",
                                title: "Edit Service"
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
                                onClick: ($event) => deleteService(service.id),
                                class: "text-red-600 hover:text-red-800 p-2",
                                title: "Delete Service"
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
                        ]);
                      }), 128))
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-center py-12"
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
                          d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        })
                      ])),
                      createVNode("h3", { class: "mt-2 text-sm font-medium text-gray-900" }, "No service cards"),
                      createVNode("p", { class: "mt-1 text-sm text-gray-500" }, "Get started by creating your first service card.")
                    ]))
                  ])
                ])
              ]),
              showAddServiceModal.value || showEditServiceModal.value ? (openBlock(), createBlock("div", {
                key: 2,
                class: "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50",
                onClick: withModifiers(closeServiceModal, ["self"])
              }, [
                createVNode("div", { class: "relative top-20 mx-auto p-5 border w-11/12 max-w-2xl shadow-lg rounded-md bg-white" }, [
                  createVNode("div", { class: "flex items-center justify-between mb-4" }, [
                    createVNode("h3", { class: "text-lg font-medium text-gray-900" }, toDisplayString(showEditServiceModal.value ? "Edit Service Card" : "Add Service Card"), 1),
                    createVNode("button", {
                      onClick: closeServiceModal,
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
                    onSubmit: withModifiers(submitServiceForm, ["prevent"]),
                    class: "space-y-6"
                  }, [
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "service_title",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, " Service Title * "),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "service_title",
                          "onUpdate:modelValue": ($event) => unref(serviceForm).title = $event,
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", { "border-red-500": serviceErrors.value.title }],
                          placeholder: "Enter service title",
                          required: ""
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(serviceForm).title]
                        ]),
                        serviceErrors.value.title ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(serviceErrors.value.title), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "service_link",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, " Link URL "),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "service_link",
                          "onUpdate:modelValue": ($event) => unref(serviceForm).link_url = $event,
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", { "border-red-500": serviceErrors.value.link_url }],
                          placeholder: "e.g., /services/data-engineering"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(serviceForm).link_url]
                        ]),
                        serviceErrors.value.link_url ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(serviceErrors.value.link_url), 1)) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", {
                        for: "service_description",
                        class: "block text-sm font-medium text-gray-700 mb-2"
                      }, " Description "),
                      withDirectives(createVNode("textarea", {
                        id: "service_description",
                        "onUpdate:modelValue": ($event) => unref(serviceForm).description = $event,
                        rows: "3",
                        class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", { "border-red-500": serviceErrors.value.description }],
                        placeholder: "Enter service description"
                      }, null, 10, ["onUpdate:modelValue"]), [
                        [vModelText, unref(serviceForm).description]
                      ]),
                      serviceErrors.value.description ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "mt-1 text-sm text-red-600"
                      }, toDisplayString(serviceErrors.value.description), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", null, [
                      createVNode("label", {
                        for: "service_icon",
                        class: "block text-sm font-medium text-gray-700 mb-2"
                      }, " Icon SVG Path * "),
                      withDirectives(createVNode("textarea", {
                        id: "service_icon",
                        "onUpdate:modelValue": ($event) => unref(serviceForm).icon_svg = $event,
                        rows: "2",
                        class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", { "border-red-500": serviceErrors.value.icon_svg }],
                        placeholder: "Enter SVG path for the icon (e.g., M19.428 15.428a2 2 0 00-1.022-.547...)",
                        required: ""
                      }, null, 10, ["onUpdate:modelValue"]), [
                        [vModelText, unref(serviceForm).icon_svg]
                      ]),
                      serviceErrors.value.icon_svg ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "mt-1 text-sm text-red-600"
                      }, toDisplayString(serviceErrors.value.icon_svg), 1)) : createCommentVNode("", true),
                      createVNode("p", { class: "mt-1 text-xs text-gray-500" }, "Enter the SVG path element for the icon")
                    ]),
                    createVNode("div", null, [
                      createVNode("label", {
                        for: "service_tags",
                        class: "block text-sm font-medium text-gray-700 mb-2"
                      }, " Tags (comma-separated) "),
                      withDirectives(createVNode("input", {
                        type: "text",
                        id: "service_tags",
                        "onUpdate:modelValue": ($event) => serviceTagsInput.value = $event,
                        class: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                        placeholder: "e.g., Data Pipelines, Data Integration, Migration"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, serviceTagsInput.value]
                      ]),
                      createVNode("p", { class: "mt-1 text-xs text-gray-500" }, "Separate multiple tags with commas")
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "service_sort_order",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, " Sort Order "),
                        withDirectives(createVNode("input", {
                          type: "number",
                          id: "service_sort_order",
                          "onUpdate:modelValue": ($event) => unref(serviceForm).sort_order = $event,
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", { "border-red-500": serviceErrors.value.sort_order }],
                          placeholder: "1",
                          min: "1"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(serviceForm).sort_order]
                        ]),
                        serviceErrors.value.sort_order ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(serviceErrors.value.sort_order), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("label", { class: "relative inline-flex items-center cursor-pointer" }, [
                          withDirectives(createVNode("input", {
                            type: "checkbox",
                            "onUpdate:modelValue": ($event) => unref(serviceForm).is_active = $event,
                            class: "sr-only peer"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, unref(serviceForm).is_active]
                          ]),
                          createVNode("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" }),
                          createVNode("span", { class: "ml-3 text-sm font-medium text-gray-700" }, "Service Active")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex items-center justify-end space-x-3 pt-4 border-t border-gray-200" }, [
                      createVNode("button", {
                        type: "button",
                        onClick: closeServiceModal,
                        class: "px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                      }, " Cancel "),
                      createVNode("button", {
                        type: "submit",
                        class: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center",
                        disabled: unref(serviceForm).processing
                      }, [
                        unref(serviceForm).processing ? (openBlock(), createBlock("svg", {
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
                        createTextVNode(" " + toDisplayString(unref(serviceForm).processing ? "Saving..." : showEditServiceModal.value ? "Update Service" : "Create Service"), 1)
                      ], 8, ["disabled"])
                    ])
                  ], 32)
                ])
              ])) : createCommentVNode("", true),
              createVNode("div", {
                id: "platforms-section",
                class: "bg-white rounded-lg shadow-sm border border-gray-200 mt-8"
              }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Platforms Section"),
                  createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Manage the platforms section content and platform cards")
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(updatePlatforms, ["prevent"]),
                    class: "mb-8"
                  }, [
                    createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "platforms_label",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, " Section Label "),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "platforms_label",
                          "onUpdate:modelValue": ($event) => unref(platformsForm).label = $event,
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", { "border-red-500": platformsErrors.value.label }],
                          placeholder: "e.g., Platforms We Work With"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(platformsForm).label]
                        ]),
                        platformsErrors.value.label ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(platformsErrors.value.label), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("label", { class: "relative inline-flex items-center cursor-pointer" }, [
                          withDirectives(createVNode("input", {
                            type: "checkbox",
                            "onUpdate:modelValue": ($event) => unref(platformsForm).is_active = $event,
                            class: "sr-only peer"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, unref(platformsForm).is_active]
                          ]),
                          createVNode("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" }),
                          createVNode("span", { class: "ml-3 text-sm font-medium text-gray-700" }, "Section Active")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode("label", {
                        for: "platforms_heading",
                        class: "block text-sm font-medium text-gray-700 mb-2"
                      }, " Section Heading "),
                      withDirectives(createVNode("input", {
                        type: "text",
                        id: "platforms_heading",
                        "onUpdate:modelValue": ($event) => unref(platformsForm).heading = $event,
                        class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", { "border-red-500": platformsErrors.value.heading }],
                        placeholder: "e.g., Built on the Platforms You Trust"
                      }, null, 10, ["onUpdate:modelValue"]), [
                        [vModelText, unref(platformsForm).heading]
                      ]),
                      platformsErrors.value.heading ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "mt-1 text-sm text-red-600"
                      }, toDisplayString(platformsErrors.value.heading), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode("label", {
                        for: "platforms_description",
                        class: "block text-sm font-medium text-gray-700 mb-2"
                      }, " Section Description "),
                      withDirectives(createVNode("textarea", {
                        id: "platforms_description",
                        "onUpdate:modelValue": ($event) => unref(platformsForm).description = $event,
                        rows: "3",
                        class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none", { "border-red-500": platformsErrors.value.description }],
                        placeholder: "e.g., We bring Databricks to life on the enterprise platforms you already rely on."
                      }, null, 10, ["onUpdate:modelValue"]), [
                        [vModelText, unref(platformsForm).description]
                      ]),
                      platformsErrors.value.description ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "mt-1 text-sm text-red-600"
                      }, toDisplayString(platformsErrors.value.description), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode("button", {
                        type: "submit",
                        disabled: unref(platformsForm).processing,
                        class: "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                      }, toDisplayString(unref(platformsForm).processing ? "Saving..." : "Update Section"), 9, ["disabled"])
                    ])
                  ], 32),
                  createVNode("div", { class: "space-y-6" }, [
                    createVNode("div", { class: "flex justify-between items-center" }, [
                      createVNode("h3", { class: "text-lg font-medium text-gray-900" }, "Platform Cards"),
                      createVNode("button", {
                        onClick: openAddPlatformModal,
                        class: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      }, [
                        (openBlock(), createBlock("svg", {
                          class: "-ml-1 mr-2 h-5 w-5",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M12 4v16m8-8H4"
                          })
                        ])),
                        createTextVNode(" Add Platform ")
                      ])
                    ]),
                    createVNode("div", { class: "space-y-6" }, [
                      (openBlock(), createBlock(Fragment, null, renderList([1, 2, 3], (rowNumber) => {
                        return createVNode("div", {
                          key: rowNumber,
                          class: "bg-gray-50 rounded-lg p-4"
                        }, [
                          createVNode("h4", { class: "text-sm font-medium text-gray-700 mb-3" }, [
                            createTextVNode(" Row " + toDisplayString(rowNumber) + " ", 1),
                            createVNode("span", { class: "text-xs text-gray-500" }, " (" + toDisplayString(rowNumber === 1 ? "1 platform" : rowNumber === 2 ? "3 platforms" : "2 platforms") + ") ", 1)
                          ]),
                          createVNode("div", { class: "space-y-3" }, [
                            getPlatformsByRow(rowNumber).length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(getPlatformsByRow(rowNumber), (platform) => {
                              return openBlock(), createBlock("div", {
                                key: platform.id,
                                class: "bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-between"
                              }, [
                                createVNode("div", { class: "flex items-center space-x-4" }, [
                                  createVNode("div", { class: "flex-shrink-0" }, [
                                    createVNode("img", {
                                      src: `/images/platforms/${platform.image_path}`,
                                      alt: platform.name,
                                      class: "w-12 h-8 object-contain",
                                      onError: ($event) => $event.target.style.display = "none"
                                    }, null, 40, ["src", "alt", "onError"])
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("p", { class: "text-sm font-medium text-gray-900" }, toDisplayString(platform.name), 1),
                                    createVNode("p", { class: "text-xs text-gray-500" }, [
                                      createTextVNode(" Image: " + toDisplayString(platform.image_path) + " | Sort: " + toDisplayString(platform.sort_order) + " ", 1),
                                      createVNode("span", {
                                        class: platform.is_active ? "text-green-600" : "text-red-600"
                                      }, " | " + toDisplayString(platform.is_active ? "Active" : "Inactive"), 3)
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "flex items-center space-x-2" }, [
                                  createVNode("button", {
                                    onClick: ($event) => editPlatform(platform),
                                    class: "text-blue-600 hover:text-blue-800 text-sm font-medium"
                                  }, " Edit ", 8, ["onClick"]),
                                  createVNode("button", {
                                    onClick: ($event) => deletePlatform(platform),
                                    class: "text-red-600 hover:text-red-800 text-sm font-medium"
                                  }, " Delete ", 8, ["onClick"])
                                ])
                              ]);
                            }), 128)) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "text-sm text-gray-500 italic text-center py-4"
                            }, " No platforms in this row "))
                          ])
                        ]);
                      }), 64))
                    ])
                  ]),
                  showPlatformModal.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center p-4"
                  }, [
                    createVNode("div", { class: "bg-white rounded-lg shadow-xl max-w-md w-full p-6" }, [
                      createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                        createVNode("h3", { class: "text-lg font-medium text-gray-900" }, toDisplayString(showEditPlatformModal.value ? "Edit Platform" : "Add Platform"), 1),
                        createVNode("button", {
                          onClick: closePlatformModal,
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
                        onSubmit: withModifiers(submitPlatform, ["prevent"])
                      }, [
                        createVNode("div", { class: "space-y-4" }, [
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Platform Name"),
                            withDirectives(createVNode("input", {
                              type: "text",
                              "onUpdate:modelValue": ($event) => unref(platformForm).name = $event,
                              class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", { "border-red-500": platformFormErrors.value.name }],
                              placeholder: "e.g., Databricks"
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(platformForm).name]
                            ]),
                            platformFormErrors.value.name ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-1 text-sm text-red-600"
                            }, toDisplayString(platformFormErrors.value.name), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Image Path"),
                            withDirectives(createVNode("input", {
                              type: "text",
                              "onUpdate:modelValue": ($event) => unref(platformForm).image_path = $event,
                              class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", { "border-red-500": platformFormErrors.value.image_path }],
                              placeholder: "e.g., databricks.png"
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(platformForm).image_path]
                            ]),
                            platformFormErrors.value.image_path ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-1 text-sm text-red-600"
                            }, toDisplayString(platformFormErrors.value.image_path), 1)) : createCommentVNode("", true),
                            createVNode("p", { class: "mt-1 text-xs text-gray-500" }, "File should be in /public/images/platforms/")
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Row Number"),
                            withDirectives(createVNode("select", {
                              "onUpdate:modelValue": ($event) => unref(platformForm).row_number = $event,
                              class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", { "border-red-500": platformFormErrors.value.row_number }]
                            }, [
                              createVNode("option", { value: "1" }, "Row 1 (1 platform)"),
                              createVNode("option", { value: "2" }, "Row 2 (3 platforms)"),
                              createVNode("option", { value: "3" }, "Row 3 (2 platforms)")
                            ], 10, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(platformForm).row_number]
                            ]),
                            platformFormErrors.value.row_number ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-1 text-sm text-red-600"
                            }, toDisplayString(platformFormErrors.value.row_number), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Sort Order"),
                            withDirectives(createVNode("input", {
                              type: "number",
                              "onUpdate:modelValue": ($event) => unref(platformForm).sort_order = $event,
                              class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", { "border-red-500": platformFormErrors.value.sort_order }],
                              placeholder: "1",
                              min: "1"
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(platformForm).sort_order]
                            ]),
                            platformFormErrors.value.sort_order ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-1 text-sm text-red-600"
                            }, toDisplayString(platformFormErrors.value.sort_order), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode("label", { class: "relative inline-flex items-center cursor-pointer" }, [
                              withDirectives(createVNode("input", {
                                type: "checkbox",
                                "onUpdate:modelValue": ($event) => unref(platformForm).is_active = $event,
                                class: "sr-only peer"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelCheckbox, unref(platformForm).is_active]
                              ]),
                              createVNode("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" }),
                              createVNode("span", { class: "ml-3 text-sm font-medium text-gray-700" }, "Platform Active")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "mt-6 flex justify-end space-x-3" }, [
                          createVNode("button", {
                            type: "button",
                            onClick: closePlatformModal,
                            class: "px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          }, " Cancel "),
                          createVNode("button", {
                            type: "submit",
                            disabled: unref(platformForm).processing,
                            class: "px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                          }, toDisplayString(unref(platformForm).processing ? "Saving..." : showEditPlatformModal.value ? "Update Platform" : "Create Platform"), 9, ["disabled"])
                        ])
                      ], 32)
                    ])
                  ])) : createCommentVNode("", true)
                ])
              ]),
              createVNode("div", {
                id: "what-sets-us-apart-section",
                class: "bg-white rounded-lg shadow-sm border border-gray-200 mt-8"
              }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "What Sets Us Apart Section"),
                  createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Manage the what sets us apart section content, background image, and feature items")
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(updateWhatSetsUsApart, ["prevent"]),
                    class: "mb-8"
                  }, [
                    createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "what_sets_us_apart_label",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, " Section Label "),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "what_sets_us_apart_label",
                          "onUpdate:modelValue": ($event) => unref(whatSetsUsApartForm).label = $event,
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", { "border-red-500": whatSetsUsApartErrors.value.label }],
                          placeholder: "e.g., What Sets Us Apart"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(whatSetsUsApartForm).label]
                        ]),
                        whatSetsUsApartErrors.value.label ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(whatSetsUsApartErrors.value.label), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("label", { class: "relative inline-flex items-center cursor-pointer" }, [
                          withDirectives(createVNode("input", {
                            type: "checkbox",
                            "onUpdate:modelValue": ($event) => unref(whatSetsUsApartForm).is_active = $event,
                            class: "sr-only peer"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, unref(whatSetsUsApartForm).is_active]
                          ]),
                          createVNode("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" }),
                          createVNode("span", { class: "ml-3 text-sm font-medium text-gray-700" }, "Section Active")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode("label", {
                        for: "what_sets_us_apart_heading",
                        class: "block text-sm font-medium text-gray-700 mb-2"
                      }, " Section Heading "),
                      withDirectives(createVNode("input", {
                        type: "text",
                        id: "what_sets_us_apart_heading",
                        "onUpdate:modelValue": ($event) => unref(whatSetsUsApartForm).heading = $event,
                        class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", { "border-red-500": whatSetsUsApartErrors.value.heading }],
                        placeholder: "e.g., Your Databricks Partner, Every Step of the Way"
                      }, null, 10, ["onUpdate:modelValue"]), [
                        [vModelText, unref(whatSetsUsApartForm).heading]
                      ]),
                      whatSetsUsApartErrors.value.heading ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "mt-1 text-sm text-red-600"
                      }, toDisplayString(whatSetsUsApartErrors.value.heading), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode("label", {
                        for: "what_sets_us_apart_description",
                        class: "block text-sm font-medium text-gray-700 mb-2"
                      }, " Section Description "),
                      withDirectives(createVNode("textarea", {
                        id: "what_sets_us_apart_description",
                        "onUpdate:modelValue": ($event) => unref(whatSetsUsApartForm).description = $event,
                        rows: "3",
                        class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none", { "border-red-500": whatSetsUsApartErrors.value.description }],
                        placeholder: "e.g., We don't just implement Databricks. We simplify it, tailor it, and make it deliver real business outcomes."
                      }, null, 10, ["onUpdate:modelValue"]), [
                        [vModelText, unref(whatSetsUsApartForm).description]
                      ]),
                      whatSetsUsApartErrors.value.description ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "mt-1 text-sm text-red-600"
                      }, toDisplayString(whatSetsUsApartErrors.value.description), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6" }, [
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "what_sets_us_apart_background_image",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, " Background Image Path "),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "what_sets_us_apart_background_image",
                          "onUpdate:modelValue": ($event) => unref(whatSetsUsApartForm).background_image = $event,
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", { "border-red-500": whatSetsUsApartErrors.value.background_image }],
                          placeholder: "e.g., heroobannersinki.png"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(whatSetsUsApartForm).background_image]
                        ]),
                        whatSetsUsApartErrors.value.background_image ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(whatSetsUsApartErrors.value.background_image), 1)) : createCommentVNode("", true),
                        createVNode("p", { class: "mt-1 text-xs text-gray-500" }, "File should be in /public/images/")
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "what_sets_us_apart_background_image_alt",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, " Background Image Alt Text "),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "what_sets_us_apart_background_image_alt",
                          "onUpdate:modelValue": ($event) => unref(whatSetsUsApartForm).background_image_alt = $event,
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", { "border-red-500": whatSetsUsApartErrors.value.background_image_alt }],
                          placeholder: "e.g., Background"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(whatSetsUsApartForm).background_image_alt]
                        ]),
                        whatSetsUsApartErrors.value.background_image_alt ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(whatSetsUsApartErrors.value.background_image_alt), 1)) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode("button", {
                        type: "submit",
                        disabled: unref(whatSetsUsApartForm).processing,
                        class: "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                      }, toDisplayString(unref(whatSetsUsApartForm).processing ? "Saving..." : "Update Section"), 9, ["disabled"])
                    ])
                  ], 32),
                  createVNode("div", { class: "space-y-6" }, [
                    createVNode("div", { class: "flex justify-between items-center" }, [
                      createVNode("h3", { class: "text-lg font-medium text-gray-900" }, "Feature Items"),
                      createVNode("button", {
                        onClick: openAddWhatSetsUsApartItemModal,
                        class: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      }, [
                        (openBlock(), createBlock("svg", {
                          class: "-ml-1 mr-2 h-5 w-5",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M12 4v16m8-8H4"
                          })
                        ])),
                        createTextVNode(" Add Feature Item ")
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.whatSetsUsApartSection?.items || [], (item) => {
                        return openBlock(), createBlock("div", {
                          key: item.id,
                          class: "bg-gray-50 rounded-lg p-4 border border-gray-200"
                        }, [
                          createVNode("div", { class: "flex items-center justify-between mb-3" }, [
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode("div", { class: "w-8 h-8 bg-brand-red rounded-full flex items-center justify-center" }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4 text-white",
                                  fill: "none",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    d: item.icon_svg
                                  }, null, 8, ["d"])
                                ]))
                              ]),
                              createVNode("span", { class: "text-xs text-gray-500" }, "Sort: " + toDisplayString(item.sort_order), 1)
                            ]),
                            createVNode("span", {
                              class: [item.is_active ? "text-green-600" : "text-red-600", "text-xs"]
                            }, toDisplayString(item.is_active ? "Active" : "Inactive"), 3)
                          ]),
                          createVNode("h4", { class: "text-sm font-medium text-gray-900 mb-2" }, toDisplayString(item.title), 1),
                          createVNode("p", { class: "text-xs text-gray-600 mb-3 line-clamp-3" }, toDisplayString(item.description), 1),
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode("button", {
                              onClick: ($event) => editWhatSetsUsApartItem(item),
                              class: "text-blue-600 hover:text-blue-800 text-xs font-medium"
                            }, " Edit ", 8, ["onClick"]),
                            createVNode("button", {
                              onClick: ($event) => deleteWhatSetsUsApartItem(item),
                              class: "text-red-600 hover:text-red-800 text-xs font-medium"
                            }, " Delete ", 8, ["onClick"])
                          ])
                        ]);
                      }), 128))
                    ])
                  ]),
                  showWhatSetsUsApartItemModal.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center p-4"
                  }, [
                    createVNode("div", { class: "bg-white rounded-lg shadow-xl max-w-md w-full p-6" }, [
                      createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                        createVNode("h3", { class: "text-lg font-medium text-gray-900" }, toDisplayString(showEditWhatSetsUsApartItemModal.value ? "Edit Feature Item" : "Add Feature Item"), 1),
                        createVNode("button", {
                          onClick: closeWhatSetsUsApartItemModal,
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
                        onSubmit: withModifiers(submitWhatSetsUsApartItem, ["prevent"])
                      }, [
                        createVNode("div", { class: "space-y-4" }, [
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Title"),
                            withDirectives(createVNode("input", {
                              type: "text",
                              "onUpdate:modelValue": ($event) => unref(whatSetsUsApartItemForm).title = $event,
                              class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", { "border-red-500": whatSetsUsApartItemErrors.value.title }],
                              placeholder: "e.g., We Simplify Databricks"
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(whatSetsUsApartItemForm).title]
                            ]),
                            whatSetsUsApartItemErrors.value.title ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-1 text-sm text-red-600"
                            }, toDisplayString(whatSetsUsApartItemErrors.value.title), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Description"),
                            withDirectives(createVNode("textarea", {
                              "onUpdate:modelValue": ($event) => unref(whatSetsUsApartItemForm).description = $event,
                              rows: "3",
                              class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", { "border-red-500": whatSetsUsApartItemErrors.value.description }],
                              placeholder: "e.g., Tailored solutions aligned to your business objectives"
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(whatSetsUsApartItemForm).description]
                            ]),
                            whatSetsUsApartItemErrors.value.description ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-1 text-sm text-red-600"
                            }, toDisplayString(whatSetsUsApartItemErrors.value.description), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Icon SVG Path"),
                            withDirectives(createVNode("textarea", {
                              "onUpdate:modelValue": ($event) => unref(whatSetsUsApartItemForm).icon_svg = $event,
                              rows: "2",
                              class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", { "border-red-500": whatSetsUsApartItemErrors.value.icon_svg }],
                              placeholder: "e.g., M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1z"
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(whatSetsUsApartItemForm).icon_svg]
                            ]),
                            whatSetsUsApartItemErrors.value.icon_svg ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-1 text-sm text-red-600"
                            }, toDisplayString(whatSetsUsApartItemErrors.value.icon_svg), 1)) : createCommentVNode("", true),
                            createVNode("p", { class: "mt-1 text-xs text-gray-500" }, "SVG path data for the icon")
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Sort Order"),
                            withDirectives(createVNode("input", {
                              type: "number",
                              "onUpdate:modelValue": ($event) => unref(whatSetsUsApartItemForm).sort_order = $event,
                              class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", { "border-red-500": whatSetsUsApartItemErrors.value.sort_order }],
                              placeholder: "1",
                              min: "1"
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(whatSetsUsApartItemForm).sort_order]
                            ]),
                            whatSetsUsApartItemErrors.value.sort_order ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-1 text-sm text-red-600"
                            }, toDisplayString(whatSetsUsApartItemErrors.value.sort_order), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode("label", { class: "relative inline-flex items-center cursor-pointer" }, [
                              withDirectives(createVNode("input", {
                                type: "checkbox",
                                "onUpdate:modelValue": ($event) => unref(whatSetsUsApartItemForm).is_active = $event,
                                class: "sr-only peer"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelCheckbox, unref(whatSetsUsApartItemForm).is_active]
                              ]),
                              createVNode("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" }),
                              createVNode("span", { class: "ml-3 text-sm font-medium text-gray-700" }, "Item Active")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "mt-6 flex justify-end space-x-3" }, [
                          createVNode("button", {
                            type: "button",
                            onClick: closeWhatSetsUsApartItemModal,
                            class: "px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          }, " Cancel "),
                          createVNode("button", {
                            type: "submit",
                            disabled: unref(whatSetsUsApartItemForm).processing,
                            class: "px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                          }, toDisplayString(unref(whatSetsUsApartItemForm).processing ? "Saving..." : showEditWhatSetsUsApartItemModal.value ? "Update Item" : "Create Item"), 9, ["disabled"])
                        ])
                      ], 32)
                    ])
                  ])) : createCommentVNode("", true)
                ])
              ]),
              _ctx.$page.props.flash.success ? (openBlock(), createBlock("div", {
                key: 3,
                class: "mt-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg"
              }, toDisplayString(_ctx.$page.props.flash.success), 1)) : createCommentVNode("", true),
              _ctx.$page.props.flash.error ? (openBlock(), createBlock("div", {
                key: 4,
                class: "mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
              }, toDisplayString(_ctx.$page.props.flash.error), 1)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Homepage/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0050c147"]]);
export {
  Index as default
};
