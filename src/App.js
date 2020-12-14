import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/page1/Page1';
import Page2 from './components/page2/Page2';

import './root.css';





export default class App extends Component{
  state = {

      cart : []
  }

  addToCart = async (item) => {

    const curCart = this.state.cart;
    curCart.push(item);

    this.setState({
      cart: curCart
    });

  }

  render = () => {

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
          <Route exact path='/page2' render={(props) => <Page2
            cart = {this.state.cart}
            addToCart = {this.addToCart}
          />} />

          {/* shop - page1 Page */}
          <Route exact path='/Shop' render={(props) => <Products
              cart = {this.state.cart}
              addToCart = {this.addToCart}
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

}
