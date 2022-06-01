import React from "react";
import { Link } from "react-router-dom";


export function NavigationBarLading() {
    return (
        <div className="flex flex-row justify-between items-center py-6 px-12 md:px-32 xl:px-48">
            <h1>
                <Link to="/" className="text-2xl font-medium">
                    <span>BookWorm</span>
                </Link>
            </h1>
            <ul className="flex flex-row">
                <li>
                    <Link to="/faq"><span className="p-3 font-extralight text-xl">F.A.Q</span></Link>
                </li>
                <li>
                    <Link to="/about"><span className="p-3 font-extralight text-xl">About us</span></Link>
                </li>
                <li>
                    <Link to="/contact"><span className="p-3 font-extralight text-xl">Contact</span></Link>
                </li>
                <li>
                    <Link className="p-2 font-light" to="/login"><span className="text-lg p-2 px-8 bg-orange-600 rounded-full" >Login</span></Link>
                </li>
            </ul>
        </div>
    );
}
