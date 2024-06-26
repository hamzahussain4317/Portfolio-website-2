'use client'
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavBar from '../Components/NavBar'
import Home from '../Components/Home'
import Education from '../Components/Education'
import Techskills from '../Components/Techskills'
import Work from '../Components/Work'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
// import Design from './components/Design'



export default function App() {

  const educationList = [
    { date: "2020", heading: "School", para: "Graduated from Federal Secondary School in Computer Science,acquiring strong programming skills and a solid foundation intechnology and computing." },
    { date: "2020-2022", heading: "College", para: "Completed my intermediate in Pre-Engineering from Adamjee GovernmentScience College, gaining a strong foundation in engineering principles and technical skills." },
    { date: "2022-Present", heading: "University", para: "Currently pursuing a Bachelor's degree in Computer Science from FAST-NUCES,having successfully completed my fourth semester with excellent progress." }
  ]
  const workList = [{ image: `/work1.PNG`, link: 'https://gleeful-nougat-e811ea.netlify.app/', category: "HTML & CSS", title: "NewsGrid Web" },
  { image: `/work2.png`, link: 'https://github.com/hamzahussain4317/Porfolio_website', category: "HTML & CSS", title: "Portfolio Web" },
  { image: `/work3.PNG`, link: 'https://github.com/hamzahussain4317/EdgeLedger', category: "HTML & CSS", title: "EdgeLegder Web" },
  { image: `/work4.PNG`, link: 'https://github.com/hamzahussain4317/Todo_list', category: "JAVASCRIPT", title: "TodoList" },
  { image: `/work5.PNG`, link: 'https://github.com/hamzahussain4317/Task-02-Bankist-App-', category: "JAVASCRIPT", title: "Bankist App" },
  { image: `/work6.PNG`, link: 'https://github.com/hamzahussain4317/node-js', category: "NODE JS", title: "Blog App" },
  { image: `/work7.PNG`, link: 'https://github.com/hamzahussain4317/React.js-course', category: "REACT", title: "React Blog App" },
  { image: `/work8.PNG`, link: 'https://hackathon-1-sigma.vercel.app/', category: "NEXT JS", title: "Hackathon" },
  { image: `/work9.PNG`, link: 'https://helpful-parfait-b4ca8a.netlify.app/', category: "HTML & CSS", title: "Psychology" }]

  return (

    <div className="wrapper" id="wrapper">
      <NavBar />
      <Home />
      <Education educationList={educationList} />
      <Techskills />
      <Work workList={workList} />
      <Contact />
      <Footer />
    </div>


  );
}
