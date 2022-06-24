import React from "react";
import Profile from "./Profile";
// import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { usersAPI } from './../../api/api';

class ProfileContainer extends React.Component {

    componentDidMount() {
        // debugger;
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2;
        }
              //axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
              usersAPI.getProfile(userId)
              .then(data => {
                this.props.setUserProfile(data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

let withUrlDataContainerComponent = withRouter(ProfileContainer);

// export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
export default connect(mapStateToProps, { setUserProfile })(withUrlDataContainerComponent);