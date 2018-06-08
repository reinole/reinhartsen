import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  height: 15rem;
  background-color: red;
`;

class Home extends Component {
  render() {
    return <Header />;
  }
}

export default Home;
