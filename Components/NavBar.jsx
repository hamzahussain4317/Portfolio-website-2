'use client'
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  const handleActiveSection = (val) => () => {
    setActiveSection(val);
  };

  return (
    <header className="header">
      <Link href="#" className="logo" onClick={handleActiveSection('home')}>Hamza <span>Hussain</span></Link>
      <nav className="navbar">
        <Link href="#" className={(activeSection === "home") ? "active opt" : "opt"} onClick={handleActiveSection('home')}>Home</Link>
        <Link href="#education" className={(activeSection === "education") ? "active opt" : "opt"} onClick={handleActiveSection('education')}>Education</Link>
        <Link href="#about-b" className={(activeSection === "skills") ? "active opt" : "opt"} onClick={handleActiveSection('skills')}>Skills</Link>
        <Link href="#work-a" className={(activeSection === "projects") ? "active opt" : "opt"} onClick={handleActiveSection('projects')}>Projects</Link>
        <Link href="#contact" className={(activeSection === "contact") ? "active opt" : "opt"} onClick={handleActiveSection('contact')}>Contact</Link>
      </nav>
    </header>
  );
}
