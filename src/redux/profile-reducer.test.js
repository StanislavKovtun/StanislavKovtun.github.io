// // import { render, screen } from '@testing-library/react';
// import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

// let state = {
//     posts: [
//         { id: 1, message: 'Good morning!', likesCount: 12 },
//         { id: 2, message: 'How are you?', likesCount: 20 },
//         { id: 3, message: "I'm fine, and you?", likesCount: 6 }
//     ]
// };

// test('length of post should be incremented', () => {
    
//     //1. Test data
//     let newPostText = "new post text";
//     let action = addPostActionCreator(newPostText);
//     // let action = { type: "ADD-POST", newPostText};

//     //2. Action
//     let newState = profileReducer(state, action);

//     //3. Expectation
//     expect(newState.posts.length).toBe(4); 
//     //expect(5-1).toBe(4); 

//   });

//   test('text of new post should be new post text', () => {
    
//     //1. Test data
//     let newPostText = "new post text";
//     let action = addPostActionCreator(newPostText);

//     //2. Action
//     let newState = profileReducer(state, action);

//     //3. Expectation
//     let lastIndex = newState.posts.length > 0 ? newState.posts.length-1 : 0;
//     expect(newState.posts[lastIndex].message).toBe(newPostText); 

//   });

//   test('after deleting length of message should be decrement', () => {
    
//     //1. Test data
//     let postId = 3;
//     let action = deletePost(postId);

//     //2. Action
//     let newState = profileReducer(state, action);

//     //3. Expectation
//     expect(newState.posts.length).toBe(2); 

//   });