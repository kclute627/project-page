
import React, { Component } from 'react';
import Roman from '../components/Roman';




class Project extends Component {


    state = {
        currentProject: 'Roman'
    }
    render(){
        return(
            <section className="features-project">
                {this.state.currentProject === 'Roman' ? <Roman/> : null}
    
            </section>
        )

    }
}

export default Project;