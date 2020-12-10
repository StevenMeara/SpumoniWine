import React, { Component } from 'react';

import '../styles/Home.css';

//const openModalButtons = document.querySelectorAll('[data-modal-target]')
//const closeModalButtons = document.querySelectorAll('[data-close-button]')
//const overlay = document.getElementById('overlay')
//
//openModalButtons.forEach(button => {
//  button.addEventListener('click', () => {
//    const modal = document.querySelector(button.dataset.modalTarget)
//    openModal(modal)
//  })
//})
//
//overlay.addEventListener('click', () => {
//  const modals = document.querySelectorAll('.modal.active')
//  modals.forEach(modal => {
//    closeModal(modal)
//  })
//})
//
//closeModalButtons.forEach(button => {
//  button.addEventListener('click', () => {
//    const modal = button.closest('.modal')
//    closeModal(modal)
//  })
//})
//
//function openModal(modal) {
//  if (modal == null) return
//  modal.classList.add('active')
//  overlay.classList.add('active')
//}
//
//function closeModal(modal) {
//  if (modal == null) return
//  modal.classList.remove('active')
//  overlay.classList.remove('active')
//}





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

           {/*} <button data-modal-target="#modal">Open Modal</button>
              <div class="modal" id="modal">
                <div class="modal-header">
                  <div class="title">Example Modal</div>
                  <button data-close-button class="close-button">&times;</button>
                </div>
                <div class="modal-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod alias ut illo doloremque eum ipsum obcaecati distinctio debitis reiciendis quae quia soluta totam doloribus quos nesciunt necessitatibus, consectetur quisquam accusamus ex, dolorum, dicta vel? Nostrum voluptatem totam, molestiae rem at ad autem dolor ex aperiam. Amet assumenda eos architecto, dolor placeat deserunt voluptatibus tenetur sint officiis perferendis atque! Voluptatem maxime eius eum dolorem dolor exercitationem quis iusto totam! Repudiandae nobis nesciunt sequi iure! Eligendi, eius libero. Ex, repellat sapiente!
                </div>
              </div>
              <div id="overlay"></div>
                        
                {/* Home Logo Image 
                <button
                        className= 'EnterButton'
                        type= "button"
                        onClick = "document.getElementById('dissapear').style.width='50%'" > ENTER

                        </button> */}
               <div className= {'enterAnimationContainer' + (this.state.visible ? "" : " invisible")}
                 onClick= {this.enterSite}> 
                 
                        <img
                        id= 'enterAnimation' 
                        className= 'enterAnimation'
                        src="./resources/Assets/EnterAnimationFinal.gif" >
                        
                        </img>
                        

                {/*<video 
                    id= 'enterAnimation'
                    className= 'enterAnimation'
                    src="./resources/Assets/EnterAnimation.gif" 
                    autoPlay
                    muted
                    >
                    <p>Your browser doesn't support HTML5 video. Here is a <a href="https://www.youtube.com/watch?v=NPTCIfIZdjI">link to the video</a> instead.</p> 
                </video> */}
              

                </div>
                    <p>
                    <a href="https://www.youtube.com/watch?v=NPTCIfIZdjI ">
                    <img className='homeLogo' src={'./resources/Assets/HomePageSplash.jpeg'}/>
                    </a>
                    </p>
                
                {/* Home description */}
                {/* <div className='homeDescription'> 
                    

                </div> */}
                 <div className="splashBioContainer">
                    <text>
                     <h1>Big Vibrations. {"\n"}
                       </h1>
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

                    <h2>
                      COMING JAN. 2021
                    </h2>
                    
                    </text>
                    
                    
                    
                    
                    
                                    </div>        


                </div>
                

            
        )

    }


}