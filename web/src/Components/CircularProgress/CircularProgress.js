import { useEffect } from "react"

const CircularProgress = ({ progressName = "", progressValue = 0, valueSymbol = "" }) => {
    useEffect(() => {
       
        if (progressValue > 0) {
            
            var count = 0
            var ele = document.getElementById(`${progressName}Value`)
            setInterval(() => {
                if (count < progressValue) {
                    count += 1
                    ele.innerHTML = "" + count + " " + valueSymbol
                } else {
                    clearInterval()

                }
            }, 5)
        }else{
            document.getElementById(`${progressName}Value`).innerText="Loading..."
        }
    }, [progressValue]);
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
                    <div className="text-white" id={`${progressName}Value`}></div><br />
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
                        <stop offset="0%" stopColor="#e91e63" />
                        <stop offset="100%" stopColor="#673ab7" />
                    </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="45" strokeLinecap="round"
                    style={{ strokeDasharray: "283", strokeDashoffset: `${283 - (283 * progressValue / 100)}` }}
                    className="
                        fill-none stroke-[url(#GradientColor)] stroke-[10%]
                        "/>
            </svg>
        </div>


    </div>
}

export default CircularProgress