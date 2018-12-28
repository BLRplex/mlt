import React from 'react';
import pt from 'prop-types';

import { withStyles, LinearProgress } from '@material-ui/core';

import Header from '@/components/blocks/Header';

const styles = theme => ({
  '@global': {
    body: {
      fontFamily: theme.typography.fontFamily,
    },
  },
});

const BasicLayout = ({ children, isLoading }) => (
  <React.Fragment>
    <Header />
    <nav className="filters" />
    <section className="container">
      {isLoading && (
        <LinearProgress color="primary" />
      )}
      {children}
    </section>
  </React.Fragment>
);

BasicLayout.propTypes = {
  children: pt.node.isRequired,
  isLoading: pt.bool.isRequired,
};

export default withStyles(styles)(BasicLayout);
