import { Chessboard, FEN } from "cm-chessboard";
import "cm-chessboard/assets/chessboard.css"
import { useEffect, useRef, useState } from "react";
import { Chess, Square } from "chess.js";
import {
    COLOR,
    MARKER_TYPE,
    INPUT_EVENT_TYPE,
}from "cm-chessboard/src/Chessboard";

export default function Play() {
    
    const [chess] = useState(new Chess());
    const boardRef = useRef();

    useEffect(() => {
        const board = new Chessboard(boardRef.current,{
            style: {pieces: {file: "pieces/staunty.svg"}, cssClass: "green"},
            position: FEN.start 
        })

        const inputHandler = async (event: Square) => {
            board.removeMarkers(MARKER_TYPE);
            if (event === INPUT_EVENT_TYPE.moveInputStarted) {
                const moves = chess.moves({ Square: event.square, verbose: true });
                for (const move of moves) {
                    board.addMarker(MARKER_TYPE, move.to);
                }
                return moves.length > 0;
            }
            if (event === INPUT_EVENT_TYPE.validateMoveInput) {
                const move = {
                    from: event,
                    to: event,
                    promotion: chess.move({
                        from: event,
                        to: event,
                        promotion: "q"
                    })
                    ? "q"
                    :undefined
                };
                const result = chess.move(move);
                return result
            }
        };

        board.enableMoveInput(inputHandler);

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