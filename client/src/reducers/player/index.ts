const initialState = [
    {   
        name: 'Player 1',
        index: 0,
        position: [1, 1]
    }
]
const players = (state = initialState, action: any) => {
    switch (action.type) {
        case 'RESET_PLAYER_POSITIONS':
            return initialState;
        case 'MOVE_PLAYER':
            console.log('moving player 1...', action.payload.position)
            state[0].position = action.payload.position
            return [...state];
        default:
            return state;
    }
}

export default players;