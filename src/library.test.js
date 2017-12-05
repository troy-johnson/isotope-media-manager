import React from 'react'
import ReactDOM from 'react-dom'
import Library from './pages/Library'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Library />, div);
});

it('renders a snapshot', () => {
  const tree = renderer.create(<Library/>).toJSON();
  expect(tree).toMatchSnapshot();
});