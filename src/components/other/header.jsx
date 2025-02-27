import React, { useState } from 'react'

const Header = (props) => {
  // console.log({data})
  // const [username, setusername] = useState("")

  // if(!data){
  //   setusername("Admin")
  // }
  // else{
  //   setusername(data.firstName)
  // }

  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','')
    // window.location.reload()
    props.changeuser("")
  }


  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username</span></h1>
        <button onClick={logOutUser} className='bg-red-500 text-white px-5 py-2 rounded-small text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header