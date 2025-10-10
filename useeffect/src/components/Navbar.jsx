import React,{useEffect} from 'react'

const Navbar = ({color}) => {
  useEffect(() => {
    alert("I WILL RUN ON EVERY RENDER")
  })

useEffect(() => {
    alert("Hey, welcome to my page")
  }, [])
  useEffect(() => {
    alert("Hey, I am running because color was changed")
  },[color])
  
  // Example of Cleanup function
  useEffect(() => {
    alert("Hey welcome to my page. This is the first render of app.jsx")

    return () => {
      alert("component was unmounted")
    }
  }, [])
 
  return (
    <div>
      I am Navber of {color} color
    </div>
  )
}

export default Navbar
