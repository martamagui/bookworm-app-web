import { React, useState } from "react";

export function SearchCardSkeleton() {

    return (
        <div className="shimmer searchCard__container p-3 rounded-lg bg-surface shadow-md mb-1">
            <div className="searchCard__image rounded-lg  bg-outline opacity-60 mb-3" />
            <div className="bg-surface-variant-foreground opacity-60 p-1 pt-2 rounded-xl"></div>
        </div>
    )
}