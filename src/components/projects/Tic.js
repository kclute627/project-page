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
        currentPlayer: 'player2'

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

    // determine what player it is 


    // switch user after every turn 
    switchUser = () => {
        let currentUser = this.state.currentPlayer;

        if(currentUser === 'player1'){
            this.setState({currentPlayer: 'player2'})
        }else{
            this.setState({currentPlayer: 'player1'})
        }
    }


    // add a x or an o to each square onClick 
    addLetterHandler = (location1, location2)=> {
        if(this.state.currentPlayer === 'player1'){
            let newGameMap = this.state.gameMap;
            newGameMap[location1][location2] = 'X'
            this.setState({
                gameMap: [...newGameMap]
            })
        }else{
            let newGameMap = this.state.gameMap;
            newGameMap[location1][location2] = 'O'
            this.setState({
                gameMap: [...newGameMap]
            })
        }
        this.switchUser();
    }

    // check for a winner after every turn 

    render(){

        const { startPage, gameMap, player1Name, player2Name, currentPlayer } = this.state;
        
        const mainGame = (
            <Fragment>
                 <div className="tic__score">
                    <div className="tic__score-top" >
                        <div className="box">
                            <p 
                            className={gameMap[0][0]==='X' ? "text green" : "text red"}
                            onClick={gameMap[0][0] ? null : ()=> this.addLetterHandler(0,0, currentPlayer)}
                            >{gameMap[0][0]}</p>
                        </div>
                        <div className="box">
                            <p 
                            className={gameMap[0][1]==='X' ? "text green" : "text red"}
                            onClick={gameMap[0][1] ? null : ()=> this.addLetterHandler(0,1, currentPlayer)}>
                            {gameMap[0][1]}</p>
                        </div>
                        <div className="box">
                            <p 
                            className={gameMap[0][2]==='X' ? "text green" : "text red"}
                            onClick={gameMap[0][2] ? null : ()=> this.addLetterHandler(0,2, currentPlayer)}>
                            {gameMap[0][2]}</p>
                        </div>
                        
                    </div>
                    <div className="tic__score-middle">
                        <div className="box">
                            <p 
                            className={gameMap[1][0]==='X' ? "text green" : "text red"}
                            onClick={gameMap[1][0] ? null : ()=> this.addLetterHandler(1,0, currentPlayer)}
                            >{gameMap[1][0]} </p>
                        </div>
                        <div className="box">
                            <p 
                            className={gameMap[1][1]==='X' ? "text green" : "text red"}
                            onClick={gameMap[1][1] ? null : ()=> this.addLetterHandler(1,1, currentPlayer)}
                            >{gameMap[1][1]}</p>
                        </div>
                        <div className="box">
                            <p 
                            className={gameMap[1][2]==='X' ? "text green" : "text red"}
                            onClick={gameMap[1][2] ? null : ()=> this.addLetterHandler(1,2, currentPlayer)}
                            >{gameMap[1][2]}</p>
                        </div>
                        
                    </div>
                    <div className="tic__score-bottom">
                        <div className="box">
                            <p  
                            className={gameMap[2][0]==='X' ? "text green" : "text red"}
                            onClick={gameMap[2][0] ? null : ()=> this.addLetterHandler(2,0, currentPlayer)}
                            >{gameMap[2][0]}</p>
                        </div>
                        <div className="box">
                            <p  
                            className={gameMap[2][1]==='X' ? "text green" : "text red"}
                            onClick={gameMap[2][1] ? null : ()=> this.addLetterHandler(2,1, currentPlayer)}
                            >{gameMap[2][1]}</p>
                        </div>
                        <div className="box">
                            <p  
                            className={gameMap[2][2]==='X' ? "text green" : "text red"}
                            onClick={gameMap[2][2] ? null : ()=> this.addLetterHandler(2,2, currentPlayer)}
                            >{gameMap[2][2]}</p>
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