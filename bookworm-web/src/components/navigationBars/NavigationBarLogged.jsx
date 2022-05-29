import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
//Assets
import icHome from "../../assets/icons/ic_home.svg"
import icProfile from "../../assets/icons/ic_profile.svg"

//Hooks
import { useUser } from "../../hooks/useUser";

export function NavigationBarLogged() {

    const { logout } = useUser();

    const handleLogOut = () => logout().then(useNavigate('/'));

    return (
        <div className="flex flex-row justify-between items-center py-6 px-48">
            <h1>
                <Link to="/" className="text-2xl font-medium">
                    <span className="text-tertiary">BookWorm</span>
                </Link>
            </h1>
            <ul className="flex flex-row items-center">
                <li>
                    <Link to="/" className="flex flex-row"><img src={icHome} alt="Home icon" /><span className="p-3 text-xl text-tertiary">Home</span></Link>
                </li>
                <li className="px-3">
                    <Link to="/my-profile" className="flex flex-row" ><img src={icProfile} alt="Profile icon" /><span className="p-4 text-xl text-tertiary">Profile</span></Link>
                </li>
                <li>
                    <button onClick={handleLogOut}><span className="text-lg p-2 px-8 bg-tertiary text-white rounded-full hover:opacity-95 hover:shadow-md " >Log Out</span></button>
                </li>
            </ul>
        </div>
    );
}