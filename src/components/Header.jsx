import React from 'react';
import Container from './Container';
import Title from './Title';
import Sub from './Sub';

const Header = () => {
  return (
    <Container className={`bg-header flex`}>
        <Title>My balance</Title>
        <Sub>$921.48</Sub>
    </Container>
  )
}

export default Header