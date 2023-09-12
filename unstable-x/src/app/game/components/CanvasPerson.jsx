import React, { useEffect, useRef } from "react";

export default function CanvasPerson({ color = "green", headRadius = 10, torsoHeight = 20 }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animationFrameId;
        let start = null;

        const draw = (timestamp) => {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Calculate new vertical position using sine function for realistic bobbing
            const y = 50 + Math.sin(elapsed * 0.002) * 5;

            // Draw the head
            ctx.beginPath();
            ctx.arc(50, y, headRadius, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.closePath();

            // Draw the torso
            ctx.beginPath();
            ctx.rect(50 - (headRadius / 2), y + headRadius, headRadius, torsoHeight);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.closePath();

            animationFrameId = requestAnimationFrame(draw);
        };

        draw(0);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [color, headRadius, torsoHeight]);

    return (
        <canvas
            ref={canvasRef}
            width={100}
            height={100}
            className="border border-gray-300 rounded hover:animate-bob"
        />
    );
}
