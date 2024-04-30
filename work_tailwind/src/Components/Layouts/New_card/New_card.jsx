import React from 'react'

export const New_card = ({image, date , title, p}) => {
  return (

    <>
    <div className=' w-[55rem] h-[100%] flex bg-gray-400 p-5 rounded-lg m-0 '>
<div className='w-[80rem] h-[15rem]'>
    <img className='w-full h-full object-fill' src={image}/>
    </div>
    <div className='flex-col m-5'>
    <h2 className=' text-gray-700'>{date}</h2>
    <h1 className=' text-white text-2xl'>{title}</h1>
    <p className='stroke-2 text-16'>{p}</p>
    </div>
    </div>
    </>

  )
}