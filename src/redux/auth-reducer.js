import { authAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

//thunk
export const getAuthUserData = () => (dispatch) => {
  authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(setAuthUserData(id, login, email, true));
    }
  });
};

//thunk
export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    }
  });
};

//thunk
export const logout = () => (dispatch) => {
  debugger
  authAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

export default authReducer;
