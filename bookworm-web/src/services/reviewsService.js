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
        console.log(token)
        const headers = { headers: { Authorization: token } }
        const response = await api.get("/review", headers)
        return response.data
    } catch (error) {
        console.error(error)
    }
}