import React from 'react';
import styled from 'styled-components';

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
  height: 50px;
  width: 50px;
  border: 1px solid black;
  background-color: ${props => props.tileData.bgColor};
`
export default TileStyled;
