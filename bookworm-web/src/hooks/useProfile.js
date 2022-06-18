import { data } from "autoprefixer";
import { useState, useContext, useCallback } from "react";
//Inner
import { UserContext } from "../context/UserContext";
import { getProfileInfo, getUserById, putFollow } from "../services/userService";

export function useProfile() {
    const { userToken } = useContext(UserContext);
    const [profileState, setProfileState] = useState({
        isLoading: false,
        isError: false,
        isFollowed: false,
        isSuccess: false,
        data: null
    });
    const setLoading = (value) => {
        setProfileState({ ...profileState, isLoading: value })
    }

    const setError = (value) => {
        setProfileState({ ...profileState, isLoading: false, isError: value })
    }

    const setData = (data) => {
        setProfileState({ ...profileState, data: data, isSuccess: true })
    }

    //-------- FETCH

    const fetchProfileInfo = useCallback((id) => {
        try {
            setLoading(true)
            if (id != "0") {
                getUserById(id, userToken).then(data => setData(data))
            } else {
                getProfileInfo(userToken).then(data => setData(data))
            }
        } catch (error) {
            console.log("ERROR")
        }
    })

    const followAction = (id) => {
        console.log("hi")
        putFollow(id, userToken).then(data => setProfileState({ ...profileState, isFollowed: !profileState.isFollowed }))
    }

    //-------- UI



    return {
        fetchProfileInfo,
        isSuccess: profileState.isSuccess,
        isLoading: profileState.isLoading,
        isError: profileState.isError,
        data: profileState.data,
        follow: followAction
    }
}