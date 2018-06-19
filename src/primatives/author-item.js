import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { colors, grid } from '../constants';

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: ${grid}px;
  border-color: ${({ isDragging }) => (isDragging ? colors.green : colors.white)};
  border-style: solid;
  border-width: ${grid}px;
  box-shadow: ${({ isDragging }) => (isDragging ? `2px 2px 1px ${colors.shadow}` : 'none')};

  &:focus {
    /* disable standard focus color */
    outline: none;

    /* use our own awesome one */
    border-color: ${({ isDragging }) => (isDragging ? colors.green : colors.blue.deep)};
  }
`;

export default class AuthorItem extends Component {
    componentDidMount() {
        if (!this.props.autoFocus) {
            return;
        }

        const node = ReactDOM.findDOMNode(this);
        node.focus();
    }

    render() {
        const author = this.props.author;
        const provided = this.props.provided;
        const snapshot = this.props.snapshot;

        return (
            <Avatar
                innerRef={ref => provided.innerRef(ref)}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                src={author.avatarUrl}
                alt={author.name}
                isDragging={snapshot.isDragging}
            />
        );
    }
}
