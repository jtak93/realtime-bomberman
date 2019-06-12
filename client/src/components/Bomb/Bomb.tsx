import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TILE_SIZE } from '../../config/constants';

interface BombProps {
    data?
}

export class Bomb extends Component<BombProps> {
    render() {
        console.log("bomb", this.props)
        return (
            <div
                style={{
                    position: 'relative',
                    top: this.props.data.position[0] * TILE_SIZE + 10,
                    left: this.props.data.position[1] * TILE_SIZE + 20,
                    height: `${0}px`,
                    width: `${0}px`
                }}>
                O
            </div>
        );
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Bomb)
