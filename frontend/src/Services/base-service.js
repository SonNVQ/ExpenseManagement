import axios from "axios"

export const _axios = axios.create({ baseURL: "http://localhost:8090/api/" })

class RecordService {
    async create(record) {
        const res = await _axios.post('records', {...record});
        return res.data;
    }
    
    async getAll() {
        const res = await _axios.get('records?page=0&size=20');
        return res.data;
    }
}

class CategoryService {
    async getAll() {
        const res = await _axios.get('categories?page=0&size=1000');
        return res.data;
    }
}

class ApiService {
    Users;
    Records = new RecordService();
    Categories = new CategoryService();

    constructor() {
        _axios.interceptors.request.use((config) => {
          const token = JSON.parse(localStorage.getItem('user')).token;
          if (token) {
            config.headers.Authorization = token ? `Bearer ${token}` : undefined
          }
          return config
        })
    }
}

export const API_SERVICE = new ApiService();


