import React, { useState } from 'react';
import Container from './Container';
import Title from './Title';
import Currency from './Currency';
import Logo from './Logo';

const MyBalance = () => {
 
  return (
    <Container className={`bg-sub flex items-center justify-center w-[350px] md:w-[400px] h-24 rounded-xl`}>
        <Container className={`w-full px-5 flex justify-between items-center text-white `}>
          <Container>
            <Title className={`font-light`}>My balance</Title>
            <Currency className={`text-[24px] font-medium`}>$921.48</Currency>
          </Container>
          <Container>
            <Logo />
          </Container>
        </Container>
    </Container>
  )
}

export default MyBalance