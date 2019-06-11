import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Grid from '../Grid/Grid';
import Player from '../Player/Player';

const WorldStyled = styled.div`
  height: 600px;
  width: 800px;
  margin: 20px auto;
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
