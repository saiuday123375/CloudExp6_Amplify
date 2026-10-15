import React, { useState } from 'react'

function App() {
  const [clickCount, setClickCount] = useState(0)
  const [lastVerified, setLastVerified] = useState(null)

  const handleVerify = () => {
    const now = new Date()
    setClickCount(prev => prev + 1)
    setLastVerified(now.toLocaleTimeString())
  }

  return (
    <div className="container">
      <main className="hero-card">
        <div className="badge">
          <span className="badge-pulse"></span>
          Cloud Computing Laboratory — Experiment 6
        </div>

        <h1>Cloud Computing PaaS Demo</h1>
        <p className="subtitle">
          Demonstration of Platform as a Service (PaaS) Continuous Deployment with AWS Amplify
        </p>

        <div className="grid-two">
          <div className="info-box">
            <h3>☁️ What is PaaS?</h3>
            <p>
              <strong>Platform as a Service (PaaS)</strong> delivers a complete cloud environment 
              (hardware, OS, runtimes, and deployment pipelines) allowing developers to build, run, 
              and scale applications without the complexity of configuring underlying servers or virtual machines.
            </p>
          </div>

          <div className="info-box">
            <h3>🚀 AWS Amplify Hosting</h3>
            <p>
              <strong>AWS Amplify Hosting</strong> is a fully managed PaaS web hosting service. 
              It provides Git-based CI/CD workflows, automated build pipelines, global Content Delivery 
              Network (CDN) hosting, and instant custom domain SSL deployment upon each Git push.
            </p>
          </div>
        </div>

        <section className="action-section">
          <h2>PaaS Live Verification Test</h2>
          <p>Click below to verify real-time client-side interactivity on the deployed platform:</p>
          
          <button 
            id="verify-paas-btn"
            className="btn-primary" 
            onClick={handleVerify}
          >
            {clickCount === 0 ? "Test Interactive PaaS State" : `PaaS Active (Clicks: ${clickCount})`}
          </button>

          {lastVerified && (
            <div className="status-toast" id="status-toast">
              ✅ <strong>PaaS Health Check: OK!</strong> Client-side state updated dynamically at {lastVerified}.
            </div>
          )}
        </section>

        <div className="student-meta">
          <span><strong>Student:</strong> Saiuday Kottawar</span>
          <span><strong>Roll No:</strong> E2K231319</span>
          <span><strong>Institution:</strong> PICT, Pune</span>
        </div>
      </main>

      <footer className="footer">
        <p>SPPU Computer Engineering Cloud Computing Lab • Experiment 6 Demo</p>
      </footer>
    </div>
  )
}

export default App
