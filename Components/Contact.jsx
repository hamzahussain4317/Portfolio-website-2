'use client'
import { useEffect } from "react"
import ParticlesBackground from "./ParticlesBackground"
export default function Contact() {
    useEffect(() => {
        console.log("Hello World from Contact")
    }, [])
    return (
        <section id="contact" className="contact">
            {/* <ParticlesBackground />  */}
            <h2 className="heading">Contact <span>Me</span></h2>
            <form action="">
                <div className="input-group">
                    <div className="input-box">
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="input-box">
                        <input type="number" placeholder="Phone Number" />
                        <input type="text" placeholder="Subject" />
                    </div>
                </div>
                <div className="input-group-2">
                    <textarea name="" id="" cols="60" row="60" placeholder="Your Message"></textarea>
                    <input type="submit" value="Send Message" className="btn" />
                </div>
            </form>
        </section>
    )
}