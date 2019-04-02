import React, {Component} from 'react';

class Sum extends Component {
    constructor(){
        super()
        this.state = {
            userInput1: 0,
            userInput2: 0,
            sum: null
        }

        this.handleInput1 = this.handleInput1.bind(this);
        this.handleInput2 = this.handleInput2.bind(this);
        this.addition = this.addition.bind(this);
    }

    handleInput1(event){
        this.setState({
            userInput1: parseInt(event.target.value, 10)
        })
    }

    handleInput2(event){
        this.setState({
            userInput2: parseInt(event.target.value, 10)
        })
    }

    addition(){
        this.setState({
            sum: this.state.userInput1 + this.state.userInput2
        }) 
    }


    render(){
        return (
            <div className="puzzleBox sumPB">
                <h4> Add </h4>
                <input
                className="inputLine"
                onChange={this.handleInput1}></input>
                <input
                className="inputLine"
                onChange={this.handleInput2}></input>
                <button
                className="confirmationButton"
                onClick={this.addition}> ADD </button>
                <span
                className="resultsBox">
                {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum