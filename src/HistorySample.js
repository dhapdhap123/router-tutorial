import React from "react";
import { useNavigate } from "react-router";

const HistorySample = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div>
      <button name="back" onClick={handleGoBack}>
        뒤로
      </button>
      <button name="go" onClick={handleGoHome}>
        홈으로
      </button>
    </div>
  );
};

export default HistorySample;
