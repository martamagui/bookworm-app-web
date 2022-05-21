import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


//Inner
import { Landing } from "./Landing/Landing";
import { AboutUs } from "./AboutUs/AboutUs";
import { Login } from "./Login/Login";
import { SignUp } from "./SingUp/SignUp";
import { Contact } from "./Contact/Contact";
import { NavigationBarLading } from "./Components/NavigationBarLanding";
import { Faq } from "./FAQ/Faq";


export function UnLoggedApp() {
    return (
        <>
            <NavigationBarLading></NavigationBarLading>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/faq" element={<Faq />} />
            </Routes>
        </>
    );
}