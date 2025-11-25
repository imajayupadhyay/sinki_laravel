import { reactive, ref, computed, watch, mergeProps, withCtx, unref, createBlock, createTextVNode, openBlock, createVNode, createCommentVNode, toDisplayString, withModifiers, withDirectives, withKeys, vModelText, vModelSelect, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { useForm, Head, Link, router } from "@inertiajs/vue3";
import { A as AdminLayout } from "./AdminLayout-DZUdEQLU.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    blogs: {
      type: Object,
      default: () => ({ data: [], total: 0 })
    },
    categories: {
      type: Array,
      default: () => []
    },
    authors: {
      type: Array,
      default: () => []
    },
    filters: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const filterForm = reactive({
      search: props.filters.search || "",
      status: props.filters.status || "all",
      category: props.filters.category || "all",
      author: props.filters.author || "all",
      date_from: props.filters.date_from || "",
      date_to: props.filters.date_to || "",
      per_page: props.filters.per_page || "10",
      sort_by: props.filters.sort_by || "created_at",
      sort_order: props.filters.sort_order || "desc"
    });
    const showDeleteModal = ref(false);
    const selectedBlog = ref(null);
    const deleteForm = useForm({});
    const hasActiveFilters = computed(() => {
      return filterForm.search !== "" || filterForm.status !== "all" || filterForm.category !== "all" || filterForm.author !== "all" || filterForm.date_from !== "" || filterForm.date_to !== "";
    });
    const applyFilters = () => {
      const params = {};
      if (filterForm.search && filterForm.search.trim()) params.search = filterForm.search.trim();
      if (filterForm.status !== "all") params.status = filterForm.status;
      if (filterForm.category !== "all") params.category = filterForm.category;
      if (filterForm.author !== "all") params.author = filterForm.author;
      if (filterForm.date_from) params.date_from = filterForm.date_from;
      if (filterForm.date_to) params.date_to = filterForm.date_to;
      if (filterForm.per_page !== "10") params.per_page = filterForm.per_page;
      if (filterForm.sort_by !== "created_at") params.sort_by = filterForm.sort_by;
      if (filterForm.sort_order !== "desc") params.sort_order = filterForm.sort_order;
      router.visit(route("admin.blogs.index"), {
        method: "get",
        data: params,
        preserveState: true,
        preserveScroll: true
      });
    };
    const clearFilters = () => {
      filterForm.search = "";
      filterForm.status = "all";
      filterForm.category = "all";
      filterForm.author = "all";
      filterForm.date_from = "";
      filterForm.date_to = "";
      filterForm.per_page = "10";
      filterForm.sort_by = "created_at";
      filterForm.sort_order = "desc";
      router.visit(route("admin.blogs.index"), {
        method: "get",
        preserveState: true
      });
    };
    let searchTimeout;
    watch(() => filterForm.search, () => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        applyFilters();
      }, 500);
    });
    watch(() => filterForm.per_page, () => {
      applyFilters();
    });
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
              _push2(`<div class="mb-6 bg-green-50 border border-green-200 rounded-lg p-4" data-v-2cda8026${_scopeId}><div class="flex" data-v-2cda8026${_scopeId}><svg class="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-2cda8026${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-2cda8026${_scopeId}></path></svg><p class="ml-3 text-sm text-green-800" data-v-2cda8026${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.success)}</p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.flash?.error) {
              _push2(`<div class="mb-6 bg-red-50 border border-red-200 rounded-lg p-4" data-v-2cda8026${_scopeId}><div class="flex" data-v-2cda8026${_scopeId}><svg class="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-2cda8026${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-2cda8026${_scopeId}></path></svg><p class="ml-3 text-sm text-red-800" data-v-2cda8026${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.error)}</p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="bg-white rounded-xl shadow-sm border border-gray-200 mb-6" data-v-2cda8026${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-2cda8026${_scopeId}><h3 class="text-lg font-semibold text-gray-900 flex items-center" data-v-2cda8026${_scopeId}><svg class="h-5 w-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-2cda8026${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" data-v-2cda8026${_scopeId}></path></svg> Filters </h3></div><div class="p-6" data-v-2cda8026${_scopeId}><form class="space-y-4" data-v-2cda8026${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" data-v-2cda8026${_scopeId}><div class="space-y-2" data-v-2cda8026${_scopeId}><label class="text-sm font-medium text-gray-700" data-v-2cda8026${_scopeId}>Search</label><div class="relative" data-v-2cda8026${_scopeId}><input${ssrRenderAttr("value", filterForm.search)} type="text" placeholder="Search by title, content..." class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors" data-v-2cda8026${_scopeId}><svg class="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-2cda8026${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-2cda8026${_scopeId}></path></svg></div></div><div class="space-y-2" data-v-2cda8026${_scopeId}><label class="text-sm font-medium text-gray-700" data-v-2cda8026${_scopeId}>Status</label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors" data-v-2cda8026${_scopeId}><option value="all" data-v-2cda8026${ssrIncludeBooleanAttr(Array.isArray(filterForm.status) ? ssrLooseContain(filterForm.status, "all") : ssrLooseEqual(filterForm.status, "all")) ? " selected" : ""}${_scopeId}>All Status</option><option value="published" data-v-2cda8026${ssrIncludeBooleanAttr(Array.isArray(filterForm.status) ? ssrLooseContain(filterForm.status, "published") : ssrLooseEqual(filterForm.status, "published")) ? " selected" : ""}${_scopeId}>Published</option><option value="draft" data-v-2cda8026${ssrIncludeBooleanAttr(Array.isArray(filterForm.status) ? ssrLooseContain(filterForm.status, "draft") : ssrLooseEqual(filterForm.status, "draft")) ? " selected" : ""}${_scopeId}>Draft</option></select></div><div class="space-y-2" data-v-2cda8026${_scopeId}><label class="text-sm font-medium text-gray-700" data-v-2cda8026${_scopeId}>Category</label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors" data-v-2cda8026${_scopeId}><option value="all" data-v-2cda8026${ssrIncludeBooleanAttr(Array.isArray(filterForm.category) ? ssrLooseContain(filterForm.category, "all") : ssrLooseEqual(filterForm.category, "all")) ? " selected" : ""}${_scopeId}>All Categories</option><!--[-->`);
            ssrRenderList(__props.categories, (category) => {
              _push2(`<option${ssrRenderAttr("value", category.id)} data-v-2cda8026${ssrIncludeBooleanAttr(Array.isArray(filterForm.category) ? ssrLooseContain(filterForm.category, category.id) : ssrLooseEqual(filterForm.category, category.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(category.name)}</option>`);
            });
            _push2(`<!--]--></select></div><div class="space-y-2" data-v-2cda8026${_scopeId}><label class="text-sm font-medium text-gray-700" data-v-2cda8026${_scopeId}>Author</label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors" data-v-2cda8026${_scopeId}><option value="all" data-v-2cda8026${ssrIncludeBooleanAttr(Array.isArray(filterForm.author) ? ssrLooseContain(filterForm.author, "all") : ssrLooseEqual(filterForm.author, "all")) ? " selected" : ""}${_scopeId}>All Authors</option><!--[-->`);
            ssrRenderList(__props.authors, (author) => {
              _push2(`<option${ssrRenderAttr("value", author.id)} data-v-2cda8026${ssrIncludeBooleanAttr(Array.isArray(filterForm.author) ? ssrLooseContain(filterForm.author, author.id) : ssrLooseEqual(filterForm.author, author.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(author.name)}</option>`);
            });
            _push2(`<!--]--></select></div><div class="space-y-2" data-v-2cda8026${_scopeId}><label class="text-sm font-medium text-gray-700" data-v-2cda8026${_scopeId}>Date From</label><input${ssrRenderAttr("value", filterForm.date_from)} type="date" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors" data-v-2cda8026${_scopeId}></div><div class="space-y-2" data-v-2cda8026${_scopeId}><label class="text-sm font-medium text-gray-700" data-v-2cda8026${_scopeId}>Date To</label><input${ssrRenderAttr("value", filterForm.date_to)} type="date" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors" data-v-2cda8026${_scopeId}></div><div class="space-y-2" data-v-2cda8026${_scopeId}><label class="text-sm font-medium text-gray-700" data-v-2cda8026${_scopeId}>Per Page</label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors" data-v-2cda8026${_scopeId}><option value="10" data-v-2cda8026${ssrIncludeBooleanAttr(Array.isArray(filterForm.per_page) ? ssrLooseContain(filterForm.per_page, "10") : ssrLooseEqual(filterForm.per_page, "10")) ? " selected" : ""}${_scopeId}>10</option><option value="25" data-v-2cda8026${ssrIncludeBooleanAttr(Array.isArray(filterForm.per_page) ? ssrLooseContain(filterForm.per_page, "25") : ssrLooseEqual(filterForm.per_page, "25")) ? " selected" : ""}${_scopeId}>25</option><option value="50" data-v-2cda8026${ssrIncludeBooleanAttr(Array.isArray(filterForm.per_page) ? ssrLooseContain(filterForm.per_page, "50") : ssrLooseEqual(filterForm.per_page, "50")) ? " selected" : ""}${_scopeId}>50</option><option value="100" data-v-2cda8026${ssrIncludeBooleanAttr(Array.isArray(filterForm.per_page) ? ssrLooseContain(filterForm.per_page, "100") : ssrLooseEqual(filterForm.per_page, "100")) ? " selected" : ""}${_scopeId}>100</option></select></div><div class="space-y-2" data-v-2cda8026${_scopeId}><label class="text-sm font-medium text-gray-700" data-v-2cda8026${_scopeId}>Sort By</label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors" data-v-2cda8026${_scopeId}><option value="created_at" data-v-2cda8026${ssrIncludeBooleanAttr(Array.isArray(filterForm.sort_by) ? ssrLooseContain(filterForm.sort_by, "created_at") : ssrLooseEqual(filterForm.sort_by, "created_at")) ? " selected" : ""}${_scopeId}>Created Date</option><option value="title" data-v-2cda8026${ssrIncludeBooleanAttr(Array.isArray(filterForm.sort_by) ? ssrLooseContain(filterForm.sort_by, "title") : ssrLooseEqual(filterForm.sort_by, "title")) ? " selected" : ""}${_scopeId}>Title</option><option value="published_at" data-v-2cda8026${ssrIncludeBooleanAttr(Array.isArray(filterForm.sort_by) ? ssrLooseContain(filterForm.sort_by, "published_at") : ssrLooseEqual(filterForm.sort_by, "published_at")) ? " selected" : ""}${_scopeId}>Published Date</option><option value="status" data-v-2cda8026${ssrIncludeBooleanAttr(Array.isArray(filterForm.sort_by) ? ssrLooseContain(filterForm.sort_by, "status") : ssrLooseEqual(filterForm.sort_by, "status")) ? " selected" : ""}${_scopeId}>Status</option></select></div></div><div class="flex items-center justify-between pt-4 border-t border-gray-200" data-v-2cda8026${_scopeId}><div class="flex items-center space-x-2" data-v-2cda8026${_scopeId}><label class="text-sm font-medium text-gray-700" data-v-2cda8026${_scopeId}>Sort Order:</label><div class="flex rounded-lg border border-gray-300 overflow-hidden" data-v-2cda8026${_scopeId}><button type="button" class="${ssrRenderClass([
              "px-3 py-1 text-sm font-medium transition-colors",
              filterForm.sort_order === "asc" ? "bg-brand-red text-white" : "bg-white text-gray-700 hover:bg-gray-50"
            ])}" data-v-2cda8026${_scopeId}> Asc </button><button type="button" class="${ssrRenderClass([
              "px-3 py-1 text-sm font-medium transition-colors border-l border-gray-300",
              filterForm.sort_order === "desc" ? "bg-brand-red text-white" : "bg-white text-gray-700 hover:bg-gray-50"
            ])}" data-v-2cda8026${_scopeId}> Desc </button></div></div><div class="flex items-center space-x-3" data-v-2cda8026${_scopeId}><button type="button" class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors" data-v-2cda8026${_scopeId}> Clear Filters </button><button type="submit" class="px-4 py-2 text-sm font-medium text-white bg-brand-red hover:bg-red-600 rounded-lg transition-colors" data-v-2cda8026${_scopeId}> Apply Filters </button></div></div></form></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" data-v-2cda8026${_scopeId}><div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between" data-v-2cda8026${_scopeId}><div class="flex items-center space-x-4" data-v-2cda8026${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-2cda8026${_scopeId}>Blog Posts</h2><span class="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium" data-v-2cda8026${_scopeId}>${ssrInterpolate(__props.blogs.total)} ${ssrInterpolate(__props.blogs.total === 1 ? "post" : "posts")}</span></div>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.blogs.create"),
              class: "bg-brand-red text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-2cda8026${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" data-v-2cda8026${_scopeId2}></path></svg> Create New Post `);
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
            _push2(`</div><div class="overflow-x-auto" data-v-2cda8026${_scopeId}><table class="min-w-full divide-y divide-gray-200" data-v-2cda8026${_scopeId}><thead class="bg-gray-50" data-v-2cda8026${_scopeId}><tr data-v-2cda8026${_scopeId}><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-2cda8026${_scopeId}>Post</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-2cda8026${_scopeId}>Status</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-2cda8026${_scopeId}>Category</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-2cda8026${_scopeId}>Author</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-2cda8026${_scopeId}>Published</th><th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-2cda8026${_scopeId}>Actions</th></tr></thead><tbody class="bg-white divide-y divide-gray-200" data-v-2cda8026${_scopeId}><!--[-->`);
            ssrRenderList(__props.blogs.data, (blog) => {
              _push2(`<tr class="hover:bg-gray-50" data-v-2cda8026${_scopeId}><td class="px-6 py-4" data-v-2cda8026${_scopeId}><div class="flex items-start" data-v-2cda8026${_scopeId}><div class="h-12 w-12 bg-brand-red rounded-lg flex items-center justify-center flex-shrink-0" data-v-2cda8026${_scopeId}><svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-2cda8026${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-2cda8026${_scopeId}></path></svg></div><div class="ml-4 min-w-0 flex-1" data-v-2cda8026${_scopeId}><div class="text-sm font-medium text-gray-900 truncate" data-v-2cda8026${_scopeId}>${ssrInterpolate(blog.title)}</div><div class="text-xs text-gray-500" data-v-2cda8026${_scopeId}>${ssrInterpolate(blog.slug)}</div>`);
              if (blog.tags) {
                _push2(`<div class="mt-1 flex flex-wrap gap-1" data-v-2cda8026${_scopeId}><!--[-->`);
                ssrRenderList(blog.tags.split(", ").slice(0, 3), (tag) => {
                  _push2(`<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800" data-v-2cda8026${_scopeId}>${ssrInterpolate(tag)}</span>`);
                });
                _push2(`<!--]-->`);
                if (blog.tags.split(", ").length > 3) {
                  _push2(`<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600" data-v-2cda8026${_scopeId}> +${ssrInterpolate(blog.tags.split(", ").length - 3)} more </span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></td><td class="px-6 py-4 whitespace-nowrap" data-v-2cda8026${_scopeId}><span class="${ssrRenderClass([{
                "bg-green-100 text-green-800": blog.status === "published",
                "bg-yellow-100 text-yellow-800": blog.status === "draft"
              }, "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"])}" data-v-2cda8026${_scopeId}>${ssrInterpolate(blog.status === "published" ? "Published" : "Draft")}</span></td><td class="px-6 py-4 whitespace-nowrap" data-v-2cda8026${_scopeId}><div class="text-sm text-gray-900" data-v-2cda8026${_scopeId}>${ssrInterpolate(blog.category || "Uncategorized")}</div></td><td class="px-6 py-4 whitespace-nowrap" data-v-2cda8026${_scopeId}><div class="text-sm text-gray-900" data-v-2cda8026${_scopeId}>${ssrInterpolate(blog.author)}</div></td><td class="px-6 py-4 whitespace-nowrap" data-v-2cda8026${_scopeId}>`);
              if (blog.published_at) {
                _push2(`<div class="text-sm text-gray-900" data-v-2cda8026${_scopeId}>${ssrInterpolate(blog.published_at)}</div>`);
              } else {
                _push2(`<div class="text-xs text-gray-500" data-v-2cda8026${_scopeId}>${ssrInterpolate(blog.created_at_human)}</div>`);
              }
              _push2(`</td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium" data-v-2cda8026${_scopeId}><div class="flex items-center justify-end space-x-2" data-v-2cda8026${_scopeId}>`);
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
                href: _ctx.route("admin.blogs.preview", blog.id),
                target: "_blank",
                class: "text-green-600 hover:text-green-900 bg-green-50 hover:bg-green-100 px-3 py-1 rounded-md transition-colors duration-200"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Preview `);
                  } else {
                    return [
                      createTextVNode(" Preview ")
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
              _push2(`<button class="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition-colors duration-200" data-v-2cda8026${_scopeId}> Delete </button></div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table>`);
            if (!__props.blogs.data || __props.blogs.data.length === 0) {
              _push2(`<div class="text-center py-12" data-v-2cda8026${_scopeId}><svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-2cda8026${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-2cda8026${_scopeId}></path></svg><h3 class="mt-4 text-lg font-medium text-gray-900" data-v-2cda8026${_scopeId}>No blog posts found</h3><p class="mt-2 text-gray-600" data-v-2cda8026${_scopeId}>${ssrInterpolate(hasActiveFilters.value ? "Try adjusting your filters or" : "")} Get started by creating your first blog post.</p><div class="mt-6 space-x-3" data-v-2cda8026${_scopeId}>`);
              if (hasActiveFilters.value) {
                _push2(`<button class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" data-v-2cda8026${_scopeId}> Clear Filters </button>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("admin.blogs.create"),
                class: "inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-brand-red hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-2cda8026${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" data-v-2cda8026${_scopeId2}></path></svg> Create New Post `);
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
            if (__props.blogs.data && __props.blogs.data.length > 0) {
              _push2(`<div class="bg-white rounded-xl shadow-sm border border-gray-200 mt-6" data-v-2cda8026${_scopeId}><div class="px-6 py-4" data-v-2cda8026${_scopeId}><div class="flex items-center justify-between" data-v-2cda8026${_scopeId}><div class="flex-1 flex justify-between sm:hidden" data-v-2cda8026${_scopeId}>`);
              if (__props.blogs.prev_page_url) {
                _push2(ssrRenderComponent(unref(Link), {
                  href: __props.blogs.prev_page_url,
                  class: "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Previous `);
                    } else {
                      return [
                        createTextVNode(" Previous ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (__props.blogs.next_page_url) {
                _push2(ssrRenderComponent(unref(Link), {
                  href: __props.blogs.next_page_url,
                  class: "ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Next `);
                    } else {
                      return [
                        createTextVNode(" Next ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between" data-v-2cda8026${_scopeId}><div data-v-2cda8026${_scopeId}><p class="text-sm text-gray-700" data-v-2cda8026${_scopeId}> Showing <span class="font-medium" data-v-2cda8026${_scopeId}>${ssrInterpolate(__props.blogs.from || 0)}</span> to <span class="font-medium" data-v-2cda8026${_scopeId}>${ssrInterpolate(__props.blogs.to || 0)}</span> of <span class="font-medium" data-v-2cda8026${_scopeId}>${ssrInterpolate(__props.blogs.total)}</span> results </p></div><div data-v-2cda8026${_scopeId}><nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" data-v-2cda8026${_scopeId}>`);
              if (__props.blogs.prev_page_url) {
                _push2(ssrRenderComponent(unref(Link), {
                  href: __props.blogs.prev_page_url,
                  class: "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span class="sr-only" data-v-2cda8026${_scopeId2}>Previous</span><svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" data-v-2cda8026${_scopeId2}><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" data-v-2cda8026${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        createVNode("span", { class: "sr-only" }, "Previous"),
                        (openBlock(), createBlock("svg", {
                          class: "h-5 w-5",
                          fill: "currentColor",
                          viewBox: "0 0 20 20"
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                            "clip-rule": "evenodd"
                          })
                        ]))
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<span class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-gray-100 text-sm font-medium text-gray-400" data-v-2cda8026${_scopeId}><svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" data-v-2cda8026${_scopeId}><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" data-v-2cda8026${_scopeId}></path></svg></span>`);
              }
              _push2(`<!--[-->`);
              ssrRenderList(__props.blogs.links, (link, index) => {
                _push2(`<!--[-->`);
                if (link.url && link.label !== "« Previous" && link.label !== "Next »") {
                  _push2(ssrRenderComponent(unref(Link), {
                    href: link.url,
                    class: [
                      "relative inline-flex items-center px-4 py-2 border text-sm font-medium",
                      link.active ? "z-10 bg-brand-red border-brand-red text-white" : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                    ]
                  }, null, _parent2, _scopeId));
                } else if (link.label !== "« Previous" && link.label !== "Next »") {
                  _push2(`<span class="${ssrRenderClass([
                    "relative inline-flex items-center px-4 py-2 border text-sm font-medium",
                    link.active ? "z-10 bg-brand-red border-brand-red text-white" : "bg-gray-100 border-gray-300 text-gray-400"
                  ])}" data-v-2cda8026${_scopeId}>${link.label ?? ""}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]-->`);
              if (__props.blogs.next_page_url) {
                _push2(ssrRenderComponent(unref(Link), {
                  href: __props.blogs.next_page_url,
                  class: "relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span class="sr-only" data-v-2cda8026${_scopeId2}>Next</span><svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" data-v-2cda8026${_scopeId2}><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-v-2cda8026${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        createVNode("span", { class: "sr-only" }, "Next"),
                        (openBlock(), createBlock("svg", {
                          class: "h-5 w-5",
                          fill: "currentColor",
                          viewBox: "0 0 20 20"
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                            "clip-rule": "evenodd"
                          })
                        ]))
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<span class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-gray-100 text-sm font-medium text-gray-400" data-v-2cda8026${_scopeId}><svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" data-v-2cda8026${_scopeId}><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-v-2cda8026${_scopeId}></path></svg></span>`);
              }
              _push2(`</nav></div></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (showDeleteModal.value) {
              _push2(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-v-2cda8026${_scopeId}><div class="bg-white rounded-lg p-6 w-full max-w-md mx-4" data-v-2cda8026${_scopeId}><h3 class="text-lg font-semibold text-gray-900 mb-4" data-v-2cda8026${_scopeId}>Delete Blog Post</h3><p class="text-gray-600 mb-6" data-v-2cda8026${_scopeId}> Are you sure you want to delete <strong data-v-2cda8026${_scopeId}>${ssrInterpolate(selectedBlog.value?.title)}</strong>? This action cannot be undone. </p><div class="flex items-center justify-end space-x-3" data-v-2cda8026${_scopeId}><button type="button" class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200" data-v-2cda8026${_scopeId}> Cancel </button><button${ssrIncludeBooleanAttr(unref(deleteForm).processing) ? " disabled" : ""} class="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200 disabled:opacity-50" data-v-2cda8026${_scopeId}>${ssrInterpolate(unref(deleteForm).processing ? "Deleting..." : "Delete Post")}</button></div></div></div>`);
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
              createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200 mb-6" }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                  createVNode("h3", { class: "text-lg font-semibold text-gray-900 flex items-center" }, [
                    (openBlock(), createBlock("svg", {
                      class: "h-5 w-5 text-gray-600 mr-2",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z"
                      })
                    ])),
                    createTextVNode(" Filters ")
                  ])
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(applyFilters, ["prevent"]),
                    class: "space-y-4"
                  }, [
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" }, [
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode("label", { class: "text-sm font-medium text-gray-700" }, "Search"),
                        createVNode("div", { class: "relative" }, [
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => filterForm.search = $event,
                            type: "text",
                            placeholder: "Search by title, content...",
                            class: "w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors",
                            onKeyup: withKeys(applyFilters, ["enter"])
                          }, null, 40, ["onUpdate:modelValue"]), [
                            [vModelText, filterForm.search]
                          ]),
                          (openBlock(), createBlock("svg", {
                            class: "absolute left-3 top-2.5 h-5 w-5 text-gray-400",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            })
                          ]))
                        ])
                      ]),
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode("label", { class: "text-sm font-medium text-gray-700" }, "Status"),
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => filterForm.status = $event,
                          class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors"
                        }, [
                          createVNode("option", { value: "all" }, "All Status"),
                          createVNode("option", { value: "published" }, "Published"),
                          createVNode("option", { value: "draft" }, "Draft")
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, filterForm.status]
                        ])
                      ]),
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode("label", { class: "text-sm font-medium text-gray-700" }, "Category"),
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => filterForm.category = $event,
                          class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors"
                        }, [
                          createVNode("option", { value: "all" }, "All Categories"),
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                            return openBlock(), createBlock("option", {
                              key: category.id,
                              value: category.id
                            }, toDisplayString(category.name), 9, ["value"]);
                          }), 128))
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, filterForm.category]
                        ])
                      ]),
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode("label", { class: "text-sm font-medium text-gray-700" }, "Author"),
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => filterForm.author = $event,
                          class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors"
                        }, [
                          createVNode("option", { value: "all" }, "All Authors"),
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.authors, (author) => {
                            return openBlock(), createBlock("option", {
                              key: author.id,
                              value: author.id
                            }, toDisplayString(author.name), 9, ["value"]);
                          }), 128))
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, filterForm.author]
                        ])
                      ]),
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode("label", { class: "text-sm font-medium text-gray-700" }, "Date From"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => filterForm.date_from = $event,
                          type: "date",
                          class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, filterForm.date_from]
                        ])
                      ]),
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode("label", { class: "text-sm font-medium text-gray-700" }, "Date To"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => filterForm.date_to = $event,
                          type: "date",
                          class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, filterForm.date_to]
                        ])
                      ]),
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode("label", { class: "text-sm font-medium text-gray-700" }, "Per Page"),
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => filterForm.per_page = $event,
                          class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors"
                        }, [
                          createVNode("option", { value: "10" }, "10"),
                          createVNode("option", { value: "25" }, "25"),
                          createVNode("option", { value: "50" }, "50"),
                          createVNode("option", { value: "100" }, "100")
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, filterForm.per_page]
                        ])
                      ]),
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode("label", { class: "text-sm font-medium text-gray-700" }, "Sort By"),
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => filterForm.sort_by = $event,
                          class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors"
                        }, [
                          createVNode("option", { value: "created_at" }, "Created Date"),
                          createVNode("option", { value: "title" }, "Title"),
                          createVNode("option", { value: "published_at" }, "Published Date"),
                          createVNode("option", { value: "status" }, "Status")
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, filterForm.sort_by]
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex items-center justify-between pt-4 border-t border-gray-200" }, [
                      createVNode("div", { class: "flex items-center space-x-2" }, [
                        createVNode("label", { class: "text-sm font-medium text-gray-700" }, "Sort Order:"),
                        createVNode("div", { class: "flex rounded-lg border border-gray-300 overflow-hidden" }, [
                          createVNode("button", {
                            type: "button",
                            onClick: ($event) => filterForm.sort_order = "asc",
                            class: [
                              "px-3 py-1 text-sm font-medium transition-colors",
                              filterForm.sort_order === "asc" ? "bg-brand-red text-white" : "bg-white text-gray-700 hover:bg-gray-50"
                            ]
                          }, " Asc ", 10, ["onClick"]),
                          createVNode("button", {
                            type: "button",
                            onClick: ($event) => filterForm.sort_order = "desc",
                            class: [
                              "px-3 py-1 text-sm font-medium transition-colors border-l border-gray-300",
                              filterForm.sort_order === "desc" ? "bg-brand-red text-white" : "bg-white text-gray-700 hover:bg-gray-50"
                            ]
                          }, " Desc ", 10, ["onClick"])
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center space-x-3" }, [
                        createVNode("button", {
                          type: "button",
                          onClick: clearFilters,
                          class: "px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                        }, " Clear Filters "),
                        createVNode("button", {
                          type: "submit",
                          class: "px-4 py-2 text-sm font-medium text-white bg-brand-red hover:bg-red-600 rounded-lg transition-colors"
                        }, " Apply Filters ")
                      ])
                    ])
                  ], 32)
                ])
              ]),
              createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200 flex items-center justify-between" }, [
                  createVNode("div", { class: "flex items-center space-x-4" }, [
                    createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Blog Posts"),
                    createVNode("span", { class: "bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium" }, toDisplayString(__props.blogs.total) + " " + toDisplayString(__props.blogs.total === 1 ? "post" : "posts"), 1)
                  ]),
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
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.blogs.data, (blog) => {
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
                                href: _ctx.route("admin.blogs.preview", blog.id),
                                target: "_blank",
                                class: "text-green-600 hover:text-green-900 bg-green-50 hover:bg-green-100 px-3 py-1 rounded-md transition-colors duration-200"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Preview ")
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
                  !__props.blogs.data || __props.blogs.data.length === 0 ? (openBlock(), createBlock("div", {
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
                    createVNode("p", { class: "mt-2 text-gray-600" }, toDisplayString(hasActiveFilters.value ? "Try adjusting your filters or" : "") + " Get started by creating your first blog post.", 1),
                    createVNode("div", { class: "mt-6 space-x-3" }, [
                      hasActiveFilters.value ? (openBlock(), createBlock("button", {
                        key: 0,
                        onClick: clearFilters,
                        class: "inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      }, " Clear Filters ")) : createCommentVNode("", true),
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
              __props.blogs.data && __props.blogs.data.length > 0 ? (openBlock(), createBlock("div", {
                key: 2,
                class: "bg-white rounded-xl shadow-sm border border-gray-200 mt-6"
              }, [
                createVNode("div", { class: "px-6 py-4" }, [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "flex-1 flex justify-between sm:hidden" }, [
                      __props.blogs.prev_page_url ? (openBlock(), createBlock(unref(Link), {
                        key: 0,
                        href: __props.blogs.prev_page_url,
                        class: "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Previous ")
                        ]),
                        _: 1
                      }, 8, ["href"])) : createCommentVNode("", true),
                      __props.blogs.next_page_url ? (openBlock(), createBlock(unref(Link), {
                        key: 1,
                        href: __props.blogs.next_page_url,
                        class: "ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Next ")
                        ]),
                        _: 1
                      }, 8, ["href"])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "hidden sm:flex-1 sm:flex sm:items-center sm:justify-between" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "text-sm text-gray-700" }, [
                          createTextVNode(" Showing "),
                          createVNode("span", { class: "font-medium" }, toDisplayString(__props.blogs.from || 0), 1),
                          createTextVNode(" to "),
                          createVNode("span", { class: "font-medium" }, toDisplayString(__props.blogs.to || 0), 1),
                          createTextVNode(" of "),
                          createVNode("span", { class: "font-medium" }, toDisplayString(__props.blogs.total), 1),
                          createTextVNode(" results ")
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("nav", { class: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px" }, [
                          __props.blogs.prev_page_url ? (openBlock(), createBlock(unref(Link), {
                            key: 0,
                            href: __props.blogs.prev_page_url,
                            class: "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "sr-only" }, "Previous"),
                              (openBlock(), createBlock("svg", {
                                class: "h-5 w-5",
                                fill: "currentColor",
                                viewBox: "0 0 20 20"
                              }, [
                                createVNode("path", {
                                  "fill-rule": "evenodd",
                                  d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                                  "clip-rule": "evenodd"
                                })
                              ]))
                            ]),
                            _: 1
                          }, 8, ["href"])) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-gray-100 text-sm font-medium text-gray-400"
                          }, [
                            (openBlock(), createBlock("svg", {
                              class: "h-5 w-5",
                              fill: "currentColor",
                              viewBox: "0 0 20 20"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ]))
                          ])),
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.blogs.links, (link, index) => {
                            return openBlock(), createBlock(Fragment, { key: index }, [
                              link.url && link.label !== "« Previous" && link.label !== "Next »" ? (openBlock(), createBlock(unref(Link), {
                                key: 0,
                                href: link.url,
                                class: [
                                  "relative inline-flex items-center px-4 py-2 border text-sm font-medium",
                                  link.active ? "z-10 bg-brand-red border-brand-red text-white" : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                                ],
                                innerHTML: link.label
                              }, null, 8, ["href", "class", "innerHTML"])) : link.label !== "« Previous" && link.label !== "Next »" ? (openBlock(), createBlock("span", {
                                key: 1,
                                class: [
                                  "relative inline-flex items-center px-4 py-2 border text-sm font-medium",
                                  link.active ? "z-10 bg-brand-red border-brand-red text-white" : "bg-gray-100 border-gray-300 text-gray-400"
                                ],
                                innerHTML: link.label
                              }, null, 10, ["innerHTML"])) : createCommentVNode("", true)
                            ], 64);
                          }), 128)),
                          __props.blogs.next_page_url ? (openBlock(), createBlock(unref(Link), {
                            key: 2,
                            href: __props.blogs.next_page_url,
                            class: "relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "sr-only" }, "Next"),
                              (openBlock(), createBlock("svg", {
                                class: "h-5 w-5",
                                fill: "currentColor",
                                viewBox: "0 0 20 20"
                              }, [
                                createVNode("path", {
                                  "fill-rule": "evenodd",
                                  d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                                  "clip-rule": "evenodd"
                                })
                              ]))
                            ]),
                            _: 1
                          }, 8, ["href"])) : (openBlock(), createBlock("span", {
                            key: 3,
                            class: "relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-gray-100 text-sm font-medium text-gray-400"
                          }, [
                            (openBlock(), createBlock("svg", {
                              class: "h-5 w-5",
                              fill: "currentColor",
                              viewBox: "0 0 20 20"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ]))
                          ]))
                        ])
                      ])
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true),
              showDeleteModal.value ? (openBlock(), createBlock("div", {
                key: 3,
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
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2cda8026"]]);
export {
  Index as default
};
