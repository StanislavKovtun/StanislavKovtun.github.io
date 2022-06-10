import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css';
import { updateNewPostText, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import { addPostActionCreator } from './../../../redux/profile-reducer';

const MyPosts = (props) => {

    let postsElements = props.posts.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount} id={p.id} />);
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        debugger;
        let text = newPostElement.current.value;
        let action = props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
            </div>
            <div>
                <button onClick={ onAddPost }>Add</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;