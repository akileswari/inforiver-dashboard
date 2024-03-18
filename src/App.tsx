import { Provider } from "react-redux";
import "./App.css";
<<<<<<< HEAD
import CustomToolbar from "./components/layout/customIcon";
import LayoutSection from "./components/layout/Layout";
import LayoutGrid from "./components/layout/layoutGrid";
import Toolbar from "./components/layout/toolbar";
import PageTitle from "./components/pageTitle/PageTitle";
import SidePanel from "./components/sidePanel/SidePanel";
import SubPanel from "./components/SubPanel";
import TemplateWrapper from "./TemplateBuilder/TemplateWrapper";

function App() {
  return (
    <div className="App">
      <PageTitle />
     
      <div className="main-content">
       
        <SidePanel />
        <Toolbar />
        <CustomToolbar />
        {/* <LayoutGrid /> */}
        {/* <SubPanel /> */}
        {/* <TemplateWrapper /> */}
       
      </div>
    </div>
=======
import MainComp from "./MainComp";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <MainComp />
    </Provider>
>>>>>>> 6e7eb559bacbe37b62f310448ab0e11887778710
  );
}

export default App;
