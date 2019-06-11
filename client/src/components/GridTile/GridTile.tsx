import React from 'react';
import styled from 'styled-components';
import { TILE_SIZE } from '../../config/constants'

interface GridTileProps {
    tileData;
    className?;
}


const GridTile: React.FC<GridTileProps> = (props) => {
    return (
        <div className={props.className}>
        </div>
    );
}

const TileStyled = styled(GridTile)`
  height: ${TILE_SIZE}px;
  width: ${TILE_SIZE}px;
  border: 1px solid black;
  background-color: ${props => props.tileData.bgColor};
`
export default TileStyled;
