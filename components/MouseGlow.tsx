"use client";

import React, { useEffect, useState } from "react";

export default function MouseGlow() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
            aria-hidden="true"
        >
            <div
                className="absolute w-[150px] h-[150px] bg-purple-500/20 rounded-full blur-2xl transition-transform duration-300 ease-out will-change-transform"
                style={{
                    transform: `translate(${mousePosition.x - 75}px, ${mousePosition.y - 75}px)`,
                }}
            />
        </div>
    );
}
