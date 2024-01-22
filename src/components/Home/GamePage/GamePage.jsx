import React from 'react'

const GamePage = () => {
  return (
    <div className="px-5 py-5">

    <div className="flex flex-col justify-between sm:flex-row">
        <div className="flex flex-col justify-center items-center m-2">
            <h1 className="px-2 py-2 font-bold text-7xl">
                0
            </h1>
            <p className="font-bold px-2">
                Total Score
            </p>
        </div>

        <div className="flex flex-col m-2">
            <div className="px-2 py-2 flex flex-row justify-center items-center">
                <div className="h-8 w-8 border-2 border-black mx-2 my-2 flex justify-center items-center">
                    1
                </div>
                <div className="h-8 w-8 border-2 border-black mx-2 my-2 flex justify-center items-center">
                    2
                </div>
                <div className="h-8 w-8 border-2 border-black mx-2 my-2 flex justify-center items-center">
                    3
                </div> <div className="h-8 w-8 border-2 border-black mx-2 my-2 flex justify-center items-center">
                    4
                </div>
                <div className="h-8 w-8 border-2 border-black mx-2 my-2 flex justify-center items-center">
                    5
                </div>
                <div className="h-8 w-8 border-2 border-black mx-2 my-2 flex justify-center items-center">
                    6
                </div>
            </div>
            <p className="font-bold px-2 flex justify-center sm:justify-end">
                Select Number
            </p>
        </div>
    </div>

    <div className="mx-5 my-10 flex flex-col">
        <div className="mx-2 my-2 flex justify-center items-center">
            <img className="w-48" src="./images/dice/dice_1.png" />
        </div>

        <div className="flex flex-col justify-center items-center">
        <p className="w-48 font-semibold text-xl mx-2 flex justify-center items-center">
                Click on Dice to Roll
            </p>

            <div className="w-48 h-8 mt-5 mb-2 border-2 border-black p-2 text-bold flex place-content-center items-center cursor-pointer">
                Reset Score
            </div>

            <div className="w-48 h-8 m-2 bg-black text-white p-2 text-bold flex place-content-center items-center hover:bg-black hover:text-white cursor-pointer">
                Show Rules
            </div>
        </div>

    </div>

   
    </div>
  )
}

export default GamePage
