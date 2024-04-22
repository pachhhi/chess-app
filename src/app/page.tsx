'use client'

import "../app/globals.css"
import Openings from "../comp/Openings"
import Play from "@/comp/Play"
import  Link  from "next/link"

export default function Home() {
  
  return (
    <div className="max-w-screen-lg mx-auto ">
      <nav className="p-6 mb-2 bg-grayy ">
        <ul className="flex text-center justify-center ">
          <Link href="/"><li className="mx-5 ">Home</li></Link>
          <Link href="/openings"><li className="mx-5 ">Openings</li></Link>
        </ul>
      </nav>
      
      <Play/>
    </div>
  )
}
