import { Chessboard, FEN } from "cm-chessboard";
import "cm-chessboard/assets/chessboard.css"
import { useEffect, useRef, useState } from "react";
import { 
    Chess, Square, Color, DEFAULT_POSITION, 
    BLACK,
    WHITE,
    Move
} from "chess.js";
import {
    MARKER_TYPE, INPUT_EVENT_TYPE, COLOR,
}from "cm-chessboard/src/Chessboard";

export default function Play() {
    
    const [chess] = useState(new Chess());
    const boardRef = useRef();
    const [turn, setTurn] = useState(WHITE);
    const [lastFen, setLastFen] = useState(DEFAULT_POSITION);

    useEffect(() => {
        
        const board = new Chessboard(boardRef.current,{
            style: {pieces: {file: "pieces/staunty.svg"}, cssClass: "green"},
            position: DEFAULT_POSITION 
        })

        board.enableMoveInput((event: any) => {
            console.log("move input", event)
            switch (event.type) {
                case INPUT_EVENT_TYPE.moveInputStarted:
                    //   console.log(`moveInputStarted: ${event.squareFrom}`)
                    return true // false cancels move

                case INPUT_EVENT_TYPE.validateMoveInput:
                    //   console.log(`validateMoveInput: ${event.squareFrom}-${event.squareTo}`);
                    try {
                        const move = chess.move({
                            from: event.squareFrom,
                            to: event.squareTo,
                            promotion: "q",
                        });
                        if (move === null) {
                            console.log('movimiento mal hecho')
                            
                            return false;
                        }
                    } catch (error) {
                        console.error('ignorando error')
                        return false
                    } 
                   
                    setLastFen(chess.fen());
                    return true;

                case INPUT_EVENT_TYPE.moveInputCanceled:
                    //   console.log(`moveInputCanceled`)
                    chess.load(lastFen)
                    board.setPosition(lastFen) //return last position 
                    break

                case INPUT_EVENT_TYPE.moveInputFinished:
                    //   console.log(`moveInputFinished`)
                    setTurn(chess.turn() === WHITE ? BLACK : WHITE);
                    break

                case INPUT_EVENT_TYPE.movingOverSquare:
                    //   console.log(`movingOverSquare: ${event.squareTo}`)
                    break

                default:
                    break;
          }
        }, );
        
        return () => {
            board.destroy();
        }
    },[])

    return (
        <div className="">
            <div ref={boardRef} className=" mx-auto bg-white" style={{width: "85%"}}></div>
            <h1>{chess.turn()}</h1>
        </div>
    )
}