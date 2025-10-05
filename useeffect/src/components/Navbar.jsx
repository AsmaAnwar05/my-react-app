import React,{useEffect} from 'react'

const Navbar = ({color}) => {
  useEffect(() => {
    alert("I WILL RUN ON EVERY RENDER")
  }, [color])

useEffect(() => {
    alert("Hey, welcome to my page")
  }, [])
  useEffect(() => {
    alert("Hey, I am running because color was changed")
  },[color])
 
  return (
    <div>
      I am Navber of {color} color
    </div>
  )
}

export default Navbar
