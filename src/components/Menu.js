import React, { Component } from 'react';
import styled from 'styled-components';

export default class Menu extends Component {
  render() {
    return (
      <MenuContainer>
        <MenuItem href="/">Reinhartsen</MenuItem>
        <MenuItem href="#">MenuItem</MenuItem>
      </MenuContainer>
    );
  }
}

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const MenuItem = styled.a`
  margin: 1rem;
  text-decoration: none;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  transition: box-shadow 0.1s ease-in;

  &:hover {
    box-shadow: 1px 2px 3px 0px rgba(161, 146, 161, 1);
  }
`;
