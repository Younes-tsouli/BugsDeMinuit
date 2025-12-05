import {useRef, useState, useEffect} from "react";
import { useCountdown } from "../context/CountdownContext";
import "../jumpscare.css";

interface JumpScareProps {
    triggerAnimation?: boolean;
}

export default function JumpScare({triggerAnimation = false}: JumpScareProps) {
    const [show, setShow] = useState(false);   // affiche jumpscare ?
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const { hours, seconds } = useCountdown();

    useEffect(() => {
        if (triggerAnimation) {
            // Start jumpscare immediately when triggered (use setTimeout to avoid ESLint warning)
            setTimeout(() => {
                setShow(true);
            }, 0);

            // 🔊 play sound immediately since user clicked on desktop
            if (audioRef.current) {
                audioRef.current.currentTime = 0;
                audioRef.current.play().catch(error => {
                    console.error('Failed to play jumpscare audio:', error);
                });
            }

            // Redirect to desktop page after 7 seconds
            setTimeout(() => {
                // Mark that user has completed the full cycle
                localStorage.setItem('hasCompletedCycle', 'true');
                window.location.href = '/desktop';
            }, 7000);
        }
    }, [triggerAnimation]);

    return (
        <>
            {/* 🔊 son d'horreur */}
            <audio ref={audioRef} src="/sound_effects/high_pitch_noise.mp3" preload="auto"></audio>

            {/* 💀 écran jumpscare */}
            <div className={`scary-screen ${show ? "show" : ""} ${triggerAnimation ? "active" : ""}`}>
                <div className="pirate-symbol flex flex-col items-center jusitfy-center">
                    <p>☠️</p>
                    <div className={"text-xl flex flex-col items-center justify-center gap-4"}>
                        <p>J&apos;ai des dossiers sur toi</p>
                        <p>Envoie 0.2 BTC à cette adresse sinon je poste tout</p>
                        <code className="bg-black/50 px-4 py-2 rounded">
                            adresse bitcoin : 1HckjUpRGcrrRAtFaaCAUaGjsPx9oYmLaZ
                        </code>
                        <div className="text-red-500 font-bold text-2xl mt-4">
                            Tu as {hours}h et {seconds} secondes
                        </div>
                    </div>
                </div>
            </div>go
        </>
    );
}
