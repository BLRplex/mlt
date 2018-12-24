/* global it document */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  // eslint-disable-next-line
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
