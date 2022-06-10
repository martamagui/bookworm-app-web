import React from "react";
import { useParams } from "react-router";
import { useSearch } from "../../../hooks/useSearch";

export function Search() {

    const { type, search } = useParams();
    const { searchState, getByAuthor, getByHashTag, getByTitle } = useSearch();

    return (
        <div className="search__container">
            <div className="search__info">
                <h2 className="">Search value</h2>
            </div>
            <div className="grid-cols-3">

            </div>
        </div>)


}