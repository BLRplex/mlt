import React from 'react';
import pt from 'prop-types';

import { Typography } from '@material-ui/core';

import Block from '../Block';
import AvatarsQueue from '../AvatarsQueue';
import { UserPropType } from '../../../propTypes';
import { extractUsersByNames } from '../../../helpers/users';
import { MAX_ITEMS_IN_SHORT_LIST } from '../../../constants';

const FriendsList = ({ users, currentUser, wrapWithBlock }) => {
  const friends = extractUsersByNames(users.data, currentUser.friends || []);

  if (friends.length === 0) {
    return (null);
  }

  const component = (
    <div>
      <Typography variant="h5">Friends</Typography>
      <AvatarsQueue users={friends} limit={MAX_ITEMS_IN_SHORT_LIST} />
    </div>
  );

  return wrapWithBlock
    ? <Block>{component}</Block>
    : component;
};

FriendsList.propTypes = {
  users: pt.shape({
    data: pt.arrayOf(pt.shape(UserPropType)),
  }).isRequired,
  wrapWithBlock: pt.bool,
  currentUser: pt.shape(UserPropType).isRequired,
};

FriendsList.defaultProps = {
  wrapWithBlock: false,
};

export default FriendsList;
