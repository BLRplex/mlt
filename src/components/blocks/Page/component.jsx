import React from 'react';
import pt from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

/**
 * Page component.
 * @param {string} props.className custom class name for wrapping component.
 * @param {object} props.classes Classes object.
 */
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
