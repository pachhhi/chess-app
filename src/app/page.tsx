'use client'

import "../app/globals.css"
import Openings from "../comp/OpeningsComp"
import Play from "../comp/Play"
import  Link  from "next/link"

export default function Home() {
  
  return (
    <div>
      <nav>
        <ul className="flex justify-center gap-6 m-4">
          <li><Link href="/" className="">Home</Link></li>
          <li><Link href="/openings">Openings</Link></li>
        </ul>
      </nav>
      <Play/>
    </div>
  )
}
