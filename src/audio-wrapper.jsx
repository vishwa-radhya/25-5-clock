
import { useContext, useRef, useState } from 'react';
import {AudioSelectContext} from './audio-select-context';
import PropTypes from 'prop-types';

const AudioWrapper=({name,audioSrc})=>{
    const [isAudioStarted,setIsAudioStarted]=useState(false);
    const audioRef = useRef(null);

    const {selectedAudio,toggleDiv}=useContext(AudioSelectContext);


    function playBeep(){
        if(audioRef.current){
            setIsAudioStarted(true);
            audioRef.current.play();
            audioRef.current.onended=()=>setIsAudioStarted(false);
        }
    }
    
    const lightStyles={
        backgroundColor:'red',
    }

    return(
        <div className="audio-wrapper">
            <div  onClick={()=>toggleDiv(name)} className='power-div'>
                <input type="checkbox" checked={selectedAudio === name}  />
                <span className='slider'></span>
            </div>
            <div className='light' style={selectedAudio===name ? lightStyles:{}}></div>
            <button onClick={playBeep}><i className={!isAudioStarted ? 'fa-solid fa-play' : 'fa-solid fa-volume-low'}></i></button>
            <audio src={audioSrc} ref={audioRef}></audio>
            <p>{name}</p>
        </div>
    )
}
AudioWrapper.propTypes={
    name:PropTypes.string,
    audioSrc:PropTypes.string,
}
export default AudioWrapper;