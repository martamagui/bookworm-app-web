import React, { useCallback, useEffect } from "react";

//Assets
import IcArrowUp from "../../../assets/icons/ic_arrow_up.svg"
//Components
import { GoBackBtn } from "../../../components/GoBackBtn/GoBackBtn";
import { useSettings } from "../../../hooks/useSettings";
import { Loader } from "../../../components/Loader/Loader";



export function Settings() {
    //TODO call del perfil para previsualizar los datos.
    //Hooks de métodos put del perfil
    const { isLoading, isError, isSuccess, isEditBlockVisible, setEditBlockVisible } = useSettings();

    return (
        <>
            <GoBackBtn></GoBackBtn>
            <div className="settings__container px-10 py-4">
                <div className="settings__wrapper px-4 bg-white rounded-lg shadow-lg">
                    <div className="settings__profile py-4" id="edit-profile">
                        <div className="flex flex-row justify-between p-2" onClick={setEditBlockVisible}>
                            <h3 className="text-primary font-semibold text-2xl"> Edit Profile</h3>
                            <img src={IcArrowUp} alt="Arrow Icon" className={isEditBlockVisible ? "" : "rotate-180 translate-y-1"} />
                        </div>
                        {
                            isEditBlockVisible ?
                                <form className="" onSubmit={(event) => editProfile(event)} >
                                    <div id="edit-profile-content">
                                        <div className="bg-on-error-container banner" id="edit-banner">
                                            <div id="edit-avatar" className="profile__avatar rounded-full bg-outline"></div>
                                        </div>
                                    </div>

                                    <div className="createReview__input-submit">
                                        <input id="submit" className="bg-primary mt-5 text-white p-2 px-5 rounded-full " type="submit" value="Apply changes" />
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