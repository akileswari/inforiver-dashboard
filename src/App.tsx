import "./App.css";
import LayoutSection from "./components/layout/Layout";
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
        <SubPanel />
        {/* <TemplateWrapper /> */}
       
      </div>
    </div>
  );
}

export default App;
