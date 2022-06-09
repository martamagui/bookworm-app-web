import { useState } from "react";


export function useSearch() {
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

    const getByTitle = (value) => {

    }

    const getByAuthor = (value) => {

    }

    const getByHashTag = (value) => {

    }

    return {
        searchState,
        getByAuthor,
        getByTitle,
        getByHashTag
    }
}