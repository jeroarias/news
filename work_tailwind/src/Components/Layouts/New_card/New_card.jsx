import React from 'react'

export const New_card = ({image, date , title, p}) => {
  return (
    <>
    <img src={image}/>
    <h1>{title}</h1>
    <h2>{date}</h2>
    <p>{p}</p>
    </>

  )
}
