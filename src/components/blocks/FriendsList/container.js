import { connect } from 'react-redux';

import FriendsList from './component';

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(FriendsList);
