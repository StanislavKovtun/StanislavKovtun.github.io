import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css';
import { updateNewPostText, updateNewPostTextActionCreator } from "../../../redux/state";
import { addPostActionCreator } from './../../../redux/state';

const MyPosts = (props) => {

    let postsElements = props.posts.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount} id={p.id} />);
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
      };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} name="" id="" cols="40" rows="5" value={props.newPostText}></textarea>
            </div>
            <div>
                <button onClick={ addPost }>Add</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;