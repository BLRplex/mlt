import React from 'react';
import pt from 'prop-types';
import { Link } from 'react-router-dom';
import { AppBar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import QuickSearch from '../../forms/QuickSearch';
import { LANDING_PAGE } from '../../../constants';

const styles = theme => ({
  headerContainer: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
  },
  headerLayout: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: 'inherit',
    textDecoration: 'none',
  },
});

const Header = ({ classes }) => (
  <header>
    <AppBar position="static" className={classes.headerContainer}>
      <div className={classes.headerLayout}>
        <Typography variant="h6" color="inherit">
          <Link to={LANDING_PAGE} className={classes.title}>Med Lab</Link>
        </Typography>
        <QuickSearch />
      </div>
    </AppBar>
  </header>
);

Header.propTypes = {
  classes: pt.shape({}).isRequired,
};

export default withStyles(styles)(Header);
