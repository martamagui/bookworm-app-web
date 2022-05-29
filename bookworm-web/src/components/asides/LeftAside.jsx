import React, { useState } from "react";
import { Link } from "react-router-dom";

//Assets
import IcBookMark from "../../assets/icons/ic_bookmark.svg"
import IcPlus from "../../assets/icons/ic_plus.svg"
import WeeklyFind from "../../assets/images/pic_weekly_find.png"

export function LeftAside() {
    return (
        <div className="aside-left w-2/12 absolute left-48">
            <div className="aside-left__pair">
                <h4 className="aside__title text-tertiary font-bold text-xl py-5">What are you reading?</h4>
                <Link to="/create-review" className="aside__button w-8/12 flex flex-row justify-start items-center py-2 px-5">
                    <img src={IcPlus} alt="Additoin icon" className="" />
                    <span className="text-white px-4 text-sm">Create a new review</span>
                </Link>
            </div>
            <div className="aside-left__pair py-10">
                <h4 className="aside__title text-tertiary font-bold text-xl py-5">Up for something to read?</h4>
                <Link to="/saved-reviews" className="aside__button w-8/12 flex flex-row justify-start items-center py-2 px-5">
                    <img src={IcBookMark} alt="Additoin icon" className="" />
                    <span className="text-white px-4 text-sm">Saved reviews</span>
                </Link>
            </div>
            <div className="py-6">
                <Link to="/search/" className="banner__container flex justify-items-start p-0">
                    <img src={WeeklyFind} alt="Banner of weekly find - Book: She became the sun" className="banner-left" />
                </Link>
            </div>
        </div>)
}