import React, { Component } from 'react';

import '../styles/footer.css';


export default class Footer extends Component {



    render = () => {

        return (
        
            <div className='footerContainer'>

                <div className='footerTextContainer'>
                    <h1>
                        Spumoni Wine Inc.
                    </h1>
                    <h1>
                        <a href='mailto:contact@sp'>
                            Contact Us!
                        </a>
                    </h1>

                </div>


            </div>


        )
        
    }


}