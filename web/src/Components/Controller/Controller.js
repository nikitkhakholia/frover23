function Controller({
    leftClicked = () => { alert("No Action Assigned") },
    rightClicked = () => { alert("No Action Assigned") },
    upClicked = () => { alert("No Action Assigned") },
    downClicked = () => { alert("No Action Assigned") },
    upIcon = "keyboard_arrow_up",
    leftIcon = "keyboard_arrow_left",
    rightIcon = "keyboard_arrow_right",
    downIcon = "keyboard_arrow_down" }) {
    return (

        <div className=" text-white  grid grid-cols-3 aspect-square">
            <div className="
                    aspect-square col-start-2 cursor-pointer
                    bg-slate-800 active:bg-slate-900 rounded-full
                    flex items-center justify-center "
                onClick={upClicked}><span className="material-symbols-outlined">
                    {upIcon}
                </span></div>
            <div className="
                    aspect-square col-start-1 cursor-pointer
                    bg-slate-800 active:bg-slate-900 rounded-full
                    flex items-center justify-center "
                onClick={leftClicked}><span className="material-symbols-outlined">
                    {leftIcon}
                </span></div>
            <div className="
                    aspect-square col-start-3 cursor-pointer
                    bg-slate-800 active:bg-slate-900 rounded-full
                    flex items-center justify-center "
                onClick={rightClicked}><span className="material-symbols-outlined">
                    {rightIcon}
                </span></div>
            <div className="
                    aspect-square col-start-2 cursor-pointer
                    bg-slate-800 active:bg-slate-900 rounded-full
                    flex items-center justify-center "
                onClick={downClicked}><span className="material-symbols-outlined">
                    {downIcon}
                </span></div>
        </div>

    );
}

export default Controller;