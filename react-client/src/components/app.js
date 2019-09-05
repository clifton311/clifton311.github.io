import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/homePage.js';
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';
import About from './pages/aboutMe.js'
import Contact from './pages/contact.js'
import Portfolio from './pages/portfolio.js'
import Particles from 'react-particles-js';

const particles = {
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
}



class App extends Component {

  render() {

   particlesJS.load('particles-js','/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });

    return (
      <Router>
        <div>
          <NavBar />
            <Route name="home"  exact path="/" component={HomePage} />
            <Route name="about" exact path="/about" component={About} />
            <Route name="about" exact path="/contact" component={Contact} />
            <Route name="portfolio" exact path="/portfolio" component={Portfolio} />
        </div>
      </Router>
    )
  }
}

export default App;