import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Assets
import PicGiveAway from "../../assets/images/pic_give_away.png"
//Hooks
import { useTopBooks } from "../../hooks/useTopBooks";
//Componentss
import { ListOfTopBooks } from "../listOfTopBooks/ListOfTopBooks";
import { TopBookCardSkeleton } from "../TopBookCard/TopBookCardSkeleton";

export function RightAside() {
    const { fetchTopBooks, isLoading, isSuccess, isError, errorMsg, data } = useTopBooks();

    useEffect(() => {
        fetchTopBooks();
    }, [fetchTopBooks])

    return (
        <div className="aside-right hidden lg:block lg:absolute right-32 xl:right-48 w-2/12">
            <div className="py-6">
                <Link to="/create-review" className="banner-give-away__container flex justify-items-start p-0">
                    <img src={PicGiveAway} alt="Give Away Banner" className="banner-left" />
                </Link>
            </div>
            <h2 className="text-tertiary font-bold text-xl">Most readed books</h2>
            {
                isLoading ?
                    <>
                        <TopBookCardSkeleton />
                        <TopBookCardSkeleton />
                        <TopBookCardSkeleton />
                    </>
                    :
                    <ListOfTopBooks books={data} />
            }

        </div >
    );
}