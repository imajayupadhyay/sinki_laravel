import { mergeProps, withCtx, unref, createTextVNode, createVNode, withModifiers, withDirectives, createBlock, createCommentVNode, vModelText, openBlock, toDisplayString, vModelSelect, Fragment, renderList, vModelCheckbox, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList } from "vue/server-renderer";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { A as AdminLayout } from "./AdminLayout-utiN72C1.js";
import { Q as QuillEditor, I as ImageUpload } from "./ImageUpload-CiZmXII1.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "quill";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    categories: {
      type: Array,
      default: () => []
    },
    tags: {
      type: Array,
      default: () => []
    },
    users: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const blogForm = useForm({
      title: "",
      slug: "",
      content: "",
      excerpt: "",
      meta_title: "",
      meta_description: "",
      meta_keywords: "",
      featured_image: "",
      status: "draft",
      category_id: "",
      author_id: "",
      tags: [],
      published_at: ""
    });
    const submitBlog = () => {
      blogForm.post(route("admin.blogs.store"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AdminLayout, mergeProps({
        "page-title": "Create New Blog Post",
        "page-subtitle": "Write and publish a new blog post"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Create Blog Post - Admin Dashboard" }, null, _parent2, _scopeId));
            _push2(`<form class="space-y-6" data-v-167c6545${_scopeId}><div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" data-v-167c6545${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-167c6545${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-167c6545${_scopeId}>Post Content</h2></div><div class="p-6 space-y-6" data-v-167c6545${_scopeId}><div data-v-167c6545${_scopeId}><label for="title" class="block text-sm font-medium text-gray-700 mb-2" data-v-167c6545${_scopeId}>Title</label><input id="title"${ssrRenderAttr("value", unref(blogForm).title)} type="text" class="${ssrRenderClass([{ "border-red-500": unref(blogForm).errors.title }, "w-full px-4 py-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"])}" placeholder="Enter your blog post title..." required data-v-167c6545${_scopeId}>`);
            if (unref(blogForm).errors.title) {
              _push2(`<div class="text-red-600 text-sm mt-1" data-v-167c6545${_scopeId}>${ssrInterpolate(unref(blogForm).errors.title)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-167c6545${_scopeId}><label for="slug" class="block text-sm font-medium text-gray-700 mb-2" data-v-167c6545${_scopeId}>URL Slug</label><input id="slug"${ssrRenderAttr("value", unref(blogForm).slug)} type="text" class="${ssrRenderClass([{ "border-red-500": unref(blogForm).errors.slug }, "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"])}" placeholder="Leave empty to auto-generate from title" data-v-167c6545${_scopeId}>`);
            if (unref(blogForm).errors.slug) {
              _push2(`<div class="text-red-600 text-sm mt-1" data-v-167c6545${_scopeId}>${ssrInterpolate(unref(blogForm).errors.slug)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-167c6545${_scopeId}><label for="content" class="block text-sm font-medium text-gray-700 mb-2" data-v-167c6545${_scopeId}>Content</label>`);
            _push2(ssrRenderComponent(QuillEditor, {
              modelValue: unref(blogForm).content,
              "onUpdate:modelValue": ($event) => unref(blogForm).content = $event,
              placeholder: "Start writing your blog post content...",
              height: "500px",
              class: { "border-red-500": unref(blogForm).errors.content }
            }, null, _parent2, _scopeId));
            if (unref(blogForm).errors.content) {
              _push2(`<div class="text-red-600 text-sm mt-1" data-v-167c6545${_scopeId}>${ssrInterpolate(unref(blogForm).errors.content)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<p class="text-xs text-gray-500 mt-2" data-v-167c6545${_scopeId}> Use the toolbar above to format your content. Click &quot;HTML&quot; to edit the source code directly. </p></div><div data-v-167c6545${_scopeId}><label for="excerpt" class="block text-sm font-medium text-gray-700 mb-2" data-v-167c6545${_scopeId}>Excerpt</label><textarea id="excerpt" rows="3" class="${ssrRenderClass([{ "border-red-500": unref(blogForm).errors.excerpt }, "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"])}" placeholder="Brief summary of your post (optional)" data-v-167c6545${_scopeId}>${ssrInterpolate(unref(blogForm).excerpt)}</textarea>`);
            if (unref(blogForm).errors.excerpt) {
              _push2(`<div class="text-red-600 text-sm mt-1" data-v-167c6545${_scopeId}>${ssrInterpolate(unref(blogForm).errors.excerpt)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6" data-v-167c6545${_scopeId}><div class="lg:col-span-2 space-y-6" data-v-167c6545${_scopeId}><div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" data-v-167c6545${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-167c6545${_scopeId}><h3 class="text-lg font-semibold text-gray-900" data-v-167c6545${_scopeId}>SEO Settings</h3></div><div class="p-6 space-y-4" data-v-167c6545${_scopeId}><div data-v-167c6545${_scopeId}><label for="meta_title" class="block text-sm font-medium text-gray-700 mb-2" data-v-167c6545${_scopeId}>Meta Title</label><input id="meta_title"${ssrRenderAttr("value", unref(blogForm).meta_title)} type="text" class="${ssrRenderClass([{ "border-red-500": unref(blogForm).errors.meta_title }, "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"])}" placeholder="SEO title for search engines" data-v-167c6545${_scopeId}>`);
            if (unref(blogForm).errors.meta_title) {
              _push2(`<div class="text-red-600 text-sm mt-1" data-v-167c6545${_scopeId}>${ssrInterpolate(unref(blogForm).errors.meta_title)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-167c6545${_scopeId}><label for="meta_description" class="block text-sm font-medium text-gray-700 mb-2" data-v-167c6545${_scopeId}>Meta Description</label><textarea id="meta_description" rows="3" class="${ssrRenderClass([{ "border-red-500": unref(blogForm).errors.meta_description }, "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"])}" placeholder="SEO description for search engines (150-160 characters)" data-v-167c6545${_scopeId}>${ssrInterpolate(unref(blogForm).meta_description)}</textarea>`);
            if (unref(blogForm).errors.meta_description) {
              _push2(`<div class="text-red-600 text-sm mt-1" data-v-167c6545${_scopeId}>${ssrInterpolate(unref(blogForm).errors.meta_description)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-167c6545${_scopeId}><label for="meta_keywords" class="block text-sm font-medium text-gray-700 mb-2" data-v-167c6545${_scopeId}>Meta Keywords</label><input id="meta_keywords"${ssrRenderAttr("value", unref(blogForm).meta_keywords)} type="text" class="${ssrRenderClass([{ "border-red-500": unref(blogForm).errors.meta_keywords }, "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"])}" placeholder="keyword1, keyword2, keyword3" data-v-167c6545${_scopeId}>`);
            if (unref(blogForm).errors.meta_keywords) {
              _push2(`<div class="text-red-600 text-sm mt-1" data-v-167c6545${_scopeId}>${ssrInterpolate(unref(blogForm).errors.meta_keywords)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div><div class="space-y-6" data-v-167c6545${_scopeId}><div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" data-v-167c6545${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-167c6545${_scopeId}><h3 class="text-lg font-semibold text-gray-900" data-v-167c6545${_scopeId}>Publish Settings</h3></div><div class="p-6 space-y-4" data-v-167c6545${_scopeId}><div data-v-167c6545${_scopeId}><label for="status" class="block text-sm font-medium text-gray-700 mb-2" data-v-167c6545${_scopeId}>Status</label><select id="status" class="${ssrRenderClass([{ "border-red-500": unref(blogForm).errors.status }, "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"])}" data-v-167c6545${_scopeId}><option value="draft" data-v-167c6545${ssrIncludeBooleanAttr(Array.isArray(unref(blogForm).status) ? ssrLooseContain(unref(blogForm).status, "draft") : ssrLooseEqual(unref(blogForm).status, "draft")) ? " selected" : ""}${_scopeId}>Draft</option><option value="published" data-v-167c6545${ssrIncludeBooleanAttr(Array.isArray(unref(blogForm).status) ? ssrLooseContain(unref(blogForm).status, "published") : ssrLooseEqual(unref(blogForm).status, "published")) ? " selected" : ""}${_scopeId}>Published</option></select>`);
            if (unref(blogForm).errors.status) {
              _push2(`<div class="text-red-600 text-sm mt-1" data-v-167c6545${_scopeId}>${ssrInterpolate(unref(blogForm).errors.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-167c6545${_scopeId}><label for="author_id" class="block text-sm font-medium text-gray-700 mb-2" data-v-167c6545${_scopeId}>Author</label><select id="author_id" class="${ssrRenderClass([{ "border-red-500": unref(blogForm).errors.author_id }, "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"])}" required data-v-167c6545${_scopeId}><option value="" data-v-167c6545${ssrIncludeBooleanAttr(Array.isArray(unref(blogForm).author_id) ? ssrLooseContain(unref(blogForm).author_id, "") : ssrLooseEqual(unref(blogForm).author_id, "")) ? " selected" : ""}${_scopeId}>Select an author</option><!--[-->`);
            ssrRenderList(__props.users, (user) => {
              _push2(`<option${ssrRenderAttr("value", user.id)} data-v-167c6545${ssrIncludeBooleanAttr(Array.isArray(unref(blogForm).author_id) ? ssrLooseContain(unref(blogForm).author_id, user.id) : ssrLooseEqual(unref(blogForm).author_id, user.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(user.name)}</option>`);
            });
            _push2(`<!--]--></select>`);
            if (unref(blogForm).errors.author_id) {
              _push2(`<div class="text-red-600 text-sm mt-1" data-v-167c6545${_scopeId}>${ssrInterpolate(unref(blogForm).errors.author_id)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-167c6545${_scopeId}><label for="published_at" class="block text-sm font-medium text-gray-700 mb-2" data-v-167c6545${_scopeId}>Publish Date</label><input id="published_at"${ssrRenderAttr("value", unref(blogForm).published_at)} type="datetime-local" class="${ssrRenderClass([{ "border-red-500": unref(blogForm).errors.published_at }, "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"])}" data-v-167c6545${_scopeId}>`);
            if (unref(blogForm).errors.published_at) {
              _push2(`<div class="text-red-600 text-sm mt-1" data-v-167c6545${_scopeId}>${ssrInterpolate(unref(blogForm).errors.published_at)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" data-v-167c6545${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-167c6545${_scopeId}><h3 class="text-lg font-semibold text-gray-900" data-v-167c6545${_scopeId}>Organization</h3></div><div class="p-6 space-y-4" data-v-167c6545${_scopeId}><div data-v-167c6545${_scopeId}><label for="category_id" class="block text-sm font-medium text-gray-700 mb-2" data-v-167c6545${_scopeId}>Category</label><select id="category_id" class="${ssrRenderClass([{ "border-red-500": unref(blogForm).errors.category_id }, "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"])}" data-v-167c6545${_scopeId}><option value="" data-v-167c6545${ssrIncludeBooleanAttr(Array.isArray(unref(blogForm).category_id) ? ssrLooseContain(unref(blogForm).category_id, "") : ssrLooseEqual(unref(blogForm).category_id, "")) ? " selected" : ""}${_scopeId}>Select a category</option><!--[-->`);
            ssrRenderList(__props.categories, (category) => {
              _push2(`<option${ssrRenderAttr("value", category.id)} data-v-167c6545${ssrIncludeBooleanAttr(Array.isArray(unref(blogForm).category_id) ? ssrLooseContain(unref(blogForm).category_id, category.id) : ssrLooseEqual(unref(blogForm).category_id, category.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(category.name)}</option>`);
            });
            _push2(`<!--]--></select>`);
            if (unref(blogForm).errors.category_id) {
              _push2(`<div class="text-red-600 text-sm mt-1" data-v-167c6545${_scopeId}>${ssrInterpolate(unref(blogForm).errors.category_id)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-167c6545${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-167c6545${_scopeId}>Tags</label><div class="space-y-2 max-h-48 overflow-y-auto border border-gray-300 rounded-md p-3" data-v-167c6545${_scopeId}><!--[-->`);
            ssrRenderList(__props.tags, (tag) => {
              _push2(`<label class="flex items-center" data-v-167c6545${_scopeId}><input type="checkbox"${ssrRenderAttr("value", tag.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(blogForm).tags) ? ssrLooseContain(unref(blogForm).tags, tag.id) : unref(blogForm).tags) ? " checked" : ""} class="rounded border-gray-300 text-brand-red focus:border-brand-red focus:ring-brand-red" data-v-167c6545${_scopeId}><span class="ml-2 text-sm text-gray-700" data-v-167c6545${_scopeId}>${ssrInterpolate(tag.name)}</span></label>`);
            });
            _push2(`<!--]--></div>`);
            if (unref(blogForm).errors.tags) {
              _push2(`<div class="text-red-600 text-sm mt-1" data-v-167c6545${_scopeId}>${ssrInterpolate(unref(blogForm).errors.tags)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(ImageUpload, {
              modelValue: unref(blogForm).featured_image,
              "onUpdate:modelValue": ($event) => unref(blogForm).featured_image = $event,
              label: "Featured Image",
              "alt-text": "Blog featured image"
            }, null, _parent2, _scopeId));
            if (unref(blogForm).errors.featured_image) {
              _push2(`<div class="text-red-600 text-sm mt-1" data-v-167c6545${_scopeId}>${ssrInterpolate(unref(blogForm).errors.featured_image)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" data-v-167c6545${_scopeId}><div class="p-6 space-y-3" data-v-167c6545${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(blogForm).processing) ? " disabled" : ""} class="w-full px-4 py-2 text-sm font-medium text-white bg-brand-red hover:bg-red-600 rounded-md transition-colors duration-200 disabled:opacity-50" data-v-167c6545${_scopeId}>${ssrInterpolate(unref(blogForm).processing ? "Creating..." : "Create Blog Post")}</button>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.blogs.index"),
              class: "w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200 text-center block"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Create Blog Post - Admin Dashboard" }),
              createVNode("form", {
                onSubmit: withModifiers(submitBlog, ["prevent"]),
                class: "space-y-6"
              }, [
                createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" }, [
                  createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                    createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Post Content")
                  ]),
                  createVNode("div", { class: "p-6 space-y-6" }, [
                    createVNode("div", null, [
                      createVNode("label", {
                        for: "title",
                        class: "block text-sm font-medium text-gray-700 mb-2"
                      }, "Title"),
                      withDirectives(createVNode("input", {
                        id: "title",
                        "onUpdate:modelValue": ($event) => unref(blogForm).title = $event,
                        type: "text",
                        class: ["w-full px-4 py-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent", { "border-red-500": unref(blogForm).errors.title }],
                        placeholder: "Enter your blog post title...",
                        required: ""
                      }, null, 10, ["onUpdate:modelValue"]), [
                        [vModelText, unref(blogForm).title]
                      ]),
                      unref(blogForm).errors.title ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-red-600 text-sm mt-1"
                      }, toDisplayString(unref(blogForm).errors.title), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", null, [
                      createVNode("label", {
                        for: "slug",
                        class: "block text-sm font-medium text-gray-700 mb-2"
                      }, "URL Slug"),
                      withDirectives(createVNode("input", {
                        id: "slug",
                        "onUpdate:modelValue": ($event) => unref(blogForm).slug = $event,
                        type: "text",
                        class: ["w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent", { "border-red-500": unref(blogForm).errors.slug }],
                        placeholder: "Leave empty to auto-generate from title"
                      }, null, 10, ["onUpdate:modelValue"]), [
                        [vModelText, unref(blogForm).slug]
                      ]),
                      unref(blogForm).errors.slug ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-red-600 text-sm mt-1"
                      }, toDisplayString(unref(blogForm).errors.slug), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", null, [
                      createVNode("label", {
                        for: "content",
                        class: "block text-sm font-medium text-gray-700 mb-2"
                      }, "Content"),
                      createVNode(QuillEditor, {
                        modelValue: unref(blogForm).content,
                        "onUpdate:modelValue": ($event) => unref(blogForm).content = $event,
                        placeholder: "Start writing your blog post content...",
                        height: "500px",
                        class: { "border-red-500": unref(blogForm).errors.content }
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                      unref(blogForm).errors.content ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-red-600 text-sm mt-1"
                      }, toDisplayString(unref(blogForm).errors.content), 1)) : createCommentVNode("", true),
                      createVNode("p", { class: "text-xs text-gray-500 mt-2" }, ' Use the toolbar above to format your content. Click "HTML" to edit the source code directly. ')
                    ]),
                    createVNode("div", null, [
                      createVNode("label", {
                        for: "excerpt",
                        class: "block text-sm font-medium text-gray-700 mb-2"
                      }, "Excerpt"),
                      withDirectives(createVNode("textarea", {
                        id: "excerpt",
                        "onUpdate:modelValue": ($event) => unref(blogForm).excerpt = $event,
                        rows: "3",
                        class: ["w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent", { "border-red-500": unref(blogForm).errors.excerpt }],
                        placeholder: "Brief summary of your post (optional)"
                      }, null, 10, ["onUpdate:modelValue"]), [
                        [vModelText, unref(blogForm).excerpt]
                      ]),
                      unref(blogForm).errors.excerpt ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-red-600 text-sm mt-1"
                      }, toDisplayString(unref(blogForm).errors.excerpt), 1)) : createCommentVNode("", true)
                    ])
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-3 gap-6" }, [
                  createVNode("div", { class: "lg:col-span-2 space-y-6" }, [
                    createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" }, [
                      createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                        createVNode("h3", { class: "text-lg font-semibold text-gray-900" }, "SEO Settings")
                      ]),
                      createVNode("div", { class: "p-6 space-y-4" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "meta_title",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, "Meta Title"),
                          withDirectives(createVNode("input", {
                            id: "meta_title",
                            "onUpdate:modelValue": ($event) => unref(blogForm).meta_title = $event,
                            type: "text",
                            class: ["w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent", { "border-red-500": unref(blogForm).errors.meta_title }],
                            placeholder: "SEO title for search engines"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, unref(blogForm).meta_title]
                          ]),
                          unref(blogForm).errors.meta_title ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-red-600 text-sm mt-1"
                          }, toDisplayString(unref(blogForm).errors.meta_title), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "meta_description",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, "Meta Description"),
                          withDirectives(createVNode("textarea", {
                            id: "meta_description",
                            "onUpdate:modelValue": ($event) => unref(blogForm).meta_description = $event,
                            rows: "3",
                            class: ["w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent", { "border-red-500": unref(blogForm).errors.meta_description }],
                            placeholder: "SEO description for search engines (150-160 characters)"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, unref(blogForm).meta_description]
                          ]),
                          unref(blogForm).errors.meta_description ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-red-600 text-sm mt-1"
                          }, toDisplayString(unref(blogForm).errors.meta_description), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "meta_keywords",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, "Meta Keywords"),
                          withDirectives(createVNode("input", {
                            id: "meta_keywords",
                            "onUpdate:modelValue": ($event) => unref(blogForm).meta_keywords = $event,
                            type: "text",
                            class: ["w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent", { "border-red-500": unref(blogForm).errors.meta_keywords }],
                            placeholder: "keyword1, keyword2, keyword3"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, unref(blogForm).meta_keywords]
                          ]),
                          unref(blogForm).errors.meta_keywords ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-red-600 text-sm mt-1"
                          }, toDisplayString(unref(blogForm).errors.meta_keywords), 1)) : createCommentVNode("", true)
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "space-y-6" }, [
                    createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" }, [
                      createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                        createVNode("h3", { class: "text-lg font-semibold text-gray-900" }, "Publish Settings")
                      ]),
                      createVNode("div", { class: "p-6 space-y-4" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "status",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, "Status"),
                          withDirectives(createVNode("select", {
                            id: "status",
                            "onUpdate:modelValue": ($event) => unref(blogForm).status = $event,
                            class: ["w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent", { "border-red-500": unref(blogForm).errors.status }]
                          }, [
                            createVNode("option", { value: "draft" }, "Draft"),
                            createVNode("option", { value: "published" }, "Published")
                          ], 10, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(blogForm).status]
                          ]),
                          unref(blogForm).errors.status ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-red-600 text-sm mt-1"
                          }, toDisplayString(unref(blogForm).errors.status), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "author_id",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, "Author"),
                          withDirectives(createVNode("select", {
                            id: "author_id",
                            "onUpdate:modelValue": ($event) => unref(blogForm).author_id = $event,
                            class: ["w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent", { "border-red-500": unref(blogForm).errors.author_id }],
                            required: ""
                          }, [
                            createVNode("option", { value: "" }, "Select an author"),
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.users, (user) => {
                              return openBlock(), createBlock("option", {
                                key: user.id,
                                value: user.id
                              }, toDisplayString(user.name), 9, ["value"]);
                            }), 128))
                          ], 10, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(blogForm).author_id]
                          ]),
                          unref(blogForm).errors.author_id ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-red-600 text-sm mt-1"
                          }, toDisplayString(unref(blogForm).errors.author_id), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "published_at",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, "Publish Date"),
                          withDirectives(createVNode("input", {
                            id: "published_at",
                            "onUpdate:modelValue": ($event) => unref(blogForm).published_at = $event,
                            type: "datetime-local",
                            class: ["w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent", { "border-red-500": unref(blogForm).errors.published_at }]
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, unref(blogForm).published_at]
                          ]),
                          unref(blogForm).errors.published_at ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-red-600 text-sm mt-1"
                          }, toDisplayString(unref(blogForm).errors.published_at), 1)) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" }, [
                      createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                        createVNode("h3", { class: "text-lg font-semibold text-gray-900" }, "Organization")
                      ]),
                      createVNode("div", { class: "p-6 space-y-4" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "category_id",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, "Category"),
                          withDirectives(createVNode("select", {
                            id: "category_id",
                            "onUpdate:modelValue": ($event) => unref(blogForm).category_id = $event,
                            class: ["w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent", { "border-red-500": unref(blogForm).errors.category_id }]
                          }, [
                            createVNode("option", { value: "" }, "Select a category"),
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                              return openBlock(), createBlock("option", {
                                key: category.id,
                                value: category.id
                              }, toDisplayString(category.name), 9, ["value"]);
                            }), 128))
                          ], 10, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(blogForm).category_id]
                          ]),
                          unref(blogForm).errors.category_id ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-red-600 text-sm mt-1"
                          }, toDisplayString(unref(blogForm).errors.category_id), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Tags"),
                          createVNode("div", { class: "space-y-2 max-h-48 overflow-y-auto border border-gray-300 rounded-md p-3" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.tags, (tag) => {
                              return openBlock(), createBlock("label", {
                                key: tag.id,
                                class: "flex items-center"
                              }, [
                                withDirectives(createVNode("input", {
                                  type: "checkbox",
                                  value: tag.id,
                                  "onUpdate:modelValue": ($event) => unref(blogForm).tags = $event,
                                  class: "rounded border-gray-300 text-brand-red focus:border-brand-red focus:ring-brand-red"
                                }, null, 8, ["value", "onUpdate:modelValue"]), [
                                  [vModelCheckbox, unref(blogForm).tags]
                                ]),
                                createVNode("span", { class: "ml-2 text-sm text-gray-700" }, toDisplayString(tag.name), 1)
                              ]);
                            }), 128))
                          ]),
                          unref(blogForm).errors.tags ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-red-600 text-sm mt-1"
                          }, toDisplayString(unref(blogForm).errors.tags), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode(ImageUpload, {
                          modelValue: unref(blogForm).featured_image,
                          "onUpdate:modelValue": ($event) => unref(blogForm).featured_image = $event,
                          label: "Featured Image",
                          "alt-text": "Blog featured image"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        unref(blogForm).errors.featured_image ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-red-600 text-sm mt-1"
                        }, toDisplayString(unref(blogForm).errors.featured_image), 1)) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" }, [
                      createVNode("div", { class: "p-6 space-y-3" }, [
                        createVNode("button", {
                          type: "submit",
                          disabled: unref(blogForm).processing,
                          class: "w-full px-4 py-2 text-sm font-medium text-white bg-brand-red hover:bg-red-600 rounded-md transition-colors duration-200 disabled:opacity-50"
                        }, toDisplayString(unref(blogForm).processing ? "Creating..." : "Create Blog Post"), 9, ["disabled"]),
                        createVNode(unref(Link), {
                          href: _ctx.route("admin.blogs.index"),
                          class: "w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200 text-center block"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancel ")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])
                    ])
                  ])
                ])
              ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Blogs/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-167c6545"]]);
export {
  Create as default
};
