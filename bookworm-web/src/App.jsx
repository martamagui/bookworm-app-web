import React, { useContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";

//Inner imports
import "./App.css";
import { BookWormRouting } from "./pages/BookWormRouting";
import { UserContext, UserContextProvider } from "./context/UserContext";


function App() {

  //TODO sacar a un hook y completar
  const user = useContext(UserContext)

  return (
    <>
      <UserContextProvider value={user}>
        <BrowserRouter>
          <BookWormRouting>
          </BookWormRouting>
        </BrowserRouter>
      </UserContextProvider>

    </>

  );
}

export default App;
