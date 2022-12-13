import axios from "axios";
const url = 'http://192.168.1.134:5000'
const api = 'https://jsonplaceholder.typicode.com/todos'

export const getPosts = async () => {
  const data = await axios.get(`${url}/posts`)
  console.log(data)
  return data;
}

export const getData = async () => {
  const data = await axios.get(api, {
    headers: {
      'Content-Type': 'Application/json'
    }
  });
  return data;
}