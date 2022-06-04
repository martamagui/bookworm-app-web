import { useState, useContext, useCallback } from "react";
import { fetchIsEmailTaken, fetchIsUserNameAvailable } from "../services/userService";

export function useSignUp() {
    const [signUpState, setSignUpState] = useState({ loading: false, error: false, success: false, errorMsg: "", });
    //TODO hacer el check de si el email está ya registrado

    const validateData = useCallback((data) => {
        setSignUpState({ ...signUpState, loading: true });

        if (!validateEmail(data.email)) {
            return false
        }
        if (data.userName.length < 3) {
            setError = ("User Name is too short")
            return false
        }
        if (data.fullName < 3) {
            setError = ("Name is too short")
            return false
        }
        if (data.country < 3) {
            setError = ("Country is too short")
            return false
        }
        if (data.address < 6) {
            setError = ("Address is too short")
            return false
        }
        if (data.city < 3) {
            setError = ("City is too short")
            return false
        }
        if (data.birthDate < 8) {
            setError = ("Introduce a valid date of birth")
            return false
        }
        if (data.password != data.password2) {
            setError = ("Passwords don't match.")
            return false
        }
    });

    const validateEmail = (email) => {
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email.match(regexEmail)) {
            setError("Please introduce a valid email.")
            return false
        }

        return isEmailAvailable(email)
    }

    const validateUserName = (userName) => {
        const regexUserName = /^[a-zA-Z0-9_-]+$/
        if (!userName.match(regexUserName) || userName.length < 3) {
            setError("UserName must be longer than 3 characters, and only be can have letters, numbers and '_' or '_'")
            return flase
        }
        return isUserNameAvailable(userName)
    }

    const validatePassword = (password) => {
        //Minimum eight characters, at least one letter and one number
        const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        return password.match(regexPass)
    }

    const setError = (msg) => {
        setSignUpState({ ...signUpState, error: true, loading: false, errorMsg: msg })
    }

    //---------- Fetchs

    const isUserNameAvailable = useCallback((userName) => {
        fetchIsUserNameAvailable(userName).then(response => {
            if (response.message != null && response.message === "unavailable") {
                setError("UserName is not available.")
                return false
            }
            return true
        })
    })

    const isEmailAvailable = useCallback((email) => {
        fetchIsEmailTaken(email).then(response => {
            if (response.message != null && response.message === "unavailable") {
                setError("UserName is not available.")
                return false
            }
            return true
        })
    })

    return {
        validateData,
        validateEmail,
        validatePassword,
        validateUserName,


    }
}