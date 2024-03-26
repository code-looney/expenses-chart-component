import React, {useState, useEffect} from 'react';
import Container from './Container';
import ChartTitle from './ChartTitle';
import Seperation from './Seperation';
import Total from './Total';

const Chart = () => {
    const [days, setDays] = useState();
    const [mon, setMon] = useState();
    const [monAmount, setMonAmount] = useState();
    const [amount, setAmount] = useState();
    const height = ['h-[17%]']
    // '34.91', '52.36', '31.07', '23.39', '43.28', '25.48', '23.39', 'h-[100%]

    useEffect(() => {
        fetch(`./data.json`)
        .then(res => res.json())
        .then(data => {
            setMon(data[0].day)
            setMonAmount(JSON.stringify(data[0].amount))
        })
    }, []) 

    // { Avoid This Tailwind Mistake (Dynamic Classes) }

  return (
    <Container className={`bg-white h-96 rounded-xl grid place-content-center`}>
        <Container className={`w-[340px] h-[340px] flex flex-col gap-3`}>
            <ChartTitle className={`text-[26px] text-chart-font-color tracking-wide font-medium`}>Spending - Last 7 days</ChartTitle>
            <Container className={`h-[280px] gap-5 flex flex-col justify-end`}>                
                <Container className={`outline flex items-end justify-center h-[100%]`}>
                    <ul className={`flex flex-col justify-end items-center text-[12px] h-[100%] font-thin`}>
                         {/* {days && days.map(amount => <li>{console.log(amount.amount)}</li>)} */}
                        
                         {mon &&  <li className='flex flex-col items-center'>{monAmount}</li>}
                         <li className='bg-black w-8 h-[1%] rounded-sm'></li>
                                    <li>{mon}</li>
                    </ul>
                </Container>
                <Container>
                    <Seperation />
                </Container>
                <Total />
            </Container>
        </Container>
    </Container>
  )
}

export default Chart
