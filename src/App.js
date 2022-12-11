import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Banner from './Pages/Home/Banner/Banner';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <div className="">
   <Navbar></Navbar>
   <Banner></Banner>
   <About></About>
   <Projects></Projects>
   <Footer></Footer>
    </div>
  );
}

export default App;
