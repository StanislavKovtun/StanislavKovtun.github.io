import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css';

const MyPosts = (props) => {

    let postsElements = props.posts.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount} id={p.id} />);
    let newPostElement = React.createRef();

    let addPost = () => {
        debugger;
        let text = newPostElement.current.value;
        props.addPost(text);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement} name="" id="" cols="40" rows="5"></textarea>
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