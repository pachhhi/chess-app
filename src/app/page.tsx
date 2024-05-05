'use client'

import "../app/globals.css"
import Openings from "../comp/OpeningsComp"
import Play from "../comp/Play"

import  Link  from "next/link"
import { Chess } from "chess.js"


export default function Home() {

  return (
    <div>
      <nav className="w-full">
        <ul className="flex justify-center gap-10 uppercase mb-1 pt-2 pb-2 bg-grayy ">
          <li className="bg-grayy px-4 rounded-xl text-white  hover:brightness-60 hover:"><Link href="/"><b>Home</b></Link></li>
          <li><Link href="/openings"><b>Openings</b></Link></li>
        </ul>
      </nav>
      <div className="max-w-screen-lg mx-auto">
        <Play/>
        <div className="bg-white">
          <h1 className="bg-white"></h1>
        </div>
      </div>
    </div>
  )
}
