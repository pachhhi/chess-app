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
import {openings} from "@/comp/OpeningsComp"

export default function Play() {
    
    const [chess] = useState(new Chess());
    const boardRef = useRef();
    const [turn, setTurn] = useState(WHITE);
    const [lastFen, setLastFen] = useState(DEFAULT_POSITION);
    const currentFen = chess.fen();
    const openingMatch = openings.find((opening) => opening.fen === currentFen)
    const [boardInstance, setBoardInstance] = useState(null)

    useEffect(() => {
        const board = new Chessboard(boardRef.current,{
            style: {pieces: {file: "pieces/staunty.svg"}, cssClass: "green"},
            position: DEFAULT_POSITION 
        })

        setBoardInstance(board)

        board.enableMoveInput((event: any) => {
            switch (event.type) {
                case INPUT_EVENT_TYPE.moveInputStarted:
                    
                    return true // false cancels move
                case INPUT_EVENT_TYPE.validateMoveInput:
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
                        if (chess.isCheckmate()){
                            board.setPosition(DEFAULT_POSITION)
                            chess.reset()
                            console.log('juego terminado')
                        }
                    } catch (error) {
                        console.error('ignorando error')
                        return false
                    } 
                    console.log(chess.fen())
                    setLastFen(chess.fen())
                    
    
                    return true;

                case INPUT_EVENT_TYPE.moveInputCanceled:
                    break

                case INPUT_EVENT_TYPE.moveInputFinished:
                    setTurn(chess.turn() === WHITE ? BLACK : WHITE);
                    break

                case INPUT_EVENT_TYPE.movingOverSquare:
                    break

                default:
                    break;
          }
        }, );

        return () => {
            board.destroy();

        }
    },[])

    function NavBarPlay(){

        function handleFen(){
            if (boardInstance){
                boardInstance.setPosition(DEFAULT_POSITION)
                chess.reset()
            }
        }

        return (
            <div>
                <section className="bg-grayy rounded-xl" style={{height: '575px'}}>
                    {/* <div className="flex justify-center mx-auto" style={{paddingTop:'10px', marginBottom: '10px'}}>
                        <h1 className="flex justify-center bg-white" style={{ color: 'black', width: '20%'}}>{chess.turn()}</h1>
                    </div> */}
                    <div className="flex justify-center mx-auto" style={{width: '80%', marginBottom: '6px'}}>
                        <h1 className="" style={{ paddingTop: '6px'}}><b>King's Pawn Opening</b></h1>
                    </div>
                    <div className="mx-auto rounded-xl" style={{width: '80%', height: '400px',backgroundColor: 'white', marginBottom: '12px'}}>
                        <h1 style={{color:'black'}}>{chess.history()}</h1>
                    </div>
                    <hr style={{ paddingBottom:'12px', width: '90%'}} className="mx-auto"/>
                    <div className="flex justify-center ">
                        <button className=" color-grayy rounded-xl bg-white " style={{width: '60px', height: '30px'}} onClick={handleFen}><p className="" style={{color: 'black'}}>+</p></button> 
                    </div>
                </section>
            </div>
        )
    }

    return (
        <div className="">
            <div className="flex">
                <div ref={boardRef} className="bg-white"style={{width: "75%"}} ></div>
                <div style={{width: '23%'}} className="mx-auto"><NavBarPlay/></div>
            </div>
            
            
        </div>
    )
}