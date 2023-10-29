import {useState} from "react"

function App() {
  const [color, setColor]=useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
        <button onClick={()=> setColor("red")} 
        className="outline-none px-4 pt-1 pb-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>

        </div>
        <div  className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
        <button onClick={()=> setColor("green")} 
        className="outline-none px-4 pt-1 pb-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>

        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
        <button onClick={()=> setColor("blue")}
        className="outline-none px-4 pt-1 pb-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>

        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
        <button onClick={()=> setColor("black")}
        className="outline-none px-4 pt-1 pb-1  rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>Black</button>

        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
        <button onClick={()=> setColor("crimson")}
        className="outline-none px-4 pt-1 pb-1 rounded-full text-white shadow-lg" style={{backgroundColor: "crimson"}}>Crimson</button>

        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
        <button onClick={()=> setColor("orange")}
        className="outline-none px-4 pt-1 pb-1 rounded-full text-white shadow-lg" style={{backgroundColor: "orange"}}>Orange</button>

        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
        <button onClick={()=> setColor("violet")}
        className="outline-none px-4 pt-1 pb-1 rounded-full text-white shadow-lg" style={{backgroundColor: "violet"}}>Violet</button>

        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
        <button onClick={()=> setColor("silver")}
        className="outline-none px-4 pt-1 pb-1 rounded-full text-white shadow-lg" style={{backgroundColor: "silver"}}>Silver</button>

        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
        <button onClick={()=> setColor("gold")}
        className="outline-none px-4 pt-1 pb-1 rounded-full text-white shadow-lg" style={{backgroundColor: "gold"}}>Golden</button>

        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
        <button onClick={()=> setColor("aqua")}
        className="outline-none px-4 pt-1 pb-1 rounded-full text-white shadow-lg" style={{backgroundColor: "aqua"}}>Aqua</button>

        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
        <button onClick={()=> setColor("purple")}
        className="outline-none px-4 pt-1 pb-1 rounded-full text-white shadow-lg" style={{backgroundColor: "purple"}}>Purple</button>

        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
        <button onClick={()=> setColor("gray")}
        className="outline-none px-4 pt-1 pb-1 rounded-full text-white shadow-lg" style={{backgroundColor: "gray"}}>Gray</button>

        </div>

      </div>

    </div>
  )
}

export default App
