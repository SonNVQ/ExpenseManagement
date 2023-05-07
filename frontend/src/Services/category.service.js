import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8090/api/";

const getCategories = () => {
  return axios.get(API_URL + "categories", { headers: authHeader() });
};


const getAnCategory = (id) => {
  return axios.get(API_URL + "categories?id="+id, { headers: authHeader() });
};

const deleteCategory = (id) => {
  return axios.delete(API_URL + "categories?id="+id, { headers: authHeader() });
};


const addCategory = (name,description) => {
  return axios.post(API_URL + "categories",{name,description}, { headers: authHeader() });
};

const updateCategory = (name,description,userId) => {
  return axios.put(API_URL + "categories",{name,description}, { headers: authHeader() });
};

const CategoryService = {
    getCategories,
    getAnCategory,
    addCategory,
    deleteCategory,
    updateCategory
};

export default CategoryService;