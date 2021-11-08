import React from 'react'; 
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
} from "react-router-dom";

// Components
import Header from './components/header/Header';
import Home from './components/content/home/Home';
import About from './components/content/about/About';
import Contact from './components/content/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return ( 
    <Router>
      <Header brandname="BLOG" />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/about-us" element={ <About /> } />
        <Route path="/contact-us" element={ <Contact /> } />
      </Routes>
      <Footer />
  </Router>
  );
}
export default App;   