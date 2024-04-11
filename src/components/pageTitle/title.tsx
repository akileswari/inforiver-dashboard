import "../assets/css/PageTitle.css";

const Title = ({ title }) => {
  return (
    <div className="container">
      <div className="left-section">
        <div className="title-container">
          <div className="title">{title}</div>
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
  );
};

export default Title;
