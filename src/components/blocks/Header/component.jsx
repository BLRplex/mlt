import React from 'react';
import pt from 'prop-types';
import { Link } from 'react-router-dom';
import { AppBar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import QuickSearch from '@/components/forms/QuickSearch';
import { LANDING_PAGE } from '@/constants';

import styles from './styles';

/**
 * Header component.
 * @param {object} props.classes Classes object.
 */
const Header = ({ classes }) => (
  <header>
    <AppBar position="static" className={classes.headerContainer}>
      <div className={classes.headerLayout}>
        <Typography variant="h6" color="inherit" className={classes.titleWrapper}>
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
