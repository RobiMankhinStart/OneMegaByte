import axios from "axios";

export const api = axios.create({
  baseURL: "https://dummyjson.com",
  headers: { "Content-Type": "application/json" },
});

const getAccessToken = () => localStorage.getItem("accessToken");
const getRefreshToken = () => localStorage.getItem("refreshToken");

api.interceptors.request.use(
  (config) => {
    const token = getAccessToken;
    console.log(token);

    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },

  (err) => {
    return Promise.reject(err);
  }
);

export const UserCreation = {
  products: async () => {
    const res = await api.get("/products");
    return res.data;
  },
  productDetails: async (id) => {
    const res = await api.get(`/products/${id}`);
    return res.data;
  },
  // RegisterUser: async (data) => {
  //   const res = await api.post("users/register", data);
  //   return res.data;
  // },
  // LoginUser: async (data) => {
  //   try {
  //     const res = await api.post("/users/login", data);
  //     return res.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
};
