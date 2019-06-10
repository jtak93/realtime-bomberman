import React from 'react';
import GridTile from '../GridTile/GridTile';
import styled from 'styled-components';

const RowStyled = styled.div`
    display: inline-flex;
    width: 100%;
`

interface GridRowProps {
    rowData
}
const GridRow: React.FC<GridRowProps> = (props) => {
    return (
        <RowStyled>
            {props.rowData.map((tile, index) => {
                return <GridTile key={index} tileData={tile}></GridTile>
            })}
        </RowStyled>
    );
}

export default GridRow;
