import React from 'react';
import pt from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';

import styles from './styles';

/**
 * Component that displays static error message.
 * @param {object} props.classes Classes object.
 */
const NetworkError = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant="h4">Sorry, something went wrong</Typography>
    <Typography variant="h5">The website is currently unavailable, please try later...</Typography>
  </div>
);

NetworkError.propTypes = {
  classes: pt.shape({}).isRequired,
};

export default withStyles(styles)(NetworkError);
