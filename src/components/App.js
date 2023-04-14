import React, { useState, useCallback } from 'react';
import '../styles/App.css';

const isArmstrongNumber = (num) => {
  console.log('Expensive calculation execution');
  const digits = num.toString().split('');
  const numDigits = digits.length;
  let sum = 0;
  digits.forEach((digit) => {
    sum += Math.pow(parseInt(digit), numDigits);
  });
  return sum === num;
};

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [isArmstrong, setIsArmstrong] = useState(false);
  const [count, setCount] = useState(0);

  const onInputChange = useCallback((event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    setIsArmstrong(isArmstrongNumber(parseInt(newValue)));
  }, []);

  const onHeaderClick = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <div id="main">
      <h1 id="count" onClick={onHeaderClick}>
        {count}
      </h1>
      <div>
        <input id="input" type="text" value={inputValue} onChange={onInputChange} />
        <p>{isArmstrong ? 'Armstrong Number' : 'Not an Armstrong Number'}</p>
      </div>
    </div>
  );
};

export default App;
