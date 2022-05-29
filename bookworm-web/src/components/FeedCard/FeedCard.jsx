import React from "react";

//Assets
import IcStar from "../../assets/icons/ic_star.svg"

export function FeedCard({ feedResponse }) {

    return (
        <div className="card-feed__container mb-10">
            <div className="card-feed__block-top flex flex-row justify-between items-center p-3">
                <div className="card-feed__user-info flex flex-row items-center px-2">
                    <img className="card-feed__user-photo rounded-full" src={feedResponse.userId.avatar} alt="User avatar" />
                    <span className="font-medium text-on-primary-container px-4 text-base">@{feedResponse.userId.userName}</span>
                </div>
                <div className="card-feed__score flex flex-row items-center px-2">
                    <span className="text-primary pt-1 px-2">{feedResponse.score}</span>
                    <img className="score__star" src={IcStar} alt="Star icon" />
                </div>
            </div>
            <img className="card-feed__image" src={feedResponse.image} alt="Review photography" />
            <div className="card-feed__block-bot p-5">
                <h3 className="poppins text-xl font-semibold text-secondary py-1">{feedResponse.bookTitle}</h3>
                <h4 className="text-base font-semibold text-secondary py-3">{feedResponse.bookAuthor}</h4>
                <p className="text-sm text-surface-variant-foreground">{feedResponse.reviewDescription}</p>
            </div>
        </div>
    );
}