import { useContext } from "react";
import AuthContext from "./Contexts/AuthContext";

const Wrapper = ({ children }) => {


    const { authCode, setAuthCode } = useContext(AuthContext)


    return <div>
        <header className=" ">
            <h1 className="text-white text-center text-4xl p-4">Frover23</h1>
        </header>

        {authCode ?
            <div className=" min-h-[45rem] ">{children}</div> :
            <div
                className="backdrop-blur-md absolute inset-0 flex justify-center items-center"
                id="signup-modal"
            >

                <div className="w-96 md:w-96 rounded-2xl bg-white p-10">
                    <h1 className="text-3xl font-bold">Welcome to Frover23</h1>
                    <div className="mt-8 relative">
                        <input
                            id="auth-code"
                            name="auth-code"
                            type="text"
                            className="
                            peer h-10 w-full border-b-2 
                            border-gray-300 text-gray-900 placeholder-transparent 
                            focus:outline-none focus:border-black
                            "
                            placeholder="Authentication Code"

                            onInput={e=>{
                                if((""+e.target.value).trim().length===6){
                                    setAuthCode((""+e.target.value).trim())
                                    document.getElementById("auth-code-error").classList.add('hidden')
                                }else{
                                    document.getElementById("auth-code-error").classList.remove('hidden')
                                }
                            }}
                        />
                        <label
                            htmlFor="auth-code"
                            className="
                            cursor-text absolute left-0 -top-3.5 
                            text-gray-600 text-sm transition-all 
                            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 
                            peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm
                            "
                        >
                            Authentication Code
                        </label>
                        <p className="text-red-600 hidden" id="auth-code-error">
                            Please enter a valid code.
                        </p>
                    </div>
                </div>
            </div>}
        <footer className="text-center text-white p-4">
                            Made with ❤️ by Nikit Khakholia, Reuben Kurian and Pankaj Sharma.
        </footer>
    </div>
}

export default Wrapper;