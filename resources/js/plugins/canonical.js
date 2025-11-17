import { usePage } from '@inertiajs/vue3';
import { watch, nextTick } from 'vue';

export default {
    install(app) {
        // Plugin to automatically set canonical URLs if not already set by the page
        app.mixin({
            mounted() {
                // Use nextTick to ensure all page-specific canonical URLs are set first
                nextTick(() => {
                    this.setDefaultCanonical();
                });

                // Watch for route changes
                const page = usePage();
                watch(
                    () => page.url,
                    () => {
                        nextTick(() => {
                            this.setDefaultCanonical();
                        });
                    }
                );
            },
            methods: {
                setDefaultCanonical() {
                    const canonicalLink = document.getElementById('canonical-url');

                    if (canonicalLink) {
                        // Only set if canonical is empty or has a placeholder
                        const currentHref = canonicalLink.getAttribute('href');

                        if (!currentHref || currentHref === '') {
                            const page = usePage();
                            let canonicalUrl = page.props.canonical;

                            // Fallback to constructing from current URL
                            if (!canonicalUrl) {
                                const baseUrl = 'https://www.sinki.ai';
                                let path = window.location.pathname;

                                // Remove trailing slash except for root
                                if (path !== '/' && path.endsWith('/')) {
                                    path = path.slice(0, -1);
                                }

                                canonicalUrl = baseUrl + path;
                            }

                            canonicalLink.setAttribute('href', canonicalUrl);
                        }
                    }
                }
            }
        });
    }
};