import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleClick=()=>{
    alert("Hey, I am clicked")
  }
  const mouseOverHandle=()=>{
    alert("Hey, I am mouse hovered")
  }
  //const [name, setName] = useState("Asma")
  const [form, setForm] = useState({name: "",email: "",phone: ""})
  // const handleChange=(e)=>{
  //   setName(e.target.value)
  // }
  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  
  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click Me</button>
      </div>
      <div className="red" onMouseOver={mouseOverHandle}>
        I am a red div
      </div>
      <input type="text"  name="name" value={form.name?form.name:""} onChange={handleChange} />
      <input type="text" name="email" value={form.email?form.email:""} onChange={handleChange} />
      <input type="number"  name="phone" value={form.phone?form.phone:""} onChange={handleChange}/>
    </>
  )
}

export default App
