import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Inner
import { Landing } from "./views/Landing";
import { AboutUs } from "./views/AboutUs";
import { Login } from "./views/Login";
import { SignUp } from "./views/SignUp";
import { Contact } from "./views/Contact";
import { Faq } from "./views/Faq";
import { NotFound } from "../notFound/NoFount";
import { NavigationBarLading } from "../../components/navigationBars/NavigationBarLanding";


export function UnLoggedRouting() {
    return (
        <div className="unlogged__body">
            <NavigationBarLading></NavigationBarLading>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
    );
}