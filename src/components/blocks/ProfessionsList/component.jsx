import React from 'react';
import { Link } from 'react-router-dom';
import pt from 'prop-types';

import { withStyles, Typography } from '@material-ui/core';

import Block from '@/components/blocks/Block';
import { SEARCH_PAGE } from '@/constants';

import styles from './styles';

/**
 * Component that displays list of professions.
 * @param {string[]} props.professions Array of professions.
 * @param {boolean} props.wrapWithBlock Boolean flag that used for wrapping
 * component with Material-UI Paper component.
 * @param {object} props.classes Classes object.
 */
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
            key={`profession-${profession.replace(/\s/, '')}`}
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
