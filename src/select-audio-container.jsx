import { useContext } from "react";
import { AudioSelectContext } from "./audio-select-context";
import SelectAudio from "./select-audio";

const SelectAudioContainer=()=>{

    const {isAudioSelectOpen}=useContext(AudioSelectContext);

    const expandStyles={
        width:isAudioSelectOpen ? '95%' : '0%',
    }

    return(
        <div className="select-audio-container" style={expandStyles}>
            {isAudioSelectOpen && <SelectAudio/>}
        </div>
    )
}
export default SelectAudioContainer;