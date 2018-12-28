import React from 'react';
import pt from 'prop-types';

import { withStyles } from '@material-ui/core';

import { extractProfileDetails } from '@/helpers/users';
import { UserPropType } from '@/propTypes';

import styles from './styles';

/**
 * Component that displays extra information of user profile.
 * @param {object} props.user User object.
 * @param {object} props.classes Classes object.
 */
const ProfileDetails = ({ user, classes }) => (
  <div className={classes.root}>
    {extractProfileDetails(user).map(field => (
      <p key={`field-${field.label}`}>
        <strong className={classes.strong}>
          {field.label}
          {': '}
        </strong>
        {field.value}
      </p>
    ))}
  </div>
);

ProfileDetails.propTypes = {
  user: pt.shape(UserPropType).isRequired,
  classes: pt.shape({}).isRequired,
};

export default withStyles(styles)(ProfileDetails);
