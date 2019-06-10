import React, { Component } from 'react';
import styled from 'styled-components';

const GridStyled = styled.div`
  background: lightgray;
  height: 600px;
  width: 800px;
  margin: 20px auto;
`;

export class Grid extends Component<{}> {

    render() {
        return <GridStyled></GridStyled>;
    }
}

export default Grid;