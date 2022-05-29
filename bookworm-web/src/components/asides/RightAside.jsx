import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Hooks
import { useTopBooks } from "../../hooks/useTopBooks";
//Componentss
import { ListOfTopBooks } from "../listOfTopBooks/ListOfTopBooks";

export function RightAside() {
    const { fetchTopBooks, isSuccess, isError, errorMsg, data } = useTopBooks();

    useEffect(()=>{
        fetchTopBooks();
    }, [fetchTopBooks])
    
    const top = Array.from(data).forEach(element => console.log(element._id))
    console.log(top)
    return (
        <div className="aside-right absolute right-48 w-2/12 bg-tertiary opacity-75">
            <h2>RigthAside</h2>
        <ListOfTopBooks books={data}></ListOfTopBooks>
        </div >
    );
}