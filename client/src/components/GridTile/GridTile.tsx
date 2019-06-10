import React from 'react';
import styled from 'styled-components';

interface GridTileProps {
    tileData
}

const TileStyled = styled.div`
    width: 50px;
    height: 50px;
`

const GridTile: React.FC<GridTileProps> = (props) => {
    return (
        <TileStyled>
            <div>{props.tileData}</div>
        </TileStyled>
    );
}

export default GridTile;
