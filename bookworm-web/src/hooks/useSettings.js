import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { storage } from "../services/firebase/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


export function useSettings() {
    const { userToken } = useContext(UserContext);
    const [settingsState, setSettingsState] = useState({
        isLoading: false,
        isError: false,
        isSuccess: false,
        isEditBlockVisible: false,
        isPasswordBlockVisible: false,
        avatarFile: null,
        bannerFile: null,
        avatar: null,
        banner: null,
        data: []
    });

    //----------- SetState
    const setEditBlockVisible = () => {
        setSettingsState({ ...settingsState, isEditBlockVisible: !settingsState.isEditBlockVisible })
    }

    const setNewAvatar = (url) => {
        setSettingsState({ ...settingsState, avatar: `${url}` });
        avatarAsBg(url);
    }

    const setAvatar = (event) => {
        setSettingsState({ ...settingsState, avatarFile: event.target.files[0] });
    };

    const setBanner = (event) => {
        setReviewState({ ...settingsState, bannerFile: event.target.files[0] });
    };

    //-----------Fetch
    const editProfile = (event) => {
        if (settingsState.avatarFile != null) {
            uploadToFireBase(settingsState.avatarFile, "images/avatar/");
        }
        if (settingsState.bannerFile != null) {
            setSettingsState(event.target.files[0], "images/banner/");
        }
    }

    const uploadToFireBase = (file, route) => {
        if (file == null) return;
        const imageRef = ref(
            storage,
            `${route}${Math.floor(Math.random() * 1000000).toString() + file.name}`
        );
        uploadBytes(imageRef, file).then((response) => {
            getDownloadURL(response.ref).then((url) => {
                if (route === "images/avatar/") {
                    setNewAvatar(url)
                } else {
                    setNewBanner(url)
                }
            });
        });
    };



    return {
        editProfile,
        setEditBlockVisible,
        data: settingsState.data,
        isLoading: settingsState.isLoading,
        isError: settingsState.isError,
        isSuccess: settingsState.isSuccess,
        isEditBlockVisible: settingsState.isEditBlockVisible,
        avatarFile: settingsState.avatarFile,
        bannerFile: settingsState.bannerFile,
    }
}