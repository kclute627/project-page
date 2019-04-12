import React, { Component } from "react";
import Roman from '../components/Roman';
import Project from '../components/Project';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';



class Homepage extends Component {


    render(){


        return(
            <div className ="container">
                
                <Header/>                             
                <Sidebar/>
                <Project /> 
                
                
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