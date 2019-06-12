import React from 'react';
import { TILE_SIZE } from '../../config/constants'
import Explosion from './Explosion';

interface ExplosionGroupProps {
    bomb?;
    className?;
}

const ExplosionGroup: React.FC<ExplosionGroupProps> = (props) => {
    const { position, power } = props.bomb;
    const arrPow = new Array(5).fill(0);
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
