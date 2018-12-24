import React from 'react';
import pt from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  pageContainer: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
  },
});

const Page = ({
  children,
  className,
  classes,
  ...rest
}) => (
  <div className={classNames(classes.pageContainer, className)} {...rest}>
    {children}
  </div>
);

Page.propTypes = {
  children: pt.node.isRequired,
};


export default withStyles(styles)(Page);
