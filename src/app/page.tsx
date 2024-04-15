'use client'

import "../app/globals.css"
import { Chess } from "chess.js"
import { Chessboard, FEN } from "cm-chessboard";
import { useEffect } from "react";
import "cm-chessboard/assets/chessboard.css"


export default function Home() {

  useEffect(() => {
    console.log('rendering chessboard')
    const board = new Chessboard(document.getElementById("board"),{
      position: "rn2k1r1/ppp1pp1p/3p2p1/5bn1/P7/2N2B2/1PPPPP2/2BNK1RR w Gkq - 4 11"
    });

    return () => {
      board.destroy();
    }

  }, []);

  return (
    <main>
      <div id="board" className="w-2/5 "></div>
    </main>
  );
}
