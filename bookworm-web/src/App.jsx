import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
//Inner imports
import { Landing } from "./pages/Unlogged/Landing/Landing";
import { AboutUs } from "./pages/Unlogged/AboutUs/AboutUs";
import { Login } from "./pages/Unlogged/Login/Login";
import { SignUp } from "./pages/Unlogged/SingUp/SignUp";
import { Contact } from "./pages/Unlogged/Contact/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>BookWorm</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
