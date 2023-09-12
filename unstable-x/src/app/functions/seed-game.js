export const seedGames = [
    {
        id: "unstablex001",
        name: "RoundWon",
        platform: "unstablex",
        players: [],
        turnOrder: [],
        currentTurn: "u001", // possibly the game object but the full object will be in players
        deck: [],
        discard: [],
    },
];

// *** This object will essentially be added to each user's object in their "games" array
export const unstablexUserSchema = {
    pid: "u001",
    platform: "unstablex",
    handSize: 7,
    hand: [],
    stable: [],
    turn: false,
    status: "player", // other options player and spectator
    buffs: [],
    immunities: [],
};

export const gameSchemas = [
    {
        id: "unstablex001",
        name: "RoundWon",
        platform: "unstablex",
        players: [],
        turnOrder: [],
        currentTurn: "u001", // possibly the game object but the full object will be in players
        deck: [],
        discard: [],
    },
];
