import React from 'react'

export const New_card = ({image, date , title, p}) => {
  return (

    <>
    <div className=' w-[50rem] bg-gray-400 p-3 rounded-lg m-10 '>

    <img className='w-[20rem] h-[15rem]' src={image}/>
    <h2 className=' text-gray-700'>{date}</h2>
    <h1 className=' text-white text-2xl'>{title}</h1>
    <p className='stroke-2 text-lg'>{p}</p>

    </div>
    </>

  )
}
