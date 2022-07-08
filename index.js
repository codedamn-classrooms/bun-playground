Bun.serve({
  fetch(req) {
    return new Response(`Hello World from ${req.url}`);
  },
  port: 1337
});

console.log("Bun is running!")

