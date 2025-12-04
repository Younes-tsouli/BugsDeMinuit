'use client';
import { createContext, useContext, useRef, ReactNode, useState } from 'react';

interface AudioContextType {
  playStartupSound: () => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  isAudioEnabled: boolean;
  enableAudio: () => Promise<void>;
}

const AudioContext = createContext<AudioContextType | null>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);

  const enableAudio = async (): Promise<void> => {
    console.log('Attempting to enable audio...');

    if (audioRef.current) {
      try {
        // Force load the audio if it hasn't loaded yet
        if (audioRef.current.readyState < 2) {
          console.log('Audio not ready, forcing load...');
          audioRef.current.load();
          await new Promise((resolve) => {
            const onCanPlay = () => {
              audioRef.current?.removeEventListener('canplay', onCanPlay);
              resolve(true);
            };
            audioRef.current?.addEventListener('canplay', onCanPlay);
          });
        }

        // Unlock audio context with user interaction
        audioRef.current.volume = 0.1; // Low but audible volume
        audioRef.current.currentTime = 0;

        console.log('Playing test audio to unlock context...');
        await audioRef.current.play();

        // Immediately pause and reset
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current.volume = 1;

        setIsAudioEnabled(true);
        console.log('Audio enabled successfully');
      } catch (error) {
        console.log('Audio enable failed:', error);
        setIsAudioEnabled(true); // Still mark as enabled for next attempt
      }
    } else {
      console.log('Audio ref not available');
    }
  };

  const playStartupSound = async () => {
    console.log('playStartupSound called, isAudioEnabled:', isAudioEnabled);

    if (!audioRef.current) {
      console.log('Audio ref not available');
      return;
    }

    try {
      // Ensure audio is loaded
      if (audioRef.current.readyState < 2) {
        console.log('Audio not ready, waiting for load...');
        await new Promise((resolve) => {
          const onCanPlay = () => {
            audioRef.current?.removeEventListener('canplay', onCanPlay);
            resolve(true);
          };
          audioRef.current?.addEventListener('canplay', onCanPlay);
        });
      }

      // Reset to start and set volume
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 1;

      console.log('Attempting to play audio...');
      await audioRef.current.play();
      console.log('Audio playing successfully');

    } catch (error) {
      console.log('Audio playback failed:', error);

      // Try one more time after a brief delay
      setTimeout(async () => {
        try {
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            await audioRef.current.play();
            console.log('Audio retry successful');
          }
        } catch (retryError) {
          console.log('Audio retry also failed:', retryError);
        }
      }, 100);
    }
  };

  return (
    <AudioContext.Provider value={{ playStartupSound, audioRef, isAudioEnabled, enableAudio }}>
      {children}
      <audio
        ref={audioRef}
        src="/sound_effects/startup_sound.mp3"
        preload="auto"
        onCanPlay={() => console.log('Audio can play')}
        onLoadedData={() => console.log('Audio loaded')}
        onError={(e) => console.log('Audio error:', e)}
      />
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}
