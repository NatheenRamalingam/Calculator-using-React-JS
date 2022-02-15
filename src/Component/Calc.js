import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Calc=(props)=> {

    const[result,setResult] = useState('');



    const handleClick = (e)=>{
        setResult(result + (e.target.name));
    }

    const calculate = ()=>{
        try {
            setResult(eval(result))
            toast.success("Thanks for Using Calculator");
        } catch (err) {
            toast.error("Invalid calculation...!");
            Clear()
        }
       
    }

    const Clear = ()=>{
        setResult('')
    }
    const backspace = ()=>{
        setResult(result.slice(0,-1))
    }
  return(
    <div>
         <h1>Calculator using React JS</h1>
        <div className="container">
       
            <div className="calculator">
               
                <input type="text" value={result} placeholder='0'/>
                <button name='Clear' onClick={Clear}>CE</button>
                <button name='C' onClick={backspace}>C</button>
                <button name='1' onClick={(e)=>handleClick(e)}>1</button>
                <button name='2' onClick={(e)=>handleClick(e)}>2</button>
                <button name='3' onClick={(e)=>handleClick(e)}>3</button>
                <button name='4' onClick={(e)=>handleClick(e)}>4</button>
                <button name='5' onClick={(e)=>handleClick(e)}>5</button>
                <button name='6' onClick={(e)=>handleClick(e)}>6</button>
                <button name='7' onClick={(e)=>handleClick(e)}>7</button>
                <button name='8' onClick={(e)=>handleClick(e)}>8</button>
                <button name='9' onClick={(e)=>handleClick(e)}>9</button>
                <button name='0' onClick={(e)=>handleClick(e)}>0</button>
                <button name='+' onClick={(e)=>handleClick(e)}>+</button>
                <button name='-' onClick={(e)=>handleClick(e)}>-</button>
                <button name='*' onClick={(e)=>handleClick(e)}>*</button>
                <button name='/' onClick={(e)=>handleClick(e)}>/</button>
                <button name='%' onClick={(e)=>handleClick(e)}>%</button>
                <button name='=' onClick={calculate} className='equal'>=</button>

            </div>
        </div>

    </div>
  )
}
export default Calc;