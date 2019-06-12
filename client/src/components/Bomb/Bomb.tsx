import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TILE_SIZE } from '../../config/constants';
import { explodeBomb, removeBomb } from './actions';
import ExplosionGroup from './ExplosionGroup';

interface BombProps {
    removeBomb?;
    explodeBomb?;
    bomb?;
    id?;
}
const bombTimer = 1000;
const explosionTimer = 500
class Bomb extends Component<BombProps> {
    componentDidMount() {
        // trigger timeout
        setTimeout(() => {
            this.props.explodeBomb(this.props.id)
        }, bombTimer)
    }
    componentDidUpdate(props) {
        setTimeout(() => {
            props.removeBomb(props.id)
        }, explosionTimer)
    }
    render() {
        return (
            (!this.props.bomb.exploded) ? (
                <div
                    style={{
                        position: 'relative',
                        top: this.props.bomb.position[0] * TILE_SIZE + 10,
                        left: this.props.bomb.position[1] * TILE_SIZE + 20,
                        height: `${0}px`,
                        width: `${0}px`
                    }}>
                    O
                </div>)
            :
            <ExplosionGroup bomb={this.props.bomb}></ExplosionGroup>
            
        );
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    explodeBomb: (id) => dispatch(explodeBomb(id)),
    removeBomb: (id) => dispatch(removeBomb(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Bomb)
