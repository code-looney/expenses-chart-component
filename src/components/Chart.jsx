import React, {useState, useEffect} from 'react';
import Container from './Container';
import ChartTitle from './ChartTitle';
import Seperation from './Seperation';
import Total from './Total';

const Chart = () => {
    const [days, setDays] = useState();
    const [mon, setMon] = useState();
    const [monAmount, setMonAmount] = useState(100);


    useEffect(() => {
        fetch(`./data.json`)
        .then(res => res.json())
        .then(data => {
            setDays(data)
            setMon(data)
        })
    }, [])


    // useEffect(() => {
    //     fetch(`./data.json`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data[0].amount)
    //     })
    // }, [])

    // { Avoid This Tailwind Mistake (Dynamic Classes) }

  return (
    <Container className={`bg-white h-96 rounded-xl grid place-content-center`}>
        <Container className={`w-[340px] h-[340px] flex flex-col gap-3`}>
            <ChartTitle className={`text-[26px] text-chart-font-color tracking-wide font-medium`}>Spending - Last 7 days</ChartTitle>
            <Container className={`h-[280px] gap-5 flex flex-col justify-end`}>                
                <Container className={`outline flex items-end justify-center h-[${monAmount}%]`}>
                    <ul className='flex gap-7 justify-center text-[12px] font-thin'>
                         {/* {days && days.map(day => <li>{console.log(day.day)}</li>)} */}
                         <li>{days && mon[0].day}</li>               
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
