import {useState,useEffect,useRef} from 'react'
import './App.css'

function App(){
    const [count, setCount] = useState(0)
    const a=useRef(0)

    useEffect(()=>{console.log(`rerendering and the value of a is ${a.current}..`) });

    return(
        <>
        <div className="card">
            <button onClick={()=>{setCount((count)=>count+1)}}>count is {count}</button>
             <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      
        </div>
        </>
    )
}