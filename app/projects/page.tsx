"use client"
import Link from 'next/link'

export default function Projects() {
  return (
    <section id="projects" className="section">
    <main className="projects-page">
      <div className="container">
        <Link href="/" className="back-btn">← Back Home</Link>
        
        <h1>POCAMDE INV</h1>
        <p className="subtitle">The project I built and launched today 🚀</p>

        <div className="project-grid">
          
          {/* Clip 1: Homepage */}
          <div className="project-card">
            <h3>Homepage</h3>
            <video 
              src="/pocamde.mp4" 
              controls 
              autoPlay 
              muted 
              loop 
              playsInline
            />
            <p>Modern landing page with animations</p>
          </div>

          {/* Clip 2: Mobile View */}
          <div className="project-card">
            <h3>Mobile Responsive</h3>
            <video 
              src="/pocamde-mobile.mp4" 
              controls 
              autoPlay 
              muted 
              loop 
              playsInline
            />
            <p>Looks clean on phone too</p>
          </div>

          {/* Clip 3: Features */}
          <div className="project-card">
            <h3>Dashboard / Features</h3>
            <video 
              src="/pocamde-features.mp4" 
              controls 
              autoPlay 
              muted 
              loop 
              playsInline
            />
            <p>Key features walkthrough</p>
          </div>

        </div>
      </div>
    </main>
    </section>
  )
}