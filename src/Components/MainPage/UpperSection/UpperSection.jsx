import React from "react";
import "./UpperSection.css";
import Navbar from "./Navbar/Navbar.jsx";
import UpperContent from "./UpperContent/UpperContent.jsx";

const UpperSection = ({
  onFiltersChange,
  loginreg,
  login,
  authenticatedUser,
  handleLogin,
  handleSuccessfulLogin,
  handleloginreg,
  loginRef
}) => {
  return (
    <>
      <article className="upperArticle">
        <Navbar
        loginRef={loginRef}
          loginreg={loginreg}
          authenticatedUser={authenticatedUser}
          login={login}
          handleLogin={handleLogin}
          handleSuccessfulLogin={handleSuccessfulLogin}
          handleloginreg={handleloginreg}
        />
        <UpperContent onFiltersChange={onFiltersChange} />
      </article>
    </>
  );
};

export default UpperSection;
