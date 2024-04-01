import { Provider } from "react-redux";
import "./App.css";
;


import MainComp, { ELayouts } from "./MainComp";
import store from "./store";
import LayoutSection from "./components/layout/Layout";

function App() {
  return (
    <Provider store={store}>
      < MainComp />
     
    </Provider>

  );
}

export default App;
