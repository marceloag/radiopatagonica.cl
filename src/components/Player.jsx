import { useState, useRef } from 'react';
import ReactAudioPlayer from 'react-audio-player';

function Player() {
    const audioPlayerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const playAudio = () => {
      setIsPlaying(true);
      if (audioPlayerRef.current) {
        audioPlayerRef.current.audioEl.current.play();
      }
    };
  const pauseAudio = () => {
    setIsPlaying(false);
     if (audioPlayerRef.current) {
      audioPlayerRef.current.audioEl.current.pause();
    }
  };

  return (
    <>
    <div class="">
      <ReactAudioPlayer
      src="http://34.172.235.38:8000/stream" autoPlay={isPlaying} ref={audioPlayerRef}/>
    </div>
    <div>
        {isPlaying ? (<a href="#" onClick={pauseAudio} class="boton rounded-full w-20 h-20 border-4 border-solid border-white  flex flex-row items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="white" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" stroke-width="0" fill="white"></path>
              <path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" stroke-width="0" fill="white"></path>
            </svg>
        </a>) : (<a href="#" onClick={playAudio} class="boton rounded-full w-20 h-20 border-4 border-solid border-white  flex flex-row items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M7 4v16l13 -8z"></path>
            </svg>
        </a>)}
    </div>
    </>
  )
}

export default Player