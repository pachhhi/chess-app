import { Chessboard, FEN } from "cm-chessboard";
import "cm-chessboard/assets/chessboard.css"
import { useEffect, useRef, useState } from "react";
import { Square, Color, DEFAULT_POSITION, BLACK, WHITE, Move } from "chess.js";
import { MARKER_TYPE, INPUT_EVENT_TYPE, COLOR }from "cm-chessboard/src/Chessboard";
import {openings} from "@/comp/OpeningsComp"
import ChessGame from "@/app/page"

export default function Play({chessInstance}) {
    
    
    const boardRef = useRef();
    const [turn, setTurn] = useState(WHITE);
    const [lastFen, setLastFen] = useState(DEFAULT_POSITION);
    const [boardInstance, setBoardInstance] = useState(null)

    useEffect(() => {
        const board = new Chessboard(boardRef.current,{
            style: {pieces: {file: "pieces/staunty.svg"}, cssClass: "green"},
            position: DEFAULT_POSITION 
        })

        board.enableMoveInput((event: any) => {
            switch (event.type) {
                case INPUT_EVENT_TYPE.moveInputStarted:
                    
                    return true // false cancels move
                case INPUT_EVENT_TYPE.validateMoveInput:
                    try {
                        const move = chessInstance.move({
                            from: event.squareFrom,
                            to: event.squareTo,
                            promotion: "q",
                        });
                        
                        if (move === null) {
                            console.log('movimiento mal hecho')  
                            return false;
                        }
                        if (chessInstance.isCheckmate()){
                            boardInstance.setPosition(DEFAULT_POSITION)
                            chessInstance.reset()
                            console.log('juego terminado')
                        }
                    } catch (error) {
                        console.error('ignorando error')
                        return false
                    } 
                    setLastFen(chessInstance.fen())
                    return true;

                case INPUT_EVENT_TYPE.moveInputCanceled:
                    break

                case INPUT_EVENT_TYPE.moveInputFinished:
                    setTurn(chessInstance.turn() === WHITE ? BLACK : WHITE);
                    break

                case INPUT_EVENT_TYPE.movingOverSquare:
                    break

                default:
                    break;
          }
        }, );
        return () => {
            board.destroy(); // delete board para que no se imprima dos veces 
            setBoardInstance(boardInstance) // crea una instancia del tablero (funciona para poder resetear la pos a default)
            console.log(boardInstance)
        }
    },[])

    

   
    return (  // main return
        <div className="">
            <div className="">
                <div ref={boardRef} className=" bg-white" ></div>
                
            </div>
            
            
        </div>
    )
}