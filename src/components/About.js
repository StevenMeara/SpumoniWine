import React, { Component } from 'react';

// import ProductCard from './Tools/ProductCard';

import '../styles/about.css';

export default class About extends Component {



    render = () => {

        return (
        
            <div className='aboutPage fadeQuick'> 
                <img className='aboutPagePhoto' src='/resources/Assets/Photos/CloudMountain.jpg'/>



                <div className='aboutPageTextContainer'>
            

                        <h1>
                                    Spumoni Wine is made by three friends in Willamette Valley, Oregon. We offer casual table wines to be enjoyed with your pinkies down and your head held high. 
                                    <br />
                                    <br />

                                    Enjoy with your friends, on a solo hike, or with a few ice cubes in your glass. 
                                    Spumoni is for you, it’s yours, be casual! 
                                    <br />
                                    <br />

                                    We are dedicated to sourcing grapes from small family-owned farms working organically at the minimum. 
                                    <br />
                                    <br />

                                    Our farmers embody nature and we aim to capture that magic in our cellar practices - exclusively native fermentation, no inoculations, no additions, minimal sulfur, always bottled unified and unfiltered. It’s naturally fermented grape juice and we love that.
                        </h1>

                </div>

            </div>

            


        )
        
    }


}