import React from "react";

export default function PlayerArea({ position, isCurrentPlayer }) {
    const baseClasses = "absolute w-32 h-32 bg-red-300 transform -rotate-45";
    let positionClasses = "";

    switch (position) {
        case "bottom":
            positionClasses = "bottom-0 left-1/2 translate-x-[-50%]";
            break;
        case "bottomLeft":
            positionClasses = "bottom-10 left-10";
            break;
        case "bottomRight":
            positionClasses = "bottom-10 right-10";
            break;
        case "topLeft":
            positionClasses = "top-10 left-10";
            break;
        case "topRight":
            positionClasses = "top-10 right-10";
            break;
        case "top":
            positionClasses = "top-0 left-1/2 translate-x-[-50%]";
            break;
        default:
            break;
    }

    return (
        <div className={`${baseClasses} ${positionClasses}`}>
            {/* Your content here */}
        </div>
    );
}
