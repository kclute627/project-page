import React, { Component } from 'react';




class Tic extends Component {

    render(){


        return(
            <div className = "tic">
                <header className='tic__header'>Play Tic Tack Toe</header>
                 
                <div className="tic__score">
                    <div className="tic__score-top">
                        <div className="tic__score-top-1">
                            <p className="tic__score-top-1-text"></p>
                        </div>
                        <div className="tic__score-top-2">
                            <div className="tic__score-top-2-text"></div>
                        </div>
                        <div className="tic__score-top-3">
                            <div className="tic__score-top-3-text"></div>
                        </div>
                        
                    </div>
                    <div className="tic__score-middle">
                        <div className="tic__score-middle-1">
                            <p className="tic__score-middle-1-text"></p>
                        </div>
                        <div className="tic__score-middle-2">
                            <p className="tic__score-middle-2-text"></p>
                        </div>
                        <div className="tic__score-middle-3">
                            <p className="tic__score-middle-3-text"></p>
                        </div>
                        
                    </div>
                    <div className="tic__score-bottom">
                        <div className="tic__score-bottom-1">
                            <p  className="tic__score-bottom-1-text"></p>
                        </div>
                        <div className="tic__score-bottom-2">
                            <p  className="tic__score-bottom-2-text"></p>
                        </div>
                        <div className="tic__score-bottom-3">
                            <p  className="tic__score-bottom-3-text"></p>
                        </div>                    
                    </div>
                </div>
                
                <div className ="tic__players">
                    <div className ="tic__players-1">
                    Player 1
                    <div>X</div>
                    </div>
                    <div className ="tic__players-2">
                    Player 2
                    <div>O</div>
                    </div>


                </div>
                
            </div>
        )
    }
}


export default Tic;