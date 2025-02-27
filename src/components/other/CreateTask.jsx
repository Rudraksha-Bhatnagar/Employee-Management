import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData,setuserData] = useContext(AuthContext)


    const [title, settaskTitle] = useState("")
    const [description, settaskDescription] = useState("")
    const [date, settaskDate] = useState("")
    const [assignTo, setassignTo] = useState("")
    const [category, setcategory] = useState("")
    
    const [newTask, setTask] = useState({})

    const submitHandler=(e)=>{
        e.preventDefault()
        setTask({title,date,description,category,active:false,new_task:true,failed:false,completed:false})

        const data=userData

        data.forEach(function(e){
            if(assignTo==e.firstName){
                e.tasks.push(newTask)
                e.taskCount.new_task=e.taskCount.new_task+1
                
            }
        })
        console.log(data);
        
        setuserData(data)



        settaskTitle("")
        setassignTo("")
        setcategory("")
        settaskDate("")
        settaskDescription("")




    }


    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 '>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} className='flex flex-wrap w-full items-start justify-between '>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                        value={title}
                        onChange={(e)=>{
                            settaskTitle(e.target.value)
                        }} 
                        type="text" placeholder='make a ui design' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' />
                    </div>

                    <div><h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                        value={date}
                        onChange={(e)=>{
                            settaskDate(e.target.value)
                        }} 
                        type="date" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' /></div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                        <input 
                        value={assignTo}
                        onChange={(e)=>{
                            setassignTo(e.target.value)
                        }} 
                        type="text" placeholder='employee name' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                        value={category}
                        onChange={(e)=>{
                            setcategory(e.target.value)
                        }} 
                        type="text" placeholder='design,dev,etc' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400  ' />
                    </div>
                </div>
                <div className='w-1/2'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>decription</h3>
                    <textarea
                    value={description}
                    onChange={(e)=>{
                        settaskDescription(e.target.value)
                    }} 
                    name="" id="" cols={30} rows={10} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400  ' ></textarea>
                    <button className=' bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full '>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask