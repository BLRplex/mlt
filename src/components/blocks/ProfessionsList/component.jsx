import React from 'react';
import { Link } from 'react-router-dom';
import pt from 'prop-types';

import { withStyles, Typography } from '@material-ui/core';

import Block from '../Block';
import { SEARCH_PAGE } from '../../../constants';

const styles = theme => ({
  linksContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  link: {
    marginRight: theme.spacing.unit,
    textDecoration: 'none',
    color: theme.palette.action.active,
  },
});

const ProfessionsList = ({ professions, wrapWithBlock, classes }) => {
  if (professions.length === 0) {
    return (null);
  }

  const component = (
    <div className={classes.root}>
      <Typography variant="h5">Professions</Typography>
      <div className={classes.linksContainer}>
        {professions.map(profession => (
          <Link
            className={classes.link}
            key={`profession-${profession}`}
            to={SEARCH_PAGE.replace(':query', profession)}
          >
            {profession.trim()}
          </Link>
        ))}
      </div>
    </div>
  );

  return wrapWithBlock
    ? <Block>{component}</Block>
    : component;
};

ProfessionsList.propTypes = {
  professions: pt.arrayOf(pt.string),
  wrapWithBlock: pt.bool,
  classes: pt.shape({}).isRequired,
};

ProfessionsList.defaultProps = {
  professions: [],
  wrapWithBlock: false,
};

export default withStyles(styles)(ProfessionsList);
