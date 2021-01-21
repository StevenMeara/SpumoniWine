import React, { Component } from 'react';

import '../../styles/ProductCard.css';

export default class ProductCard extends Component {

    render = () => {

        return (

            <div className='productContainer'>

                {/* Image */}
                <div className='productImgContainer'
                    onClick={() => this.props.addToCart(this.props.product)}
                >
                    <img className='productImg' src={this.props.product.icon} />
                </div>

                {/* Text */}
                <div className='productText'>

                    {this.props.product.productName}

                </div>
            </div>

        )

    }


} 