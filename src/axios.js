import axios from "axios";

const instance = axios.create({
 baseURL: "https://tinder-backend-n.herokuapp.com",
});

export default instance;