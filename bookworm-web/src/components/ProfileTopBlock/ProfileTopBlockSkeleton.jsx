import React from "react";
import { Link } from "react-router-dom";

//Assets
import ICPlusDark from '../../assets/icons/ic_plus_dark.svg'
import ICBookmarkDark from '../../assets/icons/ic_bookmark_dark.svg'

export function ProfileTopBlockSkeleton() {
    return (
        <div className="profile__block-top bg-white rounded-xl shadow-md shimmer">
            <div className="block-top__image__container ">
                <div className="banner bg-outline opacity-60"></div>
                <div className="profile__avatar rounded-full bg-outline opacity-80 "></div>
                <div className="profile__button p-3 bg-white rounded-full shadow-md inline-block opacity-60"></div>
            </div>
            <div className="block-top__content__container p-3">
                <div className="profile__username p-2 m-1 my-2 w-3/12 bg-on-primary-container rounded-2xl opacity-80"></div>
                <div className="profile__description p-2 m-1 my-6 w-7/12 bg-on-primary-container rounded-2xl opacity-50"></div>
                <div className="profile__stats my-2 flex  flex-row opacity-50">
                    <div className="p-2 mx-1 w-2/12 bg-on-primary-container rounded-2xl"></div>
                    <div className="p-2 mx-1 w-2/12 bg-on-primary-container rounded-2xl"></div>
                    <div className="p-2 mx-1 w-2/12 bg-on-primary-container rounded-2xl"></div>
                </div>
            </div>

        </div>
    )
}