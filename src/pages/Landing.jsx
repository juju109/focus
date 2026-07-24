import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import Media from '../components/Media.jsx'
import About from '../components/About.jsx'
import Services from '../components/Services.jsx'
import Portfolio from '../components/Portfolio.jsx'
import Results from '../components/Results.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import { useScrollReveal } from '../reveal.js'

export default function Landing() {
  useScrollReveal()
  return (
    <>
      <Nav />
      <Hero />
      <Media />
      <About />
      <Services />
      <Portfolio />
      <Results />
      <Contact />
      <Footer />
    </>
  )
}
