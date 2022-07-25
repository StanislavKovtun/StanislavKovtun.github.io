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
        ...action.payload,
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
export const getAuthUserData = () => async (dispatch) => {
  // return authAPI.me().then((response) => {
  //   if (response.data.resultCode === 0) {
  //     let { id, login, email } = response.data.data;
  //     dispatch(setAuthUserData(id, login, email, true));
  //   }
  // });
  console.log("getAuthUserData");
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};

//thunk
// export const login = (email, password, rememberMe, setStatus, setSubmitting) => (dispatch) => {//##
export const login = (email, password, rememberMe, setStatus) => async (dispatch) => {
  //##
  let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      setStatus(response.data.messages); // - сюда приходит то сообщение которое соответствует ошибке//##
      //setSubmitting(false);
    }
};

//thunk
export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
};

export default authReducer;
