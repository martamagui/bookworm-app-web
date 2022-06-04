import { api } from "./axiosInstance";

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
    console.error(error);
  }
};

//-------------------> GET
export const getUserById = async (id, token) => {
  try {
    let response = await api
      .get(`user/${id}`, { headers: token })
      .then(({ response }) => response);

  } catch (error) {
    console.error(error);
  }
};

export const fetchIsUserNameAvailable = async (userName) => {
  try {
    let response = await api
      .get(`user/is-email-taken/${userName}`)
      .then(({ response }) => response);

  } catch (error) {
    console.error(error);
  }
};

export const fetchIsEmailTaken = async (email) => {
  try {
    let response = await api
      .get(`user/is-username-taken/${email}`)
      .then(({ response }) => response);

  } catch (error) {
    console.error(error);
  }
};