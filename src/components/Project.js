
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Roman from './projects/Roman';
import Tic from './projects/Tic';
import Cal from './projects/Cal';
import Weather from './projects/Weather';




class Project extends Component {

    


    state = {
        currentProject: null,
        loading: false,
    }

    
    render(){
        if(this.props.projectName && this.state.currentProject !== this.props.projectName){
            this.setState({currentProject: this.props.projectName})
        }
       
        const {currentProject} = this.state;
        return(
            
            <section className="features-project">
                {!currentProject ? <Roman/> :  currentProject === 'Roman' ? <Roman/> :
                currentProject === 'Tic' ? <Tic/> : currentProject === 'Cal' ? <Cal/> : currentProject === 'Weather' ? <Weather/> : null }
            </section>
        )

    }
}


const mapStateToProps = (state)=>{
    console.log(state, "MAPSTATE")
    return {
        projectName: state.projectName, 
        loading: state.loading, 
    }

}

export default connect(mapStateToProps)(Project);