import React from "react";
import { seedUsers } from "../../functions/seed-users";
import { generatePlayerCard } from "./PlayerCardTemplate";


export default function PlayerCardList() {

    console.log(seedUsers)

    return (
        <div className="flex flex-wrap">
            {seedUsers.map((player) => {
                return generatePlayerCard({player});
            })}
        </div>
    )
}