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
  try {
    let response = await api.get(`/user/${id}`, { headers: { Authorization: token } })
    return response.data
  } catch (error) {
    console.log("error")
  }

};

export const getProfileInfo = async (token) => {
  let response = await api.get(`/profile/my-profile`, { headers: { Authorization: token } })
    .catch(error => console.log(`❗ ${error}`))
  return response.data
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