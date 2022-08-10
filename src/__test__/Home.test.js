import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

describe('Home component testing using snapshots', () => {
  it('Test Home component renders', () => {
    const tree = renderer
      .create(<Home />);
    expect(tree).toMatchSnapshot();
  });
});
