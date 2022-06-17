import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router";

//Hooks
import { useSearch } from "../../../hooks/useSearch";
//Components
import { SearchCard } from "../../../components/SearchCard/SearchCard";
import { SearchCardSkeleton } from "../../../components/SearchCard/SearchCardSkeleton";

export function Search() {

    const { type, search } = useParams();
    const { searchState, fetchSearch, data } = useSearch();

    useEffect(() => {
        fetchSearch(type, search)
    }, [search])

    return (
        <>
            <div className="search__container px-10">
                <div className="search__info py-4">
                    <h2 className="text-tertiary font-semibold text-2xl">{search}</h2>
                </div>
                <div className="p-2 sm:p-0 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2">
                    {
                        searchState.isSuccess && !searchState.isLoading ?
                            data.map((element) => <SearchCard id={element._id} image={element.image} title={element.bookTitle} />)
                            :
                            <>
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