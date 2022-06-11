import { useState, useContext, useCallback } from "react";
import { getByAuthor, getByHashTag, getByTitle } from "../services/reviewsService";

//Inner
import { UserContext } from "../context/UserContext";

export function useSearch() {
    const { userToken } = useContext(UserContext);
    const [searchState, setSearchState] = useState({
        isLoading: false,
        isError: false,
        isSuccess: false,
        data: []
    });


    const setLoading = (value) => {
        setSearchState({ ...searchState, isLoading: value })
    }

    const setError = (value) => {
        setSearchState({ ...searchState, isLoading: false, isError: value })
    }

    const setData = (data) => {
        setSearchState({ ...searchState, isLoading: false, isSuccess: true, data: data })
    }

    //------- FETCHS

    const fetchSearch = (type, search) => {
        if (type == "title") {
            byTitle(search)
        } else if (type == "author") {
            byAuthor(search)
        } else if (type == "hashtag") {
            byHashTag(search)
        }
    }

    const byTitle = (value) => {
        setLoading(true)
        getByTitle(userToken, value).then(data => setData(data))
    }

    const byAuthor = (value) => {
        setLoading(true)
        getByAuthor(userToken, value).then(data => setData(data))
    }

    const byHashTag = (value) => {
        setLoading(true)
        getByHashTag(userToken, value).then(data => setData(data))
    }

    return {
        searchState,
        fetchSearch,
        data: searchState.data
    }
}