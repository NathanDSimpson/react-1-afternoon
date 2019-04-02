import React, {Component} from 'react';

class Palindrome extends Component{
    constructor(){
        super()
        this.state = {
            userInput: '',
            palindrome: ''
        }

        this.handleInput = this.handleInput.bind(this);
        this.isPalindrome = this.isPalindrome.bind(this);
    }

    handleInput(event){
        this.setState({
            userInput: event.target.value
        })
    }

    isPalindrome(){
        let str = this.state.userInput;
        let forwards = [];
        let backwards = [];
        for (let i=0; i < str.length; i++){
            forwards.push(str[i]);
            backwards.unshift(str[i]);
        }
        if (forwards.join() === backwards.join()){
            this.setState({
                palindrome: 'true'
            })
        }
        else {
            this.setState({
                palindrome: 'false'
            })

        }
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input
                className="inputLine"
                onChange={this.handleInput}></input>
                <button
                className="confirmationButton"
                onClick={this.isPalindrome}> CHECK </button>
                <span
                className="resultsBox">{this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome