import React from 'react';
import { TILE_SIZE } from '../../config/constants'

interface ExplosionProps {
    x?;
    y?;
}

const Explosion: React.FC<ExplosionProps> = (props) => {
    return (
        <div
            style={{
                position: 'relative',
                top: props.y * TILE_SIZE + 10,
                left: props.x * TILE_SIZE + 20,
                height: `${0}px`,
                width: `${0}px`
            }}>
            X
        </div>
    );
}

export default Explosion;
