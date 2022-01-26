import React, { useState } from 'react';

export default function Assignment1() {

    const[toSelect,settoSelect]=useState(1);
    const[fromSelect,setfromSelect] = useState(1);
    const[outputData , setoutputData] = useState(0);
    const[inputData, setinputData] = useState(0);
    function getData(val){
        setinputData(val.target.value)
    }
    function s1(e){
        settoSelect(e.target.value);
    }
    function s2(e){
        setfromSelect(e.target.value);
    }
    function processing(){

        if(toSelect ==fromSelect){
            setoutputData(inputData);
        }
        else{
            if(fromSelect==2 && toSelect==1)
            {
              setoutputData(inputData*0.013);
            }
            if(fromSelect==1 && toSelect==2)
            {
              setoutputData(inputData/0.013);
            }
            if(fromSelect==3 && toSelect==1)
            {
              setoutputData(inputData*0.012);
            } 
            if(fromSelect==1 && toSelect==3)
            {
              setoutputData(inputData/0.012);
            }
            if(fromSelect==3 && toSelect==2)
            {
              setoutputData(inputData*0.88);
            }
            if(fromSelect==2 && toSelect==3)
            {
              setoutputData(inputData/0.88);
            }
          }


    }

  return (<div>

&nbsp;&nbsp;&nbsp;&nbsp;Enter a number &nbsp;&nbsp;&nbsp;&nbsp;
<input type="number" value ={inputData} onChange={getData} />&nbsp;&nbsp;&nbsp;&nbsp;
      <select id ="to" value={toSelect} onChange={s1}>
            <option value="1"> INR </option>
            <option value="2"> USD </option>
            <option value="3"> EUR </option>
      </select>
      &nbsp;&nbsp;&nbsp;
      <select id ="from" value={fromSelect} onChange={s2}>
            <option value="1"> INR </option>
            <option value="2"> USD </option>
            <option value="3"> EUR </option>
      </select>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <input type="number" value={outputData} disabled/>
      <br></br><br></br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
      <button type='button' onClick={processing}>Convert</button>
  </div>);
}


