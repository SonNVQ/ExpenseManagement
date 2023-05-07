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
        const res = await _axios.get('categories?page=0&size=20');
        return res.data;
    }

    async create(category) {
        const res = await _axios.post('categories', {...category});
        return res.data;
    }
}

class ApiService {
    constructor() {
        _axios.interceptors.request.use((config) => {
        //   const jwt = localStorage.getItem('jwt')
          const token = JSON.parse(localStorage.getItem('user')).token;
          if (token) {
            config.headers.Authorization = token ? `Bearer ${token}` : undefined
          }
          return config
        })
    }

    Users;
    Records = new RecordService();
    Categories = new CategoryService();
}

export const API_SERVICE = new ApiService();


