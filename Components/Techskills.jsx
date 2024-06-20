'use client'
import { useEffect } from "react"
export default function Techskills() {
    useEffect(() => {
        const targets = document.querySelectorAll('.progress div');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        };
        const callback = (entries) => {
            entries.forEach(entry => {
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
        <section id="skills">

            <h2 className="heading">Technical <span>Skills</span></h2>
            <div className="nameandlogo">
                <h4>HTML AND CSS</h4>
                <i className="fa-brands fa-html5" id="slogo"></i>
            </div>
            <div className="progress">
                <div style={{ '--final-width': '80%' }}></div>
            </div>
            <div className="nameandlogo">
                <h4>JAVASCRIPT</h4>
                <i className="fa-brands fa-js" id="slogo"></i>
            </div>
            <div className="progress">
                <div style={{ '--final-width': '80%' }}></div>
            </div>
            <div className="nameandlogo">
                <h4>NODE</h4>
                <i className="fa-brands fa-node" id="slogo"></i>
            </div>
            <div className="progress">
                <div style={{ '--final-width': '70%' }}></div>
            </div>
            <div className="nameandlogo">
                <h4>REACT</h4>
                <i className="fa-brands fa-react" id="slogo"></i>
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
                <i className="fa-solid fa-c" id="slogo"></i>
            </div>
            <div className="progress">
                <div style={{ '--final-width': '90%' }}></div>
            </div>
            <div className="nameandlogo">
                <h4>PYTHON</h4>
                <i className="fa-brands fa-python" id="slogo"></i>
            </div>
            <div className="progress">
                <div style={{ '--final-width': '30%' }}></div>
            </div>
        </section>
    )
}