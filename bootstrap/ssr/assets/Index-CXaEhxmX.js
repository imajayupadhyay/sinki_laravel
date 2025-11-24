import { reactive, ref, computed, watch, mergeProps, withCtx, unref, createBlock, createTextVNode, openBlock, createVNode, createCommentVNode, toDisplayString, withModifiers, withDirectives, vModelText, vModelSelect, Fragment, renderList, Teleport, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderTeleport } from "vue/server-renderer";
import { Head, Link, router } from "@inertiajs/vue3";
import { A as AdminLayout } from "./AdminLayout-CunXkTIM.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    servicePages: {
      type: Object,
      default: () => ({ data: [], total: 0 })
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
      featured: props.filters.featured || "all",
      date_from: props.filters.date_from || "",
      date_to: props.filters.date_to || "",
      per_page: props.filters.per_page || "10",
      sort_by: props.filters.sort_by || "sort_order",
      sort_order: props.filters.sort_order || "asc"
    });
    const showCreateModal = ref(false);
    const showDeleteModal = ref(false);
    const createLoading = ref(false);
    const deleteLoading = ref(false);
    const createForm = reactive({
      title: "",
      subtitle: "",
      description: "",
      status: "draft"
    });
    const createErrors = ref({});
    const pageToDelete = ref(null);
    const hasActiveFilters = computed(() => {
      return filterForm.search !== "" || filterForm.status !== "all" || filterForm.featured !== "all" || filterForm.date_from !== "" || filterForm.date_to !== "";
    });
    const publishedCount = computed(() => {
      return props.servicePages.data?.filter((page) => page.status === "published").length || 0;
    });
    const draftCount = computed(() => {
      return props.servicePages.data?.filter((page) => page.status === "draft").length || 0;
    });
    const applyFilters = () => {
      const params = {};
      if (filterForm.search) params.search = filterForm.search;
      if (filterForm.status !== "all") params.status = filterForm.status;
      if (filterForm.featured !== "all") params.featured = filterForm.featured;
      if (filterForm.date_from) params.date_from = filterForm.date_from;
      if (filterForm.date_to) params.date_to = filterForm.date_to;
      if (filterForm.per_page !== "10") params.per_page = filterForm.per_page;
      if (filterForm.sort_by !== "sort_order") params.sort_by = filterForm.sort_by;
      if (filterForm.sort_order !== "asc") params.sort_order = filterForm.sort_order;
      router.visit(route("admin.service-pages.index"), {
        method: "get",
        data: params,
        preserveState: true
      });
    };
    const clearFilters = () => {
      filterForm.search = "";
      filterForm.status = "all";
      filterForm.featured = "all";
      filterForm.date_from = "";
      filterForm.date_to = "";
      filterForm.per_page = "10";
      filterForm.sort_by = "sort_order";
      filterForm.sort_order = "asc";
      router.visit(route("admin.service-pages.index"), {
        method: "get",
        preserveState: true
      });
    };
    let searchTimeout;
    watch(() => filterForm.search, (newValue) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        if (newValue !== props.filters.search) {
          applyFilters();
        }
      }, 500);
    });
    watch(() => filterForm.per_page, () => {
      applyFilters();
    });
    const formatDate = (date) => {
      return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    };
    const toggleFeatured = (page) => {
      router.post(route("admin.service-pages.toggle-featured", page.id), {}, {
        preserveState: true,
        preserveScroll: true
      });
    };
    const openCreateModal = () => {
      showCreateModal.value = true;
      resetCreateForm();
    };
    const closeCreateModal = () => {
      showCreateModal.value = false;
      resetCreateForm();
    };
    const resetCreateForm = () => {
      createForm.title = "";
      createForm.subtitle = "";
      createForm.description = "";
      createForm.status = "draft";
      createErrors.value = {};
    };
    const submitCreate = () => {
      createLoading.value = true;
      createErrors.value = {};
      router.post(route("admin.service-pages.store"), createForm, {
        onSuccess: () => {
          closeCreateModal();
          createLoading.value = false;
        },
        onError: (errors) => {
          createErrors.value = errors;
          createLoading.value = false;
        }
      });
    };
    const openDeleteModal = (page) => {
      pageToDelete.value = page;
      showDeleteModal.value = true;
    };
    const closeDeleteModal = () => {
      showDeleteModal.value = false;
      pageToDelete.value = null;
    };
    const confirmDelete = () => {
      if (!pageToDelete.value) return;
      deleteLoading.value = true;
      router.delete(route("admin.service-pages.destroy", pageToDelete.value.id), {
        onSuccess: () => {
          closeDeleteModal();
          deleteLoading.value = false;
        },
        onError: () => {
          deleteLoading.value = false;
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AdminLayout, mergeProps({
        "page-title": "Service Pages Management",
        "page-subtitle": "Manage all service pages, content and sections"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Service Pages - Admin Dashboard" }, null, _parent2, _scopeId));
            if (_ctx.$page.props.flash?.success) {
              _push2(`<div class="mb-6 bg-green-50 border border-green-200 rounded-lg p-4" data-v-e7bd1cfe${_scopeId}><div class="flex" data-v-e7bd1cfe${_scopeId}><svg class="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e7bd1cfe${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-e7bd1cfe${_scopeId}></path></svg><p class="ml-3 text-sm text-green-800" data-v-e7bd1cfe${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.success)}</p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.flash?.error) {
              _push2(`<div class="mb-6 bg-red-50 border border-red-200 rounded-lg p-4" data-v-e7bd1cfe${_scopeId}><div class="flex" data-v-e7bd1cfe${_scopeId}><svg class="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e7bd1cfe${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-e7bd1cfe${_scopeId}></path></svg><p class="ml-3 text-sm text-red-800" data-v-e7bd1cfe${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.error)}</p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="bg-white rounded-xl shadow-sm border border-gray-200 mb-6" data-v-e7bd1cfe${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-e7bd1cfe${_scopeId}><h3 class="text-lg font-semibold text-gray-900 flex items-center" data-v-e7bd1cfe${_scopeId}><svg class="h-5 w-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e7bd1cfe${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" data-v-e7bd1cfe${_scopeId}></path></svg> Filters </h3></div><div class="p-6" data-v-e7bd1cfe${_scopeId}><form class="space-y-4" data-v-e7bd1cfe${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" data-v-e7bd1cfe${_scopeId}><div class="space-y-2" data-v-e7bd1cfe${_scopeId}><label class="text-sm font-medium text-gray-700" data-v-e7bd1cfe${_scopeId}>Search</label><div class="relative" data-v-e7bd1cfe${_scopeId}><input${ssrRenderAttr("value", filterForm.search)} type="text" placeholder="Search by title, subtitle..." class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors" data-v-e7bd1cfe${_scopeId}><svg class="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e7bd1cfe${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-e7bd1cfe${_scopeId}></path></svg></div></div><div class="space-y-2" data-v-e7bd1cfe${_scopeId}><label class="text-sm font-medium text-gray-700" data-v-e7bd1cfe${_scopeId}>Status</label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors" data-v-e7bd1cfe${_scopeId}><option value="all" data-v-e7bd1cfe${ssrIncludeBooleanAttr(Array.isArray(filterForm.status) ? ssrLooseContain(filterForm.status, "all") : ssrLooseEqual(filterForm.status, "all")) ? " selected" : ""}${_scopeId}>All Status</option><option value="published" data-v-e7bd1cfe${ssrIncludeBooleanAttr(Array.isArray(filterForm.status) ? ssrLooseContain(filterForm.status, "published") : ssrLooseEqual(filterForm.status, "published")) ? " selected" : ""}${_scopeId}>Published</option><option value="draft" data-v-e7bd1cfe${ssrIncludeBooleanAttr(Array.isArray(filterForm.status) ? ssrLooseContain(filterForm.status, "draft") : ssrLooseEqual(filterForm.status, "draft")) ? " selected" : ""}${_scopeId}>Draft</option></select></div><div class="space-y-2" data-v-e7bd1cfe${_scopeId}><label class="text-sm font-medium text-gray-700" data-v-e7bd1cfe${_scopeId}>Featured</label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors" data-v-e7bd1cfe${_scopeId}><option value="all" data-v-e7bd1cfe${ssrIncludeBooleanAttr(Array.isArray(filterForm.featured) ? ssrLooseContain(filterForm.featured, "all") : ssrLooseEqual(filterForm.featured, "all")) ? " selected" : ""}${_scopeId}>All Pages</option><option value="featured" data-v-e7bd1cfe${ssrIncludeBooleanAttr(Array.isArray(filterForm.featured) ? ssrLooseContain(filterForm.featured, "featured") : ssrLooseEqual(filterForm.featured, "featured")) ? " selected" : ""}${_scopeId}>Featured</option><option value="normal" data-v-e7bd1cfe${ssrIncludeBooleanAttr(Array.isArray(filterForm.featured) ? ssrLooseContain(filterForm.featured, "normal") : ssrLooseEqual(filterForm.featured, "normal")) ? " selected" : ""}${_scopeId}>Normal</option></select></div><div class="space-y-2" data-v-e7bd1cfe${_scopeId}><label class="text-sm font-medium text-gray-700" data-v-e7bd1cfe${_scopeId}>Date From</label><input${ssrRenderAttr("value", filterForm.date_from)} type="date" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors" data-v-e7bd1cfe${_scopeId}></div><div class="space-y-2" data-v-e7bd1cfe${_scopeId}><label class="text-sm font-medium text-gray-700" data-v-e7bd1cfe${_scopeId}>Date To</label><input${ssrRenderAttr("value", filterForm.date_to)} type="date" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors" data-v-e7bd1cfe${_scopeId}></div><div class="space-y-2" data-v-e7bd1cfe${_scopeId}><label class="text-sm font-medium text-gray-700" data-v-e7bd1cfe${_scopeId}>Per Page</label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors" data-v-e7bd1cfe${_scopeId}><option value="10" data-v-e7bd1cfe${ssrIncludeBooleanAttr(Array.isArray(filterForm.per_page) ? ssrLooseContain(filterForm.per_page, "10") : ssrLooseEqual(filterForm.per_page, "10")) ? " selected" : ""}${_scopeId}>10</option><option value="25" data-v-e7bd1cfe${ssrIncludeBooleanAttr(Array.isArray(filterForm.per_page) ? ssrLooseContain(filterForm.per_page, "25") : ssrLooseEqual(filterForm.per_page, "25")) ? " selected" : ""}${_scopeId}>25</option><option value="50" data-v-e7bd1cfe${ssrIncludeBooleanAttr(Array.isArray(filterForm.per_page) ? ssrLooseContain(filterForm.per_page, "50") : ssrLooseEqual(filterForm.per_page, "50")) ? " selected" : ""}${_scopeId}>50</option><option value="100" data-v-e7bd1cfe${ssrIncludeBooleanAttr(Array.isArray(filterForm.per_page) ? ssrLooseContain(filterForm.per_page, "100") : ssrLooseEqual(filterForm.per_page, "100")) ? " selected" : ""}${_scopeId}>100</option></select></div><div class="space-y-2" data-v-e7bd1cfe${_scopeId}><label class="text-sm font-medium text-gray-700" data-v-e7bd1cfe${_scopeId}>Sort By</label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors" data-v-e7bd1cfe${_scopeId}><option value="sort_order" data-v-e7bd1cfe${ssrIncludeBooleanAttr(Array.isArray(filterForm.sort_by) ? ssrLooseContain(filterForm.sort_by, "sort_order") : ssrLooseEqual(filterForm.sort_by, "sort_order")) ? " selected" : ""}${_scopeId}>Sort Order</option><option value="created_at" data-v-e7bd1cfe${ssrIncludeBooleanAttr(Array.isArray(filterForm.sort_by) ? ssrLooseContain(filterForm.sort_by, "created_at") : ssrLooseEqual(filterForm.sort_by, "created_at")) ? " selected" : ""}${_scopeId}>Created Date</option><option value="title" data-v-e7bd1cfe${ssrIncludeBooleanAttr(Array.isArray(filterForm.sort_by) ? ssrLooseContain(filterForm.sort_by, "title") : ssrLooseEqual(filterForm.sort_by, "title")) ? " selected" : ""}${_scopeId}>Title</option><option value="status" data-v-e7bd1cfe${ssrIncludeBooleanAttr(Array.isArray(filterForm.sort_by) ? ssrLooseContain(filterForm.sort_by, "status") : ssrLooseEqual(filterForm.sort_by, "status")) ? " selected" : ""}${_scopeId}>Status</option></select></div></div><div class="flex items-center justify-between pt-4 border-t border-gray-200" data-v-e7bd1cfe${_scopeId}><div class="flex items-center space-x-2" data-v-e7bd1cfe${_scopeId}><label class="text-sm font-medium text-gray-700" data-v-e7bd1cfe${_scopeId}>Sort Order:</label><div class="flex rounded-lg border border-gray-300 overflow-hidden" data-v-e7bd1cfe${_scopeId}><button type="button" class="${ssrRenderClass([
              "px-3 py-1 text-sm font-medium transition-colors",
              filterForm.sort_order === "asc" ? "bg-brand-red text-white" : "bg-white text-gray-700 hover:bg-gray-50"
            ])}" data-v-e7bd1cfe${_scopeId}> Asc </button><button type="button" class="${ssrRenderClass([
              "px-3 py-1 text-sm font-medium transition-colors border-l border-gray-300",
              filterForm.sort_order === "desc" ? "bg-brand-red text-white" : "bg-white text-gray-700 hover:bg-gray-50"
            ])}" data-v-e7bd1cfe${_scopeId}> Desc </button></div></div><div class="flex items-center space-x-3" data-v-e7bd1cfe${_scopeId}><button type="button" class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors" data-v-e7bd1cfe${_scopeId}> Clear Filters </button><button type="submit" class="px-4 py-2 text-sm font-medium text-white bg-brand-red hover:bg-red-600 rounded-lg transition-colors" data-v-e7bd1cfe${_scopeId}> Apply Filters </button></div></div></form></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-v-e7bd1cfe${_scopeId}><div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6" data-v-e7bd1cfe${_scopeId}><div class="flex items-center" data-v-e7bd1cfe${_scopeId}><div class="p-2 bg-blue-100 rounded-lg" data-v-e7bd1cfe${_scopeId}><svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e7bd1cfe${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-e7bd1cfe${_scopeId}></path></svg></div><div class="ml-4" data-v-e7bd1cfe${_scopeId}><p class="text-sm font-medium text-gray-600" data-v-e7bd1cfe${_scopeId}>Total Pages</p><p class="text-2xl font-bold text-gray-900" data-v-e7bd1cfe${_scopeId}>${ssrInterpolate(__props.servicePages.total)}</p></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6" data-v-e7bd1cfe${_scopeId}><div class="flex items-center" data-v-e7bd1cfe${_scopeId}><div class="p-2 bg-green-100 rounded-lg" data-v-e7bd1cfe${_scopeId}><svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e7bd1cfe${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-v-e7bd1cfe${_scopeId}></path></svg></div><div class="ml-4" data-v-e7bd1cfe${_scopeId}><p class="text-sm font-medium text-gray-600" data-v-e7bd1cfe${_scopeId}>Published</p><p class="text-2xl font-bold text-gray-900" data-v-e7bd1cfe${_scopeId}>${ssrInterpolate(publishedCount.value)}</p></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6" data-v-e7bd1cfe${_scopeId}><div class="flex items-center" data-v-e7bd1cfe${_scopeId}><div class="p-2 bg-yellow-100 rounded-lg" data-v-e7bd1cfe${_scopeId}><svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e7bd1cfe${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" data-v-e7bd1cfe${_scopeId}></path></svg></div><div class="ml-4" data-v-e7bd1cfe${_scopeId}><p class="text-sm font-medium text-gray-600" data-v-e7bd1cfe${_scopeId}>Drafts</p><p class="text-2xl font-bold text-gray-900" data-v-e7bd1cfe${_scopeId}>${ssrInterpolate(draftCount.value)}</p></div></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" data-v-e7bd1cfe${_scopeId}><div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between" data-v-e7bd1cfe${_scopeId}><div class="flex items-center space-x-4" data-v-e7bd1cfe${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-e7bd1cfe${_scopeId}>Service Pages</h2><span class="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium" data-v-e7bd1cfe${_scopeId}>${ssrInterpolate(__props.servicePages.total)} ${ssrInterpolate(__props.servicePages.total === 1 ? "page" : "pages")}</span></div><button class="bg-brand-red text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center" data-v-e7bd1cfe${_scopeId}><svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e7bd1cfe${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" data-v-e7bd1cfe${_scopeId}></path></svg> Create New Page </button></div>`);
            if (!__props.servicePages.data || __props.servicePages.data.length === 0) {
              _push2(`<div class="text-center py-12" data-v-e7bd1cfe${_scopeId}><svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e7bd1cfe${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-e7bd1cfe${_scopeId}></path></svg><p class="mt-4 text-lg text-gray-600" data-v-e7bd1cfe${_scopeId}>No service pages found</p><p class="text-gray-500" data-v-e7bd1cfe${_scopeId}>${ssrInterpolate(hasActiveFilters.value ? "Try adjusting your filters or" : "")} Get started by creating your first service page.</p><div class="mt-4 space-x-3" data-v-e7bd1cfe${_scopeId}>`);
              if (hasActiveFilters.value) {
                _push2(`<button class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" data-v-e7bd1cfe${_scopeId}> Clear Filters </button>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("admin.service-pages.create"),
                class: "inline-flex items-center px-4 py-2 bg-brand-red hover:bg-red-600 text-white font-medium rounded-lg transition-colors"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e7bd1cfe${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" data-v-e7bd1cfe${_scopeId2}></path></svg> Create Service Page `);
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
                      createTextVNode(" Create Service Page ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<div class="overflow-x-auto" data-v-e7bd1cfe${_scopeId}><table class="min-w-full divide-y divide-gray-200" data-v-e7bd1cfe${_scopeId}><thead class="bg-gray-50" data-v-e7bd1cfe${_scopeId}><tr data-v-e7bd1cfe${_scopeId}><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-e7bd1cfe${_scopeId}>Page</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-e7bd1cfe${_scopeId}>Status</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-e7bd1cfe${_scopeId}>Featured</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-e7bd1cfe${_scopeId}>Sort Order</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-e7bd1cfe${_scopeId}>Created</th><th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-e7bd1cfe${_scopeId}>Actions</th></tr></thead><tbody class="bg-white divide-y divide-gray-200" data-v-e7bd1cfe${_scopeId}><!--[-->`);
              ssrRenderList(__props.servicePages.data, (page) => {
                _push2(`<tr class="hover:bg-gray-50" data-v-e7bd1cfe${_scopeId}><td class="px-6 py-4 whitespace-nowrap" data-v-e7bd1cfe${_scopeId}><div data-v-e7bd1cfe${_scopeId}><div class="text-sm font-medium text-gray-900" data-v-e7bd1cfe${_scopeId}>${ssrInterpolate(page.title)}</div><div class="text-sm text-gray-500" data-v-e7bd1cfe${_scopeId}>/services/${ssrInterpolate(page.slug)}</div></div></td><td class="px-6 py-4 whitespace-nowrap" data-v-e7bd1cfe${_scopeId}><span class="${ssrRenderClass([{
                  "bg-green-100 text-green-800": page.status === "published",
                  "bg-yellow-100 text-yellow-800": page.status === "draft"
                }, "inline-flex px-2 py-1 text-xs font-semibold rounded-full"])}" data-v-e7bd1cfe${_scopeId}>${ssrInterpolate(page.status)}</span></td><td class="px-6 py-4 whitespace-nowrap" data-v-e7bd1cfe${_scopeId}><button class="${ssrRenderClass([{
                  "bg-blue-100 text-blue-800": page.is_featured,
                  "bg-gray-100 text-gray-800": !page.is_featured
                }, "inline-flex px-2 py-1 text-xs font-semibold rounded-full cursor-pointer hover:opacity-80"])}" data-v-e7bd1cfe${_scopeId}>${ssrInterpolate(page.is_featured ? "Featured" : "Normal")}</button></td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900" data-v-e7bd1cfe${_scopeId}>${ssrInterpolate(page.sort_order)}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500" data-v-e7bd1cfe${_scopeId}>${ssrInterpolate(formatDate(page.created_at))}</td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium" data-v-e7bd1cfe${_scopeId}><div class="flex items-center justify-end space-x-2" data-v-e7bd1cfe${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Link), {
                  href: _ctx.route("admin.service-pages.preview", page.id),
                  class: "text-blue-600 hover:text-blue-900",
                  target: "_blank"
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
                  href: _ctx.route("admin.service-pages.edit", page.id),
                  class: "text-indigo-600 hover:text-indigo-900"
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
                _push2(`<button class="text-red-600 hover:text-red-900" data-v-e7bd1cfe${_scopeId}> Delete </button></div></td></tr>`);
              });
              _push2(`<!--]--></tbody></table></div>`);
            }
            _push2(`</div>`);
            if (__props.servicePages.data && __props.servicePages.data.length > 0) {
              _push2(`<div class="bg-white rounded-xl shadow-sm border border-gray-200 mt-6" data-v-e7bd1cfe${_scopeId}><div class="px-6 py-4" data-v-e7bd1cfe${_scopeId}><div class="flex items-center justify-between" data-v-e7bd1cfe${_scopeId}><div class="flex-1 flex justify-between sm:hidden" data-v-e7bd1cfe${_scopeId}>`);
              if (__props.servicePages.prev_page_url) {
                _push2(ssrRenderComponent(unref(Link), {
                  href: __props.servicePages.prev_page_url,
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
              if (__props.servicePages.next_page_url) {
                _push2(ssrRenderComponent(unref(Link), {
                  href: __props.servicePages.next_page_url,
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
              _push2(`</div><div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between" data-v-e7bd1cfe${_scopeId}><div data-v-e7bd1cfe${_scopeId}><p class="text-sm text-gray-700" data-v-e7bd1cfe${_scopeId}> Showing <span class="font-medium" data-v-e7bd1cfe${_scopeId}>${ssrInterpolate(__props.servicePages.from || 0)}</span> to <span class="font-medium" data-v-e7bd1cfe${_scopeId}>${ssrInterpolate(__props.servicePages.to || 0)}</span> of <span class="font-medium" data-v-e7bd1cfe${_scopeId}>${ssrInterpolate(__props.servicePages.total)}</span> results </p></div><div data-v-e7bd1cfe${_scopeId}><nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" data-v-e7bd1cfe${_scopeId}>`);
              if (__props.servicePages.prev_page_url) {
                _push2(ssrRenderComponent(unref(Link), {
                  href: __props.servicePages.prev_page_url,
                  class: "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span class="sr-only" data-v-e7bd1cfe${_scopeId2}>Previous</span><svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" data-v-e7bd1cfe${_scopeId2}><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" data-v-e7bd1cfe${_scopeId2}></path></svg>`);
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
                _push2(`<span class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-gray-100 text-sm font-medium text-gray-400" data-v-e7bd1cfe${_scopeId}><svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" data-v-e7bd1cfe${_scopeId}><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" data-v-e7bd1cfe${_scopeId}></path></svg></span>`);
              }
              _push2(`<!--[-->`);
              ssrRenderList(__props.servicePages.links, (link, index) => {
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
                  ])}" data-v-e7bd1cfe${_scopeId}>${link.label ?? ""}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]-->`);
              if (__props.servicePages.next_page_url) {
                _push2(ssrRenderComponent(unref(Link), {
                  href: __props.servicePages.next_page_url,
                  class: "relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span class="sr-only" data-v-e7bd1cfe${_scopeId2}>Next</span><svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" data-v-e7bd1cfe${_scopeId2}><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-v-e7bd1cfe${_scopeId2}></path></svg>`);
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
                _push2(`<span class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-gray-100 text-sm font-medium text-gray-400" data-v-e7bd1cfe${_scopeId}><svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" data-v-e7bd1cfe${_scopeId}><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-v-e7bd1cfe${_scopeId}></path></svg></span>`);
              }
              _push2(`</nav></div></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderTeleport(_push2, (_push3) => {
              if (showCreateModal.value) {
                _push3(`<div class="fixed inset-0 z-50 overflow-y-auto" data-v-e7bd1cfe${_scopeId}><div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" data-v-e7bd1cfe${_scopeId}><div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" data-v-e7bd1cfe${_scopeId}></div><div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" data-v-e7bd1cfe${_scopeId}><div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" data-v-e7bd1cfe${_scopeId}><div class="sm:flex sm:items-start" data-v-e7bd1cfe${_scopeId}><div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" data-v-e7bd1cfe${_scopeId}><h3 class="text-lg leading-6 font-medium text-gray-900 mb-4" data-v-e7bd1cfe${_scopeId}>Create New Service Page</h3><form data-v-e7bd1cfe${_scopeId}><div class="space-y-4" data-v-e7bd1cfe${_scopeId}><div data-v-e7bd1cfe${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1" data-v-e7bd1cfe${_scopeId}>Title</label><input${ssrRenderAttr("value", createForm.title)} type="text" class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent" placeholder="Enter page title" required data-v-e7bd1cfe${_scopeId}>`);
                if (createErrors.value.title) {
                  _push3(`<p class="mt-1 text-sm text-red-600" data-v-e7bd1cfe${_scopeId}>${ssrInterpolate(createErrors.value.title)}</p>`);
                } else {
                  _push3(`<!---->`);
                }
                _push3(`</div><div data-v-e7bd1cfe${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1" data-v-e7bd1cfe${_scopeId}>Subtitle</label><input${ssrRenderAttr("value", createForm.subtitle)} type="text" class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent" placeholder="Enter page subtitle" required data-v-e7bd1cfe${_scopeId}>`);
                if (createErrors.value.subtitle) {
                  _push3(`<p class="mt-1 text-sm text-red-600" data-v-e7bd1cfe${_scopeId}>${ssrInterpolate(createErrors.value.subtitle)}</p>`);
                } else {
                  _push3(`<!---->`);
                }
                _push3(`</div><div data-v-e7bd1cfe${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1" data-v-e7bd1cfe${_scopeId}>Description</label><textarea rows="3" class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent" placeholder="Enter page description" data-v-e7bd1cfe${_scopeId}>${ssrInterpolate(createForm.description)}</textarea></div><div data-v-e7bd1cfe${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1" data-v-e7bd1cfe${_scopeId}>Status</label><select class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent" data-v-e7bd1cfe${_scopeId}><option value="draft" data-v-e7bd1cfe${ssrIncludeBooleanAttr(Array.isArray(createForm.status) ? ssrLooseContain(createForm.status, "draft") : ssrLooseEqual(createForm.status, "draft")) ? " selected" : ""}${_scopeId}>Draft</option><option value="published" data-v-e7bd1cfe${ssrIncludeBooleanAttr(Array.isArray(createForm.status) ? ssrLooseContain(createForm.status, "published") : ssrLooseEqual(createForm.status, "published")) ? " selected" : ""}${_scopeId}>Published</option></select></div></div></form></div></div></div><div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" data-v-e7bd1cfe${_scopeId}><button${ssrIncludeBooleanAttr(createLoading.value) ? " disabled" : ""} class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-brand-red text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50" data-v-e7bd1cfe${_scopeId}>`);
                if (createLoading.value) {
                  _push3(`<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" data-v-e7bd1cfe${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-e7bd1cfe${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-e7bd1cfe${_scopeId}></path></svg>`);
                } else {
                  _push3(`<!---->`);
                }
                _push3(` ${ssrInterpolate(createLoading.value ? "Creating..." : "Create Page")}</button><button class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" data-v-e7bd1cfe${_scopeId}> Cancel </button></div></div></div></div>`);
              } else {
                _push3(`<!---->`);
              }
            }, "body", false, _parent2);
            ssrRenderTeleport(_push2, (_push3) => {
              if (showDeleteModal.value) {
                _push3(`<div class="fixed inset-0 z-50 overflow-y-auto" data-v-e7bd1cfe${_scopeId}><div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" data-v-e7bd1cfe${_scopeId}><div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" data-v-e7bd1cfe${_scopeId}></div><div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" data-v-e7bd1cfe${_scopeId}><div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" data-v-e7bd1cfe${_scopeId}><div class="sm:flex sm:items-start" data-v-e7bd1cfe${_scopeId}><div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10" data-v-e7bd1cfe${_scopeId}><svg class="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e7bd1cfe${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" data-v-e7bd1cfe${_scopeId}></path></svg></div><div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left" data-v-e7bd1cfe${_scopeId}><h3 class="text-lg leading-6 font-medium text-gray-900" data-v-e7bd1cfe${_scopeId}>Delete Service Page</h3><div class="mt-2" data-v-e7bd1cfe${_scopeId}><p class="text-sm text-gray-500" data-v-e7bd1cfe${_scopeId}> Are you sure you want to delete &quot;<strong data-v-e7bd1cfe${_scopeId}>${ssrInterpolate(pageToDelete.value?.title)}</strong>&quot;? This action cannot be undone. </p></div></div></div></div><div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" data-v-e7bd1cfe${_scopeId}><button${ssrIncludeBooleanAttr(deleteLoading.value) ? " disabled" : ""} class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50" data-v-e7bd1cfe${_scopeId}>`);
                if (deleteLoading.value) {
                  _push3(`<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" data-v-e7bd1cfe${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-e7bd1cfe${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-e7bd1cfe${_scopeId}></path></svg>`);
                } else {
                  _push3(`<!---->`);
                }
                _push3(` ${ssrInterpolate(deleteLoading.value ? "Deleting..." : "Delete")}</button><button class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" data-v-e7bd1cfe${_scopeId}> Cancel </button></div></div></div></div>`);
              } else {
                _push3(`<!---->`);
              }
            }, "body", false, _parent2);
          } else {
            return [
              createVNode(unref(Head), { title: "Service Pages - Admin Dashboard" }),
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
                            placeholder: "Search by title, subtitle...",
                            class: "w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors"
                          }, null, 8, ["onUpdate:modelValue"]), [
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
                        createVNode("label", { class: "text-sm font-medium text-gray-700" }, "Featured"),
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => filterForm.featured = $event,
                          class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors"
                        }, [
                          createVNode("option", { value: "all" }, "All Pages"),
                          createVNode("option", { value: "featured" }, "Featured"),
                          createVNode("option", { value: "normal" }, "Normal")
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, filterForm.featured]
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
                          createVNode("option", { value: "sort_order" }, "Sort Order"),
                          createVNode("option", { value: "created_at" }, "Created Date"),
                          createVNode("option", { value: "title" }, "Title"),
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
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" }, [
                createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6" }, [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("div", { class: "p-2 bg-blue-100 rounded-lg" }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-6 h-6 text-blue-600",
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
                    createVNode("div", { class: "ml-4" }, [
                      createVNode("p", { class: "text-sm font-medium text-gray-600" }, "Total Pages"),
                      createVNode("p", { class: "text-2xl font-bold text-gray-900" }, toDisplayString(__props.servicePages.total), 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6" }, [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("div", { class: "p-2 bg-green-100 rounded-lg" }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-6 h-6 text-green-600",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M5 13l4 4L19 7"
                        })
                      ]))
                    ]),
                    createVNode("div", { class: "ml-4" }, [
                      createVNode("p", { class: "text-sm font-medium text-gray-600" }, "Published"),
                      createVNode("p", { class: "text-2xl font-bold text-gray-900" }, toDisplayString(publishedCount.value), 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6" }, [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("div", { class: "p-2 bg-yellow-100 rounded-lg" }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-6 h-6 text-yellow-600",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                        })
                      ]))
                    ]),
                    createVNode("div", { class: "ml-4" }, [
                      createVNode("p", { class: "text-sm font-medium text-gray-600" }, "Drafts"),
                      createVNode("p", { class: "text-2xl font-bold text-gray-900" }, toDisplayString(draftCount.value), 1)
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200 flex items-center justify-between" }, [
                  createVNode("div", { class: "flex items-center space-x-4" }, [
                    createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Service Pages"),
                    createVNode("span", { class: "bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium" }, toDisplayString(__props.servicePages.total) + " " + toDisplayString(__props.servicePages.total === 1 ? "page" : "pages"), 1)
                  ]),
                  createVNode("button", {
                    onClick: openCreateModal,
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
                    createTextVNode(" Create New Page ")
                  ])
                ]),
                !__props.servicePages.data || __props.servicePages.data.length === 0 ? (openBlock(), createBlock("div", {
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
                  createVNode("p", { class: "mt-4 text-lg text-gray-600" }, "No service pages found"),
                  createVNode("p", { class: "text-gray-500" }, toDisplayString(hasActiveFilters.value ? "Try adjusting your filters or" : "") + " Get started by creating your first service page.", 1),
                  createVNode("div", { class: "mt-4 space-x-3" }, [
                    hasActiveFilters.value ? (openBlock(), createBlock("button", {
                      key: 0,
                      onClick: clearFilters,
                      class: "inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    }, " Clear Filters ")) : createCommentVNode("", true),
                    createVNode(unref(Link), {
                      href: _ctx.route("admin.service-pages.create"),
                      class: "inline-flex items-center px-4 py-2 bg-brand-red hover:bg-red-600 text-white font-medium rounded-lg transition-colors"
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
                        createTextVNode(" Create Service Page ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "overflow-x-auto"
                }, [
                  createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                    createVNode("thead", { class: "bg-gray-50" }, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Page"),
                        createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Status"),
                        createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Featured"),
                        createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Sort Order"),
                        createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Created"),
                        createVNode("th", { class: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Actions")
                      ])
                    ]),
                    createVNode("tbody", { class: "bg-white divide-y divide-gray-200" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.servicePages.data, (page) => {
                        return openBlock(), createBlock("tr", {
                          key: page.id,
                          class: "hover:bg-gray-50"
                        }, [
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                            createVNode("div", null, [
                              createVNode("div", { class: "text-sm font-medium text-gray-900" }, toDisplayString(page.title), 1),
                              createVNode("div", { class: "text-sm text-gray-500" }, "/services/" + toDisplayString(page.slug), 1)
                            ])
                          ]),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                            createVNode("span", {
                              class: [{
                                "bg-green-100 text-green-800": page.status === "published",
                                "bg-yellow-100 text-yellow-800": page.status === "draft"
                              }, "inline-flex px-2 py-1 text-xs font-semibold rounded-full"]
                            }, toDisplayString(page.status), 3)
                          ]),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                            createVNode("button", {
                              onClick: ($event) => toggleFeatured(page),
                              class: [{
                                "bg-blue-100 text-blue-800": page.is_featured,
                                "bg-gray-100 text-gray-800": !page.is_featured
                              }, "inline-flex px-2 py-1 text-xs font-semibold rounded-full cursor-pointer hover:opacity-80"]
                            }, toDisplayString(page.is_featured ? "Featured" : "Normal"), 11, ["onClick"])
                          ]),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-sm text-gray-900" }, toDisplayString(page.sort_order), 1),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-sm text-gray-500" }, toDisplayString(formatDate(page.created_at)), 1),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium" }, [
                            createVNode("div", { class: "flex items-center justify-end space-x-2" }, [
                              createVNode(unref(Link), {
                                href: _ctx.route("admin.service-pages.preview", page.id),
                                class: "text-blue-600 hover:text-blue-900",
                                target: "_blank"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Preview ")
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              createVNode(unref(Link), {
                                href: _ctx.route("admin.service-pages.edit", page.id),
                                class: "text-indigo-600 hover:text-indigo-900"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Edit ")
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              createVNode("button", {
                                onClick: ($event) => openDeleteModal(page),
                                class: "text-red-600 hover:text-red-900"
                              }, " Delete ", 8, ["onClick"])
                            ])
                          ])
                        ]);
                      }), 128))
                    ])
                  ])
                ]))
              ]),
              __props.servicePages.data && __props.servicePages.data.length > 0 ? (openBlock(), createBlock("div", {
                key: 2,
                class: "bg-white rounded-xl shadow-sm border border-gray-200 mt-6"
              }, [
                createVNode("div", { class: "px-6 py-4" }, [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "flex-1 flex justify-between sm:hidden" }, [
                      __props.servicePages.prev_page_url ? (openBlock(), createBlock(unref(Link), {
                        key: 0,
                        href: __props.servicePages.prev_page_url,
                        class: "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Previous ")
                        ]),
                        _: 1
                      }, 8, ["href"])) : createCommentVNode("", true),
                      __props.servicePages.next_page_url ? (openBlock(), createBlock(unref(Link), {
                        key: 1,
                        href: __props.servicePages.next_page_url,
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
                          createVNode("span", { class: "font-medium" }, toDisplayString(__props.servicePages.from || 0), 1),
                          createTextVNode(" to "),
                          createVNode("span", { class: "font-medium" }, toDisplayString(__props.servicePages.to || 0), 1),
                          createTextVNode(" of "),
                          createVNode("span", { class: "font-medium" }, toDisplayString(__props.servicePages.total), 1),
                          createTextVNode(" results ")
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("nav", { class: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px" }, [
                          __props.servicePages.prev_page_url ? (openBlock(), createBlock(unref(Link), {
                            key: 0,
                            href: __props.servicePages.prev_page_url,
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
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.servicePages.links, (link, index) => {
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
                          __props.servicePages.next_page_url ? (openBlock(), createBlock(unref(Link), {
                            key: 2,
                            href: __props.servicePages.next_page_url,
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
              (openBlock(), createBlock(Teleport, { to: "body" }, [
                showCreateModal.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "fixed inset-0 z-50 overflow-y-auto"
                }, [
                  createVNode("div", { class: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" }, [
                    createVNode("div", {
                      class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                      onClick: closeCreateModal
                    }),
                    createVNode("div", { class: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" }, [
                      createVNode("div", { class: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, [
                        createVNode("div", { class: "sm:flex sm:items-start" }, [
                          createVNode("div", { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, [
                            createVNode("h3", { class: "text-lg leading-6 font-medium text-gray-900 mb-4" }, "Create New Service Page"),
                            createVNode("form", {
                              onSubmit: withModifiers(submitCreate, ["prevent"])
                            }, [
                              createVNode("div", { class: "space-y-4" }, [
                                createVNode("div", null, [
                                  createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Title"),
                                  withDirectives(createVNode("input", {
                                    "onUpdate:modelValue": ($event) => createForm.title = $event,
                                    type: "text",
                                    class: "w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent",
                                    placeholder: "Enter page title",
                                    required: ""
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, createForm.title]
                                  ]),
                                  createErrors.value.title ? (openBlock(), createBlock("p", {
                                    key: 0,
                                    class: "mt-1 text-sm text-red-600"
                                  }, toDisplayString(createErrors.value.title), 1)) : createCommentVNode("", true)
                                ]),
                                createVNode("div", null, [
                                  createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Subtitle"),
                                  withDirectives(createVNode("input", {
                                    "onUpdate:modelValue": ($event) => createForm.subtitle = $event,
                                    type: "text",
                                    class: "w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent",
                                    placeholder: "Enter page subtitle",
                                    required: ""
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, createForm.subtitle]
                                  ]),
                                  createErrors.value.subtitle ? (openBlock(), createBlock("p", {
                                    key: 0,
                                    class: "mt-1 text-sm text-red-600"
                                  }, toDisplayString(createErrors.value.subtitle), 1)) : createCommentVNode("", true)
                                ]),
                                createVNode("div", null, [
                                  createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Description"),
                                  withDirectives(createVNode("textarea", {
                                    "onUpdate:modelValue": ($event) => createForm.description = $event,
                                    rows: "3",
                                    class: "w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent",
                                    placeholder: "Enter page description"
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, createForm.description]
                                  ])
                                ]),
                                createVNode("div", null, [
                                  createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Status"),
                                  withDirectives(createVNode("select", {
                                    "onUpdate:modelValue": ($event) => createForm.status = $event,
                                    class: "w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                  }, [
                                    createVNode("option", { value: "draft" }, "Draft"),
                                    createVNode("option", { value: "published" }, "Published")
                                  ], 8, ["onUpdate:modelValue"]), [
                                    [vModelSelect, createForm.status]
                                  ])
                                ])
                              ])
                            ], 32)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, [
                        createVNode("button", {
                          onClick: submitCreate,
                          disabled: createLoading.value,
                          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-brand-red text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50"
                        }, [
                          createLoading.value ? (openBlock(), createBlock("svg", {
                            key: 0,
                            class: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                            fill: "none",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("circle", {
                              class: "opacity-25",
                              cx: "12",
                              cy: "12",
                              r: "10",
                              stroke: "currentColor",
                              "stroke-width": "4"
                            }),
                            createVNode("path", {
                              class: "opacity-75",
                              fill: "currentColor",
                              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            })
                          ])) : createCommentVNode("", true),
                          createTextVNode(" " + toDisplayString(createLoading.value ? "Creating..." : "Create Page"), 1)
                        ], 8, ["disabled"]),
                        createVNode("button", {
                          onClick: closeCreateModal,
                          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        }, " Cancel ")
                      ])
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ])),
              (openBlock(), createBlock(Teleport, { to: "body" }, [
                showDeleteModal.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "fixed inset-0 z-50 overflow-y-auto"
                }, [
                  createVNode("div", { class: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" }, [
                    createVNode("div", {
                      class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                      onClick: closeDeleteModal
                    }),
                    createVNode("div", { class: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" }, [
                      createVNode("div", { class: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, [
                        createVNode("div", { class: "sm:flex sm:items-start" }, [
                          createVNode("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10" }, [
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
                                d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                              })
                            ]))
                          ]),
                          createVNode("div", { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left" }, [
                            createVNode("h3", { class: "text-lg leading-6 font-medium text-gray-900" }, "Delete Service Page"),
                            createVNode("div", { class: "mt-2" }, [
                              createVNode("p", { class: "text-sm text-gray-500" }, [
                                createTextVNode(' Are you sure you want to delete "'),
                                createVNode("strong", null, toDisplayString(pageToDelete.value?.title), 1),
                                createTextVNode('"? This action cannot be undone. ')
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, [
                        createVNode("button", {
                          onClick: confirmDelete,
                          disabled: deleteLoading.value,
                          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50"
                        }, [
                          deleteLoading.value ? (openBlock(), createBlock("svg", {
                            key: 0,
                            class: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                            fill: "none",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("circle", {
                              class: "opacity-25",
                              cx: "12",
                              cy: "12",
                              r: "10",
                              stroke: "currentColor",
                              "stroke-width": "4"
                            }),
                            createVNode("path", {
                              class: "opacity-75",
                              fill: "currentColor",
                              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            })
                          ])) : createCommentVNode("", true),
                          createTextVNode(" " + toDisplayString(deleteLoading.value ? "Deleting..." : "Delete"), 1)
                        ], 8, ["disabled"]),
                        createVNode("button", {
                          onClick: closeDeleteModal,
                          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        }, " Cancel ")
                      ])
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/ServicePages/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e7bd1cfe"]]);
export {
  Index as default
};
