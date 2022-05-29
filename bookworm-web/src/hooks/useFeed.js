import React, { useState, useContext, useCallback } from "react";
import { getFeed } from "../services/reviewsService";
//Context
import { UserContext } from "../context/UserContext";


export function useFeed() {
    const { userToken, setUserToken } = useContext(UserContext);
    const [feedState, setFeedState] = useState({ loading: false, error: false, success: false, errorMsg: "", data: [] });

    const fetchFeed = useCallback(() => {
        setFeedState({ ...feedState, loading: true });

        getFeed(userToken).then(data => {
            if (data) {
                console.log(data[0])
                setFeedState({ ...feedState, loading: false, success: true, data: data });
            }
        }, error => {
            console.log(error)
            setFeedState({ ...feedState, error: true, loading: false, errorMsg: "Algo fue mal en el servidor" });
        })
    }, []);

    return {
        fetchFeed,
        isSuccess: feedState.success,
        isLoading: feedState.loading,
        errorMsg: feedState.errorMsg,
        data: feedState.data
    }
}