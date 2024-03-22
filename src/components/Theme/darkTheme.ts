import { IThemeColor } from "./typing";

const darkTheme: IThemeColor = {
    chart: {
        background: '#000000',
        foreground: '#ffffff',
        accent: '#0078D4',
        accentLight: '#E9F5FE',
        hover: '#333333',
        hoverStrong: '#444444',
        border: '#666666',
        seriesColors: [
            '#4B4B4B',
            '#999999',
            '#747474',
            '#E4E4E4',
            '#BFBFBF',
            '#848484',
            '#ABABAB',
            '#5D5D5D',
            '#9E9D9D',
            '#3F3F3F',
            '#D9D9D9',
            '#898E94',
            '#818181',
            '#707070',
            '#676A6F',
        ],
    },
    waterfall: {
        connectingLineColor: '#333333',
        connectingLineStrokeWidth: 1,
    },
    xAxis: {
        label: '#ffffff',
        line: {
            normal: '#ffffff',
            thick: '#858585',
            double: '#ffffff',
        },
        gridLine: '#666666',
        groupLine: '#555555',
    },
    yAxis: {
        label: '#ffffff',
        line: '#ffffff',
        gridLine: '#666666',
        axisLine: '#666666',
        scaleBand: '#268ce6',
    },
    dataLabel: {
        label: '#ffffff',
        background: '#000000',
        extraACBgColor: '#ffffffcc',
    },
    deviation: {
        label: '#ffffff',
        line: '#808080',
        circle: '#000000',
        bar: '#ffffff',
        background: '#0070c0',
    },
    legend: {
        label: '#ffffff',
        title: '#ffffff',
    },
    footer: {
        label: '#ffffff',
    },
    measure: {
        fillColor: {
            AC: '#262626',
            PY: '#bfbfbf',
            PL: '#4e4e4e',
            FC: '#262626',
           
        },
        highlightColor: {
            AC: '#0E4FA2',
            PY: '#82BDEB',
            PL: '#0E4FA2',
            FC: '#0E4FA2',
           
        },
        borderColor: {
            AC: '#262626',
            PY: '#bfbfbf',
            PL: '#4e4e4e',
            FC: '#262626',
            
        },
        pattern: {
            AC: 'solid',
            PY: 'solid',
            PL: 'outlined',
            FC: 'hatched',
            // Additional patterns here...
        },
    },
    lineArea: {
        fillColor: undefined,
        borderColor: undefined,
        boxPlotBorderColor: undefined,
        lineStyle: undefined,
        marker: undefined,
        boxPlotMarker: undefined
    },
    variance: {
        positive: "",
        negative: ""
    },
    trendColor: {
        down: "",
        up: "",
        Neutral: ""
    },
    marker: "",
    smallMultiples: {
        panelBackground: "",
        panelBorder: "",
        panelTitleCategory: "",
        panelTitleValue: "",
        alternateGrid: ""
    },
    kpi: {
        total: "",
        title: "",
        valueLabel: "",
        value: {
            positive: "",
            negative: ""
        }
    },
    rankedOthers: undefined,
    analytics: {
        referenceLine: "",
        referenceBand: "",
        referenceBandOpacity: 0,
        trendLine: "",
        fontColor: "",
        additionalSeries: "",
        foreground: "",
        background: "",
        backgroundOpacity: 0,
        errorBar: ""
    },
    annotation: {
        markerColor: "",
        arrowColor: "",
        borderColor: ""
    },
    outlineRect: {
        borderColor: ""
    },
    bullet: {
        CONDITIONAL_BAR: undefined,
        PROGRESS_CHART: undefined,
        IBCS_BULLET: undefined,
        QUALITATIVE_BULLET: undefined,
        COMPARATIVE_BULLET: undefined,
        DUMBBELL: undefined,
        DOT_PLOT: undefined
    },
    trellis: {
        averagePanel: ""
    },
    boxPlotConfig: {
        whiskerMin: {
            fillColor: ""
        },
        whiskerMax: {
            fillColor: ""
        },
        medianQuartile: {
            fillColor: ""
        },
        commonSettings: {
            fillColor: "",
            stemColor: ""
        },
        outliers: {
            color: ""
        },
        boxPlotOverlapped: {
            commonSettings: {
                fillColor: ""
            }
        },
        boxPlotForecast: {
            whiskerMin: {
                fillColor: ""
            },
            whiskerMax: {
                fillColor: ""
            },
            medianQuartile: {
                fillColor: ""
            },
            commonSettings: {
                fillColor: "",
                stemColor: ""
            }
        }
    },
    table: {
        background: "",
        font: "",
        columnHeaderColor: "",
        rowHeaderColor: "",
        valueColor: "",
        outline: "",
        oddRow: "",
        evenRow: "",
        gridLine: ""
    }
};

export default darkTheme;
