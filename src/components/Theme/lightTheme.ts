// lightTheme.tsx
import themes from "./Theme";

const lightTheme = {
  ...themes,
  textColor: "#333333",
  backgroundColor: "white",
  variance: {
    positive: "#8eb900",
    negative: "#ff000a",
  },
  xAxis: {
    label: "#333333",
    line: {
      normal: "#333333",
      thick: "#858585",
      double: "#333333",
      lineColor: "#333333",
    },
    gridLine: "#e6e6e6",
    groupLine: "#cccccc",
  },
  yAxis: {
    label: "#333333",
    line: "black",
    gridLine: "#e6e6e6",
    axisLine: "#e6e6e6",
    scaleBand: "#268ce6",
    lineColor: "#333333",
  },
  waterfall: {
    connectingLineColor: "black",
    connectingLineStrokeWidth: 1,
  },
  cluster: {
    barColors: ["#3366cc", "#dc3912", "#ff9900"],
  },
  stacked: {
    stackColors: ["#0074D9", "#FF4136", "#2ECC40"],
  },
};

export default lightTheme;
