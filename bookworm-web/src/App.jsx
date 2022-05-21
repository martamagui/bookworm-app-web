import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
//Inner imports
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
