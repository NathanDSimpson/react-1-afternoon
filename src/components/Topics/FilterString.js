import React, {Component} from 'react';

class FilterString extends Component{
    constructor(){
        super()

        this.state = {
            unFilteredArray: ["James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ],
            userInput: '',
            filteredArray: []
        }

        this.handleInput = this.handleInput.bind(this);
        this.filterIt = this.filterIt.bind(this);
    }

    handleInput(event){
        this.setState({
            userInput: event.target.value
        })
    }

    filterIt(){
        let str = this.state.userInput;
        let arr = this.state.unFilteredArray;
        let filtered = arr.filter(item => item.includes(str))
        this.setState({
            filteredArray: filtered
        })
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span
                className="puzzleText">
                Original: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
                <input
                className="inputLine" 
                onChange={this.handleInput}></input>
                <button
                className="confirmationButton"
                onClick={this.filterIt}> FILTER</button>
                <span
                className="resultsBox filterStringRB">
                Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }
}

export default FilterString