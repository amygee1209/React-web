import React, {Component} from "react";

export default class StarWars extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      character: {}
    }
  }
    
  componentDidMount() {
    this.setState({ loading: true })
    fetch("https://swapi.dev/api/people/1/")
      .then(res => res.json())
      .then(data => {
        this.setState ({
          loading: false,
          character: data
        })
      })
  }
  
  render() {
    const loadingText = this.state.loading ?
     "Loading..." : this.state.character.name

    return (
      <div>
        <h3>Fetched Star Wars API:</h3>
        <p>{loadingText}</p>
      </div>
    )
  }
}