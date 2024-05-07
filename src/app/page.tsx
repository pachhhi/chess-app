'use client'

import "../app/globals.css"
import Openings from "../comp/OpeningsComp"
import Play from "../comp/Play"
import  Link  from "next/link"
import { Chess } from "chess.js"
import NavBarPlay from "@/comp/NavBarPlay"
import { useState } from "react"

function ChessGame(){
  const [boardInstance, setBoardInstance] = useState(null);
  const chessInstance = new Chess();

  // Define la función para crear la instancia del tablero
  function handleBoardCreation(boardInstance) {
    setBoardInstance(boardInstance);
  }

    return ( 
      <>
        <div className="max-w-screen-lg mx-auto" style={{ display: 'flex', }}>
          <div style={{ flex: '0 0 75%' }}>
            <Play chessInstance={chessInstance} handleBoardCreation={handleBoardCreation}/>
          </div>
          <div style={{ flex: '0 0 23%' }} className="mx-auto">
            <NavBarPlay chessInstance={chessInstance} boardInstance={boardInstance}/>
          </div>
        </div>
      </>
    )
}

export default function Home() {

  return (
    <div>
      <nav className="w-full">
        <ul className="flex justify-center gap-10 uppercase mb-1 pt-2 pb-2 bg-grayy ">
          <li className="bg-grayy px-4 rounded-xl text-white  hover:brightness-60 hover:"><Link href="/"><b>Home</b></Link></li>
          <li><Link href="/openings"><b>Openings</b></Link></li>
        </ul>
      </nav>
      <div className="">
        <ChessGame />
        <div className="bg-white">
          <h1 className="bg-white"></h1>
        </div>
      </div>
    </div>
  )
}
