import { createServer } from "node:http"

const PORT = 3001

const server = createServer((_req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" })
  res.end(JSON.stringify({ message: "Hello from Meyson Backend!" }))
})

server.listen(PORT, () => {
  // Server started successfully
})
