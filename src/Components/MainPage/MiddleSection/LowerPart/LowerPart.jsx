import React from "react";
import LeftLowerPart from "./LeftLowerPart/JobListing";

import "./LowerPart.css";
const LowerPart = ({ selectedJobs, authenticatedUser, setlogin, loginRef }) => {
  return (
    <article className="lwrprt">
      <div className="Lowerpart">
        <LeftLowerPart
          selectedJobs={selectedJobs}
          authenticatedUser={authenticatedUser}
          setlogin={setlogin}
          loginRef={loginRef}
        />
      </div>
    </article>
  );
};
export default LowerPart;
