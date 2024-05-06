import axios from 'axios';
import {baseURL} from './clienteAxios';

export const getAllPaisTotal = async () => {
    return await axios.get(`${baseURL}/pais/get-all`)
}


export const getAllPais = async () => {
    return await axios.get(`${baseURL}/pais/state-true`)
}


export const putStatePais = async (id , data) => {
    return await axios.put(`${baseURL}/pais/put-state/${id}`, data)
}


