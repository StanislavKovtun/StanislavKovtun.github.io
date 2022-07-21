import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import AddPostForm from "./AddPostForm";

const MyPosts = React.memo((props) => {
  console.log("Render");

  let postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} id={p.id} />
  ));
  let onAddPost = (values) => {
    props.addPost(values);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddPostForm onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
