const index = Bun.file("./index.html");
import fs from "fs"

const staticFileServer = (request: Request) => {
    const url = new URL(request.url);
    const filePath = '.' + url.pathname;

    if (url.pathname === '/') {
        return new Response(index, {
            headers: { 'content-type': 'text/html' }
        })
    }

    if (fs.existsSync(filePath)) {
        const file = Bun.file(filePath);
        return new Response(file);
    } else {
        return new Response('Not Found', { status: 404 });
    }
};

Bun.serve({
    fetch: staticFileServer,
    port: 1337
})
