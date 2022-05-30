import { data } from "autoprefixer";
import React, { useCallback, useState } from "react";
import { likeDislikeReview, saveUnsave } from "../services/reviewsService";

export function useCards() {
    const { userToken, setUserToken } = useContext(UserContext);
    const [cardState, setCardState] = useState({ loading: false, error: false, success: false, errorMsg: "", data: [] });

    const likeAction = useCallback((reviewId) => {
        setCardState({ ...cardState, loading: true });
        likeDislikeReview(userToken, reviewId).then(data => {
            if (data.message != null) {
                setCardState({ ...cardState, error: true, loading: false, errorMsg: "Sesión caducada" })
            }
            if (data) {
                setCardState({ ...cardState, loading: false, success: true, data: data })
            }
        }, error => {
            console.log(error)
            setCardState({ ...cardtate, error: true, loading: false, errorMsg: "Algo fue mal en el servidor" })
        })
    }, [])

    const saveAction = useCallback((reviewId) => {
        setCardState({ ...cardState, loading: true });
        saveUnsave(userToken, reviewId).then(data => {
            if (data.message != null) {
                setCardState({ ...cardState, error: true, loading: false, errorMsg: "Sesión caducada" })
            }
            if (data) {
                setCardState({ ...cardState, loading: false, success: true, data: data })
            }
        }, error => {
            console.log(error)
            setCardState({ ...carState, error: true, loading: false, errorMsg: "Algo fue mal en el servidor" })
        })
    }, [])

    return {
        likeAction,
        saveAction,
        isSucess: cardState.success,
        isError: cardState.error,
        data: cardState.data
    }
}