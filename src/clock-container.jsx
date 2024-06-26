import { useState } from "react";
import BreakContainer from "./break-container";
import SessionContainer from "./session-container";
import ControlsContainer from "./controls-container";

const ClockContainer=()=>{

    const [breakLength,setBreakLength]=useState(5);
    const [sessionLength,setSessionLength]=useState(25);

    function handleBreakLengthChange(newLen){
        
        setBreakLength(prevBreakLength=>{
            const updatedBreakLength = prevBreakLength+newLen;
            if(updatedBreakLength>=1 && updatedBreakLength<=60){
                return updatedBreakLength;
            }
            return prevBreakLength;
        });

    }

    function handleSessionLengthChange(newLen){

        setSessionLength(prevSessionLength=>{
            const updatedSessionLength =prevSessionLength+newLen;
            if(updatedSessionLength>=1 && updatedSessionLength<=60){
                return updatedSessionLength;
            }
            return prevSessionLength;
        });

    }

    return(

        <div className="clock-container">
            <h3>25 + 5 Clock</h3>
            <div className="lengths-wrapper">
                <BreakContainer label='Break Length' id='break-label' decBtnId='break-decrement' incBtnId='break-increment' lenId='break-length' len={breakLength} changeLength={handleBreakLengthChange} />
                <BreakContainer label='Session Length' id='session-label' decBtnId='session-decrement' incBtnId='session-increment' lenId='session-length' len={sessionLength} changeLength={handleSessionLengthChange} />
            </div>
            <div className="session-wrapper">
                <SessionContainer sessionLength={sessionLength} breakLength={breakLength} />
            </div>
            <div className="controls-wrapper">
                <ControlsContainer resetBreak={setBreakLength} resetSession={setSessionLength} />
            </div>
        </div>
        
    )
}
export default ClockContainer;