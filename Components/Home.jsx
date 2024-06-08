import Image from "next/image"
import Link from "next/link"
export default function Home() {
    return (
        <section className="home" id="home">
            <div className="home-content">
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
                <div className="social-icons">
                    <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="#"><i className="fa-brands fa-github"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                </div>
                <div className="btn-group">
                    <Link href="#" className="btn">Hire</Link>
                    <Link href="#" className="btn">contact</Link>
                </div>
            </div>
            <div className="home-img">
                <Image className="images" src={'/hamza-pic-2.jpg'} alt={''} priority={false} width="300" height="400"></Image>
            </div>
        </section>
    )
}