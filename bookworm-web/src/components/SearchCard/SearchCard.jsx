import { React, useState } from "react";

export function SearchCard({ id, image, title }) {

    return (
        <div className="searchCard__container p-2 rounded-lg bg-surface">
            <img className="searchCard__image" src={image} alt="Review photo" />
            <p className="text-surface-variant-foreground">{title}</p>
        </div>
    )
}