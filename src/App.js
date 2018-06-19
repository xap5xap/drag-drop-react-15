import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { colors, grid } from './constants';
import reorder from './reorder';
import AuthorList from './primatives/author-list';


const Root = styled.div`
  padding: ${grid}px;
  background: ${colors.blue.light};
`;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes: props.initial
    };
  }

  onDragStart = (initial) => {
    console.log('onDragStart', initial);
  }

  onDragEnd = (result) => {
    console.log('onDragEnd', result);
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const quotes = reorder(
      this.state.quotes,
      result.source.index,
      result.destination.index
    );

    this.setState({
      quotes,
    });
  }

  render() {
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
      >
        <Root>
          <AuthorList
            listId="AUTHOR"
            internalScroll={this.props.internalScroll}
            quotes={this.state.quotes}
          />
        </Root>
      </DragDropContext>
    );
  }
}

export default App;
