import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

//Inner imports
import "./App.css";
import { UnLoggedApp } from "./pages/Unlogged/UnLoggedApp"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <UnLoggedApp>
        </UnLoggedApp>
      </BrowserRouter>
    </>

  );
}

export default App;
