import AudioWrapper from "./audio-wrapper";

const SelectAudio=()=>{


    return(
        <div className="select-audio-div">
            <AudioWrapper name='Beep-0' audioSrc='https://v-25clock.netlify.app/assets/beep.mp3'/>
            <AudioWrapper name='Beep-1' audioSrc='https://v-25clock.netlify.app/assets/beep-1.mp3' />
            <AudioWrapper name='Beep-2' audioSrc='https://v-25clock.netlify.app/assets/beep-2.mp3' />
            <AudioWrapper name='Beep-3' audioSrc='https://v-25clock.netlify.app/assets/beep-3.mp3' />
        </div>
    )
}
export default SelectAudio;