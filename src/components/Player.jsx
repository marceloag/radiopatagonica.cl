import React, { useState, useRef } from 'react';

function Player() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const pauseAudio = () => {
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div>
      <audio ref={audioRef} src="http://34.172.235.38:8000/stream" autoPlay={isPlaying} />
      {isPlaying ? (<a href="#" onClick={pauseAudio} className="boton rounded-full w-20 h-20 border-4 border-solid border-white  flex flex-row items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="white" stroke-linecap="round" stroke-linejoin="round" className="w-10 h-10">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" stroke-width="0" fill="white"></path>
              <path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" stroke-width="0" fill="white"></path>
            </svg>
        </a>) : (<a href="#" onClick={playAudio} className="boton rounded-full w-20 h-20 border-4 border-solid border-white  flex flex-row items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M7 4v16l13 -8z"></path>
            </svg>
        </a>)}
    </div>
  );
}

export default Player;
