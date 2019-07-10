import React , {Component, Fragment} from 'react'; 
import './App.css';

import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

class App extends Component {
 
  render() { 
    return (
      <Fragment>
          <Header brandname="Company Name" />
          <Content />
          <Footer />
      </Fragment>
    );
  }
}

export default App;   
