import { useContext } from "react";
import { PlayerContext } from "./player-context";
import PropTypes from 'prop-types';

const ControlsContainer=({resetBreak,resetSession})=>{

    const {play,handleSetPlay,handleSetFlag,handleResetFlag}=useContext(PlayerContext)

    function handlePausePlay(){
        handleSetPlay(!play);
    }

    function handleResetClock(){
        resetBreak(5);
        resetSession(25);
        handleSetPlay(false);
        handleSetFlag(false);
        handleResetFlag(true);
    }

    return(

        <div className="ctrls">
            <button className="start-stop" onClick={handlePausePlay}><i className={play ? 'fa-solid fa-pause':'fa-solid fa-play'}></i></button>
            <button className="reset" onClick={handleResetClock}><i className="fa-solid fa-arrows-rotate"></i></button>
        </div>

    )
}
ControlsContainer.propTypes={
    resetBreak:PropTypes.func,
    resetSession:PropTypes.func,
}

export default ControlsContainer;