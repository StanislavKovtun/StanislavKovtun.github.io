import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS";

let initialState = {
  posts: [
    { id: 1, message: "Good morning!", likesCount: 12 },
    { id: 2, message: "How are you?", likesCount: 20 },
    { id: 3, message: "I'm fine, and you?", likesCount: 6 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  let stateCopy;

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText, //##
        likesCount: 12,
      };
      stateCopy = {
        ...state,
        newPostText: "",
        posts: [...state.posts, newPost],
      };
      return stateCopy;
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case SAVE_PHOTO_SUCCESS: {
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    }
    default:
      return state;
  }
};

//thunk
export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

//thunk
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

//thunk
export const updateStatus = (status) => async (dispatch) => {
  try {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  } catch (error) {
    console.log(error);
  }
};

//thunk
export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

// //thunk
// export const saveProfile = (profile) => async (dispatch) => {
//   let response = await profileAPI.saveProfile(profile);
//   if (response.data.resultCode === 0) {
//     // dispatch(savePhotoSuccess(response.data.data.photos));
//   }
// };

//thunk
export const saveProfile = (formData, setStatus, setSubmitting, goToViewMode) => async (dispatch, getState) => {

  // const userId2 = getState().auth.userId;
  // debugger
  const response = await profileAPI.saveProfile(formData);

  let resultCode = response.data.resultCode;

  if (resultCode === 0) {
    debugger
    const userId = getState().auth.userId;
    goToViewMode();
    dispatch(getUserProfile(userId));
  } else {

    let textError = `resultCode: ${resultCode} - ${response.data.messages.join(', ')}`;
    setStatus(textError);
    setSubmitting(false);
  }

};

export default profileReducer;

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export const deletePost = (postId) => ({ type: DELETE_POST, postId });
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
const setStatus = (status) => ({ type: SET_STATUS, status });
const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });
