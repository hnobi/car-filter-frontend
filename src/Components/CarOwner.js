import React from "react";
import Card from "./Card";
import Logo from "./car.png";

const CarOwner = () => {
  return (
    <Card>
      <div className="display-wrapper">
        <div className="carImg">
          <img src={Logo} alt="img" />
        </div>
        <div className="carOwnerInfo">
          <h2>Firstname Lastname</h2>
          <table className="table1">
            <tr>
              <td className="label">Brand</td>
              <td className="label">Year</td>
              <td className="label">Color</td>
            </tr>
            <tr>
              <td>Lois</td>
              <td>Griffin</td>
              <td>Griffin</td>
            </tr>
          </table>
          <table className="table2">
            <tr>
              <td className="label">Country</td>
              <td className="label">Gender</td>
              <td className="label">Job</td>
            </tr>
            <tr>
              <td>Lois</td>
              <td>Griffin</td>
              <td>Griffin</td>
            </tr>
          </table>
          <div>
            <div className="email">
              <label className="label">Email: </label>
              hnobi08hnobi08hnobi08@yahoo.com
            </div>
            <div className="bio">
              <label className="label">Bio: </label>
              sjsjjjjjjsjsjsjs nsnsnsnnsnsn
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CarOwner;
