import { React, useState } from "react";
import { Link } from "react-router-dom"


export function SearchCard({ id, image, title }) {

    return (
        <Link to={"/review/" + id}>
            <div className="searchCard__container p-2 2xl:p-3 rounded-lg bg-surface shadow-md mb-1 hover:opacity-90 ">
                <img className="searchCard__image rounded-lg" src={image} alt="Review photo" />
                {
                    title != null ?
                        <p className="text-surface-variant-foreground truncate text-sm font-medium pt-2">{title}</p>
                        : ""
                }
            </div>
        </Link>
    )
}