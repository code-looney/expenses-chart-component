import React, { useEffect, useState } from 'react';
import TotalTitle from './TotalTitle';
import Container from './Container';
import Currency from './Currency';
import Percentage from './Percentage';
import TotalSub from './TotalSub';


const Total = () => {
    const [total, setTotal] = useState();

    useEffect(() => {
        fetch(`./data.json`)
        .then(res => res.json())
        .then(data => {
            let sum = 0;
            data.forEach(item => {
                sum += + item.amount
            })
            setTotal(sum)
        })
    }, [total])

    return  (
         <Container className={`flex justify-between`}>
            <Container>
                <TotalTitle className={`text-[12px] font-thin`}>Total this month</TotalTitle>
                <Currency className={`text-[31px] font-bold`}>$ 478.33</Currency>
            </Container>
            <Container className={`flex flex-col justify-end`}>
                <Container className={`flex justify-end`}>
                    <Percentage className={`text-[12px] font-bold`}>+2.4%</Percentage>
                </Container>
                <TotalSub className={`text-[12px] font-thin`}>from last month</TotalSub>
            </Container>
         </Container>
    )
}

export default Total