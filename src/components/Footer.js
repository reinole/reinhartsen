import React, { Component } from 'react';
import styled from 'styled-components';

export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <ExternalLink href="https://github.com/reinole">Github</ExternalLink>
      </FooterContainer>
    );
  }
}

const FooterContainer = styled.div`
  height: 5rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: orange;
`;

const ExternalLink = styled.a``;

const Text = styled.p``;

/*
  Linker: 
  - Github
  - LinkedIn


*/
