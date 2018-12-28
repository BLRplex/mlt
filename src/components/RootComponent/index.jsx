import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxToastr, { toastr } from 'react-redux-toastr';

import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

import { requestUsers } from '@/actions/users';
import store from '@/store';
import Router from '@/router';
import themeObject from '@/theme';

const theme = createMuiTheme(themeObject);

class App extends Component {
  componentDidMount() {
    // This data used in all application pages,
    // it make sense to move the request to parent element
    store
      .dispatch(requestUsers())
      .catch(error => toastr.error(error.message, 'Service is unavailable'));
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <Router />
          <ReduxToastr
            timeOut={8000}
            newestOnTop={false}
            preventDuplicates
            position="top-right"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick
          />
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
