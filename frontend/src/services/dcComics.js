import axios from "axios"; //llamamos axios para poder hacer los endpoints

const endpoint = "/dcComics";
const baseURL = `http://localhost:3000`;
const api = axios.create({
  baseURL,
});

//creamos conexion con back

const get = () => api.get(`/${endpoint}`);

const add = (data) => api.post(`/${endpoint}`, data);

const edit = (id) => api.put(id);

const remove = (id) => api.delete(id);

export { get, add, edit, remove };
