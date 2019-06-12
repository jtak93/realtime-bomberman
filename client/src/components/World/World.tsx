import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '../Grid/Grid';
import Player from '../Player/Player';
import { ROWS, COLS, TILE_SIZE } from '../../config/constants';
import { Bomb } from '../Bomb/Bomb';


interface WorldProps {
    bombs?
}

export class World extends Component<WorldProps> {

    render() {
        console.log("world props", this.props)
        return (
            <div
                style={{
                    height: `${ROWS * TILE_SIZE}px`,
                    width: `${COLS * TILE_SIZE}px`,
                    margin: '10px auto'
                }}>
                <Player></Player>
                {this.props.bombs.map((bomb, idx) =>{
                    return <Bomb key={idx} data={bomb}></Bomb>
                })}
                <Grid>
                </Grid>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    bombs: state.bombs
})

const mapDispatchToProps = dispatch => ({
    resetBoard: () => dispatch()
})
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(World)
