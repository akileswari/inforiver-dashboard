import { Provider } from "react-redux";
import store from "../../store";
import Toolbar from "./toolbar";
import CustomToolbar from "./customIcon";
import LayoutTittle from "./layoutTittle";





const LayoutSection = () => {
  return (
    <Provider store={store}>
      <LayoutTittle />
      <Toolbar />
      <CustomToolbar />
    </Provider>
  );
};

export default LayoutSection;