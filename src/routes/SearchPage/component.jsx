import React from 'react';
import pt from 'prop-types';
import { withStyles } from '@material-ui/core';

import BasicLayout from '../../components/layout/BasicLayout';
import Page from '../../components/blocks/Page';
import UserSearchResults from '../../components/blocks/UserSearchResults';
import { findUsersByNameOrProfession } from '../../helpers/users';
import { UserPropType } from '../../propTypes';

const styles = theme => ({
  page: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
});

class UserPage extends React.Component {
  filterUsersByQuery() {
    const {
      users,
      match: { params: { query } },
    } = this.props;

    return findUsersByNameOrProfession(users.data, query);
  }

  render() {
    const { classes } = this.props;

    return (
      <BasicLayout>
        <Page className={classes.page}>
          <UserSearchResults users={this.filterUsersByQuery()} />
        </Page>
      </BasicLayout>
    );
  }
}

UserPage.propTypes = {
  classes: pt.shape({}).isRequired,
  users: pt.shape({
    data: pt.arrayOf(pt.shape(UserPropType)),
  }).isRequired,
  match: pt.shape({
    params: pt.shape({
      query: pt.string,
    }).isRequired,
  }).isRequired,
};

export default withStyles(styles)(UserPage);
