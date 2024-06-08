import '@fortawesome/fontawesome-free/css/all.min.css';
import NavBar from '../Components/NavBar'
import Home from '../Components/Home'
import Education from '../Components/Education'
import Techskills from '../Components/Techskills'
import Work from '../Components/Work'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'



export default function App() {

  const educationList = [
    { date: "2020", heading: "School", para: ">Graduated from Federal Secondary School in Computer Science,acquiring strong programming skills and a solid foundation intechnology and computing." },
    { date: "2020-2022", heading: "College", para: "Completed my intermediate in Pre-Engineering from Adamjee GovernmentScience College, gaining a strong foundation in engineering principlesand technical skills." },
    { date: "2022-Present", heading: "University", para: "Currently pursuing a Bachelor's degree in Computer Science from FAST-NUCES,having successfully completed my fourth semester with excellent progress." }
  ]
  const workList = [{ category: "Design", title: "Great Gradiants" },
  { category: "UI/UX", title: "World Experience" },
  { category: "Photography & design", title: "vanishing" },
  { category: "Design", title: "Gap inc" },
  { category: "Mobile ui design", title: "fact the experience" },
  { category: "Design Concept", title: "Bazier Curve" },
  { category: "Photography", title: "dock ponder" },
  { category: "web application", title: "resturant app" },
  { category: "social network concept", title: "friendfeed" }]

  return (
    <>
      <NavBar />
      <Home />
      <Education educationList={educationList} />
      <Techskills />
      <Work workList={workList} />
      <Contact />
      <Footer />
    </>

  );
}
