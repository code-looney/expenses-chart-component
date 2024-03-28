import React, {useState, useEffect} from 'react';
import Container from './Container';
import ChartTitle from './ChartTitle';
import Seperation from './Seperation';
import Total from './Total';

const Chart = () => {
    const [days, setDays] = useState();
    const [amount, setAmount] = useState();
    const [hover, setHover] = useState();
    const height = ['h-[17.45%]', 'h-[34.91%]', 'h-[52.36%]', 'h-[31.07%]', 'h-[23.39%]', 'h-[43.28%]', 'h-[25.48%]', 'h-[23.39%]'];

    const test = '100%'

    useEffect(() => {
        fetch(`./data.json`)
        .then(res => res.json())
        .then(data => {
            setDays(data)
            data.map(amount => {
                setAmount(amount.amount)
            })
        })
    }, []) 


    function handleGraphsAmountHover(index) {
            setAmount(index)
            setHover(index)
            
        }

    function handleGraphsAmountLeave() {
            setAmount('')
            setHover('')
            
        }

    // { Avoid This Tailwind Mistake (Dynamic Classes) }

  return (
    <Container className={`bg-white w-full h-96 rounded-xl grid place-content-center`}>
        <Container className={`w-full h-[340px] flex flex-col gap-3`}>
            <ChartTitle className={`text-[26px] text-chart-font-color tracking-wide font-medium`}>Spending - Last 7 days</ChartTitle>
            <Container className={`h-[280px] gap-5 flex flex-col justify-end `}>                
                <Container className={`flex items-end justify-center h-[100%]`}>
                    <ul className={`flex justify-end items-end gap-4 text-[12px] h-[100%] font-thin`}>
                         {/* {days && days.map(amount => <li>{console.log(amount.amount)}</li>)} */}
                        
                         {days && days.map((day, index) => {
                            return (
                                <li className={`text-[10px] h-[100%] cursor-pointer`} key={index}>
                                    <div className={`flex flex-col h-[100%] gap-1 items-center justify-end w-7 md:w-9`}>
                                        <div className={`bg-black text-white text-[10px] font-semibold flex items-center justify-center rounded ${hover !== index ? 'hidden' : 'block w-11 h-8'}`} // This is the currency
                                        onMouseLeave={() => handleGraphsAmountLeave(index)} 
                                        onMouseEnter={() => handleGraphsAmountHover(index)}>${day.amount}</div> {/* make event */}
                                        <div 
                                        onMouseLeave={() => handleGraphsAmountLeave(index)} 
                                        onMouseEnter={() => handleGraphsAmountHover(index)} 
                                        className={`${index === 2 ? 'bg-graph hover:opacity-75 ' : 'bg-sub hover:opacity-75 '} w-8 md:w-10 h-[${day.amount}%] rounded`}></div>
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