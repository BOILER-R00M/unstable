'use client' // add this to make sure next.js know's it's a client side component
import React, {useEffect, useState} from 'react';
import PlayerCardList from './components/PlayerCardList';
import NewGame from './components/NewGame';
import GameBoard from './components/GameBoard';


export default function Game() {
    const [currentGame, setCurrentGame] = useState({});

    return (
        <div className="p-0">
            GAME PAGE
            {/* <PlayerCardList /> */}
            <NewGame />
            <GameBoard />
        </div>
    )
}