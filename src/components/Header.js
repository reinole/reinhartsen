import React, { Component } from 'react';
import styled from 'styled-components';
import ProfileImage from '../utils/images/Ole-christian-ludens.jpg';
import CompanyLogo from '../utils/images/ludensLogo.png';

export default class Header extends Component {
  render() {
    return (
      <Container>
        <UpperContainer>
          <Image src={ProfileImage} />
          <TextContainer>
            <Name>Ole Christian </Name>
            <Name>Reinhartsen</Name>
          </TextContainer>
        </UpperContainer>
        <ProfessionContainer>
          <Profession>Front-end developer at </Profession>
          <Logo src={CompanyLogo} />
        </ProfessionContainer>
      </Container>
    );
  }
}

const UpperContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: 0;
  left: 0;
  top: 0;
`;

const Name = styled.h1`
  margin-left: 4rem;

  @media screen and (max-width: 600px) {
    margin-left: 0;
  }
`;

const ProfessionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Profession = styled.h2`
  text-align: center;
`;

const Logo = styled.img`
  width: auto;
  height: 2rem;

  margin-left: 4rem;

  @media screen and (max-width: 600px) {
    margin-left: 0;
  }
`;

const TextContainer = styled.div`
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`;

const Image = styled.img`
  height: 175px;
  width: auto;
  border-radius: 50%;
`;
