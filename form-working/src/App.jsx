import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form"

function App() {
const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const delay = (d) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), d * 1000)
    })
  }
  const onSubmit = async (data) => {
    await delay(2)
    console.log(data)}
  return (
    <>
    {isSubmitting && <div>Submitting form....</div>}
     <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>

      <input placeholder='username' {...register("username",{required:{value:true, message: "This field is required"},minLength:{value: 3, message:"Min length is 3"},maxLength:{value: 12, message: "Max length is 12"}})} type="text"/>
      {errors.username && <div>{errors.username.message}</div>}
      <input placeholder='password' {...register("password",{required:{value:true, message: "This field is required"},minLength:{value: 8, message:"Min length is 8"},pattern: { 
      value: /^(?=.*[A-Za-z])(?=.*[!@#$%^&*])/,
      message: "Password must have at least 1 letter and 1 special character"}})} type="password"/>
      {errors.password && <div>{errors.password.message}</div>}
     
      <input disabled={isSubmitting} type="submit" value="Submit"/>
      </form>
     </div>
    </>
  )
}

export default App
