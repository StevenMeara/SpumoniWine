import React, { Component } from 'react';

import '../styles/Home.css';

import Mailchimp from 'react-mailchimp-form';

export default class Home extends Component {

        state = {
          visible: true,

        }




        goToStore = (link) => {
    
            this.props.history.push('www.youtube.com');
        }
    
        enterSite = async => {

          this.setState( 
             { visible : !this.state.visible } 
          )

        }

    render = () => {

        return (
            
            
            
            
            <div className= 'homeContainer'>

                  <div className= 'contentContainer1'>
                      <img className='homeLogoText' src= '/resources/Assets/logoTransparent.png'/>

                      <div className='contentContainer1TextContainer'>
                        <h1>
                          Natural Wine Made For You.
                        </h1>
                        <h1>
                          Release Date *TBD*
                        </h1>
                        <h1>
                          Coming Soon.
                        </h1>

                      </div>

                  </div>









               {/* <div className= {'enterAnimationContainer' + (this.state.visible ? "" : " invisible")}
                 onClick= {this.enterSite}> 
                 
                        <img
                        id= 'enterAnimation' 
                        className= 'enterAnimation'
                        src="./resources/Assets/EnterAnimationFinal.gif" >
                        
                        </img>
                        
                </div> */}


                  
                   {/* <a href="https://www.youtube.com/watch?v=NPTCIfIZdjI ">
                    <img className='homeLogo' src={'./resources/Assets/HomePageSplash.jpeg'}/>
              </a>  */}

                

              
                  
                  


                {/* <div className="homeSquare1"></div> */}
                <div className='contentContainer2'>

                  <img className= 'contentContainer2Image' src='/resources/Assets/Photos/Grapes1.JPG'/>


                 <div className="splashBioContainer">
                   

                   



                    <h2>
                     {/* <h1>Big Vibrations. {"\n"}
                       </h1> */}
                    {"\n"}
                    Spumoni is here to make delicious beverages for you. {"\n"}
                    {"\n"}
                    Spumoni is an Agricultural Project built by Friends to be enjoyed by other friends. We strive to make Approachable wines for discerning wine nerds, Natural wine Influencers, Bota Box truthers and Yellowtail Freaks alike. {"\n"}
                    {"\n"}
                    The result is our take on Oregon ‘vin de soif’ AKA super-coolers.{"\n"}
                    {"\n"}
                    Spumoni Natural Wine is a reflection of our authenticity– exclusively native fermentations, no inoculations, no additions, no added sulfur, always bottled unfined and unfiltered. {"\n"}
                    {"\n"}
                    Our wine is made in the Vineyard. We are proud to source Grapes from small Family-Owned farmers whose Energy inspires us. Always farmed organically and/or with Biodynamic guidance, and always gently Harvested by hand. Our farmers are our friends. No Nonsense! Only grapes from people we Love the most.{"\n"}
                    {"\n"}
                    We make Wine for your Pleasure. {"\n"}
                    {"\n"}
                    Don’t be timid– Drink during a Virtual dance party, out of a mug while Camping (or not camping!), over Ice after a long hike, Brown bag it (we don’t condone this btw,) Drink with your Pinky down and your Head held High. {"\n"}
                    {"\n"}
                    Enjoy however you see fit. Spumoni is for you, it’s yours, be casual. {"\n"}
                    {"\n"}
                    Forever Friends.{"\n"}

                    
                    </h2>
                    
                  </div>        
                  </div>
                 
                        {/* <img
                className= 'photo1'
                src="./resources/Assets/Photos/CloudMountain.jpg"
                ></img> */}
                  
                  {/* <div className="homeSquare1"></div> */}
                  

                  {/* <img
                className= 'photo2'
                src="./resources/Assets/Photos/MainBackground.jpeg"
                ></img>
                                    <div className="homeSquare2"></div> */}


                  {/* <img
                className= 'photo3'
                src="./resources/Assets/Photos/TableRock.jpg"
                ></img> */}
                  
                  {/* <img
                className= 'photo4'
                src="./resources/Assets/Photos/Table.jpg"
                ></img> */}

                {/* <img
                className= 'photo5'
                src="./resources/Assets/Photos/Grapes1.JPG"
                ></img> */}


                <div className='contentContainer3'>
                  <h3>
                    Keep In Touch!
                  </h3>
                  <h1>
                    Sign up with your email to receive our newest updates!
                  </h1>
                  {/* <form className='emailSubmitForm'>
                        
                        <input className='emailSubmitFormInput' type="text" name="name" />
              
                      <input className='emailSubmitFormButton'type="submit" value="Submit!" />
                    </form> */}
                    <Mailchimp 
                        className = 'emailSubmitForm'
                        action='https://spumoniwine.us7.list-manage.com/subscribe/post?u=f8f6a5dc9f521702eb273ca01&amp;id=2971775fc1'
                        fields={[
                          {
                            name: 'EMAIL',
                            placeholder: 'Email',
                            type: 'email',
                            required: true
                          }
                        ]}
                        />
                  <img className='ContentContainer3Photo'src='/resources/Assets/Photos/MainBackground.jpeg'/>
                </div>
                                    
                </div>
                
                

            
        )

    }


}