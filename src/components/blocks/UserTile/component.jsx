import React from 'react';
import pt from 'prop-types';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import {
  GridListTile,
  GridListTileBar,
  IconButton,
  Popover,
} from '@material-ui/core';
import { InfoRounded } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import { UserPropType } from '@/propTypes';
import { USER_PAGE } from '@/constants';

import styles from './styles';

/**
 * Component that displays single tile with user avatar, age and friends amount.
 */
class Tile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popoverAnchorElement: null,
    };

    this.handleTileClick = this.handleTileClick.bind(this);
    this.handleShowPopover = this.handleShowPopover.bind(this);
    this.handleClosePopover = this.handleClosePopover.bind(this);
  }

  /**
   * Runs when user clicks tile.
   */
  handleTileClick() {
    const {
      history,
      data: { id },
    } = this.props;

    history.push(USER_PAGE.replace(':userId', id));
  }

  /**
   * Runs when user clicks info icon.
   * @param {object} event Mouse event.
   */
  handleShowPopover(event) {
    event.stopPropagation();

    this.setState({ popoverAnchorElement: event.currentTarget });
  }

  /**
   * Runs when user closes info icon.
   * @param {object} event Mouse event.
   */
  handleClosePopover(event) {
    event.stopPropagation();

    this.setState({ popoverAnchorElement: null });
  }

  /**
   * Component render method.
   */
  render() {
    const { popoverAnchorElement } = this.state;
    const {
      data: {
        id,
        thumbnail,
        age,
        friends,
        name,
      },
      classes,
      staticContext,
      ...other
    } = this.props;

    const showPopover = Boolean(popoverAnchorElement);
    const popoverId = `user-${id}-popover`;

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
            <IconButton
              className={classes.icon}
              aria-owns={showPopover ? popoverId : undefined}
              aria-haspopup="true"
              variant="contained"
              onClick={this.handleShowPopover}
            >
              <InfoRounded />
            </IconButton>
          )}
        />
        <Popover
          id={popoverId}
          open={showPopover}
          anchorEl={popoverAnchorElement}
          onClose={this.handleClosePopover}
        >
          <div
            role="button"
            tabIndex={0}
            className={classes.popover}
            onClick={this.handleClosePopover}
          >
            {name}
          </div>
        </Popover>
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
