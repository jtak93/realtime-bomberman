import store from '../../config/store';
import { TileType } from '../../data/grid';

export default function handlePlayerActions(player) {
    function getCurrentPlayerPosition() {
        return store.getState().players[0].position
    }
    function getNewPosition(direction) {
        const oldPos = getCurrentPlayerPosition();
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

    function dispatchBomb() {
        store.dispatch({
            type: 'PLACE_BOMB',
            payload: {
                position: getCurrentPlayerPosition()
            }
        })
    }

    function handleKeyDown(e) {
        e.preventDefault()

        switch (e.keyCode) {
            // Space Bar
            case 32:
                return dispatchBomb()
            // Left Key
            case 37:
                return dispatchMove('WEST')
            // Up Key
            case 38:
                return dispatchMove('NORTH')
            // Right Key
            case 39:
                return dispatchMove('EAST')
            // Down Key
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
