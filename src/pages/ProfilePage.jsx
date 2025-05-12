import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import assets from '../assets/assets'

const ProfilePage = () => {
    const [selectedImg,setSelectedImg] = useState(null)
    const navigate = useNavigate()
      const [name, setName] = useState("Martin Johnson");
      const [bio, setBio] = useState("Hi everyone,I'm using quickchat");
    
  return (
    <div className='min-h-screen border w-full bg-cover bg-no-repeat flex items-center justify-center'>
        <div className='w-5/6 max-w-2xl backdroup-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg'>
        <form className='flex flex-col gap-5 p-10 flex-1'>
            <h3 className='text-lg'>Profile Details</h3>
            <label htmlFor='avatar' className='flex item-center gap-3 cursor-pointer'>
                <input type='file' onChange={(e) => setSelectedImg(e.target.files[0])} id='avatar' accept='.png,.jpg,.jpeg' hidden />
                <img src={selectedImg ? URL.createObjectURL(selectedImg) : assets.avatar_icon} alt='' className={`w-12 h-12 ${selectedImg && 'rounded-full'}`}/>
                Upload profile Image
            </label>
        </form>
        <img className='' alt=""></img>
        </div>
    </div>
  )
}

export default ProfilePage