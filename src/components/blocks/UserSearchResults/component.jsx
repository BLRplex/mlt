import React from 'react';
import pt from 'prop-types';

import { withStyles, List, Button } from '@material-ui/core';

import UserSearchItem from '../UserSearchItem';
import { UserPropType } from '../../../propTypes';
import { MAX_ITEMS_IN_SHORT_LIST } from '../../../constants';

const styles = () => ({
  list: {
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
    textAlign: 'center',
  },
});

class UserSearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: MAX_ITEMS_IN_SHORT_LIST,
    };

    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  limitUsers() {
    const { limit } = this.state;
    const { users } = this.props;

    return users.slice(0, limit);
  }

  handleLoadMore() {
    this.setState(prevState => ({
      limit: prevState.limit + MAX_ITEMS_IN_SHORT_LIST,
    }));
  }

  renderLoader() {
    const { limit } = this.state;
    const { users, classes } = this.props;

    if (users.length > limit) {
      return (
        <div className={classes.buttonContainer}>
          <Button variant="outlined" onClick={this.handleLoadMore}>Show more...</Button>
        </div>
      );
    }

    return (null);
  }

  render() {
    const { users, classes } = this.props;

    if (!users || users.length === 0) {
      return (null);
    }

    return (
      <List className={classes.list}>
        {this.limitUsers().map(user => <UserSearchItem user={user} key={`user-search-result-${user.name}`} />)}
        {this.renderLoader()}
      </List>
    );
  }
}

UserSearchResults.propTypes = {
  users: pt.arrayOf(pt.shape(UserPropType)).isRequired,
  classes: pt.shape({}).isRequired,
};

export default withStyles(styles)(UserSearchResults);
