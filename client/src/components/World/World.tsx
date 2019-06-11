import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Grid from '../Grid/Grid';
import Player from '../Player/Player';
import { ROWS, COLS, TILE_SIZE } from '../../config/constants';

const WorldStyled = styled.div`
  height: ${ROWS * TILE_SIZE}px;
  width: ${COLS * TILE_SIZE}px;
  margin: 10px auto;
`;

interface WorldProps {}

export class World extends Component<WorldProps> {
    render() {
        return (
            <WorldStyled>
                <Player></Player>
                <Grid></Grid>
            </WorldStyled>
        );
    }
}

export default connect(
    null,
    null
)(WorldStyled)
