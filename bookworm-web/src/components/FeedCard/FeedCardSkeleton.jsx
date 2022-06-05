import React, { useEffect } from "react";

//Assets
import IcStar from "../../assets/icons/ic_star.svg"

export function FeedCardSkeleton() {

    return (
        <div className="card-feed__container shimmer mb-10">
            <div className="card-feed__block-top flex flex-row justify-between items-center p-3">
                <div className="card-feed__user-info flex flex-row items-center px-2">
                    <div className="card-feed__user-photo bg-outline rounded-full" />
                    <div className="mx-2 bg-outline w-24 rounded-2xl opacity-80 py-2 px-4 text-base"></div>
                </div>
                <div className="card-feed__score flex flex-row items-center px-2">
                    <span className="mx-1 bg-outline opacity-80 py-2 px-4 rounded-2xl"></span>
                    <img className="score__star opacity-60" src={IcStar} />
                </div>
            </div>
            <div className="card-feed__image__wrapper">
                <div className="card-feed__image bg-outline opacity-75" />
            </div>
            <div className="card-feed__block-bot p-5">
                <div className="bg-outline w-44 rounded-2xl opacity-80 py-2 px-2"></div>
                <div className="bg-outline w-36 rounded-2xl opacity-60 py-2 px-2 my-5"></div>
                <div className="bg-outline w-full rounded-2xl opacity-60 py-2 px-2 my-2"></div>
                <div className="bg-outline w-full rounded-2xl opacity-60 py-2 px-2 my-2"></div>
                <div className="bg-outline w-full rounded-2xl opacity-60 py-2 px-2 my-2"></div>
                <div className="bg-outline w-9/12 rounded-2xl opacity-60 py-2 px-2 my-2"></div>
            </div>
        </div>
    );
}