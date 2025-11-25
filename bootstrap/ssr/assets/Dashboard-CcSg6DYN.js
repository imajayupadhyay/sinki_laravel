import { mergeProps, withCtx, unref, createBlock, createVNode, openBlock, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/vue3";
import { A as AdminLayout } from "./AdminLayout-DZUdEQLU.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AdminLayout, mergeProps({
        "page-title": "Dashboard",
        "page-subtitle": "Welcome to your admin panel"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Admin Dashboard - Sinki.ai" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-8" data-v-94200397${_scopeId}><div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6" data-v-94200397${_scopeId}><div class="flex items-center" data-v-94200397${_scopeId}><div class="flex-shrink-0" data-v-94200397${_scopeId}><div class="h-12 w-12 bg-brand-red rounded-lg flex items-center justify-center" data-v-94200397${_scopeId}><svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-94200397${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-94200397${_scopeId}></path></svg></div></div><div class="ml-4" data-v-94200397${_scopeId}><h2 class="text-2xl font-bold text-gray-900" data-v-94200397${_scopeId}>Welcome back, Admin!</h2><p class="text-gray-600 mt-1" data-v-94200397${_scopeId}>Here&#39;s what&#39;s happening with your Sinki.ai admin portal today.</p></div></div></div></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-v-94200397${_scopeId}><div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6" data-v-94200397${_scopeId}><div class="flex items-center" data-v-94200397${_scopeId}><div class="flex-shrink-0" data-v-94200397${_scopeId}><div class="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center" data-v-94200397${_scopeId}><svg class="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-94200397${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" data-v-94200397${_scopeId}></path></svg></div></div><div class="ml-4" data-v-94200397${_scopeId}><p class="text-sm font-medium text-gray-600" data-v-94200397${_scopeId}>Total Users</p><p class="text-2xl font-bold text-gray-900" data-v-94200397${_scopeId}>1</p></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6" data-v-94200397${_scopeId}><div class="flex items-center" data-v-94200397${_scopeId}><div class="flex-shrink-0" data-v-94200397${_scopeId}><div class="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center" data-v-94200397${_scopeId}><svg class="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-94200397${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-v-94200397${_scopeId}></path></svg></div></div><div class="ml-4" data-v-94200397${_scopeId}><p class="text-sm font-medium text-gray-600" data-v-94200397${_scopeId}>Active Sessions</p><p class="text-2xl font-bold text-gray-900" data-v-94200397${_scopeId}>1</p></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6" data-v-94200397${_scopeId}><div class="flex items-center" data-v-94200397${_scopeId}><div class="flex-shrink-0" data-v-94200397${_scopeId}><div class="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center" data-v-94200397${_scopeId}><svg class="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-94200397${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-94200397${_scopeId}></path></svg></div></div><div class="ml-4" data-v-94200397${_scopeId}><p class="text-sm font-medium text-gray-600" data-v-94200397${_scopeId}>System Status</p><p class="text-2xl font-bold text-green-600" data-v-94200397${_scopeId}>Online</p></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6" data-v-94200397${_scopeId}><div class="flex items-center" data-v-94200397${_scopeId}><div class="flex-shrink-0" data-v-94200397${_scopeId}><div class="h-10 w-10 bg-brand-red/10 rounded-lg flex items-center justify-center" data-v-94200397${_scopeId}><svg class="h-5 w-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-94200397${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" data-v-94200397${_scopeId}></path></svg></div></div><div class="ml-4" data-v-94200397${_scopeId}><p class="text-sm font-medium text-gray-600" data-v-94200397${_scopeId}>Security</p><p class="text-2xl font-bold text-brand-red" data-v-94200397${_scopeId}>Secure</p></div></div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8" data-v-94200397${_scopeId}><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-94200397${_scopeId}><div class="p-6 border-b border-gray-200" data-v-94200397${_scopeId}><h3 class="text-lg font-semibold text-gray-900" data-v-94200397${_scopeId}>Recent Activity</h3></div><div class="p-6" data-v-94200397${_scopeId}><div class="space-y-4" data-v-94200397${_scopeId}><div class="flex items-center" data-v-94200397${_scopeId}><div class="flex-shrink-0" data-v-94200397${_scopeId}><div class="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center" data-v-94200397${_scopeId}><svg class="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-94200397${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" data-v-94200397${_scopeId}></path></svg></div></div><div class="ml-3" data-v-94200397${_scopeId}><p class="text-sm text-gray-900" data-v-94200397${_scopeId}>Admin user logged in</p><p class="text-xs text-gray-500" data-v-94200397${_scopeId}>Just now</p></div></div><div class="flex items-center" data-v-94200397${_scopeId}><div class="flex-shrink-0" data-v-94200397${_scopeId}><div class="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center" data-v-94200397${_scopeId}><svg class="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-94200397${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-94200397${_scopeId}></path></svg></div></div><div class="ml-3" data-v-94200397${_scopeId}><p class="text-sm text-gray-900" data-v-94200397${_scopeId}>System initialization complete</p><p class="text-xs text-gray-500" data-v-94200397${_scopeId}>2 minutes ago</p></div></div><div class="flex items-center" data-v-94200397${_scopeId}><div class="flex-shrink-0" data-v-94200397${_scopeId}><div class="h-8 w-8 bg-brand-red/10 rounded-full flex items-center justify-center" data-v-94200397${_scopeId}><svg class="h-4 w-4 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-94200397${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" data-v-94200397${_scopeId}></path></svg></div></div><div class="ml-3" data-v-94200397${_scopeId}><p class="text-sm text-gray-900" data-v-94200397${_scopeId}>Security settings updated</p><p class="text-xs text-gray-500" data-v-94200397${_scopeId}>1 hour ago</p></div></div></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-94200397${_scopeId}><div class="p-6 border-b border-gray-200" data-v-94200397${_scopeId}><h3 class="text-lg font-semibold text-gray-900" data-v-94200397${_scopeId}>Quick Actions</h3></div><div class="p-6" data-v-94200397${_scopeId}><div class="grid grid-cols-2 gap-4" data-v-94200397${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.users.index"),
              class: "flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-brand-red hover:bg-brand-red/5 transition-all duration-200 group"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="h-8 w-8 text-gray-600 group-hover:text-brand-red mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-94200397${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" data-v-94200397${_scopeId2}></path></svg><span class="text-sm font-medium text-gray-900 group-hover:text-brand-red" data-v-94200397${_scopeId2}>Manage Users</span>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      class: "h-8 w-8 text-gray-600 group-hover:text-brand-red mb-2",
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
                    createVNode("span", { class: "text-sm font-medium text-gray-900 group-hover:text-brand-red" }, "Manage Users")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.submissions.index"),
              class: "flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-brand-red hover:bg-brand-red/5 transition-all duration-200 group"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="h-8 w-8 text-gray-600 group-hover:text-brand-red mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-94200397${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-94200397${_scopeId2}></path></svg><span class="text-sm font-medium text-gray-900 group-hover:text-brand-red" data-v-94200397${_scopeId2}>Submissions</span>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      class: "h-8 w-8 text-gray-600 group-hover:text-brand-red mb-2",
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
                    createVNode("span", { class: "text-sm font-medium text-gray-900 group-hover:text-brand-red" }, "Submissions")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.settings.index"),
              class: "flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-brand-red hover:bg-brand-red/5 transition-all duration-200 group"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="h-8 w-8 text-gray-600 group-hover:text-brand-red mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-94200397${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" data-v-94200397${_scopeId2}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-94200397${_scopeId2}></path></svg><span class="text-sm font-medium text-gray-900 group-hover:text-brand-red" data-v-94200397${_scopeId2}>Settings</span>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      class: "h-8 w-8 text-gray-600 group-hover:text-brand-red mb-2",
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
                    createVNode("span", { class: "text-sm font-medium text-gray-900 group-hover:text-brand-red" }, "Settings")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<button class="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-brand-red hover:bg-brand-red/5 transition-all duration-200 group" data-v-94200397${_scopeId}><svg class="h-8 w-8 text-gray-600 group-hover:text-brand-red mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-94200397${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" data-v-94200397${_scopeId}></path></svg><span class="text-sm font-medium text-gray-900 group-hover:text-brand-red" data-v-94200397${_scopeId}>Reports</span></button></div></div></div></div>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Admin Dashboard - Sinki.ai" }),
              createVNode("div", { class: "mb-8" }, [
                createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6" }, [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("div", { class: "flex-shrink-0" }, [
                      createVNode("div", { class: "h-12 w-12 bg-brand-red rounded-lg flex items-center justify-center" }, [
                        (openBlock(), createBlock("svg", {
                          class: "h-6 w-6 text-white",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          })
                        ]))
                      ])
                    ]),
                    createVNode("div", { class: "ml-4" }, [
                      createVNode("h2", { class: "text-2xl font-bold text-gray-900" }, "Welcome back, Admin!"),
                      createVNode("p", { class: "text-gray-600 mt-1" }, "Here's what's happening with your Sinki.ai admin portal today.")
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" }, [
                createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6" }, [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("div", { class: "flex-shrink-0" }, [
                      createVNode("div", { class: "h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center" }, [
                        (openBlock(), createBlock("svg", {
                          class: "h-5 w-5 text-blue-600",
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
                        ]))
                      ])
                    ]),
                    createVNode("div", { class: "ml-4" }, [
                      createVNode("p", { class: "text-sm font-medium text-gray-600" }, "Total Users"),
                      createVNode("p", { class: "text-2xl font-bold text-gray-900" }, "1")
                    ])
                  ])
                ]),
                createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6" }, [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("div", { class: "flex-shrink-0" }, [
                      createVNode("div", { class: "h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center" }, [
                        (openBlock(), createBlock("svg", {
                          class: "h-5 w-5 text-green-600",
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
                        ]))
                      ])
                    ]),
                    createVNode("div", { class: "ml-4" }, [
                      createVNode("p", { class: "text-sm font-medium text-gray-600" }, "Active Sessions"),
                      createVNode("p", { class: "text-2xl font-bold text-gray-900" }, "1")
                    ])
                  ])
                ]),
                createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6" }, [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("div", { class: "flex-shrink-0" }, [
                      createVNode("div", { class: "h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center" }, [
                        (openBlock(), createBlock("svg", {
                          class: "h-5 w-5 text-green-600",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          })
                        ]))
                      ])
                    ]),
                    createVNode("div", { class: "ml-4" }, [
                      createVNode("p", { class: "text-sm font-medium text-gray-600" }, "System Status"),
                      createVNode("p", { class: "text-2xl font-bold text-green-600" }, "Online")
                    ])
                  ])
                ]),
                createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6" }, [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("div", { class: "flex-shrink-0" }, [
                      createVNode("div", { class: "h-10 w-10 bg-brand-red/10 rounded-lg flex items-center justify-center" }, [
                        (openBlock(), createBlock("svg", {
                          class: "h-5 w-5 text-brand-red",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          })
                        ]))
                      ])
                    ]),
                    createVNode("div", { class: "ml-4" }, [
                      createVNode("p", { class: "text-sm font-medium text-gray-600" }, "Security"),
                      createVNode("p", { class: "text-2xl font-bold text-brand-red" }, "Secure")
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8" }, [
                createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200" }, [
                  createVNode("div", { class: "p-6 border-b border-gray-200" }, [
                    createVNode("h3", { class: "text-lg font-semibold text-gray-900" }, "Recent Activity")
                  ]),
                  createVNode("div", { class: "p-6" }, [
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "flex-shrink-0" }, [
                          createVNode("div", { class: "h-8 w-8 bg-green-100 rounded-full flex items-center justify-center" }, [
                            (openBlock(), createBlock("svg", {
                              class: "h-4 w-4 text-green-600",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                              })
                            ]))
                          ])
                        ]),
                        createVNode("div", { class: "ml-3" }, [
                          createVNode("p", { class: "text-sm text-gray-900" }, "Admin user logged in"),
                          createVNode("p", { class: "text-xs text-gray-500" }, "Just now")
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "flex-shrink-0" }, [
                          createVNode("div", { class: "h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center" }, [
                            (openBlock(), createBlock("svg", {
                              class: "h-4 w-4 text-blue-600",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              })
                            ]))
                          ])
                        ]),
                        createVNode("div", { class: "ml-3" }, [
                          createVNode("p", { class: "text-sm text-gray-900" }, "System initialization complete"),
                          createVNode("p", { class: "text-xs text-gray-500" }, "2 minutes ago")
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "flex-shrink-0" }, [
                          createVNode("div", { class: "h-8 w-8 bg-brand-red/10 rounded-full flex items-center justify-center" }, [
                            (openBlock(), createBlock("svg", {
                              class: "h-4 w-4 text-brand-red",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                              })
                            ]))
                          ])
                        ]),
                        createVNode("div", { class: "ml-3" }, [
                          createVNode("p", { class: "text-sm text-gray-900" }, "Security settings updated"),
                          createVNode("p", { class: "text-xs text-gray-500" }, "1 hour ago")
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200" }, [
                  createVNode("div", { class: "p-6 border-b border-gray-200" }, [
                    createVNode("h3", { class: "text-lg font-semibold text-gray-900" }, "Quick Actions")
                  ]),
                  createVNode("div", { class: "p-6" }, [
                    createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                      createVNode(unref(Link), {
                        href: _ctx.route("admin.users.index"),
                        class: "flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-brand-red hover:bg-brand-red/5 transition-all duration-200 group"
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock("svg", {
                            class: "h-8 w-8 text-gray-600 group-hover:text-brand-red mb-2",
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
                          createVNode("span", { class: "text-sm font-medium text-gray-900 group-hover:text-brand-red" }, "Manage Users")
                        ]),
                        _: 1
                      }, 8, ["href"]),
                      createVNode(unref(Link), {
                        href: _ctx.route("admin.submissions.index"),
                        class: "flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-brand-red hover:bg-brand-red/5 transition-all duration-200 group"
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock("svg", {
                            class: "h-8 w-8 text-gray-600 group-hover:text-brand-red mb-2",
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
                          createVNode("span", { class: "text-sm font-medium text-gray-900 group-hover:text-brand-red" }, "Submissions")
                        ]),
                        _: 1
                      }, 8, ["href"]),
                      createVNode(unref(Link), {
                        href: _ctx.route("admin.settings.index"),
                        class: "flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-brand-red hover:bg-brand-red/5 transition-all duration-200 group"
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock("svg", {
                            class: "h-8 w-8 text-gray-600 group-hover:text-brand-red mb-2",
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
                          createVNode("span", { class: "text-sm font-medium text-gray-900 group-hover:text-brand-red" }, "Settings")
                        ]),
                        _: 1
                      }, 8, ["href"]),
                      createVNode("button", { class: "flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-brand-red hover:bg-brand-red/5 transition-all duration-200 group" }, [
                        (openBlock(), createBlock("svg", {
                          class: "h-8 w-8 text-gray-600 group-hover:text-brand-red mb-2",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          })
                        ])),
                        createVNode("span", { class: "text-sm font-medium text-gray-900 group-hover:text-brand-red" }, "Reports")
                      ])
                    ])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-94200397"]]);
export {
  Dashboard as default
};
