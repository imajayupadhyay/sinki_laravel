import { usePage } from '@inertiajs/vue3';
import { watch, onMounted } from 'vue';

export function useCanonical(customUrl = null) {
    const page = usePage();

    const setCanonicalUrl = (url) => {
        // Skip during SSR - document doesn't exist on the server
        if (typeof document === 'undefined') {
            return;
        }

        const canonicalLink = document.getElementById('canonical-url');
        if (canonicalLink) {
            canonicalLink.setAttribute('href', url);
        }
    };

    const updateCanonical = () => {
        let canonicalUrl = customUrl;

        if (!canonicalUrl) {
            // Use the canonical URL from Inertia shared data (set by middleware)
            canonicalUrl = page.props.canonical;
        }

        if (!canonicalUrl) {
            // Fallback: construct from current URL
            const baseUrl = 'https://www.sinki.ai';
            let path;

            // Skip during SSR - window doesn't exist on the server
            if (typeof window !== 'undefined') {
                path = window.location.pathname;
            } else {
                // Use page.url for SSR fallback
                path = page.url || '/';
            }

            // Remove trailing slash except for root
            if (path !== '/' && path.endsWith('/')) {
                path = path.slice(0, -1);
            }

            canonicalUrl = baseUrl + path;
        }

        setCanonicalUrl(canonicalUrl);
    };

    onMounted(() => {
        updateCanonical();
    });

    // Watch for page changes (SPA navigation)
    watch(
        () => page.url,
        () => {
            updateCanonical();
        },
        { immediate: typeof window !== 'undefined' } // Only run immediately on client-side
    );

    return {
        setCanonicalUrl,
        updateCanonical
    };
}