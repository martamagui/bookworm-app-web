import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Inner
import { UnLoggedRouting } from "./unlogged/UnLoggedRouting";
import { LoggedRouting } from "./logged/LoggedRouting";

export class BookWormRouting extends React.Component {


    validateToken() {
        try {
            if (window.localStorage.getItem("bookWormUser").length > 0) {
                //TODO validar token
                return true
            }
        } catch (error) {
            return false
        }
    }

    render() {
        if (this.validateToken()) {
            return <LoggedRouting></LoggedRouting>
        } else {
            return <UnLoggedRouting></UnLoggedRouting>
        }
    }
}