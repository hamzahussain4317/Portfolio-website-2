'use client'
import Image from "next/image";
import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect } from "react";



export default function Home() {

  useEffect(() => {
    const targets = document.querySelectorAll('.progress div');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    };
    const callback = (entries) => {
      entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);


    targets.forEach(target => {
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header className="header">
        <Link href="#" className="logo">Hamza <span>Hussain</span></Link>
        <i className="fa-solid fa-bars" id="menu-icon"></i>
        <nav className="navbar">
          <Link href="#" className="active opt">Home</Link>
          <Link href="#education" className="opt">Education</Link>
          <Link href="#about-b" className="opt">Skills</Link>
          <Link href="#" className="opt">Projects</Link>
          <Link href="#" className="opt">Contact</Link>
        </nav>
      </header>
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
      <section id="education" className="education">

        <h2 className="heading">Education</h2>
        <div className="timeline-items">

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2020</div>
            <div className="timeline-content">
              <h3>School</h3>
              <p>Graduated from Federal Secondary School in Computer Science,
                acquiring strong programming skills and a solid foundation in
                technology and computing.</p>
            </div>

          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2020-2022</div>
            <div className="timeline-content">
              <h3>College</h3>
              <p>Completed my intermediate in Pre-Engineering from Adamjee Government
                Science College, gaining a strong foundation in engineering principles
                and technical skills.</p>
            </div>

          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2022-Present</div>
            <div className="timeline-content">
              <h3>University</h3>
              <p>Currently pursuing a Bachelor's degree in Computer Science from FAST-NUCES,
                having successfully completed my fourth semester with excellent progress.</p>
            </div>

          </div>
        </div>
      </section>

      <section id="about-b">
        
        <h2>Technical skills</h2>
        {/* <div className="bottom-line"></div> */}
        <div className="nameandlogo">
        <h4>HTML AND CSS</h4>  
        <i class="fa-brands fa-html5" id="slogo"></i>
        </div>
        <div className="progress">
          <div style={{ '--final-width': '80%' }}></div>
        </div>
        <div className="nameandlogo">
        <h4>JAVASCRIPT</h4>
        <i class="fa-brands fa-js" id="slogo"></i>
        </div>
        <div className="progress">
          <div style={{ '--final-width': '80%' }}></div>
        </div>
        <div className="nameandlogo">
        <h4>NODE</h4>
        <i class="fa-brands fa-node" id="slogo"></i>
        </div>
        <div className="progress">
          <div style={{ '--final-width': '70%' }}></div>
        </div>
        <div className="nameandlogo">
        <h4>REACT</h4>
        <i class="fa-brands fa-react" id="slogo"></i>
        </div>
        <div className="progress">
          <div style={{ '--final-width': '90%' }}></div>
        </div>
        <div className="nameandlogo">
        <h4>NEXT</h4>
        </div>
        <div className="progress">
          <div style={{ '--final-width': '90%' }}></div>
        </div>
        <div className="nameandlogo">
        <h4>TYPESCRIPT</h4>
        </div>
        <div className="progress">
        <div style={{ '--final-width': '60%' }}></div>
        </div>
          
        
        <div className="nameandlogo">
        <h4>C/C++</h4>
        <i class="fa-solid fa-c"  id="slogo"></i>
        </div>
        <div className="progress">
          <div style={{ '--final-width': '90%' }}></div>
        </div>
        <div className="nameandlogo">
        <h4>PYTHON</h4>
        <i class="fa-brands fa-python" id="slogo"></i>
        </div>
        <div className="progress">
          <div style={{ '--final-width': '30%' }}></div>
        </div>
      </section>
    </>

  );
}
