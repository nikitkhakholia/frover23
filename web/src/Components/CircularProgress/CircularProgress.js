import { useEffect } from "react"

const CircularProgress = ({ progressName = "", progressValue = 0 }) => {
    useEffect(() => {
        var count = 0
        var ele = document.getElementById(`${progressName}Value`)
        setInterval(() => {
            if (count === progressValue) {
                clearInterval()
            } else {
                count += 1
                ele.innerText = count + "%"
            }
        }, 5)
    }, [progressValue, progressName]);
    return <div>


        <div className="
            aspect-square w-[100%]
            relative
            "
        >
            <div className="
                    flex justify-center items-center
                    aspect-square w-[100%]
                    rounded-full
                    ">
                <div className="
                        aspect-square w-[90%]
                        rounded-full 
                        border-green-500
                        flex flex-col items-center justify-center
                        ">
                    <div className="text-white font-black text-4xl" id={`${progressName}Value`}></div><br/>
                    <div className="text-white font-black ">{progressName}</div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100"
                className="
                    aspect-square w-[100%]
                    absolute top-0 left-0
                    -rotate-90
                    "
            >
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                    </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="45" stroke-linecap="round"
                    style={{ strokeDasharray: "283", strokeDashoffset: `${283 - (283 * progressValue / 100)}` }}
                    className="
                        fill-none stroke-[url(#GradientColor)] stroke-[10%]
                        "/>
            </svg>
        </div>


    </div>
}

export default CircularProgress