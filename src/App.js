import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skill';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
