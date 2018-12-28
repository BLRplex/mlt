/* global window */
import React from 'react';
import pt from 'prop-types';

import { GridList, withStyles } from '@material-ui/core';

import UserTile from '@/components/blocks/UserTile';
import { UserPropType } from '@/propTypes';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit,
  },
});

const UserTilesGrid = ({ data, classes }) => {
  const cols = (window.innerWidth > 600) ? 3 : 2;

  return (
    <div className={classes.root}>
      <GridList cellHeight={240} className={classes.gridList} cols={cols}>
        {data.map(element => (<UserTile key={`tile-${element.id}`} data={element} />))}
      </GridList>
    </div>
  );
};

UserTilesGrid.propTypes = {
  data: pt.arrayOf(pt.shape(UserPropType)).isRequired,
  classes: pt.shape({}).isRequired,
};

export default withStyles(styles)(UserTilesGrid);
