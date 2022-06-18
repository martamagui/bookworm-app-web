import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { storage } from "../services/firebase/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
//Services
import { getProfileInfo } from "../services/userService";


export function useSettings() {

    const { userToken } = useContext(UserContext);
    const [settingsState, setSettingsState] = useState({
        isLoading: false,
        isError: false,
        isSuccess: false,
        isEditBlockVisible: true,
        isPasswordBlockVisible: false,
        data: []
    });

    const [dataState, setDataSate] = useState({
        userName: "",
        description: "",
        avatarFile: null,
        bannerFile: null,
        avatar: null,
        banner: null,
    })

    //----------- SetState UI
    const setEditBlockVisible = () => {
        setSettingsState({ ...settingsState, isEditBlockVisible: !settingsState.isEditBlockVisible })
    }


    //---------- SetData
    const setNewAvatar = (url) => {
        setDataSate({ ...dataState, avatar: `${url}` });
        avatarAsBg(url);
    }

    const setAvatar = (event) => {
        setDataSate({ ...dataState, avatarFile: event.target.files[0] });
    };

    const setBanner = (event) => {
        setDataSate({ ...dataState, bannerFile: event.target.files[0] });
    };

    const setUserName = (value) => {
        setDataSate({ ...dataState, userName: value });
    };

    const setDescription = (value) => {
        setDataSate({ ...dataState, description: value });
    };

    const setData = (data) => {
        console.log(data.userName)
        setDataSate({
            ...dataState,
            description: data.description,
            userName: data.userName,
            avatar: data.avatar,
            banner: data.banner
        });
        document.getElementById("userName").value = data.userName
        document.getElementById("description").value = data.description
    }


    //-----------Fetch

    const fetchProfileInfo = () => {
        getProfileInfo(userToken).then(data => setData(data))
    }
    const editProfile = (event) => {
        if (dataState.avatarFile != null) {
            uploadToFireBase(dataState.avatarFile, "images/avatar/");
        }
        if (dataState.bannerFile != null) {
            setSettingsState(dataState.bannerFile, "images/banner/");
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
        fetchProfileInfo,
        editProfile,
        setEditBlockVisible,
        setDescription,
        setUserName,
        setAvatar,
        setBanner,
        data: dataState,
        isLoading: settingsState.isLoading,
        isError: settingsState.isError,
        isSuccess: settingsState.isSuccess,
        isEditBlockVisible: settingsState.isEditBlockVisible,
    }
}