import React, { Component } from 'react';

import ProductCard from './Tools/ProductCard';

import '../styles/contact.css';

export default class Contact extends Component {



    render = () => {

        return (
        
            <div className='contactPage'> 
            <img className="contactBackground" src= {'./resources/Assets/HomePageSplash.jpeg'}>
            </img>

           <div className='summaryText'>

               
            
               <h1>We love to hear from you!</h1>
               <h2>
                    Email
                </h2>
                
                <h2><a href="mailto:hello@spumoniwine.com">hello@Spumoniwine.com</a></h2>

                <h2>
                    Instagram
                </h2>

                <h2>
                    < a href="https://www.instagram.com/spumoniworldwide/">@spumoniworldwide</a>
                </h2>
               
                
            </div>
           




           </div>
                
        )
        
    }


}