import React, { useState } from "react";
import Rules from "../../Rules/Rules";

const GamePage = () => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const [selectNumber, setSelectNumber] = useState("");
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [err, setErr] = useState("");

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectNumber) {
      setErr("You have not selected any number");
      return;
    }else{
        setErr("")
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <div className="px-5 py-5">
      <div className="flex flex-col justify-between sm:flex-row">
        <div className="flex flex-col justify-center items-center m-2">
          <h1 className="px-2 py-2 font-bold text-7xl">{score}</h1>
          <p className="font-bold px-2">Total Score</p>
        </div>

        <div className="flex flex-col m-2">
            <p className="text-red-600 text-2xl font-semibold flex justify-center items-center mt-5 px-5 shadow-xl">
                {err}
            </p>
          <div className="px-2 py-2 flex flex-row justify-center items-center">
            {arrNumber.map((value, index) => (
              <div
                key={index}
                onClick={() => setSelectNumber(value)}
                className={`cursor-pointer h-8 w-8 border-2 border-black mx-2 my-2 flex justify-center items-center ${
                  value === selectNumber ? "bg-black text-white" : ""
                }`}
              >
                {value}
              </div>
            ))}
          </div>
          <p className="font-bold px-2 flex justify-center sm:justify-end">
            Select Number
          </p>
        </div>
      </div>

      <div className="mx-5 my-10 flex flex-col">
        <div className="mx-2 my-2 flex justify-center items-center">
          <img
            onClick={roleDice}
            className="w-48 cursor-pointer"
            src={`./images/dice/dice_${currentDice}.png`}
          />
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="w-48 font-semibold text-xl mx-2 flex justify-center items-center">
            Click on Dice to Roll
          </p>

          <div
            onClick={resetScore}
            className="w-48 h-8 mt-5 mb-2 border-2 border-black p-2 text-bold flex place-content-center items-center cursor-pointer"
          >
            Reset Score
          </div>

          <div className="w-48 h-8 m-2 bg-black text-white p-2 text-bold flex place-content-center items-center hover:bg-black hover:text-white cursor-pointer">
            Show Rules
          </div>
        </div>
      </div>

      <div className="mx-20 lg:mx-32 my-5">
        <Rules />
      </div>
    </div>
  );
};

export default GamePage;
