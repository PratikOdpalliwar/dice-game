import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row px-5 py-10 justify-center items-center place-content-center ">

        <div className="px-2 w-full flex place-content-center">
            <img src="./images/dices.png" />
        </div>

        <div className="flex flex-col px-2 w-full">
            <h1 className="font-extrabold text-7xl lg:text-9xl lg:px-20 py-5 px-5 flex justify-center items-center place-content-center">
                DICE GAME
            </h1>
            <div className="flex flex-col justify-center items-center w-full">
            <button className="bg-black w-1/3 text-bold px-1 py-1 flex justify-center items-center text-white">
                Play Game
            </button>
            </div>
           
        </div>
    </div>
  )
}

export default Home
