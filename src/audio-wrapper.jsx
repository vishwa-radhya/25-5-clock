
import { useContext, useRef } from 'react';
import {AudioSelectContext} from './audio-select-context';

const AudioWrapper=({name,audioSrc})=>{

    const audioRef = useRef(null);

    const {selectedAudio,toggleDiv}=useContext(AudioSelectContext);


    function playBeep(){
        if(audioRef.current){
            audioRef.current.play();
        }
    }
    

    return(
        <div className="audio-wrapper">
            <div  onClick={()=>toggleDiv(name)} className='power-div'>
                <input type="checkbox" checked={selectedAudio === name}  />
                <span className='slider'></span>
            </div>
            <button onClick={playBeep}><i className="fa-solid fa-play"></i></button>
            <audio src={audioSrc} ref={audioRef}></audio>
            <p>{name}</p>
        </div>
    )
}
export default AudioWrapper;