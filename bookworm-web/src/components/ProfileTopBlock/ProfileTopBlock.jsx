import React from "react";
import { Link } from "react-router-dom";

//Assets
import ICPlusDark from '../../assets/icons/ic_plus_dark.svg'
import ICBookmarkDark from '../../assets/icons/ic_bookmark_dark.svg'
export function ProfileTopBlock({ data }) {
    return (
        <div className="profile__block-top bg-white rounded-xl shadow-md">
            <div className="block-top__image__container">
                <img src={data.banner} alt="Profile banner" className="banner" />
                <img src={data.avatar} alt="Profile Avatar" className="profile__avatar rounded-full" />
                {
                    data.isMe ?
                        <Link to="/saved-reviews">
                            <div className="profile__button hover:opacity-75 p-2 bg-white rounded-full shadow-md inline-block">
                                <img src={ICBookmarkDark} alt="Plus Icon" />
                            </div>
                        </Link>
                        :
                        <button className="profile__button hover:opacity-75 p-3 bg-white rounded-full shadow-md inline-block">
                            <img src={ICPlusDark} alt="Plus Icon" />
                        </button>
                }
            </div>
            <div className="block-top__content__container p-3">
                <h2 className="profile__username headline-5 p-2 text-xl font-semibold px-1 text-on-primary-container">@{data.userName}</h2>
                <p className="profile__description p-2 text-on-primary-container text-sm">{data.description}</p>
                <div className="profile__stats p-1 flex flex-row">
                    <p className="p-1 text-on-primary-container text-sm">Reviews: {data.reviews.length}</p>
                    <p className="p-1 text-on-primary-container text-sm">Followers: {data.followers}</p>
                    <p className="p-1 text-on-primary-container text-sm">Following: {data.followingAmount}</p>
                </div>
            </div>

        </div>
    )
}