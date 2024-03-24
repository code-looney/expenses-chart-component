import React, { useState } from 'react';
import Container from './Container';
import Title from './Title';
import Sub from './Sub';
import Logo from './Logo';

const MyBalance = () => {
 
  return (
    <Container className={`bg-header flex items-center justify-center w-96 h-24 rounded-xl`}>
        <Container className={`w-[340px] flex justify-between items-center text-white `}>
          <Container>
            <Title className={`font-light`}>My balance</Title>
            <Sub className={`text-[24px] font-medium`}>$921.48</Sub>
            <p></p>
          </Container>
          <Container>
            <Logo />
          </Container>
        </Container>

    </Container>
  )
}

export default MyBalance