import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import sakura from '../assets/audio/sakuracherry.mp3';

const MusicPlayer = ({ mode }: { mode: string }) => {
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(0.05);
  
    const styles = {
        playerContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        backgroundColor: mode === 'dark' ? '#333' : '#f5f5f5',
        color: mode === 'dark' ? '#fff' : '#000',
        padding: '5px',

        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        },
        button: {
        fontSize: '16px',
        backgroundColor: mode === 'dark' ? '#555' : '#ddd',
        color: mode === 'dark' ? '#fff' : '#000',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '5px',
        cursor: 'pointer',
        },
        slider: {
            width: '150px',
            height: '8px',
            background: mode === 'dark' ? '#ddd' : '#333', // Bar color
            borderRadius: '5px',
            outline: 'none',
            cursor: 'pointer',
            WebkitAppearance: 'none' as const, // Correct way for WebKit-based browsers
            MozAppearance: 'none' as const,    // For Firefox compatibility
          },
    };

  return (
    <div style={styles.playerContainer}>
      {/* Play/Pause Button */}
      <button onClick={() => setPlaying(!playing)} style={styles.button}>
        {playing ? 'Pause' : 'Play'}
      </button>

    {/* Volume Slider */}
    <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
        style={styles.slider}
        aria-label="Adjust Volume"
      />

      {/* Hidden ReactPlayer */}
      <ReactPlayer
        url={sakura}
        playing={playing}
        volume={volume}
        controls={false}
        style={{ display: 'none' }} // Hide default player
      />

      {/* Custom Slider Thumb Styles */}
      
        <style>{`
            input[type='range']::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              background:  ${mode === 'dark' ? 'linear-gradient(90deg, pink, purple)': 'linear-gradient(90deg, purple, pink)'};
              width: 20px;
              height: 20px;
              border-radius: 50%;
              cursor: pointer;
            }
            input[type='range']::-moz-range-thumb {
              background: ${mode === 'dark' ? 'linear-gradient(90deg, pink, purple)': 'linear-gradient(90deg, purple, pink)'};
              width: 20px;
              height: 20px;
              border-radius: 50%;
              cursor: pointer;
            }
            input[type='range']::-ms-thumb {
              background: ${mode === 'dark' ? 'linear-gradient(90deg, pink, purple)': 'linear-gradient(90deg, purple, pink)'};
              width: 20px;
              height: 20px;
              border-radius: 50%;
              cursor: pointer;
            }
            input[type='range'] {
                background: ${mode === 'dark' ? '#555' : '#ddd'}; /* Adjust track background */
            }
          `}</style>
    </div>
  );
};


export default MusicPlayer;
