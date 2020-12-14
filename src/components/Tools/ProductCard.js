import React, { Component } from 'react';

import '../../styles/ProductCard.css';

export default class ProductCard extends Component {

    render = () => {

        return (

            <div className='bioContainer'>

                {/* Image */}
                <div className='bioImgContainer'
                    onClick={() => this.props.addToCart(this.props.product)}
                >
                    <img className='bioImg' src={this.props.product.icon} />
                </div>

                {/* Text */}
                <div className='bioText'>

                    {this.props.product.productName}

                </div>
            </div>

        )

    }


} 