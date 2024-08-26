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
      <audio ref={audioRef} autoPlay={isPlaying} src="https://live.radiopatagonica.cl/radio" type="audio/mpegURL"/>
      {isPlaying ? (<a href="#" onClick={pauseAudio} className="boton rounded-full w-20 h-20 border-4 border-solid border-white  flex flex-row items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="white" fill="white" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" strokeWidth="0" fill="white"></path>
              <path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" strokeWidth="0" fill="white"></path>
            </svg>
        </a>) : (<a href="#" onClick={playAudio} className="boton rounded-full w-20 h-20 border-4 border-solid border-white  flex flex-row items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M7 4v16l13 -8z"></path>
            </svg>
        </a>)}
    </div>
  );
}

export default Player;
