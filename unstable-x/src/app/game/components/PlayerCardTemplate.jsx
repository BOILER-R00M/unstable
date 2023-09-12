'use client'
import React, {useState, useEffect} from 'react';
import Image from 'next/image';


export const generatePlayerCard = ({player}) => {
const profileImageSize = 200

    return(
        <div className=" flex flex-row rounded-l-full h-40 w-80 rounded-r-md  bg-slate-700 m-5" key={player.userDetails.id}>
            <div className="w-40 h-30 overflow-hidden rounded-full">
                <img className="rounded-full w-40 h-40 object-cover" src={player.userDetails.displayImage} alt={player.userDetails.username} />
            </div>
            <h3>{player.userDetails.username}</h3>
        </div>
    )
}