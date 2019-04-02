import React, {Component} from 'react';

class FilterObject extends Component{
    constructor(){
        super()

        this.state = {
            unFilteredArray: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ],
            userInput: '',
            filteredArray: []
        }
        this.filterIt = this.filterIt.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event){
        this.setState({
            userInput: event.target.value
        })
    }

    filterIt(){
        let prop = this.state.userInput;
        let arr = this.state.unFilteredArray;
        let filtered = arr.filter(item => item.hasOwnProperty(prop))
        this.setState({
            filteredArray: filtered
        })
    }

    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span  
                className="puzzleText"> 
                Original: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
                <input 
                onChange={this.handleInput} 
                className="inputLine"></input>
                <button 
                onClick={this.filterIt} 
                className="confirmationButton"> 
                FILTER </button>
                <span 
                className="resultsBox filterObjectRB">
                Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }
}

export default FilterObject