// lightTheme.tsx
import themes from "./Theme";

const lightTheme = {
    ...themes,
    barColorPositive: 'blue', 
    barColorNegative: 'red', 
    textColor: 'black',
   backgroundColor: 'white',
    axisStrokeColor: 'black', 
    waterfall: {
        connectingLineColor: 'black',
        connectingLineStrokeWidth: 1, 
    },
    cluster: {
        barColors: ['blue', 'red', 'green'], 
       
    },
    stacked: {
        stackColors: ['blue', 'red', 'green'], 
    },
};

export default lightTheme;
