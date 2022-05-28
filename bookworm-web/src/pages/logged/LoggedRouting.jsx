import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//inner
import { Detail } from "./views/Detail";
import { Feed } from "./views/Feed";
import { Profile } from "./views/Profile";
import { NotFound } from "../notFound/NoFount";
import { NavigationBarLading } from "../../components/NavigationBarLanding";


export function LoggedRouting() {
    return (
        <div className="unlogged_body">
            <NavigationBarLading></NavigationBarLading>
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/review/:id" element={<Detail />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
    );
}