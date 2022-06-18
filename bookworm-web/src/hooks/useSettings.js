import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { storage } from "../services/firebase/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
//Services
import { getProfileInfo, putAvatar, putBanner, putDescription, putPassword, putUserName } from "../services/userService";


export function useSettings() {

    const { userToken } = useContext(UserContext);
    const [settingsState, setSettingsState] = useState({
        isLoading: false,
        isError: false,
        isSuccess: false,
        isEditBlockVisible: true,
        isPasswordBlockVisible: true,
        data: []
    });

    const [dataState, setDataSate] = useState({
        userName: "",
        description: "",
        password: "",
        password2: "",
        avatarFile: null,
        bannerFile: null,
        avatar: null,
        banner: null,
    })

    //----------- SetState UI
    const setEditBlockVisible = () => {
        setSettingsState({ ...settingsState, isEditBlockVisible: !settingsState.isEditBlockVisible })
    }
    const setPasswordBlockVisible = () => {
        setSettingsState({ ...settingsState, isPasswordBlockVisible: !settingsState.isPasswordBlockVisible })
    }

    //---------- SetData

    const setAvatar = (event) => {
        setDataSate({ ...dataState, avatarFile: event.target.files[0] });
        setNewAvatarUI(event.target.files[0]);
    };

    const setBanner = (event) => {
        setDataSate({ ...dataState, bannerFile: event.target.files[0] });
        setNewBannerUI(event.target.files[0])
    };

    const setUserName = (value) => {
        setDataSate({ ...dataState, userName: value });
    };

    const setDescription = (value) => {
        setDataSate({ ...dataState, description: value });
    };

    const setPassword = (value) => {
        setDataSate({ ...dataState, password: value });
    };

    const setPassword2 = (value) => {
        setDataSate({ ...dataState, password2: value });
    };

    const setData = (data) => {
        setDataSate({
            ...dataState,
            description: data.description,
            descriptionOriginal: data.description,
            userNameOriginal: data.userName,
            userName: data.userName,
            avatar: data.avatar,
            banner: data.banner
        });
    }

    //-----------SetUI

    const setInitalUIValues = (data) => {
        document.getElementById("userName").value = data.userName
        document.getElementById("description").value = data.description
        document.getElementById("edit-banner").style.backgroundImage = `url('${data.banner}')`;
        document.getElementById("edit-avatar").style.backgroundImage = `url('${data.avatar}')`;
    }

    const setNewAvatarUI = (file) => {
        var reader = new FileReader();
        reader.onloadend = () => {
            document.getElementById('edit-avatar').style.backgroundImage = "url(" + reader.result + ")";
        }
        if (file) {
            reader.readAsDataURL(file);
        }
    }

    const setNewBannerUI = (file) => {
        var reader = new FileReader();
        reader.onloadend = () => {
            document.getElementById('edit-banner').style.backgroundImage = "url(" + reader.result + ")";
        }
        if (file) {
            reader.readAsDataURL(file);
        }
    }

    //-----------Fetch

    const fetchProfileInfo = () => {
        getProfileInfo(userToken).then(data => {
            setData(data)
            setInitalUIValues(data)
        })
    }

    const editProfile = (event) => {
        event.preventDefault();
        if (dataState.avatarFile != null) {
            uploadToFireBase(dataState.avatarFile, "images/avatar/");
        }
        if (dataState.bannerFile != null) {
            uploadToFireBase(dataState.bannerFile, "images/banner/");
        }
        if (dataState.description != dataState.descriptionOriginal) {
            changeDescription()
        }
        if (dataState.userName != dataState.userNameOriginal) {
            changeUserName()
        }
    }

    const uploadToFireBase = (file, route) => {
        if (file == null) return;
        const imageRef = ref(
            storage,
            `${route}${Math.floor(Math.random() * 1000000000000).toString() + file.name}`
        );
        uploadBytes(imageRef, file).then((response) => {
            getDownloadURL(response.ref).then((url) => {
                if (route === "images/avatar/") {
                    changeAvatar(url)
                } else {
                    changeBanner(url)
                }
            });
        });
    };

    const changeDescription = () => {
        try {
            putDescription(dataState.description, userToken)
        } catch (error) {
            console.log(`❗ ${error}`);
        }
    }

    const changeUserName = () => {
        try {
            putUserName(dataState.userName, userToken)
        } catch (error) {
            console.log(`❗ ${error}`);
        }
    }

    const changeAvatar = (link) => {
        try {
            putAvatar(link, userToken)
        } catch (error) {
            console.log(`❗ ${error}`);
        }
    }

    const changeBanner = (link) => {
        try {
            putBanner(link, userToken)
        } catch (error) {
            console.log(`❗ ${error}`);
        }
    }

    const changePassword = (event) => {
        event.preventDefault();
        if (dataState.password.length > 5 && dataState.password === dataState.password2) {
            try {
                putPassword(dataState.password, userToken)
            } catch (error) {
                console.log(`❗ ${error}`);
            }
        } else {
            console.log("Las constraseñas deben coincidir.")
        }
    }


    return {
        changePassword,
        fetchProfileInfo,
        editProfile,
        setPasswordBlockVisible,
        setEditBlockVisible,
        setDescription,
        setUserName,
        setAvatar,
        setBanner,
        setPassword,
        setPassword2,
        data: dataState,
        isLoading: settingsState.isLoading,
        isError: settingsState.isError,
        isSuccess: settingsState.isSuccess,
        isEditBlockVisible: settingsState.isEditBlockVisible,
        isPasswordBlockVisible: settingsState.isPasswordBlockVisible
    }
}