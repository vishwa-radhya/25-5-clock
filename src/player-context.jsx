import { createContext, useState } from "react";
import PropTypes from 'prop-types';
export const PlayerContext =createContext();

export const PlayerProvider =({children})=>{

    const [play,setPlay]=useState(false);
    const [flag,setFlag]=useState(false);
    const [resetFlag,setResetFlag]=useState(false);

    function handleSetFlag(bool){
        setFlag(bool);
    }

    function handleResetFlag(bool){
        setResetFlag(bool);
    }

    function handleSetPlay(bool){
        setPlay(bool);
    }

    return(

        <PlayerContext.Provider value={{play,handleSetPlay,flag,handleSetFlag,resetFlag,handleResetFlag}}>
            {children}
        </PlayerContext.Provider>

    )
}

PlayerProvider.propTypes={
    children:PropTypes.node,
}