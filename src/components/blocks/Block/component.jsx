import React from 'react';
import pt from 'prop-types';
import { withStyles, Paper } from '@material-ui/core';

const styles = theme => ({
  block: {
    padding: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    '&:last-child': {
      marginBottom: 0,
    },
  },
});

const Block = ({ children, classes }) => (
  <Paper className={classes.block}>{children}</Paper>
);

Block.propTypes = {
  children: pt.node.isRequired,
  classes: pt.shape({}).isRequired,
};

export default withStyles(styles)(Block);
