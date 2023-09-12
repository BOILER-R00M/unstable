import React from 'react';
import CanvasPerson from './CanvasPerson';

export default function GameBoard() {
  return (
    <div className="relative flex justify-between h-[80vh] w-[80vw] px-5">

      {/* Game Board */}
      <div className="relative flex-grow bg-slate-800">

        {/* Player positions */}
        {/* Top */}
        <div className="absolute w-[40vw] h-[10vh] border-2 border-white top-0 left-[30%]"></div>
        {/* Right */}
        <div className="absolute w-[10vh] h-[40vh] border-2 border-white top-[20%] right-0"></div>
      <CanvasPerson color="red" size={15} />
        {/* Bottom */}
        <div className=" flex justify-around absolute left-[8.5vw] inset-x-0  flex-col w-[60vw] h-[30vh] border-2 border-white bottom-0">

          <div className=" flex justify-evenly table1 h-[50%] border-2">
        <div className=" w-[50%] mx-1 bg-red-500 stable flex text-center relative"> <p className="text-center">stable</p></div>
        <div className=" w-[50%] mx-1 bg-red-500 field"> field</div>

          </div>
          <div className=" border-2 bg-green-600  h-[12vh] hand"> hand </div>
        </div>
        {/* Left */}
        <div className="absolute w-[10vh] h-[40vh] border-2 border-white top-[20%] left-0"></div>
      </div>

      {/* Sidebar */}
      <div className=" fixed  right-0 w-[20vw] h-[80vh] bg-purple-400">
        Sidebar
      </div>
    </div>
  );
}
