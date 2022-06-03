import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div className={s.posts}>
                <Post message='Do you have a motorbike?'/>
                <Post message='Yes, I have Ducatti Panigali V4. And you?'/>
            </div>
        </div>
    );
}

export default MyPosts;