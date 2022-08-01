import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";
const GET_CAPTHA_URL_SUCCESS = "GET-CAPTHA-URL-SUCCESS";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTHA_URL_SUCCESS:
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

export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTHA_URL_SUCCESS,
  payload: { captchaUrl }
});

//thunk
export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
  // try {
  //   let response = await authAPI.me();
  //   if (response.data.resultCode === 0) {
  //     let { id, login, email } = response.data.data;
  //     dispatch(setAuthUserData(id, login, email, true));
  //   }
  // } catch (error) {
  //   console.log(error.response.status);
  //   console.log(error);
  // }
};

//thunk
// export const login = (email, password, rememberMe, setStatus, setSubmitting) => (dispatch) => {//##
export const login = (email, password, rememberMe, captcha, setStatus) => async (dispatch) => {
  //##
  let response = await authAPI.login(email, password, rememberMe, captcha);
  // debugger
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl());//##
    }
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

//thunk
export const getCaptchaUrl = () => async (dispatch) => {
  // debugger
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));//##
};
export default authReducer;
