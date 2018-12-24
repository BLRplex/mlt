import React from 'react';
import pt from 'prop-types';
import { Link } from 'react-router-dom';

import {
  ListItem,
  ListItemText,
  withStyles,
  Avatar,
} from '@material-ui/core';
import { UserPropType } from '../../../propTypes';
import { USER_PAGE, SEARCH_PAGE } from '../../../constants';

const styles = () => ({
  link: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

const UserSearchItem = ({ user, classes }) => (
  <ListItem>
    <Link to={USER_PAGE.replace(':userId', user.id)}>
      <Avatar src={user.thumbnail} />
    </Link>
    <ListItemText
      primary={(
        <Link
          className={classes.link}
          to={USER_PAGE.replace(':userId', user.id)}
          color="inherit"
        >
          {user.name}
        </Link>
      )}
      secondary={user.professions.map((profession, index) => (
        <Link
          key={`profession-${profession}`}
          className={classes.link}
          to={SEARCH_PAGE.replace(':query', profession)}
        >
          {profession}
          {user.professions.length > index + 1 && (', ')}
        </Link>
      ))}
    />
  </ListItem>
);

UserSearchItem.propTypes = {
  user: pt.shape(UserPropType).isRequired,
  classes: pt.shape({}).isRequired,
};

export default withStyles(styles)(UserSearchItem);
