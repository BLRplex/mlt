import React from 'react';
import pt from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from '../../store';

const ReduxWrapper = ({ children }) => (
  <Provider store={store}>
    <Router>
      {children}
    </Router>
  </Provider>
);

ReduxWrapper.propTypes = {
  children: pt.node.isRequired,
};

export default ReduxWrapper;
