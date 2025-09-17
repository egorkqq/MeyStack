import { useEffect, useState } from "react"
import "./App.css"

function App() {
  const [data, setData] = useState<{ message: string } | null>(null)

  useEffect(() => {
    // This would normally fetch from the backend
    fetch("/api/health")
      .then((res) => res.json())
      .then(setData)
      .catch(() => setData({ message: "Backend not available" }))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Meyson Boi Web App</h1>
      </header>
      <main className="App-main">
        <div className="dashboard">
          <h2>Dashboard</h2>
          <p>Welcome to the Meyson Boi web application. This is where your main app functionality will live.</p>
        </div>

        <div className="backend-status">
          <h3>Backend Status</h3>
          <div className="status-display">
            <pre>{data ? JSON.stringify(data, null, 2) : "Loading..."}</pre>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <h3>Features</h3>
            <ul>
              <li>User authentication</li>
              <li>Data management</li>
              <li>Real-time updates</li>
              <li>Advanced UI components</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3>Tech Stack</h3>
            <ul>
              <li>Vite + React</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Shared UI Kit</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
