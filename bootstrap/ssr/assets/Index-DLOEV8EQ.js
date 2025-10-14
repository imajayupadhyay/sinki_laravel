import { ref, mergeProps, withCtx, unref, createBlock, createTextVNode, openBlock, createVNode, createCommentVNode, toDisplayString, Fragment, renderList, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { A as AdminLayout } from "./AdminLayout-CcF1p51h.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    blogs: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const showDeleteModal = ref(false);
    const selectedBlog = ref(null);
    const deleteForm = useForm({});
    const confirmDelete = (blog) => {
      selectedBlog.value = blog;
      showDeleteModal.value = true;
    };
    const closeDeleteModal = () => {
      showDeleteModal.value = false;
      selectedBlog.value = null;
    };
    const deleteBlog = () => {
      deleteForm.delete(route("admin.blogs.destroy", selectedBlog.value.id), {
        onSuccess: () => {
          closeDeleteModal();
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AdminLayout, mergeProps({
        "page-title": "Blog Posts Management",
        "page-subtitle": "Manage all blog posts, drafts and published content"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Blog Posts - Admin Dashboard" }, null, _parent2, _scopeId));
            if (_ctx.$page.props.flash?.success) {
              _push2(`<div class="mb-6 bg-green-50 border border-green-200 rounded-lg p-4" data-v-65a9a8b9${_scopeId}><div class="flex" data-v-65a9a8b9${_scopeId}><svg class="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-65a9a8b9${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-65a9a8b9${_scopeId}></path></svg><p class="ml-3 text-sm text-green-800" data-v-65a9a8b9${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.success)}</p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.flash?.error) {
              _push2(`<div class="mb-6 bg-red-50 border border-red-200 rounded-lg p-4" data-v-65a9a8b9${_scopeId}><div class="flex" data-v-65a9a8b9${_scopeId}><svg class="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-65a9a8b9${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-65a9a8b9${_scopeId}></path></svg><p class="ml-3 text-sm text-red-800" data-v-65a9a8b9${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.error)}</p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" data-v-65a9a8b9${_scopeId}><div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between" data-v-65a9a8b9${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-65a9a8b9${_scopeId}>Blog Posts</h2>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.blogs.create"),
              class: "bg-brand-red text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-65a9a8b9${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" data-v-65a9a8b9${_scopeId2}></path></svg> Create New Post `);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      class: "h-4 w-4 mr-2",
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
                    createTextVNode(" Create New Post ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="overflow-x-auto" data-v-65a9a8b9${_scopeId}><table class="min-w-full divide-y divide-gray-200" data-v-65a9a8b9${_scopeId}><thead class="bg-gray-50" data-v-65a9a8b9${_scopeId}><tr data-v-65a9a8b9${_scopeId}><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-65a9a8b9${_scopeId}>Post</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-65a9a8b9${_scopeId}>Status</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-65a9a8b9${_scopeId}>Category</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-65a9a8b9${_scopeId}>Author</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-65a9a8b9${_scopeId}>Published</th><th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-65a9a8b9${_scopeId}>Actions</th></tr></thead><tbody class="bg-white divide-y divide-gray-200" data-v-65a9a8b9${_scopeId}><!--[-->`);
            ssrRenderList(__props.blogs, (blog) => {
              _push2(`<tr class="hover:bg-gray-50" data-v-65a9a8b9${_scopeId}><td class="px-6 py-4" data-v-65a9a8b9${_scopeId}><div class="flex items-start" data-v-65a9a8b9${_scopeId}><div class="h-12 w-12 bg-brand-red rounded-lg flex items-center justify-center flex-shrink-0" data-v-65a9a8b9${_scopeId}><svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-65a9a8b9${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-65a9a8b9${_scopeId}></path></svg></div><div class="ml-4 min-w-0 flex-1" data-v-65a9a8b9${_scopeId}><div class="text-sm font-medium text-gray-900 truncate" data-v-65a9a8b9${_scopeId}>${ssrInterpolate(blog.title)}</div><div class="text-xs text-gray-500" data-v-65a9a8b9${_scopeId}>${ssrInterpolate(blog.slug)}</div>`);
              if (blog.tags) {
                _push2(`<div class="mt-1 flex flex-wrap gap-1" data-v-65a9a8b9${_scopeId}><!--[-->`);
                ssrRenderList(blog.tags.split(", ").slice(0, 3), (tag) => {
                  _push2(`<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800" data-v-65a9a8b9${_scopeId}>${ssrInterpolate(tag)}</span>`);
                });
                _push2(`<!--]-->`);
                if (blog.tags.split(", ").length > 3) {
                  _push2(`<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600" data-v-65a9a8b9${_scopeId}> +${ssrInterpolate(blog.tags.split(", ").length - 3)} more </span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></td><td class="px-6 py-4 whitespace-nowrap" data-v-65a9a8b9${_scopeId}><span class="${ssrRenderClass([{
                "bg-green-100 text-green-800": blog.status === "published",
                "bg-yellow-100 text-yellow-800": blog.status === "draft"
              }, "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"])}" data-v-65a9a8b9${_scopeId}>${ssrInterpolate(blog.status === "published" ? "Published" : "Draft")}</span></td><td class="px-6 py-4 whitespace-nowrap" data-v-65a9a8b9${_scopeId}><div class="text-sm text-gray-900" data-v-65a9a8b9${_scopeId}>${ssrInterpolate(blog.category || "Uncategorized")}</div></td><td class="px-6 py-4 whitespace-nowrap" data-v-65a9a8b9${_scopeId}><div class="text-sm text-gray-900" data-v-65a9a8b9${_scopeId}>${ssrInterpolate(blog.author)}</div></td><td class="px-6 py-4 whitespace-nowrap" data-v-65a9a8b9${_scopeId}>`);
              if (blog.published_at) {
                _push2(`<div class="text-sm text-gray-900" data-v-65a9a8b9${_scopeId}>${ssrInterpolate(blog.published_at)}</div>`);
              } else {
                _push2(`<div class="text-xs text-gray-500" data-v-65a9a8b9${_scopeId}>${ssrInterpolate(blog.created_at_human)}</div>`);
              }
              _push2(`</td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium" data-v-65a9a8b9${_scopeId}><div class="flex items-center justify-end space-x-2" data-v-65a9a8b9${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("admin.blogs.edit", blog.id),
                class: "text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md transition-colors duration-200"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Edit `);
                  } else {
                    return [
                      createTextVNode(" Edit ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("admin.blogs.duplicate", blog.id),
                class: "text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-md transition-colors duration-200"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Duplicate `);
                  } else {
                    return [
                      createTextVNode(" Duplicate ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<button class="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition-colors duration-200" data-v-65a9a8b9${_scopeId}> Delete </button></div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table>`);
            if (!__props.blogs || __props.blogs.length === 0) {
              _push2(`<div class="text-center py-12" data-v-65a9a8b9${_scopeId}><svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-65a9a8b9${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-65a9a8b9${_scopeId}></path></svg><h3 class="mt-4 text-lg font-medium text-gray-900" data-v-65a9a8b9${_scopeId}>No blog posts found</h3><p class="mt-2 text-gray-600" data-v-65a9a8b9${_scopeId}>Get started by creating your first blog post.</p><div class="mt-6" data-v-65a9a8b9${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("admin.blogs.create"),
                class: "inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-brand-red hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-65a9a8b9${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" data-v-65a9a8b9${_scopeId2}></path></svg> Create New Post `);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        class: "h-4 w-4 mr-2",
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
                      createTextVNode(" Create New Post ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
            if (showDeleteModal.value) {
              _push2(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-v-65a9a8b9${_scopeId}><div class="bg-white rounded-lg p-6 w-full max-w-md mx-4" data-v-65a9a8b9${_scopeId}><h3 class="text-lg font-semibold text-gray-900 mb-4" data-v-65a9a8b9${_scopeId}>Delete Blog Post</h3><p class="text-gray-600 mb-6" data-v-65a9a8b9${_scopeId}> Are you sure you want to delete <strong data-v-65a9a8b9${_scopeId}>${ssrInterpolate(selectedBlog.value?.title)}</strong>? This action cannot be undone. </p><div class="flex items-center justify-end space-x-3" data-v-65a9a8b9${_scopeId}><button type="button" class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200" data-v-65a9a8b9${_scopeId}> Cancel </button><button${ssrIncludeBooleanAttr(unref(deleteForm).processing) ? " disabled" : ""} class="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200 disabled:opacity-50" data-v-65a9a8b9${_scopeId}>${ssrInterpolate(unref(deleteForm).processing ? "Deleting..." : "Delete Post")}</button></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(Head), { title: "Blog Posts - Admin Dashboard" }),
              _ctx.$page.props.flash?.success ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-6 bg-green-50 border border-green-200 rounded-lg p-4"
              }, [
                createVNode("div", { class: "flex" }, [
                  (openBlock(), createBlock("svg", {
                    class: "h-5 w-5 text-green-400",
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
                  ])),
                  createVNode("p", { class: "ml-3 text-sm text-green-800" }, toDisplayString(_ctx.$page.props.flash.success), 1)
                ])
              ])) : createCommentVNode("", true),
              _ctx.$page.props.flash?.error ? (openBlock(), createBlock("div", {
                key: 1,
                class: "mb-6 bg-red-50 border border-red-200 rounded-lg p-4"
              }, [
                createVNode("div", { class: "flex" }, [
                  (openBlock(), createBlock("svg", {
                    class: "h-5 w-5 text-red-400",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    })
                  ])),
                  createVNode("p", { class: "ml-3 text-sm text-red-800" }, toDisplayString(_ctx.$page.props.flash.error), 1)
                ])
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200 flex items-center justify-between" }, [
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Blog Posts"),
                  createVNode(unref(Link), {
                    href: _ctx.route("admin.blogs.create"),
                    class: "bg-brand-red text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center"
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "h-4 w-4 mr-2",
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
                      createTextVNode(" Create New Post ")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]),
                createVNode("div", { class: "overflow-x-auto" }, [
                  createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                    createVNode("thead", { class: "bg-gray-50" }, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Post"),
                        createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Status"),
                        createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Category"),
                        createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Author"),
                        createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Published"),
                        createVNode("th", { class: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Actions")
                      ])
                    ]),
                    createVNode("tbody", { class: "bg-white divide-y divide-gray-200" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.blogs, (blog) => {
                        return openBlock(), createBlock("tr", {
                          key: blog.id,
                          class: "hover:bg-gray-50"
                        }, [
                          createVNode("td", { class: "px-6 py-4" }, [
                            createVNode("div", { class: "flex items-start" }, [
                              createVNode("div", { class: "h-12 w-12 bg-brand-red rounded-lg flex items-center justify-center flex-shrink-0" }, [
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
                                    d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                  })
                                ]))
                              ]),
                              createVNode("div", { class: "ml-4 min-w-0 flex-1" }, [
                                createVNode("div", { class: "text-sm font-medium text-gray-900 truncate" }, toDisplayString(blog.title), 1),
                                createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(blog.slug), 1),
                                blog.tags ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "mt-1 flex flex-wrap gap-1"
                                }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(blog.tags.split(", ").slice(0, 3), (tag) => {
                                    return openBlock(), createBlock("span", {
                                      key: tag,
                                      class: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800"
                                    }, toDisplayString(tag), 1);
                                  }), 128)),
                                  blog.tags.split(", ").length > 3 ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600"
                                  }, " +" + toDisplayString(blog.tags.split(", ").length - 3) + " more ", 1)) : createCommentVNode("", true)
                                ])) : createCommentVNode("", true)
                              ])
                            ])
                          ]),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                            createVNode("span", {
                              class: ["inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium", {
                                "bg-green-100 text-green-800": blog.status === "published",
                                "bg-yellow-100 text-yellow-800": blog.status === "draft"
                              }]
                            }, toDisplayString(blog.status === "published" ? "Published" : "Draft"), 3)
                          ]),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                            createVNode("div", { class: "text-sm text-gray-900" }, toDisplayString(blog.category || "Uncategorized"), 1)
                          ]),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                            createVNode("div", { class: "text-sm text-gray-900" }, toDisplayString(blog.author), 1)
                          ]),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                            blog.published_at ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-sm text-gray-900"
                            }, toDisplayString(blog.published_at), 1)) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "text-xs text-gray-500"
                            }, toDisplayString(blog.created_at_human), 1))
                          ]),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium" }, [
                            createVNode("div", { class: "flex items-center justify-end space-x-2" }, [
                              createVNode(unref(Link), {
                                href: _ctx.route("admin.blogs.edit", blog.id),
                                class: "text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md transition-colors duration-200"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Edit ")
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              createVNode(unref(Link), {
                                href: _ctx.route("admin.blogs.duplicate", blog.id),
                                class: "text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-md transition-colors duration-200"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Duplicate ")
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              createVNode("button", {
                                onClick: ($event) => confirmDelete(blog),
                                class: "text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition-colors duration-200"
                              }, " Delete ", 8, ["onClick"])
                            ])
                          ])
                        ]);
                      }), 128))
                    ])
                  ]),
                  !__props.blogs || __props.blogs.length === 0 ? (openBlock(), createBlock("div", {
                    key: 0,
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
                        d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      })
                    ])),
                    createVNode("h3", { class: "mt-4 text-lg font-medium text-gray-900" }, "No blog posts found"),
                    createVNode("p", { class: "mt-2 text-gray-600" }, "Get started by creating your first blog post."),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode(unref(Link), {
                        href: _ctx.route("admin.blogs.create"),
                        class: "inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-brand-red hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock("svg", {
                            class: "h-4 w-4 mr-2",
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
                          createTextVNode(" Create New Post ")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])
                  ])) : createCommentVNode("", true)
                ])
              ]),
              showDeleteModal.value ? (openBlock(), createBlock("div", {
                key: 2,
                class: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                onClick: withModifiers(closeDeleteModal, ["self"])
              }, [
                createVNode("div", { class: "bg-white rounded-lg p-6 w-full max-w-md mx-4" }, [
                  createVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-4" }, "Delete Blog Post"),
                  createVNode("p", { class: "text-gray-600 mb-6" }, [
                    createTextVNode(" Are you sure you want to delete "),
                    createVNode("strong", null, toDisplayString(selectedBlog.value?.title), 1),
                    createTextVNode("? This action cannot be undone. ")
                  ]),
                  createVNode("div", { class: "flex items-center justify-end space-x-3" }, [
                    createVNode("button", {
                      type: "button",
                      onClick: closeDeleteModal,
                      class: "px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
                    }, " Cancel "),
                    createVNode("button", {
                      onClick: deleteBlog,
                      disabled: unref(deleteForm).processing,
                      class: "px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200 disabled:opacity-50"
                    }, toDisplayString(unref(deleteForm).processing ? "Deleting..." : "Delete Post"), 9, ["disabled"])
                  ])
                ])
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Blogs/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-65a9a8b9"]]);
export {
  Index as default
};
