import React from 'react'

const Rules = () => {
  return (
    <div className="px-5 p-5 flex flex-col bg-red-100">
        <h1 className="font-bold text-xl mb-5 flex justify-start">
            How to play dice game
        </h1>
        
        <p className="mb-2 font-medium text-sm">
                select any Number
            </p>
            <p className="mb-2 font-medium text-sm">
                click on dice image
            </p>
            <p className="mb-2 font-medium text-sm">
                after click on dice if selected number is equal to dice number you will get same point as dice
            </p>
            <p className="mb-2  font-medium text-sm">
                if you get wrong guess then 2 points will be deducted
            </p>
    </div>
  )
}

export default Rules
