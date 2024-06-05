import Image from "next/image";
import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Home() {
  return (
    <>
      <header className="header">
        <Link href="#" className="logo">Hamza <span>Hussain</span></Link>
        <i className="fa-solid fa-bars" id="menu-icon"></i>
        <nav className="navbar">
          <Link href="#" className="active opt">Home</Link>
          <Link href="#" className="opt">Education</Link>
          <Link href="#" className="opt">Services</Link>
          <Link href="#" className="opt">Projects</Link>
          <Link href="#" className="opt">Contact</Link>
        </nav>
      </header>
      <section className="home" id="home">
        <div className="home-content">
          <h1>Hi, it's <span>Hamza</span></h1>
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
          <Image className="images" src={'/hamza-pic.jpg'} alt={''} priority={false} width="300" height="400"></Image>
        </div>
      </section>
    </>

  );
}
