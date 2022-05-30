
import React, { useCallback, useState, useContext, useEffect } from "react";

//Services
import { likeDislikeReview, saveUnsave } from "../services/reviewsService";
//Context
import { UserContext } from "../context/UserContext";

export function useCards({ feedResponse }) {
    const { userToken, setUserToken } = useContext(UserContext);
    const [cardState, setCardState] = useState({ liked: feedResponse.liked, saved: feedResponse.saved, loading: false, error: false, success: false, errorMsg: "", data: [] });

    const likeAction = useCallback((reviewId) => {
        setCardState({ ...cardState, loading: true });
        likeDislikeReview(userToken, reviewId).then(data => {
            if (data) {
                const isLiked = !cardState.liked
                setCardState({ ...cardState, liked: isLiked, loading: false, success: true, data: data })
            }
        }, error => {
            console.log(error)
            setCardState({ ...cardtate, error: true, loading: false, errorMsg: "Algo fue mal en el servidor" })
        })
    })

    const saveAction = useCallback((reviewId) => {
        setCardState({ ...cardState, loading: true });
        saveUnsave(userToken, reviewId).then(data => {
            if (data) {
                const isSaved = !cardState.saved
                setCardState({ ...cardState, saved: isSaved, loading: false, success: true, data: data })
            }
        }, error => {
            console.log(error)
            setCardState({ ...carState, error: true, loading: false, errorMsg: "Algo fue mal en el servidor" })
        })
    })

    return {
        likeAction,
        saveAction,
        liked: cardState.liked,
        saved: cardState.saved,
        isSucess: cardState.success,
        isError: cardState.error,
        data: cardState.data
    }
}