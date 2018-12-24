import { connect } from 'react-redux';

import ColleaguesList from './component';

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(ColleaguesList);
