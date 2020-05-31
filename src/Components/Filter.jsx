import React, { Component, Fragment } from 'react'
import Card from './Card';
import CarOwner from './CarOwner';


export default class Filter extends Component {



  render() {
    const countryList = ['China','South african', 'France','Mexico', 'Japan','Estonia','Colombia'];
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
    return (
      <Fragment>
        <Card>
          <div className="filter">
            <h2> 1990 - 2010</h2>
            <h3>Male</h3>
            <div className="country_list">
              {countryList.map((country, index) => (
                <p key={index}>{country}</p>
              ))}
            </div>
            <div className="colors">
              {colors.map((color, index) => (
                <span  key ={index} className="dot" style={{ backgroundColor: color }}>
                </span>
              ))}
            </div>
          </div>
        </Card>
        <CarOwner/>
      </Fragment>
    );
  }
}
