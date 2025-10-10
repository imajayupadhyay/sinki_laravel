import { ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import { ref, onMounted, onUnmounted, useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const mobileMenuOpen = ref(false);
    const scrollProgress = ref(0);
    const isSticky = ref(false);
    const activeSection = ref("");
    const closeMobileMenu = () => {
      mobileMenuOpen.value = false;
      document.body.style.overflow = "";
    };
    const handleEscape = (e) => {
      if (e.key === "Escape" && mobileMenuOpen.value) {
        closeMobileMenu();
      }
    };
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      isSticky.value = scrollTop > windowHeight * 0.8;
      const navigation = document.querySelector(".navigation");
      if (navigation) {
        if (window.scrollY > 50) {
          navigation.classList.add("scrolled");
        } else {
          navigation.classList.remove("scrolled");
        }
      }
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableHeight = documentHeight - windowHeight;
      if (scrollableHeight > 0) {
        const progress = scrollTop / scrollableHeight * 100;
        scrollProgress.value = Math.min(100, Math.max(0, progress));
      }
      const sections = ["services", "approach", "platforms", "insights"];
      const offset = 200;
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom > offset) {
            activeSection.value = sectionId;
            break;
          }
        }
      }
    };
    onMounted(() => {
      window.addEventListener("keydown", handleEscape);
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    });
    onUnmounted(() => {
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="scroll-progress-bar fixed top-0 left-0 right-0 h-1 bg-gray-200 z-[100]" data-v-8872ab60><div class="scroll-progress-fill h-full bg-brand-red transition-all duration-300 ease-out" style="${ssrRenderStyle({ width: scrollProgress.value + "%" })}" data-v-8872ab60></div></div><div id="navigation" data-v-8872ab60><nav class="${ssrRenderClass([isSticky.value ? "nav-sticky" : "nav-floating", "navigation bg-white/75 backdrop-blur-sm shadow-custom z-50 rounded-[20px] border border-gray-200"])}" data-v-8872ab60><div class="container-custom" data-v-8872ab60><div class="flex items-center justify-between h-[80px] px-6" data-v-8872ab60><div class="flex items-center" data-v-8872ab60><a href="/" class="flex items-center space-x-2 logo-container" data-v-8872ab60><img class="sinkilogoclass w-[250px] h-[60px] object-contain transition-transform duration-300" src="/images/sinkilogo.png" alt="Sinki Logo" data-v-8872ab60></a></div><div class="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2" data-v-8872ab60><div class="flex items-center space-x-10" data-v-8872ab60><div class="nav-item" data-v-8872ab60><a href="#services" class="${ssrRenderClass(["nav-link text-base font-bold uppercase tracking-wide transition-colors duration-300", activeSection.value === "services" ? "text-brand-red active" : "text-brand-dark hover:text-brand-red"])}" data-v-8872ab60> Services </a></div><div class="nav-item" data-v-8872ab60><a href="#approach" class="${ssrRenderClass(["nav-link text-base font-bold uppercase tracking-wide transition-colors duration-300", activeSection.value === "approach" ? "text-brand-red active" : "text-brand-dark hover:text-brand-red"])}" data-v-8872ab60> Our Approach </a></div><div class="nav-item" data-v-8872ab60><a href="#platforms" class="${ssrRenderClass(["nav-link text-base font-bold uppercase tracking-wide transition-colors duration-300", activeSection.value === "platforms" ? "text-brand-red active" : "text-brand-dark hover:text-brand-red"])}" data-v-8872ab60> Platforms </a></div><div class="nav-item relative group" data-v-8872ab60><a href="#insights" class="${ssrRenderClass(["nav-link text-base font-bold uppercase tracking-wide transition-colors duration-300 flex items-center", activeSection.value === "insights" ? "text-brand-red active" : "text-brand-dark hover:text-brand-red"])}" data-v-8872ab60> Insights </a></div></div></div><div class="hidden lg:block" data-v-8872ab60><a href="/contact" class="cta-button inline-flex items-center px-8 py-2.5 border-2 border-brand-dark rounded-full text-brand-dark text-base font-bold uppercase tracking-wide transition-all duration-300" data-v-8872ab60> Get Started </a></div><button class="lg:hidden mobile-menu-btn p-2 z-50 relative" data-v-8872ab60><svg class="w-8 h-8 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-8872ab60><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-8872ab60></path></svg></button></div></div></nav><div class="${ssrRenderClass(["mobile-menu-overlay fixed inset-0 bg-black/50 z-40 transition-opacity duration-300", mobileMenuOpen.value ? "opacity-100 visible" : "opacity-0 invisible"])}" data-v-8872ab60></div><div class="${ssrRenderClass(["mobile-menu lg:hidden fixed top-0 right-0 h-full w-full sm:w-80 bg-white shadow-2xl transition-transform duration-300 z-50", mobileMenuOpen.value ? "translate-x-0" : "translate-x-full"])}" data-v-8872ab60><div class="p-6 h-full flex flex-col overflow-y-auto" data-v-8872ab60><button class="mobile-menu-close mb-8 ml-auto block p-2 rounded-full hover:bg-gray-100 transition-colors duration-200" data-v-8872ab60><svg class="w-8 h-8 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-8872ab60><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-8872ab60></path></svg></button><div class="flex flex-col space-y-4" data-v-8872ab60><a href="#services" class="mobile-menu-link group flex items-center px-4 py-4 border border-gray-200 rounded-xl hover:border-brand-red hover:bg-brand-red/5 transition-all duration-300" data-v-8872ab60><div class="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300" data-v-8872ab60><svg class="w-6 h-6 text-brand-red group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-8872ab60><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" data-v-8872ab60></path></svg></div><div data-v-8872ab60><span class="text-brand-dark text-base font-bold uppercase group-hover:text-brand-red transition-colors duration-300" data-v-8872ab60>Services</span><p class="text-gray-500 text-xs font-normal" data-v-8872ab60>Our Solutions</p></div></a><a href="#approach" class="mobile-menu-link group flex items-center px-4 py-4 border border-gray-200 rounded-xl hover:border-brand-red hover:bg-brand-red/5 transition-all duration-300" data-v-8872ab60><div class="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300" data-v-8872ab60><svg class="w-6 h-6 text-brand-red group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-8872ab60><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-8872ab60></path></svg></div><div data-v-8872ab60><span class="text-brand-dark text-base font-bold uppercase group-hover:text-brand-red transition-colors duration-300" data-v-8872ab60>Our Approach</span><p class="text-gray-500 text-xs font-normal" data-v-8872ab60>How We Work</p></div></a><a href="#platforms" class="mobile-menu-link group flex items-center px-4 py-4 border border-gray-200 rounded-xl hover:border-brand-red hover:bg-brand-red/5 transition-all duration-300" data-v-8872ab60><div class="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300" data-v-8872ab60><svg class="w-6 h-6 text-brand-red group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-8872ab60><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-v-8872ab60></path></svg></div><div data-v-8872ab60><span class="text-brand-dark text-base font-bold uppercase group-hover:text-brand-red transition-colors duration-300" data-v-8872ab60>Platforms</span><p class="text-gray-500 text-xs font-normal" data-v-8872ab60>Technology Stack</p></div></a><a href="#insights" class="mobile-menu-link group flex items-center px-4 py-4 border border-gray-200 rounded-xl hover:border-brand-red hover:bg-brand-red/5 transition-all duration-300" data-v-8872ab60><div class="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300" data-v-8872ab60><svg class="w-6 h-6 text-brand-red group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-8872ab60><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" data-v-8872ab60></path></svg></div><div data-v-8872ab60><span class="text-brand-dark text-base font-bold uppercase group-hover:text-brand-red transition-colors duration-300" data-v-8872ab60>Insights</span><p class="text-gray-500 text-xs font-normal" data-v-8872ab60>Resources &amp; Blog</p></div></a><a href="/contact" class="mobile-menu-link group flex items-center px-4 py-4 border border-gray-200 rounded-xl hover:border-brand-red hover:bg-brand-red/5 transition-all duration-300" data-v-8872ab60><div class="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300" data-v-8872ab60><svg class="w-6 h-6 text-brand-red group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-8872ab60><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-v-8872ab60></path></svg></div><div data-v-8872ab60><span class="text-brand-dark text-base font-bold uppercase group-hover:text-brand-red transition-colors duration-300" data-v-8872ab60>Contact Us</span><p class="text-gray-500 text-xs font-normal" data-v-8872ab60>Get in Touch</p></div></a></div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8872ab60"]]);
export {
  Header as H
};
