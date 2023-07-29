import React from "react";
import "./MainCareerFields.css";
import UpperCareerField from "./UpperCareerFields/UpperCareerField";
import LowerCareerFields from "./LowerCareerFields/LowerCareerFields";

const MainCareerFields = () => {
  return (
    <article className="MainCareerContainer">
      <UpperCareerField />
      <LowerCareerFields />
    </article>
  );
};

export default MainCareerFields;
