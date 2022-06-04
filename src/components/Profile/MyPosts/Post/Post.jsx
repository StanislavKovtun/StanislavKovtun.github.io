import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    // debugger;
    return (
        <div className={s.item}>
            <img src="https://media.istockphoto.com/photos/motorcycle-helmet-picture-id178619117?k=20&m=178619117&s=612x612&w=0&h=fyD394lR0s6pJrn5f0IQPYe1s1pazkjpBB7ClL5U1nE=" />
            {props.message}
            <div>
                <span>like</span>
                <span>{props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;