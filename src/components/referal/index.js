import React from "react";
import "./referral.css";
import Ref_Claim from "./Ref_Claim";
import Ref_Dashboard from "./Ref_Dashboard";
import Ref_Faq from "./Ref_Faq";
import Ref_Friend from "./Ref_Friend";
import Ref_Invite from "./Ref_Invite";
import Ref_List from "./Ref_List";

function index() {
  return (
    <>
      <Ref_Friend />
      <Ref_Claim />
      <Ref_Dashboard />
      <Ref_List />
      <Ref_Invite />
      <Ref_Faq/>
    </>
  );
}

export default index;
