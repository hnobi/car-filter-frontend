import axios from "axios";

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export const fetchFilteredCarOwner = (queryId) => axios.get(`https://carownersapp.herokuapp.com/cars_owners/${queryId}`);
export const fetchQueryData = () => axios.get(`${proxyurl}https://ven10.co/assessment/filter.json`);
    
export const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
