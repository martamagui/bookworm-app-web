import React from "react";
import { Link } from "react-router-dom";


export function NavigationBarLading() {
    return (
        <div className="flex flex-row justify-between">
            <h1>
                <Link to="/" className="text-3xl font-bold">
                    <span>BookWorm</span>
                </Link>
            </h1>
            <ul className="flex flex-row">
                <li>
                    <Link to="/faq"><span className="p-1">FAQ</span></Link>
                </li>
                <li>
                    <Link to="/about"><span className="p-1">About us</span></Link>
                </li>
                <li>
                    <Link to="/contact"><span className="p-1">Contact</span></Link>
                </li>
                <li>
                    <Link to="/login"><span className="p-1">Login</span></Link>
                </li>
            </ul>
        </div>
    );
}
