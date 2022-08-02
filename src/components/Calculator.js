import React from 'react';

function CalculatorKey(props) {
  const props1 = { ...props };
  return (<input type="button" className={(Number(props1.value) > 0) ? 'number' : 'key'} value={props1.value} />);
}

const resultElement = <input type="number" className="result" value="0" disabled />;

class Calculator extends React.Component {
  keys = ['AC', '+/-', '%', '÷',
    7, 8, 9, 'x',
    4, 5, 6, '-',
    1, 2, 3, '+',
    0, '.', '='];

  keysElements = this.keys.map((key) => (<CalculatorKey value={key} key={key.toString()} />));

  render() {
    return (
      <div className="calculatorContainer">
        {resultElement}
        {this.keysElements}
      </div>
    );
  }
}

export default Calculator;
