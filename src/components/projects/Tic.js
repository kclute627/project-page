import React, { Component, Fragment } from 'react';




class Tic extends Component {

    state = {
        startPage: false,
        gameMap: [  
                    ['','',''],
                    ['','',''],
                    ['','','']
                ],
        player1Name: '',
        player2Name: '',

    }

    playerNameHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = () => {
        this.setState({
            startPage: false,
        })
    }

    render(){

        const { startPage, gameMap, player1Name, player2Name } = this.state;
        
        const mainGame = (
            <Fragment>
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
                    {player1Name ? player1Name : 'Player 1'}
                    <p>X</p>
                    </div>
                    <div className ="tic__players-2">
                    {player2Name ? player2Name : "Player 2"}
                    <p>O</p>
                    </div>


                </div>
            </Fragment>
            
        )

        const signIn = (
            <Fragment>
                <div className="signin">
                    <h1 className='signin__header'>Let's Play Please Enter Players Names</h1>
                    <div className="signin__content">
                        <div className="signin__player">
                            <p>Player 1 Name</p>
                            <input
                            type='text'
                            name= 'player1Name'
                            placeholder="Player 1 Name"
                            onChange = {this.playerNameHandler} />
                        </div>
                        <div className="signin__player">
                            <p>Player 2 Name</p>
                            <input
                            type='text'
                            name= 'player2Name'
                            placeholder="Player 2 Name"
                            onChange = {this.playerNameHandler} />
                        </div>
                        <button
                        onClick={this.submitHandler}>Submit</button>
                        

                    </div>
                </div>
            </Fragment>

        )

            
            return(
            <div className = "tic">
                <header className='tic__header'>Play Tic Tack Toe</header>
                {startPage ? signIn : mainGame}
                 
               
                
            </div>
        )
    }
}


export default Tic;