import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css';

const MyPosts = (props) => {

    // let posts = [
    //     {id: 1, message: 'Good morning!', likesCount: 12},
    //     {id: 2, message: 'How are you?', likesCount: 20},
    //     {id: 3, message: "I'm fine, and you?", likesCount: 6}
    // ];

    // //let postsElements = posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>);
    // //let postsElements = posts.map((p) => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>);
    let postsElements = props.posts.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount} id={p.id} />);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea name="" id="" cols="40" rows="5"></textarea>
            </div>
            <div>
                <button>Add</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;