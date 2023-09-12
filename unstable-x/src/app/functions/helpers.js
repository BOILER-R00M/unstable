


export const isPlayer = (game, userId) => {
    const player = game.players.find(player => player.pid === userId)
    return player ? true : false
}

export const isSpectator = (game, userId) => {
    const spectator = game.spectators.find(spectator => spectator.pid === userId)
    return spectator ? true : false
}