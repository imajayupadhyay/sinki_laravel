import { ref, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, createTextVNode, Fragment, renderList, withModifiers, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm, Head } from "@inertiajs/vue3";
import { A as AdminLayout } from "./AdminLayout-CcF1p51h.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const showModal = ref(false);
    const showDeleteModal = ref(false);
    const isEditing = ref(false);
    const selectedTag = ref(null);
    const tagForm = useForm({
      name: "",
      slug: "",
      description: ""
    });
    const deleteForm = useForm({});
    const openAddModal = () => {
      isEditing.value = false;
      tagForm.reset();
      tagForm.clearErrors();
      showModal.value = true;
    };
    const openEditModal = (tag) => {
      isEditing.value = true;
      selectedTag.value = tag;
      tagForm.name = tag.name;
      tagForm.slug = tag.slug;
      tagForm.description = tag.description || "";
      tagForm.clearErrors();
      showModal.value = true;
    };
    const closeModal = () => {
      showModal.value = false;
      selectedTag.value = null;
      tagForm.reset();
      tagForm.clearErrors();
    };
    const submitTag = () => {
      if (isEditing.value) {
        tagForm.put(route("admin.tags.update", selectedTag.value.id), {
          onSuccess: () => {
            closeModal();
          }
        });
      } else {
        tagForm.post(route("admin.tags.store"), {
          onSuccess: () => {
            closeModal();
          }
        });
      }
    };
    const confirmDelete = (tag) => {
      selectedTag.value = tag;
      showDeleteModal.value = true;
    };
    const closeDeleteModal = () => {
      showDeleteModal.value = false;
      selectedTag.value = null;
    };
    const deleteTag = () => {
      deleteForm.delete(route("admin.tags.destroy", selectedTag.value.id), {
        onSuccess: () => {
          closeDeleteModal();
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AdminLayout, mergeProps({
        "page-title": "Tags Management",
        "page-subtitle": "Manage blog tags for better content organization"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Tags - Admin Dashboard" }, null, _parent2, _scopeId));
            if (_ctx.$page.props.flash?.success) {
              _push2(`<div class="mb-6 bg-green-50 border border-green-200 rounded-lg p-4" data-v-101a3cd7${_scopeId}><div class="flex" data-v-101a3cd7${_scopeId}><svg class="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-101a3cd7${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-101a3cd7${_scopeId}></path></svg><p class="ml-3 text-sm text-green-800" data-v-101a3cd7${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.success)}</p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.flash?.error) {
              _push2(`<div class="mb-6 bg-red-50 border border-red-200 rounded-lg p-4" data-v-101a3cd7${_scopeId}><div class="flex" data-v-101a3cd7${_scopeId}><svg class="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-101a3cd7${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-101a3cd7${_scopeId}></path></svg><p class="ml-3 text-sm text-red-800" data-v-101a3cd7${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.error)}</p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" data-v-101a3cd7${_scopeId}><div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between" data-v-101a3cd7${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-101a3cd7${_scopeId}>Blog Tags</h2><button class="bg-brand-red text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center" data-v-101a3cd7${_scopeId}><svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-101a3cd7${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" data-v-101a3cd7${_scopeId}></path></svg> Add New Tag </button></div><div class="overflow-x-auto" data-v-101a3cd7${_scopeId}><table class="min-w-full divide-y divide-gray-200" data-v-101a3cd7${_scopeId}><thead class="bg-gray-50" data-v-101a3cd7${_scopeId}><tr data-v-101a3cd7${_scopeId}><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-101a3cd7${_scopeId}>Tag</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-101a3cd7${_scopeId}>Slug</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-101a3cd7${_scopeId}>Posts</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-101a3cd7${_scopeId}>Created</th><th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-101a3cd7${_scopeId}>Actions</th></tr></thead><tbody class="bg-white divide-y divide-gray-200" data-v-101a3cd7${_scopeId}><!--[-->`);
            ssrRenderList(__props.tags, (tag) => {
              _push2(`<tr class="hover:bg-gray-50" data-v-101a3cd7${_scopeId}><td class="px-6 py-4 whitespace-nowrap" data-v-101a3cd7${_scopeId}><div class="flex items-center" data-v-101a3cd7${_scopeId}><div class="h-10 w-10 bg-purple-500 rounded-full flex items-center justify-center" data-v-101a3cd7${_scopeId}><svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-101a3cd7${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" data-v-101a3cd7${_scopeId}></path></svg></div><div class="ml-4" data-v-101a3cd7${_scopeId}><div class="text-sm font-medium text-gray-900" data-v-101a3cd7${_scopeId}>${ssrInterpolate(tag.name)}</div>`);
              if (tag.description) {
                _push2(`<div class="text-xs text-gray-500" data-v-101a3cd7${_scopeId}>${ssrInterpolate(tag.description.substring(0, 50))}${ssrInterpolate(tag.description.length > 50 ? "..." : "")}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></td><td class="px-6 py-4 whitespace-nowrap" data-v-101a3cd7${_scopeId}><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800" data-v-101a3cd7${_scopeId}>${ssrInterpolate(tag.slug)}</span></td><td class="px-6 py-4 whitespace-nowrap" data-v-101a3cd7${_scopeId}><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800" data-v-101a3cd7${_scopeId}>${ssrInterpolate(tag.blogs_count)} posts </span></td><td class="px-6 py-4 whitespace-nowrap" data-v-101a3cd7${_scopeId}><div class="text-sm text-gray-900" data-v-101a3cd7${_scopeId}>${ssrInterpolate(tag.created_at)}</div><div class="text-xs text-gray-500" data-v-101a3cd7${_scopeId}>${ssrInterpolate(tag.created_at_human)}</div></td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium" data-v-101a3cd7${_scopeId}><div class="flex items-center justify-end space-x-2" data-v-101a3cd7${_scopeId}><button class="text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md transition-colors duration-200" data-v-101a3cd7${_scopeId}> Edit </button><button class="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition-colors duration-200" data-v-101a3cd7${_scopeId}> Delete </button></div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table>`);
            if (!__props.tags || __props.tags.length === 0) {
              _push2(`<div class="text-center py-12" data-v-101a3cd7${_scopeId}><svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-101a3cd7${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" data-v-101a3cd7${_scopeId}></path></svg><h3 class="mt-4 text-lg font-medium text-gray-900" data-v-101a3cd7${_scopeId}>No tags found</h3><p class="mt-2 text-gray-600" data-v-101a3cd7${_scopeId}>Get started by creating your first blog tag.</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
            if (showModal.value) {
              _push2(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-v-101a3cd7${_scopeId}><div class="bg-white rounded-lg p-6 w-full max-w-lg mx-4" data-v-101a3cd7${_scopeId}><h3 class="text-lg font-semibold text-gray-900 mb-4" data-v-101a3cd7${_scopeId}>${ssrInterpolate(isEditing.value ? "Edit Tag" : "Add New Tag")}</h3><form data-v-101a3cd7${_scopeId}><div class="space-y-4" data-v-101a3cd7${_scopeId}><div data-v-101a3cd7${_scopeId}><label for="name" class="block text-sm font-medium text-gray-700 mb-1" data-v-101a3cd7${_scopeId}>Name</label><input id="name"${ssrRenderAttr("value", unref(tagForm).name)} type="text" class="${ssrRenderClass([{ "border-red-500": unref(tagForm).errors.name }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"])}" required data-v-101a3cd7${_scopeId}>`);
              if (unref(tagForm).errors.name) {
                _push2(`<div class="text-red-600 text-sm mt-1" data-v-101a3cd7${_scopeId}>${ssrInterpolate(unref(tagForm).errors.name)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-101a3cd7${_scopeId}><label for="slug" class="block text-sm font-medium text-gray-700 mb-1" data-v-101a3cd7${_scopeId}>Slug (URL-friendly name)</label><input id="slug"${ssrRenderAttr("value", unref(tagForm).slug)} type="text" class="${ssrRenderClass([{ "border-red-500": unref(tagForm).errors.slug }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"])}" placeholder="Leave empty to auto-generate from name" data-v-101a3cd7${_scopeId}>`);
              if (unref(tagForm).errors.slug) {
                _push2(`<div class="text-red-600 text-sm mt-1" data-v-101a3cd7${_scopeId}>${ssrInterpolate(unref(tagForm).errors.slug)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-101a3cd7${_scopeId}><label for="description" class="block text-sm font-medium text-gray-700 mb-1" data-v-101a3cd7${_scopeId}>Description</label><textarea id="description" rows="3" class="${ssrRenderClass([{ "border-red-500": unref(tagForm).errors.description }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"])}" placeholder="Optional description for this tag" data-v-101a3cd7${_scopeId}>${ssrInterpolate(unref(tagForm).description)}</textarea>`);
              if (unref(tagForm).errors.description) {
                _push2(`<div class="text-red-600 text-sm mt-1" data-v-101a3cd7${_scopeId}>${ssrInterpolate(unref(tagForm).errors.description)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div class="flex items-center justify-end space-x-3 mt-6" data-v-101a3cd7${_scopeId}><button type="button" class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200" data-v-101a3cd7${_scopeId}> Cancel </button><button type="submit"${ssrIncludeBooleanAttr(unref(tagForm).processing) ? " disabled" : ""} class="px-4 py-2 text-sm font-medium text-white bg-brand-red hover:bg-red-600 rounded-md transition-colors duration-200 disabled:opacity-50" data-v-101a3cd7${_scopeId}>${ssrInterpolate(unref(tagForm).processing ? "Saving..." : isEditing.value ? "Update Tag" : "Create Tag")}</button></div></form></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (showDeleteModal.value) {
              _push2(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-v-101a3cd7${_scopeId}><div class="bg-white rounded-lg p-6 w-full max-w-md mx-4" data-v-101a3cd7${_scopeId}><h3 class="text-lg font-semibold text-gray-900 mb-4" data-v-101a3cd7${_scopeId}>Delete Tag</h3><p class="text-gray-600 mb-6" data-v-101a3cd7${_scopeId}> Are you sure you want to delete <strong data-v-101a3cd7${_scopeId}>${ssrInterpolate(selectedTag.value?.name)}</strong>? This action will remove the tag from all associated blog posts. </p><div class="flex items-center justify-end space-x-3" data-v-101a3cd7${_scopeId}><button type="button" class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200" data-v-101a3cd7${_scopeId}> Cancel </button><button${ssrIncludeBooleanAttr(unref(deleteForm).processing) ? " disabled" : ""} class="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200 disabled:opacity-50" data-v-101a3cd7${_scopeId}>${ssrInterpolate(unref(deleteForm).processing ? "Deleting..." : "Delete Tag")}</button></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(Head), { title: "Tags - Admin Dashboard" }),
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
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Blog Tags"),
                  createVNode("button", {
                    onClick: openAddModal,
                    class: "bg-brand-red text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center"
                  }, [
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
                    createTextVNode(" Add New Tag ")
                  ])
                ]),
                createVNode("div", { class: "overflow-x-auto" }, [
                  createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                    createVNode("thead", { class: "bg-gray-50" }, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Tag"),
                        createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Slug"),
                        createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Posts"),
                        createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Created"),
                        createVNode("th", { class: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Actions")
                      ])
                    ]),
                    createVNode("tbody", { class: "bg-white divide-y divide-gray-200" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.tags, (tag) => {
                        return openBlock(), createBlock("tr", {
                          key: tag.id,
                          class: "hover:bg-gray-50"
                        }, [
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode("div", { class: "h-10 w-10 bg-purple-500 rounded-full flex items-center justify-center" }, [
                                (openBlock(), createBlock("svg", {
                                  class: "h-5 w-5 text-white",
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
                                ]))
                              ]),
                              createVNode("div", { class: "ml-4" }, [
                                createVNode("div", { class: "text-sm font-medium text-gray-900" }, toDisplayString(tag.name), 1),
                                tag.description ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "text-xs text-gray-500"
                                }, toDisplayString(tag.description.substring(0, 50)) + toDisplayString(tag.description.length > 50 ? "..." : ""), 1)) : createCommentVNode("", true)
                              ])
                            ])
                          ]),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                            createVNode("span", { class: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800" }, toDisplayString(tag.slug), 1)
                          ]),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                            createVNode("span", { class: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800" }, toDisplayString(tag.blogs_count) + " posts ", 1)
                          ]),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                            createVNode("div", { class: "text-sm text-gray-900" }, toDisplayString(tag.created_at), 1),
                            createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(tag.created_at_human), 1)
                          ]),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium" }, [
                            createVNode("div", { class: "flex items-center justify-end space-x-2" }, [
                              createVNode("button", {
                                onClick: ($event) => openEditModal(tag),
                                class: "text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md transition-colors duration-200"
                              }, " Edit ", 8, ["onClick"]),
                              createVNode("button", {
                                onClick: ($event) => confirmDelete(tag),
                                class: "text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition-colors duration-200"
                              }, " Delete ", 8, ["onClick"])
                            ])
                          ])
                        ]);
                      }), 128))
                    ])
                  ]),
                  !__props.tags || __props.tags.length === 0 ? (openBlock(), createBlock("div", {
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
                        d: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      })
                    ])),
                    createVNode("h3", { class: "mt-4 text-lg font-medium text-gray-900" }, "No tags found"),
                    createVNode("p", { class: "mt-2 text-gray-600" }, "Get started by creating your first blog tag.")
                  ])) : createCommentVNode("", true)
                ])
              ]),
              showModal.value ? (openBlock(), createBlock("div", {
                key: 2,
                class: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                onClick: withModifiers(closeModal, ["self"])
              }, [
                createVNode("div", { class: "bg-white rounded-lg p-6 w-full max-w-lg mx-4" }, [
                  createVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-4" }, toDisplayString(isEditing.value ? "Edit Tag" : "Add New Tag"), 1),
                  createVNode("form", {
                    onSubmit: withModifiers(submitTag, ["prevent"])
                  }, [
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "name",
                          class: "block text-sm font-medium text-gray-700 mb-1"
                        }, "Name"),
                        withDirectives(createVNode("input", {
                          id: "name",
                          "onUpdate:modelValue": ($event) => unref(tagForm).name = $event,
                          type: "text",
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent", { "border-red-500": unref(tagForm).errors.name }],
                          required: ""
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(tagForm).name]
                        ]),
                        unref(tagForm).errors.name ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-red-600 text-sm mt-1"
                        }, toDisplayString(unref(tagForm).errors.name), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "slug",
                          class: "block text-sm font-medium text-gray-700 mb-1"
                        }, "Slug (URL-friendly name)"),
                        withDirectives(createVNode("input", {
                          id: "slug",
                          "onUpdate:modelValue": ($event) => unref(tagForm).slug = $event,
                          type: "text",
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent", { "border-red-500": unref(tagForm).errors.slug }],
                          placeholder: "Leave empty to auto-generate from name"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(tagForm).slug]
                        ]),
                        unref(tagForm).errors.slug ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-red-600 text-sm mt-1"
                        }, toDisplayString(unref(tagForm).errors.slug), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "description",
                          class: "block text-sm font-medium text-gray-700 mb-1"
                        }, "Description"),
                        withDirectives(createVNode("textarea", {
                          id: "description",
                          "onUpdate:modelValue": ($event) => unref(tagForm).description = $event,
                          rows: "3",
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent", { "border-red-500": unref(tagForm).errors.description }],
                          placeholder: "Optional description for this tag"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(tagForm).description]
                        ]),
                        unref(tagForm).errors.description ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-red-600 text-sm mt-1"
                        }, toDisplayString(unref(tagForm).errors.description), 1)) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "flex items-center justify-end space-x-3 mt-6" }, [
                      createVNode("button", {
                        type: "button",
                        onClick: closeModal,
                        class: "px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
                      }, " Cancel "),
                      createVNode("button", {
                        type: "submit",
                        disabled: unref(tagForm).processing,
                        class: "px-4 py-2 text-sm font-medium text-white bg-brand-red hover:bg-red-600 rounded-md transition-colors duration-200 disabled:opacity-50"
                      }, toDisplayString(unref(tagForm).processing ? "Saving..." : isEditing.value ? "Update Tag" : "Create Tag"), 9, ["disabled"])
                    ])
                  ], 32)
                ])
              ])) : createCommentVNode("", true),
              showDeleteModal.value ? (openBlock(), createBlock("div", {
                key: 3,
                class: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                onClick: withModifiers(closeDeleteModal, ["self"])
              }, [
                createVNode("div", { class: "bg-white rounded-lg p-6 w-full max-w-md mx-4" }, [
                  createVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-4" }, "Delete Tag"),
                  createVNode("p", { class: "text-gray-600 mb-6" }, [
                    createTextVNode(" Are you sure you want to delete "),
                    createVNode("strong", null, toDisplayString(selectedTag.value?.name), 1),
                    createTextVNode("? This action will remove the tag from all associated blog posts. ")
                  ]),
                  createVNode("div", { class: "flex items-center justify-end space-x-3" }, [
                    createVNode("button", {
                      type: "button",
                      onClick: closeDeleteModal,
                      class: "px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
                    }, " Cancel "),
                    createVNode("button", {
                      onClick: deleteTag,
                      disabled: unref(deleteForm).processing,
                      class: "px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200 disabled:opacity-50"
                    }, toDisplayString(unref(deleteForm).processing ? "Deleting..." : "Delete Tag"), 9, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Tags/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-101a3cd7"]]);
export {
  Index as default
};
