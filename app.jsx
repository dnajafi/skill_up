import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import InterestContainer from './containers/interest_container';
import ProfileContainer from './containers/profile_container'
import store from './store/store';
import "./stylesheets/main.scss";

const main = (
  <Provider store={store}>
  	<ProfileContainer />
  </Provider>
);

ReactDOM.render(main, document.getElementById('container'));

// const main = (
//   <Provider store={store}>
//   	<InterestContainer />
//   </Provider>
// );
