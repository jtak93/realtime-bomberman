import store from '../../config/store'

export default function handleMovement(player) {

    function getNewPosition(direction) {
        const oldPos = store.getState().players[0].position
        const grid = store.getState().grid;
        console.log(grid)
        switch (direction) {
            case 'WEST':
                return [oldPos[0] - 1, oldPos[1]]
            case 'EAST':
                return [oldPos[0] + 1, oldPos[1]]
            case 'NORTH':
                return [oldPos[0], oldPos[1] - 1]
            case 'SOUTH':
                return [oldPos[0], oldPos[1] + 1]
        }
    }

    function dispatchMove(direction) {
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: getNewPosition(direction)
            }
        })
    }

    function handleKeyDown(e) {
        e.preventDefault()

        switch (e.keyCode) {
            case 37:
                return dispatchMove('WEST')

            case 38:
                return dispatchMove('NORTH')

            case 39:
                return dispatchMove('EAST')

            case 40:
                return dispatchMove('SOUTH')

            default:
                console.log(e.keyCode)
        }
    }

    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })

    return player
}
