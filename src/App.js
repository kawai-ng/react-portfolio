import './App.css';
import Hero from './components/Hero.js';
import Header from './components/Header.js';
import About from './components/About.js';
import Experience from './components/Experience.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <Hero/>
      <Header/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
