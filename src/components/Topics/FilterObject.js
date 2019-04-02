import React, {Component} from 'react';

class FilterObject extends Component{
    constructor(){
        super()

        this.state = {
            unFilteredArray: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ],
            userInput: '',
            filteredArray: []
        }
    }

    filterIt = userInput => {
        this.setState({
            filteredArray: this.state.unFilteredArray.filter((item) => item.userInput)
        })
    }

    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span  className="puzzleText"> Original: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
                <input onChange={(event) => this.setState({userInput: event.target.value})} className="inputLine"></input>
                <button onClick={ () => {this.filterIt(this.state.userInput)}} className="confirmationButton"> FILTER </button>
                <span className="resultsBox filterObjectRB"></span>
            </div>
        )
    }
}

export default FilterObject