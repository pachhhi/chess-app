
import { Chessboard, FEN } from "cm-chessboard";
import "cm-chessboard/assets/chessboard.css"
import { useEffect, useRef, useState } from "react";
import {  DEFAULT_POSITION } from "chess.js";
import { MARKER_TYPE, INPUT_EVENT_TYPE, COLOR }from "cm-chessboard/src/Chessboard";

export default function NavBarPlay({chessInstance, boardInstance}){ 


    function handleFen(boardInstance){ // resetea la posicion a default position
        if (boardInstance){
            boardInstance.setPosition(DEFAULT_POSITION)
            chessInstance.reset()
            console.log('asddsad')
        }
    }
    return ( // navBar return
        <div className="">
            <section className="bg-grayy rounded-xl" style={{height: '575px'}}>
                
                <div className="flex justify-center mx-auto" style={{width: '80%', marginBottom: '6px'}}>
                    <h1 className="" style={{ paddingTop: '6px', textDecoration: 'underline'}}><b className="">King's Pawn Opening</b></h1>
                </div>
                
                <div className="mx-auto rounded-xl" style={{display:'flex'}}>
                    <div style={{ width: '1%', height: '480px', border: 'none', borderLeft: '1px solid hsla(200, 10%,50%, 100)', marginBottom: '12px', marginTop: '12px', color:'white', position: 'relative', left:'calc(50%)'}} className=""></div>
                    <div className="table-container flex absolute" style={{ marginTop:'10px' }}>
                        
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className=" color-grayy rounded-xl bg-white " style={{width: '60px', height: '30px', marginRight: '12px'}} onClick={handleFen}>
                        <p className="" style={{color: 'black'}}>
                            +
                        </p>
                    </button> 
                    <button className=" color-grayy rounded-xl bg-white " style={{width: '60px', height: '30px', marginLeft: '12px'}}></button>                         
                </div>
            </section>
        </div>
    )
}