import React, {useState, useEffect} from 'react';
import Container from './Container';
import ChartTitle from './ChartTitle';
import Seperation from './Seperation';
import Total from './Total';

const Chart = () => {
    const [days, setDays] = useState();
    const [amount, setAmount] = useState();
    const [mon, setMon] = useState();
    const [monAmount, setMonAmount] = useState();
    const height = ['h-[17.45%]', 'h-[34.91%]', 'h-[52.36%]', 'h-[31.07%]', 'h-[23.39%]', 'h-[43.28%]', 'h-[25.48%]', 'h-[23.39%]'];

    useEffect(() => {
        fetch(`./data.json`)
        .then(res => res.json())
        .then(data => {
            setDays(data)
            // setMon(data[0].day)
            // setMonAmount(JSON.stringify(data[0].amount))
        })
    }, []) 

    // { Avoid This Tailwind Mistake (Dynamic Classes) }

  return (
    <Container className={`bg-white h-96 rounded-xl grid place-content-center`}>
        <Container className={`w-[340px] h-[340px] flex flex-col gap-3`}>
            <ChartTitle className={`text-[26px] text-chart-font-color tracking-wide font-medium`}>Spending - Last 7 days</ChartTitle>
            <Container className={`h-[280px] gap-5 flex flex-col justify-end`}>                
                <Container className={`outline flex items-end justify-center h-[100%]`}>
                    <ul className={`flex justify-end items-center text-[12px] h-[100%] font-thin`}>
                         {/* {days && days.map(amount => <li>{console.log(amount.amount)}</li>)} */}
                        
                         {days && days.map((day, index) => {
                            return (
                                <li key={index}>
                                    <div>
                                        <div className='flex flex-col items-center'>{monAmount}</div>
                                        <div className={`bg-black w-8 h-[${monAmount}%] rounded-sm`}></div>
                                        <div>{day.day}</div>
                                    </div>
                                </li>
                            )
                         })}

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
