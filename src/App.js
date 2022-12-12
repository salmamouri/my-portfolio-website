import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Banner from './Pages/Home/Banner/Banner';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Skills from './Pages/Skills/Skills';
import Contact from './Pages/Contact/Contact';

import Blogs from './Pages/Blogs/Blogs';


function App() {
 
  return (
    <div className="w-full bg-primary">
   <Navbar></Navbar>
   <Banner></Banner>
   <About></About>
   <Projects></Projects>
   <Skills></Skills>
   <Contact></Contact>
   <Footer></Footer>

    </div>
  );
}

export default App;
