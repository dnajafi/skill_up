import React from 'react';
import InterestContainer from './interest_container';
import ProfileContainer from './profile_container';

export default class parentContainer extends React.Component {
    render() {
        return (
            <div>
                <ProfileContainer />
                <InterestContainer />
            </div>
        );
    }
}
