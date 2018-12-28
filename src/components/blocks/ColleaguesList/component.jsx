import React from 'react';
import pt from 'prop-types';

import { Typography } from '@material-ui/core';

import AvatarsQueue from '@/components/blocks/AvatarsQueue';
import Block from '@/components/blocks/Block';
import { UserPropType } from '@/propTypes';
import { extractColleagues } from '@/helpers/users';
import { MAX_ITEMS_IN_SHORT_LIST } from '@/constants';

/**
 * Component that displays list of colleagues.
 * @param {object} props.users Redux-store pointer to users.
 * @param {string[]} props.professions Array of professions.
 * Used for extracting users with similar professions.
 * @param {boolean} props.wrapWithBlock Boolean flag that used for wrapping
 * component with Material-UI Paper component.
 */
const ColleaguesList = ({ users, professions, wrapWithBlock }) => {
  const colleagues = extractColleagues(users.data, professions);

  if (colleagues.length === 0) {
    return (null);
  }

  const component = (
    <div>
      <Typography variant="h5">Colleagues</Typography>
      <AvatarsQueue users={colleagues} limit={MAX_ITEMS_IN_SHORT_LIST} />
    </div>
  );

  return wrapWithBlock
    ? <Block>{component}</Block>
    : component;
};

ColleaguesList.propTypes = {
  professions: pt.arrayOf(pt.string).isRequired,
  users: pt.shape({
    data: pt.arrayOf(pt.shape(UserPropType)),
  }).isRequired,
  wrapWithBlock: pt.bool,
};

ColleaguesList.defaultProps = {
  wrapWithBlock: false,
};

export default ColleaguesList;
