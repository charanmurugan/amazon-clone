import axios from "axios";

const instance = axios.create({
  baseUrl: "http://localhost:5001/clone-96a3b/us-central1/api",
});
console.log("i am from axios");
export default instance;
