import { useNavigate } from "react-router-dom"


const Dashboard = () => {
    const navigateTo = useNavigate()

    return <div className="flex justify-center h-full items-center">
        <div className=" grid grid-cols-2 gap-4 p-4 w-96 justify-center ">
            <div className="
                bg-green-500 rounded-2xl aspect-square p-4 
                flex flex-col justify-end
                cursor-pointer
                "
                onClick={e => {
                    navigateTo("/control")
                }}
            >
                <span className="material-symbols-outlined text-6xl">
                    sports_esports
                </span>
                <h3 className="text-2xl font-black">Control</h3>
            </div>
            <div className="
                bg-yellow-500 rounded-2xl aspect-square p-4 
                flex flex-col justify-end
                cursor-pointer
                "
                onClick={e => {
                    navigateTo("/analysis")
                }}>
                <span class="material-symbols-outlined text-6xl">
                    insights
                </span>
                <h3 className="text-2xl font-black">Analyze</h3>
            </div>
        </div>
    </div>
}

export default Dashboard