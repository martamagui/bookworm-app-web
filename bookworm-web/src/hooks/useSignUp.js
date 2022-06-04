import { useState, useContext, useCallback } from "react";
import { fetchIsEmailTaken, fetchIsUserNameAvailable } from "../services/userService";

export function useSignUp() {
    const [signUpState, setSignUpState] = useState({ loading: false, error: false, success: false, errorMsg: "", });
    const [dataState, setDataState] = useState({
        fullName: "",
        userName: "",
        email: "",
        country: "",
        city: "",
        address: "",
        day: "",
        month: "",
        year: "",
        password1: "",
        password2: "",
    });

    //TODO hacer el check de si el email está ya registrado

    //----------- Setters
    const setFullName = (value) => {
        setDataState({ ...dataState, fullName: value })
    }

    const setUserName = (value) => {
        setDataState({ ...dataState, userName: value })
    }

    const setEmail = (value) => {
        console.log(`💌 ${value}`)
        setDataState({ ...dataState, email: value })
    }

    const setCountry = (value) => {
        setDataState({ ...dataState, country: value })
    }
    const setCity = (value) => {
        setDataState({ ...dataState, city: value })
    }

    const setAddress = (value) => {
        setDataState({ ...dataState, address: value })
    }

    const setDay = (value) => {
        setDataState({ ...dataState, day: value })
    }

    const setMonth = (value) => {
        setDataState({ ...dataState, month: value })
    }

    const setYear = (value) => {
        setDataState({ ...dataState, year: value })
    }

    const setPassword1 = (value) => {
        setDataState({ ...dataState, password1: value })
    }

    const setPassword2 = (value) => {
        setDataState({ ...dataState, password2: value })
    }

    const validateData = useCallback(() => {

        let data = dataState
        setSignUpState({ ...signUpState, loading: true });
        //TODO ver qué pasa con el response de emailtaken
        if (!validateEmail(data.email)) {
            return false
        }
        console.log("Email 🕵️‍♀️")

        if (data.userName.length < 3) {
            setError = ("User Name is too short")
            return false
        }
        console.log("Username🕵️‍♀️")

        if (data.fullName < 3) {
            setError = ("Name is too short")
            return false
        }
        console.log("FNAME 🕵️‍♀️")

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
        if (data.password1 != data.password2) {
            setError = ("Passwords don't match.")
            return false
        }
        console.log("Okuuurrrr 🕵️‍♀️")
    });

    const validateEmail = () => {
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!dataState.email.match(regexEmail)) {
            setError("Please introduce a valid email.")
            return false
        }

        return isEmailAvailable(email)
    }

    const validateUserName = () => {
        const regexUserName = /^[a-zA-Z0-9_-]+$/
        if (!dataState.userName.match(regexUserName) || dataState.userName.length < 3) {
            setError("UserName must be longer than 3 characters, and only be can have letters, numbers and '_' or '_'")
            return flase
        }
        return isUserNameAvailable(dataState.userName)
    }

    const validatePassword = () => {
        //Minimum eight characters, at least one letter and one number
        const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        return dataState.password1.match(regexPass)
    }

    const setError = (msg) => {
        console.log(msg)
        setSignUpState({ ...signUpState, error: true, loading: false, errorMsg: msg })
    }

    //---------- Fetchs

    const isUserNameAvailable = useCallback(() => {
        fetchIsUserNameAvailable(dataState.userName).then(response => {
            if (response.message != null) {
                if (response === null && response.message === "unavailable") {
                    setError("UserName is not available.")
                    return false
                }
                return true
            }
            setError("Something went wrong.")
            return false
        });
    });

    const isEmailAvailable = useCallback(() => {
        fetchIsEmailTaken(dataState.email).then(response => {
            if (response.message != null) {
                if (response === null && response.message === "unavailable") {
                    setError("Email is not available.")
                    return false
                }
                return true
            }
            setError("Something went wrong.")
            return false
        });
    });

    return {
        validateData,
        validateEmail,
        validatePassword,
        validateUserName,
        isSuccess: signUpState.success,
        isError: signUpState.error,
        errorMsg: signUpState.errorMsg,
        data: dataState,
        setAddress,
        setCity,
        setCountry,
        setDay,
        setMonth,
        setPassword1,
        setPassword2,
        setYear,
        setFullName,
        setUserName,
        setEmail
    }
}