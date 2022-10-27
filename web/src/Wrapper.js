const Wrapper=({children})=>{
    return <div>
        <header className=" ">
            <h1 className="text-white text-center text-4xl">Frover23</h1>
        </header>
        {children}
        <footer></footer>
    </div>
}

export default Wrapper;