import React from 'react';
import pt from 'prop-types';
import {
  withStyles,
  Avatar,
  Typography,
  Button,
} from '@material-ui/core';

import BasicLayout from '../../components/layout/BasicLayout';
import Page from '../../components/blocks/Page';
import FriendsList from '../../components/blocks/FriendsList';
import ProfileDetails from '../../components/blocks/ProfileDetails';
import ProfessionsList from '../../components/blocks/ProfessionsList';
import ColleaguesList from '../../components/blocks/ColleaguesList';
import { UserPropType } from '../../propTypes';

const styles = theme => ({
  page: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  avatar: {
    margin: theme.spacing.unit / 2,
    width: 240,
    height: 240,
  },
  avatarSection: {
    marginRight: theme.spacing.unit * 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing.unit * 4,
    },
  },
  buttons: {
    marginTop: theme.spacing.unit * 2,
    textAlign: 'center',
    '& button': {
      marginRight: theme.spacing.unit,
      '&:last-child': {
        marginRight: 0,
      },
    },
  },
});

class UserPage extends React.Component {
  constructor(props) {
    super(props);

    this.extractUserData = this.extractUserData.bind(this);
  }

  extractUserData() {
    const {
      users,
      match: { params: { userId } },
    } = this.props;

    // React router stores router params as strings, need converting to number
    return users.data.find(user => user.id === parseInt(userId, 10));
  }

  render() {
    const { users, classes } = this.props;

    const currentUser = this.extractUserData();

    if (!currentUser) {
      return (null);
    }

    return (
      <BasicLayout>
        <Page className={classes.page}>
          <section className={classes.avatarSection}>
            <Avatar
              alt={currentUser.name}
              src={currentUser.thumbnail}
              className={classes.avatar}
            />
            <div className={classes.buttons}>
              <Button variant="contained" color="primary">Edit</Button>
              <Button variant="contained" color="secondary">Settings</Button>
            </div>
          </section>
          <section className="profile-section">
            <div className="block">
              <Typography variant="h4">{currentUser.name}</Typography>
              <hr />
              <ProfileDetails user={currentUser} />
            </div>

            <FriendsList users={users.data} currentUser={currentUser} wrapWithBlock />
            <ProfessionsList professions={currentUser.professions} wrapWithBlock />
            <ColleaguesList
              users={users.data}
              professions={currentUser.professions}
              wrapWithBlock
            />
          </section>
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
