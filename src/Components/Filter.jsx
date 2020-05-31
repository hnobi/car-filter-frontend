import React, { Component, Fragment } from "react";
import Card from "./Card";
import CarOwner from "./CarOwner";
import {filterDateRequest, filterQueryRequest} from './../utils';


export default class Filter extends Component {
  state = {
    carOwners: [],
  };

  handleFilterClick =  async (filter, value) => {
    

    let result = ''
    switch (filter) {
      case "color":
      case "gender":
      case "country":
        result = await filterQueryRequest(filter, value);
      break;
      default:
        result = "";
    }
    this.setState({carOwners: result.data.message})

  }
handleDateClick = async() => {
    const result = await filterDateRequest();
    this.setState({ carOwners: result.data.message });
}


  render() {
    const countryList = [
      "China",
      "South African",
      "France",
      "Mexico",
      "Japan",
      "Estonia",
      "Colombia",
    ];
    const colors = [
      "Aquamarine",
      "Goldenrod",
      "Pink",
      "Red",
      "Green",
      "Indigo",
      "Khaki",
      "Puce",
      "Yellow",
      "Turquoise",
      "Fuscia",
    ];

    const { loading, carOwners } = this.state;
  console.log(loading, carOwners)
    return (
      <Fragment>
        <Card>
          <div className="filter">
            <h2 onClick={this.handleDateClick} className="pointer">
              {" "}
              1990 - 2010
            </h2>
            <h3
              className="pointer"
              onClick={() => this.handleFilterClick("gender", "Male")}
            >
              Male
            </h3>
            <div className="country_list">
              {countryList.map((country, index) => (
                <p
                  key={index}
                  className="pointer"
                  onClick={() => this.handleFilterClick("country", country)}
                >
                  {country}
                </p>
              ))}
            </div>
            <div className="colors">
              {colors.map((color, index) => (
                <span
                  key={index}
                  onClick={() => this.handleFilterClick("color", color)}
                  className="dot pointer"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
          </div>
        </Card>
        {carOwners.length > 0 &&
          carOwners.map((carOwner) => <CarOwner carOwner={carOwner} />)}
      </Fragment>
    );
  }
}
