import calculate from '../logic/calculate';

describe('Test plus operation', () => {
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
});
