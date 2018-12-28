import React from 'react';
import pt from 'prop-types';
import { Formik } from 'formik';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { Button, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';

import { SEARCH_PAGE } from '@/constants';

const styles = theme => ({
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
});

class QuickSearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch({ search }) {
    const { history } = this.props;

    history.push(SEARCH_PAGE.replace(':query', search));
  }

  render() {
    const {
      match: { params: { query } },
      classes,
    } = this.props;

    return (
      <Formik
        initialValues={{ search: query }}
        onSubmit={this.handleSearch}
      >
        {({
          values,
          isSubmitting,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className={classes.inputWrapper}>
              <InputBase
                color="inherit"
                name="search"
                placeholder="Type everything you want"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.search}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
              <Button
                color="inherit"
                type="submit"
                disabled={isSubmitting}
              >
                <SearchIcon />
              </Button>
            </div>
          </form>
        )}
      </Formik>
    );
  }
}

QuickSearchForm.propTypes = {
  classes: pt.shape({}).isRequired,
  match: pt.shape({
    params: pt.shape({
      query: pt.string,
    }).isRequired,
  }).isRequired,
  history: pt.shape({
    push: pt.func.isRequired,
  }).isRequired,
};

export default compose(
  withStyles(styles),
  withRouter,
)(QuickSearchForm);
