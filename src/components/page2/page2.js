import React, { Component } from 'react';

import '../../styles/page2.css';
import '../../styles/project.css';

export default class page2 extends Component{


    render = () => {

        return (
        
            <div className='page2Page fadeQuick'> 
                
                {/* Banner Image */}
                <div className='bannerContainer'>
                    <img className='bannerImg' src='/resources/page2/logo.png' />
                </div>
                
                {/* Project Summary */}
                <div className='projectSummary'>

                    <h1>Spumoni : page2</h1>

                    <div className='summaryBody'>

                        <p> Sample text 1</p>

                        <p> Sample text 2 </p>

                        <img src='https://media.giphy.com/media/LDaBbFGqUwjPq/giphy.gif' className='centerImg'/>

                        <p>
                            Sample Text 3 

                        </p>

                        <p>
                            Sample Text 4
                        </p>

                        <br/>

                        <p>
                            Sample 5
                        </p>

                        
                        {/* <img src='https://media.giphy.com/media/1SuOOPbrFQYErzkODD/giphy.gif' /> */}


                    </div>


                </div>


            </div>

            


        )
        
    }


}

