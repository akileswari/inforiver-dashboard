import "./App.css";
import PageTitle from "./components/PageTitle";
import SidePanel from "./components/sidePanel/SidePanel";
import SubPanel from "./components/SubPanel";
import TemplateWrapper from "./TemplateBuilder/TemplateWrapper";

function App() {
  return (
    <div className="App">
      <PageTitle />
      <div className="main-content">
        <SidePanel />
        <SubPanel />
        <TemplateWrapper />
      </div>
    </div>
  );
}

export default App;
