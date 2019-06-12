import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { resetBoard } from '../../actions/grid'
import GridRow from '../GridRow/GridRow';

const GridStyled = styled.div`
  display: flex;
  flex-direction: column;
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
            return <GridRow key={index} rowData={row}></GridRow>
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
