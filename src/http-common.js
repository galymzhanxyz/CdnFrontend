import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:46235/api",
  headers: {
    "Content-type": "application/json"
  }
});