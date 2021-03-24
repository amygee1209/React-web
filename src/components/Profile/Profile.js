import React, {Component} from "react";
import CitiesDB from './CitiesDB';
import ProfileContent from './ProfileContent';

export default class Profile extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      currDate: new Date(),
      unreadMessages: ["Haha"],
      textContent: "",
      finishWrite: false,
      gender: "",
      cities: CitiesDB,
      selCities: ""
    }
  }

  handleChange = (event) => {
    const {name, value, type, checked, options, multiple} = event.target;
    const selectedCities=[];
    
    if (multiple) {
      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
          selectedCities.push(options[i].value + ", ");
        }
      }
      this.setState({selCities: selectedCities})
    } else {
      type === "checkbox" ?
        this.setState({ [name]: checked })
        : this.setState({ [name]: value })
    }
  }

  render() {
    return (
      <div>
        <ProfileContent
          handleChange={this.handleChange}
          handleLogInOut={this.handleLogInOut}
          data={this.state}
        />
      </div>
    )
  }
}