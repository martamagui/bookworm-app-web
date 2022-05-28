import React, { useState } from "react";
import { Link } from "react-router-dom";
//Hooks
import { useUser } from "../hooks/useUser";

export function NavigationBarLogged() {

    const { logout } = useUser();

    const handleLogOut = () => logout()

    return (
        <div className="flex flex-row justify-between py-8 px-48">
            <h1>
                <Link to="/" className="text-2xl font-medium">
                    <span>BookWorm</span>
                </Link>
            </h1>
            <ul className="flex flex-row">
                <li>
                    <Link to="/"><span className="p-3 font-extralight text-xl">Home</span></Link>
                </li>
                <li>
                    <Link to="/contact"><span className="p-3 font-extralight text-xl">Profile</span></Link>
                </li>
                <li>
                    <button onClick={handleLogOut}><span className="text-lg p-2 px-8 bg-tertiary font-light rounded-full hover:opacity-95 hover:shadow-md " >Log Out</span></button>
                </li>
            </ul>
        </div>
    );
}