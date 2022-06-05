import { api } from "./axiosInstance";

//-------------------> POST
export const fetchCreateAccount = async (data) => {
  try {
    let response = await api.post("/user", data);
  } catch (error) {
    console.error(error);
  }
};

//-------------------> GET
export const getUserById = async (id, token) => {
  let response = await api
    .get(`user/${id}`, { headers: token })
    .then(({ response }) => response)
    .catch(error => console.log(error))
};

export const fetchIsUserNameAvailable = async (userName) => {
  let response = await api
    .get(`user/is-email-taken/${userName}`)
    .then(({ response }) => response)
    .catch(error => console.log(error));
};

export const fetchIsEmailTaken = async (email) => {
  let response = await api
    .get(`user/is-username-taken/${email}`)
    .then(({ response }) => response)
    .catch(error => console.log(error))
};