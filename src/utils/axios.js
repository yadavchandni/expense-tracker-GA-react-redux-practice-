import axios from "axios";
import Cookie from "js-cookie";

const URL = process.env.NODE_ENV !== "production " ? "https://digibills-serv-stage.herokuapp.com/" : "";

const defaultAxios = axios.create({
  baseURL: URL,
});

const token = Cookie.get("token");

defaultAxios.defaults.headers.common["Authorization"] = "Bearer " + token;

export default defaultAxios;
