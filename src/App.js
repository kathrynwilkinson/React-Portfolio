import './App.css';
// import './background-img.css';
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Nav />
        <Router basename='/react-portfolio'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/portfolio'>
              <Portfolio />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
          </Switch>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
