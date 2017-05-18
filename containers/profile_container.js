import { connect } from 'react-redux';
import Profile from '../components/profile.jsx';
import { getInterest } from '../actions/get_interest';


// take redux store state and returns the props (that are related to the redux store data) that you need to pass to the presentational component to render it with the current state
// these props get updated anytime the state changes
function mapStateToProps(state) {
  return {
    data: state.interested
  };
}

// accepts dispatch method from the store and returns the props that use the dispatch method to dispatch actions that should be passed to the component that depend on the dispatch method
// basically returns the callback props needed for the presentational component
function mapDispatchToProps(dispatch) {
  return {
  	onGetInterest: () => dispatch(getInterest())
  };
}

// generates the container component that renders the renders the presentational component
const profileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile); // pass the presentational component that you want to wrap and pass the props to

export default profileContainer;