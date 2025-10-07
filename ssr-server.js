import { createServer } from 'http';
import { createInertiaApp } from '@inertiajs/vue3';
import { renderToString } from '@vue/server-renderer';
import { createSSRApp, h } from 'vue';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const server = createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.statusCode = 200;
        res.end();
        return;
    }

    if (req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', async () => {
            try {
                const pageData = JSON.parse(body);

                const html = await createInertiaApp({
                    page: pageData,
                    render: renderToString,
                    title: (title) => title || 'Laravel',
                    resolve: (name) => {
                        if (!name) {
                            name = 'Home';
                        }
                        return resolvePageComponent(
                            `./resources/js/Pages/${name}.vue`,
                            import.meta.glob('./resources/js/Pages/**/*.vue'),
                        );
                    },
                    setup({ App, props, plugin }) {
                        return createSSRApp({ render: () => h(App, props) })
                            .use(plugin);
                    },
                });

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(html));
            } catch (error) {
                console.error('SSR Error:', error);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: error.message }));
            }
        });
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

const PORT = 13714;
server.listen(PORT, '127.0.0.1', () => {
    console.log(`Inertia SSR server listening on port ${PORT}`);
});