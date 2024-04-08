import { Provider } from "react-redux";
import store from "../../store";
import Toolbar from "./toolbar";
import LayoutTitle from "../layout/LayoutTitle";
import GridComponent from "./layoutGrid";
import { useState } from "react";

const LayoutSection = () => {
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);

  return (
    <Provider store={store}>
      <LayoutTitle />
      <Toolbar setRows={setRows} setColumns={setColumns} />
      <GridComponent
        rows={rows}
        columns={columns}
        margin={0}
        containerPadding={0}
        strokeColor={""}
        strokeWidth={0}
        cornerRadius={0}
        shadow={undefined}
        shadowColor={""}
        selectedShadow={""}
        height={0}
        width={0}
      />
    </Provider>
  );
};

export default LayoutSection;
