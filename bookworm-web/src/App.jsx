import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

//Inner imports
import "./App.css";
import { UnLoggedRouting } from "./pages/Unlogged/unLoggedApp"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <UnLoggedRouting>
        </UnLoggedRouting>
      </BrowserRouter>
    </>

  );
}

export default App;
