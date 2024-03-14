import "./App.css";
import CustomToolbar from "./components/layout/customIcon";
import LayoutSection from "./components/layout/Layout";
import Toolbar from "./components/layout/toolbar";
import PageTitle from "./components/pageTitle/PageTitle";
import SidePanel from "./components/sidePanel/SidePanel";
import SubPanel from "./components/SubPanel";
import TemplateWrapper from "./TemplateBuilder/TemplateWrapper";

function App() {
  return (
    <div className="App">
      <PageTitle />
      {/* <LayoutSection/> */}
      <div className="main-content">
       
        <SidePanel />
        <Toolbar />
        <CustomToolbar />
        {/* <SubPanel /> */}
        {/* <TemplateWrapper /> */}
       
      </div>
    </div>
  );
}

export default App;
