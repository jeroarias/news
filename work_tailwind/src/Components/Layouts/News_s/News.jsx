import React from 'react'
import img1 from '../../../assets/imgs/kaiju.jpg'

export const News = ()  => {
  return (
          <div className="ml-20 w-[45%] ">
            <div className='w-[40rem] h-[50rem]'>
            <img className=" w-[40rem] h-[45rem] rounded-t-lg" src={img1}  alt="develop" />
              <div className=" w-[40rem] bg-gray-400 p-3 rounded-b-lg ">
                <h4 className="text-gray-700">
                  16/4/2024
                </h4>
                <h3 className="text-white text-2xl">
                  Polemic with Kaiju No.8 for use a IA</h3>
                <p className="stroke-2 text-lg">Amidst the excitement for the premiere of this season's highly anticipated anime productions, Spice and Wolf: Merchant Meets the Wise Wolf and Kaiju No. 8, a controversy has erupted on social media. Fans are more than sure that the covers of the opening Tabi no Yukue performed by Hana Hope, and the ending Nobody by OneRepublic, respectively, were created using artificial intelligence (AI) image-generating tools.</p>
              </div>
            </div>
          </div>
  )
}