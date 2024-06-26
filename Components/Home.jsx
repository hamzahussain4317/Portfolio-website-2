'use client'
import Image from "next/image"
import Link from "next/link"
import Design from '../app/components/Design'


export default function Home() {
    return (
        <>
            <Design />
            <section className="home" id="home">
                <div className="home-content">
                    <div className="content">
                        <h1>Hi, it's <span>Hamza</span></h1>
                        <h3 id="text-animation">I'm a <span></span></h3>
                        <p>I am a BSCS student at FAST NUCES, Karachi
                            Campus, currently in my fourth semester. As a
                            full-time web developer, I have hands-on
                            experience with React.js, Next.js, Node.js, HTML,
                            CSS, and a solid foundation in C and C++. I am
                            passionate about creating dynamic, responsive
                            web applications and continuously enhancing my
                            skills to stay updated with industry trends.
                        </p>
                    </div>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/hamza-hussain-b88172274"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/hamzahussain4317?tab=repositories"><i className="fa-brands fa-github"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100048878618340"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100048878618340"><i className="fa-brands fa-facebook"></i></a>
                    </div>
                    <div className="btn-group">
                        <Link href="/HamzaHussain.pdf" className="btn" download={'/HamzaHussain.pdf'}>Resume</Link>
                        <Link href="/#contact" className="btn">contact</Link>
                    </div>
                </div>
                <div className="home-img">
                    <Image className="images" src={'/hamza-pic-2.jpg'} alt={''} priority={false} width="300" height="400"></Image>
                </div>
            </section>

        </>
    )
}