import { connect } from 'react-redux';
import Interest from '../components/interest.jsx';
import { getInterest } from '../actions/get_interest';


function mapStateToProps(state) {
  return {
    invite: state.invite
  };
}

function mapDispatchToProps(dispatch) {
  return {
  	onGetInterest: () => dispatch(getInterest())
  };
}

const interestContainer = connect(mapStateToProps, mapDispatchToProps)(Interest);

export default interestContainer;