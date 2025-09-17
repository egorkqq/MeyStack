const PORT = 3005

const _server = Bun.serve({
  fetch(_req) {
    return new Response(JSON.stringify({ message: "Hello from Meyson Backend!" }), {
      headers: { "Content-Type": "application/json" },
    })
  },
  port: PORT,
})

// Server started successfully
