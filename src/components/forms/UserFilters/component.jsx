import React from 'react';
import { Formik } from 'formik';
import pt from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Input,
} from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  formControl: {
    minWidth: 120,
    marginRight: theme.spacing.unit * 4,
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  slider: {
    marginTop: 23,
  },
});

class UserFilters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterName: '',
      filterHairColors: [],
      filterProfessions: [],
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(event) {
    const { onFilterValues } = this.props;
    const { name, value } = event.target;

    this.setState({ [name]: value }, () => {
      onFilterValues(name, value, true);
    });
  }

  render() {
    const { filterName, filterHairColors, filterProfessions } = this.state;
    const { professions, hairColors, classes } = this.props;

    return (
      <Formik
        initialValues={{
          name: filterName,
          hairColors: filterHairColors,
          professions: filterProfessions,
        }}
      >
        {({
          handleSubmit,
          handleBlur,
        }) => (
          <form onSubmit={handleSubmit} className={classes.root}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input
                color="inherit"
                name="filterName"
                onChange={this.handleFilterChange}
                onBlur={handleBlur}
                value={filterName}
              />
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="hairColors">Hair</InputLabel>
              <Select
                color="inherit"
                inputProps={{
                  name: 'filterHairColors',
                  id: 'hairColors',
                }}
                multiple
                onChange={this.handleFilterChange}
                onBlur={handleBlur}
                value={filterHairColors}
              >
                {hairColors.map(hairColor => (
                  <MenuItem value={hairColor} key={`hair-color-${hairColor}`}>{hairColor}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="professions">Profession</InputLabel>
              <Select
                color="inherit"
                inputProps={{
                  name: 'filterProfessions',
                  id: 'professions',
                }}
                multiple
                onChange={this.handleFilterChange}
                onBlur={handleBlur}
                value={filterProfessions}
              >
                {professions.map(profession => (
                  <MenuItem value={profession} key={`profession-${profession}`}>{profession}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </form>
        )}
      </Formik>
    );
  }
}

UserFilters.propTypes = {
  professions: pt.arrayOf(pt.string).isRequired,
  hairColors: pt.arrayOf(pt.string).isRequired,
  onFilterValues: pt.func.isRequired,
  classes: pt.shape({}).isRequired,
};

export default withStyles(styles)(UserFilters);
