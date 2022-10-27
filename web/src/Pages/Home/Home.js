import { moveBack, moveFront, moveLeft, moveRight } from "../../Components/Controller/apis"
import Controller from "../../Components/Controller/Controller"

const Home = () => {
    return <div className="grid grid-cols-5 items-center p-4">
        <div className="col-start-1 col-end-1">
            <Controller
                upClicked={()=>{
                   moveFront()
                }}
                rightClicked={()=>moveRight()}
                downClicked={()=>moveBack()}
                leftClicked={()=>moveLeft()}
            />
        </div>


        <div className="col-start-2 col-end-5 p-4">
            <img className="w-full object-cover" src={"http://192.168.1.2:5000/video"} alt="..." />
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
export default Home