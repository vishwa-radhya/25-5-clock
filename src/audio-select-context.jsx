import { createContext, useState } from "react";

export const AudioSelectContext=createContext();

export const AudioSelectProvider=({children})=>{
    const [isAudioSelectOpen,setIsAudioSelectOpen]=useState(false);
    const [selectedAudio,setSelectedAudio]=useState(null);

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