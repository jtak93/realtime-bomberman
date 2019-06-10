import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { resetBoard } from '../../actions/grid'

const GridStyled = styled.div`
  background: lightgray;
  height: 600px;
  width: 800px;
  margin: 20px auto;
`;

interface GridProps {
  grid: []
}

export class Grid extends Component<GridProps> {
    componentDidMount() {
      console.log('grid mounted', this.props)
    }

    render() {
        return (
        <GridStyled>
          {this.props.grid.map((row, index) => {
            return <div key={index}>{row}</div>
          })}
        </GridStyled>
        );
    }
}


const mapStateToProps = state => ({
  grid: state.grid
})

const mapDispatchToProps = dispatch => ({
  resetBoard: () => dispatch(resetBoard())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid)
