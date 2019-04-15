import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TestRenderer from 'react-test-renderer';
import AddCar from './components/AddCar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a snapshot', () => {
  const tree = TestRenderer.create(<AddCar/>).toJSON();
  expect(tree).toMatchSnapshot();
});
