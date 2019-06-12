import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import handleMovement from './movement'
import { TILE_SIZE } from '../../config/constants';

interface PlayerProps {
    position?
}

export class Player extends Component<PlayerProps> {
    render() {
        console.log(this.props)
        return (
            <div
                style={{
                    position: 'relative',
                    top: this.props.position[0] * TILE_SIZE + 50,
                    left: this.props.position[1] * TILE_SIZE,
                    height: '50px',
                    width: '50px'
                }}>
                (o_o)
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state.players[0]
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(handleMovement(Player))
