'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [sideBar, setSideBar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleActiveSection = (val) => () => {
    setActiveSection(val);
  };
  const handleSideBar = () => {
    setSideBar(!sideBar);
  }

  return (
    <header className="header">
      <Link href="#" className="logo" onClick={handleActiveSection('home')}>Hamza <span>Hussain</span></Link>
      <i class={(!sideBar) ? "fa-solid fa-bars" : "fa-solid fa-x"} id="menu-icon" onClick={handleSideBar}></i>
      <nav className={sideBar ? "navbar active" : "navbar"}>
        <Link href="#" className={(activeSection === "home") ? "active opt" : "opt"} onClick={handleActiveSection('home')}>Home</Link>
        <Link href="#education" className={(activeSection === "education") ? "active opt" : "opt"} onClick={handleActiveSection('education')}>Education</Link>
        <Link href="#skills" className={(activeSection === "skills") ? "active opt" : "opt"} onClick={handleActiveSection('skills')}>Skills</Link>
        <Link href="#projects" className={(activeSection === "projects") ? "active opt" : "opt"} onClick={handleActiveSection('projects')}>Projects</Link>
        <Link href="#contact" className={(activeSection === "contact") ? "active opt" : "opt"} onClick={handleActiveSection('contact')}>Contact</Link>
      </nav>
    </header>
  );
}
