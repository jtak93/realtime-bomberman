const initialState: any = []
const bombs = (state = initialState, action: any) => {
    switch (action.type) {
        case 'PLACE_BOMB':
            console.log('placing bomb reducer', state, action);
            const newBomb = {
                index: state.length,
                position: action.payload.position
            }
            const newState: any = state.slice();
            newState.push(newBomb)
            return newState;
        default:
            return state;
    }
}

export default bombs;