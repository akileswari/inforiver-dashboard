import { Provider } from "react-redux";
import store from "../../store";
import Toolbar from "./toolbar";
import CustomToolbar from "./customIcon";
import LayoutGrid from "./layoutGrid";




const LayoutSection = () => {
  return (
    <Provider store={store}>
      <Toolbar/>
      <CustomToolbar/>
      <LayoutGrid/>
      </Provider>
  );
};

export default LayoutSection;