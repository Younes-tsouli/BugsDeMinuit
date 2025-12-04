import { useEffect, useRef, useState } from "react";
import "../jumpscare.css";

export default function Jumpscare() {
    const [show, setShow] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        // ⏳ Attend 2 secondes avant de montrer l'écran
        const timer = setTimeout(() => {
            setShow(true);

            // 🎵 joue le son à chaque fois
            if (audioRef.current) {
                audioRef.current.currentTime = 0; // reset (important)
                audioRef.current.play().catch(() => {
                    console.warn("L'utilisateur doit interagir avant lecture audio.");
                });
            }

        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* 🎵 Son d’horreur */}
            <audio ref={audioRef} src="/jumpscare.mp3" preload="auto"></audio>

            {/* 🕱 Écran noir + symbole pirate */}
            <div className={`scary-screen ${show ? "show" : ""}`}>
                <div className="pirate-symbol">☠️</div>
            </div>
        </>
    );
}
