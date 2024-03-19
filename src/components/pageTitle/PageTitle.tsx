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
      <div className="container">
        <div className="left-section">
          <div className="title-container">
            <div className="title">Layout</div>
          </div>
        </div>
        <div className="right-section">
          <div className="button-container">
            <div className="reset-button">
              <div className="button-text">Reset</div>
            </div>
            <div className="export-button">
              <div className="button-text">Export Json</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTitle;
