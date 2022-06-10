import { React, useState } from "react";

export function SearchCard({ image, title }) {

    return (
        <div className="searchCard__container p-3 rounded-lg bg-surface shadow-md mb-1">
            <img className="searchCard__image rounded-lg" src={image} alt="Review photo" />
            <p className="text-surface-variant-foreground truncate text-sm font-medium pt-2">{title}</p>
        </div>
    )
}