import React, { Component, useState } from 'react';

const Login = ({handleLogin})=>{

    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")



    const submitHandle=(e)=>{
        e.preventDefault()
        
        handleLogin(email,password)
        setemail("")
        setpassword("")
    }



    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
                <form action="" onSubmit={(e)=>{
                    submitHandle(e)
                }} className='flex flex-col items-center justify-center'>
                    <input
                    value={email}
                     onChange={(e)=>{
                        setemail(e.target.value)
                     }}
                     required type="email" placeholder='enter your email' className=' outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 rounded-full py-3 px-5' />
                    <input 
                    value={password}
                    onChange={(e)=>{
                       setpassword(e.target.value)
                    }}
                    type="password" placeholder='enter passwords' className=' outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 rounded-full py-3 px-5 mt-4'/>
                    <button className='mt-5 text-white outline-none bg-emerald-600 placeholder:text-white border-none text-lg w-full rounded-full py-3 px-5'>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login