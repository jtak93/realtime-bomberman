import React from 'react';
import { TILE_SIZE } from '../../config/constants'
import Explosion from './Explosion';
import { TileType } from '../../data/grid';

interface ExplosionGroupProps {
    bomb?;
    className?;
    grid?;
}
/**
 * Returns explosion count accounting for walls in form: [up,down,left,right]
 * @param grid grid
 * @param power bomb power
 * @param pos bomb position
 */
function getExplosionsCounts(grid: Array<any>, power: number, pos: [number, number]) {
    let counts = [0, 0, 0, 0]
    for (let i = 1; i <= power; i++) {
        console.log(pos)
        const curTile = grid[pos[0] - i][pos[1]];
        if (curTile.type === TileType.wallTile || curTile.type === TileType.destructibleTile) {
            break;
        } else {
            counts[0]++
        }
    }

    for (let i = 1; i <= power; i++) {
        const curTile = grid[pos[0] + i][pos[1]];
        if (curTile.type === TileType.wallTile || curTile.type === TileType.destructibleTile) {
            break;
        }
        counts[1]++
    }

    for (let i = 1; i <= power; i++) {
        const curTile = grid[pos[0]][pos[1] - i];
        if (curTile.type === TileType.wallTile || curTile.type === TileType.destructibleTile) {
            break;
        }
        counts[2]++
    }

    for (let i = 1; i <= power; i++) {
        const curTile = grid[pos[0]][pos[1] + i];
        if (curTile.type === TileType.wallTile || curTile.type === TileType.destructibleTile) {
            break;
        }
        counts[3]++
    }

    return counts;
}
const ExplosionGroup: React.FC<ExplosionGroupProps> = (props) => {
    const { grid, bomb } = props;
    const { position, power } = bomb;
    console.log('explosion group grid::', getExplosionsCounts(grid, 2, position))
    const arrPow = new Array(2).fill(0);

    // const 
    return (
        <div>
            <Explosion x={position[1]} y={position[0]}></Explosion>
            {arrPow.map((n, idx) => {
                const inc = idx + 1;
                return (
                    <div key={idx} style={{display: 'hidden'}}>
                        <Explosion x={position[1] - inc} y={position[0]}></Explosion>
                        <Explosion x={position[1] + inc} y={position[0]}></Explosion>
                        <Explosion x={position[1]} y={position[0] - inc}></Explosion>
                        <Explosion x={position[1]} y={position[0] + inc}></Explosion>
                    </div>
                )
            })}
        </div>
    );
}

export default ExplosionGroup;
