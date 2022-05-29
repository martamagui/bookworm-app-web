import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
//Assets
import PicGiveAway from "../../assets/images/pic_give_away.png"
//Hooks
import { useTopBooks } from "../../hooks/useTopBooks";
//Componentss
import { ListOfTopBooks } from "../listOfTopBooks/ListOfTopBooks";

export function RightAside() {
    const { fetchTopBooks, isSuccess, isError, errorMsg, data } = useTopBooks();

    useEffect(() => {
        fetchTopBooks();
    }, [fetchTopBooks])

    const top = Array.from(data).forEach(element => console.log(element._id))

    return (
        <div className="aside-right absolute right-48 w-2/12">
            <div className="py-6">
                <Link to="/create-review" className="banner-give-away__container flex justify-items-start p-0">
                    <img src={PicGiveAway} alt="Give Away Banner" className="banner-left" />
                </Link>
            </div>
            <h2 className="text-tertiary font-bold text-xl">Most readed books</h2>
            <ListOfTopBooks books={data}></ListOfTopBooks>
        </div >
    );
}