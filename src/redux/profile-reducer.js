import { profileAPI, usersAPI } from "../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    posts: [
        { id: 1, message: 'Good morning!', likesCount: 12 },
        { id: 2, message: 'How are you?', likesCount: 20 },
        { id: 3, message: "I'm fine, and you?", likesCount: 6 }
    ],
    newPostText: 'new text for new post',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 12
            };
            stateCopy = {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            };
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            stateCopy = {
                ...state,
                newPostText: action.newText
            };
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            stateCopy = { ...state, profile: action.profile }
            return stateCopy;
        }
        case SET_STATUS: {
            stateCopy = { ...state, status: action.status }
            return stateCopy;
        }
        default:
            return state;
    }
}

export const getUserProfile = (userId) => { //thunk
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}

export const getStatus = (userId) => { //thunk
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            });
    }
}

export const updateStatus = (status) => { //thunk
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                    // dispatch(setStatus(response.data.status));
                }
            });
    }
}

export default profileReducer;

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
const setStatus = (status) => ({ type: SET_STATUS, status })
