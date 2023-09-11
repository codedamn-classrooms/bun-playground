const index = Bun.file("./index.html");

Bun.serve({
    fetch(req: Request) {
        return new Response(index)
    },
    port: 1337
})
