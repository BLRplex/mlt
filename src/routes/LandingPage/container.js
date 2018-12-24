import { connect } from 'react-redux';

import { filterValues } from '../../actions/filters';
import LandingPage from './component';

const mapStateToProps = state => ({
  users: state.users,
  filters: state.filters,
});

const mapDispatchToProps = dispatch => ({
  onFilterValues: (filterName, filterValue) => dispatch(filterValues(filterName, filterValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
