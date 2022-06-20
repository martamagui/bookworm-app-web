import React, { useCallback, useEffect } from "react";

//Assets
import IcArrowUp from "../../../assets/icons/ic_arrow_up.svg"
import IcGallery from "../../../assets/icons/ic_gallery.svg"
//Components
import { GoBackBtn } from "../../../components/GoBackBtn/GoBackBtn";
import { useSettings } from "../../../hooks/useSettings";
import { Loader } from "../../../components/Loader/Loader";
import { data } from "autoprefixer";


export function Settings() {
    const {
        isLoading, isError, isSuccess,
        isEditBlockVisible,
        isPasswordBlockVisible,
        setEditBlockVisible,
        setPasswordBlockVisible,
        editProfile,
        setDescription,
        setUserName,
        setAvatar,
        setBanner,
        setPassword,
        setPassword2,
        fetchProfileInfo,
        changePassword } = useSettings();
    useEffect(() => { fetchProfileInfo() }, [])


    return (
        <>
            <GoBackBtn></GoBackBtn>
            <div className="settings__container px-4 lg:px-10 py-4">
                <div className="settings__wrapper px-4 bg-white rounded-lg shadow-lg">
                    <div className="settings__profile py-4" id="edit-profile">
                        <div className="flex flex-row justify-between p-2" onClick={setEditBlockVisible}>
                            <h3 className="text-primary font-semibold text-2xl"> Edit Profile</h3>
                            <img src={IcArrowUp} alt="Arrow Icon" className={isEditBlockVisible ? "" : "rotate-180 translate-y-1"} />
                        </div>
                        {
                            isEditBlockVisible ?
                                <form className="" onSubmit={(event) => editProfile(event)} >
                                    <div className="bannerAndAvatar__wrapper">
                                        <div className="bg-on-error-container banner flex justify-end items-end" id="edit-banner">
                                            <div className="bg-white h-fit p-1.5 rounded-full m-3 ">
                                                <img src={IcGallery} alt="Arrow gallery" />
                                            </div>
                                            <input onChange={(event) => { setBanner(event) }}
                                                type="file" name="banner" id="banner"
                                                className="w-full h-full absolute top-0 opacity-0 z-20"
                                                accept="image/png, image/jpeg, image/jpg" />
                                        </div>
                                        <div id="edit-avatar" className="profile__avatar rounded-full flex justify-center items-end bg-outline">
                                            <div className="bg-white h-fit w-fit p-1.5 m-2 rounded-full">
                                                <img src={IcGallery} alt="Arrow gallery" />
                                            </div>
                                            <input onChange={(event) => { setAvatar(event) }}
                                                type="file" name="avatar" id="avatar"
                                                className="w-full h-full absolute top-0 opacity-0 z-20"
                                                accept="image/png, image/jpeg, image/jpg" />
                                        </div>

                                    </div>


                                    <div className="flex flex-col w-full p-1 py-2">
                                        <label htmlFor="userName"><span className="text-primary px-3">User Name</span></label>
                                        <input className="createReview__input-text p-1 px-3 rounded-xl bg-inverse-on-surface"
                                            id="userName" type="text" value={data.userName} placeholder="User Name"
                                            onChange={(event) => { setUserName(event.target.value) }} />
                                    </div>

                                    <div className="flex flex-col py-2">
                                        <label htmlFor="description"><span className="text-primary px-3">Description</span></label>
                                        <textarea className="createReview__input-text p-1 px-3 rounded-xl bg-inverse-on-surface"
                                            placeholder="Review Description" name="description"
                                            id="description" cols="30" rows="2"
                                            onChange={(event) => { setDescription(event.target.value) }} />
                                    </div>


                                    <div className="createReview__input-submit">
                                        <input id="submit" className="bg-primary mt-5 text-sm text-white p-2 px-5 rounded-full " type="submit" value="Apply changes" />
                                        {
                                            isLoading ?
                                                <div className="absolute ml-48 bg-primary rounded-xl opacity-60 py-3 self-center px-0 m-4 inline-block"> <Loader></Loader></div>
                                                :
                                                ""
                                        }
                                    </div>
                                </form>
                                : ""
                        }
                        <div className="flex flex-row justify-between p-2" onClick={setPasswordBlockVisible}>
                            <h3 className="text-primary font-semibold text-2xl">Change Password</h3>
                            <img src={IcArrowUp} alt="Arrow Icon" className={isPasswordBlockVisible ? "" : "rotate-180 translate-y-1"} />
                        </div>
                        {
                            isPasswordBlockVisible ?
                                <form className="" onSubmit={(event) => changePassword(event)} >
                                    <div className="flex flex-col w-full p-1 py-2">
                                        <label htmlFor="password1"><span className="text-primary px-3">New Password</span></label>
                                        <input className="createReview__input-text p-1 px-3 rounded-xl bg-inverse-on-surface"
                                            id="password1" type="password" value={data.pasword} placeholder="New Password"
                                            onChange={(event) => { setPassword(event.target.value) }} />
                                    </div>
                                    <div className="flex flex-col w-full p-1 py-2">
                                        <label htmlFor="password2"><span className="text-primary px-3">Repeat Password</span></label>
                                        <input className="createReview__input-text p-1 px-3 rounded-xl bg-inverse-on-surface"
                                            id="password2" type="password" value={data.pasword2} placeholder="Repeat Password"
                                            onChange={(event) => { setPassword2(event.target.value) }} />
                                    </div>

                                    <div className="createReview__input-submit">
                                        <input id="submit" className="bg-primary mt-5 text-sm text-white p-2 px-5 rounded-full " type="submit" value="Change password" />
                                        {
                                            isLoading ?
                                                <div className="absolute ml-48 bg-primary rounded-xl opacity-60 py-3 self-center px-0 m-4 inline-block"> <Loader></Loader></div>
                                                :
                                                ""
                                        }
                                    </div>
                                </form>
                                : ""
                        }
                    </div>

                </div>
            </div>

        </>)
}