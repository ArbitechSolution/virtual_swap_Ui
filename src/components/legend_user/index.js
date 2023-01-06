import React from "react";
import "./legend.css";
import Legend_user from "./Legend_user";
import Legend_Rect from "./Legend_Rect";
import Legend_Round from "./Legend_Round";
import Legend_timeline from "./Legend_timeline";
import Legend_Luckydraw from "./Legend_Luckydraw";
import Legend_Top from "./Legend_Top";
import Legend_Top_card from "./Legend_Top_card";

function LengendMain() {
  return (
    <>
      <Legend_user />
      <Legend_Rect />
      <Legend_timeline />
      <Legend_Round />
      <Legend_Luckydraw/>
      <Legend_Top/>
      <Legend_Top_card/>
    </>
  );
}

export default LengendMain;
