import operate from '../logic/operate';

describe('Test operations', () => {
  it('Assert the sum of two and two is equal to four', () => {
    expect(() => {
      operate(2, 2, '+').total.toBe(4);
    });
  });

  it('Assert the substraction of two and two is equal to zero', () => {
    expect(() => {
      operate(2, 2, '-').total.toBe(0);
    });
  });

  it('Assert the product of two times two is equal to four', () => {
    expect(() => {
      operate(2, 2, 'x').total.toBe(4);
    });
  });

  it('Assert the product of two divide zero is equal to error', () => {
    expect(() => {
      operate(2, 0, '÷').total.toMatchObject(Number);
    });
  });
});
