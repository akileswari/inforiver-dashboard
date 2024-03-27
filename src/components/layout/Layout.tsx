import { Provider } from "react-redux";
import store from "../../store";
import Toolbar from "./toolbar";
import CustomToolbar from "./customIcon";
import LayoutTittle from "./layoutTittle";
import LayoutGrid from "./layoutGrid";
import { useState } from "react";





const LayoutSection = () => {
  const [rows, setRows] = useState(1); 
  const [columns, setColumns] = useState(1); 

  return (
    <Provider store={store}>
      <LayoutTittle />
      <Toolbar setRows={setRows} setColumns={setColumns} /> 
      <CustomToolbar />
      <LayoutGrid rows={rows} columns={columns} />
    </Provider>
  );
};

export default LayoutSection;

