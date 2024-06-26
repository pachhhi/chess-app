'use client'

import { Chess } from "chess.js"
import { Chessboard, FEN } from "cm-chessboard";
import { useEffect, useState, useRef } from "react";
import "cm-chessboard/assets/chessboard.css"


export const openings = [
  {name:'Sistema Londres', fen:'rnbqkb1r/ppp1pppp/5n2/3p4/3P1B2/5N2/PPP1PPPP/RN1QKB1R b KQkq - 3 3' ,},
  {name: 'Defensa Siciliana', fen:'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2'},
  {name: 'Defensa Francesa', fen: 'rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2'},
  {name: 'Ruy Lopez', fen: 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3'},
  {name: 'Defensa Caro-Kann', fen: 'rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2'},
  {name: 'Defensa Caro-Kann', fen: 'rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2'},
  {name: 'Defensa Caro-Kann', fen: 'rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2'},
  {name: 'Defensa Caro-Kann', fen: 'rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2'},
]

export default function OpeningsComp() {
    

    const boardRefs = useRef<Chessboard[]>([])

      useEffect(() => {
        openings.forEach((n, i) => {
          const board = new Chessboard(document.getElementById(`board-${i}`),{
            position: n.fen
          });
          boardRefs.current[i] = board;
        })
        return () => {
            boardRefs.current.forEach(board => board.destroy())
        }
      },[]);
    
      return (
        <main className="justify-center max-w-screen-lg mx-auto">
          <div className="flex flex-wrap gap-4 ">
            {openings.map((position, index) => (
                <div key={index}  className="">
                    <div id={`board-${index}`} className="" style={{ width: '300px' }}></div>
                </div>
            ))} 
          </div>
        </main>
      );
}