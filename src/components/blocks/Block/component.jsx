import React from 'react';
import pt from 'prop-types';
import { withStyles, Paper } from '@material-ui/core';

import styles from './styles';

/**
 * Wrapper for Material-UI Paper component. Used for styles standartization.
 */
const Block = ({ children, classes }) => (
  <Paper className={classes.block}>{children}</Paper>
);

Block.propTypes = {
  children: pt.node.isRequired,
  classes: pt.shape({}).isRequired,
};

export default withStyles(styles)(Block);
