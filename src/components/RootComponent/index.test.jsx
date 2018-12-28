/* global it describe document */

import React from 'react';
import ReactDOM from 'react-dom';
import RootComponent from './index';

describe('Application Root Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<RootComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
