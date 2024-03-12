// darkTheme.tsx
import themes from "./Theme";

const darkTheme = {
    ...themes,
    barColorPositive: 'lightblue',
    barColorNegative: 'lightcoral',
    textColor: 'white',
    backgroundColor: 'black',
    axisStrokeColor: 'lightgray', 
    waterfall: {
        connectingLineColor: 'lightgray',
        connectingLineStrokeWidth: 2,
    },
    cluster: {
        barColors: ['lightblue', 'lightcoral', 'lightgreen'],
        
    },
    stacked: {
        stackColors: ['lightblue', 'lightcoral', 'lightgreen'],
    },
};

export default darkTheme;
