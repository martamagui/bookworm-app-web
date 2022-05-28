import React from "react";
import { Routes, Route } from "react-router-dom";

//Views
import { Detail } from "./views/Detail";
import { Feed } from "./views/Feed";
import { Profile } from "./views/Profile";
import { NotFound } from "../notFound/NoFount";
import { NavigationBarLogged } from "../../components/NavigationBarLogged";
import { CreateReview } from "./views/CreateReview";
import { LeftAside } from "../../components/LeftAside";
import { RightAside } from "../../components/RightAside";

export function LoggedRouting() {
    return (
        <div className="logged__body">
            <NavigationBarLogged></NavigationBarLogged>
            <div className="logged__content flex flex-row px-48">
                <LeftAside></LeftAside>
                <div className="w-6/12 bg-yellow-300">
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