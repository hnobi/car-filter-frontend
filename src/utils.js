import Axios from "axios";

export const filterQueryRequest = (querykey, value) => {
  return Axios.get(`https://carownersapp.herokuapp.com/cars_owners?${querykey}=${value}&limit=10`);
}

export const filterDateRequest = () => {
  return Axios.get(
    `https://carownersapp.herokuapp.com/cars_owners?startDate=1990&endDate=2010&limit=10`
  );
};
