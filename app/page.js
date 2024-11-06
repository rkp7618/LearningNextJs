'use client'
import React from 'react'
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const page = () => {
  const notify=()=>{
    toast.success('🦄 Deployed Succuesfully!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
  }
  return (
    <div>
    <button onClick={notify} className='bg-green-200 text-black font-bold p-3 ml-5 mt-5'>Get Data</button>
    <ToastContainer/>
    </div>
  )
}

export default page