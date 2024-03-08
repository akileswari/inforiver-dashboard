import { Provider } from "react-redux";
import "./App.css";
import PageTitle from "./components/pageTitle/PageTitle";
import SidePanel from "./components/sidePanel/SidePanel";
import SubPanel from "./components/SubPanel/SubPanel";
import TemplateWrapper from "./TemplateBuilder/TemplateWrapper";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PageTitle />
        <div className="main-content">
          <SidePanel />
          <SubPanel />
          <TemplateWrapper />
        </div>
      </div>
    </Provider>
  );
}

export default App;
