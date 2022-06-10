const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        { id: 1, message: 'Good morning!', likesCount: 12 },
        { id: 2, message: 'How are you?', likesCount: 20 },
        { id: 3, message: "I'm fine, and you?", likesCount: 6 }
    ],
    newPostText: 'new text for new post'
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 12
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;
        default:
            return state;
            return state;
    }
}
export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>({type: UPDATE_NEW_POST_TEXT, newText: text})
