"use client"
import { useState, useEffect } from 'react'
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'
import Link from 'next/link'

export default function Home() {
  const texts = ["Full Stack Developer", "React Dev", "UI/UX Designer"]
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
 

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const contactMe = () => {
    window.location.href = "mailto:silenthawe@email.com"
  }
   const openWhatsApp = () => {
    window.open("https://wa.me/263775496377", "_blank") // <-- put your number here
  }

  useEffect(() => {
    if (index === texts.length) return

    if (subIndex === texts[index].length + 1 &&!deleting) {
      setTimeout(() => setDeleting(true), 1000)
      return
    }

    if (subIndex === 0 && deleting) {
  setTimeout(() => {
    setDeleting(false)
    setIndex((prev) => (prev + 1) % texts.length)
  }, 500) // wait 500ms before switching to next word
  return
}

   const timeout = setTimeout(() => {
  setSubIndex(prev => prev + (deleting? -1 : 1))
  
  setText(texts[index].substring(0, subIndex + (deleting? -1 : 1)))
}, deleting? 50 : 100)

return () => clearTimeout(timeout)
  }, [subIndex, index, deleting, texts])
   const skills = [
    { name: "JavaScript", icon: <IoLogoJavascript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Git", icon: <FaGithub /> },
  ]

  return (
    <main>
      <header>
        <h1 className="logo">Silent Hawe</h1>
        <nav>
          <a href="#about" onClick={(e) => {e.preventDefault(); scrollToSection('about')}}>About</a>
          <a href="#skills" onClick={(e) => {e.preventDefault(); scrollToSection('skills')}}>Skills</a>
          <a href="/projects">Projects</a>
          <a href="#contact" onClick={(e) => {e.preventDefault(); scrollToSection('contact')}}>Contact</a>
        </nav>
      </header>

      <section className="hero">
        <img src="/profile.jpeg" alt="Silent Hawe" className="profile-pic" />
        <h2>{`Hello, I'm`}</h2>
        <h1>Silent Hawe</h1>
        <h3><span className="typing">{text}<span className="cursor">|</span></span></h3>
        <Link href="/projects" className="btn">View Work</Link>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>{`Silent Hawe. Loud results.
I’m a Full-Stack Developer who builds fast, clean, and user-focused web apps. 
4+ years of shipping real projects with React, Next.js, and Tailwind. 
I turn ideas into products that work and scale.`}</p>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>{`Let's work together.`}
          
        </p>
          <button onClick={openWhatsApp} className="whatsapp-btn">
          <FaWhatsapp /> Get In Touch
        </button>
      </section>

      <footer>
        <p>© 2026 Silent Hawe</p>
      </footer>
    </main>
  )
}