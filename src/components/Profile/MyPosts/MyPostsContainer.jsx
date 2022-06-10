import React from "react";
// import Post from "./Post/Post";
// import s from './MyPosts.module.css';
// import { updateNewPostText, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
// import { addPostActionCreator } from './../../../redux/profile-reducer';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    // let postsElements = props.posts.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount} id={p.id} />);
    // let newPostElement = React.createRef();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        debugger;
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (<MyPosts 
        updateNewPostText={onPostChange} 
        addPost={addPost} 
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText} />);
}

export default MyPostsContainer;