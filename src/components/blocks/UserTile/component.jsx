import React from 'react';
import pt from 'prop-types';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import { InfoRounded } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import { UserPropType } from '../../../propTypes';
import { USER_PAGE } from '../../../constants';

const styles = theme => ({
  tile: {
    cursor: 'pointer',
    '&>div': {
      borderRadius: theme.spacing.unit,
    },
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

class Tile extends React.Component {
  constructor(props) {
    super(props);

    this.handleTileClick = this.handleTileClick.bind(this);
  }

  handleTileClick() {
    const {
      history,
      data: { id },
    } = this.props;

    history.push(history.push(USER_PAGE.replace(':userId', id)));
  }

  render() {
    const {
      data: {
        thumbnail,
        age,
        friends,
        name,
      },
      classes,
      staticContext,
      ...other
    } = this.props;

    return (
      <GridListTile
        className={classes.tile}
        key={thumbnail}
        onClick={this.handleTileClick}
        {...other}
      >
        <img
          src={thumbnail}
          alt={name}
        />
        <GridListTileBar
          title={name}
          subtitle={`${age} yrs, ${friends.length} friends`}
          titlePosition="bottom"
          actionIcon={(
            <IconButton className={classes.icon}>
              <InfoRounded />
            </IconButton>
          )}
        />
      </GridListTile>
    );
  }
}

Tile.propTypes = {
  data: pt.shape(UserPropType).isRequired,
};

export default compose(
  withRouter,
  withStyles(styles),
)(Tile);
