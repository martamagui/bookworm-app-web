import { async } from "@firebase/util";
import { api } from "./axiosInstance";

//-------------------> POST

export const postReview = async (token, body) => {
    const response = await api
        .post("/review", body, { headers: { Authorization: token } })
        .then(({ response }) => response)
        .catch(error => console.log(`❗ ${error}`))
}


//-------------------> GET

export const getTopBooks = async (token) => {
    try {
        const response = await api.get("/top-books")
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const getFeed = async (token) => {
    try {
        const headers = { headers: { Authorization: token } }
        const response = await api.get("/review", headers)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const getByTitle = async (token, search) => {
    const response = await api
        .post(`/review/title/${search}`, body, { headers: { Authorization: token } })
        .then(({ response }) => response)
        .catch(error => console.log(`❗ ${error}`))
}

export const getByAuthor = async (token, search) => {
    const response = await api
        .post(`/find/author/${search}`, body, { headers: { Authorization: token } })
        .then(({ response }) => response)
        .catch(error => console.log(`❗ ${error}`))
}

export const getByHashTag = async (token, search) => {
    const response = await api
        .post(`/find/hastag/${search}`, body, { headers: { Authorization: token } })
        .then(({ response }) => response)
        .catch(error => console.log(`❗ ${error}`))
}

//-------------------> PUT

export const likeDislikeReview = async (token, reviewId) => {
    try {
        const headers = { headers: { Authorization: token } }
        const response = await api.put(`/review/like/${reviewId}`, {}, { headers: { Authorization: token } })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const saveUnsave = async (token, reviewId) => {
    try {
        const headers = { headers: { Authorization: token } }
        const response = await api.put(`/user/save-review/${reviewId}`, {}, { headers: { Authorization: token } })
        return response.data
    } catch (error) {
        console.log(error)
    }
}
