import React from "react";
import "./RegistrationForms.css";
import BasicDetails from "./BasicDetails/BasicDetails.jsx";
import { useRoutes } from "react-router-dom";
import ProfessionalDetails from "./ProfessionalDetails/ProfessionalDetails.jsx";
import EducationDetails from "./EducationDetails/EducationDetails.jsx";
import JobPreference from "./JobPreferences/JobPreference";

const RegistrationForms = ({ onClick, professionClick, eduClick }) => {
  const routeElements = useRoutes([
    {
      path: "/", // This is the relative path of the nested routes
      element: <BasicDetails onClick={onClick} />
    },
    {
      path: "professionalDetailsForm", // Relative path for the nested route
      element: <ProfessionalDetails professionClick={professionClick} />
    },
    {
      path: "educationDetailsForm", // Relative path for the nested route
      element: <EducationDetails eduClick={eduClick} />
    },
    {
      path: "jobPreferenceForm", // Relative path for the nested route
      element: <JobPreference />
    }
  ]);
  return (
    <article className="form-article">
      {routeElements}
    </article>
  );
};

export default RegistrationForms;
