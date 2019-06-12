import store from '../../config/store';
import { TileType } from '../../data/grid';

export default function handleMovement(player) {

    function getNewPosition(direction) {
        const oldPos = store.getState().players[0].position
        const grid = store.getState().grid;
        console.log(grid)
        let newPos;
        switch (direction) {
            case 'WEST':
                newPos = [oldPos[0], oldPos[1] - 1]
                break;
            case 'EAST':
                newPos = [oldPos[0], oldPos[1] + 1]
                break;
            case 'NORTH':
                newPos = [oldPos[0] - 1, oldPos[1]]
                break;
            case 'SOUTH':
                newPos = [oldPos[0] + 1, oldPos[1]]
                break;
        }
        return (checkBounds(grid, newPos)) ? newPos : oldPos;
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
    function checkBounds(grid, pos) {
        console.log('grid', grid)
        if (grid[pos[0]][pos[1]].type === TileType.wallTile) {
            return false
        } else {
            return true;
        }
    }

    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })

    return player
}
