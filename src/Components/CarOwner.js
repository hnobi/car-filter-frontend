import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { fetchFilteredCarOwner } from "./../utils";
import Card from "./Card";
import carImg from "./car.png";
import Logo from "./Logo";
import backImg from "./back.png";
import Loader from "./Loader";



class CarOwner extends React.Component {
  state = {
    carOwners: [],
    loading: true,
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const carOwners = await fetchFilteredCarOwner(id);
    if (carOwners) {
      this.setState({ carOwners: carOwners.data.message, loading: false });
    }
  }

  render() {
    const { carOwners, loading } = this.state;
     
    if(!loading && carOwners.length < 1){
    return <h2 className='no-data'>No Data {" "} </h2>
    }



    return (
      <Fragment>
        {!loading ? (
          <div className="wrapper">
            <Link to={"/car_owners/filter"} className="link home">
              <Logo text="Home" image={backImg} />
            </Link>
            {carOwners.map((carOwner, index) => (
              <Card key={index}>
                <div className="display-wrapper">
                  <div className="carImg">
                    <img src={carImg} alt="img" />
                  </div>
                  <div className="carOwnerInfo">
                    <h2>
                      {carOwner.first_name} {carOwner.last_name}
                    </h2>
                    <table className="table1">
                      <thead>
                        <tr>
                          <td className="label">Brand</td>
                          <td className="label">Year</td>
                          <td className="label">Color</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{carOwner.car_model}</td>
                          <td>{carOwner.car_model_year}</td>
                          <td
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <span
                              className="dot"
                              style={{ backgroundColor: carOwner.car_color }}
                            ></span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="table2">
                      <thead>
                        <tr>
                          <td className="label">Country</td>
                          <td className="label">Gender</td>
                          <td className="label">Job</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{carOwner.country}</td>
                          <td>{carOwner.gender}</td>
                          <td>{carOwner.job_title}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div>
                      <div className="email">
                        <label className="label">Email: </label>
                        {carOwner.email}
                      </div>
                      <div className="bio">
                        <label className="label">Bio: </label>
                        {carOwner.bio}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Loader/>
        )}
      </Fragment>
    );
  }
}

export default CarOwner;
