import { useContext, useEffect, useRef, useState } from "react";
import { PlayerContext } from "./player-context";
import PropTypes from 'prop-types';
import SelectAudioContainer from "./select-audio-container";
import { AudioSelectContext } from "./audio-select-context";

const SessionContainer=({sessionLength,breakLength})=>{

    const {handleSelectOpen,isAudioSelectOpen}=useContext(AudioSelectContext);
    const [time,setTime]=useState({minutes:sessionLength,seconds:0});
    const [isSession,setIsSession]=useState(true);
    const {play,handleSetFlag,flag,resetFlag,handleResetFlag}=useContext(PlayerContext);
    const intervalIdRef = useRef(null);
    const audioRef =  useRef(null);


    useEffect(()=>{
        if(play){
            intervalIdRef.current=setInterval(()=>{
                setTime(prevTime=>{
                    let {minutes,seconds}=prevTime;
                    if(seconds===0){
                        if(minutes===0){
                            clearInterval(intervalIdRef.current);
                            if(isSession){
                                setTime({minutes:breakLength,seconds:0});
                            }else{
                                setTime({minutes:sessionLength,seconds:0});
                            }
                            setIsSession(!isSession);
                            return prevTime;
                        }else{
                            minutes-=1;
                            seconds=59;
                        }
                    }else{
                        seconds-=1;
                    }
                    return {minutes,seconds};
                });
            },1000);
        } 

        return ()=>{
            clearInterval(intervalIdRef.current);
        }
        
    },[play,isSession,sessionLength,breakLength]);

    useEffect(()=>{

        handleSetFlag(true);

    },[isSession,handleSetFlag])

    useEffect(()=>{

        if(flag){
            if(audioRef.current){
                audioRef.current.play();
            }
        }
        handleSetFlag(false);

    },[handleSetFlag,flag]);

    useEffect(()=>{

        setTime({minutes:sessionLength,seconds:0});

    },[sessionLength]);

    useEffect(()=>{

        if(resetFlag){
            setTime({minutes:sessionLength,seconds:0});
            setIsSession(true);
            audioRef.current.pause();
            audioRef.current.currentTime=0;
        }
        handleResetFlag(false);

    },[resetFlag,handleResetFlag,sessionLength]);

    function toggleAudioContainer(){
        handleSelectOpen();
    }

    return(

        <div className="sess">
        <button className="expand-btn" onClick={toggleAudioContainer}><i className={
            isAudioSelectOpen ? 'fa-solid fa-chevron-right' : 'fa-solid fa-chevron-left'
        }></i></button>
        <SelectAudioContainer/>
            <label htmlFor="" id="timer-label" className="timer-label">
            {isSession ? 'Session' : 'Break'}
            </label>
            <div className="time-left" id="time-left">
            {String(time.minutes).padStart(2,'0')}:{String(time.seconds).padStart(2,'0')}
            <div></div>
            </div>
            <audio src="https://v-25clock.netlify.app/assets/beep.mp3" id="beep" ref={audioRef}></audio>
        </div>

    )
}
SessionContainer.propTypes={
    sessionLength:PropTypes.number,
    breakLength:PropTypes.number,
}

export default SessionContainer;