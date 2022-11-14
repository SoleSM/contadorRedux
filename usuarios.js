import axios from "axios";

const baseUrl = 'https://jsonplaceholder.typicode.com/users';

export const getAllUsers = async() => {
    const res = await axios.get(baseUrl)
    return res.data;
}