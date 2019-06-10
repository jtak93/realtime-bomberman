import gridJSON from '../../data/grid'
const initialState = gridJSON.grid;
const grid = (state = initialState, action: any) => {
    switch (action.type) {
        case 'RESET_GRID':
            return initialState;
        default:
            return state;
    }
}

export default grid;