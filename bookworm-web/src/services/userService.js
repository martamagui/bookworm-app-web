import { api } from "./axiosInstance";
import { authConfig } from "./auth/userAuth";

//-------------------> POST
export const createAccount = async (
  userName,
  fullName,
  email,
  password,
  birthDate,
  country,
  city,
  address,
  description,
  avatar,
  banner,
  subscribedToNewsLetter
) => {
  try {
    let response = await api.post("/user", {
      userName: `${userName}`,
      fullName: `${fullName}`,
      email: `${email}`,
      password: `${password}`,
      birthDate: `${birthDate}`,
      country: `${country}`,
      city: `${city}`,
      address: `${address}`,
      description: `${description}`,
      avatar: `${avatar}`,
      banner: `${banner}`,
      subscribedToNewsLetter: subscribedToNewsLetter,
    });
  } catch (error) {
    console.log(error);
  }
};

//-------------------> GET
export const getUserById = async (id) => {
  try {
    let response = await api
      .get(`user/${id}`, { headers: authConfig })
      .then(({ response }) => response);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
