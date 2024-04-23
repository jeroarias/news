import React from "react"
import { Header } from "./Components/Layouts/Header/Header"
import { News } from "./Components/Layouts/News_s/News"
import { Section } from "./Components/Layouts/Section_n/Section"
import { news } from "./Scripts/News"
import { New_card } from "./Components/Layouts/New_card/New_card"

 
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
      <Section>
        <div className="bg-gray-400 p-5 rounded-lg ">
            {news.map(news => <New_card
              key = {news.id}
              image = {news.img}
              title = {news.title}
              date = {news.date}
              p = {news.text}/>
              )}
          </div>
      </Section>
    </div>   
    
    </>
  )
}

export default App
