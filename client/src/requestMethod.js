import axios from "axios";

const BASE_URL="https://mernfashionop.herokuapp.com/api/";
//const TOKEN="http://localhost:5000/api/";

export const publicRequest=axios.create({
    baseURL:BASE_URL,
})

/* export const userRequest=axios.create({
    baseUrl:BASE_URL,
    header:{token:"Bearer "}
}) */