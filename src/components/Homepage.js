import React, { Component } from "react";
import Roman from '../components/Roman';



class Homepage extends Component {


    render(){


        return(
            <div className ="container">
                <header className = "header">
                Header
                
                </header>
                <div className="sidebar">
                Sidebar
                </div>
                <section className="features-project">

                
                <Roman />

                </section>
                <div className="discription">
                    Talk about current project

                </div>
                <footer className="footer">
                Footer

                </footer>
            
            </div>
        )
    }
}




export default Homepage;