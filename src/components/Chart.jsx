import React, {useState, useEffect} from 'react';
import Container from './Container';
import ChartTitle from './ChartTitle';
import Seperation from './Seperation';
import Total from './Total';

const Chart = () => {
    const [days, setDays] = useState();
    const [mon, setMon] = useState();
    const [monAmount, setMonAmount] = useState('100');
    const test = [
    'h-[1%]', 'h-[2%]', 'h-[3%]', 'h-[4%]', 'h-[5%]', 'h-[6%]', 'h-[7%]', 'h-[8%]', 'h-[9%]', 'h-[10%]', 
    'h-[11%]', 'h-[12%]', 'h-[13%]', 'h-[14%]', 'h-[15%]', 'h-[16%]', 'h-[17%]', 'h-[18%]', 'h-[19%]', 'h-[20%]', 
    'h-[21%]', 'h-[22%]', 'h-[23%]', 'h-[24%]', 'h-[25%]', 'h-[26%]', 'h-[27%]', 'h-[28%]', 'h-[29%]', 'h-[30%]', 
    'h-[31%]', 'h-[32%]', 'h-[33%]', 'h-[34%]', 'h-[35%]', 'h-[36%]', 'h-[37%]', 'h-[38%]', 'h-[39%]', 'h-[40%]', 
    'h-[41%]', 'h-[42%]', 'h-[43%]', 'h-[44%]', 'h-[45%]', 'h-[46%]', 'h-[47%]', 'h-[48%]', 'h-[49%]', 'h-[50%]', 
    'h-[51%]', 'h-[52%]', 'h-[53%]', 'h-[54%]', 'h-[55%]', 'h-[56%]', 'h-[57%]', 'h-[58%]', 'h-[59%]', 'h-[60%]', 
    'h-[61%]', 'h-[62%]', 'h-[63%]', 'h-[64%]', 'h-[65%]', 'h-[66%]', 'h-[67%]', 'h-[68%]', 'h-[69%]', 'h-[70%]', 
    'h-[71%]', 'h-[72%]', 'h-[73%]', 'h-[74%]', 'h-[75%]', 'h-[76%]', 'h-[77%]', 'h-[78%]', 'h-[79%]', 'h-[80%]', 
    'h-[81%]', 'h-[82%]', 'h-[83%]', 'h-[84%]', 'h-[85%]', 'h-[86%]', 'h-[87%]', 'h-[88%]', 'h-[89%]', 'h-[90%]', 
    'h-[91%]', 'h-[92%]', 'h-[93%]', 'h-[94%]', 'h-[95%]', 'h-[96%]', 'h-[97%]', 'h-[98%]', 'h-[99%]', 'h-[100%]'
]

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
