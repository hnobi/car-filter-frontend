import React, { Component, Fragment } from "react";
import Card from "./Card";
import { fetchQueryData, capitalizeFirstLetter } from "./../utils";
import Logo from "./Logo";
import filterImg from "./filter.png";
import { Link } from "react-router-dom";
import Loader from './Loader';

export default class Filter extends Component {
  state = {
    loading: true,
    queryDatas: [],
  };

  async componentDidMount() {
    const queryDatas = await fetchQueryData();
    if (queryDatas) {
      this.setState({ loading: false, queryDatas: queryDatas.data });
    }
  }

  render() {
    const { loading, queryDatas } = this.state;
    return (
      <Fragment>
        {!loading ? (
          <div className="wrapper">
            <Logo text="Filter" image={filterImg} />
            {queryDatas &&
              queryDatas.map((queryData, index) => (
                <Link
                  key={index}
                  className="link"
                  to={`/car_owners/filter/${queryData.id}`}
                >
                  <Card>
                    <div className="filter">
                      <h2>
                        {" "}
                        {queryData.start_year} - {queryData.end_year}{" "}
                      </h2>
                      <h3>{capitalizeFirstLetter(queryData.gender)}</h3>
                      <div className="country_list">
                        {queryData.countries.map((country, i) => (
                          <p key={i}> {country} </p>
                        ))}
                      </div>
                      <div className="colors">
                        {queryData.colors.map((color, i) => (
                          <span
                            key={i}
                            className="dot"
                            style={{ backgroundColor: color }}
                          ></span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
          </div>
        ) : (
          <Loader />
        )}
      </Fragment>
    );
  }
}
