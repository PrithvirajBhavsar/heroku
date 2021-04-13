import axios from "axios";

const url = "https://backendpri.herokuapp.com/";

export const getUser = ()=> axios.get(url);
export const postUser = (user)=> axios.post(url,user);
export const postShop = (shop)=> axios.post(`${url}openshop`,shop);
export const getShop = ()=> axios.get(`${url}openShop`);
