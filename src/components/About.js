import React, { Component } from 'react';

import BioCard from './Tools/BioCard';

import '../styles/about.css';

export default class About extends Component {



    render = () => {

        return (
        
            <div className='aboutPage fadeQuick'> 

<h1> Big Vibrations.
 </h1>

                {/* Bio */}
                <BioCard image={'  '}>

                    <h1>Spumoni is here to make delicious beverages for you.</h1>

                    <p>
                    Spumoni is an agricultural project built by friends to be enjoyed by other friends. We strive to make approachable wines for discerning wine nerds, natural wine influencers, Bota Box truthers and Yellowtail freaks alike. 

                    </p>

                    <p>
                    The result is our take on Oregon ‘vin de soif’ AKA super-coolers.

                    </p>

                    <p>
                    Spumoni Natural Wine is a reflection of our authenticity– exclusively native fermentations, no inoculations, no additions, no added sulfur, always bottled unfined and unfiltered. 
  
                    </p>

                    <p>
                    Our wine is made in the Vineyard. We are proud to source grapes from small family-owned farmers whose energy inspires us. Always farmed organically and/or with biodynamic guidance, and always gently harvested by hand. Our farmers are our friends. No nonsense! Only grapes from people we love the most.

                    </p>

                    <p>
                    We make wine for your pleasure. 

                    </p>

                    <p>
                    Don’t be timid– drink during a virtual dance party, out of a mug while camping (or not camping!), over ice after a long hike, brown bag it (we don’t condone this btw,) drink with your pinky down and your head held high. 
                    </p>

                    <p>
                    Enjoy however you see fit. Spumoni is for you, it’s yours, be casual. 
                    </p>

                    <p>
                    Forever Friends.
                    </p>
            
                </BioCard>

                <h2>
                    
                </h2>

            </div>

            


        )
        
    }


}