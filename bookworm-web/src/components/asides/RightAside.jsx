import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";

//Hooks
import { useTopBooks } from "../../hooks/useTopBooks";

export function RightAside() {
    const { fetchTopBooks, isSuccess, isError, errorMsg, data } = useTopBooks();
    //useCallback(fetchTopBooks())

    //TODO Provisional el onclick, quitar esto
    return (
        <div className="aside-right absolute right-48 w-2/12 bg-tertiary opacity-75">
            <h2 onClick={fetchTopBooks}>RigthAside</h2>
        </div >
    );
}