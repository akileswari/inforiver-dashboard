import { IThemeColor } from "./typing";

const darkTheme: IThemeColor = {
  chart: {
    background: "#333333",
    foreground: "#ffffff",
    accent: "#0078D4",
    accentLight: "#043962",
    hover: "#4d4d4d",
    hoverStrong: "#595959",
    border: "#aaaaaa",
    seriesColors: [
      "#E7E7E7",
      "#797979",
      "#A3A3A3",
      "#6C6C6C",
      "#999999",
      "#888888",
      "#ACACAC",
      "#DADADA",
      "#C2C2C2",
      "#666666",
      "#919191",
      "#CDCDCD",
      "#B7B7B7",
      "#818181",
      "#737373",
    ],
  },
  waterfall: {
    connectingLineColor: "#aaaaaa",
    connectingLineStrokeWidth: 1,
  },
  xAxis: {
    label: "#ffffff",
    line: {
      normal: "#aaaaaa",
      thick: "#aaaaaa",
      double: "#aaaaaa",
    },
    gridLine: "#aaaaaa",
    groupLine: "#666666",
  },
  yAxis: {
    label: "#ffffff",
    line: "#aaaaaa",
    gridLine: "#aaaaaa",
    axisLine: "#aaaaaa",
    scaleBand: "#74b1e9",
  },
  dataLabel: {
    label: "#ffffff",
    background: "#333333",
    extraACBgColor: "#333333cc",
  },
  deviation: {
    label: "#ffffff",
    line: "#aaaaaa",
    circle: "#aaaaaa",
    bar: "#aaaaaa",
    background: "#118dff",
  },
  legend: {
    label: "#ffffff",
    title: "#ffffff",
  },
  footer: {
    label: "#ffffff",
  },
  measure: {
    fillColor: {
      AC: "#ffffff",
      PY: "#a6a6a6",
      PL: "#333333",
      FC: "#333333",

      TT: "#C3CCD7",
    },
    highlightColor: {
      AC: "#E2E9F2",
      PY: "#9CA9BD",
      PL: "#E2E9F2",
      FC: "#E2E9F2",

      TT: "#E2E9F2",
    },
    borderColor: {
      AC: "#ffffff",
      PY: "#a6a6a6",
      PL: "#99CDFF",
      FC: "#FD9EFF",

      TT: "#C3CCD7",
    },
    pattern: {
      AC: "solid",
      PY: "solid",
      PL: "outlined",
      FC: "hatched",

      TT: "solid",
    },
  },
  lineArea: {
    fillColor: {
      AC: "#ffffff",
      PY: "#a6a6a6",
      PL: "#99CDFF",
      FC: "#FD9EFF",

      TT: "#C3CCD7",
    },
    borderColor: {
      AC: "#ffffff",
      PY: "#a6a6a6",
      PL: "#99CDFF",
      FC: "#FD9EFF",

      TT: "#C3CCD7",
    },
    boxPlotBorderColor: {
      AC: "#0078d4",
      PY: "#a6a6a6",
      PL: "#99CDFF",
      FC: "#FD9EFF",

      TT: "#C3CCD7",
    },
    lineStyle: {
      AC: "solid",
      PY: "solid",
      PL: "dashed",
      FC: "dashed",

      TT: "solid",
    },
    marker: {
      AC: {
        enabled: true,
        color: "#EAEAEA",
        boxPlotLineMarkerColor: "#0078d4",
      },
      PY: { enabled: false },
      PL: {
        enabled: false,
        color: "#EAEAEA",
        boxPlotLineMarkerColor: "#99CDFF",
      },
      FC: { enabled: true },
    },
  },
  variance: {
    positive: "#7BCA01",
    negative: "#f64747",
  },
  trendColor: {
    up: "#7bca01",
    down: "#f64747",
    Neutral: "#BFBFBF",
  },

  marker: "#ffffff",
  smallMultiples: {
    panelBackground: "#333333",
    panelBorder: "#aaaaaa",
    panelTitleCategory: "#ffffff",
    panelTitleValue: "#ffffff",
    alternateGrid: "#595959",
  },
  kpi: {
    title: "#ffffff",
    total: "#ffffff",
    valueLabel: "#ffffff",
    value: {
      positive: "#7BCA01",
      negative: "#f64747",
    },
  },
  rankedOthers: {
    AC: "#FFCF91",
    PY: "#CF8957",
    PL: "#FFCF91",
    FC: "#FFCF91",
  },
  analytics: {
    referenceLine: "#88C6FF",
    referenceBand: "#434343",
    referenceBandOpacity: 0.5,
    trendLine: "#ff8d5b",
    fontColor: "#8AC7ff",
    additionalSeries: "#4EC0C3",
    foreground: "#FFFFFF",
    background: "#333333",
    backgroundOpacity: 0.8,
    errorBar: "#AAAAAA",
  },
  annotation: {
    markerColor: "#0078D4",
    arrowColor: "#88C6FF",
    borderColor: "#88C6FF",
  },
  outlineRect: {
    borderColor: "#8A8A8A",
  },
  bullet: {
    CONDITIONAL_BAR: {
      actual: "", // variance color
      target: "#FFFFFF",
      additionalTarget: "#A6A6A6",
    },
    QUALITATIVE_BULLET: {
      actual: "#FFFFFF",
      target: "#FFFFFF",
      additionalTarget: "#A6A6A6",
    },
    COMPARATIVE_BULLET: {
      actual: "#FFFFFF",
      target: "#74B1E9",
      additionalTarget: "#FFFFFf",
    },
    DOT_PLOT: {
      actual: "#FFFFFF",
      target: "#74B1E9",
      additionalTarget: "#A6A6A6",
    },
    DUMBBELL: {
      actual: "#FFFFFF",
      target: "#A6A6A6",
      additionalTarget: "", // no additional target
    },
    IBCS_BULLET: {
      actual: "#ffffff",
      target: "#A6A6A6",
      additionalTarget: "",
    },
    PROGRESS_CHART: {
      actual: "#ffffff",
      target: "", // Target color will differ based on the template
      additionalTarget: "#A6A6A6",
    },
  },
  trellis: {
    averagePanel: "#565656",
  },
  boxPlotConfig: {
    whiskerMin: {
      fillColor: "#A0A0A0",
    },
    whiskerMax: {
      fillColor: "#A0A0A0",
    },
    medianQuartile: {
      fillColor: "#46D5F4",
    },
    commonSettings: {
      fillColor: "#FFFFFF",
      stemColor: "#A0A0A0",
    },
    outliers: {
      color: "#46D5F4",
    },
    boxPlotOverlapped: {
      commonSettings: {
        fillColor: "#C6C6C6",
      },
    },
    boxPlotForecast: {
      whiskerMin: {
        fillColor: "#A0A0A0",
      },
      whiskerMax: {
        fillColor: "#A0A0A0",
      },
      medianQuartile: {
        fillColor: "#46D5F4",
      },
      commonSettings: {
        fillColor: "#FFFFFF",
        stemColor: "#A0A0A0",
      },
    },
  },
  table: {
    background: "#333333",
    font: "#FFFFFF",
    columnHeaderColor: "#FFFFFF",
    rowHeaderColor: "#FFFFFF",
    valueColor: "#FFFFFF",
    outline: "#AAAAAA",
    oddRow: "#333333",
    evenRow: "#464646",
    gridLine: "#8A8A8A",
  },
};
export default darkTheme;
