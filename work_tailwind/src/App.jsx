import React from "react"
import { Header } from "./Components/Layouts/Header/Header"
import { News } from "./Components/Layouts/News_s/News"

 
export const App = () => {
  return (
    <>
    <Header> 
          <h1 className="bg-gray-400 p-10 text-5xl flex justify-center">
              ANIME NEWS
          </h1>
    </Header>     

    <News>
          <div className="m-20 flex">
            <div className="bg-gray-400 max-w-96 rounded-lg">
              <div>
                <img src="./assets/kaiju.jpg"  alt="develop" />
              </div>
              <div className="p-3">
                <h4 className="text-gray-700">
                  13/4/2024
                </h4>
                <h3 className="text-white text-lg">
                  El gran estreno del nuevo anime tan esperado "Kaiju N-8"
                </h3>
                <p>Lorem ipasum dolor sit amet consectetur, adipisicing elit. Tempora sit odio ipsam dolorem in dolor, nobis commodi voluptatum tempore! Dicta at ullam ut consectetur nam ab, unde recusandae repellendus sit.</p>
              </div>
            </div>
            <div>

            </div>
          </div>
    </News>
    </>
  )
}

export default App
