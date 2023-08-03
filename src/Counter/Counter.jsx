import { useState } from 'react';
import Button from '../Button.js'


const Counter = () => {
    const [count, setCount] = useState(0); 

    const handlePlusClick =() => {
        
        setCount(count+1)
    };
    const handleMinusClick =() =>{
        
        if (count > 0){
            setCount(count-1)
        }

    };
    const Reset =() => {
        setCount(count = 0)
    }

    return (
        <div> 
            <h1>Counter</h1> 
            <div 
            style={{
                display:'flex',
                gap:'16px',
                alignItems:'Center',
                margin:'0 auto',
                width:'300px',
            }}   className = 'counter_container'>
                
                <Button onClick ={handleMinusClick}  > </Button>
        <div> {count} </div>
            <Button  onClick ={handlePlusClick} ></Button>

            <Button  onClick ={Reset} >
                <img src="https://cdn.techmesto.com/wp-content/uploads/2015/09/reset-button2.png" alt="" />
            </Button>
            </div>
    </div>
);
};



export default Counter;