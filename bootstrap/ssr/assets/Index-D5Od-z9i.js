import { ref, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, createTextVNode, Fragment, renderList, withModifiers, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderAttr } from "vue/server-renderer";
import { useForm, Head } from "@inertiajs/vue3";
import { A as AdminLayout } from "./AdminLayout-DZUdEQLU.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const showModal = ref(false);
    const showDeleteModal = ref(false);
    const isEditing = ref(false);
    const selectedCategory = ref(null);
    const categoryForm = useForm({
      name: "",
      slug: "",
      description: "",
      meta_title: "",
      meta_description: ""
    });
    const deleteForm = useForm({});
    const openAddModal = () => {
      isEditing.value = false;
      categoryForm.reset();
      categoryForm.clearErrors();
      showModal.value = true;
    };
    const openEditModal = (category) => {
      isEditing.value = true;
      selectedCategory.value = category;
      categoryForm.name = category.name;
      categoryForm.slug = category.slug;
      categoryForm.description = category.description || "";
      categoryForm.meta_title = category.meta_title || "";
      categoryForm.meta_description = category.meta_description || "";
      categoryForm.clearErrors();
      showModal.value = true;
    };
    const closeModal = () => {
      showModal.value = false;
      selectedCategory.value = null;
      categoryForm.reset();
      categoryForm.clearErrors();
    };
    const submitCategory = () => {
      if (isEditing.value) {
        categoryForm.put(route("admin.categories.update", selectedCategory.value.id), {
          onSuccess: () => {
            closeModal();
          }
        });
      } else {
        categoryForm.post(route("admin.categories.store"), {
          onSuccess: () => {
            closeModal();
          }
        });
      }
    };
    const confirmDelete = (category) => {
      selectedCategory.value = category;
      showDeleteModal.value = true;
    };
    const closeDeleteModal = () => {
      showDeleteModal.value = false;
      selectedCategory.value = null;
    };
    const deleteCategory = () => {
      deleteForm.delete(route("admin.categories.destroy", selectedCategory.value.id), {
        onSuccess: () => {
          closeDeleteModal();
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AdminLayout, mergeProps({
        "page-title": "Categories Management",
        "page-subtitle": "Manage blog categories and their SEO settings"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Categories - Admin Dashboard" }, null, _parent2, _scopeId));
            if (_ctx.$page.props.flash?.success) {
              _push2(`<div class="mb-6 bg-green-50 border border-green-200 rounded-lg p-4" data-v-3f9e8b15${_scopeId}><div class="flex" data-v-3f9e8b15${_scopeId}><svg class="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3f9e8b15${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-3f9e8b15${_scopeId}></path></svg><p class="ml-3 text-sm text-green-800" data-v-3f9e8b15${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.success)}</p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.flash?.error) {
              _push2(`<div class="mb-6 bg-red-50 border border-red-200 rounded-lg p-4" data-v-3f9e8b15${_scopeId}><div class="flex" data-v-3f9e8b15${_scopeId}><svg class="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3f9e8b15${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-3f9e8b15${_scopeId}></path></svg><p class="ml-3 text-sm text-red-800" data-v-3f9e8b15${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.error)}</p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" data-v-3f9e8b15${_scopeId}><div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between" data-v-3f9e8b15${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-3f9e8b15${_scopeId}>Blog Categories</h2><button class="bg-brand-red text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center" data-v-3f9e8b15${_scopeId}><svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3f9e8b15${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" data-v-3f9e8b15${_scopeId}></path></svg> Add New Category </button></div><div class="overflow-x-auto" data-v-3f9e8b15${_scopeId}><table class="min-w-full divide-y divide-gray-200" data-v-3f9e8b15${_scopeId}><thead class="bg-gray-50" data-v-3f9e8b15${_scopeId}><tr data-v-3f9e8b15${_scopeId}><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-3f9e8b15${_scopeId}>Category</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-3f9e8b15${_scopeId}>Slug</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-3f9e8b15${_scopeId}>Blogs</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-3f9e8b15${_scopeId}>Created</th><th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-3f9e8b15${_scopeId}>Actions</th></tr></thead><tbody class="bg-white divide-y divide-gray-200" data-v-3f9e8b15${_scopeId}><!--[-->`);
            ssrRenderList(__props.categories, (category) => {
              _push2(`<tr class="hover:bg-gray-50" data-v-3f9e8b15${_scopeId}><td class="px-6 py-4 whitespace-nowrap" data-v-3f9e8b15${_scopeId}><div class="flex items-center" data-v-3f9e8b15${_scopeId}><div class="h-10 w-10 bg-brand-red rounded-full flex items-center justify-center" data-v-3f9e8b15${_scopeId}><svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3f9e8b15${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" data-v-3f9e8b15${_scopeId}></path></svg></div><div class="ml-4" data-v-3f9e8b15${_scopeId}><div class="text-sm font-medium text-gray-900" data-v-3f9e8b15${_scopeId}>${ssrInterpolate(category.name)}</div>`);
              if (category.description) {
                _push2(`<div class="text-xs text-gray-500" data-v-3f9e8b15${_scopeId}>${ssrInterpolate(category.description.substring(0, 50))}${ssrInterpolate(category.description.length > 50 ? "..." : "")}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></td><td class="px-6 py-4 whitespace-nowrap" data-v-3f9e8b15${_scopeId}><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800" data-v-3f9e8b15${_scopeId}>${ssrInterpolate(category.slug)}</span></td><td class="px-6 py-4 whitespace-nowrap" data-v-3f9e8b15${_scopeId}><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800" data-v-3f9e8b15${_scopeId}>${ssrInterpolate(category.blogs_count)} posts </span></td><td class="px-6 py-4 whitespace-nowrap" data-v-3f9e8b15${_scopeId}><div class="text-sm text-gray-900" data-v-3f9e8b15${_scopeId}>${ssrInterpolate(category.created_at)}</div><div class="text-xs text-gray-500" data-v-3f9e8b15${_scopeId}>${ssrInterpolate(category.created_at_human)}</div></td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium" data-v-3f9e8b15${_scopeId}><div class="flex items-center justify-end space-x-2" data-v-3f9e8b15${_scopeId}><button class="text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md transition-colors duration-200" data-v-3f9e8b15${_scopeId}> Edit </button><button${ssrIncludeBooleanAttr(category.blogs_count > 0) ? " disabled" : ""} class="${ssrRenderClass([{ "opacity-50 cursor-not-allowed": category.blogs_count > 0 }, "text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition-colors duration-200"])}" data-v-3f9e8b15${_scopeId}> Delete </button></div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table>`);
            if (!__props.categories || __props.categories.length === 0) {
              _push2(`<div class="text-center py-12" data-v-3f9e8b15${_scopeId}><svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3f9e8b15${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" data-v-3f9e8b15${_scopeId}></path></svg><h3 class="mt-4 text-lg font-medium text-gray-900" data-v-3f9e8b15${_scopeId}>No categories found</h3><p class="mt-2 text-gray-600" data-v-3f9e8b15${_scopeId}>Get started by creating your first blog category.</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
            if (showModal.value) {
              _push2(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-v-3f9e8b15${_scopeId}><div class="bg-white rounded-lg p-6 w-full max-w-2xl mx-4 max-h-screen overflow-y-auto" data-v-3f9e8b15${_scopeId}><h3 class="text-lg font-semibold text-gray-900 mb-4" data-v-3f9e8b15${_scopeId}>${ssrInterpolate(isEditing.value ? "Edit Category" : "Add New Category")}</h3><form data-v-3f9e8b15${_scopeId}><div class="space-y-4" data-v-3f9e8b15${_scopeId}><div data-v-3f9e8b15${_scopeId}><label for="name" class="block text-sm font-medium text-gray-700 mb-1" data-v-3f9e8b15${_scopeId}>Name</label><input id="name"${ssrRenderAttr("value", unref(categoryForm).name)} type="text" class="${ssrRenderClass([{ "border-red-500": unref(categoryForm).errors.name }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"])}" required data-v-3f9e8b15${_scopeId}>`);
              if (unref(categoryForm).errors.name) {
                _push2(`<div class="text-red-600 text-sm mt-1" data-v-3f9e8b15${_scopeId}>${ssrInterpolate(unref(categoryForm).errors.name)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-3f9e8b15${_scopeId}><label for="slug" class="block text-sm font-medium text-gray-700 mb-1" data-v-3f9e8b15${_scopeId}>Slug (URL-friendly name)</label><input id="slug"${ssrRenderAttr("value", unref(categoryForm).slug)} type="text" class="${ssrRenderClass([{ "border-red-500": unref(categoryForm).errors.slug }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"])}" placeholder="Leave empty to auto-generate from name" data-v-3f9e8b15${_scopeId}>`);
              if (unref(categoryForm).errors.slug) {
                _push2(`<div class="text-red-600 text-sm mt-1" data-v-3f9e8b15${_scopeId}>${ssrInterpolate(unref(categoryForm).errors.slug)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-3f9e8b15${_scopeId}><label for="description" class="block text-sm font-medium text-gray-700 mb-1" data-v-3f9e8b15${_scopeId}>Description</label><textarea id="description" rows="3" class="${ssrRenderClass([{ "border-red-500": unref(categoryForm).errors.description }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"])}" data-v-3f9e8b15${_scopeId}>${ssrInterpolate(unref(categoryForm).description)}</textarea>`);
              if (unref(categoryForm).errors.description) {
                _push2(`<div class="text-red-600 text-sm mt-1" data-v-3f9e8b15${_scopeId}>${ssrInterpolate(unref(categoryForm).errors.description)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="border-t pt-4" data-v-3f9e8b15${_scopeId}><h4 class="text-md font-medium text-gray-900 mb-3" data-v-3f9e8b15${_scopeId}>SEO Settings</h4><div class="mb-4" data-v-3f9e8b15${_scopeId}><label for="meta_title" class="block text-sm font-medium text-gray-700 mb-1" data-v-3f9e8b15${_scopeId}>Meta Title</label><input id="meta_title"${ssrRenderAttr("value", unref(categoryForm).meta_title)} type="text" class="${ssrRenderClass([{ "border-red-500": unref(categoryForm).errors.meta_title }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"])}" placeholder="SEO title for search engines" data-v-3f9e8b15${_scopeId}>`);
              if (unref(categoryForm).errors.meta_title) {
                _push2(`<div class="text-red-600 text-sm mt-1" data-v-3f9e8b15${_scopeId}>${ssrInterpolate(unref(categoryForm).errors.meta_title)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-3f9e8b15${_scopeId}><label for="meta_description" class="block text-sm font-medium text-gray-700 mb-1" data-v-3f9e8b15${_scopeId}>Meta Description</label><textarea id="meta_description" rows="2" class="${ssrRenderClass([{ "border-red-500": unref(categoryForm).errors.meta_description }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"])}" placeholder="SEO description for search engines (150-160 characters)" data-v-3f9e8b15${_scopeId}>${ssrInterpolate(unref(categoryForm).meta_description)}</textarea>`);
              if (unref(categoryForm).errors.meta_description) {
                _push2(`<div class="text-red-600 text-sm mt-1" data-v-3f9e8b15${_scopeId}>${ssrInterpolate(unref(categoryForm).errors.meta_description)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div><div class="flex items-center justify-end space-x-3 mt-6" data-v-3f9e8b15${_scopeId}><button type="button" class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200" data-v-3f9e8b15${_scopeId}> Cancel </button><button type="submit"${ssrIncludeBooleanAttr(unref(categoryForm).processing) ? " disabled" : ""} class="px-4 py-2 text-sm font-medium text-white bg-brand-red hover:bg-red-600 rounded-md transition-colors duration-200 disabled:opacity-50" data-v-3f9e8b15${_scopeId}>${ssrInterpolate(unref(categoryForm).processing ? "Saving..." : isEditing.value ? "Update Category" : "Create Category")}</button></div></form></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (showDeleteModal.value) {
              _push2(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-v-3f9e8b15${_scopeId}><div class="bg-white rounded-lg p-6 w-full max-w-md mx-4" data-v-3f9e8b15${_scopeId}><h3 class="text-lg font-semibold text-gray-900 mb-4" data-v-3f9e8b15${_scopeId}>Delete Category</h3><p class="text-gray-600 mb-6" data-v-3f9e8b15${_scopeId}> Are you sure you want to delete <strong data-v-3f9e8b15${_scopeId}>${ssrInterpolate(selectedCategory.value?.name)}</strong>? This action cannot be undone. </p><div class="flex items-center justify-end space-x-3" data-v-3f9e8b15${_scopeId}><button type="button" class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200" data-v-3f9e8b15${_scopeId}> Cancel </button><button${ssrIncludeBooleanAttr(unref(deleteForm).processing) ? " disabled" : ""} class="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200 disabled:opacity-50" data-v-3f9e8b15${_scopeId}>${ssrInterpolate(unref(deleteForm).processing ? "Deleting..." : "Delete Category")}</button></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(Head), { title: "Categories - Admin Dashboard" }),
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
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Blog Categories"),
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
                    createTextVNode(" Add New Category ")
                  ])
                ]),
                createVNode("div", { class: "overflow-x-auto" }, [
                  createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                    createVNode("thead", { class: "bg-gray-50" }, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Category"),
                        createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Slug"),
                        createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Blogs"),
                        createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Created"),
                        createVNode("th", { class: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Actions")
                      ])
                    ]),
                    createVNode("tbody", { class: "bg-white divide-y divide-gray-200" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                        return openBlock(), createBlock("tr", {
                          key: category.id,
                          class: "hover:bg-gray-50"
                        }, [
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode("div", { class: "h-10 w-10 bg-brand-red rounded-full flex items-center justify-center" }, [
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
                                createVNode("div", { class: "text-sm font-medium text-gray-900" }, toDisplayString(category.name), 1),
                                category.description ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "text-xs text-gray-500"
                                }, toDisplayString(category.description.substring(0, 50)) + toDisplayString(category.description.length > 50 ? "..." : ""), 1)) : createCommentVNode("", true)
                              ])
                            ])
                          ]),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                            createVNode("span", { class: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800" }, toDisplayString(category.slug), 1)
                          ]),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                            createVNode("span", { class: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800" }, toDisplayString(category.blogs_count) + " posts ", 1)
                          ]),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                            createVNode("div", { class: "text-sm text-gray-900" }, toDisplayString(category.created_at), 1),
                            createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(category.created_at_human), 1)
                          ]),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium" }, [
                            createVNode("div", { class: "flex items-center justify-end space-x-2" }, [
                              createVNode("button", {
                                onClick: ($event) => openEditModal(category),
                                class: "text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md transition-colors duration-200"
                              }, " Edit ", 8, ["onClick"]),
                              createVNode("button", {
                                onClick: ($event) => confirmDelete(category),
                                class: ["text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition-colors duration-200", { "opacity-50 cursor-not-allowed": category.blogs_count > 0 }],
                                disabled: category.blogs_count > 0
                              }, " Delete ", 10, ["onClick", "disabled"])
                            ])
                          ])
                        ]);
                      }), 128))
                    ])
                  ]),
                  !__props.categories || __props.categories.length === 0 ? (openBlock(), createBlock("div", {
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
                    createVNode("h3", { class: "mt-4 text-lg font-medium text-gray-900" }, "No categories found"),
                    createVNode("p", { class: "mt-2 text-gray-600" }, "Get started by creating your first blog category.")
                  ])) : createCommentVNode("", true)
                ])
              ]),
              showModal.value ? (openBlock(), createBlock("div", {
                key: 2,
                class: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                onClick: withModifiers(closeModal, ["self"])
              }, [
                createVNode("div", { class: "bg-white rounded-lg p-6 w-full max-w-2xl mx-4 max-h-screen overflow-y-auto" }, [
                  createVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-4" }, toDisplayString(isEditing.value ? "Edit Category" : "Add New Category"), 1),
                  createVNode("form", {
                    onSubmit: withModifiers(submitCategory, ["prevent"])
                  }, [
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "name",
                          class: "block text-sm font-medium text-gray-700 mb-1"
                        }, "Name"),
                        withDirectives(createVNode("input", {
                          id: "name",
                          "onUpdate:modelValue": ($event) => unref(categoryForm).name = $event,
                          type: "text",
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent", { "border-red-500": unref(categoryForm).errors.name }],
                          required: ""
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(categoryForm).name]
                        ]),
                        unref(categoryForm).errors.name ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-red-600 text-sm mt-1"
                        }, toDisplayString(unref(categoryForm).errors.name), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "slug",
                          class: "block text-sm font-medium text-gray-700 mb-1"
                        }, "Slug (URL-friendly name)"),
                        withDirectives(createVNode("input", {
                          id: "slug",
                          "onUpdate:modelValue": ($event) => unref(categoryForm).slug = $event,
                          type: "text",
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent", { "border-red-500": unref(categoryForm).errors.slug }],
                          placeholder: "Leave empty to auto-generate from name"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(categoryForm).slug]
                        ]),
                        unref(categoryForm).errors.slug ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-red-600 text-sm mt-1"
                        }, toDisplayString(unref(categoryForm).errors.slug), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "description",
                          class: "block text-sm font-medium text-gray-700 mb-1"
                        }, "Description"),
                        withDirectives(createVNode("textarea", {
                          id: "description",
                          "onUpdate:modelValue": ($event) => unref(categoryForm).description = $event,
                          rows: "3",
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent", { "border-red-500": unref(categoryForm).errors.description }]
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(categoryForm).description]
                        ]),
                        unref(categoryForm).errors.description ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-red-600 text-sm mt-1"
                        }, toDisplayString(unref(categoryForm).errors.description), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "border-t pt-4" }, [
                        createVNode("h4", { class: "text-md font-medium text-gray-900 mb-3" }, "SEO Settings"),
                        createVNode("div", { class: "mb-4" }, [
                          createVNode("label", {
                            for: "meta_title",
                            class: "block text-sm font-medium text-gray-700 mb-1"
                          }, "Meta Title"),
                          withDirectives(createVNode("input", {
                            id: "meta_title",
                            "onUpdate:modelValue": ($event) => unref(categoryForm).meta_title = $event,
                            type: "text",
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent", { "border-red-500": unref(categoryForm).errors.meta_title }],
                            placeholder: "SEO title for search engines"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, unref(categoryForm).meta_title]
                          ]),
                          unref(categoryForm).errors.meta_title ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-red-600 text-sm mt-1"
                          }, toDisplayString(unref(categoryForm).errors.meta_title), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "meta_description",
                            class: "block text-sm font-medium text-gray-700 mb-1"
                          }, "Meta Description"),
                          withDirectives(createVNode("textarea", {
                            id: "meta_description",
                            "onUpdate:modelValue": ($event) => unref(categoryForm).meta_description = $event,
                            rows: "2",
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent", { "border-red-500": unref(categoryForm).errors.meta_description }],
                            placeholder: "SEO description for search engines (150-160 characters)"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, unref(categoryForm).meta_description]
                          ]),
                          unref(categoryForm).errors.meta_description ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-red-600 text-sm mt-1"
                          }, toDisplayString(unref(categoryForm).errors.meta_description), 1)) : createCommentVNode("", true)
                        ])
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
                        disabled: unref(categoryForm).processing,
                        class: "px-4 py-2 text-sm font-medium text-white bg-brand-red hover:bg-red-600 rounded-md transition-colors duration-200 disabled:opacity-50"
                      }, toDisplayString(unref(categoryForm).processing ? "Saving..." : isEditing.value ? "Update Category" : "Create Category"), 9, ["disabled"])
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
                  createVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-4" }, "Delete Category"),
                  createVNode("p", { class: "text-gray-600 mb-6" }, [
                    createTextVNode(" Are you sure you want to delete "),
                    createVNode("strong", null, toDisplayString(selectedCategory.value?.name), 1),
                    createTextVNode("? This action cannot be undone. ")
                  ]),
                  createVNode("div", { class: "flex items-center justify-end space-x-3" }, [
                    createVNode("button", {
                      type: "button",
                      onClick: closeDeleteModal,
                      class: "px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
                    }, " Cancel "),
                    createVNode("button", {
                      onClick: deleteCategory,
                      disabled: unref(deleteForm).processing,
                      class: "px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200 disabled:opacity-50"
                    }, toDisplayString(unref(deleteForm).processing ? "Deleting..." : "Delete Category"), 9, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Categories/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3f9e8b15"]]);
export {
  Index as default
};
