import { api } from "./axiosInstance";


//-------------------> GET

export const getTopBooks = async (token) => {
    try {
        const headers = { headers: { Authorization: "Bearer " + `${token}` } }
        const response = await api.get("/top-books", headers)
        return response.data
    } catch (error) {
        console.error(error)
    }
}