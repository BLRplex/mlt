import React from 'react';
import { Link } from 'react-router-dom';
import pt from 'prop-types';
import {
  withStyles, Typography,
} from '@material-ui/core';

import BasicLayout from '@/components/layout/BasicLayout';
import Page from '@/components/blocks/Page';
import { LANDING_PAGE } from '@/constants';

const styles = theme => ({
  page: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: '20%',
    alignItems: 'center',
  },
  heading: {
    fontSize: theme.typography.fontSize * 1.8,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    borderBottom: `solid 1px ${theme.palette.primary.dark}`,
    textAlign: 'center',
  },
  returnBackLink: {
    color: theme.palette.primary.dark,
    fontSize: theme.typography.fontSize * 1.4,
    textDecoration: 'none',
  },
});

const NotFoundPage = ({ classes }) => (
  <BasicLayout>
    <Page className={classes.page}>
      <Typography variant="h1" className={classes.heading}>Sorry, requested page not found</Typography>
      <Link to={LANDING_PAGE} className={classes.returnBackLink}>Return to Landing page</Link>
    </Page>
  </BasicLayout>
);

NotFoundPage.propTypes = {
  classes: pt.shape({}).isRequired,
};

export default withStyles(styles)(NotFoundPage);
