import { connect } from 'react-redux';
import Interest from '../components/interest.jsx';

function mapStateToProps(state) {
  return {
    invite: state.invite
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

const interestContainer = connect(mapStateToProps, mapDispatchToProps)(Interest);

export default interestContainer;