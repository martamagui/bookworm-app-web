import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

//Inner imports
import "./App.css";
import { BookWormRouting } from "./pages/BookWormRouting";

function App() {

  return (
    <>
      <BrowserRouter>
        <BookWormRouting>
        </BookWormRouting>
      </BrowserRouter>
    </>

  );
}

export default App;
