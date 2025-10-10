import { ref, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, createTextVNode, Fragment, renderList, withModifiers, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderAttr } from "vue/server-renderer";
import { useForm, Head } from "@inertiajs/vue3";
import { A as AdminLayout } from "./AdminLayout-CcF1p51h.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    users: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const showModal = ref(false);
    const showPasswordModal = ref(false);
    const showDeleteModal = ref(false);
    const isEditing = ref(false);
    const selectedUser = ref(null);
    const userForm = useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    });
    const passwordForm = useForm({
      password: "",
      password_confirmation: ""
    });
    const deleteForm = useForm({});
    const openAddModal = () => {
      isEditing.value = false;
      userForm.reset();
      userForm.clearErrors();
      showModal.value = true;
    };
    const openEditModal = (user) => {
      isEditing.value = true;
      selectedUser.value = user;
      userForm.name = user.name;
      userForm.email = user.email;
      userForm.password = "";
      userForm.password_confirmation = "";
      userForm.clearErrors();
      showModal.value = true;
    };
    const closeModal = () => {
      showModal.value = false;
      selectedUser.value = null;
      userForm.reset();
      userForm.clearErrors();
    };
    const submitUser = () => {
      if (isEditing.value) {
        userForm.put(route("admin.users.update", selectedUser.value.id), {
          onSuccess: () => {
            closeModal();
          }
        });
      } else {
        userForm.post(route("admin.users.store"), {
          onSuccess: () => {
            closeModal();
          }
        });
      }
    };
    const openPasswordModal = (user) => {
      selectedUser.value = user;
      passwordForm.reset();
      passwordForm.clearErrors();
      showPasswordModal.value = true;
    };
    const closePasswordModal = () => {
      showPasswordModal.value = false;
      selectedUser.value = null;
      passwordForm.reset();
      passwordForm.clearErrors();
    };
    const submitPasswordChange = () => {
      passwordForm.put(route("admin.users.password", selectedUser.value.id), {
        onSuccess: () => {
          closePasswordModal();
        }
      });
    };
    const confirmDelete = (user) => {
      selectedUser.value = user;
      showDeleteModal.value = true;
    };
    const closeDeleteModal = () => {
      showDeleteModal.value = false;
      selectedUser.value = null;
    };
    const deleteUser = () => {
      deleteForm.delete(route("admin.users.destroy", selectedUser.value.id), {
        onSuccess: () => {
          closeDeleteModal();
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AdminLayout, mergeProps({
        "page-title": "Users Management",
        "page-subtitle": "Manage admin users and permissions"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Users - Admin Dashboard" }, null, _parent2, _scopeId));
            if (_ctx.$page.props.flash?.success) {
              _push2(`<div class="mb-6 bg-green-50 border border-green-200 rounded-lg p-4" data-v-e344949a${_scopeId}><div class="flex" data-v-e344949a${_scopeId}><svg class="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e344949a${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-e344949a${_scopeId}></path></svg><p class="ml-3 text-sm text-green-800" data-v-e344949a${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.success)}</p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.flash?.error) {
              _push2(`<div class="mb-6 bg-red-50 border border-red-200 rounded-lg p-4" data-v-e344949a${_scopeId}><div class="flex" data-v-e344949a${_scopeId}><svg class="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e344949a${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-e344949a${_scopeId}></path></svg><p class="ml-3 text-sm text-red-800" data-v-e344949a${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.error)}</p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" data-v-e344949a${_scopeId}><div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between" data-v-e344949a${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-e344949a${_scopeId}>Admin Users</h2><button class="bg-brand-red text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center" data-v-e344949a${_scopeId}><svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e344949a${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" data-v-e344949a${_scopeId}></path></svg> Add New User </button></div><div class="overflow-x-auto" data-v-e344949a${_scopeId}><table class="min-w-full divide-y divide-gray-200" data-v-e344949a${_scopeId}><thead class="bg-gray-50" data-v-e344949a${_scopeId}><tr data-v-e344949a${_scopeId}><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-e344949a${_scopeId}>User</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-e344949a${_scopeId}>Email</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-e344949a${_scopeId}>Created</th><th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-e344949a${_scopeId}>Actions</th></tr></thead><tbody class="bg-white divide-y divide-gray-200" data-v-e344949a${_scopeId}><!--[-->`);
            ssrRenderList(__props.users, (user) => {
              _push2(`<tr class="hover:bg-gray-50" data-v-e344949a${_scopeId}><td class="px-6 py-4 whitespace-nowrap" data-v-e344949a${_scopeId}><div class="flex items-center" data-v-e344949a${_scopeId}><div class="h-10 w-10 bg-brand-red rounded-full flex items-center justify-center" data-v-e344949a${_scopeId}><span class="text-white text-sm font-semibold" data-v-e344949a${_scopeId}>${ssrInterpolate(user.name.charAt(0).toUpperCase())}</span></div><div class="ml-4" data-v-e344949a${_scopeId}><div class="text-sm font-medium text-gray-900" data-v-e344949a${_scopeId}>${ssrInterpolate(user.name)}</div></div></div></td><td class="px-6 py-4 whitespace-nowrap" data-v-e344949a${_scopeId}><div class="text-sm text-gray-900" data-v-e344949a${_scopeId}>${ssrInterpolate(user.email)}</div></td><td class="px-6 py-4 whitespace-nowrap" data-v-e344949a${_scopeId}><div class="text-sm text-gray-900" data-v-e344949a${_scopeId}>${ssrInterpolate(user.created_at)}</div><div class="text-xs text-gray-500" data-v-e344949a${_scopeId}>${ssrInterpolate(user.created_at_human)}</div></td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium" data-v-e344949a${_scopeId}><div class="flex items-center justify-end space-x-2" data-v-e344949a${_scopeId}><button class="text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md transition-colors duration-200" data-v-e344949a${_scopeId}> Edit </button><button class="text-yellow-600 hover:text-yellow-900 bg-yellow-50 hover:bg-yellow-100 px-3 py-1 rounded-md transition-colors duration-200" data-v-e344949a${_scopeId}> Password </button><button${ssrIncludeBooleanAttr(user.id === _ctx.$page.props.auth?.user?.id) ? " disabled" : ""} class="${ssrRenderClass([{ "opacity-50 cursor-not-allowed": user.id === _ctx.$page.props.auth?.user?.id }, "text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition-colors duration-200"])}" data-v-e344949a${_scopeId}> Delete </button></div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table>`);
            if (!__props.users || __props.users.length === 0) {
              _push2(`<div class="text-center py-12" data-v-e344949a${_scopeId}><svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e344949a${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" data-v-e344949a${_scopeId}></path></svg><h3 class="mt-4 text-lg font-medium text-gray-900" data-v-e344949a${_scopeId}>No users found</h3><p class="mt-2 text-gray-600" data-v-e344949a${_scopeId}>Get started by creating a new admin user.</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
            if (showModal.value) {
              _push2(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-v-e344949a${_scopeId}><div class="bg-white rounded-lg p-6 w-full max-w-md mx-4" data-v-e344949a${_scopeId}><h3 class="text-lg font-semibold text-gray-900 mb-4" data-v-e344949a${_scopeId}>${ssrInterpolate(isEditing.value ? "Edit User" : "Add New User")}</h3><form data-v-e344949a${_scopeId}><div class="space-y-4" data-v-e344949a${_scopeId}><div data-v-e344949a${_scopeId}><label for="name" class="block text-sm font-medium text-gray-700 mb-1" data-v-e344949a${_scopeId}>Name</label><input id="name"${ssrRenderAttr("value", unref(userForm).name)} type="text" class="${ssrRenderClass([{ "border-red-500": unref(userForm).errors.name }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"])}" required data-v-e344949a${_scopeId}>`);
              if (unref(userForm).errors.name) {
                _push2(`<div class="text-red-600 text-sm mt-1" data-v-e344949a${_scopeId}>${ssrInterpolate(unref(userForm).errors.name)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-e344949a${_scopeId}><label for="email" class="block text-sm font-medium text-gray-700 mb-1" data-v-e344949a${_scopeId}>Email</label><input id="email"${ssrRenderAttr("value", unref(userForm).email)} type="email" class="${ssrRenderClass([{ "border-red-500": unref(userForm).errors.email }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"])}" required data-v-e344949a${_scopeId}>`);
              if (unref(userForm).errors.email) {
                _push2(`<div class="text-red-600 text-sm mt-1" data-v-e344949a${_scopeId}>${ssrInterpolate(unref(userForm).errors.email)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (!isEditing.value) {
                _push2(`<div data-v-e344949a${_scopeId}><label for="password" class="block text-sm font-medium text-gray-700 mb-1" data-v-e344949a${_scopeId}>Password</label><input id="password"${ssrRenderAttr("value", unref(userForm).password)} type="password" class="${ssrRenderClass([{ "border-red-500": unref(userForm).errors.password }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"])}" required data-v-e344949a${_scopeId}>`);
                if (unref(userForm).errors.password) {
                  _push2(`<div class="text-red-600 text-sm mt-1" data-v-e344949a${_scopeId}>${ssrInterpolate(unref(userForm).errors.password)}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (!isEditing.value) {
                _push2(`<div data-v-e344949a${_scopeId}><label for="password_confirmation" class="block text-sm font-medium text-gray-700 mb-1" data-v-e344949a${_scopeId}>Confirm Password</label><input id="password_confirmation"${ssrRenderAttr("value", unref(userForm).password_confirmation)} type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent" required data-v-e344949a${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex items-center justify-end space-x-3 mt-6" data-v-e344949a${_scopeId}><button type="button" class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200" data-v-e344949a${_scopeId}> Cancel </button><button type="submit"${ssrIncludeBooleanAttr(unref(userForm).processing) ? " disabled" : ""} class="px-4 py-2 text-sm font-medium text-white bg-brand-red hover:bg-red-600 rounded-md transition-colors duration-200 disabled:opacity-50" data-v-e344949a${_scopeId}>${ssrInterpolate(unref(userForm).processing ? "Saving..." : isEditing.value ? "Update User" : "Create User")}</button></div></form></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (showPasswordModal.value) {
              _push2(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-v-e344949a${_scopeId}><div class="bg-white rounded-lg p-6 w-full max-w-md mx-4" data-v-e344949a${_scopeId}><h3 class="text-lg font-semibold text-gray-900 mb-4" data-v-e344949a${_scopeId}> Change Password for ${ssrInterpolate(selectedUser.value?.name)}</h3><form data-v-e344949a${_scopeId}><div class="space-y-4" data-v-e344949a${_scopeId}><div data-v-e344949a${_scopeId}><label for="new_password" class="block text-sm font-medium text-gray-700 mb-1" data-v-e344949a${_scopeId}>New Password</label><input id="new_password"${ssrRenderAttr("value", unref(passwordForm).password)} type="password" class="${ssrRenderClass([{ "border-red-500": unref(passwordForm).errors.password }, "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"])}" required data-v-e344949a${_scopeId}>`);
              if (unref(passwordForm).errors.password) {
                _push2(`<div class="text-red-600 text-sm mt-1" data-v-e344949a${_scopeId}>${ssrInterpolate(unref(passwordForm).errors.password)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-e344949a${_scopeId}><label for="new_password_confirmation" class="block text-sm font-medium text-gray-700 mb-1" data-v-e344949a${_scopeId}>Confirm New Password</label><input id="new_password_confirmation"${ssrRenderAttr("value", unref(passwordForm).password_confirmation)} type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent" required data-v-e344949a${_scopeId}></div></div><div class="flex items-center justify-end space-x-3 mt-6" data-v-e344949a${_scopeId}><button type="button" class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200" data-v-e344949a${_scopeId}> Cancel </button><button type="submit"${ssrIncludeBooleanAttr(unref(passwordForm).processing) ? " disabled" : ""} class="px-4 py-2 text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 rounded-md transition-colors duration-200 disabled:opacity-50" data-v-e344949a${_scopeId}>${ssrInterpolate(unref(passwordForm).processing ? "Updating..." : "Update Password")}</button></div></form></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (showDeleteModal.value) {
              _push2(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-v-e344949a${_scopeId}><div class="bg-white rounded-lg p-6 w-full max-w-md mx-4" data-v-e344949a${_scopeId}><h3 class="text-lg font-semibold text-gray-900 mb-4" data-v-e344949a${_scopeId}>Delete User</h3><p class="text-gray-600 mb-6" data-v-e344949a${_scopeId}> Are you sure you want to delete <strong data-v-e344949a${_scopeId}>${ssrInterpolate(selectedUser.value?.name)}</strong>? This action cannot be undone. </p><div class="flex items-center justify-end space-x-3" data-v-e344949a${_scopeId}><button type="button" class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200" data-v-e344949a${_scopeId}> Cancel </button><button${ssrIncludeBooleanAttr(unref(deleteForm).processing) ? " disabled" : ""} class="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200 disabled:opacity-50" data-v-e344949a${_scopeId}>${ssrInterpolate(unref(deleteForm).processing ? "Deleting..." : "Delete User")}</button></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(Head), { title: "Users - Admin Dashboard" }),
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
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Admin Users"),
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
                    createTextVNode(" Add New User ")
                  ])
                ]),
                createVNode("div", { class: "overflow-x-auto" }, [
                  createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                    createVNode("thead", { class: "bg-gray-50" }, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "User"),
                        createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Email"),
                        createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Created"),
                        createVNode("th", { class: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Actions")
                      ])
                    ]),
                    createVNode("tbody", { class: "bg-white divide-y divide-gray-200" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.users, (user) => {
                        return openBlock(), createBlock("tr", {
                          key: user.id,
                          class: "hover:bg-gray-50"
                        }, [
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode("div", { class: "h-10 w-10 bg-brand-red rounded-full flex items-center justify-center" }, [
                                createVNode("span", { class: "text-white text-sm font-semibold" }, toDisplayString(user.name.charAt(0).toUpperCase()), 1)
                              ]),
                              createVNode("div", { class: "ml-4" }, [
                                createVNode("div", { class: "text-sm font-medium text-gray-900" }, toDisplayString(user.name), 1)
                              ])
                            ])
                          ]),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                            createVNode("div", { class: "text-sm text-gray-900" }, toDisplayString(user.email), 1)
                          ]),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                            createVNode("div", { class: "text-sm text-gray-900" }, toDisplayString(user.created_at), 1),
                            createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(user.created_at_human), 1)
                          ]),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium" }, [
                            createVNode("div", { class: "flex items-center justify-end space-x-2" }, [
                              createVNode("button", {
                                onClick: ($event) => openEditModal(user),
                                class: "text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md transition-colors duration-200"
                              }, " Edit ", 8, ["onClick"]),
                              createVNode("button", {
                                onClick: ($event) => openPasswordModal(user),
                                class: "text-yellow-600 hover:text-yellow-900 bg-yellow-50 hover:bg-yellow-100 px-3 py-1 rounded-md transition-colors duration-200"
                              }, " Password ", 8, ["onClick"]),
                              createVNode("button", {
                                onClick: ($event) => confirmDelete(user),
                                class: ["text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition-colors duration-200", { "opacity-50 cursor-not-allowed": user.id === _ctx.$page.props.auth?.user?.id }],
                                disabled: user.id === _ctx.$page.props.auth?.user?.id
                              }, " Delete ", 10, ["onClick", "disabled"])
                            ])
                          ])
                        ]);
                      }), 128))
                    ])
                  ]),
                  !__props.users || __props.users.length === 0 ? (openBlock(), createBlock("div", {
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
                        d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                      })
                    ])),
                    createVNode("h3", { class: "mt-4 text-lg font-medium text-gray-900" }, "No users found"),
                    createVNode("p", { class: "mt-2 text-gray-600" }, "Get started by creating a new admin user.")
                  ])) : createCommentVNode("", true)
                ])
              ]),
              showModal.value ? (openBlock(), createBlock("div", {
                key: 2,
                class: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                onClick: withModifiers(closeModal, ["self"])
              }, [
                createVNode("div", { class: "bg-white rounded-lg p-6 w-full max-w-md mx-4" }, [
                  createVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-4" }, toDisplayString(isEditing.value ? "Edit User" : "Add New User"), 1),
                  createVNode("form", {
                    onSubmit: withModifiers(submitUser, ["prevent"])
                  }, [
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "name",
                          class: "block text-sm font-medium text-gray-700 mb-1"
                        }, "Name"),
                        withDirectives(createVNode("input", {
                          id: "name",
                          "onUpdate:modelValue": ($event) => unref(userForm).name = $event,
                          type: "text",
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent", { "border-red-500": unref(userForm).errors.name }],
                          required: ""
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(userForm).name]
                        ]),
                        unref(userForm).errors.name ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-red-600 text-sm mt-1"
                        }, toDisplayString(unref(userForm).errors.name), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "email",
                          class: "block text-sm font-medium text-gray-700 mb-1"
                        }, "Email"),
                        withDirectives(createVNode("input", {
                          id: "email",
                          "onUpdate:modelValue": ($event) => unref(userForm).email = $event,
                          type: "email",
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent", { "border-red-500": unref(userForm).errors.email }],
                          required: ""
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(userForm).email]
                        ]),
                        unref(userForm).errors.email ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-red-600 text-sm mt-1"
                        }, toDisplayString(unref(userForm).errors.email), 1)) : createCommentVNode("", true)
                      ]),
                      !isEditing.value ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode("label", {
                          for: "password",
                          class: "block text-sm font-medium text-gray-700 mb-1"
                        }, "Password"),
                        withDirectives(createVNode("input", {
                          id: "password",
                          "onUpdate:modelValue": ($event) => unref(userForm).password = $event,
                          type: "password",
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent", { "border-red-500": unref(userForm).errors.password }],
                          required: ""
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(userForm).password]
                        ]),
                        unref(userForm).errors.password ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-red-600 text-sm mt-1"
                        }, toDisplayString(unref(userForm).errors.password), 1)) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true),
                      !isEditing.value ? (openBlock(), createBlock("div", { key: 1 }, [
                        createVNode("label", {
                          for: "password_confirmation",
                          class: "block text-sm font-medium text-gray-700 mb-1"
                        }, "Confirm Password"),
                        withDirectives(createVNode("input", {
                          id: "password_confirmation",
                          "onUpdate:modelValue": ($event) => unref(userForm).password_confirmation = $event,
                          type: "password",
                          class: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent",
                          required: ""
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(userForm).password_confirmation]
                        ])
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "flex items-center justify-end space-x-3 mt-6" }, [
                      createVNode("button", {
                        type: "button",
                        onClick: closeModal,
                        class: "px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
                      }, " Cancel "),
                      createVNode("button", {
                        type: "submit",
                        disabled: unref(userForm).processing,
                        class: "px-4 py-2 text-sm font-medium text-white bg-brand-red hover:bg-red-600 rounded-md transition-colors duration-200 disabled:opacity-50"
                      }, toDisplayString(unref(userForm).processing ? "Saving..." : isEditing.value ? "Update User" : "Create User"), 9, ["disabled"])
                    ])
                  ], 32)
                ])
              ])) : createCommentVNode("", true),
              showPasswordModal.value ? (openBlock(), createBlock("div", {
                key: 3,
                class: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                onClick: withModifiers(closePasswordModal, ["self"])
              }, [
                createVNode("div", { class: "bg-white rounded-lg p-6 w-full max-w-md mx-4" }, [
                  createVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-4" }, " Change Password for " + toDisplayString(selectedUser.value?.name), 1),
                  createVNode("form", {
                    onSubmit: withModifiers(submitPasswordChange, ["prevent"])
                  }, [
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "new_password",
                          class: "block text-sm font-medium text-gray-700 mb-1"
                        }, "New Password"),
                        withDirectives(createVNode("input", {
                          id: "new_password",
                          "onUpdate:modelValue": ($event) => unref(passwordForm).password = $event,
                          type: "password",
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent", { "border-red-500": unref(passwordForm).errors.password }],
                          required: ""
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, unref(passwordForm).password]
                        ]),
                        unref(passwordForm).errors.password ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-red-600 text-sm mt-1"
                        }, toDisplayString(unref(passwordForm).errors.password), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "new_password_confirmation",
                          class: "block text-sm font-medium text-gray-700 mb-1"
                        }, "Confirm New Password"),
                        withDirectives(createVNode("input", {
                          id: "new_password_confirmation",
                          "onUpdate:modelValue": ($event) => unref(passwordForm).password_confirmation = $event,
                          type: "password",
                          class: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent",
                          required: ""
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(passwordForm).password_confirmation]
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex items-center justify-end space-x-3 mt-6" }, [
                      createVNode("button", {
                        type: "button",
                        onClick: closePasswordModal,
                        class: "px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
                      }, " Cancel "),
                      createVNode("button", {
                        type: "submit",
                        disabled: unref(passwordForm).processing,
                        class: "px-4 py-2 text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 rounded-md transition-colors duration-200 disabled:opacity-50"
                      }, toDisplayString(unref(passwordForm).processing ? "Updating..." : "Update Password"), 9, ["disabled"])
                    ])
                  ], 32)
                ])
              ])) : createCommentVNode("", true),
              showDeleteModal.value ? (openBlock(), createBlock("div", {
                key: 4,
                class: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                onClick: withModifiers(closeDeleteModal, ["self"])
              }, [
                createVNode("div", { class: "bg-white rounded-lg p-6 w-full max-w-md mx-4" }, [
                  createVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-4" }, "Delete User"),
                  createVNode("p", { class: "text-gray-600 mb-6" }, [
                    createTextVNode(" Are you sure you want to delete "),
                    createVNode("strong", null, toDisplayString(selectedUser.value?.name), 1),
                    createTextVNode("? This action cannot be undone. ")
                  ]),
                  createVNode("div", { class: "flex items-center justify-end space-x-3" }, [
                    createVNode("button", {
                      type: "button",
                      onClick: closeDeleteModal,
                      class: "px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
                    }, " Cancel "),
                    createVNode("button", {
                      onClick: deleteUser,
                      disabled: unref(deleteForm).processing,
                      class: "px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200 disabled:opacity-50"
                    }, toDisplayString(unref(deleteForm).processing ? "Deleting..." : "Delete User"), 9, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Users/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e344949a"]]);
export {
  Index as default
};
