import { Provider } from "react-redux";
import "./App.css";
import MainComp, { ELayouts } from "./MainComponent";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <MainComp />
    </Provider>
  );
}

export default App;
