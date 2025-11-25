import { unref, withCtx, createBlock, createTextVNode, openBlock, createVNode, useSSRContext, ref, mergeProps, onMounted, onUnmounted } from "vue";
import { ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { usePage, Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$2 = {
  __name: "Sidebar",
  __ssrInlineRender: true,
  props: {
    isMobileMenuOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close-mobile-menu"],
  setup(__props, { emit: __emit }) {
    const page = usePage();
    const isActive = (routeName) => {
      const currentRoute = route().current();
      const currentComponent = page.component;
      if (currentRoute === routeName) return true;
      if (routeName === "admin.dashboard" && currentComponent === "Admin/Dashboard") return true;
      if (routeName === "admin.submissions.index" && currentComponent === "Admin/Submissions/Index") return true;
      if (routeName === "admin.users.index" && currentComponent === "Admin/Users/Index") return true;
      if (routeName === "admin.settings.index" && currentComponent === "Admin/Settings/Index") return true;
      if (routeName === "admin.blogs" && (currentComponent === "Admin/Blogs/Index" || currentComponent === "Admin/Blogs/Create" || currentComponent === "Admin/Blogs/Edit")) return true;
      if (routeName === "admin.categories" && currentComponent === "Admin/Categories/Index") return true;
      if (routeName === "admin.tags" && currentComponent === "Admin/Tags/Index") return true;
      if (routeName === "admin.homepage" && (currentComponent === "Admin/Homepage/Index" || currentComponent === "Admin/Homepage/Edit")) return true;
      if (routeName === "admin.about-us" && (currentComponent === "Admin/AboutUs/Index" || currentComponent === "Admin/AboutUs/Edit")) return true;
      if (routeName === "admin.service-pages" && (currentComponent === "Admin/ServicePages/Index" || currentComponent === "Admin/ServicePages/Create" || currentComponent === "Admin/ServicePages/Edit")) return true;
      if (routeName === "admin.footer.index" && currentComponent === "Admin/Footer/Index") return true;
      return false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (__props.isMobileMenuOpen) {
        _push(`<div class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" data-v-557a6611></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<aside class="${ssrRenderClass([
        "fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:shadow-none border-r border-gray-200",
        __props.isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      ])}" data-v-557a6611><div class="flex items-center justify-center h-16 px-4 border-b border-gray-200" data-v-557a6611><img src="/images/sinkilogo1.png" alt="Sinki.ai" class="h-10 w-auto" data-v-557a6611></div><nav class="mt-8 px-4 flex-1" data-v-557a6611><div class="space-y-2" data-v-557a6611>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("admin.dashboard"),
        class: ["nav-item group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200", isActive("admin.dashboard") ? "bg-brand-red text-white shadow-lg" : "text-gray-700 hover:bg-gray-100 hover:text-brand-red"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-557a6611${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" data-v-557a6611${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v1H8V5z" data-v-557a6611${_scopeId}></path></svg> Dashboard `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "mr-3 h-5 w-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                }),
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M8 5a2 2 0 012-2h4a2 2 0 012 2v1H8V5z"
                })
              ])),
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("admin.submissions.index"),
        class: ["nav-item group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200", isActive("admin.submissions.index") ? "bg-brand-red text-white shadow-lg" : "text-gray-700 hover:bg-gray-100 hover:text-brand-red"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-557a6611${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-557a6611${_scopeId}></path></svg> Submissions `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "mr-3 h-5 w-5",
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
              createTextVNode(" Submissions ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="pt-4 pb-2" data-v-557a6611><h3 class="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider" data-v-557a6611>Blog Management</h3></div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("admin.blogs.index"),
        class: ["nav-item group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200", isActive("admin.blogs") ? "bg-brand-red text-white shadow-lg" : "text-gray-700 hover:bg-gray-100 hover:text-brand-red"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-557a6611${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-557a6611${_scopeId}></path></svg> Blog Posts `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "mr-3 h-5 w-5",
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
              createTextVNode(" Blog Posts ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("admin.categories.index"),
        class: ["nav-item group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200", isActive("admin.categories") ? "bg-brand-red text-white shadow-lg" : "text-gray-700 hover:bg-gray-100 hover:text-brand-red"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-557a6611${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" data-v-557a6611${_scopeId}></path></svg> Categories `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "mr-3 h-5 w-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                })
              ])),
              createTextVNode(" Categories ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("admin.tags.index"),
        class: ["nav-item group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200", isActive("admin.tags") ? "bg-brand-red text-white shadow-lg" : "text-gray-700 hover:bg-gray-100 hover:text-brand-red"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-557a6611${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" data-v-557a6611${_scopeId}></path></svg> Tags `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "mr-3 h-5 w-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                })
              ])),
              createTextVNode(" Tags ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="pt-4 pb-2" data-v-557a6611><h3 class="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider" data-v-557a6611>Website Management</h3></div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("admin.homepage.index"),
        class: ["nav-item group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200", isActive("admin.homepage") ? "bg-brand-red text-white shadow-lg" : "text-gray-700 hover:bg-gray-100 hover:text-brand-red"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-557a6611${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" data-v-557a6611${_scopeId}></path></svg> Homepage `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "mr-3 h-5 w-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                })
              ])),
              createTextVNode(" Homepage ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("admin.about-us.index"),
        class: ["nav-item group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200", isActive("admin.about-us") ? "bg-brand-red text-white shadow-lg" : "text-gray-700 hover:bg-gray-100 hover:text-brand-red"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-557a6611${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" data-v-557a6611${_scopeId}></path></svg> About Us `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "mr-3 h-5 w-5",
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
              createTextVNode(" About Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="pt-4 pb-2" data-v-557a6611><h3 class="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider" data-v-557a6611>Services Management</h3></div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("admin.service-pages.index"),
        class: ["nav-item group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200", isActive("admin.service-pages") ? "bg-brand-red text-white shadow-lg" : "text-gray-700 hover:bg-gray-100 hover:text-brand-red"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-557a6611${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-v-557a6611${_scopeId}></path></svg> Service Pages `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "mr-3 h-5 w-5",
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
              createTextVNode(" Service Pages ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="pt-4 pb-2" data-v-557a6611><h3 class="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider" data-v-557a6611>System</h3></div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("admin.users.index"),
        class: ["nav-item group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200", isActive("admin.users.index") ? "bg-brand-red text-white shadow-lg" : "text-gray-700 hover:bg-gray-100 hover:text-brand-red"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-557a6611${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" data-v-557a6611${_scopeId}></path></svg> Users `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "mr-3 h-5 w-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                })
              ])),
              createTextVNode(" Users ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("admin.footer.index"),
        class: ["nav-item group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200", isActive("admin.footer.index") ? "bg-brand-red text-white shadow-lg" : "text-gray-700 hover:bg-gray-100 hover:text-brand-red"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-557a6611${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" data-v-557a6611${_scopeId}></path></svg> Footer `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "mr-3 h-5 w-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M19 14l-7 7m0 0l-7-7m7 7V3"
                })
              ])),
              createTextVNode(" Footer ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("admin.settings.index"),
        class: ["nav-item group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200", isActive("admin.settings.index") ? "bg-brand-red text-white shadow-lg" : "text-gray-700 hover:bg-gray-100 hover:text-brand-red"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-557a6611${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" data-v-557a6611${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-557a6611${_scopeId}></path></svg> Settings `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "mr-3 h-5 w-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                }),
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                })
              ])),
              createTextVNode(" Settings ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></nav><div class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white" data-v-557a6611><div class="flex items-center" data-v-557a6611><div class="flex-shrink-0" data-v-557a6611><div class="h-8 w-8 bg-brand-red rounded-full flex items-center justify-center" data-v-557a6611><span class="text-white text-sm font-semibold" data-v-557a6611>A</span></div></div><div class="ml-3 flex-1 min-w-0" data-v-557a6611><p class="text-sm font-medium text-gray-900 truncate" data-v-557a6611> Admin User </p><p class="text-xs text-gray-500 truncate" data-v-557a6611>${ssrInterpolate(_ctx.$page.props.auth?.user?.email || "admin@sinki.ai")}</p></div></div></div></aside><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/Sidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-557a6611"]]);
const _sfc_main$1 = {
  __name: "Topbar",
  __ssrInlineRender: true,
  props: {
    pageTitle: {
      type: String,
      default: "Dashboard"
    },
    pageSubtitle: {
      type: String,
      default: null
    }
  },
  emits: ["toggle-mobile-menu"],
  setup(__props, { emit: __emit }) {
    const showNotifications = ref(false);
    const showProfileMenu = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40" }, _attrs))} data-v-5c314524><div class="flex items-center justify-between h-16 px-4 lg:px-6" data-v-5c314524><div class="flex items-center" data-v-5c314524><button class="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-red transition-colors duration-200" data-v-5c314524><svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-5c314524><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-5c314524></path></svg></button><div class="ml-2 lg:ml-0" data-v-5c314524><h1 class="text-xl font-bold text-gray-900" data-v-5c314524>${ssrInterpolate(__props.pageTitle)}</h1>`);
      if (__props.pageSubtitle) {
        _push(`<p class="text-sm text-gray-500" data-v-5c314524>${ssrInterpolate(__props.pageSubtitle)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="flex items-center space-x-4" data-v-5c314524><div class="hidden md:block relative" data-v-5c314524><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-v-5c314524><svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-5c314524><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-5c314524></path></svg></div><input type="text" placeholder="Search..." class="block w-64 pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-200" data-v-5c314524></div><div class="relative" data-v-5c314524><button class="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-red transition-colors duration-200" data-v-5c314524><svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-5c314524><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-3.5-3.5c-.6-.6-.9-1.3-.9-2.1V7c0-3.9-3.1-7-7-7S1 3.1 1 7v4.4c0 .8-.3 1.5-.9 2.1L0 17h5m10 0v1a3 3 0 11-6 0v-1m10 0H5" data-v-5c314524></path></svg><span class="absolute top-1 right-1 inline-block w-2 h-2 bg-red-500 rounded-full" data-v-5c314524></span></button>`);
      if (showNotifications.value) {
        _push(`<div class="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50" data-v-5c314524><div class="p-4 border-b border-gray-200" data-v-5c314524><h3 class="text-sm font-semibold text-gray-900" data-v-5c314524>Notifications</h3></div><div class="max-h-64 overflow-y-auto" data-v-5c314524><div class="p-4 text-center text-gray-500 text-sm" data-v-5c314524> No new notifications </div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="relative" data-v-5c314524><button class="flex items-center space-x-2 p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-red transition-colors duration-200" data-v-5c314524><div class="h-8 w-8 bg-brand-red rounded-full flex items-center justify-center" data-v-5c314524><span class="text-white text-sm font-semibold" data-v-5c314524>A</span></div><span class="hidden md:block text-sm font-medium" data-v-5c314524>Admin</span><svg class="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-5c314524><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-5c314524></path></svg></button>`);
      if (showProfileMenu.value) {
        _push(`<div class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50" data-v-5c314524><div class="p-2" data-v-5c314524><div class="px-3 py-2 border-b border-gray-100" data-v-5c314524><p class="text-sm font-medium text-gray-900" data-v-5c314524>Admin User</p><p class="text-xs text-gray-500" data-v-5c314524>${ssrInterpolate(_ctx.$page.props.auth?.user?.email || "admin@sinki.ai")}</p></div>`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("admin.profile.show"),
          class: "flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-5c314524${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" data-v-5c314524${_scopeId}></path></svg> Profile `);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "mr-3 h-4 w-4",
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
                ])),
                createTextVNode(" Profile ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("admin.settings.index"),
          class: "flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-5c314524${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" data-v-5c314524${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-5c314524${_scopeId}></path></svg> Settings `);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "mr-3 h-4 w-4",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  }),
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  })
                ])),
                createTextVNode(" Settings ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<hr class="my-1" data-v-5c314524><button class="w-full flex items-center px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200" data-v-5c314524><svg class="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-5c314524><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" data-v-5c314524></path></svg> Logout </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/Topbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Topbar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5c314524"]]);
const _sfc_main = {
  __name: "AdminLayout",
  __ssrInlineRender: true,
  props: {
    pageTitle: {
      type: String,
      default: "Dashboard"
    },
    pageSubtitle: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const isMobileMenuOpen = ref(false);
    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };
    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false;
    };
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen.value && !event.target.closest(".sidebar") && !event.target.closest("button")) {
        closeMobileMenu();
      }
    };
    const handleEscape = (event) => {
      if (event.key === "Escape" && isMobileMenuOpen.value) {
        closeMobileMenu();
      }
    };
    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    });
    onUnmounted(() => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50" }, _attrs))} data-v-c42f6a51>`);
      _push(ssrRenderComponent(Sidebar, {
        "is-mobile-menu-open": isMobileMenuOpen.value,
        onCloseMobileMenu: closeMobileMenu
      }, null, _parent));
      _push(`<div class="lg:pl-64" data-v-c42f6a51>`);
      _push(ssrRenderComponent(Topbar, {
        "page-title": __props.pageTitle,
        "page-subtitle": __props.pageSubtitle,
        onToggleMobileMenu: toggleMobileMenu
      }, null, _parent));
      _push(`<main data-v-c42f6a51><div class="p-6" data-v-c42f6a51>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></main></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/AdminLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AdminLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c42f6a51"]]);
export {
  AdminLayout as A
};
