import { usePage } from "@inertiajs/vue3";
import { onMounted, watch } from "vue";
function useCanonical(customUrl = null) {
  const page = usePage();
  const setCanonicalUrl = (url) => {
    if (typeof document === "undefined") {
      return;
    }
    const canonicalLink = document.getElementById("canonical-url");
    if (canonicalLink) {
      canonicalLink.setAttribute("href", url);
    }
  };
  const updateCanonical = () => {
    let canonicalUrl = customUrl;
    if (!canonicalUrl) {
      canonicalUrl = page.props.canonical;
    }
    if (!canonicalUrl) {
      const baseUrl = "https://www.sinki.ai";
      let path;
      if (typeof window !== "undefined") {
        path = window.location.pathname;
      } else {
        path = page.url || "/";
      }
      if (path !== "/" && path.endsWith("/")) {
        path = path.slice(0, -1);
      }
      canonicalUrl = baseUrl + path;
    }
    setCanonicalUrl(canonicalUrl);
  };
  onMounted(() => {
    updateCanonical();
  });
  watch(
    () => page.url,
    () => {
      updateCanonical();
    },
    { immediate: typeof window !== "undefined" }
    // Only run immediately on client-side
  );
  return {
    setCanonicalUrl,
    updateCanonical
  };
}
export {
  useCanonical as u
};
