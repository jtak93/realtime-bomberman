import { ROWS, COLS } from '../config/constants';
interface Tile {
    bgColor: string;
    type: TileType;
    bomb?;
}

export enum TileType {
    emptyTile,
    wallTile,
    destructibleTile
}

const emptyTile = {
    type: TileType.emptyTile,
    bgColor: "#228B22"
}

const wallTile = {
    type: TileType.wallTile,
    bgColor: "darkgray"
}

const destructibleTile = {
    type: TileType.destructibleTile,
    bgColor: "lightgray"
}

// const tileArray = [emptyTile, wallTile, destructibleTile];

/**
 * @return 2D Array of grid tiles
 * @param row use odd numbered rows for checkered walls
 * @param col use odd numbered columns for checkered walls
 */
export const generateNewGrid = (rowLen = ROWS, colLen = COLS) => {    
    const grid:Tile[][] = [];
    // initialize all tiles as walls
    for (let r = 0; r < colLen; r++) {
        grid.push([]);
        for (let c = 0; c < rowLen; c++) {
            grid[r].push(wallTile)
        }
    }
    // generate empty rows w/ wall
    for (let i = 1; i < colLen - 1; i++) {
        // left wall
        grid[i][0] = wallTile;
        // right wall
        grid[i][rowLen-1] = wallTile;
        for (let j = 1; j < rowLen - 1; j++) {
            grid[i][j] = emptyTile;
        }
    }
    grid[2][1] = destructibleTile;

    // generate checkered walls
    for (let r = 2; r < colLen - 1; r += 2) {
        for (let c = 2; c < rowLen - 1; c += 2) {
            grid[r][c] = wallTile;
        }
    }
    return grid;
}

const getRandomTile = (tiles: Tile[]) => {
    return tiles[Math.floor(Math.random() * tiles.length)];
}
