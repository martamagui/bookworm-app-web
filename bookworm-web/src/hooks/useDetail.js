import { useState, useContext, useCallback } from "react";
import { getDetail, likeDislikeReview, saveUnsave } from "../services/reviewsService";

//Inner
import { UserContext } from "../context/UserContext";

export function useDetail() {
    const { userToken } = useContext(UserContext);
    const [detailState, setDetailState] = useState({
        isLoading: false,
        isError: false,
        isSuccess: false,
        data: null
    });

    const setLoading = (value) => {
        setDetailState({ ...detailState, isLoading: value })
    }

    const setError = (value) => {
        setDetailState({ ...detailState, isLoading: false, isError: value })
    }

    const setData = (data) => {
        setDetailState({ ...detailState, data: data, isSuccess: true })
    }

    //-------- FETCH

    const getDetailInfo = useCallback((id) => {
        setLoading(true)
        getDetail(userToken, id).then(data => setData(data))
    })

    const likeAction = useCallback((reviewId) => {
        likeDislikeReview(userToken, reviewId).then(data => {
            if (data) {
                let myData = detailState.data
                myData.liked = !detailState.data.liked
                setDetailState({ ...detailState, loading: false, success: true, data: myData })
            }
        }, error => {
            console.log(error)
            setDetailState({ ...detailState, error: true, loading: false, errorMsg: "Algo fue mal en el servidor" })
        })
    })

    const saveAction = useCallback((reviewId) => {
        saveUnsave(userToken, reviewId).then(data => {
            if (data) {
                let myData = detailState.data
                myData.saved = !detailState.data.saved
                setDetailState({ ...detailState, loading: false, success: true, data: myData })
            }
        }, error => {
            console.log(error)
            setDetailState({ ...detailState, error: true, loading: false, errorMsg: "Algo fue mal en el servidor" })
        })
    })

    return {
        detailState,
        getDetailInfo,
        saveAction,
        likeAction,
        isLoading: detailState.isLoading,
        isSuccess: detailState.isSuccess,
        isError: detailState.isError
    }
}