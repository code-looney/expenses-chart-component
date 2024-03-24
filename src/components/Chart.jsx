import React, {useState, useEffect} from 'react';
import Container from './Container';
import ChartTitle from './ChartTitle';
import Seperation from './Seperation';

const Chart = () => {
  return (
    <Container className={`bg-white h-96 rounded-xl grid place-content-center`}>
        <Container className={`w-[340px] h-[340px] flex flex-col gap-3`}>
            <ChartTitle className={`text-[26px] text-chart-font-color tracking-wide font-medium`}>Spending - Last 7 days</ChartTitle>
            <Container className={`h-48 gap-5 flex flex-col justify-end`}>

                {/* api */}
                <Container>
                    <Seperation />
                </Container>
            </Container>
        </Container>
    </Container>
  )
}

export default Chart
