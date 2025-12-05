'use client';
import { useState, useRef, useEffect, useCallback, ReactNode } from 'react';

interface WindowProps {
    title: string;
    children: ReactNode;
    onClose: () => void;
    width?: number;
    height?: number;
    initialX?: number;
    initialY?: number;
}

export default function Window({
    title,
    children,
    onClose,
    width = 800,
    height = 600,
    initialX = 100,
    initialY = 100
}: WindowProps) {
    const [position, setPosition] = useState({ x: initialX, y: initialY });
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [isMaximized, setIsMaximized] = useState(false);
    const [previousPosition, setPreviousPosition] = useState({ x: initialX, y: initialY });
    const windowRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: React.MouseEvent) => {
        if ((e.target as HTMLElement).closest('.window-controls')) return;

        setIsDragging(true);
        setDragOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
    };

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!isDragging) return;

        setPosition({
            x: e.clientX - dragOffset.x,
            y: e.clientY - dragOffset.y
        });
    }, [isDragging, dragOffset]);

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    const handleMaximize = () => {
        if (isMaximized) {
            setPosition(previousPosition);
            setIsMaximized(false);
        } else {
            setPreviousPosition(position);
            setPosition({ x: 0, y: 0 });
            setIsMaximized(true);
        }
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [isDragging, handleMouseMove, handleMouseUp]);

    return (
        <div
            ref={windowRef}
            className="absolute bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col"
            style={{
                left: position.x,
                top: position.y,
                width: isMaximized ? '100vw' : width,
                height: isMaximized ? '100vh' : height,
                zIndex: 100,
            }}
        >
            {/* Title Bar */}
            <div
                className="bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 flex items-center justify-between cursor-move select-none"
                onMouseDown={handleMouseDown}
            >
                <div className="flex items-center space-x-2">
                    <span className="text-white text-sm font-semibold">{title}</span>
                </div>

                {/* Window Controls */}
                <div className="window-controls flex items-center space-x-2">
                    <button
                        onClick={() => {}}
                        className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors"
                        title="Minimize"
                    />
                    <button
                        onClick={handleMaximize}
                        className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors"
                        title="Maximize"
                    />
                    <button
                        onClick={onClose}
                        className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                        title="Close"
                    />
                </div>
            </div>

            {/* Window Content */}
            <div className="flex-1 overflow-auto bg-white">
                {children}
            </div>
        </div>
    );
}

