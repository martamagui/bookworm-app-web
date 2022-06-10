import { useState, useContext } from "react";
import { getByAuthor, getByHashTag, getByTitle } from "../services/reviewsService";

//Inner
import { UserContext } from "../context/UserContext";

export function useSearch() {
    const { userToken, setUserToken } = useContext(UserContext);
    const [searchState, setSearchState] = useState({
        isLoading: false,
        isError: false,
        isSuccess: false,
        data: null
    })

    const setLoading = (value) => {
        setSearchState({ ...searchState, isLoading: value })
    }

    const setError = () => {
        setSearchState({ ...searchState, isLoading: false, isError: value })
    }

    const setData = (data) => {
        setSearchState({ ...searchState, isLoading: false, isSuccess: true, data: data })
    }

    //------- FETCHS

    const byTitle = (value) => {
        getByTitle(userToken, value)
    }

    const byAuthor = (value) => {
        getByAuthor(userToken, value)
    }

    const byHashTag = (value) => {
        getByHashTag(userToken, value)
    }

    return {
        searchState,
        byAuthor,
        byTitle,
        byHashTag
    }
}