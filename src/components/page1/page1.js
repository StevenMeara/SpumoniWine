//PRODUCT PAGE

import React, { Component } from 'react';


import '../../styles/page1.css';
import '../../styles/project.css'

import ProductCard from '../Tools/ProductCard.js'

import '../Tools/Products.js';
import {products} from '../Tools/Products.js';

export default class page1 extends Component {
    


    render = () => {

        return (
        
            <div className='page1Page fadeQuick'> 
                
                {products.map( (product, idx) => {
                                
                    if (product.type == 'merch')
                        return ''
                            
                    return (
                        <ProductCard 
                            product = {product}
                            addToCart = {this.props.addToCart}
                        />
                        // <div>
                        //     {product.productName}
                        //     <img style={{width: 100}} src = {product.icon}/>
                    
                        // </div>
                    )
                    
                    } )}
                    
                    <div>Cart: </div>
                    {this.props.cart.map( cartItem => {
                    return (
                        <div> {cartItem.productName} </div>
                    )
                    })}
                    
                {}

                {/* Banner Image */}
                {/* <div className='bannerContainer'> */}
                    
                    {/* <img className='bannerImg' src='/resources/page2/logo.png' /> */}
                {/* </div> */}
                
                {/* Project Summary */}
                <div className='projectSummary'>

                    

                    <div className='summaryBody'>

                        

                        


                    </div>


                </div>

    
                
           
                

            </div>

            


        )
        
    }


}