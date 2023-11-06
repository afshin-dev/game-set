import axios, { AxiosInstance } from "axios";

const client: AxiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2a1666fd6f7748ac982fc9d6292a8edd",
  },
});

export default client;
