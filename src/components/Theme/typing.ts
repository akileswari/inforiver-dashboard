export interface IThemeColor {
    name: string | number | readonly string[] | undefined;
    chart: {
        background: string;
        foreground: string;
        accent: string;
        accentLight: string;
        hover: string;
        hoverStrong: string;
        border: string;
        seriesColors: string[];
    };
    xAxis: {
        label: string;
        line: Partial<{
            [key in TAxisLineType]: string;
        }>;
        gridLine: string;
        groupLine: string;
    };
    yAxis: {
        label: string;
        line: string;
        gridLine: string;
        scaleBand: string;
        axisLine: string;
    };

    waterfall: {
        connectingLineColor: string, 
        connectingLineStrokeWidth: number, 
    },
    deviation: {
        label: string;
        line: string;
        circle: string;
        bar: string;
        background: string;
    };
    legend: {
        label: string;
        title: string;
    };
    dataLabel: {
        label: string;
        background: string;
        extraACBgColor: string;
    };
    footer: {
        label: string;
    };
    measure: {
        fillColor: Partial<{
            [key in TMeasureFields]: string;
        }>;
        borderColor: Partial<{
            [key in TMeasureFields]: string;
        }>;
        pattern: Partial<{
            [key in TMeasureFields]: TMeasurePattern;
        }>;
        highlightColor: Partial<{
            [key in TMeasureFields]: string;
        }>;
    };
    lineArea: {
        fillColor: Partial<{
            [key in TMeasureFields]: string;
        }>;
        borderColor: Partial<{
            [key in TMeasureFields]: string;
        }>;
        boxPlotBorderColor?: Partial<{
            [key in TMeasureFields]: string;
        }>;
        lineStyle: Partial<{
            [key in TMeasureFields]: TLineStyle;
        }>;
        marker: Partial<{
            [key in TMeasureFields]: Partial<IMarkerConfig>;
        }>;
        boxPlotMarker?: Partial<{
            [key in TMeasureFields]: Partial<IMarkerConfig>;
        }>;
    };
    variance: {
        positive: string;
        negative: string;
    };
    trendColor: {
        down: string;
        up: string;
        Neutral: string;
    };
    marker: string;
    smallMultiples: {
        panelBackground: string;
        panelBorder: string;
        panelTitleCategory: string;
        panelTitleValue: string;
        alternateGrid: string;
    };
    kpi: {
        total: string;
        title: string;
        valueLabel: string;
        value: {
            positive: string;
            negative: string;
        };
    };
    rankedOthers: Partial<IOthersColorConfig>;
    analytics: {
        referenceLine: string;
        referenceBand: string;
        referenceBandOpacity: number;
        trendLine: string;
        fontColor: string;
        additionalSeries: string;
        foreground: string;
        background: string;
        backgroundOpacity: number;
        errorBar: string;
    };
    annotation: {
        markerColor: string;
        arrowColor: string;
        borderColor: string;
    };
    outlineRect: {
        borderColor: string;
    };
    bullet: {
        CONDITIONAL_BAR: IBulletTheme;
        PROGRESS_CHART: IBulletTheme;
        IBCS_BULLET: IBulletTheme;
        QUALITATIVE_BULLET: IBulletTheme;
        COMPARATIVE_BULLET: IBulletTheme;
        DUMBBELL: IBulletTheme;
        DOT_PLOT: IBulletTheme;
    };
    trellis: {
        averagePanel: string;
    };
    boxPlotConfig: {
        whiskerMin: {
            fillColor: string;
        };
        whiskerMax: {
            fillColor: string;
        };
        medianQuartile: {
            fillColor: string;
        };
        commonSettings: {
            fillColor: string;
            stemColor: string;
        };
        outliers: {
            color: string;
        };
        boxPlotOverlapped: {
            commonSettings: {
                fillColor: string;
            };
        };
        boxPlotForecast: {
            whiskerMin: {
                fillColor: string;
            };
            whiskerMax: {
                fillColor: string;
            };
            medianQuartile: {
                fillColor: string;
            };
            commonSettings: {
                fillColor: string;
                stemColor: string;
            };
        };
    };
    table: {
        background: string;
        font: string;
        columnHeaderColor: string;
        rowHeaderColor: string;
        valueColor: string;
        outline: string;
        oddRow: string;
        evenRow: string;
        gridLine: string;
    };
}
