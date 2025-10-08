import { createServer } from 'http';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ssrBundlePath = join(__dirname, 'bootstrap', 'ssr', 'ssr.js');

const server = createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.statusCode = 200;
        res.end();
        return;
    }

    // Health check endpoint for Laravel
    if (req.method === 'GET' && req.url === '/health') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ status: 'ok' }));
        return;
    }

    if (req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', async () => {
            try {
                // Run the SSR bundle with the page data
                const child = spawn('node', [ssrBundlePath, body], {
                    stdio: ['pipe', 'pipe', 'pipe']
                });

                let output = '';
                let error = '';

                child.stdout.on('data', (data) => {
                    output += data.toString();
                });

                child.stderr.on('data', (data) => {
                    error += data.toString();
                });

                child.on('close', (code) => {
                    if (code === 0 && output) {
                        try {
                            // Try to parse the output as JSON to validate it
                            JSON.parse(output);
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.end(output); // Send the original JSON output, don't stringify again
                        } catch (e) {
                            // If not JSON, return as plain text
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'text/plain');
                            res.end(output);
                        }
                    } else {
                        console.error('SSR Error:', error);
                        res.statusCode = 500;
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify({ error: error || 'SSR failed' }));
                    }
                });

                // Send the page data to the SSR process
                child.stdin.write(body);
                child.stdin.end();

            } catch (error) {
                console.error('SSR Daemon Error:', error);
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
    console.log(`Inertia SSR daemon listening on port ${PORT}`);
    console.log(`Using SSR bundle: ${ssrBundlePath}`);
});