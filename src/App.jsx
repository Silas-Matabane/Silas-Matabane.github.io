import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Careers from './components/sections/Careers'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'
import StarField from './components/StarField'
import BackToTop from './components/BackToTop'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <CursorGlow />
      <StarField />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Careers />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  )
}
