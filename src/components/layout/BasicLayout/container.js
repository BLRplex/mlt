import { connect } from 'react-redux';

import BasicLayout from './component';

const mapStateToProps = state => ({
  isLoading: state.users.isLoading,
});

export default connect(mapStateToProps)(BasicLayout);
