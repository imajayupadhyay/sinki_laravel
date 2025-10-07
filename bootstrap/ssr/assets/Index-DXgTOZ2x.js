import { ref, reactive, mergeProps, withCtx, unref, createTextVNode, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, withModifiers, withDirectives, vModelText, Fragment, renderList, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList } from "vue/server-renderer";
import { useForm, Head, Link, router } from "@inertiajs/vue3";
import { A as AdminLayout } from "./AdminLayout-C6oIotro.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    submissions: Object,
    filters: Object,
    countries: Array,
    services: Array,
    stats: Object
  },
  setup(__props) {
    const props = __props;
    const showViewModal = ref(false);
    const showDeleteModal = ref(false);
    const selectedSubmission = ref(null);
    const filterForm = reactive({
      search: props.filters.search || "",
      date_from: props.filters.date_from || "",
      date_to: props.filters.date_to || "",
      service: props.filters.service || "",
      country: props.filters.country || ""
    });
    const deleteForm = useForm({});
    const applyFilters = () => {
      router.get(route("admin.submissions.index"), filterForm, {
        preserveState: true,
        replace: true
      });
    };
    const clearFilters = () => {
      filterForm.search = "";
      filterForm.date_from = "";
      filterForm.date_to = "";
      filterForm.service = "";
      filterForm.country = "";
      applyFilters();
    };
    const exportSubmissions = () => {
      const params = new URLSearchParams(filterForm).toString();
      window.open(`${route("admin.submissions.export")}?${params}`, "_blank");
    };
    const viewSubmission = async (submission) => {
      try {
        const response = await fetch(route("admin.submissions.show", submission.id));
        selectedSubmission.value = await response.json();
        showViewModal.value = true;
      } catch (error) {
        console.error("Error fetching submission details:", error);
      }
    };
    const closeViewModal = () => {
      showViewModal.value = false;
      selectedSubmission.value = null;
    };
    const confirmDelete = (submission) => {
      selectedSubmission.value = submission;
      showDeleteModal.value = true;
    };
    const closeDeleteModal = () => {
      showDeleteModal.value = false;
      selectedSubmission.value = null;
    };
    const deleteSubmission = () => {
      deleteForm.delete(route("admin.submissions.destroy", selectedSubmission.value.id), {
        onSuccess: () => {
          closeDeleteModal();
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AdminLayout, mergeProps({
        "page-title": "Contact Submissions",
        "page-subtitle": "View and manage contact form submissions"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Submissions - Admin Dashboard" }, null, _parent2, _scopeId));
            if (_ctx.$page.props.flash?.success) {
              _push2(`<div class="mb-6 bg-green-50 border border-green-200 rounded-lg p-4" data-v-e655cf0a${_scopeId}><div class="flex" data-v-e655cf0a${_scopeId}><svg class="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e655cf0a${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-e655cf0a${_scopeId}></path></svg><p class="ml-3 text-sm text-green-800" data-v-e655cf0a${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.success)}</p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-v-e655cf0a${_scopeId}><div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6" data-v-e655cf0a${_scopeId}><div class="flex items-center" data-v-e655cf0a${_scopeId}><div class="flex-shrink-0" data-v-e655cf0a${_scopeId}><div class="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center" data-v-e655cf0a${_scopeId}><svg class="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e655cf0a${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-e655cf0a${_scopeId}></path></svg></div></div><div class="ml-4" data-v-e655cf0a${_scopeId}><p class="text-sm font-medium text-gray-600" data-v-e655cf0a${_scopeId}>Total Submissions</p><p class="text-2xl font-bold text-gray-900" data-v-e655cf0a${_scopeId}>${ssrInterpolate(__props.stats.total)}</p></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6" data-v-e655cf0a${_scopeId}><div class="flex items-center" data-v-e655cf0a${_scopeId}><div class="flex-shrink-0" data-v-e655cf0a${_scopeId}><div class="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center" data-v-e655cf0a${_scopeId}><svg class="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e655cf0a${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-v-e655cf0a${_scopeId}></path></svg></div></div><div class="ml-4" data-v-e655cf0a${_scopeId}><p class="text-sm font-medium text-gray-600" data-v-e655cf0a${_scopeId}>Today</p><p class="text-2xl font-bold text-gray-900" data-v-e655cf0a${_scopeId}>${ssrInterpolate(__props.stats.today)}</p></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6" data-v-e655cf0a${_scopeId}><div class="flex items-center" data-v-e655cf0a${_scopeId}><div class="flex-shrink-0" data-v-e655cf0a${_scopeId}><div class="h-10 w-10 bg-yellow-100 rounded-lg flex items-center justify-center" data-v-e655cf0a${_scopeId}><svg class="h-5 w-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e655cf0a${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-v-e655cf0a${_scopeId}></path></svg></div></div><div class="ml-4" data-v-e655cf0a${_scopeId}><p class="text-sm font-medium text-gray-600" data-v-e655cf0a${_scopeId}>This Week</p><p class="text-2xl font-bold text-gray-900" data-v-e655cf0a${_scopeId}>${ssrInterpolate(__props.stats.this_week)}</p></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6" data-v-e655cf0a${_scopeId}><div class="flex items-center" data-v-e655cf0a${_scopeId}><div class="flex-shrink-0" data-v-e655cf0a${_scopeId}><div class="h-10 w-10 bg-brand-red/10 rounded-lg flex items-center justify-center" data-v-e655cf0a${_scopeId}><svg class="h-5 w-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e655cf0a${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" data-v-e655cf0a${_scopeId}></path></svg></div></div><div class="ml-4" data-v-e655cf0a${_scopeId}><p class="text-sm font-medium text-gray-600" data-v-e655cf0a${_scopeId}>This Month</p><p class="text-2xl font-bold text-gray-900" data-v-e655cf0a${_scopeId}>${ssrInterpolate(__props.stats.this_month)}</p></div></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6" data-v-e655cf0a${_scopeId}><div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4" data-v-e655cf0a${_scopeId}><h3 class="text-lg font-semibold text-gray-900 mb-4 lg:mb-0" data-v-e655cf0a${_scopeId}>Filter Submissions</h3><div class="flex flex-col sm:flex-row gap-3" data-v-e655cf0a${_scopeId}><button class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center" data-v-e655cf0a${_scopeId}><svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e655cf0a${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-e655cf0a${_scopeId}></path></svg> Export CSV </button><button class="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200" data-v-e655cf0a${_scopeId}> Clear Filters </button></div></div><form class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4" data-v-e655cf0a${_scopeId}><div data-v-e655cf0a${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1" data-v-e655cf0a${_scopeId}>Search</label><input${ssrRenderAttr("value", filterForm.search)} type="text" placeholder="Name, email, company..." class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent" data-v-e655cf0a${_scopeId}></div><div data-v-e655cf0a${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1" data-v-e655cf0a${_scopeId}>From Date</label><input${ssrRenderAttr("value", filterForm.date_from)} type="date" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent" data-v-e655cf0a${_scopeId}></div><div data-v-e655cf0a${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1" data-v-e655cf0a${_scopeId}>To Date</label><input${ssrRenderAttr("value", filterForm.date_to)} type="date" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent" data-v-e655cf0a${_scopeId}></div><div data-v-e655cf0a${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1" data-v-e655cf0a${_scopeId}>Service</label><select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent" data-v-e655cf0a${_scopeId}><option value="" data-v-e655cf0a${ssrIncludeBooleanAttr(Array.isArray(filterForm.service) ? ssrLooseContain(filterForm.service, "") : ssrLooseEqual(filterForm.service, "")) ? " selected" : ""}${_scopeId}>All Services</option><!--[-->`);
            ssrRenderList(__props.services, (service) => {
              _push2(`<option${ssrRenderAttr("value", service)} data-v-e655cf0a${ssrIncludeBooleanAttr(Array.isArray(filterForm.service) ? ssrLooseContain(filterForm.service, service) : ssrLooseEqual(filterForm.service, service)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(service)}</option>`);
            });
            _push2(`<!--]--></select></div><div data-v-e655cf0a${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1" data-v-e655cf0a${_scopeId}>Country</label><select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent" data-v-e655cf0a${_scopeId}><option value="" data-v-e655cf0a${ssrIncludeBooleanAttr(Array.isArray(filterForm.country) ? ssrLooseContain(filterForm.country, "") : ssrLooseEqual(filterForm.country, "")) ? " selected" : ""}${_scopeId}>All Countries</option><!--[-->`);
            ssrRenderList(__props.countries, (country) => {
              _push2(`<option${ssrRenderAttr("value", country)} data-v-e655cf0a${ssrIncludeBooleanAttr(Array.isArray(filterForm.country) ? ssrLooseContain(filterForm.country, country) : ssrLooseEqual(filterForm.country, country)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(country)}</option>`);
            });
            _push2(`<!--]--></select></div><div class="lg:col-span-3 xl:col-span-5 flex justify-end" data-v-e655cf0a${_scopeId}><button type="submit" class="bg-brand-red text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200" data-v-e655cf0a${_scopeId}> Apply Filters </button></div></form></div><div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" data-v-e655cf0a${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-e655cf0a${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-e655cf0a${_scopeId}> Contact Submissions <span class="text-sm font-normal text-gray-500" data-v-e655cf0a${_scopeId}> (${ssrInterpolate(__props.submissions.total)} total) </span></h2></div><div class="overflow-x-auto" data-v-e655cf0a${_scopeId}><table class="min-w-full divide-y divide-gray-200" data-v-e655cf0a${_scopeId}><thead class="bg-gray-50" data-v-e655cf0a${_scopeId}><tr data-v-e655cf0a${_scopeId}><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-e655cf0a${_scopeId}>Contact Info</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-e655cf0a${_scopeId}>Company</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-e655cf0a${_scopeId}>Service</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-e655cf0a${_scopeId}>Location</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-e655cf0a${_scopeId}>Submitted</th><th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-e655cf0a${_scopeId}>Actions</th></tr></thead><tbody class="bg-white divide-y divide-gray-200" data-v-e655cf0a${_scopeId}><!--[-->`);
            ssrRenderList(__props.submissions.data, (submission) => {
              _push2(`<tr class="hover:bg-gray-50" data-v-e655cf0a${_scopeId}><td class="px-6 py-4 whitespace-nowrap" data-v-e655cf0a${_scopeId}><div class="flex items-center" data-v-e655cf0a${_scopeId}><div class="h-10 w-10 bg-brand-red rounded-full flex items-center justify-center" data-v-e655cf0a${_scopeId}><span class="text-white text-sm font-semibold" data-v-e655cf0a${_scopeId}>${ssrInterpolate(submission.name.charAt(0).toUpperCase())}</span></div><div class="ml-4" data-v-e655cf0a${_scopeId}><div class="text-sm font-medium text-gray-900" data-v-e655cf0a${_scopeId}>${ssrInterpolate(submission.name)}</div><div class="text-sm text-gray-500" data-v-e655cf0a${_scopeId}>${ssrInterpolate(submission.email)}</div><div class="text-xs text-gray-400" data-v-e655cf0a${_scopeId}>${ssrInterpolate(submission.phone)}</div></div></div></td><td class="px-6 py-4 whitespace-nowrap" data-v-e655cf0a${_scopeId}><div class="text-sm text-gray-900" data-v-e655cf0a${_scopeId}>${ssrInterpolate(submission.company)}</div></td><td class="px-6 py-4 whitespace-nowrap" data-v-e655cf0a${_scopeId}><span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800" data-v-e655cf0a${_scopeId}>${ssrInterpolate(submission.services)}</span></td><td class="px-6 py-4 whitespace-nowrap" data-v-e655cf0a${_scopeId}><div class="text-sm text-gray-900" data-v-e655cf0a${_scopeId}>${ssrInterpolate(submission.country || "Unknown")}</div><div class="text-xs text-gray-500" data-v-e655cf0a${_scopeId}>${ssrInterpolate(submission.city)}</div></td><td class="px-6 py-4 whitespace-nowrap" data-v-e655cf0a${_scopeId}><div class="text-sm text-gray-900" data-v-e655cf0a${_scopeId}>${ssrInterpolate(submission.created_at)}</div><div class="text-xs text-gray-500" data-v-e655cf0a${_scopeId}>${ssrInterpolate(submission.created_at_human)}</div></td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium" data-v-e655cf0a${_scopeId}><div class="flex items-center justify-end space-x-2" data-v-e655cf0a${_scopeId}><button class="text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md transition-colors duration-200" data-v-e655cf0a${_scopeId}> View </button><button class="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition-colors duration-200" data-v-e655cf0a${_scopeId}> Delete </button></div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table>`);
            if (!__props.submissions.data || __props.submissions.data.length === 0) {
              _push2(`<div class="text-center py-12" data-v-e655cf0a${_scopeId}><svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e655cf0a${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-e655cf0a${_scopeId}></path></svg><h3 class="mt-4 text-lg font-medium text-gray-900" data-v-e655cf0a${_scopeId}>No submissions found</h3><p class="mt-2 text-gray-600" data-v-e655cf0a${_scopeId}>No contact form submissions match your current filters.</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (__props.submissions.data && __props.submissions.data.length > 0) {
              _push2(`<div class="px-6 py-4 bg-gray-50 border-t border-gray-200" data-v-e655cf0a${_scopeId}><div class="flex items-center justify-between" data-v-e655cf0a${_scopeId}><div class="text-sm text-gray-600" data-v-e655cf0a${_scopeId}> Showing ${ssrInterpolate(__props.submissions.from)} to ${ssrInterpolate(__props.submissions.to)} of ${ssrInterpolate(__props.submissions.total)} submissions </div><div class="flex space-x-2" data-v-e655cf0a${_scopeId}>`);
              if (__props.submissions.prev_page_url) {
                _push2(ssrRenderComponent(unref(Link), {
                  href: __props.submissions.prev_page_url,
                  "preserve-state": "",
                  class: "px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50"
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
              if (__props.submissions.next_page_url) {
                _push2(ssrRenderComponent(unref(Link), {
                  href: __props.submissions.next_page_url,
                  "preserve-state": "",
                  class: "px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50"
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
              _push2(`</div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (showViewModal.value) {
              _push2(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" data-v-e655cf0a${_scopeId}><div class="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto" data-v-e655cf0a${_scopeId}><div class="p-6" data-v-e655cf0a${_scopeId}><div class="flex items-center justify-between mb-6" data-v-e655cf0a${_scopeId}><h3 class="text-lg font-semibold text-gray-900" data-v-e655cf0a${_scopeId}>Submission Details</h3><button class="text-gray-400 hover:text-gray-600" data-v-e655cf0a${_scopeId}><svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e655cf0a${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-e655cf0a${_scopeId}></path></svg></button></div>`);
              if (selectedSubmission.value) {
                _push2(`<div class="space-y-6" data-v-e655cf0a${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-e655cf0a${_scopeId}><div data-v-e655cf0a${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1" data-v-e655cf0a${_scopeId}>Name</label><p class="text-sm text-gray-900 bg-gray-50 p-3 rounded-md" data-v-e655cf0a${_scopeId}>${ssrInterpolate(selectedSubmission.value.name)}</p></div><div data-v-e655cf0a${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1" data-v-e655cf0a${_scopeId}>Email</label><p class="text-sm text-gray-900 bg-gray-50 p-3 rounded-md" data-v-e655cf0a${_scopeId}>${ssrInterpolate(selectedSubmission.value.email)}</p></div><div data-v-e655cf0a${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1" data-v-e655cf0a${_scopeId}>Phone</label><p class="text-sm text-gray-900 bg-gray-50 p-3 rounded-md" data-v-e655cf0a${_scopeId}>${ssrInterpolate(selectedSubmission.value.phone)}</p></div><div data-v-e655cf0a${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1" data-v-e655cf0a${_scopeId}>Company</label><p class="text-sm text-gray-900 bg-gray-50 p-3 rounded-md" data-v-e655cf0a${_scopeId}>${ssrInterpolate(selectedSubmission.value.company)}</p></div><div data-v-e655cf0a${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1" data-v-e655cf0a${_scopeId}>Service</label><p class="text-sm text-gray-900 bg-gray-50 p-3 rounded-md" data-v-e655cf0a${_scopeId}>${ssrInterpolate(selectedSubmission.value.services)}</p></div><div data-v-e655cf0a${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1" data-v-e655cf0a${_scopeId}>Location</label><p class="text-sm text-gray-900 bg-gray-50 p-3 rounded-md" data-v-e655cf0a${_scopeId}>${ssrInterpolate(selectedSubmission.value.city)}, ${ssrInterpolate(selectedSubmission.value.country)}</p></div></div><div data-v-e655cf0a${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1" data-v-e655cf0a${_scopeId}>Message</label><p class="text-sm text-gray-900 bg-gray-50 p-3 rounded-md whitespace-pre-wrap" data-v-e655cf0a${_scopeId}>${ssrInterpolate(selectedSubmission.value.message)}</p></div><div class="border-t pt-6" data-v-e655cf0a${_scopeId}><h4 class="text-sm font-medium text-gray-700 mb-3" data-v-e655cf0a${_scopeId}>Technical Details</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-e655cf0a${_scopeId}><div data-v-e655cf0a${_scopeId}><label class="block text-xs font-medium text-gray-500 mb-1" data-v-e655cf0a${_scopeId}>IP Address</label><p class="text-xs text-gray-700 bg-gray-50 p-2 rounded-md font-mono" data-v-e655cf0a${_scopeId}>${ssrInterpolate(selectedSubmission.value.ip_address)}</p></div><div data-v-e655cf0a${_scopeId}><label class="block text-xs font-medium text-gray-500 mb-1" data-v-e655cf0a${_scopeId}>Submitted At</label><p class="text-xs text-gray-700 bg-gray-50 p-2 rounded-md" data-v-e655cf0a${_scopeId}>${ssrInterpolate(selectedSubmission.value.created_at)}</p></div></div><div class="mt-4" data-v-e655cf0a${_scopeId}><label class="block text-xs font-medium text-gray-500 mb-1" data-v-e655cf0a${_scopeId}>User Agent</label><p class="text-xs text-gray-700 bg-gray-50 p-2 rounded-md break-all" data-v-e655cf0a${_scopeId}>${ssrInterpolate(selectedSubmission.value.user_agent)}</p></div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (showDeleteModal.value) {
              _push2(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-v-e655cf0a${_scopeId}><div class="bg-white rounded-lg p-6 w-full max-w-md mx-4" data-v-e655cf0a${_scopeId}><h3 class="text-lg font-semibold text-gray-900 mb-4" data-v-e655cf0a${_scopeId}>Delete Submission</h3><p class="text-gray-600 mb-6" data-v-e655cf0a${_scopeId}> Are you sure you want to delete the submission from <strong data-v-e655cf0a${_scopeId}>${ssrInterpolate(selectedSubmission.value?.name)}</strong>? This action cannot be undone. </p><div class="flex items-center justify-end space-x-3" data-v-e655cf0a${_scopeId}><button type="button" class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200" data-v-e655cf0a${_scopeId}> Cancel </button><button${ssrIncludeBooleanAttr(unref(deleteForm).processing) ? " disabled" : ""} class="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200 disabled:opacity-50" data-v-e655cf0a${_scopeId}>${ssrInterpolate(unref(deleteForm).processing ? "Deleting..." : "Delete Submission")}</button></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(Head), { title: "Submissions - Admin Dashboard" }),
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
                            d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          })
                        ]))
                      ])
                    ]),
                    createVNode("div", { class: "ml-4" }, [
                      createVNode("p", { class: "text-sm font-medium text-gray-600" }, "Total Submissions"),
                      createVNode("p", { class: "text-2xl font-bold text-gray-900" }, toDisplayString(__props.stats.total), 1)
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
                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          })
                        ]))
                      ])
                    ]),
                    createVNode("div", { class: "ml-4" }, [
                      createVNode("p", { class: "text-sm font-medium text-gray-600" }, "Today"),
                      createVNode("p", { class: "text-2xl font-bold text-gray-900" }, toDisplayString(__props.stats.today), 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6" }, [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("div", { class: "flex-shrink-0" }, [
                      createVNode("div", { class: "h-10 w-10 bg-yellow-100 rounded-lg flex items-center justify-center" }, [
                        (openBlock(), createBlock("svg", {
                          class: "h-5 w-5 text-yellow-600",
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
                        ]))
                      ])
                    ]),
                    createVNode("div", { class: "ml-4" }, [
                      createVNode("p", { class: "text-sm font-medium text-gray-600" }, "This Week"),
                      createVNode("p", { class: "text-2xl font-bold text-gray-900" }, toDisplayString(__props.stats.this_week), 1)
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
                            d: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          })
                        ]))
                      ])
                    ]),
                    createVNode("div", { class: "ml-4" }, [
                      createVNode("p", { class: "text-sm font-medium text-gray-600" }, "This Month"),
                      createVNode("p", { class: "text-2xl font-bold text-gray-900" }, toDisplayString(__props.stats.this_month), 1)
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6" }, [
                createVNode("div", { class: "flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4" }, [
                  createVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-4 lg:mb-0" }, "Filter Submissions"),
                  createVNode("div", { class: "flex flex-col sm:flex-row gap-3" }, [
                    createVNode("button", {
                      onClick: exportSubmissions,
                      class: "bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center"
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
                          d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        })
                      ])),
                      createTextVNode(" Export CSV ")
                    ]),
                    createVNode("button", {
                      onClick: clearFilters,
                      class: "bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                    }, " Clear Filters ")
                  ])
                ]),
                createVNode("form", {
                  onSubmit: withModifiers(applyFilters, ["prevent"]),
                  class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
                }, [
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Search"),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => filterForm.search = $event,
                      type: "text",
                      placeholder: "Name, email, company...",
                      class: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, filterForm.search]
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "From Date"),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => filterForm.date_from = $event,
                      type: "date",
                      class: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, filterForm.date_from]
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "To Date"),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => filterForm.date_to = $event,
                      type: "date",
                      class: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, filterForm.date_to]
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Service"),
                    withDirectives(createVNode("select", {
                      "onUpdate:modelValue": ($event) => filterForm.service = $event,
                      class: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    }, [
                      createVNode("option", { value: "" }, "All Services"),
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.services, (service) => {
                        return openBlock(), createBlock("option", {
                          key: service,
                          value: service
                        }, toDisplayString(service), 9, ["value"]);
                      }), 128))
                    ], 8, ["onUpdate:modelValue"]), [
                      [vModelSelect, filterForm.service]
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Country"),
                    withDirectives(createVNode("select", {
                      "onUpdate:modelValue": ($event) => filterForm.country = $event,
                      class: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    }, [
                      createVNode("option", { value: "" }, "All Countries"),
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.countries, (country) => {
                        return openBlock(), createBlock("option", {
                          key: country,
                          value: country
                        }, toDisplayString(country), 9, ["value"]);
                      }), 128))
                    ], 8, ["onUpdate:modelValue"]), [
                      [vModelSelect, filterForm.country]
                    ])
                  ]),
                  createVNode("div", { class: "lg:col-span-3 xl:col-span-5 flex justify-end" }, [
                    createVNode("button", {
                      type: "submit",
                      class: "bg-brand-red text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
                    }, " Apply Filters ")
                  ])
                ], 32)
              ]),
              createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, [
                    createTextVNode(" Contact Submissions "),
                    createVNode("span", { class: "text-sm font-normal text-gray-500" }, " (" + toDisplayString(__props.submissions.total) + " total) ", 1)
                  ])
                ]),
                createVNode("div", { class: "overflow-x-auto" }, [
                  createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                    createVNode("thead", { class: "bg-gray-50" }, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Contact Info"),
                        createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Company"),
                        createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Service"),
                        createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Location"),
                        createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Submitted"),
                        createVNode("th", { class: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Actions")
                      ])
                    ]),
                    createVNode("tbody", { class: "bg-white divide-y divide-gray-200" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.submissions.data, (submission) => {
                        return openBlock(), createBlock("tr", {
                          key: submission.id,
                          class: "hover:bg-gray-50"
                        }, [
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode("div", { class: "h-10 w-10 bg-brand-red rounded-full flex items-center justify-center" }, [
                                createVNode("span", { class: "text-white text-sm font-semibold" }, toDisplayString(submission.name.charAt(0).toUpperCase()), 1)
                              ]),
                              createVNode("div", { class: "ml-4" }, [
                                createVNode("div", { class: "text-sm font-medium text-gray-900" }, toDisplayString(submission.name), 1),
                                createVNode("div", { class: "text-sm text-gray-500" }, toDisplayString(submission.email), 1),
                                createVNode("div", { class: "text-xs text-gray-400" }, toDisplayString(submission.phone), 1)
                              ])
                            ])
                          ]),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                            createVNode("div", { class: "text-sm text-gray-900" }, toDisplayString(submission.company), 1)
                          ]),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                            createVNode("span", { class: "inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800" }, toDisplayString(submission.services), 1)
                          ]),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                            createVNode("div", { class: "text-sm text-gray-900" }, toDisplayString(submission.country || "Unknown"), 1),
                            createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(submission.city), 1)
                          ]),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                            createVNode("div", { class: "text-sm text-gray-900" }, toDisplayString(submission.created_at), 1),
                            createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(submission.created_at_human), 1)
                          ]),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium" }, [
                            createVNode("div", { class: "flex items-center justify-end space-x-2" }, [
                              createVNode("button", {
                                onClick: ($event) => viewSubmission(submission),
                                class: "text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md transition-colors duration-200"
                              }, " View ", 8, ["onClick"]),
                              createVNode("button", {
                                onClick: ($event) => confirmDelete(submission),
                                class: "text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition-colors duration-200"
                              }, " Delete ", 8, ["onClick"])
                            ])
                          ])
                        ]);
                      }), 128))
                    ])
                  ]),
                  !__props.submissions.data || __props.submissions.data.length === 0 ? (openBlock(), createBlock("div", {
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
                    createVNode("h3", { class: "mt-4 text-lg font-medium text-gray-900" }, "No submissions found"),
                    createVNode("p", { class: "mt-2 text-gray-600" }, "No contact form submissions match your current filters.")
                  ])) : createCommentVNode("", true)
                ]),
                __props.submissions.data && __props.submissions.data.length > 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "px-6 py-4 bg-gray-50 border-t border-gray-200"
                }, [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "text-sm text-gray-600" }, " Showing " + toDisplayString(__props.submissions.from) + " to " + toDisplayString(__props.submissions.to) + " of " + toDisplayString(__props.submissions.total) + " submissions ", 1),
                    createVNode("div", { class: "flex space-x-2" }, [
                      __props.submissions.prev_page_url ? (openBlock(), createBlock(unref(Link), {
                        key: 0,
                        href: __props.submissions.prev_page_url,
                        "preserve-state": "",
                        class: "px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Previous ")
                        ]),
                        _: 1
                      }, 8, ["href"])) : createCommentVNode("", true),
                      __props.submissions.next_page_url ? (openBlock(), createBlock(unref(Link), {
                        key: 1,
                        href: __props.submissions.next_page_url,
                        "preserve-state": "",
                        class: "px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Next ")
                        ]),
                        _: 1
                      }, 8, ["href"])) : createCommentVNode("", true)
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ]),
              showViewModal.value ? (openBlock(), createBlock("div", {
                key: 1,
                class: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
                onClick: withModifiers(closeViewModal, ["self"])
              }, [
                createVNode("div", { class: "bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto" }, [
                  createVNode("div", { class: "p-6" }, [
                    createVNode("div", { class: "flex items-center justify-between mb-6" }, [
                      createVNode("h3", { class: "text-lg font-semibold text-gray-900" }, "Submission Details"),
                      createVNode("button", {
                        onClick: closeViewModal,
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
                      ])
                    ]),
                    selectedSubmission.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "space-y-6"
                    }, [
                      createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Name"),
                          createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-3 rounded-md" }, toDisplayString(selectedSubmission.value.name), 1)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Email"),
                          createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-3 rounded-md" }, toDisplayString(selectedSubmission.value.email), 1)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Phone"),
                          createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-3 rounded-md" }, toDisplayString(selectedSubmission.value.phone), 1)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Company"),
                          createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-3 rounded-md" }, toDisplayString(selectedSubmission.value.company), 1)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Service"),
                          createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-3 rounded-md" }, toDisplayString(selectedSubmission.value.services), 1)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Location"),
                          createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-3 rounded-md" }, toDisplayString(selectedSubmission.value.city) + ", " + toDisplayString(selectedSubmission.value.country), 1)
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Message"),
                        createVNode("p", { class: "text-sm text-gray-900 bg-gray-50 p-3 rounded-md whitespace-pre-wrap" }, toDisplayString(selectedSubmission.value.message), 1)
                      ]),
                      createVNode("div", { class: "border-t pt-6" }, [
                        createVNode("h4", { class: "text-sm font-medium text-gray-700 mb-3" }, "Technical Details"),
                        createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-xs font-medium text-gray-500 mb-1" }, "IP Address"),
                            createVNode("p", { class: "text-xs text-gray-700 bg-gray-50 p-2 rounded-md font-mono" }, toDisplayString(selectedSubmission.value.ip_address), 1)
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-xs font-medium text-gray-500 mb-1" }, "Submitted At"),
                            createVNode("p", { class: "text-xs text-gray-700 bg-gray-50 p-2 rounded-md" }, toDisplayString(selectedSubmission.value.created_at), 1)
                          ])
                        ]),
                        createVNode("div", { class: "mt-4" }, [
                          createVNode("label", { class: "block text-xs font-medium text-gray-500 mb-1" }, "User Agent"),
                          createVNode("p", { class: "text-xs text-gray-700 bg-gray-50 p-2 rounded-md break-all" }, toDisplayString(selectedSubmission.value.user_agent), 1)
                        ])
                      ])
                    ])) : createCommentVNode("", true)
                  ])
                ])
              ])) : createCommentVNode("", true),
              showDeleteModal.value ? (openBlock(), createBlock("div", {
                key: 2,
                class: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                onClick: withModifiers(closeDeleteModal, ["self"])
              }, [
                createVNode("div", { class: "bg-white rounded-lg p-6 w-full max-w-md mx-4" }, [
                  createVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-4" }, "Delete Submission"),
                  createVNode("p", { class: "text-gray-600 mb-6" }, [
                    createTextVNode(" Are you sure you want to delete the submission from "),
                    createVNode("strong", null, toDisplayString(selectedSubmission.value?.name), 1),
                    createTextVNode("? This action cannot be undone. ")
                  ]),
                  createVNode("div", { class: "flex items-center justify-end space-x-3" }, [
                    createVNode("button", {
                      type: "button",
                      onClick: closeDeleteModal,
                      class: "px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
                    }, " Cancel "),
                    createVNode("button", {
                      onClick: deleteSubmission,
                      disabled: unref(deleteForm).processing,
                      class: "px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200 disabled:opacity-50"
                    }, toDisplayString(unref(deleteForm).processing ? "Deleting..." : "Delete Submission"), 9, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Submissions/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e655cf0a"]]);
export {
  Index as default
};
