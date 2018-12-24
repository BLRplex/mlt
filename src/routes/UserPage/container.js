import { connect } from 'react-redux';

import UserPage from './component';

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(UserPage);
