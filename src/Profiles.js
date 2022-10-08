import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/beigeseal"
            style={({ isActive }) => ({
              background: isActive ? "black" : "white",
              color: isActive ? "white" : "black",
            })}
          >
            beigeseal
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/gildong"
            className={({ isActive }) =>
              "nav-link" + (isActive ? "activated" : "")
            }
          >
            gildong
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/*" element={<div>사용자를 선택해 주세요.</div>}></Route>
        <Route path=":username" element={<Profile />}></Route>
      </Routes>
    </div>
  );
};

export default Profiles;
