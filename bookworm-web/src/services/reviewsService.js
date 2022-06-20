import { async } from "@firebase/util";
import { api } from "./axiosInstance";

//-------------------> POST

export const postReview = async (token, body) => {
    const response = await api
        .post("/review", body, { headers: { Authorization: token } })
        .catch(error => console.log(`❗ ${error}`))
    return response.data
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

export const getSavedReviews = async (token) => {
    const response = await api
        .get(`/profile/saved/posts`, { headers: { Authorization: token } })
        .catch(error => console.log(`❗ ${error}`))
    return response.data
}

export const getByTitle = async (token, search) => {
    const response = await api
        .get(`/review/title/${search}`, { headers: { Authorization: token } })
        .catch(error => console.log(`❗ ${error}`))
    return response.data
}

export const getByAuthor = async (token, search) => {
    const response = await api
        .get(`/find/author/${search}`, { headers: { Authorization: token } })
        .catch(error => console.log(`❗ ${error}`))
    return response.data
}

export const getByHashTag = async (token, search) => {
    const response = await api
        .get(`/find/hastag/${search}`, { headers: { Authorization: token } })
        .catch(error => console.log(`❗ ${error}`))
    return response.data
}

export const getDetail = async (token, id) => {
    const response = await api
        .get(`/review/${id}`, { headers: { Authorization: token } })
        .catch(error => console.log(`❗ ${error}`))
    return response.data
}

//-------------------> PUT

export const likeDislikeReview = async (token, reviewId) => {
    try {
        const response = await api.put(`/review/like/${reviewId}`, {}, { headers: { Authorization: token } })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const saveUnsave = async (token, reviewId) => {
    try {
        const response = await api.put(`/user/save-review/${reviewId}`, {}, { headers: { Authorization: token } })
        return response.data
    } catch (error) {
        console.log(error)
    }
}
