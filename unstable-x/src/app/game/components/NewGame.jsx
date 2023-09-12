import React, { useState, useEffect } from "react";
import { gameSchemas } from "../../functions/seed-game";
import { seedUsers } from "@/app/functions/seed-users";

export default function NewGame() {
    const [gameTypes, setGameTypes] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);


    useEffect(() => {
        setGameTypes(gameSchemas); // later to be replaced with a fetch from the db
        setUsers(seedUsers); // assuming seedUsers is an array of users
    }, []);

    const handleUserChange = (event, user) => {
        if (event.target.checked) {
            setSelectedUsers([...selectedUsers, user]);
        } else {
            setSelectedUsers(
                selectedUsers.filter(
                    (selectedUser) =>
                        selectedUser.userDetails.id !== user.userDetails.id
                )
            );
        }
    };

    return (
        <div className="flex flex-col items-center h-[10vh] w-[90vw] mx-[5vw] my-[2vh] border-[.1rem] border-slate-300">
            <h1 className="text-slate-300">Start a new game</h1>
            <form className="flex justify-center flex-wrap">
                <select className="rounded-md text-purple-400 h-10 w-[10rem] flex items-center px-6 m-2 bg-slate-800">
                    {gameTypes.map((gameType) => (
                        <option
                            className="text-purple-400"
                            key={gameType.id}
                            value={gameType.id}
                        >
                            {gameType.platform}
                        </option>
                    ))}
                </select>
                <input className=" rounded-md text-purple-400 h-10 w-[10rem] flex items-center px-6 m-2  bg-slate-800"/>
                <div className="flex flex-wrap">
                    {users.map((user) => (
                        <label
                            key={user.userDetails.id}
                            className="inline-flex items-center m-2"
                        >
                            <input
                                type="checkbox"
                                className="form-checkbox bg-slate-800"
                                onChange={(e) => handleUserChange(e, user)}
                            />
                            <span className="ml-2 font-thin text-slate-300">
                                {user.userDetails.username}
                            </span>
                        </label>
                    ))}
                </div>
                <button className="bg-purple-900 text-slate-300 px-4 m-2 rounded-md hover:bg-purple-700"> Create Game</button>
            </form>
        </div>
    );
}
