import Navbar from "./components/Navbar/Navbar"
import Intro from "./components/Intro/Intro"
import Program from "./components/Program/Program"
import Title from "./components/Title/Title"
import About from "./components/About/About"
import Campus from "./components/Campus/Campus"
import Testimonials from "./components/Testimonials/Testimonials"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import { Outlet } from "react-router-dom"
import Video from "./components/Video.jsx/Video"
import { useState } from "react"

function App() {

  const [playstate , setplaystate] = useState(false)

  return (
    <main>
     <Navbar/>
     <Intro/>
     <div className="container">
      <Title title="Our Programs" subtitle="What we Offer"/>
      <Program/>
    <About setplaystate={setplaystate}/>
    <Title title="Gallery" subtitle="Campus Photos"/>
    <Campus />
    <Title title="Testimonials" subtitle="What Students Says"/>
    <Testimonials/>
    <Title title="Conatct Us" subtitle="Get in touch"/>
    <Contact/>
    <Footer/>
    <Outlet/>
     </div>
    <Video playstate={playstate} setplaystate={setplaystate}/>
    </main>
  )
}

export default App
