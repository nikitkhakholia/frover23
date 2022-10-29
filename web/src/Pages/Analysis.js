import { useEffect } from "react";
import CircularProgress from "../Components/CircularProgress/CircularProgress"

var Highcharts = require('highcharts');
// require('highcharts/modules/exporting')(Highcharts);
const Analysis = () => {
    useEffect(() => {
        Highcharts.chart(document.getElementById('chart'),
                    {
                        title: {
                            text: 'Temperature'
                        },

                        subtitle: {
                            text: 'Source: Raspberry Pi Sense Hat'
                        },

                        yAxis: {
                            title: {
                                text: 'Percentage'
                            }
                        },

                        xAxis: {
                            accessibility: {
                                rangeDescription: 'Time'
                            }
                        },

                        legend: {
                            layout: 'vertical',
                            align: 'right',
                            verticalAlign: 'middle'
                        },

                        plotOptions: {
                            series: {
                                label: {
                                    connectorAllowed: false
                                },
                                pointStart: 2010
                            }
                        },

                        series: [{
                            name: 'Temperature',
                            data: [20, 21, 22, 22, 23, 22,
                                24, 23, 22, 21, 20]
                        }, {
                            name: 'Humidity',
                            data: [30, 32, 33, 35, 37, 36,
                                34, 32, 30, 28, 26]
                        }, {
                            name: 'Moisture',
                            data: [90, 87, 84, 81, 75, 70,
                                66, 64, 70, 80, 90]
                        }, {
                            name: 'CO2',
                            data: [4, 5, 4, 6, 3, 4, 5,
                                4, 5, 4, 3]
                        }],

                        responsive: {
                            rules: [{
                                condition: {
                                    maxWidth: 500
                                },
                                chartOptions: {
                                    legend: {
                                        layout: 'horizontal',
                                        align: 'center',
                                        verticalAlign: 'bottom'
                                    }
                                }
                            }]
                        }

                    })
    }, []);
    return <div className="flex flex-col items-center">
        <div className="
            p-8 w-8/12 my-4 rounded-2xl
            grid grid-cols-4 gap-4 
            bg-slate-900 
            "
        >
            <h1 className="
                    col-start-1 col-end-5
                    text-white text-5xl font-black
                    "
            >Live</h1>
            <CircularProgress progressName="Temperature" progressValue={25} />
            <CircularProgress progressName="Humidity" progressValue={50} />
            <CircularProgress progressName="Moisture" progressValue={75} />
            <CircularProgress progressName="CO2" progressValue={100} />
        </div>

        <div className="
            p-8 w-8/12 my-4 rounded-2xl
            bg-slate-900
            ">
            <h1 className="
                    col-start-1 col-end-5
                    text-white text-5xl font-black
                    "
            >Insights</h1>
            <div id="chart" className="rounded mt-4">
            </div>
        </div>
    </div>
}

export default Analysis