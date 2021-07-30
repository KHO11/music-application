import React, {useState, useEffect} from 'react';
import Player from "./Player";


function App() {
  const [songs] = useState([
    {
      title: "Bleach Number One",
      artist: " Shirō Sagisu",
      img_src: "./images/song-1.jpg",
      src: "./Music/[MP3DOWNLOAD.TO] Bleach - Ichigo's Theme - Number One-320k"
    },
    {
      title: "Melodic Dreams",
      artist: "Whitesand",
      img_src: "./images/song-2.jpg",
      src: "./Music/Whitesand - Melodic Dreams"
    },
    {
      title: "Bleach Rolling Star",
      artist: "Yui",
      img_src: "./images/song-3.jpg",
      src: "./Music/bleach-soundtrack_bleach-op5-rolling-star-by-yui"
    },
    {
      title: "Bleach Memories of nobody",
      artist: "Shiro Sagisu",
      img_src: "./images/song-4.jpg",
      src: "./Music/bleach-soundtrack_memories-of-nobody-ed-mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
