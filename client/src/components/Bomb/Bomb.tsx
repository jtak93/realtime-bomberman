import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TILE_SIZE } from '../../config/constants';
import { explodeBomb } from './actions';

interface BombProps {
    explodeBomb?;
    bomb?;
    id?;
}
const bombTimer = 1000;
class Bomb extends Component<BombProps> {
    componentDidMount() {
        console.log("bomb mounted")
        // trigger timeout
        setTimeout(() => {
            console.log('explode bomb')
            console.log(this.props)
            this.props.explodeBomb(this.props.id)
        }, bombTimer)
    }
    render() {
        console.log("bomb", this.props)
        return (
            <div
                style={{
                    position: 'relative',
                    top: this.props.bomb.position[0] * TILE_SIZE + 10,
                    left: this.props.bomb.position[1] * TILE_SIZE + 20,
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
    explodeBomb: (index) => dispatch(explodeBomb(index))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Bomb)
