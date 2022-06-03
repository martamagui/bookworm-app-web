import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//Views
import { Detail } from "./views/Detail";
import { Feed } from "./views/Feed";
import { Profile } from "./views/Profile";
import { NotFound } from "../notFound/NoFount";
import { NavigationBarLogged } from "../../components/navigationBars/NavigationBarLogged";
import { CreateReview } from "./views/CreateReview";
import { LeftAside } from "../../components/asides/LeftAside";
import { RightAside } from "../../components/asides/RightAside";

export function LoggedRouting() {
    return (
        <div className="logged__body">
            <NavigationBarLogged></NavigationBarLogged>
            <div className="logged__content relative flex flex-col lg:flex-row justify-center px-12 lg:px-32 xl:px-48">
                <LeftAside ></LeftAside>
                <div className="mt-20 md:mt-0 lg:w-6/12">
                    <Routes>
                        <Route path="/" element={<Feed />} />
                        <Route path="/review/:id" element={<Detail />} />
                        <Route path="/my-profile" element={<Profile />} ></Route>
                        <Route path="/profile/:id" element={<Profile />} />
                        <Route path="/create-review" element={<CreateReview />} />
                        <Route path="/saved-reviews" />
                        <Route path="/*" element={<NotFound />} />
                        <Route
                            path="/login"
                            element={<Navigate to="/" />}
                        />
                    </Routes>
                </div>
                <RightAside></RightAside>
            </div>
        </div >
    );
}