import { useState, useContext, useCallback } from "react";

//Services
import { fetchLogin } from "../services/auth/userAuth";
import { UserContext } from "../context/UserContext";

export function useUser() {

    const { userToken, setUserToken } = useContext(UserContext);
    const [userState, setUserState] = useState({ loading: false, error: false, success: false, errorMsg: "", });

    const login = useCallback((email, password) => {

        setUserState({ ...userState, loading: true });

        fetchLogin({ email: email, password: password, })
            .then(user => {
                if (user) {
                    window.localStorage.setItem("bookWormToken", `Bearer ${user.token}`);
                    setUserToken(JSON.stringify(user.token));
                    setUserState({ ...userState, success: true, loading: false });
                }
            }, error => {
                setUserState({ ...userState, loading: false, error: true, errorMsg: `${error}`, });
            });
    });

    const logout = useCallback(() => {
        window.localStorage.removeItem("bookWormToken");
        setUserToken(null)
    })

    return {
        login,
        logout,
        isSuccess: userState.success,
        isError: userState.error,
        errorMsg: userState.errorMsg,
        isLogged: Boolean(userToken)
    }
}
