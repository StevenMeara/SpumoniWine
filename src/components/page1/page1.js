import React, { Component } from 'react';


import '../../styles/page1.css';
import '../../styles/project.css'

export default class page1 extends Component {
    


    render = () => {

        return (
        
            <div className='page1Page fadeQuick'> 

                {}

                {/* Banner Image */}
                {/* <div className='bannerContainer'> */}
                    <img className='page1Banner' src='resources/Icons/splash.gif'/>
                    {/* <img className='bannerImg' src='/resources/page2/logo.png' /> */}
                {/* </div> */}
                
                {/* Project Summary */}
                <div className='projectSummary'>

                    <h1>Spumoni : page1</h1>

                    <div className='summaryBody'>

                        <p>Sample Text</p>

                        


                    </div>


                </div>

    
                
           
                

            </div>

            


        )
        
    }


}