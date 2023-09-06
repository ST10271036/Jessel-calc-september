import React, { useState } from 'react';

function App() {
  const [firstInput, setFirstInput] = useState('');
  const [secondInput, setSecondInput] = useState('');
  const [selectedOperation, setSelectedOperation] = useState('');
  const [calculationResult, setCalculationResult] = useState('');

  const updateFirstInput = (e) => {
    setFirstInput(e.target.value);
  };

  const updateSecondInput = (e) => {
    setSecondInput(e.target.value);
  };

  const updateSelectedOperation = (e) => {
    setSelectedOperation(e.target.value);
  };

  const calculateResult = () => {
    const firstNumber = Number(firstInput);
    const secondNumber = Number(secondInput);

    switch (selectedOperation) {
      case '+':
        setCalculationResult(firstNumber + secondNumber);
        break;

      case '-':
        setCalculationResult(firstNumber - secondNumber);
        break;

      case '*':
        setCalculationResult(firstNumber * secondNumber);
        break;

      case '/':
        if (secondNumber === 0) {
          setCalculationResult("Cannot divide by zero!");
        } else {
          setCalculationResult(firstNumber / secondNumber);
        }
        break;

      default:
        setCalculationResult("Please select an operation.");
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Simple Calculator</h1>
      <div style={{ margin: '20px' }}>
        <input
          type="text"
          value={firstInput}
          placeholder="Enter first number"
          onChange={updateFirstInput}
        />
        <input
          type="text"
          value={secondInput}
          placeholder="Enter second number"
          onChange={updateSecondInput}
        />
      </div>
      <div style={{ margin: '20px' }}>
        <select value={selectedOperation} onChange={updateSelectedOperation}>
          <option value="">Select operation</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </div>
      <div style={{ margin: '20px' }}>
        <button onClick={calculateResult}>Calculate</button>
      </div>
      <div style={{ margin: '20px' }}>
        <strong>Result: {calculationResult}</strong>
      </div>
    </div>
  );
}


