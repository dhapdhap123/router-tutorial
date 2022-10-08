import React from "react";
import { useLocation } from "react-router";

const None = () => {
  const location = useLocation();
  return (
    <div>
      <h2>잘못된 접근입니다!</h2>
      <p>{location.pathname}</p>
    </div>
  );
};

export default None;
