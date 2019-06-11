import { ROWS, COLS, TILE_SIZE } from '../config/constants';
interface Tile {
    bgColor: string;
}

const emptyTile = {
    bgColor: "#228B22"
}

const wallTile = {
    bgColor: "darkgray"
}

const destructibleTile = {
    bgColor: "lightgray"
}

const tileArray = [emptyTile, wallTile, destructibleTile];

/**
 * @return 2D Array of grid tiles
 * @param row use odd numbered rows for checkered walls
 * @param col use odd numbered columns for checkered walls
 */
export const generateNewGrid = (rowLen = ROWS, colLen = COLS) => {
    console.log('generating new grid')
    
    const grid:Tile[][] = [];
    // initialize all tiles as walls
    for (let r = 0; r < rowLen; r++) {
        grid.push([]);
        for (let c = 0; c < colLen; c++) {
            grid[r].push(wallTile)
        }
    }
    // generate empty rows w/ wall
    for (let i = 1; i < rowLen - 1; i++) {
        // left wall
        grid[i][0] = wallTile;
        // right wall
        grid[i][colLen-1] = wallTile;
        for (let j = 1; j < colLen - 1; j++) {
            grid[i][j] = emptyTile;
        }
    }

    // generate checkered walls
    for (let r = 2; r < rowLen - 1; r += 2) {
        for (let c = 2; c < colLen - 1; c += 2) {
            grid[r][c] = wallTile;
        }
    }
    return grid;
}

const getRandomTile = (tiles: Tile[]) => {
    return tiles[Math.floor(Math.random() * tiles.length)];
}
