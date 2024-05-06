import axios from 'axios';
import {baseURL} from './clienteAxios';

export const createRegistroUser = async (data) => {
    return await axios.post(`${baseURL}/user/create`, data)
}


