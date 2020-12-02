import React, { Component } from 'react';

import '../../styles/about.css';

export default class BioCard extends Component {

    render = () => {

        return (
        
            <div className='bioContainer'>

                {/* Image */}
                <div className='bioImgContainer'>
                    <img className='bioImg' src={this.props.image} />
                </div>
                
                {/* Text */}
                <div className='bioText'>

                    {this.props.children}

                </div>
            </div>

        )
        
    }


}