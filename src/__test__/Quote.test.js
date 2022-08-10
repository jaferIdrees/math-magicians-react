import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

describe('Quote component testing using snapshots', () => {
  it('Test Quote component renders', () => {
    const tree = renderer
      .create(<Quote />);
    expect(tree).toMatchSnapshot();
  });
});
