import React from "react";
import Header from "./Header";
// import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from './../../redux/auth-reducer';
import { usersAPI } from './../../api/api';

class HeaderContainer extends React.Component {

    componentDidMount() {
        usersAPI.auth()
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //     withCredentials: true
        // })
            .then(data => {
                debugger
                if (data.resultCode === 0) {
                    let {id, login, email} = data;
                    this.props.setAuthUserData(id, login, email);
                }
            });
    }
    render() {
        return (
            <Header {...this.props} />
        );
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);