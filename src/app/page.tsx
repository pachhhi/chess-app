'use client'

import "../app/globals.css"
import { Chess } from "chess.js"
import { Chessboard, FEN, Markers } from "cm-chessboard";
import { useEffect } from "react";
import "/public/assets/chessboard.css"


export default function Home() {

  useEffect(() => {
    
    const board = new Chessboard(document.getElementById("board"),{
      
      position: FEN.start
      
    });

  },[]);

  return (
    <main>
      <div id="board" className="w-10 h-50">
        
      </div>
    </main>
  );
}
