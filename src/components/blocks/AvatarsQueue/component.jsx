import React from 'react';
import pt from 'prop-types';
import { Link } from 'react-router-dom';

import { Avatar, Typography, withStyles } from '@material-ui/core';

import { UserPropType } from '@/propTypes';
import { USER_PAGE, MAX_ITEMS_IN_SHORT_LIST } from '@/constants';

import styles from './styles';

/**
 * Component that displays chain of avatars. Supports lazy loading.
 */
class AvatarsQueue extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: MAX_ITEMS_IN_SHORT_LIST,
    };

    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  /**
   * Initial limitation for implementing lazy loading feature.
   */
  limitUsers() {
    const { limit } = this.state;
    const { users } = this.props;

    return users.slice(0, limit);
  }

  /**
   * Triggers when user clicks "Load more" button.
   */
  handleLoadMore() {
    this.setState(prevState => ({
      limit: prevState.limit + MAX_ITEMS_IN_SHORT_LIST,
    }));
  }

  /**
   * Renders "Loader" button.
   */
  renderLoader() {
    const { limit } = this.state;
    const { users, classes } = this.props;

    if (users.length > limit) {
      return (
        <span
          role="button"
          tabIndex={-1}
          className={classes.avatarWrapper}
          onClick={this.handleLoadMore}
        >
          <Avatar className={classes.avatar}>...</Avatar>
          <Typography
            paragraph={false}
            variant="caption"
            data-testid="show-more"
          >
            Show more
          </Typography>
        </span>
      );
    }

    return (null);
  }

  /**
   * Component render method
   */
  render() {
    const { users, classes } = this.props;

    if (!users || users.length === 0) {
      return (null);
    }

    return (
      <div className={classes.root}>
        {
          this
            .limitUsers()
            .map(user => (
              <Link
                key={`friend-avatar-${user.id}`}
                className={classes.avatarWrapper}
                to={USER_PAGE.replace(':userId', user.id)}
              >
                <Avatar
                  key={`avatar-${user.id}`}
                  className={classes.avatar}
                  alt={`${user.name}`}
                  src={user.thumbnail}
                />
                <Typography paragraph={false} variant="caption">{user.name.split(' ')[0]}</Typography>
              </Link>
            ))
        }
        {this.renderLoader()}
      </div>
    );
  }
}

AvatarsQueue.propTypes = {
  users: pt.arrayOf(pt.shape(UserPropType)).isRequired,
  classes: pt.shape({}).isRequired,
};

export default withStyles(styles)(AvatarsQueue);
