import { connect } from 'react-redux';
import Interest from '../components/interest.jsx';
import { getInterest } from '../actions/get_interest';


function mapStateToProps(state) {
	console.log(state);
  return {
    interest: state.interested
  };
}

function mapDispatchToProps(dispatch) {
  return {
  	onGetInterest: () => dispatch(getInterest())
  };
}

const interestContainer = connect(mapStateToProps, mapDispatchToProps)(Interest);

export default interestContainer;