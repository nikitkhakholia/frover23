import { moveBack, moveFront, moveLeft, moveRight, stop } from "./apis"
import Controller from "../Components/Controller/Controller"
import { ROVER_IP } from "../env"
import AuthContext from "../Contexts/AuthContext"
import { useContext } from "react"

const RoverControlls = () => {
    const { authCode } = useContext(AuthContext)

    return <div className="grid grid-cols-5 items-center p-4">
        <div className="col-start-1 col-end-1">
            <Controller
                upClicked={() => moveFront({code:authCode})}
                rightClicked={() => moveRight({code:authCode})}
                downClicked={() => moveBack({code:authCode})}
                leftClicked={() => moveLeft({code:authCode})}
                clickReleased={() => stop({code:authCode})}
            />
        </div>


        <div className="col-start-2 col-end-5 p-4">
            <img className="w-full object-cover" src={ROVER_IP + "/video"} alt="..." />
        </div>


        <div className="col-start-5 col-end-5 ">
            <Controller
                upIcon='insights'
                rightIcon="camera"
                downIcon='sprinkler'
                leftIcon="wb_twilight"
            />
        </div>



    </div>


}
export default RoverControlls