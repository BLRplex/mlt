import { connect } from 'react-redux';

import { filterValues } from '@/actions/filters';
import UserFilters from './component';

const mapStateToProps = state => ({
  professions: state.professions.list,
  hairColors: state.hairColors.list,
});

const mapDispatchToProps = dispatch => ({
  onFilterValues: (
    filterName,
    filterValue,
    requestResetPagination,
  ) => dispatch(filterValues(filterName, filterValue, requestResetPagination)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserFilters);
