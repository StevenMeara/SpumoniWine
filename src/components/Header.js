import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import "../styles/Header.css"


const links = [

    {
        display: 'Contact',
        link: '/contact'
    },
    {
        display: 'About',
        link: '/about'
    },
    
    {
        display: 'Shop',
        link: 'https://www.youtube.com/watch?v=NPTCIfIZdjI'
    },

]



class Header extends Component {


    state = {

        navOpen: false,

    }

    toHome = () => {
        this.setState({ navOpen: false });
        this.props.history.push("/");
    }

    toLink = (link) => {
        this.setState({ navOpen: false });
        this.props.history.push(link);
    }

    toggleNav = async () => {
        await this.setState({ navOpen: !this.state.navOpen });
    }





    render = () => {

        console.log(window.location.pathname);
        const pathRoot = '/' + window.location.pathname.split('/')[1];

        return (
            <div>
                <div className="Header">


                    {/* Logo */}
                    <div className='LogoText' onClick={this.toHome}>Spumoni Wine</div>
                    
                    {links.map( (linkData) => {
                        return <p className={"HeaderOption" + (pathRoot === linkData.link ? ' HeaderActive' : '')} onClick={()=>this.toLink(linkData.link)} >{linkData.display}</p>
                    })}
                    
                    {/* Nav Opener */}
                    <img className='headerOpener' src='/resources/Icons/nav.png' alt='Nav'  onClick={this.toggleNav}/>

                    {/* Side Nav */}
                    <div className={'navBar' + (this.state.navOpen ? ' navBarOpen' : '')}>

                        {links.map( (linkData, idx) => {
                            return <div className={'navOpt' + (pathRoot === linkData.link ? ' navOptActive' : '')}
                                        onClick={()=>this.toLink(linkData.link)}
                                    >
                                {linkData.display}

                            </div>
                        } )}

                    </div>

                    {this.state.navOpen && 
                        <div className='navBarExiter' onClick={()=>this.setState({navOpen: false})}/>
                    }
                    
                    
                </div>


            </div>
        )
    }

}


export default withRouter(Header);