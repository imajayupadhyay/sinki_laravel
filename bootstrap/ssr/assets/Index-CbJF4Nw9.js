import { ref, computed, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, withModifiers, withDirectives, vModelText, createTextVNode, Fragment, renderList, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderClass, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { useForm, Head, router } from "@inertiajs/vue3";
import { A as AdminLayout } from "./AdminLayout-DZUdEQLU.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    footerContent: Object,
    footerLinks: Object
  },
  setup(__props) {
    const props = __props;
    const contentForm = useForm({
      logo_url: props.footerContent?.logo_url || "",
      description: props.footerContent?.description || "",
      copyright_text: props.footerContent?.copyright_text || ""
    });
    const showLinkModal = ref(false);
    const showDeleteModal = ref(false);
    const isEditingLink = ref(false);
    const linkToDelete = ref(null);
    const editingLinkId = ref(null);
    const sections = [
      { key: "quick_links", name: "Quick Links" },
      { key: "services", name: "Services" },
      { key: "bottom_links", name: "Bottom Links" }
    ];
    const activeSection = ref("quick_links");
    const linkForm = useForm({
      name: "",
      url: "",
      section: "",
      order: 0
    });
    const currentSectionLinks = computed(() => {
      return props.footerLinks?.[activeSection.value] || [];
    });
    const updateContent = () => {
      contentForm.put(route("admin.footer.content.update"));
    };
    const openAddLinkModal = () => {
      isEditingLink.value = false;
      linkForm.reset();
      linkForm.section = activeSection.value;
      showLinkModal.value = true;
    };
    const openEditLinkModal = (link) => {
      isEditingLink.value = true;
      editingLinkId.value = link.id;
      linkForm.name = link.name;
      linkForm.url = link.url;
      linkForm.section = link.section;
      linkForm.order = link.order;
      showLinkModal.value = true;
    };
    const closeLinkModal = () => {
      showLinkModal.value = false;
      linkForm.reset();
      isEditingLink.value = false;
      editingLinkId.value = null;
    };
    const submitLink = () => {
      if (isEditingLink.value) {
        linkForm.put(route("admin.footer.links.update", editingLinkId.value), {
          onSuccess: () => {
            closeLinkModal();
          }
        });
      } else {
        linkForm.post(route("admin.footer.links.store"), {
          onSuccess: () => {
            closeLinkModal();
          }
        });
      }
    };
    const confirmDeleteLink = (link) => {
      linkToDelete.value = link;
      showDeleteModal.value = true;
    };
    const closeDeleteModal = () => {
      showDeleteModal.value = false;
      linkToDelete.value = null;
    };
    const deleteLink = () => {
      router.delete(route("admin.footer.links.destroy", linkToDelete.value.id), {
        onSuccess: () => {
          closeDeleteModal();
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AdminLayout, mergeProps({
        "page-title": "Footer Management",
        "page-subtitle": "Manage footer content, links and sections"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Footer - Admin Dashboard" }, null, _parent2, _scopeId));
            if (_ctx.$page.props.flash?.success) {
              _push2(`<div class="mb-6 bg-green-50 border border-green-200 rounded-lg p-4"${_scopeId}><div class="flex"${_scopeId}><svg class="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg><p class="ml-3 text-sm text-green-800"${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.success)}</p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.flash?.error) {
              _push2(`<div class="mb-6 bg-red-50 border border-red-200 rounded-lg p-4"${_scopeId}><div class="flex"${_scopeId}><svg class="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg><p class="ml-3 text-sm text-red-800"${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.error)}</p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6"${_scopeId}><div class="px-6 py-4 border-b border-gray-200"${_scopeId}><h2 class="text-lg font-semibold text-gray-900"${_scopeId}>Footer Content</h2></div><div class="p-6"${_scopeId}><form${_scopeId}><div class="grid grid-cols-1 gap-6"${_scopeId}><div${_scopeId}><label for="logo_url" class="block text-sm font-medium text-gray-700 mb-2"${_scopeId}>Logo URL</label><input id="logo_url"${ssrRenderAttr("value", unref(contentForm).logo_url)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent" placeholder="e.g., /images/sinkidarkmode.png"${_scopeId}></div><div${_scopeId}><label for="description" class="block text-sm font-medium text-gray-700 mb-2"${_scopeId}>Description</label><textarea id="description" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent" placeholder="Enter footer description" required${_scopeId}>${ssrInterpolate(unref(contentForm).description)}</textarea></div><div${_scopeId}><label for="copyright_text" class="block text-sm font-medium text-gray-700 mb-2"${_scopeId}>Copyright Text</label><input id="copyright_text"${ssrRenderAttr("value", unref(contentForm).copyright_text)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent" placeholder="e.g., All Rights Reserved." required${_scopeId}></div></div><div class="mt-6"${_scopeId}><button type="submit" class="bg-brand-red text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"${ssrIncludeBooleanAttr(unref(contentForm).processing) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(unref(contentForm).processing ? "Updating..." : "Update Content")}</button></div></form></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"${_scopeId}><div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between"${_scopeId}><h2 class="text-lg font-semibold text-gray-900"${_scopeId}>Footer Links</h2><button class="bg-brand-red text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center"${_scopeId}><svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"${_scopeId}></path></svg> Add New Link </button></div><div class="border-b border-gray-200"${_scopeId}><nav class="-mb-px flex"${_scopeId}><!--[-->`);
            ssrRenderList(sections, (section) => {
              _push2(`<button class="${ssrRenderClass([activeSection.value === section.key ? "text-brand-red border-brand-red" : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300", "py-2 px-6 text-sm font-medium border-b-2 transition-colors duration-200"])}"${_scopeId}>${ssrInterpolate(section.name)}</button>`);
            });
            _push2(`<!--]--></nav></div><div class="overflow-x-auto"${_scopeId}><table class="min-w-full divide-y divide-gray-200"${_scopeId}><thead class="bg-gray-50"${_scopeId}><tr${_scopeId}><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}>Order</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}>Name</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}>URL</th><th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}>Actions</th></tr></thead><tbody class="bg-white divide-y divide-gray-200"${_scopeId}><!--[-->`);
            ssrRenderList(currentSectionLinks.value, (link) => {
              _push2(`<tr class="hover:bg-gray-50"${_scopeId}><td class="px-6 py-4 whitespace-nowrap"${_scopeId}><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"${_scopeId}>${ssrInterpolate(link.order)}</span></td><td class="px-6 py-4 whitespace-nowrap"${_scopeId}><div class="text-sm font-medium text-gray-900"${_scopeId}>${ssrInterpolate(link.name)}</div></td><td class="px-6 py-4 whitespace-nowrap"${_scopeId}><div class="text-sm text-gray-900"${_scopeId}>${ssrInterpolate(link.url)}</div></td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"${_scopeId}><div class="flex items-center justify-end space-x-2"${_scopeId}><button class="text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md transition-colors duration-200"${_scopeId}> Edit </button><button class="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition-colors duration-200"${_scopeId}> Delete </button></div></td></tr>`);
            });
            _push2(`<!--]-->`);
            if (currentSectionLinks.value.length === 0) {
              _push2(`<tr${_scopeId}><td colspan="4" class="px-6 py-4 text-center text-gray-500"${_scopeId}> No links in this section yet. </td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div></div>`);
            if (showLinkModal.value) {
              _push2(`<div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"${_scopeId}><div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"${_scopeId}><div class="mt-3"${_scopeId}><h3 class="text-lg font-medium text-gray-900 mb-4"${_scopeId}>${ssrInterpolate(isEditingLink.value ? "Edit Link" : "Add New Link")}</h3><form${_scopeId}><div class="space-y-4"${_scopeId}><div${_scopeId}><label for="link_name" class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Name</label><input id="link_name"${ssrRenderAttr("value", unref(linkForm).name)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent" placeholder="Enter link name" required${_scopeId}></div><div${_scopeId}><label for="link_url" class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>URL</label><input id="link_url"${ssrRenderAttr("value", unref(linkForm).url)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent" placeholder="Enter URL" required${_scopeId}></div><div${_scopeId}><label for="link_section" class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Section</label><select id="link_section" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent" required${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(linkForm).section) ? ssrLooseContain(unref(linkForm).section, "") : ssrLooseEqual(unref(linkForm).section, "")) ? " selected" : ""}${_scopeId}>Select a section</option><!--[-->`);
              ssrRenderList(sections, (section) => {
                _push2(`<option${ssrRenderAttr("value", section.key)}${ssrIncludeBooleanAttr(Array.isArray(unref(linkForm).section) ? ssrLooseContain(unref(linkForm).section, section.key) : ssrLooseEqual(unref(linkForm).section, section.key)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(section.name)}</option>`);
              });
              _push2(`<!--]--></select></div><div${_scopeId}><label for="link_order" class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Order</label><input id="link_order"${ssrRenderAttr("value", unref(linkForm).order)} type="number" min="0" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent" placeholder="Enter order number" required${_scopeId}></div></div><div class="flex items-center justify-end space-x-3 mt-6"${_scopeId}><button type="button" class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"${_scopeId}> Cancel </button><button type="submit" class="px-4 py-2 text-sm font-medium text-white bg-brand-red hover:bg-red-600 rounded-lg transition-colors duration-200"${ssrIncludeBooleanAttr(unref(linkForm).processing) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(unref(linkForm).processing ? "Saving..." : isEditingLink.value ? "Update Link" : "Add Link")}</button></div></form></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (showDeleteModal.value) {
              _push2(`<div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"${_scopeId}><div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"${_scopeId}><div class="mt-3 text-center"${_scopeId}><div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100"${_scopeId}><svg class="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"${_scopeId}></path></svg></div><h3 class="text-lg font-medium text-gray-900 mt-3"${_scopeId}>Delete Link</h3><div class="mt-2 px-7 py-3"${_scopeId}><p class="text-sm text-gray-500"${_scopeId}> Are you sure you want to delete &quot;${ssrInterpolate(linkToDelete.value?.name)}&quot;? This action cannot be undone. </p></div><div class="items-center px-4 py-3"${_scopeId}><div class="flex justify-center space-x-3"${_scopeId}><button class="px-4 py-2 bg-gray-100 text-gray-800 text-base font-medium rounded-md shadow-sm hover:bg-gray-200 transition-colors duration-200"${_scopeId}> Cancel </button><button class="px-4 py-2 bg-red-600 text-white text-base font-medium rounded-md shadow-sm hover:bg-red-700 transition-colors duration-200"${_scopeId}> Delete </button></div></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(Head), { title: "Footer - Admin Dashboard" }),
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
              createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6" }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Footer Content")
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(updateContent, ["prevent"])
                  }, [
                    createVNode("div", { class: "grid grid-cols-1 gap-6" }, [
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "logo_url",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, "Logo URL"),
                        withDirectives(createVNode("input", {
                          id: "logo_url",
                          "onUpdate:modelValue": ($event) => unref(contentForm).logo_url = $event,
                          type: "text",
                          class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent",
                          placeholder: "e.g., /images/sinkidarkmode.png"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(contentForm).logo_url]
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "description",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, "Description"),
                        withDirectives(createVNode("textarea", {
                          id: "description",
                          "onUpdate:modelValue": ($event) => unref(contentForm).description = $event,
                          rows: "3",
                          class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent",
                          placeholder: "Enter footer description",
                          required: ""
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(contentForm).description]
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "copyright_text",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, "Copyright Text"),
                        withDirectives(createVNode("input", {
                          id: "copyright_text",
                          "onUpdate:modelValue": ($event) => unref(contentForm).copyright_text = $event,
                          type: "text",
                          class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent",
                          placeholder: "e.g., All Rights Reserved.",
                          required: ""
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(contentForm).copyright_text]
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode("button", {
                        type: "submit",
                        class: "bg-brand-red text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200",
                        disabled: unref(contentForm).processing
                      }, toDisplayString(unref(contentForm).processing ? "Updating..." : "Update Content"), 9, ["disabled"])
                    ])
                  ], 32)
                ])
              ]),
              createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200 flex items-center justify-between" }, [
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Footer Links"),
                  createVNode("button", {
                    onClick: openAddLinkModal,
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
                    createTextVNode(" Add New Link ")
                  ])
                ]),
                createVNode("div", { class: "border-b border-gray-200" }, [
                  createVNode("nav", { class: "-mb-px flex" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(sections, (section) => {
                      return createVNode("button", {
                        key: section.key,
                        onClick: ($event) => activeSection.value = section.key,
                        class: ["py-2 px-6 text-sm font-medium border-b-2 transition-colors duration-200", activeSection.value === section.key ? "text-brand-red border-brand-red" : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"]
                      }, toDisplayString(section.name), 11, ["onClick"]);
                    }), 64))
                  ])
                ]),
                createVNode("div", { class: "overflow-x-auto" }, [
                  createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                    createVNode("thead", { class: "bg-gray-50" }, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Order"),
                        createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Name"),
                        createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "URL"),
                        createVNode("th", { class: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Actions")
                      ])
                    ]),
                    createVNode("tbody", { class: "bg-white divide-y divide-gray-200" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(currentSectionLinks.value, (link) => {
                        return openBlock(), createBlock("tr", {
                          key: link.id,
                          class: "hover:bg-gray-50"
                        }, [
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                            createVNode("span", { class: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800" }, toDisplayString(link.order), 1)
                          ]),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                            createVNode("div", { class: "text-sm font-medium text-gray-900" }, toDisplayString(link.name), 1)
                          ]),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                            createVNode("div", { class: "text-sm text-gray-900" }, toDisplayString(link.url), 1)
                          ]),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium" }, [
                            createVNode("div", { class: "flex items-center justify-end space-x-2" }, [
                              createVNode("button", {
                                onClick: ($event) => openEditLinkModal(link),
                                class: "text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md transition-colors duration-200"
                              }, " Edit ", 8, ["onClick"]),
                              createVNode("button", {
                                onClick: ($event) => confirmDeleteLink(link),
                                class: "text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition-colors duration-200"
                              }, " Delete ", 8, ["onClick"])
                            ])
                          ])
                        ]);
                      }), 128)),
                      currentSectionLinks.value.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                        createVNode("td", {
                          colspan: "4",
                          class: "px-6 py-4 text-center text-gray-500"
                        }, " No links in this section yet. ")
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ]),
              showLinkModal.value ? (openBlock(), createBlock("div", {
                key: 2,
                class: "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50",
                onClick: closeLinkModal
              }, [
                createVNode("div", {
                  class: "relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white",
                  onClick: withModifiers(() => {
                  }, ["stop"])
                }, [
                  createVNode("div", { class: "mt-3" }, [
                    createVNode("h3", { class: "text-lg font-medium text-gray-900 mb-4" }, toDisplayString(isEditingLink.value ? "Edit Link" : "Add New Link"), 1),
                    createVNode("form", {
                      onSubmit: withModifiers(submitLink, ["prevent"])
                    }, [
                      createVNode("div", { class: "space-y-4" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "link_name",
                            class: "block text-sm font-medium text-gray-700 mb-1"
                          }, "Name"),
                          withDirectives(createVNode("input", {
                            id: "link_name",
                            "onUpdate:modelValue": ($event) => unref(linkForm).name = $event,
                            type: "text",
                            class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent",
                            placeholder: "Enter link name",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(linkForm).name]
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "link_url",
                            class: "block text-sm font-medium text-gray-700 mb-1"
                          }, "URL"),
                          withDirectives(createVNode("input", {
                            id: "link_url",
                            "onUpdate:modelValue": ($event) => unref(linkForm).url = $event,
                            type: "text",
                            class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent",
                            placeholder: "Enter URL",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(linkForm).url]
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "link_section",
                            class: "block text-sm font-medium text-gray-700 mb-1"
                          }, "Section"),
                          withDirectives(createVNode("select", {
                            id: "link_section",
                            "onUpdate:modelValue": ($event) => unref(linkForm).section = $event,
                            class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent",
                            required: ""
                          }, [
                            createVNode("option", { value: "" }, "Select a section"),
                            (openBlock(), createBlock(Fragment, null, renderList(sections, (section) => {
                              return createVNode("option", {
                                key: section.key,
                                value: section.key
                              }, toDisplayString(section.name), 9, ["value"]);
                            }), 64))
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(linkForm).section]
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "link_order",
                            class: "block text-sm font-medium text-gray-700 mb-1"
                          }, "Order"),
                          withDirectives(createVNode("input", {
                            id: "link_order",
                            "onUpdate:modelValue": ($event) => unref(linkForm).order = $event,
                            type: "number",
                            min: "0",
                            class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent",
                            placeholder: "Enter order number",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [
                              vModelText,
                              unref(linkForm).order,
                              void 0,
                              { number: true }
                            ]
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center justify-end space-x-3 mt-6" }, [
                        createVNode("button", {
                          type: "button",
                          onClick: closeLinkModal,
                          class: "px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                        }, " Cancel "),
                        createVNode("button", {
                          type: "submit",
                          class: "px-4 py-2 text-sm font-medium text-white bg-brand-red hover:bg-red-600 rounded-lg transition-colors duration-200",
                          disabled: unref(linkForm).processing
                        }, toDisplayString(unref(linkForm).processing ? "Saving..." : isEditingLink.value ? "Update Link" : "Add Link"), 9, ["disabled"])
                      ])
                    ], 32)
                  ])
                ], 8, ["onClick"])
              ])) : createCommentVNode("", true),
              showDeleteModal.value ? (openBlock(), createBlock("div", {
                key: 3,
                class: "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50",
                onClick: closeDeleteModal
              }, [
                createVNode("div", {
                  class: "relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white",
                  onClick: withModifiers(() => {
                  }, ["stop"])
                }, [
                  createVNode("div", { class: "mt-3 text-center" }, [
                    createVNode("div", { class: "mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100" }, [
                      (openBlock(), createBlock("svg", {
                        class: "h-6 w-6 text-red-600",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                        })
                      ]))
                    ]),
                    createVNode("h3", { class: "text-lg font-medium text-gray-900 mt-3" }, "Delete Link"),
                    createVNode("div", { class: "mt-2 px-7 py-3" }, [
                      createVNode("p", { class: "text-sm text-gray-500" }, ' Are you sure you want to delete "' + toDisplayString(linkToDelete.value?.name) + '"? This action cannot be undone. ', 1)
                    ]),
                    createVNode("div", { class: "items-center px-4 py-3" }, [
                      createVNode("div", { class: "flex justify-center space-x-3" }, [
                        createVNode("button", {
                          onClick: closeDeleteModal,
                          class: "px-4 py-2 bg-gray-100 text-gray-800 text-base font-medium rounded-md shadow-sm hover:bg-gray-200 transition-colors duration-200"
                        }, " Cancel "),
                        createVNode("button", {
                          onClick: deleteLink,
                          class: "px-4 py-2 bg-red-600 text-white text-base font-medium rounded-md shadow-sm hover:bg-red-700 transition-colors duration-200"
                        }, " Delete ")
                      ])
                    ])
                  ])
                ], 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Footer/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
