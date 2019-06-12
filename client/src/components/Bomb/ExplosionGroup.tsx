import React from 'react';
import { TILE_SIZE } from '../../config/constants'
import Explosion from './Explosion';

interface ExplosionGroupProps {
    bomb?;
    className?;
}

const ExplosionGroup: React.FC<ExplosionGroupProps> = (props) => {
    console.log("explosion props", props)
    const { position, power } = props.bomb;
    const powArr = new Array(power);
    return (
        <div>

            <Explosion x={position[1]} y={position[0]}></Explosion>

            <Explosion x={position[1]-1} y={position[0]}></Explosion>
            <Explosion x={position[1]+1} y={position[0]}></Explosion>
            <Explosion x={position[1]} y={position[0]-1}></Explosion>
            <Explosion x={position[1]} y={position[0]+1}></Explosion>

        </div>
    );
}

export default ExplosionGroup;
