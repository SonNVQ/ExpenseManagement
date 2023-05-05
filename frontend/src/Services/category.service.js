import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8090/api/";


const getAnCategory = (id) => {
  return axios.get(API_URL + "categories?id="+id, { headers: authHeader() });
};

const addCategory = (name,description,userId) => {
  return axios.post(API_URL + "categories",{name,description,userId}, { headers: authHeader() });
};

const UserService = {
    getAnCategory,
    addCategory,
};

export default UserService;