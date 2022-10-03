import React from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path={["/about", "/info"]} element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
