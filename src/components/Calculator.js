import React, { useState } from 'react';
import calculate from '../logic/calculate';

const keys = ['AC', '+/-', '%', '÷',
  7, 8, 9, 'x',
  4, 5, 6, '-',
  1, 2, 3, '+',
  0, '.', '='];

function CalculatorKey(props) {
  const props1 = { ...props };
  return (<input type="button" onClick={props1.clickHandler} className={(Number(props1.value) > 0) ? 'number' : 'key'} value={props1.value} />);
}

function keysElements(clickHandler) {
  return (keys.map((key) => (
    <CalculatorKey value={key} key={key.toString()} clickHandler={clickHandler} />)));
}

function Calculator() {
  const initialData = {};
  const [calculatorData, doCalculate] = useState(initialData);
  const clickHandler = (e) => {
    doCalculate((calculatorData) => calculate(calculatorData, e.target.value));
  };
  const keys = keysElements(clickHandler);
  const { next, total } = calculatorData;
  return (
    <div className="calculatorContainer">
      <input type="text" className="result" value={next || total || 0} disabled />
      {keys}
    </div>
  );
}

export default Calculator;
