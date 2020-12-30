import './App.css';
import Hero from './components/Hero.js';
import Header from './components/Header.js';
import About from './components/About.js';
import Experience from './components/Experience.js';
import Skills from './components/Skills.js';

function App() {
  return (
    <div>
      <Hero/>
      <Header/>
      <About/>
      <Experience/>
      <Skills/>
    </div>
  );
}

export default App;
