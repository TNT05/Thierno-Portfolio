import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <WorkExperience />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </>
  )
}

export default App
