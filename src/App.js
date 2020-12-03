import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import page1 from './components/page1/page1';
import page2 from './components/page2/page2';

import './root.css';

function App() {
  return (
    <div className='root'>

      <Router>

        <Header title={"Spumoni Wine"} logo={"./public/resources/logo.png"}/> 


        <Switch>


          {/* About Page */}
          <Route exact path='/about' render={(props) => <About
    
          />} />

           {/* Contact Page */}
           <Route exact path='/Contact' render={(props) => <Contact
    
           />} />

          {/* page2 Page */}
          <Route exact path='/page2' render={(props) => <page2
    
          />} />

          {/* page1 Page */}
          <Route exact path='/page1' render={(props) => <page1
    
          />} />


          {/* Home Page */}
          <Route exact path='/' render={(props) => <Home

          />} />

          



        </Switch>

        <Footer />

      </Router>

    </div>
  );
}

export default App;
