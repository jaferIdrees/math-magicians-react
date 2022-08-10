import calculate from '../logic/calculate';

describe('Test calc operations', () => {
  it('Assert the sum of one and two is equal to three', () => {
    expect(() => {
      calculate({
        total: 0,
        next: 2,
        operation: '+',
      }, 1)
        .total.toBe(3);
    });
  });

  it('Assert the substraction of 6 minus 3 is equal to 3', () => {
    expect(() => {
      calculate({
        total: 0,
        next: 6,
        operation: '-',
      }, 3)
        .total.toBe(3);
    });
  });

  it('Assert the product of 6 times 3 is equal to 18', () => {
    expect(() => {
      calculate({
        total: 0,
        next: 6,
        operation: 'x',
      }, 3)
        .total.toBe(3);
    });
  });

  it('Assert the product of 6 divide 3 is equal to 2', () => {
    expect(() => {
      calculate({
        total: 0,
        next: 6,
        operation: '÷',
      }, 3)
        .total.toBe(2);
    });
  });
});
