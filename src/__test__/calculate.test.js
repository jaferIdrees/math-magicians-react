import calculate from '../logic/calculate';

describe('Test calc operations', () => {
  it('Assert the sum of one and two is equal to three', () => {
    expect({
      ...calculate({
        total: 2,
        next: 1,
        operation: '+',
      }, '='),
    }.total).toBe('3');
  });

  it('Assert the substraction of 6 minus 3 is equal to 3', () => {
    expect({
      ...calculate({
        total: '6',
        next: '3',
        operation: '-',
      }, '='),
    }.total).toBe('3');
  });

  it('Assert the product of 6 times 3 is equal to 18', () => {
    expect({
      ...calculate({
        total: '6',
        next: '3',
        operation: 'x',
      }, '='),
    }.total).toBe('18');
  });

  it('Assert the product of 6 divide 3 is equal to 2', () => {
    expect({
      ...calculate({
        total: '6',
        next: '3',
        operation: '÷',
      }, '='),
    }.total).toBe('2');
  });
});
