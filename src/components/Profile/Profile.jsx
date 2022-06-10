import React from "react";
// import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

//https://images.unsplash.com/photo-1580341567260-3569b4dc537a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGVsbWV0fGVufDB8fDB8fA%3D%3D&w=1000&q=80
//https://www.shoei-europe.com/wp-content/uploads/2020/09/Menue-Products-Glamster-1.png

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;