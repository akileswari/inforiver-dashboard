import "./App.css";
import CustomToolbar from "./components/layout/customIcon";
import LayoutSection from "./components/layout/Layout";
import LayoutGrid from "./components/layout/layoutGrid";
import Toolbar from "./components/layout/toolbar";
import PageTitle from "./components/pageTitle/PageTitle";

import { ELayouts } from "./MainComp";
import TemplateWrapper from "./TemplateBuilder/TemplateWrapper";

function App() {
  return (
    <div className="App">
      <PageTitle />
      
      <div className="main-content">
        <Toolbar />
        <CustomToolbar />
         <LayoutGrid />
        {/* <SubPanel /> */}
        {/* <TemplateWrapper /> */}
      </div>
    </div>
  );
}

export default App;
