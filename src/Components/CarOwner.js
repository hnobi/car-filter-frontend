import React from "react";
import Card from "./Card";
import Logo from "./car.png";

const CarOwner = ({ carOwner }) => {
  const {
    first_name,
    last_name,
    country,
    car_model,
    car_model_year,
    car_color,
    gender,
    job_title,
    bio,
    email,
  } = carOwner;

  return (
    <Card>
      <div className="display-wrapper">
        <div className="carImg">
          <img src={Logo} alt="img" />
        </div>
        <div className="carOwnerInfo">
          <h2>
            {first_name} {last_name}
          </h2>
          <table className="table1">
            <tr>
              <td className="label">Brand</td>
              <td className="label">Year</td>
              <td className="label">Color</td>
            </tr>
            <tr>
              <td>{car_model}</td>
              <td>{car_model_year}</td>
              <td style={{ display: 'flex', justifyContent: 'center' }}>
                <span
                  className="dot"
                  style={{ backgroundColor: car_color }}
                ></span>
              </td>
            </tr>
          </table>
          <table className="table2">
            <tr>
              <td className="label">Country</td>
              <td className="label">Gender</td>
              <td className="label">Job</td>
            </tr>
            <tr>
              <td>{country}</td>
              <td>{gender}</td>
              <td>{job_title}</td>
            </tr>
          </table>
          <div>
            <div className="email">
              <label className="label">Email: </label>
              {email}
            </div>
            <div className="bio">
              <label className="label">Bio: </label>
              {bio}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CarOwner;
