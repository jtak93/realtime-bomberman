import * as uuid from 'uuid/v4';
const initialState: any = new Map();
const bombs = (state = initialState, action: any) => {
    switch (action.type) {
        case 'PLACE_BOMB':
            console.log('placing bomb reducer', state, action);
            const id = uuid();
            const newBomb = {
                id: id,
                position: action.payload.position
            }
            state.set(id, newBomb)
            return new Map(state);
        case 'EXPLODE_BOMB':
            console.log('bomb exploded', action)
            state.delete(action.id)
            return new Map(state);
        default:
            return state;
    }
}

export default bombs;