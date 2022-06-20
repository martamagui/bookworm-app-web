import React, { useState } from "react";
import { Link } from "react-router-dom";
//Assets
import icHome from "../../assets/icons/ic_home.svg"
import icProfile from "../../assets/icons/ic_profile.svg"

//Hooks
import { useUser } from "../../hooks/useUser";

export function NavigationBarLogged() {

    const { logout } = useUser();
    const handleLogOut = () => logout()

    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <nav className="fixed md:relative z-20 w-full">
            <div className="w-full nav__container bg-inverse-on-surface shadow-md md:shadow-none md:bg-transparent">
                <div className="nav__wrapper-logo">
                    <h1>
                        <Link to="/" className="text-2xl font-medium">
                            <span className="text-tertiary ">BookWorm</span>
                        </Link>
                    </h1>
                    <button onClick={() => setNavbarOpen(!navbarOpen)} data-collapse-toggle="mobile-menu" type="button"
                        className={(navbarOpen ? "bg-tertiary inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden focus:outline-none" : "inline-flex items-center p-2 ml-3 text-sm text-tertiary rounded-lg md:hidden focus:outline-none")} aria-controls="mobile-menu" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>

                <div className={"nav__wrapper-menu" + (navbarOpen ? " flex " : " hidden")} id="mobile-menu">
                    <ul className="items-center">
                        <li>
                            <Link to="/" className="flex flex-row"><img src={icHome} alt="Home icon" /><span className="p-4 text-xl text-tertiary">Home</span></Link>
                        </li>
                        <li className="px-2 pb-5 md:pb-0 lg:px-3">
                            <Link to="/my-profile" className="flex flex-row" ><img src={icProfile} alt="Profile icon" /><span className="p-4 text-xl text-tertiary">Profile</span></Link>
                        </li>
                        <li>
                            <button onClick={handleLogOut}><span className="whitespace-nowrap text-lg p-2 px-8 bg-tertiary text-white rounded-full hover:opacity-95 hover:shadow-md " >Log Out</span></button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}