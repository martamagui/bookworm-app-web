import React from "react";
import { Link } from "react-router-dom";


export function NavigationBarLading() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <nav >
            <div className="bg-on-primary-container w-full nav__container">
                <div className="nav__wrapper-logo">
                    <h1 className="self-center">
                        <Link to="/" className="text-2xl font-medium">
                            <span>BookWorm</span>
                        </Link>
                    </h1>
                    <button onClick={() => setNavbarOpen(!navbarOpen)} data-collapse-toggle="mobile-menu" type="button"
                        className={(navbarOpen ? "bg-secondary inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:text-white focus:outline-none" : "inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:text-white focus:outline-none")} aria-controls="mobile-menu" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className={"nav__wrapper-menu" + (navbarOpen ? " flex shadow-xl rounded-3xl" : " hidden")}
                    id="mobile-menu">
                    <ul className="">
                        <li onClick={() => setNavbarOpen(false)} className="py-2 md:py-0">
                            <Link to="/faq"><span className="py-14 md:py-0 p-3 md:font-extralight text-xl">F.A.Q</span></Link>
                        </li>
                        <li onClick={() => setNavbarOpen(false)} className="py-2 md:py-0">
                            <Link to="/about"><span className="py-14 md:py-0 p-3 md:font-extralight text-xl">About us</span></Link>
                        </li>
                        <li onClick={() => setNavbarOpen(false)} className="py-3 md:py-0">
                            <Link className="p-2 font-light" to="/login"><span className="text-lg p-2 px-8 bg-orange-600 rounded-full" >Login</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
