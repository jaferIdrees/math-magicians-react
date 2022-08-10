import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator component testing using snapshots', () => {
  it('Test Calculator component renders', () => {
    const tree = renderer
      .create(<Calculator />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Calculator component testing using React testing library', () => {
  it('Test user interaction press 1 plus 1 to be 2', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByTestId('1'));
    fireEvent.click(screen.getByTestId('+'));
    fireEvent.click(screen.getByTestId('1'));
    fireEvent.click(screen.getByTestId('='));
    expect(screen.getByTestId('resultText').value).toBe('2');
  });

  it('Test user interaction press 4 minus 1 to be 3', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByTestId('4'));
    fireEvent.click(screen.getByTestId('-'));
    fireEvent.click(screen.getByTestId('1'));
    fireEvent.click(screen.getByTestId('='));
    expect(screen.getByTestId('resultText').value).toBe('3');
  });

  it('Test user interaction press 3 times 3 to be 9', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByTestId('3'));
    fireEvent.click(screen.getByTestId('x'));
    fireEvent.click(screen.getByTestId('3'));
    fireEvent.click(screen.getByTestId('='));
    expect(screen.getByTestId('resultText').value).toBe('9');
  });

  it('Test user interaction press 9 divide 3 to be 3', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByTestId('9'));
    fireEvent.click(screen.getByTestId('÷'));
    fireEvent.click(screen.getByTestId('3'));
    fireEvent.click(screen.getByTestId('='));
    expect(screen.getByTestId('resultText').value).toBe('3');
  });
});
