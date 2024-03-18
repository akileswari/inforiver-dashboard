import { Provider } from "react-redux";
import "./App.css";
import MainComp from "./MainComp";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <MainComp />
    </Provider>
  );
}

export default App;
