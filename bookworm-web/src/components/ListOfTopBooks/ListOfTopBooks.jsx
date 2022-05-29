import React, { useCallback, useEffect, useState } from "react";
//Components
import { TopBookCard } from "../topBookCard/TopBookCard";

export function ListOfTopBooks({books}){

    return <div className="topBooks__container">
        {
            books.map(({_id, reviews})=> <TopBookCard id={_id} reviews={reviews}></TopBookCard>)
        }
    </div>
}