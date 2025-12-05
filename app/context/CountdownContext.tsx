'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CountdownContextType {
    secondsRemaining: number;
    hours: number;
    seconds: number;
    minutes: number;
}

const CountdownContext = createContext<CountdownContextType | null>(null);

export function CountdownProvider({ children }: { children: ReactNode }) {
    // Initialize from localStorage or default to 30 minutes
    const [secondsRemaining, setSecondsRemaining] = useState(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('bitcoinCountdown');
            return stored ? parseInt(stored) : 1800;
        }
        return 1800;
    });

    useEffect(() => {
        // Bitcoin countdown timer (30 minutes)
        const bitcoinTimer = setInterval(() => {
            setSecondsRemaining((prev) => {
                const newValue = prev > 0 ? prev - 1 : 0;
                localStorage.setItem('bitcoinCountdown', newValue.toString());
                return newValue;
            });
        }, 1000);

        return () => clearInterval(bitcoinTimer);
    }, []);

    const hours = Math.floor(secondsRemaining / 3600);
    const minutes = Math.floor((secondsRemaining % 3600) / 60);
    const seconds = secondsRemaining % 60;

    return (
        <CountdownContext.Provider value={{ secondsRemaining, hours, seconds, minutes }}>
            {children}
        </CountdownContext.Provider>
    );
}

export function useCountdown() {
    const context = useContext(CountdownContext);
    if (!context) {
        throw new Error('useCountdown must be used within a CountdownProvider');
    }
    return context;
}

