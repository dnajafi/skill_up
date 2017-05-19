import React from 'react';
import SkillsContainer from './skills_container';
import InterestContainer from './interest_container';
import ProfileContainer from './profile_container';

export default class parentContainer extends React.Component {
    render() {
        return (
            <div>
                <ProfileContainer />
                <SkillsContainer />
                <InterestContainer />
            </div>
        );
    }
}



// export default class parentContainer extends React.Component {
//     render() {
//         return (
//             <div>
//                 <ProfileContainer />
//                 <SkillsContainer />
//                 <InterestContainer />
//             </div>
//         );
//     }
// }
