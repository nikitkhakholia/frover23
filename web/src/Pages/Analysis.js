import { useEffect, useState } from "react";
import CircularProgress from "../Components/CircularProgress/CircularProgress"
import { ROVER_IP } from "../env";

var Highcharts = require('highcharts');
const Analysis = () => {
    const [temperatureData, setTemperatureData] = useState([])
    const [humidityData, setHumidityData] = useState([])
    const [pressureData, setPressureData] = useState([])
    const [dataLoaded, setDataLoaded] = useState(0)
    const [sensorData, setSensorData] = useState({ temperature: 0, humidity: 0, moisture: 0, pressureData: 0, co2: 0 })

    const updateLiveData = () => {
        fetch(ROVER_IP+"/livedata", { method: "POST" })
            .then(resp => resp.json())
            .then(data => {
                setSensorData(data)
            })
    }
    const updateGraphData = () => {

        setHumidityData([])
        setPressureData([])
        setTemperatureData([])
        fetch("https://api.thingspeak.com/channels/1913703/feeds.json?api_key=GELC80C08H2HUQTQ")
            .then(resp => resp.json())
            .then(data => {

                data.feeds.forEach((feed, index, ogArray) => {
                    setTemperatureData(temperatureData => [...temperatureData, { x: new Date(feed.created_at), y: parseFloat(feed.field2) }])
                    setHumidityData(humidityData => [...humidityData, { x: new Date(feed.created_at), y: parseFloat(feed.field1) }])
                    setPressureData(pressureData => [...pressureData, { x: new Date(feed.created_at), y: parseFloat(feed.field3) }])
                    if (index + 1 === ogArray.length) {
                        setDataLoaded(dataLoaded+1)
                    }
                });
            })
    }
    useEffect(() => {
        updateGraphData()
        updateLiveData()

    }, []);
    useEffect(() => {
        if (dataLoaded) {
            Highcharts.chart(document.getElementById('chart'),
                {
                    accessibility: { enabled: false },
                    credits: { enabled: false },
                    legend: { layout: 'vertical', align: 'right', verticalAlign: 'middle' },
                    title: { text: 'Statistics' },
                    subtitle: { text: 'Source: Raspberry Pi Sense Hat' },
                    yAxis: { title: { text: 'Values' } },
                    xAxis: { title: { text: "Time of Data Collection" }, type: "datetime" },
                    series:
                        [{
                            name: 'Temperature',
                            data: temperatureData
                        }, {
                            name: 'Humidity',
                            data: humidityData
                        }, {
                            name: 'Pressure',
                            data: pressureData
                        }],
                })
        }
    }, [dataLoaded])
    return <div className="flex flex-col items-center text-white">
        <div className="
            p-8 w-8/12 my-4 rounded-2xl
            grid grid-cols-5 gap-4 
            bg-slate-900 
            "
        >
            <h1 className="
                    col-start-1 col-end-5
                    text-white text-5xl font-black
                    "
            >Live</h1>
            <div className="text-end ">
                <span className="material-symbols-outlined cursor-pointer" onClick={updateLiveData}>
                    refresh
                </span>
            </div>

            <CircularProgress progressName="Temperature" progressValue={sensorData.temperature} valueSymbol={"°C"} />
            <CircularProgress progressName="Humidity" progressValue={sensorData.humidity} valueSymbol={"g/m<sup>3</sup>"} />
            <CircularProgress progressName="Moisture" progressValue={sensorData.moisture} valueSymbol={"%"} />
            <CircularProgress progressName="CO2" progressValue={sensorData.co2} valueSymbol={"%"} />
            <CircularProgress progressName="Pressure" progressValue={sensorData.pressure} valueSymbol={"%"} />
        </div>

        <div className="
            p-8 w-8/12 my-4 rounded-2xl
            bg-slate-900
            grid grid-cols-5
            ">
            <h1 className="
                    col-start-1 col-end-5
                    text-white text-5xl font-black
                    "
            >Insights</h1>
            <div className="text-end ">
                <span className="material-symbols-outlined cursor-pointer" onClick={updateGraphData}>
                    refresh
                </span>
            </div>

            <div id="chart" className="rounded mt-4 col-span-5">
            </div>
        </div>
    </div>
}

export default Analysis