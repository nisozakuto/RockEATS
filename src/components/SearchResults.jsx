import React, { Component } from 'react'

export default class SearchResults extends Component {
    constructor(props){
        super(props)
        this.state = {
          };
    }
    render() {
        return (
            <section id="results">
                {this.props && this.props.results ? 
                (<>
                {this.props.results.results.map((e) => {return(<p>{e.title}</p>)})}
                </> )                
                : <h3>No data here</h3>  }
            </section>
        )
    }
}
