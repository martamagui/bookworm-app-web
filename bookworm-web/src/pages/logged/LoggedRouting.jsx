import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//inner
import { Detail } from "./views/Detail";
import { Feed } from "./views/Feed";
import { Profile } from "./views/Profile";
import { NotFound } from "../notFound/NoFount";
import { NavigationBarLogged } from "../../components/NavigationBarLogged";

export function LoggedRouting() {
    return (
        <div className="logged_body">
            <NavigationBarLogged></NavigationBarLogged>
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/review/:id" element={<Detail />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/*" element={<NotFound />} />
                <Route
                    path="/login"
                    element={<Navigate to="/" />}
                />
            </Routes>
        </div >
    );
}