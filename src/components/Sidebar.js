import React, { Component } from 'react';
import Project from '../components/Project';
import { connect } from 'react-redux'
import { setProject } from '../store/taskActions'
import { ReactComponent as Number } from '../assets/Svg/number.svg';
import { ReactComponent as Cloud } from '../assets/Svg/cloud.svg';
import { ReactComponent as Calculator } from '../assets/Svg/cal.svg';
import { ReactComponent as Puzzle } from '../assets/Svg/puzzle.svg';




class Sidebar extends Component {



    render(){

        return(            
            <div className="sidebar">
                <div className="sidebar__container">
                    <div className="sidebar__item"
                    onClick={()=> this.props.project('Roman')}>
                        <Number/>                   
                        <p>Roman Numeral</p>
                    </div>
                    <div className="sidebar__item sidebar__item-1"
                    onClick={()=>this.props.project('Weather')}>
                        <Cloud
                        className='icon__cloud'/>                   
                        <p>Weather APP</p>
                    </div>
                    <div className="sidebar__item sidebar__item-2"
                    onClick={()=>this.props.project('Cal')}>
                        <Calculator
                        className='icon__cloud'/>                   
                        <p>Calculator</p>
                    </div>
                    <div className="sidebar__item sidebar__item-3"
                    onClick={()=>this.props.project('Tic')}>
                        <Puzzle
                        className='icon__cloud'/>                   
                        <p>Sudoku</p>
                    </div>
                </div>                
            </div>
                
                      

                     
            
        )
    }
}


const mapDispatchToProps = (dispatch)=>{

    return{
        project: (name)=>dispatch(setProject(name)),
        

    }
}


export default connect(null, mapDispatchToProps)(Sidebar);