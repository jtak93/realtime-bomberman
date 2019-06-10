import { generateNewGrid } from '../../data/grid'
const initialState = generateNewGrid();
const grid = (state = initialState, action: any) => {
    switch (action.type) {
        case 'RESET_GRID':
            return initialState;
        default:
            return state;
    }
}

export default grid;