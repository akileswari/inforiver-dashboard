// darkTheme.tsx
import themes from "./Theme";

const darkTheme = {
    ...themes,
    barColorPositive: 'lightblue',
    barColorNegative: 'lightcoral',
    textColor: 'white',
    backgroundColor: 'black',
    waterfall: {
        connectingLineColor: 'lightgray',
    },
    cluster: {
        barColors: ['lightblue', 'lightcoral', 'lightgreen'],
        
    },
    stacked: {
        stackColors: ['lightblue', 'lightcoral', 'lightgreen'], 
    },
};

export default darkTheme;
