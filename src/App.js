import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import About from "./About";
import HistorySample from "./HistorySample";
import Home from "./Home";
import None from "./None";
import Profiles from "./Profiles";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/info">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<About />} />
        <Route path="/profiles/*" element={<Profiles />} />
        <Route path="/history" element={<HistorySample />} />
        <Route path="*" element={<None />} />
      </Routes>
    </div>
  );
}

export default App;
