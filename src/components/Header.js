import React,  { Component } from 'react';
import { ReactComponent as Pin } from '../assets/Svg/location.svg';
import profile from '../assets/88.jpg';




class Header extends Component{


    render(){

        return(
            <div className="header">            
                <div className="header__container">
                    <img 
                    className="header__profile"
                    src={profile} alt="photo"/>
                    
                    <div className="header__text">
                        <h1>Kyle Clutter </h1>
                        <h1>Front End Web-Developer</h1>
                    </div>
                    <div className="header__location">
                        <Pin classname="header__icon-pin"/>
                        <p className="header__location-text">Chicago, IL</p>

                    </div>
                    
                </div>
            </div>
        )
    }
}


export default Header;