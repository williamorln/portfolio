import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import DataScience from './components/DataScience.jsx'
import Experience from './components/Experience.jsx'
import Freelance from './components/Freelance.jsx'
import Volunteer from './components/Volunteer.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <DataScience />
        <Experience />
        <Freelance />
        <Volunteer />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
