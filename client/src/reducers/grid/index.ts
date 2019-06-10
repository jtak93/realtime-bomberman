const grid = (state = [], action: any) => {
    switch (action.type) {
        case 'CREATE_GRID':
            return []
        case 'RESET_GRID':
            return []
        default:
            return state
    }
}

export default grid;