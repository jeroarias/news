import React from "react"
import { Header } from "./Components/Layouts/Header/Header"
import { News } from "./Components/Layouts/News_s/News"
import { Section } from "./Components/Layouts/Section_n/Section"

 
export const App = () => {
  return (
    <>
    <Header> 
          <h1 className=" stroke-3 font-medium bg-gray-400 m-0 p-10 text-5xl flex justify-center">
              ANIME NEWS
          </h1>
    </Header>  
    <div className='flex'>
      <News/>
      <Section/>
    </div>   
    
    </>
  )
}

export default App
