import React, { Component } from 'react';
import Project from '../components/Project';
import { connect } from 'react-redux'
import { setProject } from '../store/taskActions'
import { ReactComponent as Number } from '../assets/Svg/number.svg';
import { ReactComponent as Cloud } from '../assets/Svg/cloud.svg';
import { ReactComponent as Calculator } from '../assets/Svg/cal.svg';
import { ReactComponent as X } from '../assets/Svg/x.svg';




class Sidebar extends Component {

    


    render(){
        const {projectName} = this.props;

        return(            
            <div className="sidebar">  
                <div className="sidebar__container">
                    <div className= {projectName === 'Roman' || !projectName ? "sidebar__item sidebar__item-highlighted" : "sidebar__item" } 
                    onClick={()=> this.props.project('Roman')}>
                        <Number/>                   
                        <p>Roman Numeral</p>
                    </div>
                    <div className= {projectName === 'Weather' ? "sidebar__item sidebar__item-1 sidebar__item-highlighted" :  "sidebar__item sidebar__item-1" } 
                    onClick={()=>this.props.project('Weather')}>
                        <Cloud
                        className='icon__cloud'/>                   
                        <p>Weather APP</p>
                    </div>
                    <div className={projectName === 'Cal' ? "sidebar__item  sidebar__item-highlighted" :  "sidebar__item " }
                    onClick={()=>this.props.project('Cal')}>
                        <Calculator
                        className='icon__cloud'/>                   
                        <p>Calculator</p>
                    </div>
                    <div className={projectName === 'Tic' ? "sidebar__item  sidebar__item-highlighted" :  "sidebar__item " }
                    onClick={()=>this.props.project('Tic')}>
                        <X
                        className='icon__cloud'/>                   
                        <p>Tic Tack Toe</p>
                    </div>
                </div>                
            </div>
                
                      

                     
            
        )
    }
}

const mapStateToProps = (state)=>{
    
    return {
        projectName: state.projectName, 
        loading: state.loading, 
    }

}

const mapDispatchToProps = (dispatch)=>{

    return{
        project: (name)=>dispatch(setProject(name)),
        

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);