import { seedUsers } from "./seed-users"
import { isPlayer, isSpectator } from "./helpers"
import { unstablexUserSchema, unstablexGameSchema } from "./seed-game"



// TODO:
//[ ] createNewGame(users = [], platform, gameName ) test with seed data

// ** Basic Game Cruds **

export const createNewGame = (users, platform, gameName, setCurrentGame) => {

    const game = {
        id: `${platform}${Math.floor(Math.random() * 1000)}`,
        name: gameName,
        platform: platform,
        players: [],
        turnOrder: [],
        currentTurn: null,
        deck: [],
        discard: []
    }

    const unstablexUserSchema = {
        pid: null,
        platform: "unstablex",
        handSize: 7,
        hand: [],
        stable: [],
        turn: false,
        status: "player", // other options player and spectator
        buffs: [],
        immunities: [],
    }

    users.forEach(user => {
        const newUser = { ...unstablexUserSchema, pid: user.userDetails.id }
        game.players.push(newUser)
    })

    setCurrentGame(game)
}

export const addPlayerToCurrentGame = (currentGame, currentUser) => {

}


