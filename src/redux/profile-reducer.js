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

    let stateCopy;

    switch (action.type) {
    
        case 'ADD-POST':{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 12
            };
            stateCopy = {...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            };
            // stateCopy.posts = [...state.posts];
            // stateCopy.posts.push(newPost);
            // stateCopy.newPostText = '';
            return stateCopy;
        }  
        case 'UPDATE-NEW-POST-TEXT': {
            stateCopy = {...state,
            newPostText: action.newText};
            // stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
        }
}
export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>({type: UPDATE_NEW_POST_TEXT, newText: text})
