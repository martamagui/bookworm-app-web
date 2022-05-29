import { data } from "autoprefixer";
import { useState, useContext, useCallback } from "react";
import { UserContext } from "../context/UserContext";

//Services
import { getTopBooks } from "../services/reviewsService";

export function useTopBooks() {
    const { userToken, setUserToken } = useContext(UserContext);
    const [topBooksState, setTopBooksState] = useState({ loading: false, error: false, success: false, errorMsg: "", data: null });

    const fetchTopBooks = useCallback(() => {

        setTopBooksState({ ...topBooksState, loading: true });
        getTopBooks(userToken).then(data => {
            if (data) {
                console.log(data)
                setTopBooksState({ ...topBooksState, loading: false, success: true, data: JSON.stringify(data) })
            }
        }, error => {
            console.log(error)
            setTopBooksState({ ...topBooksState, error: true, loading: false, errorMsg: "Algo fue mal en el servidor" })
        })
    })

    return {
        fetchTopBooks,
        isSuccess: topBooksState.success,
        isError: topBooksState.error,
        errorMsg: topBooksState.errorMsg,
        data: topBooksState.data
    }
}