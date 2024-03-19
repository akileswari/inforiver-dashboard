import '../Theme/Theme'

const boxplotColors = {
    BP: '#262626',
    BP1: '#666666',
    BP2: '#858585',
    BP3: '#A3A3A3',
    BP4: '#C2C2C2',
    BP5: '#E0E0E0',
    BP6: '#707070',
    BP7: '#8F8F8F',
    BP8: '#ADADAD',
};

const additionalColors = {
    AC1: '#666666',
    AC2: '#858585',
    AC3: '#A3A3A3',
    AC4: '#C2C2C2',
    AC5: '#E0E0E0',
    AC6: '#707070',
    AC7: '#8F8F8F',
    AC8: '#ADADAD',
    AC9: '#CCCCCC',
    AC10: '#EBEBEB',
    AC11: '#7A7A7A',
    AC12: '#999999',
    AC13: '#B8B8B8',
    AC14: '#D6D6D6',
    AC15: '#B6BECE',
    AC16: '#919DB6',
    AC17: '#7685A3',
    AC18: '#D1C2D6',
    AC19: '#BE9DBE',
    AC20: '#9777A2',
    AC21: '#D4CAC4',
    AC22: '#BAAAA1',
    AC23: '#9E887B',
    AC24: '#D7C1C1',
    AC25: '#C19F9F',
    AC26: '#A67373',
    AC27: '#C1D7D0',
    AC28: '#9BBFB3',
    AC29: '#73A695',
    ...boxplotColors,
};
const highLightBoxplotColors = {
    BP: '#0E4FA2',
    BP1: '#82BDEB',
    BP2: '#B9CDE1',
    BP3: '#A5BACE',
    BP4: '#5C7B99',
    BP5: '#769EC4',
    BP6: '#A0C6EB',
    BP7: '#73A4D1',
    BP8: '#8298AD',
};
const highLightAdditionalColors = {
    AC1: '#0E4FA2',
    AC2: '#82BDEB',
    AC3: '#B9CDE1',
    AC4: '#A5BACE',
    AC5: '#5C7B99',
    AC6: '#769EC4',
    AC7: '#A0C6EB',
    AC8: '#73A4D1',
    AC9: '#8298AD',
    AC10: '#3C72A3',
    AC11: '#0E4FA2',
    AC12: '#82BDEB',
    AC13: '#B9CDE1',
    AC14: '#A5BACE',
    AC15: '#5C7B99',
    AC16: '#769EC4',
    AC17: '#A0C6EB',
    AC18: '#73A4D1',
    AC19: '#8298AD',
    AC20: '#3C72A3',
    AC21: '#0E4FA2',
    AC22: '#82BDEB',
    AC23: '#B9CDE1',
    AC24: '#A5BACE',
    AC25: '#5C7B99',
    AC26: '#769EC4',
    AC27: '#A0C6EB',
    AC28: '#73A4D1',
    AC29: '#8298AD',

    ...highLightBoxplotColors,
};

 const lightTheme: IThemeColor = {
    chart: {
        background: '#ffffff',
        foreground: '#333333',
        accent: '#0078D4',
        accentLight: '#E9F5FE',
        hover: '#e6e6e6',
        hoverStrong: '#f2f2f2',
        border: '#333333',
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
        label: '#333333',
        line: {
            normal: '#333333',
            thick: '#858585',
            double: '#333333',
        },
        gridLine: '#e6e6e6',
        groupLine: '#cccccc',
    },
    yAxis: {
        label: '#333333',
        line: '#333333',
        gridLine: '#e6e6e6',
        axisLine: '#e6e6e6',
        scaleBand: '#268ce6',
    },
    dataLabel: {
        label: '#333333',
        background: '#333333',
        extraACBgColor: '#ffffffcc',
    },
    deviation: {
        label: '#333333',
        line: '#808080',
        circle: '#ffffff',
        bar: '#333333',
        background: '#0070c0',
    },
    legend: {
        label: '#333333',
        title: '#333333',
    },
    footer: {
        label: '#333333',
    },
    measure: {
        fillColor: {
            AC: '#262626',
            PY: '#bfbfbf',
            PL: '#4e4e4e',
            FC: '#262626',
            ...additionalColors,
            TT: '#636E78',
        },
        highlightColor: {
            AC: '#0E4FA2',
            PY: '#82BDEB',
            PL: '#0E4FA2',
            FC: '#0E4FA2',
            ...highLightAdditionalColors,
            TT: '#0E4FA2',
        },
        borderColor: {
            AC: '#262626',
            PY: '#bfbfbf',
            PL: '#4e4e4e',
            FC: '#262626',
            ...additionalColors,
            TT: '#636E78',
        },
        pattern: {
            AC: 'solid',
            PY: 'solid',
            PL: 'outlined',
            FC: 'hatched',
           
            TT: 'solid',
        },
    },
    lineArea: {
        fillColor: {
            AC: '#262626',
            PY: '#bfbfbf',
            PL: '#262626',
            FC: '#262626',
            ...additionalColors,
            TT: '#636E78',
        },
        borderColor: {
            AC: '#262626',
            PY: '#bfbfbf',
            PL: '#262626',
            FC: '#bfbfbf',
            ...additionalColors,
            TT: '#636E78',
        },
        boxPlotBorderColor: {
            AC: '#0078D4',
            PY: '#82BDEB',
            PL: '#0078D4',
            FC: '#0078D4',
            ...additionalColors,
            TT: '#636E78',
        },
        lineStyle: {
            AC: 'solid',
            PY: 'solid',
            PL: 'dashed',
            FC: 'dashed',
           
            TT: 'solid',
        },
        marker: {
            AC: { enabled: true },
            PY: { enabled: false },
            PL: { enabled: false },
            FC: { enabled: true },
          
        },
        boxPlotMarker: {
            AC: { enabled: true },
            PY: { enabled: true },
            PL: { enabled: true },
            FC: { enabled: true },
           
        },
    },
    variance: {
        positive: '#8eb900',
        negative: '#ff000a',
    },
    trendColor: {
        up: '#8eb900',
        down: '#ff000a',
        Neutral: '#DDDDDD',
    },

    marker: '#333333',
    smallMultiples: {
        panelBackground: '#ffffff',
        panelBorder: '#adadad',
        panelTitleCategory: '#262626',
        panelTitleValue: '#262626',
        alternateGrid: '#d9d9d9',
    },
    kpi: {
        title: '#262626',
        total: '#262626',
        value: {
            positive: '#8eb900',
            negative: '#ff000a',
        },
        valueLabel: '#262626',
    },
    rankedOthers: {
        AC: '#262626',
        PY: '#bfbfbf',
        PL: '#4e4e4e',
        FC: '#262626',
    },
    analytics: {
        referenceLine: '#118DFF',
        referenceBand: '#EAEAEA',
        referenceBandOpacity: 0.5,
        trendLine: '#C21111',
        fontColor: '#6B2328',
        additionalSeries: '#AAAAAA',
        foreground: '#333333',
        background: '#FFFFFF',
        backgroundOpacity: 0.8,
        errorBar: '#AAAAAA',
    },
    annotation: {
        markerColor: '#0078D4',
        arrowColor: '#118DFF',
        borderColor: '#118DFF',
    },
    outlineRect: {
        borderColor: '#DDDDDD',
    },
    bullet: {
        CONDITIONAL_BAR: {
            actual: '', // variance color
            target: '#262626',
            additionalTarget: '#262626',
        },
        QUALITATIVE_BULLET: {
            actual: '#262626',
            target: '#262626',
            additionalTarget: '#262626',
        },
        COMPARATIVE_BULLET: {
            actual: '#262626',
            target: '#A6A6A6',
            additionalTarget: '#262626',
        },
        DOT_PLOT: {
            actual: '#262626',
            target: '#A6A6A6',
            additionalTarget: '#787878',
        },
        DUMBBELL: {
            actual: '#262626',
            target: '#BFBFBF',
            additionalTarget: '', // no additional target
        },
        IBCS_BULLET: {
            actual: '#262626',
            target: '#262626',
            additionalTarget: '',
        },
        PROGRESS_CHART: {
            actual: '#262626',
            target: '', // Target color will differ based on the template
            additionalTarget: '#262626',
        },
    },
    trellis: {
        averagePanel: '#e7e7e7a1',
    },
    boxPlotConfig: {
        whiskerMin: {
            fillColor: '#666666',
        },
        whiskerMax: {
            fillColor: '#666666',
        },
        medianQuartile: {
            fillColor: '#A6A6A6',
        },
        commonSettings: {
            fillColor: '#262626',
            stemColor: '#666666',
        },
        outliers: {
            color: '#A6A6A6',
        },
        boxPlotOverlapped: {
            commonSettings: {
                fillColor: '#262626',
            },
        },
        boxPlotForecast: {
            whiskerMin: {
                fillColor: '#666666',
            },
            whiskerMax: {
                fillColor: '#666666',
            },
            medianQuartile: {
                fillColor: '#A6A6A6',
            },
            commonSettings: {
                fillColor: '#262626',
                stemColor: '#666666',
            },
        },
    },
    table: {
        background: '#FFFFFF',
        font: '#212121',
        columnHeaderColor: '#444444',
        rowHeaderColor: '#44444',
        valueColor: '#212121',
        outline: '#DDDDDD',
        oddRow: '#FFFFFF',
        evenRow: '#F5F5F5',
        gridLine: '#E6E6E6',
    },
};
export default lightTheme