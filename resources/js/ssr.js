import { createInertiaApp } from '@inertiajs/vue3';
import { renderToString } from '@vue/server-renderer';
import { createSSRApp, h } from 'vue';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
// import { ZiggyVue } from '../../vendor/tightenco/ziggy';

const pageData = process.argv[2] ? JSON.parse(process.argv[2]) : { component: 'Home', props: {} };

createInertiaApp({
    page: pageData,
    render: renderToString,
    title: (title) => title || 'Laravel',
    resolve: (name) => {
        if (!name) {
            name = 'Home';
        }
        return resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue'),
        );
    },
    setup({ App, props, plugin }) {
        return createSSRApp({ render: () => h(App, props) })
            .use(plugin)
            // .use(ZiggyVue)
    },
}).then(response => {
    console.log(JSON.stringify(response));
}).catch(error => {
    console.error('SSR Error:', error);
    process.exit(1);
});