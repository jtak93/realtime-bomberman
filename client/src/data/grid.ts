interface Tile {
    bgColor: string;
}

const emptyTile = {
    bgColor: "#228B22"
}

const wallTile = {
    bgColor: "#D3D3D3"
}

const tileArray = [emptyTile, wallTile];

/**
 * @return 2D Array of grid tiles
 * @param row 
 * @param col 
 */
export const generateNewGrid = (rowLen = 14, colLen = 14) => {
    console.log('generating new grid')
    const ret:Tile[][] = [];
    // generate top wall
    const wallRow: Tile[] = []
    for (let i = 0; i < rowLen; i++) {
        wallRow.push(wallTile);
    }
    ret.push(wallRow)
    // generate rows
    for (let i = 1; i < colLen - 1; i++) {
        const row: Tile[] = [];
        row.push(wallTile);
        for (let j = 1; j < rowLen - 1; j++) {
            row.push(getRandomTile(tileArray))
        }
        row.push(wallTile)
        ret.push(row)
    } 
    ret.push(wallRow)
    return ret;
}

const getRandomTile = (tiles: Tile[]) => {
    return tiles[Math.floor(Math.random() * tiles.length)];
}
