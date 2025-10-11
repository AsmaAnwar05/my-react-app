import React,{memo} from 'react'

const Navbar = ({adjective,getAdjective}) => {
    console.log("Navbar rendered")
  return (
    <div>
      I am a {adjective} 
      <button onClick={()=>{getAdjective()}}>{getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)
