import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/homePage.js';
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';
import About from './pages/aboutMe.js'
import Contact from './pages/contact.js'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
            <Route name="home" exact path="/" component={HomePage} />
            <Route name="about" exact path="/about" component={About} />
            <Route name="about" exact path="/contact" component={Contact} />
          
          <Footer />

        </div>
      </Router>
    )
  }
}

export default App;