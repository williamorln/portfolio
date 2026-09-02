import ScrollProgress from './components/ScrollProgress.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Work from './components/Work.jsx'
import DataScience from './components/DataScience.jsx'
import About from './components/About.jsx'
import InTheField from './components/InTheField.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <DataScience />
        <About />
        <InTheField />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
