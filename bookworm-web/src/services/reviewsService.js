import { api } from "./axiosInstance";


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

export const likeDislikeReview = async (token, reviewId) => {
    try {
        const headers = { headers: { Authorization: token } }
        const response = await api.put(`/review/like/${reviewId}`, headers)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const saveUnsave = async (token, reviewId) => {
    try {
        const headers = { headers: { Authorization: token } }
        const response = await api.put(`/user/save-review/${reviewId}`, headers)
        return response.data
    } catch (error) {
        console.log(error)
    }
}
