import { api } from "../axiosInstance";

export const fetchLogin = async (credentials) => {
  try {
    const response = await api.post("/user/login", credentials);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
