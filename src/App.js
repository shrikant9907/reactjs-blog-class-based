import React , {Component} from 'react'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Header from './components/header/Header';
import Home from './components/content/home/Home';
import About from './components/content/about/About';
import Work from './components/content/work/Work';
import Career from './components/content/career/Career';
import Blog from './components/content/blog/Blog';
import Contact from './components/content/contact/Contact';
import Footer from './components/footer/Footer';

class App extends Component {
 
  render() { 
    return (
      <Router>
        <Header brandname="Webllisto Technologies pvt ltd" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/career" component={Career} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact-us" component={Contact} />
        </Switch>
        <Footer />
    </Router>
    );
  }
}

export default App;   
