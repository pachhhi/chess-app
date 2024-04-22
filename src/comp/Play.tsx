import { Chessboard, FEN } from "cm-chessboard";
import "cm-chessboard/assets/chessboard.css"
import { useEffect, useRef, useState } from "react";
import { Chess, Square } from "chess.js";
import {
    MARKER_TYPE,
    INPUT_EVENT_TYPE,
    COLOR
}from "cm-chessboard/src/Chessboard";

export default function Play() {
    
    const [chess] = useState(new Chess());
    const boardRef = useRef();

    useEffect(() => {
        const board = new Chessboard(boardRef.current,{
            style: {pieces: {file: "pieces/staunty.svg"}, cssClass: "green"},
            position: FEN.start 
        })

        board.enableMoveInput((event) => {
            console.log("move input", event)
        switch (event.type) {
              case INPUT_EVENT_TYPE.moveInputStarted:
                  console.log(`moveInputStarted: ${event.squareFrom}`)
                  return true // false cancels move
              case INPUT_EVENT_TYPE.validateMoveInput:
                  console.log(`validateMoveInput: ${event.squareFrom}-${event.squareTo}`)
                  return true // false cancels move
              case INPUT_EVENT_TYPE.moveInputCanceled:
                  console.log(`moveInputCanceled`)
                  break
              case INPUT_EVENT_TYPE.moveInputFinished:
                  console.log(`moveInputFinished`)
                  break
              case INPUT_EVENT_TYPE.movingOverSquare:
                  console.log(`movingOverSquare: ${event.squareTo}`)
                  break
          }
        }, COLOR.white)

        return () => {
            board.destroy();
        }
    },[chess])

    return (
        <div className="">
            <div ref={boardRef} className=" mx-auto bg-white" style={{width: "85%"}}></div>
        </div>
    )
}