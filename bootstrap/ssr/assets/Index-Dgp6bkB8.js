import { ref, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, createTextVNode, withModifiers, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm, Head } from "@inertiajs/vue3";
import { A as AdminLayout } from "./AdminLayout-utiN72C1.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    user: Object
  },
  setup(__props) {
    const props = __props;
    const showImageUploader = ref(false);
    const profileForm = useForm({
      name: props.user.name,
      email: props.user.email
    });
    const passwordForm = useForm({
      current_password: "",
      password: "",
      password_confirmation: ""
    });
    const imageForm = useForm({});
    const getInitials = (name) => {
      return name.split(" ").map((word) => word.charAt(0)).join("").toUpperCase().slice(0, 2);
    };
    const updateProfile = () => {
      profileForm.put(route("admin.profile.update"), {
        preserveScroll: true,
        onSuccess: () => {
        }
      });
    };
    const updatePassword = () => {
      passwordForm.put(route("admin.profile.password"), {
        preserveScroll: true,
        onSuccess: () => {
          passwordForm.reset();
        }
      });
    };
    const uploadProfileImage = () => {
      const fileInput = document.querySelector('input[type="file"]');
      const formData = new FormData();
      formData.append("profile_image", fileInput.files[0]);
      imageForm.post(route("admin.profile.image.upload"), {
        data: formData,
        preserveScroll: true,
        onSuccess: () => {
          showImageUploader.value = false;
        }
      });
    };
    const deleteProfileImage = () => {
      if (confirm("Are you sure you want to delete your profile image?")) {
        imageForm.delete(route("admin.profile.image.delete"), {
          preserveScroll: true,
          onSuccess: () => {
            showImageUploader.value = false;
          }
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AdminLayout, mergeProps({
        "page-title": "Profile",
        "page-subtitle": "Manage your account settings and preferences"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Profile - Admin Dashboard" }, null, _parent2, _scopeId));
            _push2(`<div class="bg-white rounded-xl shadow-sm border border-gray-200 mb-8" data-v-323cdc9c${_scopeId}><div class="px-6 py-8" data-v-323cdc9c${_scopeId}><div class="flex items-center space-x-6" data-v-323cdc9c${_scopeId}><div class="relative" data-v-323cdc9c${_scopeId}>`);
            if (__props.user.profile_image_url) {
              _push2(`<div class="h-24 w-24 rounded-full overflow-hidden border-4 border-white shadow-lg" data-v-323cdc9c${_scopeId}><img${ssrRenderAttr("src", __props.user.profile_image_url)}${ssrRenderAttr("alt", __props.user.name)} class="h-full w-full object-cover" data-v-323cdc9c${_scopeId}></div>`);
            } else {
              _push2(`<div class="h-24 w-24 bg-brand-red rounded-full flex items-center justify-center border-4 border-white shadow-lg" data-v-323cdc9c${_scopeId}><span class="text-white text-2xl font-bold" data-v-323cdc9c${_scopeId}>${ssrInterpolate(getInitials(__props.user.name))}</span></div>`);
            }
            _push2(`<button class="absolute bottom-0 right-0 h-8 w-8 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200" data-v-323cdc9c${_scopeId}><svg class="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-323cdc9c${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" data-v-323cdc9c${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" data-v-323cdc9c${_scopeId}></path></svg></button></div><div class="flex-1" data-v-323cdc9c${_scopeId}><h1 class="text-3xl font-bold text-gray-900" data-v-323cdc9c${_scopeId}>${ssrInterpolate(__props.user.name)}</h1><p class="text-gray-600 mt-1" data-v-323cdc9c${_scopeId}>${ssrInterpolate(__props.user.email)}</p><div class="flex items-center mt-3 space-x-4" data-v-323cdc9c${_scopeId}><div class="flex items-center text-sm text-gray-500" data-v-323cdc9c${_scopeId}><svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-323cdc9c${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-v-323cdc9c${_scopeId}></path></svg> Member since ${ssrInterpolate(__props.user.created_at)}</div>`);
            if (__props.user.email_verified_at) {
              _push2(`<div class="flex items-center text-sm text-green-600" data-v-323cdc9c${_scopeId}><svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-323cdc9c${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-323cdc9c${_scopeId}></path></svg> Email verified </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-8" data-v-323cdc9c${_scopeId}><div class="lg:col-span-2 space-y-8" data-v-323cdc9c${_scopeId}><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-323cdc9c${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-323cdc9c${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-323cdc9c${_scopeId}>Personal Information</h2><p class="text-sm text-gray-600 mt-1" data-v-323cdc9c${_scopeId}>Update your personal details and contact information.</p></div><div class="p-6" data-v-323cdc9c${_scopeId}><form class="space-y-6" data-v-323cdc9c${_scopeId}><div class="grid grid-cols-1 gap-6" data-v-323cdc9c${_scopeId}><div data-v-323cdc9c${_scopeId}><label for="name" class="block text-sm font-medium text-gray-700 mb-2" data-v-323cdc9c${_scopeId}>Full Name</label><input id="name"${ssrRenderAttr("value", unref(profileForm).name)} type="text" required class="${ssrRenderClass([{ "border-red-500": unref(profileForm).errors.name }, "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all duration-200"])}" data-v-323cdc9c${_scopeId}>`);
            if (unref(profileForm).errors.name) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-323cdc9c${_scopeId}>${ssrInterpolate(unref(profileForm).errors.name)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-323cdc9c${_scopeId}><label for="email" class="block text-sm font-medium text-gray-700 mb-2" data-v-323cdc9c${_scopeId}>Email Address</label><input id="email"${ssrRenderAttr("value", unref(profileForm).email)} type="email" required class="${ssrRenderClass([{ "border-red-500": unref(profileForm).errors.email }, "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all duration-200"])}" data-v-323cdc9c${_scopeId}>`);
            if (unref(profileForm).errors.email) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-323cdc9c${_scopeId}>${ssrInterpolate(unref(profileForm).errors.email)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="flex justify-end" data-v-323cdc9c${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(profileForm).processing) ? " disabled" : ""} class="px-6 py-3 bg-brand-red text-white rounded-lg hover:bg-brand-red/90 focus:ring-2 focus:ring-brand-red focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center" data-v-323cdc9c${_scopeId}>`);
            if (unref(profileForm).processing) {
              _push2(`<svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-323cdc9c${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" data-v-323cdc9c${_scopeId}></path></svg>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(unref(profileForm).processing ? "Updating..." : "Update Profile")}</button></div></form></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-323cdc9c${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-323cdc9c${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-323cdc9c${_scopeId}>Change Password</h2><p class="text-sm text-gray-600 mt-1" data-v-323cdc9c${_scopeId}>Ensure your account is using a long, random password to stay secure.</p></div><div class="p-6" data-v-323cdc9c${_scopeId}><form class="space-y-6" data-v-323cdc9c${_scopeId}><div data-v-323cdc9c${_scopeId}><label for="current_password" class="block text-sm font-medium text-gray-700 mb-2" data-v-323cdc9c${_scopeId}>Current Password</label><input id="current_password"${ssrRenderAttr("value", unref(passwordForm).current_password)} type="password" required class="${ssrRenderClass([{ "border-red-500": unref(passwordForm).errors.current_password }, "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all duration-200"])}" data-v-323cdc9c${_scopeId}>`);
            if (unref(passwordForm).errors.current_password) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-323cdc9c${_scopeId}>${ssrInterpolate(unref(passwordForm).errors.current_password)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-323cdc9c${_scopeId}><label for="password" class="block text-sm font-medium text-gray-700 mb-2" data-v-323cdc9c${_scopeId}>New Password</label><input id="password"${ssrRenderAttr("value", unref(passwordForm).password)} type="password" required class="${ssrRenderClass([{ "border-red-500": unref(passwordForm).errors.password }, "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all duration-200"])}" data-v-323cdc9c${_scopeId}>`);
            if (unref(passwordForm).errors.password) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-323cdc9c${_scopeId}>${ssrInterpolate(unref(passwordForm).errors.password)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-323cdc9c${_scopeId}><label for="password_confirmation" class="block text-sm font-medium text-gray-700 mb-2" data-v-323cdc9c${_scopeId}>Confirm New Password</label><input id="password_confirmation"${ssrRenderAttr("value", unref(passwordForm).password_confirmation)} type="password" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all duration-200" data-v-323cdc9c${_scopeId}></div><div class="flex justify-end" data-v-323cdc9c${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(passwordForm).processing) ? " disabled" : ""} class="px-6 py-3 bg-brand-red text-white rounded-lg hover:bg-brand-red/90 focus:ring-2 focus:ring-brand-red focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center" data-v-323cdc9c${_scopeId}>`);
            if (unref(passwordForm).processing) {
              _push2(`<svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-323cdc9c${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" data-v-323cdc9c${_scopeId}></path></svg>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(unref(passwordForm).processing ? "Updating..." : "Update Password")}</button></div></form></div></div></div><div class="space-y-6" data-v-323cdc9c${_scopeId}><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-323cdc9c${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-323cdc9c${_scopeId}><h3 class="text-lg font-semibold text-gray-900" data-v-323cdc9c${_scopeId}>Account Overview</h3></div><div class="p-6 space-y-4" data-v-323cdc9c${_scopeId}><div class="flex items-center justify-between" data-v-323cdc9c${_scopeId}><span class="text-sm text-gray-600" data-v-323cdc9c${_scopeId}>User ID</span><span class="text-sm font-medium text-gray-900" data-v-323cdc9c${_scopeId}>#${ssrInterpolate(__props.user.id)}</span></div><div class="flex items-center justify-between" data-v-323cdc9c${_scopeId}><span class="text-sm text-gray-600" data-v-323cdc9c${_scopeId}>Status</span><span class="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full" data-v-323cdc9c${_scopeId}>Active</span></div><div class="flex items-center justify-between" data-v-323cdc9c${_scopeId}><span class="text-sm text-gray-600" data-v-323cdc9c${_scopeId}>Role</span><span class="text-sm font-medium text-gray-900" data-v-323cdc9c${_scopeId}>Administrator</span></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-323cdc9c${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-323cdc9c${_scopeId}><h3 class="text-lg font-semibold text-gray-900" data-v-323cdc9c${_scopeId}>Security</h3></div><div class="p-6 space-y-4" data-v-323cdc9c${_scopeId}><div class="flex items-center justify-between" data-v-323cdc9c${_scopeId}><div class="flex items-center" data-v-323cdc9c${_scopeId}><svg class="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-323cdc9c${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-323cdc9c${_scopeId}></path></svg><span class="text-sm text-gray-600" data-v-323cdc9c${_scopeId}>Email Verified</span></div></div><div class="flex items-center justify-between" data-v-323cdc9c${_scopeId}><div class="flex items-center" data-v-323cdc9c${_scopeId}><svg class="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-323cdc9c${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" data-v-323cdc9c${_scopeId}></path></svg><span class="text-sm text-gray-600" data-v-323cdc9c${_scopeId}>Strong Password</span></div></div></div></div></div></div>`);
            if (showImageUploader.value) {
              _push2(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" data-v-323cdc9c${_scopeId}><div class="bg-white rounded-xl max-w-md w-full p-6" data-v-323cdc9c${_scopeId}><div class="flex items-center justify-between mb-4" data-v-323cdc9c${_scopeId}><h3 class="text-lg font-semibold text-gray-900" data-v-323cdc9c${_scopeId}>Update Profile Image</h3><button class="text-gray-400 hover:text-gray-600" data-v-323cdc9c${_scopeId}><svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-323cdc9c${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-323cdc9c${_scopeId}></path></svg></button></div><form enctype="multipart/form-data" data-v-323cdc9c${_scopeId}><div class="mb-4" data-v-323cdc9c${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-323cdc9c${_scopeId}>Choose Image</label><input type="file" accept="image/*" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red" data-v-323cdc9c${_scopeId}><p class="text-xs text-gray-500 mt-1" data-v-323cdc9c${_scopeId}>JPG, PNG, GIF up to 2MB</p></div><div class="flex justify-end space-x-3" data-v-323cdc9c${_scopeId}><button type="button" class="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50" data-v-323cdc9c${_scopeId}> Cancel </button>`);
              if (__props.user.profile_image) {
                _push2(`<button type="button"${ssrIncludeBooleanAttr(unref(imageForm).processing) ? " disabled" : ""} class="px-4 py-2 text-red-600 border border-red-300 rounded-lg hover:bg-red-50 disabled:opacity-50" data-v-323cdc9c${_scopeId}> Delete Current </button>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<button type="submit"${ssrIncludeBooleanAttr(unref(imageForm).processing) ? " disabled" : ""} class="px-4 py-2 bg-brand-red text-white rounded-lg hover:bg-brand-red/90 disabled:opacity-50" data-v-323cdc9c${_scopeId}>${ssrInterpolate(unref(imageForm).processing ? "Uploading..." : "Upload")}</button></div></form></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.flash.success) {
              _push2(`<div class="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50" data-v-323cdc9c${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.success)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.flash.error) {
              _push2(`<div class="fixed bottom-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50" data-v-323cdc9c${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.error)}</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(Head), { title: "Profile - Admin Dashboard" }),
              createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200 mb-8" }, [
                createVNode("div", { class: "px-6 py-8" }, [
                  createVNode("div", { class: "flex items-center space-x-6" }, [
                    createVNode("div", { class: "relative" }, [
                      __props.user.profile_image_url ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "h-24 w-24 rounded-full overflow-hidden border-4 border-white shadow-lg"
                      }, [
                        createVNode("img", {
                          src: __props.user.profile_image_url,
                          alt: __props.user.name,
                          class: "h-full w-full object-cover"
                        }, null, 8, ["src", "alt"])
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "h-24 w-24 bg-brand-red rounded-full flex items-center justify-center border-4 border-white shadow-lg"
                      }, [
                        createVNode("span", { class: "text-white text-2xl font-bold" }, toDisplayString(getInitials(__props.user.name)), 1)
                      ])),
                      createVNode("button", {
                        onClick: ($event) => showImageUploader.value = true,
                        class: "absolute bottom-0 right-0 h-8 w-8 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                      }, [
                        (openBlock(), createBlock("svg", {
                          class: "h-4 w-4 text-gray-600",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                          }),
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                          })
                        ]))
                      ], 8, ["onClick"])
                    ]),
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("h1", { class: "text-3xl font-bold text-gray-900" }, toDisplayString(__props.user.name), 1),
                      createVNode("p", { class: "text-gray-600 mt-1" }, toDisplayString(__props.user.email), 1),
                      createVNode("div", { class: "flex items-center mt-3 space-x-4" }, [
                        createVNode("div", { class: "flex items-center text-sm text-gray-500" }, [
                          (openBlock(), createBlock("svg", {
                            class: "h-4 w-4 mr-1",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            })
                          ])),
                          createTextVNode(" Member since " + toDisplayString(__props.user.created_at), 1)
                        ]),
                        __props.user.email_verified_at ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex items-center text-sm text-green-600"
                        }, [
                          (openBlock(), createBlock("svg", {
                            class: "h-4 w-4 mr-1",
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
                          createTextVNode(" Email verified ")
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-3 gap-8" }, [
                createVNode("div", { class: "lg:col-span-2 space-y-8" }, [
                  createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200" }, [
                    createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                      createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Personal Information"),
                      createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Update your personal details and contact information.")
                    ]),
                    createVNode("div", { class: "p-6" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(updateProfile, ["prevent"]),
                        class: "space-y-6"
                      }, [
                        createVNode("div", { class: "grid grid-cols-1 gap-6" }, [
                          createVNode("div", null, [
                            createVNode("label", {
                              for: "name",
                              class: "block text-sm font-medium text-gray-700 mb-2"
                            }, "Full Name"),
                            withDirectives(createVNode("input", {
                              id: "name",
                              "onUpdate:modelValue": ($event) => unref(profileForm).name = $event,
                              type: "text",
                              required: "",
                              class: ["w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all duration-200", { "border-red-500": unref(profileForm).errors.name }]
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(profileForm).name]
                            ]),
                            unref(profileForm).errors.name ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-1 text-sm text-red-600"
                            }, toDisplayString(unref(profileForm).errors.name), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", null, [
                            createVNode("label", {
                              for: "email",
                              class: "block text-sm font-medium text-gray-700 mb-2"
                            }, "Email Address"),
                            withDirectives(createVNode("input", {
                              id: "email",
                              "onUpdate:modelValue": ($event) => unref(profileForm).email = $event,
                              type: "email",
                              required: "",
                              class: ["w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all duration-200", { "border-red-500": unref(profileForm).errors.email }]
                            }, null, 10, ["onUpdate:modelValue"]), [
                              [vModelText, unref(profileForm).email]
                            ]),
                            unref(profileForm).errors.email ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-1 text-sm text-red-600"
                            }, toDisplayString(unref(profileForm).errors.email), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "flex justify-end" }, [
                          createVNode("button", {
                            type: "submit",
                            disabled: unref(profileForm).processing,
                            class: "px-6 py-3 bg-brand-red text-white rounded-lg hover:bg-brand-red/90 focus:ring-2 focus:ring-brand-red focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                          }, [
                            unref(profileForm).processing ? (openBlock(), createBlock("svg", {
                              key: 0,
                              class: "animate-spin -ml-1 mr-3 h-4 w-4 text-white",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                              })
                            ])) : createCommentVNode("", true),
                            createTextVNode(" " + toDisplayString(unref(profileForm).processing ? "Updating..." : "Update Profile"), 1)
                          ], 8, ["disabled"])
                        ])
                      ], 32)
                    ])
                  ]),
                  createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200" }, [
                    createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                      createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Change Password"),
                      createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Ensure your account is using a long, random password to stay secure.")
                    ]),
                    createVNode("div", { class: "p-6" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(updatePassword, ["prevent"]),
                        class: "space-y-6"
                      }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "current_password",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, "Current Password"),
                          withDirectives(createVNode("input", {
                            id: "current_password",
                            "onUpdate:modelValue": ($event) => unref(passwordForm).current_password = $event,
                            type: "password",
                            required: "",
                            class: ["w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all duration-200", { "border-red-500": unref(passwordForm).errors.current_password }]
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, unref(passwordForm).current_password]
                          ]),
                          unref(passwordForm).errors.current_password ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(unref(passwordForm).errors.current_password), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "password",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, "New Password"),
                          withDirectives(createVNode("input", {
                            id: "password",
                            "onUpdate:modelValue": ($event) => unref(passwordForm).password = $event,
                            type: "password",
                            required: "",
                            class: ["w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all duration-200", { "border-red-500": unref(passwordForm).errors.password }]
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, unref(passwordForm).password]
                          ]),
                          unref(passwordForm).errors.password ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(unref(passwordForm).errors.password), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "password_confirmation",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, "Confirm New Password"),
                          withDirectives(createVNode("input", {
                            id: "password_confirmation",
                            "onUpdate:modelValue": ($event) => unref(passwordForm).password_confirmation = $event,
                            type: "password",
                            required: "",
                            class: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all duration-200"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(passwordForm).password_confirmation]
                          ])
                        ]),
                        createVNode("div", { class: "flex justify-end" }, [
                          createVNode("button", {
                            type: "submit",
                            disabled: unref(passwordForm).processing,
                            class: "px-6 py-3 bg-brand-red text-white rounded-lg hover:bg-brand-red/90 focus:ring-2 focus:ring-brand-red focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                          }, [
                            unref(passwordForm).processing ? (openBlock(), createBlock("svg", {
                              key: 0,
                              class: "animate-spin -ml-1 mr-3 h-4 w-4 text-white",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                              })
                            ])) : createCommentVNode("", true),
                            createTextVNode(" " + toDisplayString(unref(passwordForm).processing ? "Updating..." : "Update Password"), 1)
                          ], 8, ["disabled"])
                        ])
                      ], 32)
                    ])
                  ])
                ]),
                createVNode("div", { class: "space-y-6" }, [
                  createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200" }, [
                    createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                      createVNode("h3", { class: "text-lg font-semibold text-gray-900" }, "Account Overview")
                    ]),
                    createVNode("div", { class: "p-6 space-y-4" }, [
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("span", { class: "text-sm text-gray-600" }, "User ID"),
                        createVNode("span", { class: "text-sm font-medium text-gray-900" }, "#" + toDisplayString(__props.user.id), 1)
                      ]),
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("span", { class: "text-sm text-gray-600" }, "Status"),
                        createVNode("span", { class: "inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full" }, "Active")
                      ]),
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("span", { class: "text-sm text-gray-600" }, "Role"),
                        createVNode("span", { class: "text-sm font-medium text-gray-900" }, "Administrator")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200" }, [
                    createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                      createVNode("h3", { class: "text-lg font-semibold text-gray-900" }, "Security")
                    ]),
                    createVNode("div", { class: "p-6 space-y-4" }, [
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("div", { class: "flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            class: "h-5 w-5 text-green-500 mr-3",
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
                          createVNode("span", { class: "text-sm text-gray-600" }, "Email Verified")
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("div", { class: "flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            class: "h-5 w-5 text-green-500 mr-3",
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
                          ])),
                          createVNode("span", { class: "text-sm text-gray-600" }, "Strong Password")
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              showImageUploader.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              }, [
                createVNode("div", { class: "bg-white rounded-xl max-w-md w-full p-6" }, [
                  createVNode("div", { class: "flex items-center justify-between mb-4" }, [
                    createVNode("h3", { class: "text-lg font-semibold text-gray-900" }, "Update Profile Image"),
                    createVNode("button", {
                      onClick: ($event) => showImageUploader.value = false,
                      class: "text-gray-400 hover:text-gray-600"
                    }, [
                      (openBlock(), createBlock("svg", {
                        class: "h-6 w-6",
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
                    ], 8, ["onClick"])
                  ]),
                  createVNode("form", {
                    onSubmit: withModifiers(uploadProfileImage, ["prevent"]),
                    enctype: "multipart/form-data"
                  }, [
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Choose Image"),
                      createVNode("input", {
                        ref: "fileInput",
                        type: "file",
                        accept: "image/*",
                        required: "",
                        class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red"
                      }, null, 512),
                      createVNode("p", { class: "text-xs text-gray-500 mt-1" }, "JPG, PNG, GIF up to 2MB")
                    ]),
                    createVNode("div", { class: "flex justify-end space-x-3" }, [
                      createVNode("button", {
                        type: "button",
                        onClick: ($event) => showImageUploader.value = false,
                        class: "px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                      }, " Cancel ", 8, ["onClick"]),
                      __props.user.profile_image ? (openBlock(), createBlock("button", {
                        key: 0,
                        type: "button",
                        onClick: deleteProfileImage,
                        disabled: unref(imageForm).processing,
                        class: "px-4 py-2 text-red-600 border border-red-300 rounded-lg hover:bg-red-50 disabled:opacity-50"
                      }, " Delete Current ", 8, ["disabled"])) : createCommentVNode("", true),
                      createVNode("button", {
                        type: "submit",
                        disabled: unref(imageForm).processing,
                        class: "px-4 py-2 bg-brand-red text-white rounded-lg hover:bg-brand-red/90 disabled:opacity-50"
                      }, toDisplayString(unref(imageForm).processing ? "Uploading..." : "Upload"), 9, ["disabled"])
                    ])
                  ], 32)
                ])
              ])) : createCommentVNode("", true),
              _ctx.$page.props.flash.success ? (openBlock(), createBlock("div", {
                key: 1,
                class: "fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
              }, toDisplayString(_ctx.$page.props.flash.success), 1)) : createCommentVNode("", true),
              _ctx.$page.props.flash.error ? (openBlock(), createBlock("div", {
                key: 2,
                class: "fixed bottom-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Profile/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-323cdc9c"]]);
export {
  Index as default
};
