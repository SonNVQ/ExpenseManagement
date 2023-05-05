import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8090/api/";

const getRecords = () => {
  return axios.get(API_URL + "records", { headers: authHeader() });
};

const addRecord = (name,description,userId) => {
  return axios.post(API_URL + "records",{name,note,type,amount,date,categories}, { headers: authHeader() });
};

const RecordService = {
    getRecords,
    addRecord,
};

export default RecordService;