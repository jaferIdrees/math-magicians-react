import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

describe('Calculator component testing using snapshots', () => {
  it('Test Calculator component renders', () => {
    const tree = renderer
      .create(<Calculator />);
    expect(tree).toMatchSnapshot();
  });
});
