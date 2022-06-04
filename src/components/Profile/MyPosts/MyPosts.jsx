import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div className={s.posts}>
                <Post message='Do you have a motorbike?' likesCount='23'/>
                <Post message='Yes, I have Ducatti Panigali V4. And you?' likesCount='50'/>
            </div>
        </div>
    );
}

export default MyPosts;