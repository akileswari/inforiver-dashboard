import { Provider } from "react-redux";
import store from "../../store";
import Toolbar from "./Toolbar";
import LayoutTitle from "../layout/LayoutTitle";
import GridComponent from "./LayoutGrid";
import { useState } from "react";

const LayoutSection = () => {
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);

  return (
    <Provider store={store}>
      <LayoutTitle />
      <Toolbar setRows={setRows} setColumns={setColumns} />
      <GridComponent rows={rows} columns={columns} />
    </Provider>
  );
};

export default LayoutSection;
