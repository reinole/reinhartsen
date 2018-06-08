import React, { Component } from 'react';
import styled from 'styled-components';
import ProfileImage from '../utils/images/Ole-christian-ludens.jpg';

const MenuBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 17rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.brown};
  padding-top: 2rem;
  z-index: 5;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 70%;
  margin-bottom: 1rem;
`;

const Name = styled.p`
  color: ${props => props.theme.light};
`;

const Occupation = styled.p`
  margin-top: 0;
  color: ${props => props.theme.light};
`;

export default class Menu extends Component {
  state = {};

  render() {
    return (
      <MenuBar>
        <Name>Ole Christian Reinhartsen</Name>
        <Occupation>Webutvikler</Occupation>
        <Image src={ProfileImage} />
      </MenuBar>
    );
  }
}
