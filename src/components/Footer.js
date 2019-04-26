import React, { Component } from 'react';






class Footer extends Component {



    render(){

        return(
            <div className = "footer">
                            
                                    
                <div className="footer__icon-block">
                <h2 className="footer__header "> </h2>
                        <div className= "footer__header-icons">
                            <a href="https://www.facebook.com/kyle.clutter.18?ref=bookmarks" target="_blank" className="footer-icon footer-icon-fb fab fa-facebook"></a>
                            <a href="https://www.freecodecamp.org/kclute627" target="_blank" className="footer-icon footer-icon-fcc  fab fa-free-code-camp" ></a>
                            <a href="https://www.linkedin.com/in/kyle-clutter-b844b077/" target="_blank" className="footer-icon footer-icon-link fab fa-linkedin" ></a>
                            <a href = "https://www.codewars.com/users/kclute627" target="_blank" className ="footer-icon footer-icon-codewars "><img  src="https://www.codewars.com/users/kclute627/badges/micro" alt="codewars"></img></a>
                            <a href="https://github.com/kclute627" target="_blank" className="footer-icon footer-icon-git fab fa-github" ></a>
                            <a href="mailto:kyclutter@gmail.com" target="_blank" className="footer-icon footer-icon-email fas fa-at" ></a>
                        </div>
                </div> 
                                

                   
                
               
               
                       
            </div>

        )
    }
}


export default Footer;