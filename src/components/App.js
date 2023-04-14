import React, { useState, useMemo } from 'react'
import '../styles/App.css';


const isArmstrongNumber = (number) => {
  console.log("Expensive calculation execution");
  const numberOfDigits = `${number}`.length;
  let sum = 0;
  let temp = number;
  while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder ** numberOfDigits;
    temp = parseInt(temp / 10);
   }
  return sum === number;
};
const App = () => {
  const [num, setNum] = useState('');
  const [count, setCount] = useState(1);
  const isArmstrong = isArmstrongNumber(num);
 
  return (
    <div className="App">
      <input id='input' value={num} onChange={(e) => setNum(+e.target.value)}/>
      <h2 id='answer'>{num ? (isArmstrong ? `${num} is armstrong` : `${num} is not armstrong`) : `Please Enter Number `}</h2>
      <h4 id='count'onClick={() => { setCount((count) => count + 1);}}>
        Click me to increase count:-  {count}
      </h4>

    </div>
  );
}


export default App;
