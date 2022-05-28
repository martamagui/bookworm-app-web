import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Inner
import { UnLoggedRouting } from "./unlogged/UnLoggedRouting";
import { LoggedRouting } from "./logged/LoggedRouting";
//Hooks
import { useUser } from "../hooks/useUser";
//Context
import { UserContext } from "../context/UserContext";

export function BookWormRouting() {

    return (
        <>
            <UserContext.Consumer>
                {(value) => (
                    (value.userToken != null && value.userToken.length > 0)
                        ? <LoggedRouting></LoggedRouting>
                        : <UnLoggedRouting></UnLoggedRouting>
                )}
            </UserContext.Consumer>
        </>
    );
}
