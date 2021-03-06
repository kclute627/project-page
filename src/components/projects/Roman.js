import React, { Component } from 'react';
import {ReactComponent as Warning} from '../../assets/Svg/warning.svg'





class Roman extends Component{

    state = {
        currentNum: null,
        finalNumber: '',
        roman: null,
        error: false,
    }

    numberHandler = (event) => {
        
        this.setState({
            currentNum: event.target.value
        })
    }

    submitHandler = (num) => {

        let numStart = num;
        let romanNum = '';
        let isNumber = null;

        isNumber = !isNaN(numStart);

        if(!isNumber || num > 4000){
            this.setState({
                currentNum: '',
                error: true,
                roman: null,
                
            })
        }


        // run test on num

        while(numStart > 0 && isNumber && num <= 4000){
            numStart = parseInt(numStart);

      
        if(numStart >= 1000){
            romanNum = `${romanNum}M`;
            numStart -= 1000;
        }else if(numStart >= 900 && numStart <= 999){
            romanNum = `${romanNum}CM`;
            numStart -= 900;
        }else if(numStart >= 500){
            romanNum = `${romanNum}D`;
            numStart -= 500;
        }else if(numStart >= 400 && numStart <= 499){
            romanNum = `${romanNum}CD`;
            numStart -= 400;
        }else if(numStart >= 100){
            romanNum = `${romanNum}C`;
            numStart -= 100;
        }else if(numStart >= 90 && numStart <= 99){
            romanNum = `${romanNum}XC`;
            numStart -= 90;
        }else if(numStart >= 50){
            romanNum = `${romanNum}L`;
            numStart -= 50;
        }else if(numStart >= 40 && numStart <= 49){
            romanNum = `${romanNum}XL`;
            numStart -= 40;
        }else if(numStart >= 10){
            romanNum = `${romanNum}X`;
            numStart -= 10;
        }else if(numStart === 9){
            romanNum = `${romanNum}IX`;
            numStart -= 9;
        }else if(numStart >= 5){
            romanNum = `${romanNum}V`;
            numStart -= 5;
        }else if(numStart === 4){
            romanNum = `${romanNum}IV`;
            numStart -= 4;
        }else if(numStart >= 1){
            romanNum = `${romanNum}I`;
            numStart -= 1;
        }
    }
    if(numStart <= 0){
        this.setState({

            roman: romanNum,
            currentNum: '',
            error: false,

        })
    }
    

       console.log(`numStart =  ${numStart} ---- romanNum =${romanNum}`)

    }
    
    

    render(){
        

              



        return(
            <div className="roman">
                <div className="roman__top">
                    <h1 className="roman__header">Enter a number below to get the Roman Numeral</h1>
                   
                        <input
                        className = "roman__input"
                        type="text"
                        value= {this.state.currentNum}
                        onChange={this.numberHandler}
                        >
                        </input>
                        {this.state.error ? <div className="roman__input-error">
                           <Warning /> <p>Please enter a number between 1 and 4000</p>
                        </div> : null}
                        <button 
                        disabled = {!this.state.currentNum}
                        className="roman__btn"
                        type="submit"
                        onClick={(num) => this.submitHandler(this.state.currentNum)}>Submit</button>
                    
                    
                </div>
                {this.state.roman ? <div className="roman__bottom">
                    <h2 className="roman__header-1">Roman Numeral</h2>
                    <h3 className="roman__header-2">{this.state.roman}</h3>

                </div>: null}
                
            </div>
        )}
}

export default Roman