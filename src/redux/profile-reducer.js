const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        { id: 1, message: 'Good morning!', likesCount: 12 },
        { id: 2, message: 'How are you?', likesCount: 20 },
        { id: 3, message: "I'm fine, and you?", likesCount: 6 }
    ],
    newPostText: 'new text for new post',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
    
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 12
            };
            stateCopy = {...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            };
            return stateCopy;
        }  
        case UPDATE_NEW_POST_TEXT: {
            stateCopy = {...state,
            newPostText: action.newText};
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            stateCopy = {...state, profile: action.profile}
            return stateCopy;
        }
        default:
            return state;
        }
}
export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) =>({type: SET_USER_PROFILE, profile})
