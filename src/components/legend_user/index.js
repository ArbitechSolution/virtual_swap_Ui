import React from "react";
import "./legend.css";
import Legend_user from "./Legend_user";
import Legend_Rect from "./Legend_Rect";
import Legend_Round from "./Legend_Round";
import Legend_timeline from "./Legend_timeline";

function LengendMain() {
  return (
    <>
      <Legend_user />
      <Legend_Rect />
      <Legend_timeline />
      <Legend_Round />
    </>
  );
}

export default LengendMain;
