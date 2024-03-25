import React from "react";
import { Logo } from "../template-icon/Logo";
import "./PageTitle.css";
const PageTitle: React.FC = () => {
  return (
    <>
      <div className="page-title">
        <div className="info-river-logo">
          <Logo />
          
        </div>
      </div>
    </>
  );
};

export default PageTitle;
