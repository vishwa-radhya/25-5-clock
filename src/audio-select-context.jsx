import { createContext, useState } from "react";
import PropTypes from 'prop-types';
export const AudioSelectContext=createContext();

export const AudioSelectProvider=({children})=>{
    const [isAudioSelectOpen,setIsAudioSelectOpen]=useState(false);
    const [selectedAudio,setSelectedAudio]=useState('Beep-0');

    function handleSelectOpen(){
        setIsAudioSelectOpen(!isAudioSelectOpen);
    }

    function toggleDiv(name){
        setSelectedAudio(name);
    }

    return(
        <AudioSelectContext.Provider value={{isAudioSelectOpen,handleSelectOpen,selectedAudio,toggleDiv}}>
            {children}
        </AudioSelectContext.Provider>
    )
}
AudioSelectProvider.propTypes={
    children:PropTypes.node,
}