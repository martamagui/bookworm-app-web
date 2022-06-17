import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Assets
import IcBookMark from '../../../assets/icons/ic_bookmark_tertiary.svg'
import { useSavedReviews } from "../../../hooks/useSavedReviews";
//Components
import { SearchCard } from "../../../components/SearchCard/SearchCard";
import { SearchCardSkeleton } from "../../../components/SearchCard/SearchCardSkeleton";
import { GoBackBtn } from "../../../components/GoBackBtn/GoBackBtn";

export function SavedReviews() {
    const { savedState, fetchSavedReviews, data } = useSavedReviews();

    useEffect(() => {
        fetchSavedReviews()
    }, [])

    return (
        <>
            <GoBackBtn />
            <div className="search__container px-10">
                <div className="search__info py-4 flex flex-row">
                    <img src={IcBookMark} alt="Bookmark icon" className="py-2" />
                    <h2 className="text-tertiary font-semibold text-3xl mx-2 py-1">Saved Reviews</h2>
                </div>
                <div className="p-2 sm:p-0 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2">
                    {
                        savedState.isSuccess && !savedState.isLoading ?
                            data.map((element) => <SearchCard id={element._id} image={element.image} title={element.bookTitle} />)
                            :
                            <>
                                <SearchCardSkeleton />
                                <SearchCardSkeleton />
                                <SearchCardSkeleton />
                                <SearchCardSkeleton />
                                <SearchCardSkeleton />
                            </>
                    }
                </div>
            </div>
        </>
    )
}