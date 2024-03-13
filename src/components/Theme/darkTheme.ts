import themes from "./Theme";

const darkTheme = {
    ...themes,
    textColor: 'white',
    backgroundColor: 'black',
    variance: {
        positive: '#7BCA01',
        negative: '#f64747',
    },
    waterfall: {
        connectingLineColor: '#aaaaaa',
        connectingLineStrokeWidth: 2,
    },
    cluster: {
        barColors: ['#3366cc', '#dc3912', '#ff9900'],
    },
    stacked: {
        stackColors: ['#0074D9', '#FF4136', '#2ECC40'], 
    },
    axis: {
        xAxis: {
            label: '#ffffff',
            line: {
                normal: '#aaaaaa',
                thick: '#aaaaaa',
                double: '#aaaaaa',
                lineColor: '#aaaaaa', 
            },
            gridLine: '#aaaaaa',
            groupLine: '#666666',
        },
        yAxis: {
            label: '#ffffff',
            line: '#ffffff', 
            gridLine: '#aaaaaa',
            axisLine: '#aaaaaa',
            scaleBand: '#74b1e9',
            lineColor: '#aaaaaa', 
        },
    },
};

export default darkTheme;
