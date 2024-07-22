import React from "react";
import UpperPart from "./UpperPart/UpperPart.jsx";
import LowerPart from "./LowerPart/LowerPart.jsx";

import "./MiddleSection.css";
const MiddleSection = ({selectedJobs, authenticatedUser, setlogin, loginRef}) => {
  return (
    <>
      <div>
        <UpperPart />
        <LowerPart selectedJobs={selectedJobs} authenticatedUser={authenticatedUser}
              setlogin={setlogin} loginRef={loginRef}/>
      </div>
    </>
  );
};

export default MiddleSection;
