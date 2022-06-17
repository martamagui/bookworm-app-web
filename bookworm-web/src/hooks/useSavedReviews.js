import { useState, useContext, useCallback } from "react";
import { getByAuthor, getByHashTag, getByTitle, getSavedReviews } from "../services/reviewsService";

//Inner
import { UserContext } from "../context/UserContext";

export function useSavedReviews() {
    const { userToken } = useContext(UserContext);
    const [savedState, setSavedState] = useState({
        isLoading: false,
        isError: false,
        isSuccess: false,
        data: []
    });


    const setLoading = (value) => {
        setSavedState({ ...savedState, isLoading: value })
    }

    const setError = (value) => {
        setSavedState({ ...savedState, isLoading: false, isError: value })
    }

    const setData = (data) => {
        setSavedState({ ...savedState, isLoading: false, isSuccess: true, data: data })
    }

    //------- FETCHS

    const fetchSavedReviews = () => {
        setLoading(true)
        getSavedReviews(userToken).then(data => setData(data))
    }

    return {
        savedState,
        fetchSavedReviews,
        data: savedState.data
    }
}